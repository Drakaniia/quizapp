import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Mendeleev vs Moseley Comparison ─────────────────────────

const mendeleevMoseleyIllustration = `
<svg role="img" aria-label="Comparison of Mendeleev and Moseley periodic table arrangements" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="mmBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="280" rx="8" fill="url(#mmBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">MENDELEEV VS MOSELEY</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Two approaches to organizing the elements</text>
	<!-- Left panel: Mendeleev -->
	<rect x="20" y="82" width="350" height="170" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="195" y="108" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">DMITRI MENDELEEV</text>
	<text x="195" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">1869 — Arranged by ATOMIC MASS</text>
	<line x1="36" y1="134" x2="354" y2="134" stroke="#ffffff10" stroke-width="1"/>
	<!-- Problem 1: H Atom -->
	<rect x="36" y="144" width="150" height="36" rx="4" fill="#ff6b6b" opacity="0.08" stroke="#ff6b6b" stroke-width="1" stroke-opacity="0.3"/>
	<text x="40" y="157" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">⚠ H ATOM</text>
	<text x="40" y="172" fill="#c4b8ad" font-family="sans-serif" font-size="9">Could not place H properly</text>
	<!-- Problem 2: No Trend -->
	<rect x="198" y="144" width="150" height="36" rx="4" fill="#ff6b6b" opacity="0.08" stroke="#ff6b6b" stroke-width="1" stroke-opacity="0.3"/>
	<text x="202" y="157" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">⚠ NO TREND</text>
	<text x="202" y="172" fill="#c4b8ad" font-family="sans-serif" font-size="9">No regular mass trend</text>
	<!-- Problem 3: Isotopes -->
	<rect x="36" y="186" width="312" height="36" rx="4" fill="#ff6b6b" opacity="0.08" stroke="#ff6b6b" stroke-width="1" stroke-opacity="0.3"/>
	<text x="40" y="200" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">⚠ ISOTOPES</text>
	<text x="40" y="214" fill="#c4b8ad" font-family="sans-serif" font-size="9">Isotopes violated his Periodic Law</text>
	<!-- Right panel: Moseley -->
	<rect x="390" y="82" width="350" height="170" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="565" y="108" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">HENRY MOSELEY</text>
	<text x="565" y="124" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">1913 — Arranged by ATOMIC NUMBER</text>
	<line x1="406" y1="134" x2="724" y2="134" stroke="#ffffff10" stroke-width="1"/>
	<!-- Solution 1: X-rays -->
	<rect x="406" y="144" width="150" height="36" rx="4" fill="#4ecdc4" opacity="0.08" stroke="#4ecdc4" stroke-width="1" stroke-opacity="0.3"/>
	<text x="410" y="157" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">✦ X-RAY SPECTROSCOPY</text>
	<text x="410" y="172" fill="#c4b8ad" font-family="sans-serif" font-size="9">Used X-rays to redefine table</text>
	<!-- Solution 2: Electrons -->
	<rect x="568" y="144" width="150" height="36" rx="4" fill="#4ecdc4" opacity="0.08" stroke="#4ecdc4" stroke-width="1" stroke-opacity="0.3"/>
	<text x="572" y="157" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">✦ ELECTRONS</text>
	<text x="572" y="172" fill="#c4b8ad" font-family="sans-serif" font-size="9">Bombarded elements with e- beam</text>
	<!-- Solution 3: Model -->
	<rect x="406" y="186" width="312" height="36" rx="4" fill="#4ecdc4" opacity="0.08" stroke="#4ecdc4" stroke-width="1" stroke-opacity="0.3"/>
	<text x="410" y="200" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">✦ ATOMIC NUMBER MODEL</text>
	<text x="410" y="214" fill="#c4b8ad" font-family="sans-serif" font-size="9">X-ray frequency ∝ nuclear charge → properties = f(atomic number)</text>
	<!-- Bottom summary -->
	<text x="380" y="270" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Moseley solved Mendeleev's inconsistencies by using proton count, not atomic mass</text>
</svg>`;

// ── ILLUSTRATION: Atomic Number Concept ────────────────────────────────────

