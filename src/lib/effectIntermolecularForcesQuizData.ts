import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Boiling Point & Vapor Pressure ─────────────────────────

const boilingPointEffectIllustration = `
<svg role="img" aria-label="Effect of IMFA on boiling points and vapor pressure" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="bpEffBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#bpEffBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">IMFA EFFECTS — BOILING POINT &amp; VAPOR PRESSURE</text>

	<!-- Left panel: Strong IMFA -->
	<rect x="34" y="62" width="340" height="196" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="204" y="86" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">STRONG IMFA</text>
	<circle cx="160" cy="130" r="10" fill="#ff6b6b" opacity="0.7"/>
	<text x="160" y="134" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">O</text>
	<line x1="150" y1="120" x2="142" y2="102" stroke="#fff" stroke-width="1.5"/>
	<circle cx="140" cy="98" r="6" fill="#c4b8ad"/>
	<line x1="170" y1="120" x2="178" y2="102" stroke="#fff" stroke-width="1.5"/>
	<circle cx="180" cy="98" r="6" fill="#c4b8ad"/>
	<circle cx="250" cy="130" r="10" fill="#ff6b6b" opacity="0.5"/>
	<line x1="240" y1="120" x2="232" y2="102" stroke="#fff" stroke-width="1"/>
	<circle cx="230" cy="98" r="5" fill="#c4b8ad" opacity="0.5"/>
	<line x1="260" y1="120" x2="268" y2="102" stroke="#fff" stroke-width="1"/>
	<circle cx="270" cy="98" r="5" fill="#c4b8ad" opacity="0.5"/>
	<!-- H-bonds between molecules -->
	<line x1="185" y1="130" x2="235" y2="130" stroke="#fcb045" stroke-width="1.5" stroke-dasharray="3,3"/>
	<text x="210" y="146" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">H-bond</text>
	<text x="204" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High boiling point</text>
	<text x="204" y="198" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Low vapor pressure</text>
	<text x="204" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Much energy to overcome</text>
	<text x="204" y="238" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">H2O: 100°C // H2O VP: 23.8 mmHg</text>

	<!-- Right panel: Weak IMFA -->
	<rect x="390" y="62" width="340" height="196" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="560" y="86" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">WEAK IMFA</text>
	<circle cx="510" cy="130" r="8" fill="#a78bfa" opacity="0.5"/>
	<text x="510" y="134" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">CH4</text>
	<circle cx="580" cy="140" r="8" fill="#a78bfa" opacity="0.4"/>
	<text x="580" y="144" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">CH4</text>
	<circle cx="620" cy="120" r="8" fill="#a78bfa" opacity="0.35"/>
	<text x="620" y="124" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">CH4</text>
	<!-- Weak attraction line -->
	<line x1="525" y1="138" x2="565" y2="138" stroke="#a78bfa" stroke-width="0.8" stroke-dasharray="2,4"/>
	<text x="560" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Low boiling point</text>
	<text x="560" y="198" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High vapor pressure</text>
	<text x="560" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Little energy to overcome</text>
	<text x="560" y="238" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">CH4: -161°C // CH4 VP: high</text>
</svg>`;

// ── ILLUSTRATION: Surface Tension ────────────────────────────────────────

const surfaceTensionIllustration = `
<svg role="img" aria-label="Surface tension caused by IMFA" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="stBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#stBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">EFFECT — SURFACE TENSION</text>

	<!-- Water droplet on surface -->
	<rect x="34" y="66" width="340" height="172" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="204" y="94" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">WATER DROPLET</text>

	<!-- Water surface -->
	<path d="M50 140 Q100 130 150 140 Q200 135 250 140 Q300 132 340 140 L340 200 L50 200 Z" fill="#4ecdc4" opacity="0.15"/>
	<path d="M50 140 Q100 130 150 140 Q200 135 250 140 Q300 132 340 140" stroke="#4ecdc4" stroke-width="2" fill="none"/>

	<!-- Surface molecules pulled inward -->
	<circle cx="100" cy="138" r="5" fill="#ff6b6b" opacity="0.7"/>
	<circle cx="160" cy="136" r="5" fill="#ff6b6b" opacity="0.7"/>
	<circle cx="220" cy="137" r="5" fill="#ff6b6b" opacity="0.7"/>
	<circle cx="280" cy="133" r="5" fill="#ff6b6b" opacity="0.7"/>
	<!-- Internal molecules -->
	<circle cx="100" cy="162" r="5" fill="#4ecdc4" opacity="0.5"/>
	<circle cx="140" cy="170" r="5" fill="#4ecdc4" opacity="0.5"/>
	<circle cx="200" cy="165" r="5" fill="#4ecdc4" opacity="0.5"/>
	<circle cx="260" cy="170" r="5" fill="#4ecdc4" opacity="0.5"/>

	<!-- Downward arrows on surface -->
	<path d="M100 130 L100 120" stroke="#ff6b6b" stroke-width="1.5" marker-end="url(#arrowR)"/>
	<path d="M220 127 L220 117" stroke="#ff6b6b" stroke-width="1.5"/>

	<text x="204" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Surface molecules pulled inward → "skin-like" layer</text>
	<text x="204" y="222" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Water has high surface tension due to H-bonding</text>

	<!-- Right panel: liquid vs gas -->
	<rect x="390" y="66" width="340" height="172" rx="8" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<text x="560" y="94" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">EFFECT ON SHAPE</text>
	<ellipse cx="520" cy="150" rx="40" ry="25" fill="none" stroke="#4ecdc4" stroke-width="2" opacity="0.5"/>
	<ellipse cx="600" cy="150" rx="35" ry="25" fill="none" stroke="#4ecdc4" stroke-width="2" opacity="0.5"/>
	<text x="520" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Liquid beading up</text>
	<text x="600" y="180" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Minimises SA</text>
	<text x="560" y="212" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High IMFA → high surface tension</text>
	<text x="560" y="230" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Water striders, needle floating</text>
</svg>`;

// ── ILLUSTRATION: Viscosity Comparison ───────────────────────────────────

