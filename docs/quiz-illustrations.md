# Quiz Illustration System — Two-Tier Graphics

Every quiz question can carry **either** an inline SVG diagram (`illustration`) **or** an interactive
3D molecular viewer (`molecularViewer`). The renderer in `CollegeQuiz.svelte` checks for
`molecularViewer` first, falls back to `illustration`. Never set both on the same question.

---

## Tier 1 — Interactive 3D Molecular Viewer (`molecularViewer`)

For any question about **molecular structure** (DNA, proteins, ligands, drug molecules), use a
real 3D viewer that loads atomic coordinates from the [RCSB Protein Data Bank](https://www.rcsb.org/).

### Type definition (`src/lib/collegeQuizTypes.ts`)

```ts
export interface MolecularViewerConfig {
  pdbId: string;                              // 4-character PDB ID (e.g. '1BNA', '1HBB')
  style?: 'cartoon' | 'stick' | 'sphere' | 'surface';
  colorScheme?: 'spectrum' | 'chain' | 'secondary' | 'amino';
  height?: number;                            // default 340
  autoRotate?: boolean;                       // default true
  highlights?: Array<{
    chain?: string;                           // chain identifier (A, B, C, D)
    resi?: number | number[];                 // residue number(s)
    color?: string;                           // any valid hex colour
    style?: 'stick' | 'sphere' | 'cartoon';   // highlight representation
  }>;
  title?: string;                             // shown in top-left overlay
}
```

### Component

Built in `src/lib/components/MolecularViewer.svelte` — client-side only, loads PDB from
`https://files.rcsb.org/download/{pdbId}.pdb` via `fetch`, renders with **3Dmol.js** (v2, WebGL).

### Examples in production

**DNA double helix** (`biologicalMacromoleculesQuizData.ts` — Q22):

```ts
molecularViewer: {
  pdbId: '1BNA',             // B-DNA dodecamer (CGCGAATTCGCG)
  title: 'B-DNA Double Helix (1BNA) — drag to rotate',
  style: 'cartoon',
  colorScheme: 'chain'       // strand A = one colour, strand B = another
}
```

**Hemoglobin** (`biologicalMacromoleculesQuizData.ts` — Q11):

```ts
molecularViewer: {
  pdbId: '1HBB',             // Human hemoglobin (4 chains)
  title: 'Hemoglobin (1HBB) — 4 globular subunits',
  style: 'cartoon',
  colorScheme: 'chain',
  highlights: [
    { chain: 'A', color: '#4ecdc4' },
    { chain: 'B', color: '#ff6b6b' },
    { chain: 'C', color: '#4ecdc4' },
    { chain: 'D', color: '#ff6b6b' }
  ]
}
```

### Rules for choosing PDB IDs

| Concept | PDB ID | Why |
|---------|--------|-----|
| B-DNA double helix | `1BNA` | Classic dodecamer, gold standard |
| A-DNA | `1D65` | Right-handed, wider form |
| Z-DNA | `1DCB` | Left-handed zigzag |
| RNA hairpin | `1F7Y` | Single-stranded with stem-loop |
| Hemoglobin (human) | `1HBB` | Wild-type, 4 chains |
| Sickle cell hemoglobin | `2HBS` | Glu6Val mutation |
| Collagen | `1BKV` | Triple helix |
| Amino acid (alanine) | `1LQW` | Simple side chain |
| ATP | `ATP` (ligand) | Energy molecule |

### Style guide

| `style` | Best for | Visual result |
|---------|----------|---------------|
| `cartoon` | Proteins, DNA secondary structure | Ribbon diagrams, helices & sheets |
| `stick` | Small molecules, ligands, active sites | Ball-and-stick with bond radii |
| `sphere` | Space-filling, molecular surfaces | CPK spheres at van der Waals radii |
| `surface` | Binding pockets, solvent accessibility | Transparent surface over cartoon |

| `colorScheme` | Visual |
|---------------|--------|
| `spectrum` | Rainbow from N→C terminus |
| `chain` | Each chain a distinct colour |
| `secondary` | Helix/sheet/loop by secondary structure |
| `amino` | By amino acid type (hydrophobic/polar/charged) |

---

## Tier 2 — Inline SVG Diagrams (`illustration`)

For conceptual diagrams (pathways, categories, comparisons, chemical structures) that don't need
3D interactivity, embed hand-crafted SVG strings. These render as raw HTML via `{@html ...}`.

### SVG template

Every quiz SVG **must** follow this exact structure:

```svg
<svg role="img" aria-label="Description of the diagram" viewBox="0 0 760 {height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgId" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1f1917"/>
      <stop offset="100%" stop-color="#171312"/>
    </linearGradient>
  </defs>
  <rect width="760" height="{height}" rx="8" fill="url(#bgId)"/>
  <text x="32" y="40" fill="{topic colour}" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">TITLE</text>
  <!-- … content … -->
</svg>
```

### Colour palette (strict — do not deviate)

| Token | Hex | Usage |
|-------|-----|-------|
| Background top | `#1f1917` | SVG gradient start |
| Background bottom | `#171312` | SVG gradient end |
| Panel fill | `#1f1917` | Card/box backgrounds |
| Panel border | `#ffffff15` or `#ffffff12` | Subtle outlines |
| Title text | `#f7f0e8` | White-ish |
| Body text | `#c4b8ad` | Warm grey |
| Muted text | `#888` | Dim grey |
| **Carbohydrates** | `#fcb045` | Gold — title & accents |
| **Proteins** | `#4ecdc4` | Teal — title & accents |
| **Lipids** | `#ff6b6b` | Red — title & accents |
| **Nucleic Acids** | `#a78bfa` | Purple — title & accents |
| Generic accent | `#ffffff20` | Subtle label / hash marks |

### Topic colour assignment

| Quiz topic | Accent colour | Monospace title colour |
|------------|---------------|----------------------|
| Carbohydrates | `#fcb045` (gold) | `#fcb045` |
| Proteins / Amino acids | `#4ecdc4` (teal) | `#4ecdc4` |
| Lipids / Fats | `#ff6b6b` (red) | `#ff6b6b` |
| Nucleic acids / DNA/RNA | `#a78bfa` (purple) | `#a78bfa` |

### Typography

- **Titles**: `font-family="monospace"` (JetBrains Mono in the app), `font-size="17"`,
  `font-weight="700"`, uppercase with `letter-spacing="1"`
- **Card labels / chemical formulae**: `font-family="monospace"`, `font-size="10–13"`
- **Explanatory body text**: `font-family="sans-serif"` (Outfit in the app), `font-size="10–11"`,
  colour `#c4b8ad`
- **Info / molecular formula / footnotes**: `font-family="monospace"`, `font-size="9"`, colour `#888`

### Dimension rules

- `viewBox="0 0 760 {height}"` always — exactly **760 px wide**
- Height: `260` (most diagrams), `280–300` (dense diagrams), `230–250` (compact)
- `rx="8"` on outer background and inner card rectangles
- Card padding inside a panel: ~`10–20 px`
- Title `x="32" y="40"` (32 px left margin, 40 px from top)

### Diagram types with real examples

**1. Comparison panels** (two side-by-side concepts)

→ `saturatedUnsaturatedIllustration` — saturated (gold) left, unsaturated (teal) right.
Each panel is a `<rect>` with `stroke` in its accent colour. Content inside uses the
panel's accent for primary visuals and `#c4b8ad` for descriptive text.

**2. Four-card grid** (four related items)

→ `macromoleculeCategoriesIllustration` — four equal `<rect>` cards (162×178 px),
each with a coloured circle initial, title, description lines, and a bottom formula line.

**3. Single chemical structure** (central atom with bonds)

→ `proteinStructureIllustration` — central `Cα` sphere, four bonds at ~109° to
NH₂ (gold), COOH (red), R group (purple), and H (white). Labels beneath each group.

→ `triglycerideIllustration` — glycerol backbone (3 carbons vertical) with ester
bonds branching to 3 fatty acid tails (zigzag chains). One tail unsaturated with
a marked cis double bond.

**4. Side-by-side with callouts**

→ `nucleicAcidIllustration` — left panel: DNA with two intertwined sinusoidal
backbone ribbons (thick + thin ghost), labelled base-pair bridges (`A=T`, `G≡C`).
Right panel: RNA single-stranded with a hairpin / stem-loop, showing uracil.

→ `hemoglobinIllustration` — left: normal RBC (circle with inner heme dot),
right: sickle RBC (crescent shape). Description text below each.

**5. Reaction / formation chain**

→ `sucroseFormationIllustration` — three-column: Glucose `+` Fructose `→` Sucrose,
each in a card with formula below.

### SVG upgrade checklist

When writing a new quiz SVG, check:

- [ ] Dark gradient background (`#1f1917` → `#171312`)
- [ ] `rx="8"` on main background rect
- [ ] Title in monospace, uppercase, correct topic colour, at `x="32" y="40"`
- [ ] Panels have `fill="#1f1917"` and `stroke="{accent}" stroke-width="1.5–2"`
- [ ] All hex colours match the palette above
- [ ] No JavaScript, no external CSS, no `@import`
- [ ] Backtick-safe: no raw `` `${ `` or unescaped backticks
- [ ] `role="img"` with descriptive `aria-label`
- [ ] At least 48 px readable at any quiz card width

### Example: minimal skeleton for a new diagram

```ts
const myIllustration = `
<svg role="img" aria-label="Descriptive label" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1f1917"/>
      <stop offset="100%" stop-color="#171312"/>
    </linearGradient>
  </defs>
  <rect width="760" height="260" rx="8" fill="url(#myBg)"/>
  <text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">MY TOPIC</text>
  <!-- cards go here -->
</svg>`;
```

---

## How to decide: Tier 1 vs Tier 2

| Question content | Use |
|-----------------|-----|
| "Describe the structure of X" (DNA, protein, ligand) | **Tier 1** — `molecularViewer` with a PDB ID |
| "Compare X and Y" (saturated vs unsaturated, DNA vs RNA) | **Tier 2** — side-by-side SVG panels |
| "Which pathway / category…" (lipid classes, carbohydrate types) | **Tier 2** — card grid SVG |
| "What is the chemical structure of X" (triglyceride, amino acid) | **Tier 2** — structural SVG |
| "Where does mutation Y affect the protein?" | **Tier 1** — `molecularViewer` with highlights on the mutated residues |
| "How does Z work metabolically?" (ketosis, atherosclerosis) | **Tier 2** — conceptual flow SVG |
| "What is the geometry of the double helix?" | **Tier 1** — `molecularViewer` + enhanced SVG for fallback |

---

## Adding a molecular viewer to a new quiz

1. Install dependency (one-time): `bun add 3dmol`
2. Import the component in the quiz page (already done for `CollegeQuiz.svelte`)
3. Add `molecularViewer` field to the `Question` object in the quiz data file
4. Optionally keep the `illustration` field for a static fallback SVG

```ts
{
  id: 42,
  question: '…',
  options: ['…', '…', '…', '…'],
  answer: '…',
  explanation: '…',
  difficulty: 'expert',
  illustration: myStaticFallbackSvg,   // shown while 3D loads (optional)
  molecularViewer: {
    pdbId: '1BNA',
    title: 'B-DNA Double Helix',
    style: 'cartoon',
    colorScheme: 'chain'
  }
}
```