const atomicNumberConceptIllustration = `
<svg role="img" aria-label="Atomic number concept showing how protons define element identity" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="anBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#anBg)"/>
	<text x="32" y="40" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ATOMIC NUMBER CONCEPT</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">The number of protons (Z) uniquely identifies each element</text>
	<!-- Three element cards -->
	<!-- Hydrogen -->
	<rect x="20" y="86" width="225" height="100" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<circle cx="74" cy="150" r="22" fill="#fcb045" opacity="0.08"/>
	<circle cx="74" cy="150" r="12" fill="#ff6b6b" opacity="0.6"/>
	<text x="74" y="154" text-anchor="middle" fill="#fff" font-family="monospace" font-size="10" font-weight="700">1p</text>
	<circle cx="74" cy="138" r="5" fill="#a78bfa" opacity="0.6"/>
	<text x="110" y="114" fill="#fcb045" font-family="monospace" font-size="14" font-weight="700">H</text>
	<text x="110" y="134" fill="#c4b8ad" font-family="sans-serif" font-size="10">Hydrogen</text>
	<text x="110" y="152" fill="#c4b8ad" font-family="sans-serif" font-size="10">Z = 1 (1 proton)</text>
	<text x="110" y="170" fill="#888" font-family="monospace" font-size="9">1 electron, 0 neutrons</text>
	<!-- Carbon -->
	<rect x="265" y="86" width="230" height="100" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<circle cx="320" cy="150" r="26" fill="#4ecdc4" opacity="0.08"/>
	<circle cx="316" cy="148" r="10" fill="#ff6b6b" opacity="0.6"/>
	<circle cx="324" cy="148" r="10" fill="#ff6b6b" opacity="0.6"/>
	<circle cx="312" cy="140" r="8" fill="#4ecdc4" opacity="0.4"/>
	<circle cx="328" cy="140" r="8" fill="#4ecdc4" opacity="0.4"/>
	<circle cx="314" cy="156" r="8" fill="#4ecdc4" opacity="0.4"/>
	<circle cx="320" cy="150" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">6p</circle>
	<text x="358" y="114" fill="#4ecdc4" font-family="monospace" font-size="14" font-weight="700">C</text>
	<text x="358" y="134" fill="#c4b8ad" font-family="sans-serif" font-size="10">Carbon</text>
	<text x="358" y="152" fill="#c4b8ad" font-family="sans-serif" font-size="10">Z = 6 (6 protons)</text>
	<text x="358" y="170" fill="#888" font-family="monospace" font-size="9">6 electrons, 6 neutrons</text>
	<!-- Uranium -->
	<rect x="515" y="86" width="225" height="100" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<circle cx="570" cy="150" r="30" fill="#ff6b6b" opacity="0.08"/>
	<circle cx="570" cy="150" r="16" fill="#ff6b6b" opacity="0.4"/>
	<circle cx="570" cy="150" r="10" fill="#ff6b6b" opacity="0.7"/>
	<text x="570" y="154" text-anchor="middle" fill="#fff" font-family="monospace" font-size="9" font-weight="700">92p</text>
	<text x="612" y="114" fill="#ff6b6b" font-family="monospace" font-size="14" font-weight="700">U</text>
	<text x="612" y="134" fill="#c4b8ad" font-family="sans-serif" font-size="10">Uranium</text>
	<text x="612" y="152" fill="#c4b8ad" font-family="sans-serif" font-size="10">Z = 92 (92 protons)</text>
	<text x="612" y="170" fill="#888" font-family="monospace" font-size="9">92 electrons, 146 neutrons</text>
	<!-- Bottom note -->
	<text x="380" y="220" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">✦ Proton number (Z) → determines element identity</text>
	<text x="380" y="240" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Isotopes: same Z, different neutron count</text>
</svg>`;

// ── ILLUSTRATION: Particle Accelerator & Nuclear Transmutation ────────────

const particleAcceleratorIllustration = `
<svg role="img" aria-label="Particle accelerator and nuclear transmutation process" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="paBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="270" rx="8" fill="url(#paBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">NUCLEAR TRANSMUTATION</text>
	<text x="380" y="62" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Transforming one element into another via particle bombardment</text>
	<!-- Left: Particle Accelerator -->
	<rect x="20" y="80" width="220" height="100" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="130" y="104" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">PARTICLE ACCELERATOR</text>
	<line x1="36" y1="112" x2="224" y2="112" stroke="#ffffff10" stroke-width="1"/>
	<text x="130" y="132" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Device that speeds up protons to</text>
	<text x="130" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">overcome repulsion between</text>
	<text x="130" y="164" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">projectiles and target nuclei</text>
	<!-- Center: Reaction -->
	<rect x="260" y="80" width="230" height="100" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="375" y="104" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">TRANSMUTATION</text>
	<line x1="276" y1="112" x2="474" y2="112" stroke="#ffffff10" stroke-width="1"/>
	<text x="375" y="132" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">²³⁸U + n → ²³⁹U</text>
	<text x="375" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Uranium bombarded with</text>
	<text x="375" y="166" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">neutrons → Neptunium</text>
	<!-- Right: Result -->
	<rect x="510" y="80" width="230" height="100" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="625" y="104" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">RESULT: NEPTUNIUM</text>
	<line x1="526" y1="112" x2="724" y2="112" stroke="#ffffff10" stroke-width="1"/>
	<text x="625" y="132" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">1st transuranium element</text>
	<text x="625" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Atomic number: 93</text>
	<text x="625" y="164" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Ductile, silvery, radioactive</text>
	<!-- Arrows -->
	<text x="248" y="136" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="16" font-weight="700">→</text>
	<text x="498" y="136" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="16" font-weight="700">→</text>
	<!-- Bottom: Rutherford & Chadwick -->
	<rect x="20" y="195" width="340" height="55" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1"/>
	<text x="190" y="214" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">ERNEST RUTHERFORD (1919)</text>
	<text x="190" y="234" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">First to transform one element into another via nuclear transmutation</text>
	<rect x="380" y="195" width="360" height="55" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1"/>
	<text x="560" y="214" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">JAMES CHADWICK (1932)</text>
	<text x="560" y="234" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Discovered the neutron — the key to bombarding nuclei</text>
</svg>`;

// ── ILLUSTRATION: Missing Elements Grid ────────────────────────────────────

