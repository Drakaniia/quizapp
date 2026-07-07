import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Four Macromolecule Classes ──────────────────────────────

const macromoleculeCategoriesIllustration = `
<svg role="img" aria-label="Four major biological macromolecules" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="mmBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<filter id="mmGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#mmBg)"/>
	<text x="32" y="42" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">FOUR MACROMOLECULE CLASSES</text>
	<!-- Carbs -->
	<rect x="34" y="72" width="162" height="178" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<circle cx="115" cy="116" r="22" fill="#fcb045" opacity="0.15"/>
	<text x="115" y="122" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="22" font-weight="700">C</text>
	<text x="115" y="155" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Carbohydrates</text>
	<line x1="60" y1="170" x2="170" y2="170" stroke="#ffffff15" stroke-width="1"/>
	<text x="115" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Main energy source</text>
	<text x="115" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Cell structure</text>
	<text x="115" y="236" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10">CH₂O building blocks</text>
	<!-- Proteins -->
	<rect x="210" y="72" width="162" height="178" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<circle cx="291" cy="116" r="22" fill="#4ecdc4" opacity="0.15"/>
	<text x="291" y="122" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="22" font-weight="700">P</text>
	<text x="291" y="155" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Proteins</text>
	<line x1="236" y1="170" x2="346" y2="170" stroke="#ffffff15" stroke-width="1"/>
	<text x="291" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Enzymes &amp; structure</text>
	<text x="291" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Collagen, keratin</text>
	<text x="291" y="236" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10">Amino acid chains</text>
	<!-- Lipids -->
	<rect x="386" y="72" width="162" height="178" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<circle cx="467" cy="116" r="22" fill="#ff6b6b" opacity="0.15"/>
	<text x="467" y="122" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="22" font-weight="700">L</text>
	<text x="467" y="155" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Lipids</text>
	<line x1="412" y1="170" x2="522" y2="170" stroke="#ffffff15" stroke-width="1"/>
	<text x="467" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Energy storage</text>
	<text x="467" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Cell membranes</text>
	<text x="467" y="236" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">Hydrophobic molecules</text>
	<!-- Nucleic Acids -->
	<rect x="562" y="72" width="162" height="178" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="2"/>
	<circle cx="643" cy="116" r="22" fill="#a78bfa" opacity="0.15"/>
	<text x="643" y="122" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="22" font-weight="700">N</text>
	<text x="643" y="155" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Nucleic Acids</text>
	<line x1="588" y1="170" x2="698" y2="170" stroke="#ffffff15" stroke-width="1"/>
	<text x="643" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Genetic information</text>
	<text x="643" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">DNA &amp; RNA</text>
	<text x="643" y="236" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10">Nucleotide polymers</text>
</svg>`;

// ── ILLUSTRATION: Carbohydrate Types ──────────────────────────────────────

const carbohydrateTypesIllustration = `
<svg role="img" aria-label="Three types of carbohydrates" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="cbBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="250" rx="8" fill="url(#cbBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">CARBOHYDRATE HIERARCHY</text>
	<!-- Mono -->
	<rect x="34" y="68" width="210" height="150" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<circle cx="139" cy="108" r="16" fill="#fcb045" opacity="0.2"/>
	<text x="139" y="113" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="14" font-weight="700">1</text>
	<text x="139" y="142" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Monosaccharides</text>
	<text x="139" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Single sugar unit</text>
	<text x="139" y="192" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10">Glucose, Fructose</text>
	<!-- Di -->
	<rect x="262" y="68" width="230" height="150" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<circle cx="377" cy="108" r="16" fill="#4ecdc4" opacity="0.2"/>
	<text x="355" y="113" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="14" font-weight="700">1</text>
	<text x="399" y="113" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="14" font-weight="700">+1</text>
	<text x="377" y="142" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Disaccharides</text>
	<text x="377" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Two sugar units bonded</text>
	<text x="377" y="192" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10">Sucrose, Lactose</text>
	<!-- Poly -->
	<rect x="510" y="68" width="216" height="150" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="2"/>
	<circle cx="618" cy="108" r="16" fill="#a78bfa" opacity="0.2"/>
	<text x="596" y="113" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="14" font-weight="700">3</text>
	<text x="640" y="113" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="14" font-weight="700">+</text>
	<text x="618" y="142" text-anchor="middle" fill="#f7f0e8" font-family="sans-serif" font-size="15" font-weight="700">Polysaccharides</text>
	<text x="618" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Many sugar units</text>
	<text x="618" y="192" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10">Cellulose, Chitin</text>
</svg>`;

// ── ILLUSTRATION: Amino Acid Structure ────────────────────────────────────

