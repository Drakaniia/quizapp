import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Big Bang Timeline ──────────────────────────────────────

const bigBangTimelineIllustration = `
<svg role="img" aria-label="Big Bang timeline showing expansion and cooling of the universe" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="bbBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#bbBg)"/>
	<text x="32" y="40" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">BIG BANG TIMELINE</text>
	<!-- Expansion arrow -->
	<line x1="60" y1="140" x2="700" y2="140" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4,3" opacity="0.4"/>
	<!-- Big Bang point -->
	<circle cx="70" cy="140" r="16" fill="#a78bfa" opacity="0.3"/>
	<circle cx="70" cy="140" r="8" fill="#a78bfa" opacity="0.6"/>
	<circle cx="70" cy="140" r="3" fill="#fff"/>
	<text x="70" y="170" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9" font-weight="700">BIG BANG</text>
	<text x="70" y="182" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">t=0</text>
	<!-- Expansion stages -->
	<rect x="150" y="108" width="130" height="60" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="215" y="132" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">Expansion</text>
	<text x="215" y="152" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Space expands rapidly</text>
	<text x="215" y="166" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Universe cools</text>
	<!-- Cooling -->
	<rect x="320" y="108" width="130" height="60" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="385" y="132" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Cooling</text>
	<text x="385" y="152" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Temperature drops</text>
	<text x="385" y="166" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Particles form</text>
	<!-- Nucleosynthesis -->
	<rect x="490" y="108" width="130" height="60" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="555" y="132" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">Nucleo-</text>
	<text x="555" y="146" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">synthesis</text>
	<text x="555" y="166" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Light elements form</text>
	<!-- Connecting arrows -->
	<path d="M140 138 Q145 100 160 138" fill="none" stroke="#ffffff20" stroke-width="1.5" marker-end="url(#bbArrow)"/>
	<text x="290" y="100" text-anchor="middle" fill="#ffffff15" font-family="monospace" font-size="14">→</text>
	<text x="460" y="100" text-anchor="middle" fill="#ffffff15" font-family="monospace" font-size="14">→</text>
	<!-- Bottom info -->
	<text x="380" y="218" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">The Big Bang is an expansion of space — as the Universe expands, it cools.</text>
	<text x="380" y="236" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Higher energy particles → Higher temperature</text>
</svg>`;

// ── ILLUSTRATION: Atom Structure ─────────────────────────────────────────

const atomStructureIllustration = `
<svg role="img" aria-label="Structure of an atom showing protons, neutrons, and electrons" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="atomBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#atomBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">PARTS OF THE ATOM</text>
	<!-- Nucleus -->
	<circle cx="260" cy="136" r="34" fill="#1a1a2e" stroke="#fcb045" stroke-width="2"/>
	<circle cx="260" cy="136" r="34" fill="#fcb045" opacity="0.08"/>
	<circle cx="250" cy="130" r="10" fill="#ff6b6b" opacity="0.7"/>
	<circle cx="270" cy="130" r="10" fill="#ff6b6b" opacity="0.7"/>
	<circle cx="260" cy="145" r="10" fill="#4ecdc4" opacity="0.7"/>
	<text x="245" y="134" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">p+</text>
	<text x="275" y="134" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">p+</text>
	<text x="260" y="149" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">n</text>
	<text x="260" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">Nucleus</text>
	<!-- Electron orbits -->
	<ellipse cx="260" cy="136" rx="100" ry="38" fill="none" stroke="#ffffff10" stroke-width="1" stroke-dasharray="3,3"/>
	<ellipse cx="260" cy="136" rx="80" ry="28" fill="none" stroke="#ffffff08" stroke-width="1" stroke-dasharray="3,3"/>
	<!-- Electrons -->
	<circle cx="180" cy="125" r="6" fill="#a78bfa" opacity="0.8"/>
	<text x="180" y="128" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">e-</text>
	<circle cx="340" cy="150" r="6" fill="#a78bfa" opacity="0.8"/>
	<text x="340" y="153" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">e-</text>
	<text x="260" y="188" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">Electron Cloud</text>
	<!-- Legend panel (right) -->
	<rect x="430" y="70" width="280" height="130" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1.5"/>
	<text x="570" y="94" text-anchor="middle" fill="#f7f0e8" font-family="monospace" font-size="12" font-weight="700">Subatomic Particles</text>
	<line x1="450" y1="104" x2="690" y2="104" stroke="#ffffff10" stroke-width="1"/>
	<!-- Proton -->
	<circle cx="460" cy="122" r="8" fill="#ff6b6b" opacity="0.7"/>
	<text x="460" y="125" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">+</text>
	<text x="484" y="126" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">Proton (p+)</text>
	<text x="620" y="126" fill="#c4b8ad" font-family="sans-serif" font-size="10">+1 charge</text>
	<!-- Neutron -->
	<circle cx="460" cy="144" r="8" fill="#4ecdc4" opacity="0.7"/>
	<text x="460" y="147" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">n</text>
	<text x="484" y="148" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Neutron (n)</text>
	<text x="620" y="148" fill="#c4b8ad" font-family="sans-serif" font-size="10">Neutral</text>
	<!-- Electron -->
	<circle cx="460" cy="166" r="8" fill="#a78bfa" opacity="0.8"/>
	<text x="460" y="169" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">e</text>
	<text x="484" y="170" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">Electron (e-)</text>
	<text x="620" y="170" fill="#c4b8ad" font-family="sans-serif" font-size="10">-1 charge</text>
	<!-- Bottom info -->
	<text x="380" y="228" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Identity of an element depends on how many protons it has</text>
</svg>`;