const missingElementsIllustration = `
<svg role="img" aria-label="Four missing elements that were synthesized in the laboratory" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="meBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#meBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">MISSING ELEMENTS (1925)</text>
	<text x="380" y="62" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Elements missing from the periodic table — later synthesized in the lab</text>
	<!-- Card 1: Technetium -->
	<rect x="20" y="82" width="170" height="100" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="30" y="92" width="150" height="36" rx="4" fill="#4ecdc4" opacity="0.08"/>
	<text x="105" y="112" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="18" font-weight="700">43</text>
	<text x="105" y="132" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">Tc</text>
	<text x="105" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Technetium</text>
	<text x="105" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">1st synthesized element</text>
	<!-- Card 2: Promethium -->
	<rect x="205" y="82" width="170" height="100" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<rect x="215" y="92" width="150" height="36" rx="4" fill="#fcb045" opacity="0.08"/>
	<text x="290" y="112" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="18" font-weight="700">61</text>
	<text x="290" y="132" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">Pm</text>
	<text x="290" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Promethium</text>
	<text x="290" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Particle accelerator</text>
	<!-- Card 3: Astatine -->
	<rect x="390" y="82" width="170" height="100" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<rect x="400" y="92" width="150" height="36" rx="4" fill="#a78bfa" opacity="0.08"/>
	<text x="475" y="112" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="18" font-weight="700">85</text>
	<text x="475" y="132" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">At</text>
	<text x="475" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Astatine</text>
	<text x="475" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Radioactivity studies</text>
	<!-- Card 4: Francium -->
	<rect x="575" y="82" width="170" height="100" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<rect x="585" y="92" width="150" height="36" rx="4" fill="#ff6b6b" opacity="0.08"/>
	<text x="660" y="112" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="18" font-weight="700">87</text>
	<text x="660" y="132" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">Fr</text>
	<text x="660" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Francium</text>
	<text x="660" y="168" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Radioactivity studies</text>
	<!-- Bottom labels -->
	<text x="105" y="200" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="8">Emilio Segrè</text>
	<text x="290" y="200" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="8">Particle Accel.</text>
	<text x="475" y="200" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="8">From Radioactivity</text>
	<text x="660" y="200" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="8">From Radioactivity</text>
	<text x="380" y="230" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">✦ Gap elements later synthesized through nuclear transmutations</text>
	<text x="380" y="248" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Synthesized using particle accelerators or discovered through radioactivity studies</text>
</svg>`;

// ── ILLUSTRATION: Transuranic vs Super Heavy Elements ─────────────────────

const transuranicVsSuperHeavyIllustration = `
<svg role="img" aria-label="Comparison of transuranic elements and super heavy elements" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="tsBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#tsBg)"/>
	<text x="32" y="40" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">TRANSURANIC vs SUPER HEAVY</text>
	<text x="380" y="62" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Two categories of synthetic elements beyond uranium</text>
	<!-- Left: Transuranic -->
	<rect x="20" y="80" width="350" height="150" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="195" y="106" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">TRANSURANIC ELEMENTS</text>
	<line x1="36" y1="116" x2="354" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<circle cx="60" cy="138" r="18" fill="#ff6b6b" opacity="0.3"/>
	<circle cx="60" cy="138" r="10" fill="#ff6b6b" opacity="0.6"/>
	<text x="60" y="142" text-anchor="middle" fill="#fff" font-family="monospace" font-size="9" font-weight="700">92+</text>
	<text x="94" y="136" fill="#c4b8ad" font-family="sans-serif" font-size="11">Synthetic elements with atomic</text>
	<text x="94" y="154" fill="#c4b8ad" font-family="sans-serif" font-size="11">numbers higher than Uranium</text>
	<text x="94" y="176" fill="#888" font-family="monospace" font-size="10">Z &gt; 92 (Uranium)</text>
	<text x="94" y="192" fill="#888" font-family="monospace" font-size="10">Example: Neptunium (Z=93)</text>
	<text x="195" y="216" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">✦ 1st: Neptunium (Z=93)</text>
	<!-- Right: Super Heavy -->
	<rect x="390" y="80" width="350" height="150" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="565" y="106" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">SUPER HEAVY ELEMENTS</text>
	<line x1="406" y1="116" x2="724" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<circle cx="430" cy="140" r="20" fill="#ff6b6b" opacity="0.3"/>
	<circle cx="430" cy="140" r="12" fill="#ff6b6b" opacity="0.6"/>
	<circle cx="425" cy="136" r="5" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="435" cy="136" r="5" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="430" cy="144" r="5" fill="#ff6b6b" opacity="0.8"/>
	<text x="430" y="144" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">103+</text>
	<text x="464" y="136" fill="#c4b8ad" font-family="sans-serif" font-size="11">Elements with atomic numbers</text>
	<text x="464" y="154" fill="#c4b8ad" font-family="sans-serif" font-size="11">beyond Lawrencium (Lr)</text>
	<text x="464" y="176" fill="#888" font-family="monospace" font-size="10">Z &gt; 103 (Lawrencium)</text>
	<text x="464" y="192" fill="#888" font-family="monospace" font-size="10">Heaviest known elements</text>
	<text x="565" y="216" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">✦ Z beyond 103</text>
</svg>`;

// ── ILLUSTRATION: Cyclotron Diagram ────────────────────────────────────────