const proteinStructureIllustration = `
<svg role="img" aria-label="Amino acid structure with R group and peptide bond formation" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="prBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#prBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">AMINO ACID STRUCTURE</text>

	<!-- ── Main amino acid diagram (left, ~55%) ── -->
	<!-- Central α-carbon -->
	<circle cx="300" cy="130" r="20" fill="#1a2a25" stroke="#4ecdc4" stroke-width="2.5"/>
	<text x="300" y="135" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="15" font-weight="700">Cα</text>

	<!-- Bonds to Cα (tetrahedral: ~109° angles) -->
	<!-- Amino group (upper-left at ~135°) -->
	<line x1="284" y1="116" x2="180" y2="74" stroke="#fcb045" stroke-width="2.5"/>
	<rect x="108" y="52" width="110" height="50" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="163" y="72" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">NH₂</text>
	<text x="163" y="92" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Amino group</text>

	<!-- Carboxyl group (upper-right at ~45°) -->
	<line x1="316" y1="116" x2="420" y2="74" stroke="#ff6b6b" stroke-width="2.5"/>
	<rect x="380" y="52" width="120" height="50" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="440" y="72" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">COOH</text>
	<text x="440" y="92" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Carboxyl group</text>

	<!-- Hydrogen (top, straight up) -->
	<line x1="300" y1="110" x2="300" y2="70" stroke="#ffffff" stroke-width="2"/>
	<circle cx="300" cy="67" r="5" fill="#1f1917" stroke="#ffffff" stroke-width="1.5"/>
	<text x="300" y="63" text-anchor="middle" fill="#ffffff" font-family="monospace" font-size="10" font-weight="700">H</text>

	<!-- R group (bottom) -->
	<line x1="300" y1="150" x2="300" y2="210" stroke="#a78bfa" stroke-width="2.5"/>
	<rect x="240" y="210" width="120" height="50" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="300" y="230" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="15" font-weight="700">R</text>
	<text x="300" y="250" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Side chain (variable)</text>

	<!-- ── Peptide bond formation panel (right, ~40%) ── -->
	<rect x="540" y="56" width="190" height="156" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1.5"/>
	<text x="635" y="76" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Peptide Bond</text>
	<line x1="635" y1="84" x2="635" y2="92" stroke="#ffffff15" stroke-width="1"/>

	<!-- AA1 -->
	<text x="575" y="110" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10">NH₂</text>
	<text x="610" y="110" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">—CH—</text>
	<text x="660" y="110" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">CO</text>
	<text x="685" y="110" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">OH</text>
	<text x="575" y="126" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">|</text>
	<text x="575" y="136" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9">R₁</text>

	<!-- Arrow -->
	<text x="635" y="150" text-anchor="middle" fill="#ffffff" font-family="monospace" font-size="14">↓</text>
	<text x="635" y="162" text-anchor="middle" fill="#ffffff22" font-family="monospace" font-size="7">−H₂O</text>

	<!-- Dipeptide -->
	<text x="575" y="184" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10">NH₂</text>
	<text x="610" y="184" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">—CH—</text>
	<text x="660" y="184" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10">CO</text>
	<text x="685" y="184" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">NH—</text>
	<text x="575" y="200" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">|</text>
	<text x="575" y="210" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9">R₁</text>
	<text x="720" y="200" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">|</text>
	<text x="720" y="210" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9">R₂</text>

	<!-- Legend -->
	<rect x="556" y="220" width="160" height="46" rx="4" fill="#1f1917" stroke="#ffffff10"/>
	<text x="636" y="236" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9">Key Proteins</text>
	<text x="636" y="252" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="8">Collagen · Keratin · Hemoglobin</text>
</svg>`;

// ── ILLUSTRATION: Saturated vs Unsaturated ────────────────────────────────

const saturatedUnsaturatedIllustration = `
<svg role="img" aria-label="Saturated vs unsaturated fatty acids" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="satBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<marker id="bondEnd" markerWidth="4" markerHeight="4" refX="2" refY="2"><circle cx="2" cy="2" r="1.5" fill="#c4b8ad"/></marker>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#satBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">SATURATED vs UNSATURATED</text>

	<!-- ── SATURATED (left) ── -->
	<rect x="34" y="68" width="330" height="188" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="199" y="96" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">SATURATED FATTY ACID</text>
	<!-- COOH head -->
	<text x="60" y="126" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">HOOC</text>
	<!-- Zigzag chain (all single bonds) -->
	<polyline points="100,126 120,114 140,126 160,114 180,126 200,114 220,126 240,114 260,126 280,114 300,126 320,114" fill="none" stroke="#fcb045" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
	<!-- Single bond labels -->
	<text x="140" y="124" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="7">C</text>
	<text x="200" y="112" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="7">C</text>
	<text x="260" y="124" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="7">C</text>
	<!-- H atoms along chain -->
	<text x="100" y="104" fill="#ffffff20" font-family="monospace" font-size="7">H</text>
	<text x="140" y="104" fill="#ffffff20" font-family="monospace" font-size="7">H</text>
	<text x="180" y="104" fill="#ffffff20" font-family="monospace" font-size="7">H</text>
	<text x="120" y="135" fill="#ffffff20" font-family="monospace" font-size="7">H</text>
	<text x="160" y="135" fill="#ffffff20" font-family="monospace" font-size="7">H</text>
	<text x="200" y="135" fill="#ffffff20" font-family="monospace" font-size="7">H</text>
	<!-- Info text -->
	<text x="199" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">All C–C single bonds · Max hydrogen</text>
	<text x="199" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Straight chain → tight packing</text>
	<text x="199" y="214" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Solid at room temperature</text>
	<text x="199" y="240" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="9">Animal-based: meat, butter, dairy</text>

	<!-- ── UNSATURATED (right) ── -->
	<rect x="390" y="68" width="340" height="188" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="560" y="96" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">UNSATURATED FATTY ACID</text>
	<!-- COOH head -->
	<text x="416" y="126" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">HOOC</text>
	<!-- Chain with kink from cis double bond -->
	<polyline points="456,126 476,114 496,126 516,114 528,124" fill="none" stroke="#4ecdc4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
	<!-- Double bond (thicker, parallel lines for =) -->
	<line x1="528" y1="124" x2="548" y2="106" stroke="#ff6b6b" stroke-width="3.5" stroke-linecap="round"/>
	<line x1="528" y1="128" x2="548" y2="110" stroke="#ff6b6b" stroke-width="3.5" stroke-linecap="round"/>
	<!-- Continue after double bond with kink offset -->
	<polyline points="548,108 568,120 588,108 608,120 628,108 648,120 668,108" fill="none" stroke="#4ecdc4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
	<!-- Callout on double bond -->
	<circle cx="538" cy="118" r="24" fill="none" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.7"/>
	<text x="538" y="142" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="7" font-weight="700">Cis bond</text>
	<text x="538" y="152" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="7" font-weight="700">= kink</text>
	<!-- Info text -->
	<text x="560" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">One+ C=C double bonds</text>
	<text x="560" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Cis bond kink → loose packing</text>
	<text x="560" y="214" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Liquid at room temperature</text>
	<text x="560" y="240" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9">Plant-based: olive oil, nuts, avocado</text>
</svg>`;

// ── ILLUSTRATION: Lipid Types ─────────────────────────────────────────────