// ── ILLUSTRATION: Isotopes ───────────────────────────────────────────────

const isotopeIllustration = `
<svg role="img" aria-label="Isotopes: same protons, different neutrons" viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="isoBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="210" rx="8" fill="url(#isoBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ISOTOPES</text>
	<text x="380" y="68" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="12">Same number of protons, different number of neutrons</text>
	<!-- Hydrogen-1 (protium) -->
	<rect x="40" y="88" width="205" height="100" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<circle cx="100" cy="146" r="18" fill="#fcb045" opacity="0.1"/>
	<circle cx="100" cy="146" r="10" fill="#ff6b6b" opacity="0.6"/>
	<text x="100" y="150" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">1p</text>
	<text x="145" y="112" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">¹H</text>
	<text x="145" y="132" fill="#c4b8ad" font-family="sans-serif" font-size="10">Protium</text>
	<text x="145" y="150" fill="#c4b8ad" font-family="sans-serif" font-size="10">1 proton, 0 neutrons</text>
	<text x="145" y="168" fill="#888" font-family="monospace" font-size="9">Most common</text>
	<!-- Hydrogen-2 (deuterium) -->
	<rect x="265" y="88" width="220" height="100" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<circle cx="330" cy="146" r="18" fill="#4ecdc4" opacity="0.1"/>
	<circle cx="325" cy="148" r="8" fill="#ff6b6b" opacity="0.6"/>
	<circle cx="335" cy="148" r="8" fill="#4ecdc4" opacity="0.6"/>
	<text x="325" y="151" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">p</text>
	<text x="335" y="151" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">n</text>
	<text x="370" y="112" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">²H</text>
	<text x="370" y="132" fill="#c4b8ad" font-family="sans-serif" font-size="10">Deuterium</text>
	<text x="370" y="150" fill="#c4b8ad" font-family="sans-serif" font-size="10">1 proton, 1 neutron</text>
	<text x="370" y="168" fill="#888" font-family="monospace" font-size="9">Forms during Big Bang</text>
	<!-- Hydrogen-3 (tritium) -->
	<rect x="505" y="88" width="220" height="100" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<circle cx="570" cy="146" r="20" fill="#ff6b6b" opacity="0.1"/>
	<circle cx="564" cy="148" r="8" fill="#ff6b6b" opacity="0.6"/>
	<circle cx="572" cy="142" r="6" fill="#4ecdc4" opacity="0.6"/>
	<circle cx="576" cy="152" r="6" fill="#4ecdc4" opacity="0.6"/>
	<text x="564" y="151" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">p</text>
	<text x="572" y="145" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">n</text>
	<text x="576" y="155" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">n</text>
	<text x="610" y="112" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">³H</text>
	<text x="610" y="132" fill="#c4b8ad" font-family="sans-serif" font-size="10">Tritium</text>
	<text x="610" y="150" fill="#c4b8ad" font-family="sans-serif" font-size="10">1 proton, 2 neutrons</text>
	<text x="610" y="168" fill="#888" font-family="monospace" font-size="9">Radioactive</text>
	<text x="380" y="205" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Isotopes hold and lose a maximum of 3 neutrons</text>
</svg>`;

// ── ILLUSTRATION: Light Elements Formation ────────────────────────────────

const lightElementsFormationIllustration = `
<svg role="img" aria-label="Formation of light elements during Big Bang nucleosynthesis" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="leBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#leBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">BIG BANG NUCLEOSYNTHESIS</text>
	<text x="380" y="66" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Formation of the first light elements in the early universe</text>
	<!-- Element chain arrows -->
	<text x="380" y="90" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Fusion chain in the first few minutes</text>
	<!-- H -->
	<rect x="20" y="104" width="80" height="50" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="60" y="126" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="16" font-weight="700">¹H</text>
	<text x="60" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Hydrogen</text>
	<text x="110" y="133" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="18" font-weight="700">→</text>
	<!-- D -->
	<rect x="130" y="104" width="80" height="50" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="170" y="126" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="16" font-weight="700">²H</text>
	<text x="170" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Deuterium</text>
	<text x="220" y="133" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="18" font-weight="700">→</text>
	<!-- T -->
	<rect x="240" y="104" width="80" height="50" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="280" y="126" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="16" font-weight="700">³H</text>
	<text x="280" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Tritium</text>
	<text x="330" y="133" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="18" font-weight="700">→</text>
	<!-- He-3 -->
	<rect x="350" y="104" width="85" height="50" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="2"/>
	<text x="392" y="126" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="16" font-weight="700">³He</text>
	<text x="392" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Helium-3</text>
	<text x="445" y="133" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="18" font-weight="700">→</text>
	<!-- He-4 -->
	<rect x="465" y="104" width="85" height="50" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="507" y="126" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="16" font-weight="700">⁴He</text>
	<text x="507" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Helium-4</text>
	<text x="560" y="133" text-anchor="middle" fill="#ffffff30" font-family="monospace" font-size="18" font-weight="700">→</text>
	<!-- Li-7 / Be-7 -->
	<rect x="580" y="104" width="85" height="50" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="622" y="126" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="16" font-weight="700">⁷Li</text>
	<text x="622" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Lithium-7</text>
	<!-- Plus Be-7 -->
	<rect x="580" y="170" width="85" height="50" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="3,2"/>
	<text x="622" y="192" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="16" font-weight="700">⁷Be</text>
	<text x="622" y="210" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Beryllium-7</text>
	<!-- Labels -->
	<text x="60" y="90" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">p + n</text>
	<text x="170" y="90" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">D + p</text>
	<text x="280" y="90" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">T →)</text>
	<text x="392" y="90" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">+ n</text>
	<text x="507" y="90" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">+ p</text>
	<text x="380" y="232" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Only the first few elements form during Big Bang nucleosynthesis — the rest come from stars</text>
</svg>`;

