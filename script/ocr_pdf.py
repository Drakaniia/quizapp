#!/usr/bin/env python
"""OCR PDF files in /files and save page-by-page markdown."""

from __future__ import annotations

import argparse
import os
import re
import tempfile
from pathlib import Path

import easyocr
import fitz

FILES_DIR = Path(__file__).resolve().parent.parent / "files"
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "output"


def slug_output_name(pdf_name: str) -> str:
    return re.sub(r"\.pdf$", ".ocr.md", pdf_name, flags=re.IGNORECASE)


def ocr_pdf(
    pdf_path: Path,
    output_path: Path,
    dpi_scale: float = 2.0,
    start_page: int = 1,
    end_page: int | None = None,
) -> None:
    reader = easyocr.Reader(["en"], gpu=False, verbose=False)
    doc = fitz.open(pdf_path)
    page_count = len(doc)
    last_page = min(end_page or page_count, page_count)

    with tempfile.TemporaryDirectory(prefix="quizapp-ocr-") as temp_dir:
        temp_path = Path(temp_dir)
        with output_path.open("w", encoding="utf-8") as output:
            for page_index in range(start_page, last_page + 1):
                page = doc[page_index - 1]
                pixmap = page.get_pixmap(
                    matrix=fitz.Matrix(dpi_scale, dpi_scale),
                    alpha=False,
                )
                image_path = temp_path / f"page-{page_index:03}.png"
                pixmap.save(image_path)

                lines = reader.readtext(str(image_path), detail=0, paragraph=True)
                text = "\n\n".join(line.strip() for line in lines if line.strip())
                if page_index > start_page:
                    output.write("\n\n---\n\n")
                output.write(f"<!-- Page {page_index} -->\n\n{text}")
                output.flush()
                print(f"  OCR page {page_index}/{page_count}", flush=True)

    doc.close()


def iter_pdf_files(target: str | None) -> list[Path]:
    if target:
        candidate = Path(target)
        if not candidate.is_absolute():
            candidate = FILES_DIR / candidate
        return [candidate]

    return sorted(FILES_DIR.glob("*.pdf"))


def main() -> None:
    parser = argparse.ArgumentParser(description="OCR image-heavy PDFs in /files.")
    parser.add_argument("pdf", nargs="?", help="Optional PDF filename or path.")
    parser.add_argument("--scale", type=float, default=2.0, help="Render scale for OCR.")
    parser.add_argument("--start-page", type=int, default=1, help="First page to OCR.")
    parser.add_argument("--end-page", type=int, help="Last page to OCR.")
    args = parser.parse_args()

    OUTPUT_DIR.mkdir(exist_ok=True)
    pdf_files = iter_pdf_files(args.pdf)

    if not pdf_files:
        print("No PDF files found in /files")
        return

    for pdf_path in pdf_files:
        if not pdf_path.exists():
            raise FileNotFoundError(pdf_path)

        print(f"OCR extracting: {pdf_path.name}")
        suffix = ""
        if args.start_page != 1 or args.end_page is not None:
            suffix = f".pages-{args.start_page}-{args.end_page or 'end'}"
        output_path = OUTPUT_DIR / slug_output_name(pdf_path.name).replace(
            ".ocr.md", f"{suffix}.ocr.md"
        )
        ocr_pdf(
            pdf_path,
            output_path,
            dpi_scale=args.scale,
            start_page=args.start_page,
            end_page=args.end_page,
        )
        print(f"  -> Saved to {output_path}")

    print(f"\nDone! OCR extracted {len(pdf_files)} PDF(s) to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