const cyclotronIllustration = `
<svg role="img" aria-label="Diagram of a cyclotron particle accelerator" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="cyBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#cyBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">THE CYCLOTRON</text>
	<text x="380" y="62" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Invented to accelerate particles for artificial transmutation of elements</text>
	<!-- Cyclotron visual -->
	<circle cx="260" cy="150" r="80" fill="none" stroke="#4ecdc4" stroke-width="2" opacity="0.3"/>
	<circle cx="260" cy="150" r="70" fill="none" stroke="#4ecdc4" stroke-width="1.5" opacity="0.2"/>
	<circle cx="260" cy="150" r="55" fill="none" stroke="#4ecdc4" stroke-width="1" stroke-dasharray="4,4" opacity="0.15"/>
	<circle cx="260" cy="150" r="40" fill="none" stroke="#4ecdc4" stroke-width="1" stroke-dasharray="4,4" opacity="0.1"/>
	<!-- Dees (D-shaped electrodes) -->
	<path d="M260 80 A70 70 0 0 1 260 220 M260 80 A70 70 0 0 0 260 220" fill="none" stroke="#4ecdc4" stroke-width="2" opacity="0.5"/>
	<text x="260" y="74" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9">🏛 DEE</text>
	<text x="260" y="158" text-anchor="middle" fill="#ffffff15" font-family="monospace" font-size="8">alternating</text>
	<text x="260" y="170" text-anchor="middle" fill="#ffffff15" font-family="monospace" font-size="8">electric field</text>
	<!-- Spiral path -->
	<path d="M300 150 Q305 140 295 132 Q285 124 270 126 Q255 128 248 140 Q240 152 250 162 Q260 172 275 170 Q290 168 297 156" fill="none" stroke="#fcb045" stroke-width="2" stroke-dasharray="5,3" opacity="0.6" marker-end="url(#cyArrow)"/>
	<circle cx="300" cy="150" r="4" fill="#fcb045"/>
	<!-- Legend panel (right) -->
	<rect x="380" y="82" width="350" height="130" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1.5"/>
	<text x="555" y="106" text-anchor="middle" fill="#f7f0e8" font-family="monospace" font-size="12" font-weight="700">How It Works</text>
	<line x1="400" y1="116" x2="710" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="400" y="136" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">1.</text>
	<text x="416" y="136" fill="#c4b8ad" font-family="sans-serif" font-size="10">Alternating electric field accelerates particles</text>
	<text x="400" y="156" fill="#4ecdc4" font-family="monospace" font-size="10" font-weight="700">2.</text>
	<text x="416" y="156" fill="#c4b8ad" font-family="sans-serif" font-size="10">Particles move in a spiral path</text>
	<text x="400" y="176" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">3.</text>
	<text x="416" y="176" fill="#c4b8ad" font-family="sans-serif" font-size="10">Magnetic field keeps them in orbit</text>
	<text x="400" y="196" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">4.</text>
	<text x="416" y="196" fill="#c4b8ad" font-family="sans-serif" font-size="10">Paved way to artificial transmutation</text>
</svg>`;

// ── QUIZ QUESTIONS ─────────────────────────────────────────────────────────

