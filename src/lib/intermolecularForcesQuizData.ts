import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: IMFA Strength Hierarchy ─────────────────────────────────

const imfaHierarchyIllustration = `
<svg role="img" aria-label="Hierarchy of intermolecular forces by relative strength" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="imHiBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="300" rx="8" fill="url(#imHiBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">INTERMOLECULAR FORCES - STRENGTH HIERARCHY</text>

	<!-- Ion-Dipole (strongest) -->
	<rect x="40" y="64" width="680" height="42" rx="6" fill="#ff6b6b" opacity="0.9"/>
	<text x="380" y="90" text-anchor="middle" fill="#fff" font-family="monospace" font-size="13" font-weight="700">ION-DIPOLE - STRONGEST (10-40 kJ/mol)</text>

	<!-- Hydrogen Bonding -->
	<rect x="40" y="112" width="680" height="42" rx="6" fill="#fcb045" opacity="0.85"/>
	<text x="380" y="138" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="13" font-weight="700">HYDROGEN BONDING (10-40 kJ/mol)</text>

	<!-- Dipole-Dipole -->
	<rect x="40" y="160" width="520" height="42" rx="6" fill="#4ecdc4" opacity="0.8"/>
	<text x="300" y="186" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="13" font-weight="700">DIPOLE-DIPOLE (0.5-5 kJ/mol)</text>

	<!-- London Dispersion -->
	<rect x="40" y="208" width="380" height="42" rx="6" fill="#a78bfa" opacity="0.7"/>
	<text x="230" y="234" text-anchor="middle" fill="#fff" font-family="monospace" font-size="13" font-weight="700">LONDON DISPERSION (0.05-5 kJ/mol)</text>

	<!-- Strength axis -->
	<line x1="40" y1="268" x2="720" y2="268" stroke="#ffffff30" stroke-width="1"/>
	<polygon points="720,268 712,264 712,272" fill="#ffffff30"/>
	<text x="380" y="286" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Increasing strength - dependent on polarity, molecular weight, and functional groups</text>
</svg>`;

// ── ILLUSTRATION: London Dispersion Forces ─────────────────────────────────

const londonDispersionIllustration = `
<svg role="img" aria-label="London dispersion forces mechanism" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="ldBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#ldBg)"/>
	<text x="32" y="40" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">LONDON DISPERSION FORCES</text>

	<!-- Atom 1 -- instantaneous dipole -->
	<rect x="34" y="66" width="220" height="170" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="144" y="94" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">INSTANTANEOUS DIPOLE</text>
	<circle cx="144" cy="130" r="28" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.3"/>
	<circle cx="130" cy="116" r="8" fill="#ff6b6b" opacity="0.6"/>
	<text x="130" y="120" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">δ⁻</text>
	<circle cx="158" cy="144" r="6" fill="#4ecdc4" opacity="0.6"/>
	<text x="158" y="148" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">δ⁺</text>
	<text x="144" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Electron cloud fluctuates</text>
	<text x="144" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">creating temporary dipole</text>

	<!-- Atom 2 -- induced dipole -->
	<rect x="270" y="66" width="220" height="170" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="380" y="94" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">INDUCED DIPOLE</text>
	<circle cx="380" cy="130" r="28" fill="none" stroke="#4ecdc4" stroke-width="2" opacity="0.3"/>
	<circle cx="396" cy="144" r="8" fill="#4ecdc4" opacity="0.6"/>
	<text x="396" y="148" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">δ⁺</text>
	<circle cx="364" cy="116" r="6" fill="#ff6b6b" opacity="0.6"/>
	<text x="364" y="120" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">δ⁻</text>
	<text x="380" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">First dipole polarises</text>
	<text x="380" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">neighbouring atom</text>
	<text x="380" y="222" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Opposite charges attract</text>

	<!-- Bottom info -->
	<rect x="506" y="66" width="222" height="170" rx="8" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<text x="617" y="94" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">KEY PROPERTIES</text>
	<text x="617" y="130" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Weakest of all IMFA</text>
	<text x="617" y="150" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Strength increases with</text>
	<text x="617" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">molecular weight</text>
	<text x="617" y="190" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Surface area matters</text>
	<text x="617" y="214" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Present in ALL molecules</text>
	<text x="617" y="232" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Only IMFA in nonpolar</text>
</svg>`;

// ── ILLUSTRATION: Dipole-Dipole Forces ──────────────────────────────────────