// ── ILLUSTRATION: Star Layers ─────────────────────────────────────────────

const starLayersIllustration = `
<svg role="img" aria-label="Layers of a star showing core, radiative zone, and convective zone" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="slBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#slBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">LAYERS OF A STAR</text>
	<!-- Star diagram (concentric circles) -->
	<circle cx="220" cy="130" r="100" fill="#3a2810" stroke="#fcb045" stroke-width="2" opacity="0.3"/>
	<circle cx="220" cy="130" r="75" fill="#5a3a15" stroke="#fcb045" stroke-width="1.5" opacity="0.2"/>
	<circle cx="220" cy="130" r="45" fill="#fcb045" stroke="none" opacity="0.15"/>
	<circle cx="220" cy="130" r="25" fill="#ff6b6b" stroke="none" opacity="0.4"/>
	<circle cx="220" cy="130" r="25" fill="none" stroke="#ff6b6b" stroke-width="2"/>
	<circle cx="220" cy="130" r="45" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
	<circle cx="220" cy="130" r="75" fill="none" stroke="#4ecdc4" stroke-width="1" stroke-dasharray="3,3"/>
	<!-- Labels -->
	<!-- Core -->
	<text x="220" y="133" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">Core</text>
	<!-- Radiative zone -->
	<text x="220" y="86" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9" font-weight="700">Radiative</text>
	<text x="220" y="98" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9" font-weight="700">Zone</text>
	<!-- Convective zone -->
	<text x="220" y="42" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="8" font-weight="700">Convective</text>
	<text x="220" y="54" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="8" font-weight="700">Zone</text>
	<!-- Key panel (right) -->
	<rect x="380" y="70" width="340" height="130" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1.5"/>
	<text x="550" y="94" text-anchor="middle" fill="#f7f0e8" font-family="monospace" font-size="12" font-weight="700">Stellar Regions</text>
	<line x1="400" y1="104" x2="700" y2="104" stroke="#ffffff10" stroke-width="1"/>
	<!-- Core -->
	<rect x="400" y="110" width="14" height="14" rx="3" fill="#ff6b6b" opacity="0.5"/>
	<text x="424" y="122" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Core</text>
	<text x="570" y="122" fill="#c4b8ad" font-family="sans-serif" font-size="10">Nuclear fusion (hottest)</text>
	<!-- Radiative -->
	<rect x="400" y="132" width="14" height="14" rx="3" fill="#a78bfa" opacity="0.5"/>
	<text x="424" y="145" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">Radiative</text>
	<text x="570" y="145" fill="#c4b8ad" font-family="sans-serif" font-size="10">Energy transfers by radiation</text>
	<!-- Convective -->
	<rect x="400" y="154" width="14" height="14" rx="3" fill="#4ecdc4" opacity="0.5"/>
	<text x="424" y="167" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Convective</text>
	<text x="570" y="167" fill="#c4b8ad" font-family="sans-serif" font-size="10">Energy transfers by convection</text>
	<!-- Photosphere -->
	<rect x="400" y="176" width="14" height="14" rx="3" fill="#fcb045" opacity="0.5"/>
	<text x="424" y="189" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">Photosphere</text>
	<text x="570" y="189" fill="#c4b8ad" font-family="sans-serif" font-size="10">Visible surface of the star</text>
	<text x="380" y="230" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Stars form from clouds of dust particles → protostars → main sequence</text>
</svg>`;

// ── ILLUSTRATION: Stellar Nucleosynthesis Chain ───────────────────────────