const atomicNumberSynthesisQuizItems: Question[] = [
	// ── MENDELEEV VS MOSELEY (Q1–Q6) ────────────────────────────────────
	{
		id: 1,
		question:
			'Dmitri Mendeleev created his version of the periodic table in 1869. What principle did he use to arrange the elements, and what major problem did he face?',
		options: [
			'He arranged elements by increasing atomic mass, but isotopes and irregular mass trends caused inconsistencies.',
			'He arranged elements by increasing atomic number, but the concept of protons was not yet discovered.',
			'He arranged elements alphabetically, but new elements kept being discovered.',
			'He arranged elements by density, but measurements were too imprecise.'
		],
		answer: 'He arranged elements by increasing atomic mass, but isotopes and irregular mass trends caused inconsistencies.',
		explanation:
			'The lecture states that Mendeleev placed elements in order of increasing ATOMIC MASS. His problems included: (1) could not place Hydrogen properly, (2) no regular trend in mass when moving between elements, and (3) isotopes of elements violated his Periodic Law.',
		difficulty: 'advanced',
		illustration: mendeleevMoseleyIllustration
	},
	{
		id: 2,
		question:
			'According to the lecture, why could Mendeleev not find an appropriate position for hydrogen in his periodic table?',
		options: [
			'Hydrogen had no neutrons, making its atomic mass unusually low compared to other elements in its group.',
			'Hydrogen was too reactive to be placed in any group.',
			'Hydrogen was not discovered until after Mendeleev created his table.',
			'Hydrogen had too many isotopes for Mendeleev to count.'
		],
		answer: 'Hydrogen had no neutrons, making its atomic mass unusually low compared to other elements in its group.',
		explanation:
			'The lecture slide explicitly mentions "H ATOM — He could not place H in an appropriated position in Periodic tabular form." Hydrogen\'s atomic mass of ~1 was inconsistent with the mass-based trends Mendeleev was trying to establish.',
		difficulty: 'advanced',
		illustration: mendeleevMoseleyIllustration
	},
	{
		id: 3,
		question:
			'Henry Moseley solved Mendeleev\'s inconsistencies by determining that properties of elements are a function of their atomic number. What experimental technique did Moseley use to determine atomic numbers?',
		options: [
			'X-ray spectroscopy — bombarding elements with electrons and measuring their X-ray spectral lines.',
			'Mass spectrometry — measuring the mass of individual atoms.',
			'Chemical titration — analyzing chemical reactions of elements.',
			'Optical microscopy — visually examining crystal structures of elements.'
		],
		answer: 'X-ray spectroscopy — bombarding elements with electrons and measuring their X-ray spectral lines.',
		explanation:
			'The lecture states Moseley "used the X-rays to redefine the Periodic Table" by "bombarding beam of electrons to elements to determine their x-ray spectral lines." The frequency of X-rays was proportional to the nuclear charge (atomic number).',
		difficulty: 'advanced',
		illustration: mendeleevMoseleyIllustration
	},
	{
		id: 4,
		question:
			'Moseley\'s work established that the frequency of X-rays given off by elements is proportional to which property of the nucleus?',
		options: [
			'The charge of the nucleus, which corresponds to the atomic number (number of protons).',
			'The total mass of the nucleus, including both protons and neutrons.',
			'The diameter of the nucleus in femtometers.',
			'The binding energy of the nucleus per nucleon.'
		],
		answer: 'The charge of the nucleus, which corresponds to the atomic number (number of protons).',
		explanation:
			'The lecture explicitly states: "The frequency of the X-rays given off by elements is proportional to the charge of the nucleus or atomic number." This is Moseley\'s Law — a direct relationship between X-ray frequency and atomic number (Z).',
		difficulty: 'advanced',
		illustration: mendeleevMoseleyIllustration
	},
	{
		id: 5,
		question:
			'The lecture poses a question: "Who did better — Mendeleev or Moseley?" Which statement best summarizes the comparison presented in the lecture?',
		options: [
			'Moseley did better because arranging by atomic number resolved inconsistencies that Mendeleev\'s mass-based system could not.',
			'Mendeleev did better because he predicted undiscovered elements, which Moseley could not.',
			'Both were equally correct; they simply used different units of measurement.',
			'Mendeleev did better because his table was more widely accepted at the time.'
		],
		answer: 'Moseley did better because arranging by atomic number resolved inconsistencies that Mendeleev\'s mass-based system could not.',
		explanation:
			'The lecture slides contrast Mendeleev\'s problems (H atom placement, no mass trend, isotope violations) with Moseley\'s solutions (X-ray spectroscopy, electron bombardment, atomic number model). Moseley\'s approach explained all inconsistencies by using proton count rather than atomic mass.',
		difficulty: 'advanced',
		illustration: mendeleevMoseleyIllustration
	},
	{
		id: 6,
		question:
			'By 1925, elements were arranged according to atomic numbers, but gaps remained in the periodic table. Which four elements were missing according to the lecture?',
		options: [
			'Technetium (43), Promethium (61), Astatine (85), and Francium (87).',
			'Carbon (6), Nitrogen (7), Oxygen (8), and Fluorine (9).',
			'Uranium (92), Neptunium (93), Plutonium (94), and Americium (95).',
			'Helium (2), Neon (10), Argon (18), and Krypton (36).'
		],
		answer: 'Technetium (43), Promethium (61), Astatine (85), and Francium (87).',
		explanation:
			'The lecture slide lists exactly four missing elements: Element 43 (Technetium), Element 61 (Promethium), Element 85 (Astatine), and Element 87 (Francium). These were later synthesized in the laboratory through nuclear transmutations or discovered through radioactivity studies.',
		difficulty: 'advanced',
		illustration: missingElementsIllustration
	},

	// ── ATOMIC NUMBER CONCEPT (Q7–Q9) ───────────────────────────────────
	{
		id: 7,
		question:
			'A student claims that the number of neutrons determines the identity of an element. According to the lecture, why is this statement incorrect?',
		options: [
			'The number of protons determines element identity — the atomic number (Z). Neutron count only determines the isotope.',
			'The number of electrons determines element identity; neutrons only affect mass.',
			'The atomic mass number determines element identity; neutrons are irrelevant.',
			'The number of protons and neutrons together determines element identity.'
		],
		answer: 'The number of protons determines element identity — the atomic number (Z). Neutron count only determines the isotope.',
		explanation:
			'The lecture emphasizes that "the identity of the element depends on how many protons it has." Changing the number of neutrons creates isotopes of the same element, not a new element. Only changing the proton count changes the element.',
		difficulty: 'advanced',
		illustration: atomicNumberConceptIllustration
	},
	{
		id: 8,
		question:
			'The lecture includes an "Elements Information Table" activity. In this table, if Cesium (Cs) has 55 protons and an atomic mass of 133, how many neutrons does it have?',
		options: [
			'78 neutrons (133 - 55 = 78).',
			'55 neutrons (same as protons).',
			'133 neutrons (same as atomic mass).',
			'188 neutrons (133 + 55 = 188).'
		],
		answer: '78 neutrons (133 - 55 = 78).',
		explanation:
			'The table shows Cs with 55 protons and atomic mass 133. Since atomic mass ≈ protons + neutrons, neutrons = 133 - 55 = 78. This is a practical application of the atomic number concept: the atomic number (55) identifies it as cesium.',
		difficulty: 'advanced',
		illustration: atomicNumberConceptIllustration
	},
	{
		id: 9,
		question:
			'In the lecture\'s "Elements Information Table", Magnesium (Mg) has 12 electrons and 12 neutrons. How many protons does it have, and what is its atomic number?',
		options: [
			'12 protons, atomic number 12.',
			'24 protons, atomic number 24.',
			'12 protons, atomic number 24.',
			'6 protons, atomic number 6.'
		],
		answer: '12 protons, atomic number 12.',
		explanation:
			'In a neutral atom, the number of electrons equals the number of protons. Since Mg has 12 electrons, it has 12 protons, giving it an atomic number of 12. The table confirms this pattern: proton number = electron number = atomic number.',
		difficulty: 'advanced',
		illustration: atomicNumberConceptIllustration
	},

	// ── NUCLEAR TRANSMUTATION & RUTHERFORD (Q10–Q13) ─────────────────────
	{
		id: 10,
		question:
			'In 1919, Ernest Rutherford achieved a landmark achievement in nuclear science. What did he accomplish according to the lecture?',
		options: [
			'He successfully transformed one element or isotope into another through a nuclear transmutation reaction process.',
			'He discovered the electron orbiting the nucleus.',
			'He created the first synthetic element from scratch.',
			'He split the uranium atom for the first time.'
		],
		answer: 'He successfully transformed one element or isotope into another through a nuclear transmutation reaction process.',
		explanation:
			'The lecture states: "1919, successfully transform one element or isotope into another element through NUCLEAR TRANSMUTATION reaction process." Rutherford was the first to artificially change one element into another by bombarding nitrogen nuclei with alpha particles.',
		difficulty: 'advanced',
		illustration: particleAcceleratorIllustration
	},
	{
		id: 11,
		question:
			'According to the lecture, what is the key method used to synthesize new elements, and what challenge does it overcome?',
		options: [
			'Atomic nuclei are bombarded with neutrons or protons using a particle accelerator to overcome the repulsion between positively charged particles.',
			'Elements are heated to extreme temperatures to fuse them together naturally.',
			'Chemical reactions are used to combine existing elements into new ones.',
			'Lasers are used to split atoms and reassemble them into new elements.'
		],
		answer: 'Atomic nuclei are bombarded with neutrons or protons using a particle accelerator to overcome the repulsion between positively charged particles.',
		explanation:
			'The lecture describes a particle accelerator as "a device used to speed up the protons to overcome the repulsion between the protons and the target atomic nuclei via magnetic and electrical fields." Since protons are positively charged, they naturally repel each other, so high speeds are needed to force them together.',
		difficulty: 'advanced',
		illustration: particleAcceleratorIllustration
	},
	{
		id: 12,
		question:
			'What happens when Uranium-238 is bombarded with neutrons in a particle accelerator, according to the lecture example?',
		options: [
			'Neptunium is created through nuclear transmutation.',
			'Uranium splits into two smaller atoms through fission.',
			'Plutonium is created through beta decay.',
			'Uranium becomes stable and non-radioactive.'
		],
		answer: 'Neptunium is created through nuclear transmutation.',
		explanation:
			'The lecture provides the example: "Uranium is bombarded with neutrons using Particle Accelerator" and the result is "NEPTUNIUM is created." The reaction is: ²³⁸U + n → ²³⁹U → ²³⁹Np (beta decay). This was the first transuranium element synthesized.',
		difficulty: 'advanced',
		illustration: particleAcceleratorIllustration
	},
	{
		id: 13,
		question:
			'The lecture notes that particle accelerators have practical applications beyond synthesizing new elements. What other application is mentioned?',
		options: [
			'Cancer treatment through radiation therapy.',
			'Desalination of seawater.',
			'Production of electricity for spacecraft.',
			'Weather modification through cloud seeding.'
		],
		answer: 'Cancer treatment through radiation therapy.',
		explanation:
			'The lecture states: "The operation of this is widely used in both physics research and cancer treatment." Linear accelerators (linacs) are commonly used in radiation oncology to deliver targeted radiation to tumors.',
		difficulty: 'expert',
		illustration: particleAcceleratorIllustration
	},

	// ── JAMES CHADWICK & NEUTRON (Q14–Q16) ──────────────────────────────
	{
		id: 14,
		question:
			'James Chadwick made a crucial discovery in 1932 that enabled the synthesis of new elements. What did he discover?',
		options: [
			'The neutron — a neutral particle that could penetrate atomic nuclei without being repelled.',
			'The proton — the positively charged particle in the nucleus.',
			'The electron cloud — the region where electrons orbit the nucleus.',
			'Nuclear fission — the splitting of heavy atoms into lighter ones.'
		],
		answer: 'The neutron — a neutral particle that could penetrate atomic nuclei without being repelled.',
		explanation:
			'The lecture states: "1932, discovered neutron previously known as through NEUTRAL PARTICLE." The neutron\'s lack of charge allows it to approach and penetrate atomic nuclei without experiencing electrostatic repulsion, making it ideal for nuclear bombardment.',
		difficulty: 'advanced',
		illustration: particleAcceleratorIllustration
	},
	{
		id: 15,
		question:
			'Technetium (Tc) holds a special place in the history of element synthesis. According to the lecture, what makes Technetium unique?',
		options: [
			'It was the first synthesized element that does not occur naturally on Earth, created by Emilio Segrè and Carlo Perrier.',
			'It was the first element discovered in space before being found on Earth.',
			'It was the first radioactive element ever discovered.',
			'It was the first element created in a nuclear reactor.'
		],
		answer: 'It was the first synthesized element that does not occur naturally on Earth, created by Emilio Segrè and Carlo Perrier.',
		explanation:
			'The lecture identifies Technetium as the "1st synthesized element does not occur naturally on Earth by Emilio Segre and Carlo Perrier." Its name derives from the Greek "technetos" meaning "artificial." All isotopes of Technetium are radioactive with relatively short half-lives.',
		difficulty: 'advanced',
		illustration: missingElementsIllustration
	},
	{
		id: 16,
		question:
			'In 1942, a major milestone in nuclear science was achieved. What event does the lecture associate with this year?',
		options: [
			'The first controlled nuclear chain reaction at the University of Chicago.',
			'The discovery of plutonium by Glenn Seaborg.',
			'The first atomic bomb test in New Mexico.',
			'The creation of the first synthetic element, Technetium.'
		],
		answer: 'The first controlled nuclear chain reaction at the University of Chicago.',
		explanation:
			'The lecture slide for James Chadwick mentions: "1942, 1st controlled NUCLEAR CHAIN REACTION, University of Chicago." This was achieved by Enrico Fermi\'s team as part of the Manhattan Project, using a uranium pile to sustain a controlled fission chain reaction.',
		difficulty: 'expert',
		illustration: missingElementsIllustration
	},

	// ── CYCLOTRON (Q17–Q19) ──────────────────────────────────────────────
	{
		id: 17,
		question:
			'The invention of the cyclotron was a breakthrough for element synthesis. According to the lecture, what did the cyclotron enable?',
		options: [
			'It paved the way to artificial transmutation of one element into another.',
			'It allowed scientists to see individual atoms for the first time.',
			'It was used to measure the mass of electrons precisely.',
			'It could generate unlimited amounts of energy from fusion.'
		],
		answer: 'It paved the way to artificial transmutation of one element into another.',
		explanation:
			'The lecture explicitly states: "THE INVENTION OF CYCLOTRON — It paved the way to artificial transmutation of one element into another." The cyclotron could accelerate particles to much higher energies than previous devices, enabling more nuclear reactions.',
		difficulty: 'advanced',
		illustration: cyclotronIllustration
	},
	{
		id: 18,
		question:
			'How does a cyclotron work according to the lecture? Describe its operating principle.',
		options: [
			'It uses an alternating electric field to accelerate particles that move in a spiral path in the presence of a magnetic field.',
			'It uses a high-voltage static charge to fire particles in a straight line at a target.',
			'It uses lasers to heat particles to fusion temperatures in a confined space.',
			'It uses gravitational fields to accelerate particles around a circular track.'
		],
		answer: 'It uses an alternating electric field to accelerate particles that move in a spiral path in the presence of a magnetic field.',
		explanation:
			'The lecture describes: "It uses alternating electric field to accelerate particles that move in a spiral path in the presence of a magnetic field." The alternating field pushes particles faster each time they cross the gap between the "dees," while the magnetic field bends them into a spiral.',
		difficulty: 'advanced',
		illustration: cyclotronIllustration
	},
	{
		id: 19,
		question:
			'The lecture mentions both cyclotrons and particle accelerators. What is the primary difference between a linear particle accelerator and a cyclotron in terms of particle path?',
		options: [
			'A linear accelerator moves particles in a straight line, while a cyclotron moves particles in a spiral path.',
			'A linear accelerator moves particles in a circle, while a cyclotron moves them in a straight line.',
			'Both move particles in exactly the same spiral path.',
			'A cyclotron moves particles in a straight line, while a linear accelerator uses a circular path.'
		],
		answer: 'A linear accelerator moves particles in a straight line, while a cyclotron moves particles in a spiral path.',
		explanation:
			'The lecture describes the particle accelerator generally and the cyclotron specifically. A linear accelerator (linac) accelerates particles along a straight path, while a cyclotron uses a magnetic field to bend particles into a spiral, allowing the same accelerating gap to be used repeatedly.',
		difficulty: 'expert',
		illustration: cyclotronIllustration
	},

	// ── MISSING ELEMENTS SYNTHESIS (Q20–Q22) ────────────────────────────
	{
		id: 20,
		question:
			'According to the lecture, which missing elements were synthesized using particle accelerators, and which were discovered through studies of radioactivity?',
		options: [
			'Technetium (43) and Promethium (61) were synthesized using particle accelerators; Astatine (85) and Francium (87) were discovered through radioactivity studies.',
			'All four missing elements were synthesized using particle accelerators.',
			'Technetium and Astatine were synthesized; Promethium and Francium were discovered in nature.',
			'Astatine and Francium were from accelerators; Technetium and Promethium from radioactivity.'
		],
		answer: 'Technetium (43) and Promethium (61) were synthesized using particle accelerators; Astatine (85) and Francium (87) were discovered through radioactivity studies.',
		explanation:
			'The lecture slide on "DISCOVERY OF THE MISSING ELEMENTS" clearly categorizes them: Technetium — "Synthesized using Particle Accelerator," Promethium — "Synthesized using Particle Accelerator," Astatine — "Discovered through studies of Radioactivity," Francium — "Discovered through studies of Radioactivity."',
		difficulty: 'expert',
		illustration: missingElementsIllustration
	},
	{
		id: 21,
		question:
			'Technetium is identified as the "1st synthesized element." The lecture also mentions it was the "1ST TRANSURANIUM ELEMENT produced synthetically." However, Technetium has atomic number 43, and Uranium has atomic number 92. What is the contradiction?',
		options: [
			'Technetium is not actually a transuranium element — the lecture likely refers to Neptunium (Z=93) as the first transuranium element. Technetium was the first synthetic element overall.',
			'Technetium has atomic number 43, which is less than Uranium, so it cannot be transuranic. The lecture explains that Technetium was the first synthetic element, while Neptunium was the first transuranic element.',
			'Both statements are correct because Technetium was discovered before Uranium was known to be element 92.',
			'The lecture made an error; Technetium has never been considered a transuranium element.'
		],
		answer: 'Technetium is not actually a transuranium element — the lecture likely refers to Neptunium (Z=93) as the first transuranium element. Technetium was the first synthetic element overall.',
		explanation:
			'Technetium (Z=43) is the first synthesized element that does not occur naturally. However, "transuranic" specifically means elements beyond Uranium (Z>92). The lecture clarifies this: slide 24 refers to Neptunium (Z=93) as "the 1ST TRANSURANIUM ELEMENT." Technetium was the first synthetic element, but Neptunium was the first transuranic element.',
		difficulty: 'expert',
		illustration: missingElementsIllustration
	},
	{
		id: 22,
		question:
			'The lecture describes Neptunium as a "DUCTILE, SILVERY, RADIOACTIVE metal." Besides its material properties, what practical application of Neptunium is mentioned in the lecture?',
		options: [
			'It is used as a precursor for plutonium-238 and in radioisotope thermal generators to provide electricity for spacecraft.',
			'It is used in medical imaging as a contrast agent for X-rays.',
			'It is used in nuclear weapons as the primary fissile material.',
			'It is used in household smoke detectors as a radiation source.'
		],
		answer: 'It is used as a precursor for plutonium-238 and in radioisotope thermal generators to provide electricity for spacecraft.',
		explanation:
			'The lecture states Neptunium "is used as a precursor for the formation of plutonium-238, and in radioisotope THERMAL GENERATORS to provide electricity for spacecraft." Plutonium-238 is a key power source for deep-space missions like Voyager, Cassini, and Mars rovers (via RTGs).',
		difficulty: 'expert',
		illustration: transuranicVsSuperHeavyIllustration
	},

	// ── TRANSURANIC VS SUPER HEAVY ELEMENTS (Q23–Q25) ────────────────────
	{
		id: 23,
		question:
			'The lecture includes a multiple-choice question comparing transuranic elements and super heavy elements. Which answer correctly distinguishes between the two?',
		options: [
			'Transuranic elements are synthetic elements with atomic numbers higher than Uranium (Z=92), while super heavy elements have atomic numbers beyond Lawrencium (Z=103).',
			'Transuranic elements have atomic numbers beyond Lawrencium (Z=103), while super heavy elements have atomic numbers higher than Uranium (Z=92).',
			'Transuranic elements occur naturally, while super heavy elements are synthetic.',
			'Transuranic elements are all radioactive, while super heavy elements are stable.'
		],
		answer: 'Transuranic elements are synthetic elements with atomic numbers higher than Uranium (Z=92), while super heavy elements have atomic numbers beyond Lawrencium (Z=103).',
		explanation:
			'The correct answer from the lecture is: "The former [transuranic] are synthetic elements with atomic numbers higher than that of Uranium (Z=92) while the latter [super heavy] are elements with atomic numbers beyond Lawrencium (Z=103)." Transuranic elements range from Z=93 to Z=103, while super heavy elements start at Z=104 (Rutherfordium) and beyond.',
		difficulty: 'expert',
		illustration: transuranicVsSuperHeavyIllustration
	},
	{
		id: 24,
		question:
			'The lecture discusses the "shell" of Neptunium in relation to nuclear structure. In nuclear physics, what does the concept of "nuclear shells" help explain about transuranic elements?',
		options: [
			'Nuclear shells explain why certain proton/neutron numbers (magic numbers) result in more stable nuclei, which is important for predicting the stability of super heavy elements.',
			'Nuclear shells refer to the layers of electrons surrounding the nucleus of transuranic elements.',
			'Nuclear shells describe the physical coating applied to fuel rods in nuclear reactors.',
			'Nuclear shells are the outer casings of particle accelerators used to create transuranic elements.'
		],
		answer: 'Nuclear shells explain why certain proton/neutron numbers (magic numbers) result in more stable nuclei, which is important for predicting the stability of super heavy elements.',
		explanation:
			'The nuclear shell model explains that nuclei with certain "magic numbers" of protons or neutrons (2, 8, 20, 28, 50, 82, 126) are particularly stable. The lecture\'s mention of the "shell" of Neptunium relates to this concept. The "island of stability" — a hypothesized region of relatively stable super heavy elements — is predicted using the shell model.',
		difficulty: 'expert',
		illustration: transuranicVsSuperHeavyIllustration
	},
	{
		id: 25,
		question:
			'The lecture traces the evolution of the periodic table from Mendeleev to modern synthetic elements. Which statement best summarizes the complete historical progression described in the lecture?',
		options: [
			'Mendeleev (by atomic mass, 1869) → Moseley (by atomic number, 1913) → Missing elements synthesized (1925–1940s) → Transuranic elements (Neptunium, etc.) → Super heavy elements (beyond Lr, Z=103).',
			'Moseley (by atomic number) → Mendeleev (by atomic mass) → Super heavy elements → Missing elements.',
			'Ancient Greeks (four elements) → Mendeleev (periodic table) → Modern synthesis → Complete table.',
			'Missing elements discovered first → Mendeleev organized them → Moseley reorganized → Transuranic elements.'
		],
		answer: 'Mendeleev (by atomic mass, 1869) → Moseley (by atomic number, 1913) → Missing elements synthesized (1925–1940s) → Transuranic elements (Neptunium, etc.) → Super heavy elements (beyond Lr, Z=103).',
		explanation:
			'The lecture presents this exact progression: (1) Mendeleev\'s mass-based table (1869), (2) Moseley\'s atomic number redefinition (1913), (3) Gaps in the atomic-number table (1925) with missing elements 43, 61, 85, 87, (4) Synthesis of missing elements and transuranic elements like Neptunium, and (5) The distinction between transuranic (Z>92) and super heavy (Z>103) elements.',
		difficulty: 'expert',
		illustration: transuranicVsSuperHeavyIllustration
	}
];

export const atomicNumberSynthesisQuizData = atomicNumberSynthesisQuizItems satisfies Question[];