const lipidTypesIllustration = `
<svg role="img" aria-label="Four types of lipids" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="lipBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#lipBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">LIPID CLASSES</text>
	<!-- Fats -->
	<rect x="34" y="66" width="162" height="140" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="115" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="14" font-weight="700">Fats</text>
	<text x="115" y="128" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Solid at RT</text>
	<text x="115" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Animal-based</text>
	<text x="115" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Triglycerides</text>
	<!-- Oils -->
	<rect x="210" y="66" width="162" height="140" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="291" y="100" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="14" font-weight="700">Oils</text>
	<text x="291" y="128" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Liquid at RT</text>
	<text x="291" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Plant-based</text>
	<text x="291" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Unsaturated</text>
	<!-- Waxes -->
	<rect x="386" y="66" width="162" height="140" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="467" y="100" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="14" font-weight="700">Waxes</text>
	<text x="467" y="128" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Esters + fatty</text>
	<text x="467" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">alcohols</text>
	<text x="467" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Protective coat</text>
	<!-- Steroids -->
	<rect x="562" y="66" width="164" height="140" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="644" y="100" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="14" font-weight="700">Steroids</text>
	<text x="644" y="128" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Affect metabolism</text>
	<text x="644" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Cholesterol</text>
	<text x="644" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">4-ring structure</text>
</svg>`;

// ── ILLUSTRATION: DNA vs RNA ──────────────────────────────────────────────

const nucleicAcidIllustration = `
<svg role="img" aria-label="DNA double helix and RNA comparison" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="naBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<filter id="naGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
	</defs>
	<rect width="760" height="270" rx="8" fill="url(#naBg)"/>
	<text x="32" y="40" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">NUCLEIC ACIDS: DNA &amp; RNA</text>

	<!-- ── DNA PANEL ── -->
	<rect x="34" y="66" width="330" height="180" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="2"/>
	<!-- Helix backbone strand A (purple, winding right) -->
	<path d="M80 78 C58 98 58 114 80 134 C102 154 102 170 80 190 C58 210 58 226 80 236" fill="none" stroke="#a78bfa" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
	<path d="M86 78 C64 98 64 114 86 134 C108 154 108 170 86 190 C64 210 64 226 86 236" fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
	<!-- Helix backbone strand B (purple, winding left) -->
	<path d="M320 78 C342 98 342 114 320 134 C298 154 298 170 320 190 C342 210 342 226 320 236" fill="none" stroke="#4ecdc4" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
	<path d="M314 78 C336 98 336 114 314 134 C292 154 292 170 314 190 C336 210 336 226 314 236" fill="none" stroke="#4ecdc4" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
	<!-- Base pairs between strands -->
	<g stroke-dasharray="3,3" stroke-width="2.5" opacity="0.8">
		<line x1="86" y1="96" x2="314" y2="96" stroke="#fcb045"/>
		<text x="200" y="93" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7" font-weight="700">A=T</text>
		<line x1="74" y1="118" x2="326" y2="118" stroke="#4ecdc4"/>
		<text x="200" y="115" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="7" font-weight="700">G≡C</text>
		<line x1="86" y1="150" x2="314" y2="150" stroke="#fcb045"/>
		<text x="200" y="147" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7" font-weight="700">A=T</text>
		<line x1="74" y1="172" x2="326" y2="172" stroke="#4ecdc4"/>
		<text x="200" y="169" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="7" font-weight="700">G≡C</text>
		<line x1="86" y1="204" x2="314" y2="204" stroke="#fcb045"/>
		<text x="200" y="201" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7" font-weight="700">A=T</text>
	</g>
	<!-- DNA label -->
	<text x="199" y="80" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">DNA</text>
	<text x="199" y="230" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Double helix · Anti-parallel strands</text>
	<text x="199" y="244" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Deoxyribose sugar · A-T, G-C</text>

	<!-- ── RNA PANEL ── -->
	<rect x="396" y="66" width="330" height="180" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<!-- RNA single strand with stem-loop hairpin -->
	<path d="M500 80 C450 100 450 140 500 160 C530 172 530 140 510 120" fill="none" stroke="#4ecdc4" stroke-width="6" stroke-linecap="round"/>
	<path d="M510 120 C530 100 560 80 600 80" fill="none" stroke="#4ecdc4" stroke-width="6" stroke-linecap="round"/>
	<path d="M600 80 C640 80 660 100 660 130 C660 170 620 190 580 200" fill="none" stroke="#4ecdc4" stroke-width="6" stroke-linecap="round"/>
	<path d="M580 200 C540 210 500 230 500 238" fill="none" stroke="#4ecdc4" stroke-width="6" stroke-linecap="round"/>
	<!-- Base pairing in stem region -->
	<line x1="505" y1="98" x2="595" y2="98" stroke="#fcb045" stroke-width="2" stroke-dasharray="2,2"/>
	<text x="550" y="95" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="6" font-weight="700">A-U</text>
	<line x1="505" y1="142" x2="585" y2="142" stroke="#4ecdc4" stroke-width="2" stroke-dasharray="2,2"/>
	<text x="545" y="139" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="6" font-weight="700">G-C</text>
	<!-- Uracil label on loop -->
	<text x="525" y="168" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="7" font-weight="700">U</text>
	<text x="515" y="178" text-anchor="middle" fill="#c4b8ad" font-family="monospace" font-size="7" font-weight="700">U</text>
	<!-- RNA label -->
	<text x="561" y="80" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">RNA</text>
	<text x="561" y="230" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Single strand · Uracil (U)</text>
	<text x="561" y="244" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Ribose sugar · A-U, G-C</text>
</svg>`;

// ── ILLUSTRATION: Sucrose Formation ───────────────────────────────────────