const viscosityIllustration = `
<svg role="img" aria-label="Viscosity comparison between different liquids" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="visBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#visBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">EFFECT — VISCOSITY</text>

	<!-- Low viscosity -->
	<rect x="34" y="62" width="225" height="178" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="146" y="88" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">LOW VISCOSITY</text>
	<text x="146" y="118" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="28" font-weight="700">💧</text>
	<text x="146" y="160" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Weak IMFA (London only)</text>
	<text x="146" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Flows easily</text>
	<text x="146" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Molecules slide past</text>
	<text x="146" y="220" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">E.g. hexane (C6H14)</text>

	<!-- Medium viscosity -->
	<rect x="269" y="62" width="225" height="178" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="382" y="88" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">MEDIUM VISCOSITY</text>
	<text x="382" y="118" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="28" font-weight="700">💧</text>
	<text x="382" y="160" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Moderate IMFA</text>
	<text x="382" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Some resistance to flow</text>
	<text x="382" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Dipole-dipole &amp; London</text>
	<text x="382" y="220" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">E.g. ethanol (C2H5OH)</text>

	<!-- High viscosity -->
	<rect x="504" y="62" width="225" height="178" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="617" y="88" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">HIGH VISCOSITY</text>
	<text x="617" y="118" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="28" font-weight="700">🍯</text>
	<text x="617" y="160" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Strong IMFA (H-bond)</text>
	<text x="617" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Flows slowly</text>
	<text x="617" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Molecules strongly</text>
	<text x="617" y="220" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">attracted to each other</text>
</svg>`;

// ── ILLUSTRATION: Capillary Action ──────────────────────────────────────

const capillaryActionIllustration = `
<svg role="img" aria-label="Capillary action driven by IMFA" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="capBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="260" rx="8" fill="url(#capBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">EFFECT — CAPILLARY ACTION</text>

	<!-- Left: water in tube -->
	<rect x="34" y="62" width="340" height="178" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="204" y="88" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">WATER (POLAR)</text>
	<!-- Glass tube -->
	<rect x="140" y="100" width="60" height="120" rx="2" fill="none" stroke="#ffffff20" stroke-width="1"/>
	<!-- Water column -->
	<rect x="144" y="118" width="52" height="98" rx="2" fill="#4ecdc4" opacity="0.3"/>
	<!-- Meniscus -->
	<path d="M144 118 Q170 112 196 118" stroke="#4ecdc4" stroke-width="2" fill="#4ecdc4" opacity="0.4"/>
	<!-- Adhesion arrows -->
	<path d="M144 126 L120 126" stroke="#fcb045" stroke-width="1" stroke-dasharray="3,2"/>
	<text x="112" y="130" text-anchor="end" fill="#fcb045" font-family="monospace" font-size="6">adhesion</text>
	<path d="M196 126 L220 126" stroke="#fcb045" stroke-width="1" stroke-dasharray="3,2"/>
	<text x="222" y="130" text-anchor="start" fill="#fcb045" font-family="monospace" font-size="6">adhesion</text>
	<text x="204" y="170" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Water climbs up tube</text>
	<text x="204" y="190" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Adhesion &gt; cohesion</text>
	<text x="204" y="210" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Concave meniscus</text>
	<text x="204" y="228" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Strong IMFA with glass</text>

	<!-- Right: mercury in tube -->
	<rect x="390" y="62" width="340" height="178" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="560" y="88" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">MERCURY (NONPOLAR)</text>
	<!-- Glass tube -->
	<rect x="500" y="100" width="60" height="120" rx="2" fill="none" stroke="#ffffff20" stroke-width="1"/>
	<!-- Mercury column -->
	<rect x="504" y="174" width="52" height="42" rx="2" fill="#a78bfa" opacity="0.3"/>
	<!-- Meniscus (convex) -->
	<path d="M504 174 Q530 180 556 174" stroke="#a78bfa" stroke-width="2" fill="#a78bfa" opacity="0.4"/>
	<!-- Cohesion arrows -->
	<path d="M530 155 L530 140" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,2"/>
	<text x="540" y="138" text-anchor="start" fill="#a78bfa" font-family="monospace" font-size="6">cohesion</text>
	<text x="560" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Mercury is depressed</text>
	<text x="560" y="218" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Cohesion &gt; adhesion</text>
	<text x="560" y="236" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Convex meniscus</text>
</svg>`;

// ── ILLUSTRATION: Like Dissolves Like ────────────────────────────────────

const solubilityIllustration = `
<svg role="img" aria-label="Like dissolves like solubility principle" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="solBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#solBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">EFFECT — SOLUBILITY: LIKE DISSOLVES LIKE</text>

	<!-- Miscible (polar + polar) -->
	<rect x="34" y="62" width="225" height="100" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="146" y="86" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10" font-weight="700">POLAR + POLAR</text>
	<text x="146" y="116" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="18">💧🧊</text>
	<text x="146" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">H2O + ethanol - miscible</text>

	<!-- Immiscible (polar + nonpolar) -->
	<rect x="269" y="62" width="225" height="100" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="382" y="86" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">POLAR + NONPOLAR</text>
	<text x="382" y="116" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="18">💧🛢️</text>
	<text x="382" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">H2O + oil - immiscible</text>

	<!-- Miscible (nonpolar + nonpolar) -->
	<rect x="504" y="62" width="225" height="100" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="617" y="86" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">NONPOLAR + NONPOLAR</text>
	<text x="617" y="116" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="18">🛢️🧴</text>
	<text x="617" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Oil + hexane - miscible</text>

	<!-- Explanation -->
	<rect x="34" y="176" width="695" height="82" rx="8" fill="#1f1917" stroke="#ffffff15" stroke-width="1"/>
	<text x="380" y="202" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="11" font-weight="700">WHY?</text>
	<text x="380" y="224" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Polar molecules dissolve in polar solvents (similar IMFA = similar attraction)</text>
	<text x="380" y="244" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Nonpolar molecules dissolve in nonpolar solvents (only London dispersion forces)</text>
	<text x="380" y="260" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Rule: substances with similar IMFA types are mutually soluble</text>
</svg>`;

// ── ILLUSTRATION: States of Matter ───────────────────────────────────────