const stellarNucleosynthesisIllustration = `
<svg role="img" aria-label="Stellar nucleosynthesis chain forming heavier elements" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="snBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#snBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">STELLAR NUCLEOSYNTHESIS</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Fusion chain in stars — building heavier elements from lighter ones</text>
	<!-- Fusion chain panels -->
	<!-- H → He -->
	<rect x="30" y="82" width="145" height="70" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="2"/>
	<text x="102" y="106" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">⁴H → ⁴He</text>
	<text x="102" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Hydrogen fusion</text>
	<text x="102" y="142" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Main sequence stars</text>
	<!-- He → C -->
	<rect x="210" y="82" width="145" height="70" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="2"/>
	<text x="282" y="106" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">³He → ¹²C</text>
	<text x="282" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Helium burning</text>
	<text x="282" y="142" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Triple-alpha process</text>
	<!-- C → Fe -->
	<rect x="390" y="82" width="145" height="70" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="2"/>
	<text x="462" y="106" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">¹²C → ⁵⁶Fe</text>
	<text x="462" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Carbon to Iron</text>
	<text x="462" y="142" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Advanced stages</text>
	<!-- Fe → Heavier -->
	<rect x="570" y="82" width="160" height="70" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="650" y="106" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Fe + n → Heavy</text>
	<text x="650" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Supernova</td>
	<text x="650" y="142" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Neutron capture</text>
	<!-- Arrows between -->
	<text x="182" y="121" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="14" font-weight="700">→</text>
	<text x="362" y="121" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="14" font-weight="700">→</text>
	<text x="542" y="121" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="14" font-weight="700">→</text>
	<!-- Bottom panels: Star Formation -->
	<rect x="30" y="170" width="340" height="68" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="200" y="192" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">Star Formation</text>
	<text x="200" y="210" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Clouds of dust → Protostars → Main sequence</text>
	<text x="200" y="226" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Remnant of red giant → Clouds of dust particles</text>
	<!-- Supernova -->
	<rect x="390" y="170" width="340" height="68" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="560" y="192" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Element Dispersion</text>
	<text x="560" y="210" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Supernova explosions disperse elements into space</text>
	<text x="560" y="226" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Million years after Big Bang → Stellar Nucleosynthesis</text>
</svg>`;

// ── ILLUSTRATION: Nuclear Fusion Equations ────────────────────────────────

const nuclearFusionIllustration = `
<svg role="img" aria-label="Nuclear fusion equations showing balanced nuclear reactions" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="neBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="230" rx="8" fill="url(#neBg)"/>
	<text x="32" y="38" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">NUCLEAR FUSION REACTIONS</text>
	<!-- Equation 1: Hydrogen fusion -->
	<rect x="30" y="62" width="340" height="68" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="80" y="92" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">¹H</text>
	<text x="105" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + </text>
	<text x="125" y="92" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">¹H</text>
	<text x="150" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> → </text>
	<text x="175" y="92" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">²H</text>
	<text x="200" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + </text>
	<text x="215" y="92" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">e⁺</text>
	<text x="240" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + ν</text>
	<text x="200" y="118" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">p + p → Deuterium + positron + neutrino</text>
	<!-- Equation 2: Helium -->
	<rect x="390" y="62" width="340" height="68" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="440" y="92" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">²H</text>
	<text x="465" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + </text>
	<text x="485" y="92" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">¹H</text>
	<text x="510" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> → </text>
	<text x="535" y="92" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">³He</text>
	<text x="560" y="92" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + γ</text>
	<text x="560" y="118" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">D + p → He-3 + gamma ray</text>
	<!-- Equation 3: Triple-alpha -->
	<rect x="30" y="145" width="340" height="68" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="80" y="175" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">⁴He</text>
	<text x="105" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + </text>
	<text x="125" y="175" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">⁴He</text>
	<text x="150" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + </text>
	<text x="170" y="175" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">⁴He</text>
	<text x="195" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> → </text>
	<text x="215" y="175" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">¹²C</text>
	<text x="240" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + γ</text>
	<text x="200" y="200" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Triple-alpha: 3 × He-4 → Carbon-12 + energy</text>
	<!-- Equation 4: Be fusion -->
	<rect x="390" y="145" width="340" height="68" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="440" y="175" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">⁸Be</text>
	<text x="465" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + </text>
	<text x="485" y="175" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">⁴He</text>
	<text x="510" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> → </text>
	<text x="535" y="175" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">¹²C</text>
	<text x="560" y="175" fill="#c4b8ad" font-family="sans-serif" font-size="11"> + γ</text>
	<text x="560" y="200" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Be-8 + He-4 → C-12 (as in lecture slide 42)</text>
</svg>`;

// ── QUIZ QUESTIONS ────────────────────────────────────────────────────────