const sucroseFormationIllustration = `
<svg role="img" aria-label="Sucrose formation: glucose + fructose" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="sucBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="200" rx="8" fill="url(#sucBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">DISACCHARIDE FORMATION</text>
	<!-- Glucose -->
	<rect x="40" y="66" width="180" height="100" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="130" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">Glucose</text>
	<text x="130" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Monosaccharide</text>
	<text x="130" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">C₆H₁₂O₆</text>
	<!-- + -->
	<text x="250" y="120" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="24" font-weight="700">+</text>
	<!-- Fructose -->
	<rect x="290" y="66" width="180" height="100" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="380" y="100" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">Fructose</text>
	<text x="380" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Monosaccharide</text>
	<text x="380" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">C₆H₁₂O₆</text>
	<!-- Arrow -->
	<text x="500" y="120" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="24" font-weight="700">→</text>
	<!-- Sucrose -->
	<rect x="540" y="66" width="190" height="100" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="635" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="14" font-weight="700">Sucrose</text>
	<text x="635" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Table sugar</text>
	<text x="635" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Disaccharide</text>
</svg>`;

// ── ILLUSTRATION: Ketosis & Fats ──────────────────────────────────────────

const ketosisIllustration = `
<svg role="img" aria-label="Ketosis and dietary fats" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="ketBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="220" rx="8" fill="url(#ketBg)"/>
	<text x="32" y="38" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">METABOLIC PATHWAYS</text>
	<rect x="40" y="66" width="320" height="120" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="200" y="96" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">Normal Metabolism</text>
	<text x="200" y="124" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Dietary carbs → Glucose → ATP</text>
	<text x="200" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Sufficient carbohydrate intake</text>
	<rect x="400" y="66" width="320" height="120" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="560" y="96" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">Ketosis</text>
	<text x="560" y="124" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Insufficient carbs → Fat breakdown</text>
	<text x="560" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Ketone body accumulation</text>
</svg>`;

// ── ILLUSTRATION: Hemoglobin & Sickle Cell ────────────────────────────────

const hemoglobinIllustration = `
<svg role="img" aria-label="Normal vs sickle cell hemoglobin" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="hgbBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#hgbBg)"/>
	<text x="32" y="38" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">HEMOGLOBIN &amp; SICKLE CELL</text>
	<!-- Normal -->
	<rect x="40" y="66" width="320" height="140" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<circle cx="140" cy="130" r="30" fill="#2a3a35" stroke="#4ecdc4" stroke-width="2"/>
	<circle cx="140" cy="130" r="12" fill="#ff6b6b" opacity="0.4"/>
	<text x="140" y="84" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Normal RBC</text>
	<text x="260" y="120" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Carries O₂</text>
	<text x="260" y="142" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Biconcave disk</text>
	<text x="140" y="186" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Normal hemoglobin sequence</text>
	<!-- Sickle -->
	<rect x="400" y="66" width="320" height="140" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<path d="M520 110 C500 115 500 145 520 150 C540 155 540 125 520 110Z" fill="#2a3a35" stroke="#ff6b6b" stroke-width="2"/>
	<text x="520" y="84" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Sickle Cell</text>
	<text x="620" y="120" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Low O₂ supply</text>
	<text x="620" y="142" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Clogs veins</text>
	<text x="520" y="186" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Mutated: Glu→Val at pos 6</text>
</svg>`;

// ── ILLUSTRATION: Trans Fats & Atherosclerosis ────────────────────────────

const atherosclerosisIllustration = `
<svg role="img" aria-label="Atherosclerosis from trans fats" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="athBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="230" rx="8" fill="url(#athBg)"/>
	<text x="32" y="38" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ATHEROSCLEROSIS RISK</text>
	<!-- Normal artery -->
	<rect x="40" y="66" width="320" height="130" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="80" y="96" width="240" height="14" rx="7" fill="#ff6b6b" opacity="0.3"/>
	<rect x="80" y="110" width="240" height="14" rx="7" fill="#4ecdc4" opacity="0.5"/>
	<text x="200" y="150" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Healthy Artery</text>
	<text x="200" y="172" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Clear passage, normal blood flow</text>
	<!-- Clogged artery -->
	<rect x="400" y="66" width="320" height="130" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<rect x="440" y="96" width="240" height="14" rx="7" fill="#ff6b6b" opacity="0.3"/>
	<rect x="440" y="110" width="240" height="14" rx="7" fill="#fcb045" opacity="0.4"/>
	<ellipse cx="560" cy="117" rx="30" ry="10" fill="#ff6b6b" opacity="0.7"/>
	<text x="560" y="150" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Clogged Artery</text>
	<text x="560" y="172" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Fatty deposits, restricted flow</text>
</svg>`;

// ── ILLUSTRATION: Triglycerides ───────────────────────────────────────────

