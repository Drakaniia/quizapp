#!/usr/bin/env python
"""Extract text from PDF files in /files and save as markdown."""

import os
import fitz  # PyMuPDF

FILES_DIR = os.path.join(os.path.dirname(__file__), "..", "files")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "output")


def extract_pdf(pdf_path: str) -> str:
    doc = fitz.open(pdf_path)
    sections: list[str] = []

    for page_num, page in enumerate(doc, start=1):
        text = page.get_text("text")
        blocks = page.get_text("dict")["blocks"]

        # Extract headings by detecting larger font sizes
        heading_fonts: dict[str, float] = {}
        for block in blocks:
            if block.get("type") == 0:  # text block
                for line in block.get("lines", []):
                    for span in line.get("spans", []):
                        font_size = span.get("size", 0)
                        font_name = span.get("font", "")
                        heading_fonts[font_name] = max(
                            heading_fonts.get(font_name, 0), font_size
                        )

        # Determine threshold for headings (top 20% of font sizes)
        if heading_fonts:
            sorted_sizes = sorted(heading_fonts.values(), reverse=True)
            threshold = sorted_sizes[max(0, len(sorted_sizes) // 5)]
        else:
            threshold = 14

        # Rebuild text with markdown headings
        lines = text.split("\n")
        processed: list[str] = []
        current_heading: str | None = None

        for line in lines:
            stripped = line.strip()
            if not stripped:
                processed.append("")
                continue

            # Check if line matches a heading font size
            is_heading = False
            for block in blocks:
                if block.get("type") == 0:
                    for span_block in block.get("lines", []):
                        for span in span_block.get("spans", []):
                            span_text = span.get("text", "").strip()
                            if (
                                span_text
                                and stripped.startswith(span_text)
                                and span.get("size", 0) >= threshold
                            ):
                                is_heading = True
                                break
                        if is_heading:
                            break
                if is_heading:
                    break

            if is_heading:
                processed.append(f"## {stripped}")
            else:
                processed.append(stripped)

        sections.append(f"<!-- Page {page_num} -->\n\n" + "\n\n".join(processed))

    doc.close()
    return "\n\n---\n\n".join(sections)


def main() -> None:
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    pdf_files = [f for f in os.listdir(FILES_DIR) if f.endswith(".pdf")]

    if not pdf_files:
        print("No PDF files found in /files")
        return

    for pdf_file in sorted(pdf_files):
        pdf_path = os.path.join(FILES_DIR, pdf_file)
        print(f"Extracting: {pdf_file}")

        markdown = extract_pdf(pdf_path)

        output_name = pdf_file.replace(".pdf", ".md")
        output_path = os.path.join(OUTPUT_DIR, output_name)

        with open(output_path, "w", encoding="utf-8") as f:
            f.write(markdown)

        print(f"  -> Saved to {output_path}")

    print(f"\nDone! Extracted {len(pdf_files)} PDF(s) to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