const statesOfMatterIllustration = `
<svg role="img" aria-label="States of matter determined by IMFA strength" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="stateBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#stateBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">IMFA &amp; STATES OF MATTER</text>

	<!-- Solid -->
	<rect x="34" y="62" width="222" height="196" rx="8" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="145" y="90" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">SOLID</text>
	<circle cx="120" cy="124" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="146" cy="124" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="172" cy="124" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="120" cy="150" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="146" cy="150" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="172" cy="150" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="120" cy="176" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="146" cy="176" r="6" fill="#ff6b6b" opacity="0.8"/>
	<circle cx="172" cy="176" r="6" fill="#ff6b6b" opacity="0.8"/>
	<text x="145" y="220" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Strongest IMFA</text>
	<text x="145" y="238" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Definite shape &amp; volume</text>

	<!-- Liquid -->
	<rect x="270" y="62" width="222" height="196" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="381" y="90" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">LIQUID</text>
	<circle cx="360" cy="124" r="6" fill="#fcb045" opacity="0.6"/>
	<circle cx="390" cy="116" r="6" fill="#fcb045" opacity="0.5"/>
	<circle cx="408" cy="132" r="6" fill="#fcb045" opacity="0.6"/>
	<circle cx="350" cy="150" r="6" fill="#fcb045" opacity="0.5"/>
	<circle cx="376" cy="152" r="6" fill="#fcb045" opacity="0.6"/>
	<circle cx="410" cy="158" r="6" fill="#fcb045" opacity="0.5"/>
	<circle cx="362" cy="178" r="6" fill="#fcb045" opacity="0.6"/>
	<circle cx="398" cy="182" r="6" fill="#fcb045" opacity="0.5"/>
	<text x="381" y="220" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Moderate IMFA</text>
	<text x="381" y="238" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Fixed volume, no shape</text>

	<!-- Gas -->
	<rect x="506" y="62" width="222" height="196" rx="8" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="617" y="90" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">GAS</text>
	<circle cx="560" cy="110" r="6" fill="#a78bfa" opacity="0.35"/>
	<circle cx="640" cy="100" r="6" fill="#a78bfa" opacity="0.3"/>
	<circle cx="600" cy="130" r="6" fill="#a78bfa" opacity="0.35"/>
	<circle cx="660" cy="150" r="6" fill="#a78bfa" opacity="0.3"/>
	<circle cx="550" cy="160" r="6" fill="#a78bfa" opacity="0.35"/>
	<circle cx="620" cy="180" r="6" fill="#a78bfa" opacity="0.3"/>
	<circle cx="680" cy="180" r="6" fill="#a78bfa" opacity="0.25"/>
	<text x="617" y="220" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Weakest IMFA</text>
	<text x="617" y="238" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">No fixed shape or volume</text>
</svg>`;

// ── ILLUSTRATION: IMFA Effects Overview Table ────────────────────────────

const imfaEffectsOverviewIllustration = `
<svg role="img" aria-label="Overview table of IMFA effects on physical properties" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="effBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="280" rx="8" fill="url(#effBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">IMFA EFFECTS ON PHYSICAL PROPERTIES</text>

	<!-- Header -->
	<rect x="34" y="62" width="695" height="28" rx="4" fill="#00d4ff" opacity="0.15"/>
	<text x="140" y="80" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10" font-weight="700">PROPERTY</text>
	<line x1="250" y1="62" x2="250" y2="90" stroke="#ffffff20" stroke-width="1"/>
	<text x="380" y="80" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10" font-weight="700">STRONG IMFA</text>
	<line x1="510" y1="62" x2="510" y2="90" stroke="#ffffff20" stroke-width="1"/>
	<text x="630" y="80" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10" font-weight="700">WEAK IMFA</text>

	<!-- Row 1 -->
	<rect x="34" y="94" width="695" height="30" rx="4" fill="#ff6b6b" opacity="0.08"/>
	<text x="140" y="113" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">Boiling Point</text>
	<text x="380" y="113" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High</text>
	<text x="630" y="113" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Low</text>

	<!-- Row 2 -->
	<rect x="34" y="128" width="695" height="30" rx="4" fill="#fcb045" opacity="0.08"/>
	<text x="140" y="147" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">Vapor Pressure</text>
	<text x="380" y="147" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Low</text>
	<text x="630" y="147" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High</text>

	<!-- Row 3 -->
	<rect x="34" y="162" width="695" height="30" rx="4" fill="#4ecdc4" opacity="0.08"/>
	<text x="140" y="181" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10" font-weight="700">Surface Tension</text>
	<text x="380" y="181" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High</text>
	<text x="630" y="181" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Low</text>

	<!-- Row 4 -->
	<rect x="34" y="196" width="695" height="30" rx="4" fill="#a78bfa" opacity="0.08"/>
	<text x="140" y="215" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10" font-weight="700">Viscosity</text>
	<text x="380" y="215" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High</text>
	<text x="630" y="215" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Low</text>

	<!-- Row 5 -->
	<rect x="34" y="230" width="695" height="30" rx="4" fill="#ff6b6b" opacity="0.08"/>
	<text x="140" y="249" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">Solubility Match</text>
	<text x="380" y="249" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Polar in polar</text>
	<text x="630" y="249" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Nonpolar in nonpolar</text>
</svg>`;

// ── ILLUSTRATION: Cohesion vs Adhesion ──────────────────────────────────