const dipoleDipoleIllustration = `
<svg role="img" aria-label="Dipole-dipole interactions between polar molecules" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="ddBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#ddBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">DIPOLE-DIPOLE INTERACTIONS</text>

	<!-- Molecular alignment diagram -->
	<rect x="34" y="66" width="340" height="148" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="204" y="94" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">POLAR MOLECULE ALIGNMENT</text>

	<!-- HCl molecule 1 -->
	<circle cx="90" cy="130" r="8" fill="#ff6b6b" opacity="0.8"/>
	<text x="90" y="134" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7" font-weight="700">Cl</text>
	<line x1="98" y1="130" x2="118" y2="130" stroke="#fff" stroke-width="2"/>
	<circle cx="124" cy="130" r="6" fill="#c4b8ad" opacity="0.8"/>
	<text x="124" y="134" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<text x="90" y="150" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="7">δ⁻</text>
	<text x="124" y="150" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">δ⁺</text>

	<!-- HCl molecule 2 (aligned opposite) -->
	<circle cx="180" cy="130" r="8" fill="#ff6b6b" opacity="0.8"/>
	<text x="180" y="134" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7" font-weight="700">Cl</text>
	<line x1="188" y1="130" x2="208" y2="130" stroke="#fff" stroke-width="2"/>
	<circle cx="214" cy="130" r="6" fill="#c4b8ad" opacity="0.8"/>
	<text x="214" y="134" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<text x="180" y="150" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="7">δ⁻</text>
	<text x="214" y="150" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">δ⁺</text>

	<text x="204" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Opposite partial charges attract</text>
	<text x="204" y="198" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">δ⁺ of one molecule aligns with δ⁻ of another</text>

	<!-- Properties panel -->
	<rect x="390" y="66" width="340" height="148" rx="8" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<text x="560" y="94" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">PROPERTIES</text>
	<text x="560" y="124" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Stronger than London dispersion</text>
	<text x="560" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Weaker than hydrogen bonding</text>
	<text x="560" y="164" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">~0.5-5 kJ/mol</text>
	<text x="560" y="184" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Requires polar molecules</text>
	<text x="560" y="204" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Examples: HCl, CH3Cl, SO2</text>
</svg>`;

// ── ILLUSTRATION: Hydrogen Bonding ──────────────────────────────────────────

const hydrogenBondingIllustration = `
<svg role="img" aria-label="Hydrogen bonding between water molecules" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="hbBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#hbBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">HYDROGEN BONDING</text>

	<!-- Water molecule 1 -->
	<rect x="34" y="66" width="220" height="170" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="144" y="94" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">H2O MOLECULE</text>
	<circle cx="144" cy="140" r="12" fill="#ff6b6b" opacity="0.85"/>
	<text x="144" y="144" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">O</text>
	<line x1="144" y1="140" x2="120" y2="120" stroke="#fff" stroke-width="2"/>
	<circle cx="116" cy="117" r="7" fill="#c4b8ad"/>
	<text x="116" y="121" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<line x1="144" y1="140" x2="168" y2="120" stroke="#fff" stroke-width="2"/>
	<circle cx="172" cy="117" r="7" fill="#c4b8ad"/>
	<text x="172" y="121" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<text x="116" y="110" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">δ⁺</text>
	<text x="172" y="110" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">δ⁺</text>
	<text x="154" y="130" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="7">δ⁻</text>
	<text x="144" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Covalent O-H bond (intra)</text>
	<text x="144" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">O strongly pulls e- from H</text>

	<!-- Water molecule 2 -->
	<rect x="302" y="66" width="220" height="170" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="412" y="94" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">H2O MOLECULE</text>
	<circle cx="412" cy="140" r="12" fill="#ff6b6b" opacity="0.85"/>
	<text x="412" y="144" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">O</text>
	<line x1="412" y1="140" x2="388" y2="120" stroke="#fff" stroke-width="2"/>
	<circle cx="384" cy="117" r="7" fill="#c4b8ad"/>
	<text x="384" y="121" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>
	<line x1="412" y1="140" x2="436" y2="120" stroke="#fff" stroke-width="2"/>
	<circle cx="440" cy="117" r="7" fill="#c4b8ad"/>
	<text x="440" y="121" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7" font-weight="700">H</text>

	<!-- Hydrogen bond -->
	<text x="258" y="146" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="9">H-bond</text>
	<line x1="272" y1="144" x2="290" y2="144" stroke="#fcb045" stroke-width="2" stroke-dasharray="4,3"/>

	<!-- Key conditions panel -->
	<rect x="538" y="66" width="190" height="170" rx="8" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<text x="633" y="94" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">CONDITIONS</text>
	<text x="633" y="130" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">H bonded to:</text>
	<text x="633" y="152" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">N, O, or F</text>
	<text x="633" y="176" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Strong dipole-dipole</text>
	<text x="633" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">10-40 kJ/mol</text>
	<text x="633" y="222" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H2O, NH3, HF, CH3OH</text>
</svg>`;

// ── ILLUSTRATION: IMFA Types Comparison ────────────────────────────────────