const triglycerideIllustration = `
<svg role="img" aria-label="Triglyceride structure: glycerol with three fatty acid tails" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="triBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="230" rx="8" fill="url(#triBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">TRIGLYCERIDE STRUCTURE</text>

	<!-- ── Triglyceride molecule (structural formula style) ── -->
	<!-- Glycerol backbone: 3-carbon chain -->
	<text x="80" y="90" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">H₂C — O</text>
	<text x="80" y="116" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">HC — O</text>
	<text x="80" y="142" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">H₂C — O</text>

	<!-- Vertical line binding the 3 carbons -->
	<line x1="114" y1="84" x2="114" y2="150" stroke="#fcb045" stroke-width="1.5"/>

	<!-- Ester bonds (C=O groups) -->
	<text x="148" y="88" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">C</text>
	<line x1="155" y1="84" x2="170" y2="84" stroke="#ff6b6b" stroke-width="2.5"/>
	<line x1="155" y1="84" x2="155" y2="90" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="148" y="114" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">C</text>
	<line x1="155" y1="110" x2="170" y2="110" stroke="#ff6b6b" stroke-width="2.5"/>
	<line x1="155" y1="110" x2="155" y2="116" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="148" y="140" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">C</text>
	<line x1="155" y1="136" x2="170" y2="136" stroke="#ff6b6b" stroke-width="2.5"/>
	<line x1="155" y1="136" x2="155" y2="142" stroke="#ff6b6b" stroke-width="1.5"/>

	<!-- Fatty acid tail 1 (saturated, straight zigzag) -->
	<polyline points="170,82 190,72 210,82 230,72 250,82 270,72 290,82 310,72 330,82 350,72 370,82" fill="none" stroke="#fcb045" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

	<!-- Fatty acid tail 2 (unsaturated, with kink) -->
	<polyline points="170,108 190,98 210,108 230,98 240,106" fill="none" stroke="#4ecdc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<!-- Double bond (parallel lines) -->
	<line x1="240" y1="106" x2="258" y2="96" stroke="#ff6b6b" stroke-width="3" stroke-linecap="round"/>
	<line x1="240" y1="110" x2="258" y2="100" stroke="#ff6b6b" stroke-width="3" stroke-linecap="round"/>
	<polyline points="258,98 278,108 298,98 318,108 338,98 358,108 378,98" fill="none" stroke="#4ecdc4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

	<!-- Fatty acid tail 3 (saturated, straight zigzag) -->
	<polyline points="170,134 190,124 210,134 230,124 250,134 270,124 290,134 310,124 330,134 350,124 370,134" fill="none" stroke="#fcb045" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

	<!-- Label: Glycerol + Ester bonds + Fatty acids -->
	<rect x="50" y="166" width="140" height="22" rx="4" fill="#1f1917" stroke="#fcb045" stroke-width="1"/>
	<text x="120" y="181" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="9">Glycerol backbone</text>

	<rect x="200" y="166" width="120" height="22" rx="4" fill="#1f1917" stroke="#ff6b6b" stroke-width="1"/>
	<text x="260" y="181" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9">Ester bonds (×3)</text>

	<rect x="340" y="166" width="200" height="22" rx="4" fill="#1f1917" stroke="#4ecdc4" stroke-width="1"/>
	<text x="440" y="181" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9">Fatty acid tails (C–H chains)</text>

	<!-- Bottom info -->
	<text x="380" y="212" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Triglyceride = Glycerol + 3 Fatty Acids · Main stored fat in humans</text>
</svg>`;

// ── QUIZ QUESTIONS (College Difficulty) ────────────────────────────────────