const cohesionAdhesionIllustration = `
<svg role="img" aria-label="Cohesion vs adhesion forces" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="coBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
	</defs>
	<rect width="760" height="240" rx="8" fill="url(#coBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">COHESION VS ADHESION</text>

	<!-- Cohesion -->
	<rect x="34" y="62" width="340" height="156" rx="8" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="204" y="88" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">COHESION</text>
	<circle cx="170" cy="128" r="8" fill="#4ecdc4" opacity="0.7"/>
	<text x="170" y="132" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">H2O</text>
	<circle cx="230" cy="128" r="8" fill="#4ecdc4" opacity="0.7"/>
	<text x="230" y="132" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="7">H2O</text>
	<line x1="178" y1="128" x2="222" y2="128" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="200" y="146" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="7">IMFA</text>
	<text x="204" y="174" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Same molecules attract</text>
	<text x="204" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Water-water attraction</text>
	<text x="204" y="214" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Responsible for surface tension</text>

	<!-- Adhesion -->
	<rect x="390" y="62" width="340" height="156" rx="8" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="560" y="88" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">ADHESION</text>
	<rect x="500" y="110" width="30" height="50" rx="2" fill="#ffffff15"/>
	<circle cx="560" cy="140" r="8" fill="#fcb045" opacity="0.7"/>
	<text x="560" y="144" text-anchor="middle" fill="#1f1917" font-family="monospace" font-size="6">H2O</text>
	<line x1="530" y1="140" x2="550" y2="140" stroke="#fcb045" stroke-width="1.5"/>
	<text x="540" y="158" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">IMFA</text>
	<text x="560" y="174" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Different molecules attract</text>
	<text x="560" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Water-surface attraction</text>
	<text x="560" y="214" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Responsible for capillary action</text>
</svg>`;

// ── QUIZ QUESTIONS ──────────────────────────────────────────────────────