const imfaComparisonIllustration = `
<svg role="img" aria-label="Comparison table of all intermolecular forces" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="imCmpBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#imCmpBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">COMPARISON OF INTERMOLECULAR FORCES</text>

	<!-- Table header -->
	<rect x="34" y="62" width="692" height="28" rx="4" fill="#00d4ff" opacity="0.15"/>
	<text x="120" y="80" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="11" font-weight="700">FORCE TYPE</text>
	<line x1="210" y1="62" x2="210" y2="90" stroke="#ffffff20" stroke-width="1"/>
	<text x="340" y="80" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="11" font-weight="700">RELATIVE STRENGTH</text>
	<line x1="470" y1="62" x2="470" y2="90" stroke="#ffffff20" stroke-width="1"/>
	<text x="580" y="80" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="11" font-weight="700">EXAMPLES</text>

	<!-- Row 1: Ion-Dipole -->
	<rect x="34" y="94" width="692" height="34" rx="4" fill="#ff6b6b" opacity="0.12"/>
	<text x="120" y="115" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Ion-Dipole</text>
	<text x="340" y="115" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Strongest - 10-40 kJ/mol</text>
	<text x="580" y="115" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Na+ in H2O, K+ in H2O</text>

	<!-- Row 2: Hydrogen Bonding -->
	<rect x="34" y="132" width="692" height="34" rx="4" fill="#fcb045" opacity="0.12"/>
	<text x="120" y="153" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">Hydrogen Bond</text>
	<text x="340" y="153" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Strong - 10-40 kJ/mol</text>
	<text x="580" y="153" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">H2O, NH3, HF, CH3OH</text>

	<!-- Row 3: Dipole-Dipole -->
	<rect x="34" y="170" width="692" height="34" rx="4" fill="#4ecdc4" opacity="0.12"/>
	<text x="120" y="191" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Dipole-Dipole</text>
	<text x="340" y="191" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Moderate - 0.5-5 kJ/mol</text>
	<text x="580" y="191" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">HCl, CH3Cl, SO2</text>

	<!-- Row 4: London Dispersion -->
	<rect x="34" y="208" width="692" height="34" rx="4" fill="#a78bfa" opacity="0.12"/>
	<text x="120" y="229" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">London Dispersion</text>
	<text x="340" y="229" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Weakest - 0.05-5 kJ/mol</text>
	<text x="580" y="229" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">He, CH4, CCl4, H2, O2</text>

	<!-- Strength arrow -->
	<text x="380" y="268" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Increasing strength - polarity, molecular weight, and functional groups increase IMFA</text>
</svg>`;

// ── ILLUSTRATION: Ion-Dipole Forces ────────────────────────────────────────

const ionDipoleIllustration = `
<svg role="img" aria-label="Ion-dipole interaction" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="idBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#idBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ION-DIPOLE INTERACTIONS</text>

	<!-- Central ion (Na+) -->
	<rect x="34" y="66" width="340" height="148" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="204" y="94" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Na+ IN WATER</text>
	<circle cx="204" cy="148" r="20" fill="#ff6b6b" opacity="0.85"/>
	<text x="204" y="153" text-anchor="middle" fill="#fff" font-family="monospace" font-size="11" font-weight="700">Na+</text>

	<!-- Surrounding water molecules -->
	<circle cx="150" cy="108" r="8" fill="#ff6b6b" opacity="0.6"/>
	<text x="150" y="112" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">O</text>
	<line x1="148" y1="104" x2="142" y2="96" stroke="#fff" stroke-width="1.2"/>
	<circle cx="140" cy="94" r="5" fill="#c4b8ad"/>
	<text x="140" y="97" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="5">H</text>
	<line x1="152" y1="104" x2="160" y2="96" stroke="#fff" stroke-width="1.2"/>
	<circle cx="162" cy="94" r="5" fill="#c4b8ad"/>
	<text x="162" y="97" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="5">H</text>

	<circle cx="152" cy="180" r="8" fill="#ff6b6b" opacity="0.6"/>
	<text x="152" y="184" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">O</text>
	<circle cx="260" cy="110" r="8" fill="#ff6b6b" opacity="0.6"/>
	<text x="260" y="114" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">O</text>
	<circle cx="265" cy="180" r="8" fill="#ff6b6b" opacity="0.6"/>
	<text x="265" y="184" text-anchor="middle" fill="#fff" font-family="monospace" font-size="6">O</text>

	<!-- Properties panel -->
	<rect x="390" y="66" width="340" height="148" rx="8" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<text x="560" y="94" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">KEY POINTS</text>
	<text x="560" y="124" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Occurs between ions and</text>
	<text x="560" y="142" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">polar molecules</text>
	<text x="560" y="164" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Strongest IMFA type</text>
	<text x="560" y="184" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Explains dissolution of</text>
	<text x="560" y="202" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">ionic compounds in water</text>
	<text x="560" y="224" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Hydration: Na+(aq), Cl-(aq)</text>
</svg>`;

// ── ILLUSTRATION: Boiling Point Trends ─────────────────────────────────────

const boilingPointTrendsIllustration = `
<svg role="img" aria-label="Boiling point trends across hydrides" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="bpTrBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#bpTrBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">BOILING POINT TRENDS - HYDROGEN BONDING EFFECT</text>

	<!-- Group trend labels -->
	<text x="76" y="72" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">Group 14</text>
	<text x="222" y="72" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="9" font-weight="700">Group 15</text>
	<text x="380" y="72" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="9" font-weight="700">Group 16</text>
	<text x="530" y="72" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">Group 17</text>

	<text x="380" y="100" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">~ H2O (100 C)</text>
	<line x1="380" y1="100" x2="380" y2="120" stroke="#fcb045" stroke-width="2"/>

	<!-- Group 14 -->
	<text x="76" y="208" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">CH4 -161 C</text>
	<text x="76" y="192" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">SiH4 -112 C</text>
	<text x="76" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">GeH4 -88 C</text>

	<!-- Group 15 -->
	<text x="222" y="130" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="8" font-weight="700">NH3 -33 C</text>
	<text x="222" y="178" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">PH3 -88 C</text>
	<text x="222" y="165" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">AsH3 -62 C</text>

	<!-- Group 16 -->
	<text x="380" y="210" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">H2S -60 C</text>
	<text x="380" y="195" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">H2Se -41 C</text>

	<!-- Group 17 -->
	<text x="530" y="140" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="8" font-weight="700">HF 20 C</text>
	<text x="530" y="190" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">HCl -85 C</text>
	<text x="530" y="176" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">HBr -67 C</text>

	<!-- Explanation -->
	<text x="380" y="240" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">H2O, NH3, and HF have abnormally high boiling points due to hydrogen bonding</text>
	<text x="380" y="256" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Without H-bonding: expected bp of H2O near -80 C</text>
</svg>`;