const biologicalMacromoleculesQuizItems: Question[] = [
	// ── CARBOHYDRATES (Q1–Q7) ────────────────────────────────────────────
	{
		id: 1,
		question:
			'A researcher isolates four distinct classes of organic compounds from a cell sample. Each class contains carbon, hydrogen, and oxygen, but one class uniquely contains nitrogen in its monomers. Which class is most likely being analyzed?',
		options: [
			'Proteins are the class containing nitrogen in monomers.',
			'Carbohydrates are the class containing nitrogen in monomers.',
			'Lipids are the class containing nitrogen in monomers.',
			'Nucleic acids are the class containing nitrogen in monomers.'
		],
		answer: 'Proteins are the class containing nitrogen in monomers.',
		explanation:
			'Amino acids, the monomers of proteins, contain an amino group (NH₂) that distinguishes them. Carbohydrates and lipids contain only C, H, O, while nucleic acids contain phosphorus.',
		difficulty: 'advanced',
		illustration: macromoleculeCategoriesIllustration
	},
	{
		id: 2,
		question:
			'A patient reports chronic fatigue and muscle weakness. Blood tests show normal oxygen levels but low blood glucose. Which macromolecule deficiency is most directly indicated?',
		options: [
			'Carbohydrate deficiency is most directly indicated.',
			'Protein deficiency is most directly indicated.',
			'Lipid deficiency is most directly indicated.',
			'Nucleic acid deficiency is most directly indicated.'
		],
		answer: 'Carbohydrate deficiency is most directly indicated.',
		explanation:
			'Carbohydrates are the primary energy source. Low blood glucose means insufficient carbohydrate intake or metabolism, directly correlating with fatigue and weakness.',
		difficulty: 'advanced',
		illustration: carbohydrateTypesIllustration
	},
	{
		id: 3,
		question:
			'A biologist examines an arthropod exoskeleton under a microscope and finds a nitrogen-containing polysaccharide. Which carbohydrate is responsible for this structural role?',
		options: [
			'Chitin is the nitrogen-containing polysaccharide.',
			'Cellulose is the nitrogen-containing polysaccharide.',
			'Starch is the nitrogen-containing polysaccharide.',
			'Glycogen is the nitrogen-containing polysaccharide.'
		],
		answer: 'Chitin is the nitrogen-containing polysaccharide.',
		explanation:
			'Chitin is a polysaccharide that contains nitrogen (from acetylglucosamine monomers) and serves as the major component of arthropod exoskeletons, as stated in the lecture.',
		difficulty: 'expert',
		illustration: carbohydrateTypesIllustration
	},
	{
		id: 4,
		question:
			'Which statement correctly explains why cellulose can serve as a structural material in plant cell walls while starch functions primarily as energy storage, despite both being glucose polymers?',
		options: [
			'Beta-glycosidic bonds in cellulose create linear chains; alpha bonds in starch create helical coils.',
			'Cellulose contains nitrogen; starch contains only carbon, hydrogen, and oxygen.',
			'Starch is insoluble in water; cellulose dissolves readily in cellular fluids.',
			'Cellulose has a lower molecular weight than starch, making it more rigid.'
		],
		answer: 'Beta-glycosidic bonds in cellulose create linear chains; alpha bonds in starch create helical coils.',
		explanation:
			'Cellulose uses beta-1,4-glycosidic bonds that form straight, parallel chains cross-linked by hydrogen bonds, creating rigid fibers. Starch uses alpha-1,4 bonds that produce coiled structures suitable for compact energy storage.',
		difficulty: 'expert',
		illustration: carbohydrateTypesIllustration
	},
	{
		id: 5,
		question:
			'A biochemist analyzes a carbohydrate sample and determines it yields only glucose upon complete hydrolysis. The sample gives a negative result with Benedict\u2019s test before hydrolysis but positive after. What type of carbohydrate was likely present?',
		options: [
			'A polysaccharide such as starch or glycogen.',
			'A monosaccharide such as glucose or fructose.',
			'A disaccharide such as sucrose or lactose.',
			'A sugar alcohol such as glycerol or sorbitol.'
		],
		answer: 'A polysaccharide such as starch or glycogen.',
		explanation:
			'Polysaccharides are non-reducing (negative Benedict\u2019s) because their reducing ends are tied up in glycosidic bonds. Hydrolysis breaks these bonds, releasing free glucose that then gives a positive Benedict\u2019s test.',
		difficulty: 'expert',
		illustration: carbohydrateTypesIllustration
	},
	{
		id: 6,
		question:
			'Table sugar (sucrose) is produced commercially from sugarcane or sugar beets. Which chemical equation correctly represents the formation of sucrose?',
		options: [
			'Glucose + Fructose \u2192 Sucrose + H₂O',
			'Glucose + Galactose \u2192 Sucrose + H₂O',
			'2 Glucose \u2192 Sucrose + H₂O',
			'Glucose + Fructose \u2192 Sucrose + CO₂'
		],
		answer: 'Glucose + Fructose \u2192 Sucrose + H₂O',
		explanation:
			'Sucrose is a disaccharide formed by a condensation reaction between glucose and fructose, releasing a molecule of water. The lecture specifically identifies this combination.',
		difficulty: 'advanced',
		illustration: sucroseFormationIllustration
	},
	{
		id: 7,
		question:
			'A patient on a strict low-carbohydrate diet develops ketosis. A clinician advises increasing carbohydrate intake. Which food selection would most effectively address this metabolic condition?',
		options: [
			'Whole-grain bread provides carbohydrates to reverse ketosis.',
			'Grilled chicken provides carbohydrates to reverse ketosis.',
			'Olive oil provides carbohydrates to reverse ketosis.',
			'Cheese provides carbohydrates to reverse ketosis.'
		],
		answer: 'Whole-grain bread provides carbohydrates to reverse ketosis.',
		explanation:
			'Ketosis results from insufficient carbohydrate intake, forcing the body to break down fats for energy. Bread is carbohydrate-rich and will restore glucose levels, halting ketone body production.',
		difficulty: 'advanced',
		illustration: ketosisIllustration
	},

	// ── PROTEINS (Q8–Q13) ─────────────────────────────────────────────────
	{
		id: 8,
		question:
			'A dermatologist recommends a collagen supplement to a patient with thinning skin. Which biochemical explanation best supports this recommendation?',
		options: [
			'Collagen provides insoluble fibrous support in connective tissue.',
			'Collagen acts as an enzyme that synthesizes new skin cells.',
			'Collagen transports oxygen to the dermal cell layers.',
			'Collagen is a carbohydrate that hydrates the skin matrix.'
		],
		answer: 'Collagen provides insoluble fibrous support in connective tissue.',
		explanation:
			'The lecture identifies collagen as a major insoluble fibrous protein in connective tissues such as skin and cartilage, providing structural integrity. Supplementation may support this structural role.',
		difficulty: 'advanced',
		illustration: proteinStructureIllustration
	},
	{
		id: 9,
		question:
			'A forensic scientist analyzes hair and nail samples from a crime scene. Which protein would be the primary target for analysis, and why is it uniquely suited for forensic identification?',
		options: [
			'Keratin, because it is resistant to degradation and contains unique amino acid sequences.',
			'Collagen, because it is the most abundant protein in the human body.',
			'Hemoglobin, because it carries genetic information in red blood cells.',
			'Melanin, because it determines hair and skin color only.'
		],
		answer: 'Keratin, because it is resistant to degradation and contains unique amino acid sequences.',
		explanation:
			'Keratin is the structural protein of hair, nails, and outer skin. Its durable, cross-linked structure resists degradation, and its amino acid sequence varies between individuals, making it valuable for forensic analysis.',
		difficulty: 'expert',
		illustration: proteinStructureIllustration
	},
	{
		id: 10,
		question:
			'A student models an amino acid using molecular kits but accidentally uses a phosphate group instead of one of the correct functional groups. Which essential component of amino acids was replaced?',
		options: [
			'The carboxyl group (COOH) was incorrectly replaced.',
			'The amino group (NH₂) was incorrectly replaced.',
			'The R group (side chain) was incorrectly replaced.',
			'The central carbon atom was incorrectly replaced.'
		],
		answer: 'The carboxyl group (COOH) was incorrectly replaced.',
		explanation:
			'All amino acids share a central carbon bonded to an amino group (NH₂), a carboxyl group (COOH), a hydrogen atom, and an R group. Replacing the carboxyl with phosphate would create a different class of compound entirely.',
		difficulty: 'advanced',
		illustration: proteinStructureIllustration
	},
	{
		id: 11,
		question:
			'A patient with sickle cell disease experiences episodes of severe pain and organ damage. Which pathophysiological sequence best explains these symptoms?',
		options: [
			'Abnormal hemoglobin deforms RBCs, reducing oxygen delivery and causing microvascular occlusion.',
			'Excess collagen production stiffens blood vessels, reducing cardiac output.',
			'Keratin accumulation in blood cells triggers an autoimmune inflammatory response.',
			'Reduced carbohydrate storage leads to metabolic acidosis and tissue damage.'
		],
		answer: 'Abnormal hemoglobin deforms RBCs, reducing oxygen delivery and causing microvascular occlusion.',
		explanation:
			'Sickle cell disease results from a single amino acid substitution (Glu\u2192Val) in hemoglobin, causing RBCs to deform into sickle shapes. These cells deliver less oxygen and clog small vessels, causing pain and organ damage.',
		difficulty: 'expert',
		illustration: hemoglobinIllustration,
		molecularViewer: {
			pdbId: '1HBB',
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
	},
	{
		id: 12,
		question:
			'A researcher studies a protein and finds that changing a single amino acid in the primary sequence completely abolishes the protein\u2019s function. Which conclusion about protein structure is best supported?',
		options: [
			'Primary sequence determines higher-order structure and function.',
			'Proteins are functional only when denatured and unfolded.',
			'Only the R group composition determines protein function.',
			'Amino acid sequence has no effect on protein conformation.'
		],
		answer: 'Primary sequence determines higher-order structure and function.',
		explanation:
			'The lecture uses hemoglobin as an example: a single amino acid change (Glu to Val at position 6) causes sickle cell disease, demonstrating that primary sequence dictates folding, three-dimensional structure, and ultimately function.',
		difficulty: 'expert',
		illustration: hemoglobinIllustration
	},
	{
		id: 13,
		question:
			'A nutritionist advises a vegetarian client who excludes all animal products to carefully combine plant protein sources. Which concept from the lecture best explains this dietary recommendation?',
		options: [
			'Most plant proteins lack one or more essential amino acids.',
			'Plant proteins contain toxic non-standard amino acids.',
			'Plants store protein as cellulose, which is indigestible.',
			'Plant proteins cannot form quaternary structures.'
		],
		answer: 'Most plant proteins lack one or more essential amino acids.',
		explanation:
			'The lecture emphasizes that amino acid sequence is critical for protein function. Most plant proteins are incomplete, missing one or more essential amino acids. Combining complementary sources (e.g., rice and beans) ensures all necessary amino acids are available.',
		difficulty: 'advanced',
		illustration: proteinStructureIllustration
	},

	// ── LIPIDS (Q14–Q20) ──────────────────────────────────────────────────
	{
		id: 14,
		question:
			'A food scientist tests two lipid samples. Sample A is solid at room temperature and derived from beef fat. Sample B is liquid and derived from olive oil. Which structural difference accounts for their physical states?',
		options: [
			'Sample A contains saturated fatty acids; Sample B contains unsaturated fatty acids.',
			'Sample A contains cis double bonds; Sample B contains trans double bonds.',
			'Sample A is plant-based; Sample B is animal-based.',
			'Sample A contains glycerol; Sample B contains cholesterol.'
		],
		answer: 'Sample A contains saturated fatty acids; Sample B contains unsaturated fatty acids.',
		explanation:
			'The lecture states that saturated fats are animal-based and solid at room temperature due to tight molecular packing. Unsaturated fats are plant-based, contain double bonds that create kinks, and remain liquid at room temperature.',
		difficulty: 'advanced',
		illustration: saturatedUnsaturatedIllustration
	},
	{
		id: 15,
		question:
			'A chemistry student draws a fatty acid with 16 carbons, no double bonds, and the maximum number of hydrogen atoms. Which term correctly classifies this molecule?',
		options: [
			'This molecule is classified as a saturated fatty acid.',
			'This molecule is classified as an unsaturated fatty acid.',
			'This molecule is classified as a polyunsaturated fatty acid.',
			'This molecule is classified as a trans fatty acid.'
		],
		answer: 'This molecule is classified as a saturated fatty acid.',
		explanation:
			'The lecture defines saturated fats as having the maximum hydrogen atoms possible with no double bonds in their carbon chain. Palmitic acid (C16:0) is a classic example of a saturated fatty acid.',
		difficulty: 'advanced',
		illustration: saturatedUnsaturatedIllustration
	},
	{
		id: 16,
		question:
			'A patient\u2019s lipid profile shows elevated LDL cholesterol. The physician recommends replacing butter with olive oil. Which biochemical rationale supports this recommendation?',
		options: [
			'Olive oil contains unsaturated fats that may improve lipid profiles.',
			'Butter contains no fats and will raise cholesterol independently.',
			'Olive oil contains only carbohydrates and has no effect on lipids.',
			'Butter is plant-based and inherently healthier than olive oil.'
		],
		answer: 'Olive oil contains unsaturated fats that may improve lipid profiles.',
		explanation:
			'Butter is rich in saturated fats that can contribute to atherosclerosis. Olive oil contains monounsaturated fats, which are liquid at room temperature and are associated with better cardiovascular outcomes, as distinguished in the lecture.',
		difficulty: 'advanced',
		illustration: saturatedUnsaturatedIllustration
	},
	{
		id: 17,
		question:
			'A long-term study finds that populations consuming high levels of processed meats and fried foods have increased rates of cardiovascular disease. Which causal mechanism is best supported by the lecture?',
		options: [
			'Saturated and trans fats promote fatty deposits in arteries.',
			'Unsaturated fats in processed foods block oxygen transport.',
			'Animal-based proteins directly corrode blood vessel walls.',
			'Excess carbohydrates convert directly to arterial plaque.'
		],
		answer: 'Saturated and trans fats promote fatty deposits in arteries.',
		explanation:
			'The lecture states that saturated fats, including trans fats, tend to stay solid at room temperature and can cause fatty deposits in blood vessels, leading to atherosclerosis and cardiovascular disease.',
		difficulty: 'expert',
		illustration: atherosclerosisIllustration
	},
	{
		id: 18,
		question:
			'An unsaturated fatty acid contains one double bond in its hydrocarbon chain. How does this structural feature affect its physical properties compared to a fully saturated counterpart?',
		options: [
			'It lowers the melting point, making the fat liquid at room temperature.',
			'It raises the melting point, making the fat more solid.',
			'It has no effect on physical properties of the fatty acid.',
			'It converts the fatty acid into a water-soluble compound.'
		],
		answer: 'It lowers the melting point, making the fat liquid at room temperature.',
		explanation:
			'The lecture notes that unsaturated fats contain one or more double bonds, which introduce kinks that prevent tight molecular packing. This results in lower melting points, making them liquid at room temperature.',
		difficulty: 'advanced',
		illustration: saturatedUnsaturatedIllustration
	},
	{
		id: 19,
		question:
			'A researcher isolates four types of lipids from a cell: a solid fat, a liquid oil, a waterproof coating on leaves, and a signaling molecule that affects metabolism. Which lipid types correspond to these four functions?',
		options: [
			'Fats, oils, waxes, and steroids, respectively.',
			'Oils, waxes, steroids, and fats, respectively.',
			'Waxes, steroids, fats, and oils, respectively.',
			'Steroids, fats, oils, and waxes, respectively.'
		],
		answer: 'Fats, oils, waxes, and steroids, respectively.',
		explanation:
			'The lecture categorizes lipids into four types: fats (solid, animal-based), oils (liquid, plant-based), waxes (protective coatings with fatty acids and alcohols), and steroids (affecting metabolism).',
		difficulty: 'advanced',
		illustration: lipidTypesIllustration
	},
	{
		id: 20,
		question:
			'A patient prescribed corticosteroids for an autoimmune condition notices increased appetite and abdominal weight gain. Which recommendation from the lecture should the clinician provide?',
		options: [
			'Monitor caloric intake and maintain regular exercise.',
			'Discontinue the medication immediately to reverse side effects.',
			'Increase saturated fat consumption to balance metabolism.',
			'Switch to a high-protein diet to counteract weight gain.'
		],
		answer: 'Monitor caloric intake and maintain regular exercise.',
		explanation:
			'The lecture notes that steroids can increase appetite and affect how the body deposits fat. The recommended self-care tip is to watch calories and exercise regularly to prevent excessive weight gain.',
		difficulty: 'advanced',
		illustration: lipidTypesIllustration
	},

	// ── NUCLEIC ACIDS (Q21–Q25) ───────────────────────────────────────────
	{
		id: 21,
		question:
			'A virologist studies a newly discovered virus and confirms it uses RNA rather than DNA as its genetic material. Which experimental observation would most directly support this conclusion?',
		options: [
			'The genome contains uracil but not thymine.',
			'The genome contains deoxyribose sugar.',
			'The genome forms a stable double helix.',
			'The genome replicates in the host nucleus.'
		],
		answer: 'The genome contains uracil but not thymine.',
		explanation:
			'The lecture states that RNA contains uracil instead of thymine (which is found in DNA). Detecting uracil in the viral genome provides direct evidence of RNA-based genetic material.',
		difficulty: 'expert',
		illustration: nucleicAcidIllustration
	},
	{
		id: 22,
		question:
			'Watson and Crick proposed a double helix model for DNA in 1953. Which combination of features from the lecture accurately describes this structure?',
		options: [
			'Anti-parallel strands, sugar-phosphate backbone outside, complementary base pairs inside.',
			'Parallel strands, nitrogenous bases outside, sugar-phosphate backbone inside.',
			'Single-stranded, hydrogen bonds between ribose sugars, uracil base pairs.',
			'Triple-stranded, covalent bonds between bases, random sequence arrangement.'
		],
		answer: 'Anti-parallel strands, sugar-phosphate backbone outside, complementary base pairs inside.',
		explanation:
			'The lecture describes DNA as having two anti-parallel strands with deoxyribose-phosphate backbones on the outside and nitrogenous bases forming complementary pairs (A-T, G-C) on the inside, like a twisted ladder.',
		difficulty: 'expert',
		illustration: nucleicAcidIllustration,
		molecularViewer: {
			pdbId: '1BNA',
			title: 'B-DNA Double Helix (1BNA) — drag to rotate',
			style: 'cartoon',
			colorScheme: 'chain'
		}
	},
	{
		id: 23,
		question:
			'A student compares the nitrogenous base composition of DNA and RNA. Which base is found in RNA but not in DNA, and what functional significance does this difference have?',
		options: [
			'Uracil replaces thymine; this affects base-pairing stability in RNA.',
			'Thymine replaces uracil; this allows RNA to form longer molecules.',
			'Guanine replaces cytosine; this changes the genetic code reading.',
			'Adenine replaces guanine; this alters energy storage in nucleotides.'
		],
		answer: 'Uracil replaces thymine; this affects base-pairing stability in RNA.',
		explanation:
			'The lecture notes that RNA contains uracil instead of thymine. Uracil pairs with adenine via two hydrogen bonds, similar to thymine, but the lack of a methyl group in uracil affects RNA stability and repair mechanisms.',
		difficulty: 'expert',
		illustration: nucleicAcidIllustration
	},
	{
		id: 24,
		question:
			'A DNA strand has the sequence 5\u2019-ATCGGATC-3\u2019. If this strand serves as a template for DNA replication, what will be the sequence of the newly synthesized complementary strand?',
		options: [
			'3\u2019-TAGCCTAG-5\u2019 is the complementary sequence.',
			'5\u2019-UAGCCTAG-3\u2019 is the complementary sequence.',
			'5\u2019-TAGCCTAG-3\u2019 is the complementary sequence.',
			'3\u2019-ATCGGATC-5\u2019 is the complementary sequence.'
		],
		answer: '3\u2019-TAGCCTAG-5\u2019 is the complementary sequence.',
		explanation:
			'DNA base pairing rules: A pairs with T, T with A, C with G, G with C. The complementary strand runs anti-parallel (3\u2019 to 5\u2019). Given 5\u2019-ATCGGATC-3\u2019, the complement is 3\u2019-TAGCCTAG-5\u2019.',
		difficulty: 'advanced',
		illustration: nucleicAcidIllustration
	},
	{
		id: 25,
		question:
			'A nutrition textbook states that triglycerides are the main form of stored fat in humans. Which structural description correctly defines a triglyceride?',
		options: [
			'One glycerol molecule esterified to three fatty acid molecules.',
			'Three glycerol molecules bonded to one fatty acid molecule.',
			'One glucose molecule linked to three amino acid molecules.',
			'One cholesterol molecule attached to three phosphate groups.'
		],
		answer: 'One glycerol molecule esterified to three fatty acid molecules.',
		explanation:
			'The lecture confirms that triglycerides are composed of glycerol and three fatty acids. This esterification reaction produces the primary form of energy storage in adipose tissue, as stated in the slide.',
		difficulty: 'advanced',
		illustration: triglycerideIllustration
	}
];

export const biologicalMacromoleculesQuizData = biologicalMacromoleculesQuizItems satisfies Question[];