const effectIntermolecularForcesQuizItems: Question[] = [
	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 1: Boiling Points & Vapor Pressure (Q1-Q5)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 1,
		question:
			'How does the strength of intermolecular forces of attraction (IMFA) affect the boiling point of a liquid?',
		options: [
			'Liquids with stronger IMFA have higher boiling points because more energy is needed to overcome the attractive forces between molecules.',
			'Liquids with stronger IMFA have lower boiling points because the molecules are already tightly packed.',
			'IMFA strength has no effect on boiling point — only molecular weight determines boiling point.',
			'Liquids with weaker IMFA have higher boiling points because the molecules escape more easily.'
		],
		answer:
			'Liquids with stronger IMFA have higher boiling points because more energy is needed to overcome the attractive forces between molecules.',
		explanation:
			'Boiling occurs when molecules have enough kinetic energy to overcome the attractive forces holding them in the liquid phase. Stronger IMFA (like hydrogen bonding) require more energy to overcome, resulting in higher boiling points. Water (strong H-bonding) boils at 100°C, while methane (weak London dispersion) boils at -161°C.',
		difficulty: 'advanced',
		illustration: boilingPointEffectIllustration
	},
	{
		id: 2,
		question:
			'Which statement correctly describes the relationship between IMFA strength and vapor pressure?',
		options: [
			'Stronger IMFA result in lower vapor pressure because fewer molecules have enough energy to escape into the gas phase.',
			'Stronger IMFA result in higher vapor pressure because the molecules are more attracted to each other.',
			'Vapor pressure is independent of IMFA — it depends only on temperature.',
			'Weaker IMFA result in lower vapor pressure because the molecules do not interact.'
		],
		answer:
			'Stronger IMFA result in lower vapor pressure because fewer molecules have enough energy to escape into the gas phase.',
		explanation:
			'Vapor pressure measures the tendency of a liquid to evaporate. Strong IMFA hold molecules tightly in the liquid phase, so fewer molecules escape to the gas phase at a given temperature. This results in lower vapor pressure. For example, water (H-bonding) has a vapor pressure of 23.8 mmHg at 25°C, while diethyl ether (weaker dipole-dipole) has a much higher vapor pressure of 537 mmHg.',
		difficulty: 'advanced',
		illustration: boilingPointEffectIllustration
	},
	{
		id: 3,
		question:
			'At room temperature (25°C), water (H2O) is a liquid with a boiling point of 100°C, while hydrogen sulfide (H2S) is also a liquid but with a boiling point of -60°C. What explains the 160°C difference despite both being group 16 hydrides?',
		options: [
			'Water has hydrogen bonding (H bonded to O), whereas H2S has only dipole-dipole and London forces because S is not electronegative enough for hydrogen bonding.',
			'H2S has stronger IMFA because sulfur is larger and more polarisable than oxygen.',
			'Water has a lower molecular weight, so its boiling point should actually be lower than H2S.',
			'The bond angle in H2S (92°) is smaller than in water (104.5°), making H2S molecules pack more tightly.'
		],
		answer:
			'Water has hydrogen bonding (H bonded to O), whereas H2S has only dipole-dipole and London forces because S is not electronegative enough for hydrogen bonding.',
		explanation:
			'The anomalously high boiling point of water is due to extensive hydrogen bonding between H2O molecules. For hydrogen bonding, H must be bonded to N, O, or F (electronegativity ≥ 3.0). Sulfur has electronegativity of only 2.58, too low to create the strong δ+ on H needed for H-bonding. H2S relies on weaker dipole-dipole and London dispersion forces, resulting in a much lower boiling point.',
		difficulty: 'expert',
		illustration: boilingPointEffectIllustration
	},
	{
		id: 4,
		question:
			'A student observes that at 25°C, ethanol (C2H5OH, bp 78°C) evaporates more slowly than acetone (CH3COCH3, bp 56°C). Which IMFA-based explanation is correct?',
		options: [
			'Ethanol has hydrogen bonding (O-H group), which creates stronger intermolecular attraction and lower vapor pressure than acetone, which has only dipole-dipole and London forces.',
			'Acetone has hydrogen bonding because of its C=O group, making it evaporate more slowly.',
			'Ethanol has a higher molecular weight, so it always has higher vapor pressure regardless of IMFA.',
			'Acetone has stronger London dispersion forces because it has more carbon atoms than ethanol.'
		],
		answer:
			'Ethanol has hydrogen bonding (O-H group), which creates stronger intermolecular attraction and lower vapor pressure than acetone, which has only dipole-dipole and London forces.',
		explanation:
			'Both ethanol and acetone have similar molecular weights (~46 g/mol), but ethanol has an O-H group that participates in hydrogen bonding. Acetone has a polar C=O bond but no H bonded to N/O/F, so it has only dipole-dipole and London dispersion forces. The stronger IMFA in ethanol results in lower vapor pressure and slower evaporation at room temperature.',
		difficulty: 'expert',
		illustration: boilingPointEffectIllustration
	},
	{
		id: 5,
		question:
			'Which of the following series of compounds shows the correct trend of increasing boiling point?',
		options: [
			'CH4 (-161°C) < CF4 (-128°C) < CCl4 (77°C) < CI4 (130°C) — increasing London dispersion forces with electron count',
			'CI4 (130°C) < CCl4 (77°C) < CF4 (-128°C) < CH4 (-161°C) — decreasing molecular weight',
			'CH4 < CCl4 < CF4 < CI4 — based on bond polarity',
			'CF4 < CH4 < CCl4 < CI4 — based on hydrogen bonding ability'
		],
		answer:
			'CH4 (-161°C) < CF4 (-128°C) < CCl4 (77°C) < CI4 (130°C) — increasing London dispersion forces with electron count',
		explanation:
			'All four compounds are nonpolar tetrahedral molecules with only London dispersion forces. As the halogen size increases (F → Cl → I), the electron count increases, leading to larger, more polarisable electron clouds and stronger dispersion forces. CH4 has 10 electrons, while CI4 has 106 electrons, explaining the dramatic boiling point increase.',
		difficulty: 'expert',
		illustration: boilingPointEffectIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 2: Surface Tension (Q6-Q8)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 6,
		question:
			'Surface tension in a liquid is caused by which of the following IMFA-related phenomena?',
		options: [
			'Molecules at the surface experience a net inward pull because they have fewer neighbouring molecules to interact with, creating a "skin-like" layer.',
			'Surface molecules experience stronger IMFA than interior molecules, causing them to expand outward.',
			'Surface tension is caused by repulsion between surface molecules, pushing them inward.',
			'Surface tension results from gravitational forces acting on the liquid surface.'
		],
		answer:
			'Molecules at the surface experience a net inward pull because they have fewer neighbouring molecules to interact with, creating a "skin-like" layer.',
		explanation:
			'Interior molecules are surrounded on all sides by other molecules and experience balanced IMFA. Surface molecules, however, have neighbours only below and beside them — not above (where air is). This imbalance creates a net inward pull, causing the liquid to minimise its surface area by forming spherical droplets. This "surface tension" makes the surface behave like an elastic membrane.',
		difficulty: 'advanced',
		illustration: surfaceTensionIllustration
	},
	{
		id: 7,
		question:
			'Water striders can walk on the surface of a pond. Which property of water, resulting from its intermolecular forces, enables this?',
		options: [
			'High surface tension — the strong hydrogen bonds between water molecules create a cohesive surface layer that can support small weights.',
			'Low viscosity — water flows easily, allowing the insect to glide.',
			'High vapor pressure — water evaporates quickly, providing lift.',
			'Low density — water is less dense than the insect, keeping it afloat.'
		],
		answer:
			'High surface tension — the strong hydrogen bonds between water molecules create a cohesive surface layer that can support small weights.',
		explanation:
			'Water has unusually high surface tension due to extensive hydrogen bonding between molecules. The cohesive forces at the surface create a strong "film" that resists penetration. Water striders distribute their weight over their long legs, and the surface tension of water supports them without sinking. This is a classic demonstration of the effects of strong IMFA.',
		difficulty: 'advanced',
		illustration: surfaceTensionIllustration
	},
	{
		id: 8,
		question:
			'Which liquid would be expected to have the HIGHEST surface tension?',
		options: [
			'Water (H2O) — strong hydrogen bonding between molecules creates high cohesive forces at the surface.',
			'Hexane (C6H14) — its long hydrocarbon chain maximises London dispersion forces.',
			'Diethyl ether (C2H5OC2H5) — its polar C-O bonds create strong dipole-dipole interactions.',
			'Carbon tetrachloride (CCl4) — the large chlorine atoms create strong London dispersion forces.'
		],
		answer:
			'Water (H2O) — strong hydrogen bonding between molecules creates high cohesive forces at the surface.',
		explanation:
			'Surface tension increases with IMFA strength. Water has hydrogen bonding (10-40 kJ/mol), which is far stronger than dipole-dipole (0.5-5 kJ/mol) or London dispersion (0.05-5 kJ/mol) forces. Water\'s surface tension is about 72 mN/m at 25°C, while hexane has about 18 mN/m and diethyl ether about 17 mN/m.',
		difficulty: 'advanced',
		illustration: surfaceTensionIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 3: Viscosity & Cohesion/Adhesion (Q9-Q13)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 9,
		question:
			'Viscosity is a measure of a fluid\'s resistance to flow. How do intermolecular forces influence viscosity?',
		options: [
			'Stronger IMFA result in higher viscosity because molecules are more strongly attracted to each other and cannot slide past one another easily.',
			'Stronger IMFA result in lower viscosity because the molecules are already aligned for flow.',
			'Viscosity depends only on molecular weight, not on IMFA strength.',
			'Weaker IMFA result in higher viscosity because the molecules move too quickly.'
		],
		answer:
			'Stronger IMFA result in higher viscosity because molecules are more strongly attracted to each other and cannot slide past one another easily.',
		explanation:
			'Viscosity reflects internal friction within a liquid. When IMFA are strong (e.g., hydrogen bonding in glycerol or honey), molecules resist moving past each other, creating high viscosity. When IMFA are weak (e.g., London dispersion in hexane), molecules slide past each other easily, resulting in low viscosity.',
		difficulty: 'advanced',
		illustration: viscosityIllustration
	},
	{
		id: 10,
		question:
			'Honey has a much higher viscosity than water. Which statement best explains this using IMFA concepts?',
		options: [
			'Honey contains many -OH groups (sugars) that form extensive hydrogen bonding networks, making it flow slowly.',
			'Honey has a lower molecular weight than water, so it should flow more easily — the observation contradicts IMFA theory.',
			'Honey\'s high viscosity is due to strong London dispersion forces between sugar molecules.',
			'Honey\'s viscosity is caused by dipole-dipole interactions between its aldehyde groups.'
		],
		answer:
			'Honey contains many -OH groups (sugars) that form extensive hydrogen bonding networks, making it flow slowly.',
		explanation:
			'Honey is a concentrated solution of fructose and glucose, both of which contain multiple -OH groups. These hydroxyl groups form extensive intermolecular hydrogen bonds, creating a strong three-dimensional network of attractions. This network of H-bonds makes it difficult for molecules to slide past each other, resulting in very high viscosity compared to water.',
		difficulty: 'expert',
		illustration: viscosityIllustration
	},
	{
		id: 11,
		question:
			'Cohesion refers to the attraction between molecules of the same substance, while adhesion refers to attraction between molecules of different substances. Which statement correctly applies these to water?',
		options: [
			'Cohesion (water-water H-bonds) causes water droplets to form, while adhesion (water-surface interactions) allows water to climb up plant stems.',
			'Adhesion causes water molecules to stick together, while cohesion allows water to wet surfaces.',
			'Both cohesion and adhesion are stronger in nonpolar liquids like oil.',
			'Cohesion is responsible for capillary action, while adhesion is responsible for surface tension.'
		],
		answer:
			'Cohesion (water-water H-bonds) causes water droplets to form, while adhesion (water-surface interactions) allows water to climb up plant stems.',
		explanation:
			'Cohesive forces are the IMFA between like molecules (water-water). These hold water droplets together and create surface tension. Adhesive forces are IMFA between unlike molecules (water-glass, water-plant cell walls). When adhesion is stronger than cohesion, water climbs up narrow tubes — this is capillary action, which is essential for water transport in plants.',
		difficulty: 'advanced',
		illustration: cohesionAdhesionIllustration
	},
	{
		id: 12,
		question:
			'Capillary action is the ability of a liquid to flow upward in narrow tubes against gravity. This phenomenon depends on which relationship?',
		options: [
			'Adhesion between the liquid and tube wall must be greater than cohesion between liquid molecules.',
			'Cohesion between liquid molecules must be greater than adhesion to the tube wall.',
			'The liquid must have higher density than the tube material.',
			'The tube must be made of a nonpolar material that repels the liquid.'
		],
		answer:
			'Adhesion between the liquid and tube wall must be greater than cohesion between liquid molecules.',
		explanation:
			'For capillary rise to occur, the adhesive forces between the liquid and the tube wall must be stronger than the cohesive forces within the liquid. Water in a glass tube shows capillary rise because water molecules are attracted to the polar Si-OH groups on the glass surface (adhesion) more strongly than to each other (cohesion). This creates a concave meniscus and upward pull. Mercury shows the opposite — cohesion > adhesion, creating a convex meniscus.',
		difficulty: 'expert',
		illustration: capillaryActionIllustration
	},
	{
		id: 13,
		question:
			'When water is placed in a narrow glass tube, it forms a concave (curved upward) meniscus. When mercury is placed in the same tube, it forms a convex (curved downward) meniscus. What explains this difference?',
		options: [
			'Water has stronger adhesion to glass than cohesion to itself, while mercury has stronger cohesion to itself than adhesion to glass.',
			'Water is less dense than mercury, so it naturally rises higher in the tube.',
			'Mercury forms hydrogen bonds with the glass, while water does not.',
			'Water has stronger London dispersion forces than mercury, causing it to spread out.'
		],
		answer:
			'Water has stronger adhesion to glass than cohesion to itself, while mercury has stronger cohesion to itself than adhesion to glass.',
		explanation:
			'Water is polar and forms adhesive hydrogen bonds with the polar Si-OH groups on glass, so adhesion > cohesion, pulling water up at the edges (concave meniscus). Mercury is a nonpolar metallic liquid with very strong cohesive metallic bonding between its atoms. Its adhesion to glass is much weaker than its cohesion, so mercury pulls itself inward (convex meniscus).',
		difficulty: 'expert',
		illustration: capillaryActionIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 4: Solubility — Like Dissolves Like (Q14-Q18)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 14,
		question:
			'What does the chemical principle "like dissolves like" mean in the context of intermolecular forces?',
		options: [
			'Polar solutes dissolve in polar solvents, and nonpolar solutes dissolve in nonpolar solvents, because similar IMFA types lead to favourable interactions.',
			'Chemicals with the same molecular weight always dissolve in each other.',
			'Solutes can only dissolve in solvents that have identical chemical formulas.',
			'Only ionic compounds can dissolve in water, and only covalent compounds can dissolve in oil.'
		],
		answer:
			'Polar solutes dissolve in polar solvents, and nonpolar solutes dissolve in nonpolar solvents, because similar IMFA types lead to favourable interactions.',
		explanation:
			'Dissolution occurs when solute-solvent interactions (adhesion) are strong enough to overcome both solute-solute and solvent-solvent interactions (cohesion). Polar solvents (like water) have strong dipole-dipole and H-bonding interactions, so they can stabilise polar or ionic solutes. Nonpolar solvents (like hexane) have only London dispersion forces, so they can only dissolve nonpolar solutes via dispersion interactions.',
		difficulty: 'advanced',
		illustration: solubilityIllustration
	},
	{
		id: 15,
		question:
			'Table salt (NaCl) readily dissolves in water but does not dissolve in vegetable oil. What is the best IMFA-based explanation?',
		options: [
			'Water\'s polar molecules and ion-dipole interactions can overcome the ionic lattice energy of NaCl. Oil is nonpolar and cannot form the necessary ion-dipole interactions.',
			'Oil molecules are too large to fit around Na+ and Cl- ions.',
			'Water has a higher density than oil, so it can physically force the salt apart.',
			'NaCl dissolves in oil only when heated — the room temperature observation is due to kinetics, not IMFA.'
		],
		answer:
			'Water\'s polar molecules and ion-dipole interactions can overcome the ionic lattice energy of NaCl. Oil is nonpolar and cannot form the necessary ion-dipole interactions.',
		explanation:
			'NaCl dissolution involves separating Na+ and Cl- ions from the crystal lattice and surrounding them with solvent molecules. Water molecules are polar and can form strong ion-dipole interactions with the ions (δ- O around Na+, δ+ H around Cl-), releasing enough hydration energy to overcome the lattice energy. Oil molecules are nonpolar and can only offer weak London dispersion forces, which are insufficient to overcome the ionic lattice.',
		difficulty: 'expert',
		illustration: solubilityIllustration
	},
	{
		id: 16,
		question:
			'Iodine (I2) is a nonpolar molecule. Based on the "like dissolves like" principle, in which solvent would I2 be most soluble?',
		options: [
			'Carbon tetrachloride (CCl4) — a nonpolar solvent with only London dispersion forces',
			'Water (H2O) — because it is the universal solvent',
			'Ethanol (C2H5OH) — because it can form hydrogen bonds with iodine',
			'Acetic acid (CH3COOH) — because it is polar and can induce a dipole in iodine'
		],
		answer:
			'Carbon tetrachloride (CCl4) — a nonpolar solvent with only London dispersion forces',
		explanation:
			'I2 is nonpolar (no permanent dipole) and can only experience London dispersion forces. CCl4 is also nonpolar and tetrahedral, so I2-CCl4 interactions are of similar type and strength to I2-I2 and CCl4-CCl4 interactions. This allows I2 to dissolve readily (purple solution). I2 is only slightly soluble in water because the strong H-bonding in water cannot be compensated by weak I2-water dispersion forces.',
		difficulty: 'advanced',
		illustration: solubilityIllustration
	},
	{
		id: 17,
		question:
			'Which of the following pairs of liquids would be expected to be fully miscible (soluble in all proportions)?',
		options: [
			'Water (H2O) and ethanol (C2H5OH) — both can form hydrogen bonds with each other',
			'Water (H2O) and benzene (C6H6) — because benzene is slightly polar',
			'Water (H2O) and hexane (C6H14) — because water has high surface tension',
			'Hexane (C6H14) and water (H2O) — because both are liquids at room temperature'
		],
		answer:
			'Water (H2O) and ethanol (C2H5OH) — both can form hydrogen bonds with each other',
		explanation:
			'Water and ethanol are both polar and can form hydrogen bonds with each other (ethanol\'s O-H interacts with water\'s O-H). The adhesive H-bonds between water and ethanol are as strong as the cohesive H-bonds within each pure liquid, allowing complete miscibility. Water and hexane are immiscible because water\'s strong H-bonding cannot interact with hexane\'s weak dispersion forces.',
		difficulty: 'advanced',
		illustration: solubilityIllustration
	},
	{
		id: 18,
		question:
			'Detergents are molecules with both a polar head and a nonpolar tail. How does this amphipathic structure enable detergents to remove grease (nonpolar) stains using water (polar)?',
		options: [
			'The nonpolar tail dissolves into the grease, and the polar head interacts with water, allowing the grease to be lifted and washed away.',
			'The polar head dissolves in the grease, breaking it down into smaller droplets that can be washed away.',
			'Detergents reduce the surface tension of water so much that water can now dissolve grease directly.',
			'The nonpolar tail reacts chemically with grease, converting it into a polar substance that dissolves in water.'
		],
		answer:
			'The nonpolar tail dissolves into the grease, and the polar head interacts with water, allowing the grease to be lifted and washed away.',
		explanation:
			'Detergents are amphipathic — they have a polar (hydrophilic) head and a nonpolar (hydrophobic) tail. The nonpolar tail dissolves into the grease (like dissolves like: London dispersion forces), while the polar head remains in contact with water (via dipole-dipole and H-bonding). This forms micelles — tiny spheres with grease trapped inside and polar heads facing outward. The micelles are suspended in water and rinsed away.',
		difficulty: 'expert',
		illustration: solubilityIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 5: States of Matter & IMFA Overview (Q19-Q22)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 19,
		question:
			'Which factor determines whether a substance exists as a solid, liquid, or gas at a given temperature?',
		options: [
			'The relative strength of intermolecular forces compared to the kinetic energy of the molecules',
			'The colour and appearance of the substance',
			'The type of intramolecular bonds (ionic vs covalent) alone',
			'The density of the substance only'
		],
		answer:
			'The relative strength of intermolecular forces compared to the kinetic energy of the molecules',
		explanation:
			'The state of matter at any temperature results from the competition between the kinetic energy (which tends to separate molecules) and the IMFA (which tends to hold molecules together). If KE ≫ IMFA, the substance is a gas. If IMFA ≫ KE, it is a solid. When KE and IMFA are comparable, it is a liquid. This explains why substances with strong IMFA are solids at room temperature (e.g., I2) while those with weak IMFA are gases (e.g., F2).',
		difficulty: 'advanced',
		illustration: statesOfMatterIllustration
	},
	{
		id: 20,
		question:
			'At room temperature (25°C), fluorine (F2) is a gas, bromine (Br2) is a liquid, and iodine (I2) is a solid. All three are nonpolar diatomic molecules. What explains this trend?',
		options: [
			'London dispersion forces increase with electron count (F2: 18, Br2: 70, I2: 106), making I2\'s IMFA strong enough to hold it in a solid lattice at room temperature.',
			'Fluorine is more electronegative than iodine, so F2 has stronger dipole-dipole forces.',
			'Iodine has higher molecular weight, but this does not affect its state — the trend is due to hydrogen bonding.',
			'Bromine and iodine are liquid and solid because they can form hydrogen bonds with each other.'
		],
		answer:
			'London dispersion forces increase with electron count (F2: 18, Br2: 70, I2: 106), making I2\'s IMFA strong enough to hold it in a solid lattice at room temperature.',
		explanation:
			'All three halogens are nonpolar diatomic molecules with only London dispersion forces. As atomic number increases, the number of electrons increases dramatically. Iodine (106 electrons) has a much larger, more polarisable electron cloud than fluorine (18 electrons), leading to much stronger instantaneous dipoles and dispersion forces. This is why I2 is a solid, Br2 is a liquid, and F2 is a gas at room temperature.',
		difficulty: 'expert',
		illustration: statesOfMatterIllustration
	},
	{
		id: 21,
		question:
			'Which physical property is NOT directly influenced by the strength of intermolecular forces?',
		options: [
			'Intramolecular bond dissociation energy (the energy required to break covalent bonds within a molecule)',
			'Boiling point',
			'Vapor pressure',
			'Viscosity'
		],
		answer:
			'Intramolecular bond dissociation energy (the energy required to break covalent bonds within a molecule)',
		explanation:
			'Bond dissociation energy involves breaking covalent bonds between atoms within a molecule (intramolecular), not the forces between molecules (intermolecular). Covalent bonds are typically 150-800 kJ/mol, far stronger than IMFA (0.05-40 kJ/mol). Boiling point, vapor pressure, and viscosity are all physical properties determined by the strength of IMFA between molecules.',
		difficulty: 'advanced',
		illustration: imfaEffectsOverviewIllustration
	},
	{
		id: 22,
		question:
			'A student measures the melting points of three solids: NaCl (801°C), sugar (186°C), and I2 (114°C). Which IMFA-based analysis correctly explains the melting point differences?',
		options: [
			'NaCl has strong ionic bonds (electrostatic attraction between full charges), sugar has hydrogen bonding and dipole-dipole forces, and I2 has only London dispersion forces.',
			'I2 has the highest IMFA because it has the most electrons, so it should have the highest melting point.',
			'Sugar should have the highest melting point because it has the most hydrogen bonds, making it the most stable.',
			'All three have similar melting points because they are all solids at room temperature.'
		],
		answer:
			'NaCl has strong ionic bonds (electrostatic attraction between full charges), sugar has hydrogen bonding and dipole-dipole forces, and I2 has only London dispersion forces.',
		explanation:
			'Though technically ionic bonds are intramolecular, the melting of ionic compounds involves overcoming the lattice energy from electrostatic attraction between full ionic charges (Na+, Cl-), requiring temperatures above 800°C. Sucrose (sugar) has many -OH groups forming extensive hydrogen bonds and dipole-dipole interactions, requiring moderate energy to melt. I2 is nonpolar with only London dispersion forces, requiring relatively low energy to melt.',
		difficulty: 'expert',
		illustration: imfaEffectsOverviewIllustration
	},

	// ═══════════════════════════════════════════════════════════════════════
	// SECTION 6: Applied & Integrative (Q23-Q25)
	// ═══════════════════════════════════════════════════════════════════════
	{
		id: 23,
		question:
			'A pharmaceutical company is designing a drug that must be water-soluble for injection into the bloodstream. Which molecular property would the chemist prioritise to ensure aqueous solubility?',
		options: [
			'Including polar functional groups (e.g., -OH, -NH2, -COOH) that can form hydrogen bonds and dipole-dipole interactions with water',
			'Maximising the nonpolar hydrocarbon surface area to increase London dispersion forces',
			'Increasing molecular weight to make the drug heavier and sink in water',
			'Using only fluorine-containing groups, as C-F bonds create the strongest IMFA'
		],
		answer:
			'Including polar functional groups (e.g., -OH, -NH2, -COOH) that can form hydrogen bonds and dipole-dipole interactions with water',
		explanation:
			'Water is a polar, hydrogen-bonding solvent. For a drug to dissolve in water, it must be able to form favourable intermolecular interactions with water molecules. Polar functional groups like hydroxyl (-OH), amino (-NH2), and carboxyl (-COOH) can form hydrogen bonds with water, providing the necessary adhesive interactions. Nonpolar regions would be hydrophobic and reduce solubility.',
		difficulty: 'expert',
		illustration: solubilityIllustration
	},
	{
		id: 24,
		question:
			'Liquid water has unusual properties: it expands upon freezing (ice is less dense than water), has high specific heat, and its boiling point is anomalously high. Which single property of water is responsible for all these unusual characteristics?',
		options: [
			'The extensive three-dimensional network of hydrogen bonds between water molecules',
			'The high electronegativity of oxygen creating very strong O-H covalent bonds',
			'The bent molecular geometry of water (104.5°)',
			'The small size of the water molecule allowing it to fit into any space'
		],
		answer:
			'The extensive three-dimensional network of hydrogen bonds between water molecules',
		explanation:
			'Water\'s unusual properties all stem from its hydrogen bonding network. In liquid water, H-bonds constantly break and reform. When freezing, water forms a crystalline hexagonal lattice where each molecule is H-bonded to four others, creating an open structure that is less dense than liquid water. The high specific heat results from energy being absorbed to break H-bonds before raising temperature. The anomalously high boiling point (100°C vs predicted ~-80°C) is due to the energy needed to overcome all H-bonds.',
		difficulty: 'expert',
		illustration: statesOfMatterIllustration
	},
	{
		id: 25,
		question:
			'A researcher is studying three unknown liquids. Liquid A evaporates quickly (high vapor pressure). Liquid B forms droplets on a wax surface (beads up). Liquid C flows very slowly (high viscosity). Which IMFA conclusions can the researcher draw?',
		options: [
			'Liquid A has weak IMFA (likely nonpolar), Liquid B has strong cohesive forces (likely polar with H-bonding), Liquid C has strong IMFA (likely high molecular weight or extensive H-bonding).',
			'Liquid A must have hydrogen bonding, Liquid B must be nonpolar, and Liquid C must have only London dispersion forces.',
			'All three liquids have the same type of IMFA but differ only in molecular weight.',
			'Liquid A has the strongest IMFA, Liquid B has intermediate IMFA, and Liquid C has the weakest IMFA.'
		],
		answer:
			'Liquid A has weak IMFA (likely nonpolar), Liquid B has strong cohesive forces (likely polar with H-bonding), Liquid C has strong IMFA (likely high molecular weight or extensive H-bonding).',
		explanation:
			'High vapor pressure (A) indicates molecules escape easily → weak IMFA. Beading up on wax (B) indicates strong cohesive forces (molecules prefer each other over the nonpolar wax surface) → strong IMFA, likely with H-bonding. High viscosity (C) indicates strong resistance to flow → strong IMFA, either from large molecular weight (long chains entangling) or extensive H-bonding (e.g., glycerol). These three observations demonstrate how IMFA produce different physical effects.',
		difficulty: 'expert',
		illustration: imfaEffectsOverviewIllustration
	}
];

export const effectIntermolecularForcesQuizData = effectIntermolecularForcesQuizItems satisfies Question[];