const bigBangNucleosynthesisQuizItems: Question[] = [
	// ── BIG BANG & FUNDAMENTAL CONCEPTS (Q1–Q7) ──────────────────────────
	{
		id: 1,
		question:
			'A physics student describes the Big Bang as "an explosion in space." According to the lecture, how should this description be corrected?',
		options: [
			'The Big Bang is an expansion of space itself, not an explosion within space.',
			'The Big Bang was an explosion of matter that filled pre-existing empty space.',
			'The Big Bang was a slow inflation, not an expansion at all.',
			'The Big Bang was the formation of the first stars, not the universe.'
		],
		answer: 'The Big Bang is an expansion of space itself, not an explosion within space.',
		explanation:
			'The lecture explicitly states: "The Big Bang is an expansion of the space." This is a fundamental concept — space itself expanded, carrying matter with it, rather than matter exploding into pre-existing space.',
		difficulty: 'advanced',
		illustration: bigBangTimelineIllustration
	},
	{
		id: 2,
		question:
			'As the universe expands following the Big Bang, what happens to its temperature, and why does this matter for particle formation?',
		options: [
			'The universe cools as it expands; particles become less energetic and can form stable structures.',
			'The universe heats up as it expands; increased energy breaks particles apart.',
			'Temperature remains constant regardless of expansion; only density changes.',
			'The universe heats up dramatically, allowing for infinite particle creation.'
		],
		answer: 'The universe cools as it expands; particles become less energetic and can form stable structures.',
		explanation:
			'The lecture establishes two linked concepts: "As the Universe expands, it cools" and "The more energetic the particles are, the higher their temperature will be." Cooling allowed particles to slow down and form stable atomic structures.',
		difficulty: 'advanced',
		illustration: bigBangTimelineIllustration
	},
	{
		id: 3,
		question:
			'According to the lecture, what determines the identity of a chemical element?',
		options: [
			'The number of protons in its nucleus determines element identity.',
			'The number of neutrons in its nucleus determines element identity.',
			'The total number of electrons determines element identity.',
			'The atomic mass number determines element identity.',
		],
		answer: 'The number of protons in its nucleus determines element identity.',
		explanation:
			'The lecture states: "The identity of the element depends on how many protons it has." This is a core principle: the atomic number (Z) defines the element.',
		difficulty: 'advanced',
		illustration: atomStructureIllustration
	},
	{
		id: 4,
		question:
			'The lecture outlines 4 Basic Concepts of Star Formation. Which concept explains why different elements have fundamentally different chemical properties?',
		options: [
			'The identity of the element depends on how many protons it has.',
			'The Big Bang is an expansion of the space.',
			'As the Universe expands, it cools.',
			'The more energetic the particles are, the higher their temperature will be.'
		],
		answer: 'The identity of the element depends on how many protons it has.',
		explanation:
			'Among the 4 Basic Concepts, only the proton-number rule governs elemental identity. Different proton counts yield different elements with distinct chemical properties, regardless of neutron variations (isotopes).',
		difficulty: 'advanced',
		illustration: atomStructureIllustration
	},
	{
		id: 5,
		question:
			'The lecture includes a famous quote from physicist George Gamow. What timeline does he describe for cosmic evolution?',
		options: [
			'"It took less than an hour to make the atoms, a few hundred million years to make the stars and planets, but five billion years to make a man."',
			'"It took a billion years to make the first atoms, a trillion years to make stars, and an eternity to make life."',
			'"The universe formed in six days, with stars appearing on the fourth day and humans on the sixth."',
			'"Atoms formed in the first second, stars in the first million years, and planets in the first billion years."'
		],
		answer: '"It took less than an hour to make the atoms, a few hundred million years to make the stars and planets, but five billion years to make a man."',
		explanation:
			'The lecture features this exact quote from George Gamow (1904-1968), emphasizing how quickly the light elements formed via Big Bang nucleosynthesis compared to the much longer timescales for star formation and biological evolution.',
		difficulty: 'expert',
		illustration: lightElementsFormationIllustration
	},
	{
		id: 6,
		question:
			'A researcher observes that the universe has a nearly uniform background temperature of about 2.7 K in all directions. Which concept from the 4 Basic Concepts of Star Formation does this observation support?',
		options: [
			'As the Universe expands, it cools — supporting that the universe started hot and expanded to its current cold state.',
			'The more energetic the particles are, the higher their temperature will be — this shows particles are now maximally energetic.',
			'The Big Bang is an expansion of space — proving that no cooling has occurred.',
			'The identity of the element depends on its protons — linking temperature directly to element formation.'
		],
		answer: 'As the Universe expands, it cools — supporting that the universe started hot and expanded to its current cold state.',
		explanation:
			'The cosmic microwave background radiation (2.7 K) is direct evidence that the universe was once extremely hot and has been cooling as it expanded, exactly matching the lecture concept.',
		difficulty: 'expert',
		illustration: bigBangTimelineIllustration
	},

	// ── ATOMIC STRUCTURE & ISOTOPES (Q7–Q10) ─────────────────────────────
	{
		id: 7,
		question:
			'A chemistry student is asked to draw an atom of carbon-12. How many protons, neutrons, and electrons should be included?',
		options: [
			'6 protons, 6 neutrons, and 6 electrons.',
			'12 protons, 12 neutrons, and 12 electrons.',
			'6 protons, 12 neutrons, and 6 electrons.',
			'12 protons, 6 neutrons, and 12 electrons.'
		],
		answer: '6 protons, 6 neutrons, and 6 electrons.',
		explanation:
			'Carbon-12 has 6 protons (defining it as carbon), 6 neutrons (12 - 6 = 6), and 6 electrons (equal to protons in a neutral atom). The lecture emphasizes that proton number determines element identity.',
		difficulty: 'advanced',
		illustration: isotopeIllustration
	},
	{
		id: 8,
		question:
			'The lecture defines isotopes as having the same number of protons but different numbers of neutrons, and notes they "hold and lose a maximum of 3 neutrons." Hydrogen-1 (¹H) has 0 neutrons. Which isotope of hydrogen has exactly 2 neutrons?',
		options: [
			'Hydrogen-3 (tritium) has 2 neutrons.',
			'Hydrogen-2 (deuterium) has 2 neutrons.',
			'Hydrogen-4 has 2 neutrons.',
			'Hydrogen-1 can gain up to 2 neutrons under extreme pressure.'
		],
		answer: 'Hydrogen-3 (tritium) has 2 neutrons.',
		explanation:
			'Tritium (³H) has 1 proton and 2 neutrons. Deuterium (²H) has 1 neutron. The lecture notes that isotopes typically hold or lose a maximum of 3 neutrons, and tritium is a radioactive isotope formed during Big Bang nucleosynthesis.',
		difficulty: 'advanced',
		illustration: isotopeIllustration
	},
	{
		id: 9,
		question:
			'An astronomer identifies two atoms of the same element with different mass numbers. Which statement correctly describes their relationship?',
		options: [
			'They are isotopes — same proton number, different neutron number.',
			'They are different elements that happen to have similar properties.',
			'They are isomers — same composition but different energy states.',
			'They are allotropes — different structural arrangements of the same atoms.'
		],
		answer: 'They are isotopes — same proton number, different neutron number.',
		explanation:
			'The lecture defines isotopes as "the same number of protons but different number of neutrons." Since both atoms have the same proton count, they are the same element, but different isotopes with varying mass numbers.',
		difficulty: 'advanced',
		illustration: isotopeIllustration
	},
	{
		id: 10,
		question:
			'The slide on isotopes includes the note "(Holds and Loses a maximum of 3 neutrons)." What practical implication does this have for the formation of light elements in the early universe?',
		options: [
			'It limits which isotopes of an element can form — only those within 3 neutrons of the stable configuration are likely.',
			'It means all elements can hold up to 3 neutrons before becoming radioactive.',
			'It indicates that only elements with fewer than 3 neutrons can form during nucleosynthesis.',
			'It explains why neutrons are never lost during nuclear fusion reactions.'
		],
		answer: 'It limits which isotopes of an element can form — only those within 3 neutrons of the stable configuration are likely.',
		explanation:
			'The lecture\'s note about the "maximum of 3 neutrons" helps explain why only certain isotopes formed during Big Bang nucleosynthesis. Isotopes that differ by more than 3 neutrons from the stable configuration are typically too unstable to persist.',
		difficulty: 'expert',
		illustration: isotopeIllustration
	},

	// ── BIG BANG NUCLEOSYNTHESIS (Q11–Q16) ────────────────────────────────
	{
		id: 11,
		question:
			'During Big Bang nucleosynthesis, which was the very first element to form as protons and neutrons combined?',
		options: [
			'Hydrogen (¹H) was the first element to form.',
			'Helium (⁴He) was the first element to form.',
			'Lithium (⁷Li) was the first element to form.',
			'Carbon (¹²C) was the first element to form.'
		],
		answer: 'Hydrogen (¹H) was the first element to form.',
		explanation:
			'The lecture slides sequence light elements starting with Hydrogen, followed by Deuterium, Tritium, Helium-3, Helium-4, Lithium-7, and Beryllium-7. Single protons (hydrogen nuclei) were the simplest and first to form from the cooling quark-gluon plasma.',
		difficulty: 'advanced',
		illustration: lightElementsFormationIllustration
	},
	{
		id: 12,
		question:
			'In the Big Bang nucleosynthesis sequence, which isotope of hydrogen has one proton and one neutron, making it a stable isotope that later participates in further fusion reactions?',
		options: [
			'Deuterium (²H) has one proton and one neutron.',
			'Tritium (³H) has one proton and one neutron.',
			'Hydrogen-1 (¹H) has one proton and one neutron.',
			'Hydrogen-4 (⁴H) has one proton and one neutron.'
		],
		answer: 'Deuterium (²H) has one proton and one neutron.',
		explanation:
			'The lecture slide on "Formation of Light Elements" shows Deuterium (²H) as the second step, with 1 proton and 1 neutron. It forms when a proton captures a neutron, and it is stable, allowing further reactions to proceed.',
		difficulty: 'advanced',
		illustration: lightElementsFormationIllustration
	},
	{
		id: 13,
		question:
			'According to the lecture, which elements were the final products of Big Bang nucleosynthesis (before stars began forming heavier elements)?',
		options: [
			'Mainly hydrogen and helium, with trace amounts of lithium and beryllium.',
			'All elements up to iron, including carbon, nitrogen, and oxygen.',
			'Only hydrogen and helium, with no other elements formed.',
			'Mainly carbon and oxygen, with smaller amounts of hydrogen and helium.'
		],
		answer: 'Mainly hydrogen and helium, with trace amounts of lithium and beryllium.',
		explanation:
			'The lecture shows the formation sequence ending at Lithium-7 and Beryllium-7. The Big Bang produced mostly hydrogen and helium-4, with tiny amounts of deuterium, helium-3, lithium, and beryllium. Heavier elements formed later in stars.',
		difficulty: 'expert',
		illustration: lightElementsFormationIllustration
	},
	{
		id: 14,
		question:
			'During Big Bang nucleosynthesis, both Lithium-7 and Beryllium-7 are formed. The lecture labels one as "Stable" and the other as "Unstable." Which isotope is unstable and decays?',
		options: [
			'Beryllium-7 is unstable and decays.',
			'Lithium-7 is unstable and decays.',
			'Both are stable under normal conditions.',
			'Both are unstable and decay rapidly.'
		],
		answer: 'Beryllium-7 is unstable and decays.',
		explanation:
			'The lecture slide for Beryllium-7 explicitly labels it as "Unstable" alongside "Stable" for the comparison, while Lithium-7 is labeled "Stable." Beryllium-7 decays via electron capture to Lithium-7 with a half-life of about 53 days.',
		difficulty: 'expert',
		illustration: lightElementsFormationIllustration
	},
	{
		id: 15,
		question:
			'Big Bang nucleosynthesis occurred within a very short time after the Big Bang. According to the George Gamow quote in the lecture, approximately how long did it take to form the atoms?',
		options: [
			'Less than an hour.',
			'About 1 million years.',
			'Exactly 3 minutes and 45 seconds.',
			'Roughly 380,000 years.'
		],
		answer: 'Less than an hour.',
		explanation:
			'George Gamow\'s quote in the lecture states "It took less than an hour to make the atoms." This highlights the remarkable speed of Big Bang nucleosynthesis — most of the light elements formed within the first few minutes after the Big Bang.',
		difficulty: 'expert',
		illustration: lightElementsFormationIllustration
	},
	{
		id: 16,
		question:
			'If Big Bang nucleosynthesis produced primarily hydrogen and helium, what is the approximate percentage of hydrogen versus helium in the universe\'s primordial matter?',
		options: [
			'About 75% hydrogen and 25% helium by mass.',
			'About 50% hydrogen and 50% helium by mass.',
			'About 90% hydrogen and 10% helium by mass.',
			'About 25% hydrogen and 75% helium by mass.'
		],
		answer: 'About 75% hydrogen and 25% helium by mass.',
		explanation:
			'While the lecture doesn\'t give exact percentages, standard Big Bang nucleosynthesis theory predicts roughly 75% hydrogen and 25% helium by mass, with trace amounts of other light elements. This matches astronomical observations of the primordial universe.',
		difficulty: 'expert',
		illustration: lightElementsFormationIllustration
	},

	// ── STELLAR NUCLEOSYNTHESIS & STAR FORMATION (Q17–Q22) ────────────────
	{
		id: 17,
		question:
			'After Big Bang nucleosynthesis ended, the universe underwent a long period before the next phase began. According to the lecture, when did stellar nucleosynthesis start?',
		options: [
			'Millions of years after the Big Bang, when the first stars formed.',
			'Immediately after the Big Bang, alongside element formation.',
			'Only after the first galaxies collided, billions of years later.',
			'During the first few seconds of the universe\'s existence.'
		],
		answer: 'Millions of years after the Big Bang, when the first stars formed.',
		explanation:
			'The lecture transition slide (slide 19) states "Million years after the Big Bang … Stellar Nucleosynthesis occurs…" This marks the shift from Big Bang nucleosynthesis (first few minutes) to stellar nucleosynthesis (millions of years later in stars).',
		difficulty: 'advanced',
		illustration: stellarNucleosynthesisIllustration
	},
	{
		id: 18,
		question:
			'According to the lecture, what are the four stages of star formation and element dispersion?',
		options: [
			'Star formation from dust clouds, remnant of red giant, protostars, and dispersion of elements in space.',
			'Big Bang, galaxy formation, planet formation, and black hole formation.',
			'Hydrogen burning, helium burning, carbon burning, and iron formation.',
			'Molecular cloud collapse, nuclear ignition, main sequence, and supernova.'
		],
		answer: 'Star formation from dust clouds, remnant of red giant, protostars, and dispersion of elements in space.',
		explanation:
			'The lecture (slide 20) lists exactly: A. STAR FORMATION (Clouds of Dust Particles), B. REMNANT OF RED GIANT START (Clouds of Dust Particles), C. PROTOSTARS (Young stars within the earliest phase of stellar evolution), D. Cause behind the dispersion of elements in space.',
		difficulty: 'advanced',
		illustration: stellarNucleosynthesisIllustration
	},
	{
		id: 19,
		question:
			'A protostar is identified in a nebula. Based on the lecture, what is a protostar, and what is its relationship to the life cycle of a star?',
		options: [
			'A protostar is a young star in the earliest phase of stellar evolution, before stable nuclear fusion begins.',
			'A protostar is a dead star that has exhausted its nuclear fuel.',
			'A protostar is a cloud of dust that will never form a star.',
			'A protostar is a star that has already exploded as a supernova.'
		],
		answer: 'A protostar is a young star in the earliest phase of stellar evolution, before stable nuclear fusion begins.',
		explanation:
			'The lecture defines protostars as "Young stars within the earliest phase of stellar evolution." They form from collapsing clouds of dust and gas, and their cores are not yet hot enough for sustained hydrogen fusion.',
		difficulty: 'advanced',
		illustration: starLayersIllustration
	},
	{
		id: 20,
		question:
			'The lecture shows that helium (He) is converted to iron (Fe) during stellar nucleosynthesis. Through which process does this occur within massive stars?',
		options: [
			'Successive nuclear fusion reactions in the stellar core, building heavier elements.',
			'Gravitational collapse directly converting helium atoms into iron atoms.',
			'Radioactive decay of helium into iron over millions of years.',
			'Helium atoms absorbing free neutrons to become iron atoms.'
		],
		answer: 'Successive nuclear fusion reactions in the stellar core, building heavier elements.',
		explanation:
			'The lecture slide (slide 28) shows "The He (Helium) is converted to Fe (Iron)." This occurs through a chain of nuclear fusion reactions in the stellar core: helium fuses to carbon, then to oxygen, neon, magnesium, silicon, and finally iron — element by element.',
		difficulty: 'expert',
		illustration: stellarNucleosynthesisIllustration
	},
	{
		id: 21,
		question:
			'An astronomy student is studying the layers of a star. According to the lecture, the star has specific layers. Which layer is the hottest and where does nuclear fusion primarily occur?',
		options: [
			'The core is the hottest layer where nuclear fusion occurs.',
			'The radiative zone is the hottest layer where nuclear fusion occurs.',
			'The convective zone is the hottest layer where nuclear fusion occurs.',
			'The photosphere is the hottest layer where nuclear fusion occurs.'
		],
		answer: 'The core is the hottest layer where nuclear fusion occurs.',
		explanation:
			'The lecture slide "Layers of the Star" shows the core as the innermost region. Nuclear fusion requires extremely high temperatures and pressures, which exist only in the stellar core where hydrogen fuses into helium, releasing energy.',
		difficulty: 'advanced',
		illustration: starLayersIllustration
	},
	{
		id: 22,
		question:
			'How does energy generated in the star\'s core reach the surface, according to the stellar structure shown in the lecture?',
		options: [
			'From the core through the radiative zone (radiation), then through the convective zone (convection), to the photosphere.',
			'Directly from the core to the surface through large convection currents only.',
			'Through the convective zone first, then the radiative zone, and then out.',
			'Energy travels only through space between atoms, not through the star itself.'
		],
		answer: 'From the core through the radiative zone (radiation), then through the convective zone (convection), to the photosphere.',
		explanation:
			'The star layers diagram shows: Core → Radiative Zone (energy transfers by radiation) → Convective Zone (energy transfers by convection) → Photosphere (visible surface). This layered transport allows energy to gradually move outward.',
		difficulty: 'expert',
		illustration: starLayersIllustration
	},

	// ── NUCLEAR REACTIONS & ELEMENT CYCLES (Q23–Q25) ──────────────────────
	{
		id: 23,
		question:
			'The lecture\'s activity (slide 42) describes the fusion of Beryllium-8 and Helium-4 producing Carbon-12. In a nuclear equation, ⁸Be + ⁴He → ¹²C + γ. Why is this reaction significant for the formation of elements heavier than helium?',
		options: [
			'It bridges the gap between light elements (He) and carbon, the first element formed in stars through the triple-alpha process.',
			'It is the only way to produce energy in stars after hydrogen is exhausted.',
			'It produces radioactive carbon that decays into nitrogen and oxygen.',
			'It directly produces iron, which is the heaviest element formed in stars.'
		],
		answer: 'It bridges the gap between light elements (He) and carbon, the first element formed in stars through the triple-alpha process.',
		explanation:
			'The reaction ⁸Be + ⁴He → ¹²C is the final step of the triple-alpha process. Three helium nuclei (alpha particles) fuse to form carbon-12. This is the critical gateway to forming all heavier elements because carbon is the first element beyond helium.',
		difficulty: 'expert',
		illustration: nuclearFusionIllustration
	},
	{
		id: 24,
		question:
			'In the lecture activity (slide 30-31), a nuclear equation involving Nitrogen-16 is shown, with the answer being Carbon-12. Which type of nuclear reaction does this represent?',
		options: [
			'The conversion of ¹⁶N to ¹²C suggests an alpha decay or nuclear fission, where the nucleus releases a particle and transforms into a lighter element.',
			'The conversion represents the fusion of two nitrogen atoms to form carbon and helium.',
			'The reaction represents the absorption of protons by nitrogen to form carbon.',
			'The conversion is a simple isomerization that does not change the nucleus.'
		],
		answer: 'The conversion of ¹⁶N to ¹²C suggests an alpha decay or nuclear fission, where the nucleus releases a particle and transforms into a lighter element.',
		explanation:
			'The lecture activity shows ¹⁶N (with 7 protons) being converted to ¹²C (with 6 protons). The loss of 4 in mass number and 1 in atomic number indicates emission of an alpha particle-like fragment. This demonstrates how nuclear transformations change element identity.',
		difficulty: 'expert',
		illustration: nuclearFusionIllustration
	},
	{
		id: 25,
		question:
			'Considering the entire cycle from Big Bang nucleosynthesis to stellar nucleosynthesis, what is the correct sequence of element formation?',
		options: [
			'Big Bang → H, He, Li, Be → Stellar fusion → C, O, Fe → Supernova → Heavier elements (Au, U)',
			'Big Bang → All elements up to U → Stars simply rearrange atoms → No new elements form',
			'Big Bang → Only H → Stars fuse H directly to Fe → All other elements form in the Big Bang',
			'Stellar nucleosynthesis → H, He → Big Bang → C, O, Fe → Supernova Au, U'
		],
		answer: 'Big Bang → H, He, Li, Be → Stellar fusion → C, O, Fe → Supernova → Heavier elements (Au, U)',
		explanation:
			'The lecture traces the complete journey: (1) Big Bang nucleosynthesis formed the first light elements (H, He, Li, Be), (2) Stellar nucleosynthesis in stars fused these into heavier elements up to iron, (3) Supernova explosions create elements heavier than iron (like gold and uranium) through neutron capture processes.',
		difficulty: 'expert',
		illustration: stellarNucleosynthesisIllustration
	}
];

export const bigBangNucleosynthesisQuizData = bigBangNucleosynthesisQuizItems satisfies Question[];