// ── QUIZ QUESTIONS ──────────────────────────────────────────────────────────

const intermolecularForcesQuizItems: Question[] = [
	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 1: Fundamentals & London Dispersion Forces (Q1-Q6)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 1,
		question:
			'Which statement correctly describes the nature of intermolecular forces of attraction (IMFA) compared to intramolecular forces?',
		options: [
			'Intermolecular forces are attractive forces between molecules, whereas intramolecular forces hold atoms together within a molecule.',
			'Intermolecular forces are stronger than covalent bonds because they involve full electron transfer.',
			'Intermolecular forces only exist in polar molecules and do not affect nonpolar substances.',
			'Intermolecular forces are between atoms of the same molecule, while intramolecular forces are between different molecules.'
		],
		answer:
			'Intermolecular forces are attractive forces between molecules, whereas intramolecular forces hold atoms together within a molecule.',
		explanation:
			'Intermolecular forces act between separate molecules (inter = between), while intramolecular forces such as covalent and ionic bonds act within a molecule (intra = within). This distinction is fundamental to understanding physical properties like boiling point.',
		difficulty: 'advanced',
		illustration: imfaHierarchyIllustration
	},
	{
		id: 2,
		question:
			'London dispersion forces are present in all molecules, but they are the only type of IMFA present in which of the following substances?',
		options: [
			'Helium (He), methane (CH4), and carbon tetrachloride (CCl4)',
			'Water (H2O), ammonia (NH3), and hydrogen fluoride (HF)',
			'Sodium chloride (NaCl), potassium bromide (KBr), and magnesium oxide (MgO)',
			'Hydrochloric acid (HCl), sulfur dioxide (SO2), and acetone (CH3COCH3)'
		],
		answer: 'Helium (He), methane (CH4), and carbon tetrachloride (CCl4)',
		explanation:
			'Nonpolar substances have only London dispersion forces as their intermolecular force. He is monatomic and nonpolar, CH4 is tetrahedral and nonpolar, and CCl4 is tetrahedral and nonpolar. Polar molecules like H2O and HCl also have London dispersion forces but additionally have stronger dipole-dipole interactions.',
		difficulty: 'advanced',
		illustration: londonDispersionIllustration
	},
	{
		id: 3,
		question:
			'Which factor has the greatest influence on the strength of London dispersion forces between two nonpolar molecules?',
		options: [
			'The size of the electron cloud and the molecular weight of the molecule',
			'The number of hydrogen atoms in the molecule',
			'The difference in electronegativity between atoms in the bond',
			'The bond angle and molecular geometry'
		],
		answer: 'The size of the electron cloud and the molecular weight of the molecule',
		explanation:
			'London dispersion forces arise from temporary fluctuations in the electron cloud. Larger molecules with more electrons have larger, more polarisable electron clouds, leading to stronger instantaneous dipoles and stronger dispersion forces. This is why I2 (solid at room temp) has stronger dispersion forces than F2 (gas).',
		difficulty: 'expert',
		illustration: londonDispersionIllustration
	},
	{
		id: 4,
		question:
			'A student observes that fluorine (F2) is a gas at room temperature, while iodine (I2) is a solid. Which intermolecular force type and factor best explains this difference?',
		options: [
			'London dispersion forces - iodine has more electrons and a larger, more polarisable electron cloud, leading to stronger temporary dipoles.',
			'Hydrogen bonding - iodine can form hydrogen bonds with itself, but fluorine cannot.',
			'Dipole-dipole forces - iodine is more polar than fluorine due to its larger atomic radius.',
			'Ion-dipole interactions - iodine forms I- ions in the solid state, which attract each other.'
		],
		answer: 'London dispersion forces - iodine has more electrons and a larger, more polarisable electron cloud, leading to stronger temporary dipoles.',
		explanation:
			'Both F2 and I2 are nonpolar diatomic molecules with only London dispersion forces. I2 has 106 electrons (vs 18 in F2), giving it a much larger, more polarisable electron cloud. The stronger dispersion forces in I2 require more energy to overcome, making it a solid at room temperature while F2 is a gas.',
		difficulty: 'advanced',
		illustration: londonDispersionIllustration
	},
	{
		id: 5,
		question:
			'Which statement about London dispersion forces is correct?',
		options: [
			'They are present in all molecules, both polar and nonpolar, and result from temporary fluctuations in electron distribution.',
			'They only occur in molecules with permanent dipole moments.',
			'They are stronger than hydrogen bonds in large molecules like DNA.',
			'They require a hydrogen atom bonded to N, O, or F.'
		],
		answer: 'They are present in all molecules, both polar and nonpolar, and result from temporary fluctuations in electron distribution.',
		explanation:
			'London dispersion forces are universal - they exist in every molecule because electrons are always in motion, creating instantaneous dipoles. Even noble gases experience these forces. While they are typically weak, in very large molecules they can become significant.',
		difficulty: 'advanced',
		illustration: londonDispersionIllustration
	},
	{
		id: 6,
		question:
			'Rank the following nonpolar substances in order of increasing London dispersion force strength: Ar (40 g/mol), Kr (84 g/mol), Xe (131 g/mol).',
		options: [
			'Ar < Kr < Xe',
			'Xe < Kr < Ar',
			'Kr < Ar < Xe',
			'Ar < Xe < Kr'
		],
		answer: 'Ar < Kr < Xe',
		explanation:
			'London dispersion force strength increases with atomic/molecular weight and electron count. Ar has the fewest electrons (18), Kr has 36, and Xe has 54. Thus, Xe has the strongest dispersion forces and the highest boiling point among these noble gases.',
		difficulty: 'advanced',
		illustration: londonDispersionIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 2: Dipole-Dipole Forces (Q7-Q11)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 7,
		question:
			'Dipole-dipole forces occur between molecules that have permanent dipole moments. Which of the following compounds would exhibit dipole-dipole interactions?',
		options: [
			'HCl (hydrogen chloride), because the electronegativity difference creates a permanent dipole.',
			'O2 (oxygen), because oxygen is highly electronegative.',
			'CH4 (methane), because it has a tetrahedral shape.',
			'CCl4 (carbon tetrachloride), because the C-Cl bonds are polar.'
		],
		answer: 'HCl (hydrogen chloride), because the electronegativity difference creates a permanent dipole.',
		explanation:
			'HCl has a significant electronegativity difference (dEN = 0.96), creating a permanent dipole with partial charges on H (d+) and Cl (d-). These dipoles align with opposite charges attracting each other. O2 and CH4 are nonpolar, and while CCl4 has polar bonds, its symmetrical tetrahedral shape cancels the dipoles.',
		difficulty: 'advanced',
		illustration: dipoleDipoleIllustration
	},
	{
		id: 8,
		question:
			'In a sample of pure HCl, how do neighbouring HCl molecules arrange themselves relative to each other?',
		options: [
			'The d+ hydrogen of one molecule aligns near the d- chlorine of an adjacent molecule.',
			'The molecules arrange randomly because thermal motion always overcomes electrostatic attraction.',
			'The hydrogen atoms of neighbouring molecules bond directly with each other.',
			'The molecules repel each other because all atoms carry the same partial charge.'
		],
		answer: 'The d+ hydrogen of one molecule aligns near the d- chlorine of an adjacent molecule.',
		explanation:
			'In dipole-dipole interactions, opposite partial charges attract. The d+ end (H) of one HCl molecule aligns with the d- end (Cl) of another. This alignment maximises electrostatic attraction between the permanent dipoles, though the orientation fluctuates due to thermal motion.',
		difficulty: 'advanced',
		illustration: dipoleDipoleIllustration
	},
	{
		id: 9,
		question:
			'A student compares the boiling points of propane (C3H8, a nonpolar hydrocarbon) and dimethyl ether (CH3OCH3, a polar molecule). Both have similar molecular weights (~44 g/mol and ~46 g/mol, respectively). Which is expected to have a higher boiling point, and why?',
		options: [
			'Dimethyl ether, because it has dipole-dipole interactions in addition to London dispersion forces.',
			'Propane, because it has stronger London dispersion forces due to its linear shape.',
			'Both should have identical boiling points because their molecular weights are nearly the same.',
			'Propane, because it can form hydrogen bonds with itself.'
		],
		answer: 'Dimethyl ether, because it has dipole-dipole interactions in addition to London dispersion forces.',
		explanation:
			'When molecular weights are similar, the presence of additional intermolecular forces raises the boiling point. Dimethyl ether has a permanent dipole and experiences dipole-dipole interactions on top of London dispersion forces. Propane is nonpolar and has only London dispersion forces, so it has a lower boiling point (-42 C vs -24 C).',
		difficulty: 'expert',
		illustration: dipoleDipoleIllustration
	},
	{
		id: 10,
		question:
			'Sulfur dioxide (SO2) is a bent polar molecule with a net dipole moment. Which of the following best describes the intermolecular forces present in a sample of SO2?',
		options: [
			'Dipole-dipole forces and London dispersion forces',
			'Hydrogen bonding only',
			'London dispersion forces only',
			'Ion-dipole interactions'
		],
		answer: 'Dipole-dipole forces and London dispersion forces',
		explanation:
			'SO2 is a polar molecule (bent geometry, net dipole), so it experiences dipole-dipole forces. Like all molecules, it also experiences London dispersion forces. Hydrogen bonding requires H bonded to N, O, or F, which SO2 does not have.',
		difficulty: 'advanced',
		illustration: dipoleDipoleIllustration
	},
	{
		id: 11,
		question:
			'Based on the lecture slide ordering: "dipole-dipole, hydrogen bonding, dipole-dipole, London dispersion forces" - what pattern does this sequence describe?',
		options: [
			'A list of four compounds in order of their dominant IMFA: acetone, water, NBr3, benzene.',
			'A ranking of IMFA from weakest to strongest.',
			'The chronological order in which these forces were discovered by scientists.',
			'The order of forces present in a single water molecule as temperature increases.'
		],
		answer: 'A list of four compounds in order of their dominant IMFA: acetone, water, NBr3, benzene.',
		explanation:
			'The review slide explicitly asks: "Which set of compounds correctly follows the succeeding order of IMFA: dipole-dipole, hydrogen bonding, dipole-dipole, and London dispersion forces?" The correct answer is: acetone (dipole-dipole), water (H-bonding), NBr3 (dipole-dipole), and benzene (London dispersion).',
		difficulty: 'expert',
		illustration: imfaComparisonIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 3: Hydrogen Bonding (Q12-Q17)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 12,
		question:
			'Which condition must be met for hydrogen bonding to occur between molecules?',
		options: [
			'A hydrogen atom must be covalently bonded to N, O, or F, and there must be a lone pair on N, O, or F of another molecule.',
			'A hydrogen atom must be bonded to any halogen element.',
			'The molecule must have a hydrogen atom and a complete octet.',
			'Hydrogen bonding requires an ionic bond between hydrogen and a metal.'
		],
		answer: 'A hydrogen atom must be covalently bonded to N, O, or F, and there must be a lone pair on N, O, or F of another molecule.',
		explanation:
			'Hydrogen bonding is a special type of dipole-dipole attraction. It requires H covalently bonded to a highly electronegative small atom (N, O, or F), creating a very strong d+ on H. This d+ H then attracts the lone pairs of N, O, or F on neighbouring molecules.',
		difficulty: 'advanced',
		illustration: hydrogenBondingIllustration
	},
	{
		id: 13,
		question:
			'The review slide lists CH3OH, CO, SiF4, and NBr3 - asking which expresses hydrogen bonding. Which compound exhibits hydrogen bonding, and why?',
		options: [
			'CH3OH - the O-H bond allows H to form hydrogen bonds with lone pairs on O of other CH3OH molecules.',
			'CO - carbon and oxygen have a triple bond with a lone pair on oxygen.',
			'SiF4 - the F atoms are highly electronegative and can form hydrogen bonds with H.',
			'NBr3 - nitrogen has a lone pair that can accept hydrogen bonds.'
		],
		answer: 'CH3OH - the O-H bond allows H to form hydrogen bonds with lone pairs on O of other CH3OH molecules.',
		explanation:
			'Methanol (CH3OH) contains an O-H group, where H is bonded directly to O. This gives H a strong d+ charge that can interact with lone pairs on O of adjacent molecules. CO has C=O but no H-O bond. SiF4 has F but no H-F bond. NBr3 has N with a lone pair but no H bonded to N.',
		difficulty: 'expert',
		illustration: hydrogenBondingIllustration
	},
	{
		id: 14,
		question:
			'Water (H2O) has a boiling point of 100 C, while hydrogen sulfide (H2S) boils at -60 C. What explains this dramatic difference despite both being hydrides of group 16?',
		options: [
			'Water forms strong hydrogen bonds between molecules, while H2S has only dipole-dipole and London dispersion forces.',
			'H2S is more polar than water, so it should have stronger IMFA.',
			'Sulfur is more electronegative than oxygen, creating stronger bonds in H2S.',
			'Water has a lower molecular weight than H2S, so it should boil at a lower temperature.'
		],
		answer: 'Water forms strong hydrogen bonds between molecules, while H2S has only dipole-dipole and London dispersion forces.',
		explanation:
			'H2O has H bonded to O, satisfying the H-bonding condition. H2S has H bonded to S, but S is not electronegative enough (EN = 2.58) to create the strong d+ needed for hydrogen bonding. H2S only has dipole-dipole and London dispersion forces, which are much weaker. This is why H2O boiling point is anomalously high - without H-bonds, it would be around -80 C.',
		difficulty: 'expert',
		illustration: boilingPointTrendsIllustration
	},
	{
		id: 15,
		question:
			'Which of the following compounds CAN form hydrogen bonds with water?',
		options: [
			'CH3OH (methanol), because it has an O-H group',
			'CH4 (methane), because it has hydrogen atoms',
			'CCl4, because chlorine is electronegative',
			'H2 (hydrogen gas), because it has two hydrogen atoms'
		],
		answer: 'CH3OH (methanol), because it has an O-H group',
		explanation:
			'Methanol has an O-H bond that can both donate (the H) and accept (lone pairs on O) hydrogen bonds with water. CH4 has H bonded to C (not N/O/F), so no H-bond donation. CCl4 has no H at all, and H2 has H bonded to H (not N/O/F).',
		difficulty: 'advanced',
		illustration: hydrogenBondingIllustration
	},
	{
		id: 16,
		question:
			'Ammonia (NH3) has a boiling point of -33 C, while phosphine (PH3) boils at -88 C. What accounts for this difference?',
		options: [
			'NH3 can form hydrogen bonds due to the N-H bond, but PH3 cannot because P is not electronegative enough.',
			'PH3 has stronger London dispersion forces because phosphorus is larger.',
			'NH3 has fewer electrons than PH3, so it has weaker IMFA.',
			'PH3 is more polar than NH3 because phosphorus is more electronegative than nitrogen.'
		],
		answer: 'NH3 can form hydrogen bonds due to the N-H bond, but PH3 cannot because P is not electronegative enough.',
		explanation:
			'NH3 has H bonded to N (EN = 3.04), satisfying H-bonding conditions. PH3 has H bonded to P (EN = 2.19), which is far less electronegative than N. Without H-bonding, PH3 relies on weaker dipole-dipole and London dispersion forces, resulting in a much lower boiling point.',
		difficulty: 'advanced',
		illustration: boilingPointTrendsIllustration
	},
	{
		id: 17,
		question:
			'A student argues that hydrogen bonding is a type of covalent bond because it involves sharing electrons between hydrogen and an electronegative atom. Why is this argument incorrect?',
		options: [
			'Hydrogen bonds are electrostatic attractions between molecules, not electron-sharing bonds within a molecule. They are intermolecular, not intramolecular.',
			'Hydrogen bonds actually involve complete electron transfer, making them ionic bonds.',
			'The student is correct - hydrogen bonds are indeed a type of covalent bond.',
			'Hydrogen bonds are metallic bonds because they involve a sea of delocalised electrons.'
		],
		answer: 'Hydrogen bonds are electrostatic attractions between molecules, not electron-sharing bonds within a molecule. They are intermolecular, not intramolecular.',
		explanation:
			'Although called a "bond," hydrogen bonding is an intermolecular force - an electrostatic attraction between a d+ H on one molecule and a lone pair on N/O/F of another molecule. It does not involve sharing or transfer of electrons. Covalent bonds (like O-H) are intramolecular and involve electron sharing.',
		difficulty: 'expert',
		illustration: hydrogenBondingIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 4: Ion-Dipole & Relative Strengths (Q18-Q21)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 18,
		question:
			'Based on the relative strength comparisons from the lecture (dipole-dipole < ion-dipole), which of the following statements about IMFA strength is correct?',
		options: [
			'Ion-dipole forces are stronger than dipole-dipole forces because the full ionic charge creates a stronger electrostatic attraction than partial charges.',
			'Dipole-dipole forces are stronger than ion-dipole forces because dipoles are permanent.',
			'Ion-dipole forces are the weakest IMFA because ions are usually very large.',
			'Both ion-dipole and dipole-dipole forces have approximately the same strength.'
		],
		answer: 'Ion-dipole forces are stronger than dipole-dipole forces because the full ionic charge creates a stronger electrostatic attraction than partial charges.',
		explanation:
			'The lecture slide explicitly states "dipole-dipole < ion-dipole." The strength of electrostatic attraction depends on charge magnitude. Ions carry full unit charges, while dipole-dipole forces rely on partial charges (d+/d-). Full charges generate much stronger attractions, making ion-dipole the strongest IMFA.',
		difficulty: 'advanced',
		illustration: ionDipoleIllustration
	},
	{
		id: 19,
		question:
			'When table salt (NaCl) dissolves in water, which intermolecular force is primarily responsible for pulling the Na+ and Cl- ions apart from the crystal lattice?',
		options: [
			'Ion-dipole forces - the polar water molecules surround and stabilise the individual ions.',
			'Hydrogen bonding between water molecules.',
			'London dispersion forces between NaCl and water.',
			'Covalent bond breaking between Na and Cl in the crystal.'
		],
		answer: 'Ion-dipole forces - the polar water molecules surround and stabilise the individual ions.',
		explanation:
			'When NaCl dissolves, the d- oxygen of water is attracted to Na+, and the d+ hydrogens are attracted to Cl-. These ion-dipole interactions are strong enough to overcome the ionic lattice energy, pulling the crystal apart. The ions become hydrated - surrounded by a shell of water molecules.',
		difficulty: 'advanced',
		illustration: ionDipoleIllustration
	},
	{
		id: 20,
		question:
			'The lecture review slide asks to evaluate the comparison "dipole-dipole < ion-dipole." Which statement best interprets this inequality?',
		options: [
			'Ion-dipole forces are stronger than dipole-dipole forces, as indicated by the inequality symbol pointing toward the weaker force.',
			'Dipole-dipole forces are stronger than ion-dipole forces because there are more of them.',
			'The inequality is reversed - it should read ion-dipole < dipole-dipole.',
			'Both forces have exactly the same strength in aqueous solutions.'
		],
		answer: 'Ion-dipole forces are stronger than dipole-dipole forces, as indicated by the inequality symbol pointing toward the weaker force.',
		explanation:
			'The expression "dipole-dipole < ion-dipole" correctly indicates that dipole-dipole forces are weaker than ion-dipole forces. The "<" symbol points toward the smaller (weaker) value. This is consistent with the IMFA hierarchy.',
		difficulty: 'advanced',
		illustration: imfaHierarchyIllustration
	},
	{
		id: 21,
		question:
			'Based on the IMFA strength hierarchy, what is the correct ordering of intermolecular forces from weakest to strongest?',
		options: [
			'London dispersion < dipole-dipole < hydrogen bonding < ion-dipole',
			'Ion-dipole < hydrogen bonding < dipole-dipole < London dispersion',
			'Dipole-dipole < London dispersion < ion-dipole < hydrogen bonding',
			'Hydrogen bonding < London dispersion < dipole-dipole < ion-dipole'
		],
		answer: 'London dispersion < dipole-dipole < hydrogen bonding < ion-dipole',
		explanation:
			'The complete IMFA hierarchy from weakest to strongest is: London dispersion (0.05-5 kJ/mol) < dipole-dipole (0.5-5 kJ/mol) < hydrogen bonding (10-40 kJ/mol) < ion-dipole (10-40 kJ/mol). While H-bonding and ion-dipole have overlapping ranges, ion-dipole can reach higher values.',
		difficulty: 'advanced',
		illustration: imfaHierarchyIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 5: Integrative & Applications (Q22-Q25)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 22,
		question:
			'A drop of water is held together by a combination of intermolecular forces. Which combination of IMFA is present in liquid water?',
		options: [
			'Hydrogen bonding, dipole-dipole forces, and London dispersion forces',
			'Hydrogen bonding only',
			'Ion-dipole and London dispersion forces',
			'London dispersion forces only'
		],
		answer: 'Hydrogen bonding, dipole-dipole forces, and London dispersion forces',
		explanation:
			'Water has all three types of IMFA: London dispersion forces (present in ALL molecules), dipole-dipole forces (water is polar with a net dipole), and hydrogen bonding (H bonded to O). The hydrogen bonding is the dominant force, which is why water has such high boiling and melting points.',
		difficulty: 'expert',
		illustration: hydrogenBondingIllustration
	},
	{
		id: 23,
		question:
			'A biochemist compares the boiling points of three compounds: ethanol (CH3CH2OH, MW 46), dimethyl ether (CH3OCH3, MW 46), and ethane (CH3CH3, MW 30). Based on IMFA analysis, which ranking of boiling points is correct?',
		options: [
			'Ethanol > dimethyl ether > ethane',
			'Dimethyl ether > ethanol > ethane',
			'Ethane > ethanol > dimethyl ether',
			'Ethanol > ethane > dimethyl ether'
		],
		answer: 'Ethanol > dimethyl ether > ethane',
		explanation:
			'Ethanol can form hydrogen bonds (O-H group) and has dipole-dipole and London forces, giving the highest boiling point (78 C). Dimethyl ether has dipole-dipole and London forces but no O-H group for H-bonding, so it boils at -24 C. Ethane is nonpolar with only London dispersion forces, boiling at -89 C.',
		difficulty: 'expert',
		illustration: boilingPointTrendsIllustration
	},
	{
		id: 24,
		question:
			'Which of the following statements about the relative strengths of IMFA is CORRECT based on the lecture review slide?',
		options: [
			'Hydrogen bonding is stronger than London dispersion forces, as indicated in the review comparisons.',
			'London dispersion forces are stronger than hydrogen bonding in all molecules.',
			'Hydrogen bonding and London dispersion forces have exactly the same strength.',
			'The lecture slide concludes that hydrogen bonding is weaker than London dispersion forces.'
		],
		answer: 'Hydrogen bonding is stronger than London dispersion forces, as indicated in the review comparisons.',
		explanation:
			'The review slide lists "Hydrogen bonding < London dispersion forces" as one of the comparisons to evaluate - and this statement is FALSE because hydrogen bonding (10-40 kJ/mol) is actually much stronger than typical London dispersion forces (0.05-5 kJ/mol). The correct comparison should be "London dispersion forces < hydrogen bonding."',
		difficulty: 'expert',
		illustration: imfaComparisonIllustration
	},
	{
		id: 25,
		question:
			'A pharmaceutical company needs to design a drug that can cross the cell membrane, which has a nonpolar interior. Based on the "like dissolves like" principle and the IMFA hierarchy, which molecular property would best enable the drug to cross the membrane?',
		options: [
			'The drug should be predominantly nonpolar or have a large nonpolar region, so it can interact favourably with the nonpolar membrane interior via London dispersion forces.',
			'The drug should be highly polar so it can form hydrogen bonds with the membrane.',
			'The drug should be ionic so it can dissolve in the membrane via ion-dipole interactions.',
			'The drug should have a very high molecular weight to maximise London dispersion forces with the membrane.'
		],
		answer: 'The drug should be predominantly nonpolar or have a large nonpolar region, so it can interact favourably with the nonpolar membrane interior via London dispersion forces.',
		explanation:
			'The cell membrane interior consists of nonpolar hydrocarbon tails. A drug molecule must be nonpolar or amphipathic (having both polar and nonpolar regions) to pass through. Nonpolar molecules interact best with the membrane via London dispersion forces - consistent with the "like dissolves like" principle.',
		difficulty: 'expert',
		illustration: imfaHierarchyIllustration
	}
];

export const intermolecularForcesQuizData = intermolecularForcesQuizItems satisfies Question[];
