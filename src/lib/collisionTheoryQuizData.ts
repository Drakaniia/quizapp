import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Collision Theory Concept ─────────────────────────────────

const collisionTheoryConceptIllustration = `
<svg role="img" aria-label="Collision theory: reacting substances must have enough activation energy and correct orientation" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="ctBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#ctBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">COLLISION THEORY</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Reacting substances must come into contact with enough activation energy and correct orientation</text>
	<!-- Left: Successful collision (correct orientation + energy) -->
	<rect x="30" y="82" width="340" height="150" rx="6" fill="#1f1917" stroke="#00d4ff" stroke-width="2"/>
	<text x="200" y="106" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="12" font-weight="700">SUCCESSFUL COLLISION</text>
	<line x1="46" y1="116" x2="354" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<!-- Molecule A -->
	<circle cx="120" cy="152" r="22" fill="#00d4ff" opacity="0.12"/>
	<circle cx="120" cy="152" r="14" fill="#00d4ff" opacity="0.2"/>
	<text x="120" y="156" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10" font-weight="700">A</text>
	<!-- Arrow -->
	<text x="200" y="158" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="18" font-weight="700">→</text>
	<text x="200" y="148" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="8" font-weight="700">Eₐ ✓</text>
	<!-- Molecule B -->
	<circle cx="270" cy="152" r="22" fill="#4ecdc4" opacity="0.15"/>
	<circle cx="270" cy="152" r="14" fill="#4ecdc4" opacity="0.2"/>
	<text x="270" y="156" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10" font-weight="700">B</text>
	<!-- Product -->
	<rect x="170" y="196" width="72" height="24" rx="4" fill="#4ecdc4" opacity="0.1" stroke="#4ecdc4" stroke-width="1"/>
	<text x="206" y="212" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">Product</text>
	<!-- Right: Unsuccessful collision -->
	<rect x="390" y="82" width="340" height="150" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="560" y="106" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">UNSUCCESSFUL COLLISION</text>
	<line x1="406" y1="116" x2="714" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<!-- Wrong orientation: molecules facing wrong way -->
	<rect x="420" y="130" width="60" height="40" rx="4" fill="#ff6b6b" opacity="0.08" stroke="#ff6b6b" stroke-width="1"/>
	<text x="450" y="142" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="8" font-weight="700">A—A</text>
	<text x="450" y="156" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="8">wrong orientation</text>
	<text x="530" y="152" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="18">✗</text>
	<rect x="640" y="130" width="60" height="40" rx="4" fill="#ff6b6b" opacity="0.08" stroke="#ff6b6b" stroke-width="1"/>
	<text x="670" y="142" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="8" font-weight="700">B—B</text>
	<text x="670" y="156" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="8">wrong orientation</text>
	<!-- Explanation -->
	<text x="560" y="198" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9">✗ No reaction — they just bounce off</text>
	<text x="560" y="218" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Or: insufficient kinetic energy / wrong collision angle</text>
</svg>`;

// ── ILLUSTRATION: Activation Energy Diagram ────────────────────────────────

const activationEnergyIllustration = `
<svg role="img" aria-label="Activation energy diagram showing reaction progress and energy barrier" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="aeBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<marker id="aeArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#c4b8ad" stroke-width="1"/></marker>
	</defs>
	<rect width="760" height="270" rx="8" fill="url(#aeBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ACTIVATION ENERGY</text>
	<text x="380" y="58" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Energy required to reach the transition state</text>
	<!-- Reaction coordinate diagram -->
	<!-- Axes -->
	<line x1="80" y1="210" x2="720" y2="210" stroke="#ffffff20" stroke-width="1"/>
	<line x1="80" y1="210" x2="80" y2="60" stroke="#ffffff20" stroke-width="1"/>
	<text x="720" y="226" text-anchor="end" fill="#888" font-family="monospace" font-size="8">Reaction Progress →</text>
	<text x="56" y="60" text-anchor="middle" fill="#888" font-family="monospace" font-size="8" transform="rotate(-90,56,60)">Energy →</text>
	<!-- Energy curve -->
	<path d="M80 205 C100 205 200 190 300 130 C350 100 380 80 400 78 C420 76 440 80 460 90 C520 120 600 150 720 160" fill="none" stroke="#4ecdc4" stroke-width="3" stroke-linecap="round"/>
	<!-- Transition state peak -->
	<circle cx="400" cy="78" r="5" fill="#fcb045"/>
	<text x="400" y="68" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">TS</text>
	<text x="400" y="58" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Transition State</text>
	<!-- Reactants label -->
	<line x1="80" y1="205" x2="80" y2="218" stroke="#ffffff15" stroke-width="1"/>
	<text x="160" y="230" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="11" font-weight="700">Reactants</text>
	<!-- Products label -->
	<line x1="720" y1="160" x2="720" y2="218" stroke="#ffffff15" stroke-width="1"/>
	<text x="660" y="230" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Products</text>
	<!-- Activation energy arrow -->
	<path d="M200 190 L200 110" fill="none" stroke="#fcb045" stroke-width="2" marker-end="url(#aeArrow)" stroke-dasharray="4,2"/>
	<path d="M200 190 L200 112" fill="none" stroke="#fcb045" stroke-width="2" marker-start="url(#aeArrow)"/>
	<text x="205" y="155" fill="#fcb045" font-family="monospace" font-size="9" font-weight="700">Eₐ</text>
	<!-- Legend -->
	<rect x="50" y="244" width="380" height="20" rx="4" fill="#1f1917" stroke="#ffffff10" stroke-width="1"/>
	<text x="240" y="257" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Activation energy = minimum energy needed for reaction to occur</text>
</svg>`;

// ── ILLUSTRATION: Factors Affecting Reaction Rate ─────────────────────────

const factorsReactionRateIllustration = `
<svg role="img" aria-label="Four factors affecting reaction rate: temperature, surface area, concentration, catalyst" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="frBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="280" rx="8" fill="url(#frBg)"/>
	<text x="32" y="40" fill="#00d4ff" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">FACTORS AFFECTING REACTION RATE</text>
	<!-- Temperature -->
	<rect x="24" y="66" width="350" height="92" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="199" y="90" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">TEMPERATURE</text>
	<line x1="40" y1="100" x2="358" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<text x="40" y="120" fill="#c4b8ad" font-family="sans-serif" font-size="10">↑ Temperature → Particles move faster + more kinetic energy</text>
	<text x="40" y="140" fill="#c4b8ad" font-family="sans-serif" font-size="10">→ More collisions with sufficient energy → ↑ Reaction rate</text>
	<!-- Surface Area -->
	<rect x="390" y="66" width="350" height="92" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="565" y="90" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">SURFACE AREA</text>
	<line x1="406" y1="100" x2="724" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<text x="406" y="120" fill="#c4b8ad" font-family="sans-serif" font-size="10">↑ Surface area → Larger space for collision</text>
	<text x="406" y="140" fill="#c4b8ad" font-family="sans-serif" font-size="10">→ More particle interactions → ↑ Reaction rate</text>
	<!-- Concentration -->
	<rect x="24" y="174" width="350" height="92" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="199" y="198" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">CONCENTRATION</text>
	<line x1="40" y1="208" x2="358" y2="208" stroke="#ffffff10" stroke-width="1"/>
	<text x="40" y="228" fill="#c4b8ad" font-family="sans-serif" font-size="10">↑ Concentration → Particles more crowded</text>
	<text x="40" y="248" fill="#c4b8ad" font-family="sans-serif" font-size="10">→ Greater chance of collision → ↑ Reaction rate</text>
	<!-- Catalyst -->
	<rect x="390" y="174" width="350" height="92" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="565" y="198" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="13" font-weight="700">CATALYST</text>
	<line x1="406" y1="208" x2="724" y2="208" stroke="#ffffff10" stroke-width="1"/>
	<text x="406" y="228" fill="#c4b8ad" font-family="sans-serif" font-size="10">Speeds up reaction by lowering activation energy</text>
	<text x="406" y="248" fill="#c4b8ad" font-family="sans-serif" font-size="10">Chemically unchanged at the end of reaction</text>
</svg>`;

// ── ILLUSTRATION: Catalyst vs No Catalyst ─────────────────────────────────

const catalystComparisonIllustration = `
<svg role="img" aria-label="How a catalyst lowers activation energy" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="catBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<marker id="catArrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill="#c4b8ad"/></marker>
	</defs>
	<rect width="760" height="250" rx="8" fill="url(#catBg)"/>
	<text x="32" y="38" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">CATALYST EFFECT ON ACTIVATION ENERGY</text>
	<!-- Energy diagram -->
	<!-- Axes -->
	<line x1="80" y1="200" x2="720" y2="200" stroke="#ffffff20" stroke-width="1"/>
	<line x1="80" y1="200" x2="80" y2="60" stroke="#ffffff20" stroke-width="1"/>
	<text x="720" y="214" text-anchor="end" fill="#888" font-family="monospace" font-size="8">Reaction Progress →</text>
	<text x="56" y="60" text-anchor="middle" fill="#888" font-family="monospace" font-size="8" transform="rotate(-90,56,60)">Energy →</text>
	<!-- No catalyst (higher peak) -->
	<path d="M80 195 C100 195 200 180 400 75 C600 180 700 195 720 195" fill="none" stroke="#ff6b6b" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6,3"/>
	<text x="400" y="62" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">No catalyst</text>
	<!-- With catalyst (lower peak) -->
	<path d="M80 195 C100 195 200 180 420 118 C600 180 700 195 720 195" fill="none" stroke="#4ecdc4" stroke-width="2.5" stroke-linecap="round"/>
	<text x="440" y="108" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">With catalyst</text>
	<!-- Activation energy arrows -->
	<path d="M200 188 L200 110" fill="none" stroke="#ff6b6b" stroke-width="1.5" marker-end="url(#catArrow)" stroke-dasharray="3,2"/>
	<text x="204" y="155" fill="#ff6b6b" font-family="monospace" font-size="8">Eₐ (high)</text>
	<path d="M220 188 L220 148" fill="none" stroke="#4ecdc4" stroke-width="1.5" marker-end="url(#catArrow)" stroke-dasharray="3,2"/>
	<text x="224" y="175" fill="#4ecdc4" font-family="monospace" font-size="8">Eₐ (low)</text>
	<!-- Reactants / Products -->
	<text x="160" y="218" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="10" font-weight="700">Reactants</text>
	<text x="640" y="218" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">Products</text>
	<!-- Bottom note -->
	<rect x="50" y="228" width="660" height="18" rx="4" fill="#1f1917" stroke="#ffffff10" stroke-width="1"/>
	<text x="380" y="240" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Catalyst provides an alternative pathway with lower activation energy — chemically unchanged at end</text>
</svg>`;

// ── ILLUSTRATION: Temperature Effect on Particles ─────────────────────────

const temperatureEffectIllustration = `
<svg role="img" aria-label="Effect of temperature on particle motion and reaction rate" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="tmpBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#tmpBg)"/>
	<text x="32" y="38" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">TEMPERATURE &amp; KINETIC ENERGY</text>
	<!-- Left: Low temperature -->
	<rect x="24" y="64" width="350" height="150" rx="6" fill="#1f1917" stroke="#00d4ff" stroke-width="1.5"/>
	<text x="199" y="90" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="12" font-weight="700">LOW TEMPERATURE</text>
	<line x1="40" y1="100" x2="358" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<!-- Slow particles -->
	<circle cx="90" cy="140" r="10" fill="#00d4ff" opacity="0.3"/>
	<text x="90" y="143" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<circle cx="200" cy="130" r="10" fill="#4ecdc4" opacity="0.3"/>
	<text x="200" y="133" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">B</text>
	<circle cx="150" cy="170" r="10" fill="#00d4ff" opacity="0.3"/>
	<text x="150" y="173" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<circle cx="280" cy="160" r="10" fill="#4ecdc4" opacity="0.3"/>
	<text x="280" y="163" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">B</text>
	<!-- Small arrow to indicate slow movement -->
	<text x="120" y="118" text-anchor="middle" fill="#ffffff10" font-family="monospace" font-size="6">→</text>
	<text x="260" y="150" text-anchor="middle" fill="#ffffff10" font-family="monospace" font-size="6">→</text>
	<text x="199" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Slow particle movement → Fewer collisions</text>
	<!-- Right: High temperature -->
	<rect x="390" y="64" width="350" height="150" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="565" y="90" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">HIGH TEMPERATURE</text>
	<line x1="406" y1="100" x2="724" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<!-- Fast particles with motion trails -->
	<circle cx="460" cy="130" r="12" fill="#ff6b6b" opacity="0.4"/>
	<text x="460" y="134" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<circle cx="580" cy="120" r="12" fill="#ff6b6b" opacity="0.4"/>
	<text x="580" y="124" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<circle cx="650" cy="165" r="12" fill="#fcb045" opacity="0.4"/>
	<text x="650" y="169" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">B</text>
	<circle cx="510" cy="175" r="12" fill="#fcb045" opacity="0.4"/>
	<text x="510" y="179" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">B</text>
	<circle cx="700" cy="140" r="12" fill="#ff6b6b" opacity="0.3"/>
	<text x="700" y="144" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<!-- Motion trails -->
	<line x1="520" y1="170" x2="560" y2="155" stroke="#ffffff08" stroke-width="1"/>
	<line x1="650" y1="155" x2="685" y2="145" stroke="#ffffff08" stroke-width="1"/>
	<text x="565" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Fast particle movement → More collisions → ↑ Reaction rate</text>
</svg>`;

// ── ILLUSTRATION: Concentration Effect ────────────────────────────────────

const concentrationEffectIllustration = `
<svg role="img" aria-label="Effect of concentration on particle crowding and collision frequency" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="concBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#concBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">CONCENTRATION EFFECT</text>
	<!-- Left: Low concentration -->
	<rect x="24" y="64" width="350" height="150" rx="6" fill="#1f1917" stroke="#00d4ff" stroke-width="1.5"/>
	<text x="199" y="90" text-anchor="middle" fill="#00d4ff" font-family="monospace" font-size="12" font-weight="700">LOW CONCENTRATION</text>
	<line x1="40" y1="100" x2="358" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<!-- Few particles spaced apart -->
	<circle cx="100" cy="130" r="10" fill="#00d4ff" opacity="0.3"/>
	<text x="100" y="133" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<circle cx="280" cy="160" r="10" fill="#4ecdc4" opacity="0.3"/>
	<text x="280" y="163" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">B</text>
	<circle cx="160" cy="190" r="10" fill="#00d4ff" opacity="0.25"/>
	<text x="160" y="193" text-anchor="middle" fill="#fff" font-family="monospace" font-size="7">A</text>
	<circle cx="320" cy="120" r="10" fill="#4ecdc4" opacity="0.2"/>
	<text x="199" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Few particles → Low collision chance</text>
	<!-- Right: High concentration -->
	<rect x="390" y="64" width="350" height="150" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="565" y="90" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">HIGH CONCENTRATION</text>
	<line x1="406" y1="100" x2="724" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<!-- Many particles crowded -->
	<circle cx="430" cy="120" r="10" fill="#fcb045" opacity="0.35"/><text x="430" y="123" text-anchor="middle" fill="#fff" font-size="7">A</text>
	<circle cx="470" cy="140" r="10" fill="#fcb045" opacity="0.3"/><text x="470" y="143" text-anchor="middle" fill="#fff" font-size="7">A</text>
	<circle cx="510" cy="120" r="10" fill="#fcb045" opacity="0.35"/><text x="510" y="123" text-anchor="middle" fill="#fff" font-size="7">A</text>
	<circle cx="550" cy="145" r="10" fill="#4ecdc4" opacity="0.35"/><text x="550" y="148" text-anchor="middle" fill="#fff" font-size="7">B</text>
	<circle cx="590" cy="125" r="10" fill="#4ecdc4" opacity="0.35"/><text x="590" y="128" text-anchor="middle" fill="#fff" font-size="7">B</text>
	<circle cx="630" cy="150" r="10" fill="#fcb045" opacity="0.3"/><text x="630" y="153" text-anchor="middle" fill="#fff" font-size="7">A</text>
	<circle cx="670" cy="130" r="10" fill="#4ecdc4" opacity="0.35"/><text x="670" y="133" text-anchor="middle" fill="#fff" font-size="7">B</text>
	<circle cx="700" cy="160" r="10" fill="#4ecdc4" opacity="0.3"/><text x="700" y="163" text-anchor="middle" fill="#fff" font-size="7">B</text>
	<circle cx="490" cy="175" r="10" fill="#fcb045" opacity="0.25"/><text x="490" y="178" text-anchor="middle" fill="#fff" font-size="7">A</text>
	<circle cx="620" cy="180" r="10" fill="#4ecdc4" opacity="0.25"/><text x="620" y="183" text-anchor="middle" fill="#fff" font-size="7">B</text>
	<text x="565" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Crowded particles → High collision chance → ↑ Reaction rate</text>
</svg>`;

// ── ILLUSTRATION: Surface Area Effect ─────────────────────────────────────

const surfaceAreaIllustration = `
<svg role="img" aria-label="Effect of surface area on collision space and reaction rate" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="saBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#saBg)"/>
	<text x="32" y="38" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">SURFACE AREA EFFECT</text>
	<!-- Left: Small surface area -->
	<rect x="24" y="64" width="350" height="150" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="199" y="90" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">SMALL SURFACE AREA</text>
	<line x1="40" y1="100" x2="358" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<!-- Large block -->
	<rect x="100" y="118" width="160" height="50" rx="4" fill="#ff6b6b" opacity="0.15" stroke="#ff6b6b" stroke-width="2"/>
	<text x="180" y="148" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">ONE BLOCK</text>
	<text x="199" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Small exposed surface → Fewer reactive sites</text>
	<!-- Right: Large surface area -->
	<rect x="390" y="64" width="350" height="150" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="565" y="90" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">LARGE SURFACE AREA</text>
	<line x1="406" y1="100" x2="724" y2="100" stroke="#ffffff10" stroke-width="1"/>
	<!-- Small pieces -->
	<rect x="440" y="118" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="500" y="118" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="560" y="118" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="620" y="118" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="460" y="150" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="520" y="150" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="580" y="150" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="640" y="150" width="40" height="20" rx="2" fill="#4ecdc4" opacity="0.2" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="565" y="200" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Many small pieces → Large exposed surface → ↑ Reaction rate</text>
</svg>`;

// ── ILLUSTRATION: Collision Conditions ────────────────────────────────────

const collisionConditionsIllustration = `
<svg role="img" aria-label="Three conditions: insufficient energy, wrong orientation, correct orientation with energy" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="ccBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="250" rx="8" fill="url(#ccBg)"/>
	<text x="32" y="38" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">COLLISION CONDITIONS</text>
	<text x="380" y="60" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Not all collisions lead to reaction — energy and orientation matter</text>
	<!-- Condition 1: Insufficient Energy -->
	<rect x="22" y="78" width="228" height="100" rx="6" fill="#1f1917" stroke="#ffffff15" stroke-width="1.5"/>
	<circle cx="70" cy="130" r="14" fill="#ff6b6b" opacity="0.2"/>
	<text x="70" y="134" text-anchor="middle" fill="#ff6b6b" font-size="9" font-family="monospace" font-weight="700">A</text>
	<circle cx="180" cy="130" r="14" fill="#ff6b6b" opacity="0.2"/>
	<text x="180" y="134" text-anchor="middle" fill="#ff6b6b" font-size="9" font-family="monospace" font-weight="700">B</text>
	<text x="125" y="168" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">✗ Insufficient Energy</text>
	<text x="125" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Particles too slow to react</text>
	<!-- Condition 2: Wrong Orientation -->
	<rect x="266" y="78" width="228" height="100" rx="6" fill="#1f1917" stroke="#ffffff15" stroke-width="1.5"/>
	<circle cx="320" cy="130" r="14" fill="#ff6b6b" opacity="0.2"/>
	<text x="315" y="128" text-anchor="middle" fill="#ff6b6b" font-size="7" font-family="monospace">A</text>
	<text x="325" y="128" text-anchor="middle" fill="#ff6b6b" font-size="7" font-family="monospace">A</text>
	<circle cx="430" cy="130" r="14" fill="#4ecdc4" opacity="0.2"/>
	<text x="425" y="128" text-anchor="middle" fill="#4ecdc4" font-size="7" font-family="monospace">B</text>
	<text x="435" y="128" text-anchor="middle" fill="#4ecdc4" font-size="7" font-family="monospace">B</text>
	<text x="380" y="168" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">✗ Wrong Orientation</text>
	<text x="380" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Reactive ends aren't aligned</text>
	<!-- Condition 3: Correct -->
	<rect x="510" y="78" width="228" height="100" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<rect x="560" y="115" width="50" height="30" rx="4" fill="#4ecdc4" opacity="0.1" stroke="#4ecdc4" stroke-width="1"/>
	<text x="585" y="134" text-anchor="middle" fill="#4ecdc4" font-size="8" font-family="monospace" font-weight="700">A—B</text>
	<path d="M540 130 Q550 118 560 130" fill="none" stroke="#4ecdc4" stroke-width="1.5"/>
	<path d="M610 130 Q620 118 630 130" fill="none" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="585" y="168" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">✓ Correct + Energy</text>
	<text x="585" y="184" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Reaction proceeds</text>
	<!-- Labels -->
	<text x="625" y="228" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Only collisions with sufficient energy AND correct orientation lead to reaction</text>
</svg>`;

// ── QUIZ QUESTIONS ─────────────────────────────────────────────────────────

const collisionTheoryQuizItems: Question[] = [
	// ── COLLISION THEORY BASICS (Q1–Q7) ──────────────────────────────────
	{
		id: 1,
		question:
			'A chemistry student observes two gas molecules colliding in a container without any apparent reaction. According to the collision theory, what are the two essential conditions that must be satisfied for a chemical reaction to occur?',
		options: [
			'The reactants must have sufficient activation energy AND the correct orientation upon collision.',
			'The reactants must be at high temperature AND in high concentration.',
			'The reactants must be in the same phase AND have equal molecular masses.',
			'The reactants must be polar AND soluble in the same solvent.'
		],
		answer: 'The reactants must have sufficient activation energy AND the correct orientation upon collision.',
		explanation:
			'The lecture states the collision theory requires: (1) reacting substances must come into contact with enough activation energy, and (2) the correct orientation. Without both conditions, the particles will simply bounce off each other without reacting.',
		difficulty: 'advanced',
		illustration: collisionTheoryConceptIllustration
	},
	{
		id: 2,
		question:
			'The lecture provides two complementary definitions of collision theory. Which statement correctly captures the second definition about gas-phase reactions?',
		options: [
			'Gas-phase chemical reactions occur when molecules colliding have sufficient kinetic energy.',
			'Gas-phase reactions occur only in the presence of an inert catalyst.',
			'Gas-phase reactions require that all molecules have identical velocities before collision.',
			'Gas-phase reactions occur when molecules remain stationary and interact through radiation.'
		],
		answer: 'Gas-phase chemical reactions occur when molecules colliding have sufficient kinetic energy.',
		explanation:
			'The lecture explicitly states: \"It states that gas-phase chemical reaction occurs when molecules colliding have sufficient kinetic energy.\" This emphasizes that kinetic energy (not just any energy) is the critical factor for gas-phase reactions.',
		difficulty: 'advanced',
		illustration: collisionTheoryConceptIllustration
	},
	{
		id: 3,
		question:
			'The lecture includes a question about why a reaction does NOT take place, listing four conditions: Sufficient Energy, Insufficient Energy, Wrong Orientation, and Correct Orientation. Which combination of conditions would cause a reaction to NOT proceed?',
		options: [
			'Insufficient Energy OR Wrong Orientation would prevent the reaction.',
			'Only Wrong Orientation prevents the reaction — energy level doesn\'t matter.',
			'Only Insufficient Energy prevents the reaction — orientation always works out.',
			'Both Sufficient Energy AND Correct Orientation together prevent the reaction.'
		],
		answer: 'Insufficient Energy OR Wrong Orientation would prevent the reaction.',
		explanation:
			'The lecture slides (slides 11-12) present these exact conditions. A reaction fails if either the particles lack sufficient energy (Eₐ not reached) OR they collide with the wrong orientation. Both conditions must be satisfied for a successful reaction.',
		difficulty: 'advanced',
		illustration: collisionConditionsIllustration
	},
	{
		id: 4,
		question:
			'Two molecules collide with high speed but their reactive functional groups face away from each other. Based on the collision theory lecture, what will most likely happen?',
		options: [
			'The molecules will bounce off each other without reacting, despite having sufficient kinetic energy.',
			'The molecules will rearrange slightly and form a new product anyway.',
			'The molecules will fuse together permanently regardless of orientation.',
			'The molecules will split into smaller fragments upon collision.'
		],
		answer: 'The molecules will bounce off each other without reacting, despite having sufficient kinetic energy.',
		explanation:
			'The lecture emphasizes that both conditions — sufficient activation energy AND correct orientation — are necessary. Even with high kinetic energy, if the collision happens with the wrong orientation (reactive ends misaligned), the particles simply bounce off without reacting.',
		difficulty: 'advanced',
		illustration: collisionConditionsIllustration
	},
	{
		id: 5,
		question:
			'A teacher uses a visual analogy to explain why a gas-phase reaction might fail despite frequent collisions. If the particles have insufficient kinetic energy, what needs to happen for the reaction to proceed?',
		options: [
			'The temperature must be increased so that particles move faster and gain more kinetic energy.',
			'The pressure must be decreased so that particles have more space to move.',
			'The volume must be reduced so that particles are forced closer together.',
			'The orientation must be optimized regardless of energy levels.'
		],
		answer: 'The temperature must be increased so that particles move faster and gain more kinetic energy.',
		explanation:
			'The lecture explains that if temperature is increased, reactant particles move more quickly and have more kinetic energy. This increases the number of collisions with sufficient energy to overcome the activation energy barrier, increasing the reaction rate.',
		difficulty: 'advanced',
		illustration: temperatureEffectIllustration
	},
	{
		id: 6,
		question:
			'According to the lecture\'s definition, what is activation energy, and where does it place the reacting molecules?',
		options: [
			'Activation energy is the energy required to proceed and reach the transition state.',
			'Activation energy is the energy released after the reaction has completed.',
			'Activation energy is the energy stored in the chemical bonds of the products.',
			'Activation energy is the energy lost as heat during molecular collisions.'
		],
		answer: 'Activation energy is the energy required to proceed and reach the transition state.',
		explanation:
			'The lecture defines activation energy as \"the energy required to proceed and reach the transition state.\" The transition state is a high-energy, unstable configuration at the peak of the reaction coordinate diagram, between reactants and products.',
		difficulty: 'advanced',
		illustration: activationEnergyIllustration
	},
	{
		id: 7,
		question:
			'An exothermic reaction occurs when hydrogen and oxygen gases are ignited. In the reaction coordinate diagram, where would the products appear relative to the reactants in terms of energy level?',
		options: [
			'The products would be at a lower energy level than the reactants, indicating energy was released.',
			'The products would be at a higher energy level than the reactants, indicating energy was absorbed.',
			'The products would be at the same energy level as the reactants, indicating no net energy change.',
			'The products would be at the transition state energy level.'
		],
		answer: 'The products would be at a lower energy level than the reactants, indicating energy was released.',
		explanation:
			'In an exothermic reaction, the products have lower energy than the reactants. The lecture\'s activation energy diagram shows this: the reaction coordinate starts at reactants, goes up to the transition state peak, and then descends to a lower product energy level. The net energy released is the difference.',
		difficulty: 'advanced',
		illustration: activationEnergyIllustration
	},

	// ── REACTION RATE CONCEPT (Q8–Q10) ──────────────────────────────────
	{
		id: 8,
		question:
			'How does the lecture define reaction rate in the simplest intuitive terms?',
		options: [
			'Reaction rate is how quickly or slowly a reaction takes place.',
			'Reaction rate is the total amount of product formed over time.',
			'Reaction rate is the temperature at which a reaction occurs fastest.',
			'Reaction rate is the energy difference between reactants and products.'
		],
		answer: 'Reaction rate is how quickly or slowly a reaction takes place.',
		explanation:
			'The lecture defines reaction rate simply as \"how quickly or slowly a reaction takes place.\" More formally, it is the change in concentration of reactants or products per unit time, but the intuitive definition is about the speed of the reaction.',
		difficulty: 'advanced',
		illustration: factorsReactionRateIllustration
	},
	{
		id: 9,
		question:
			'A chemist monitors a reaction and finds that the concentration of reactants decreases rapidly in the first minute, then slows down over the next ten minutes. What does this tell the chemist about the reaction rate?',
		options: [
			'The reaction rate is not constant — it changes over time as reactants are consumed.',
			'The reaction rate is constant throughout the entire reaction period.',
			'The reaction rate can only be measured when the reaction has fully stopped.',
			'The reaction rate increases steadily as more product is formed.'
		],
		answer: 'The reaction rate is not constant — it changes over time as reactants are consumed.',
		explanation:
			'Reaction rates are typically highest at the beginning when reactant concentrations are highest. As reactants are consumed, the concentration decreases, leading to fewer collisions and a slower rate. This matches the intuitive concept from the lecture.',
		difficulty: 'advanced',
		illustration: concentrationEffectIllustration
	},
	{
		id: 10,
		question:
			'If a reaction is described as taking place \"very slowly,\" what does the collision theory suggest about the nature of the collisions occurring between the reactant particles?',
		options: [
			'Most collisions lack sufficient kinetic energy or the correct orientation to overcome the activation energy.',
			'The particles are colliding too frequently, causing interference.',
			'The particles are moving too fast to interact properly.',
			'The particles have too much energy and break apart immediately.'
		],
		answer: 'Most collisions lack sufficient kinetic energy or the correct orientation to overcome the activation energy.',
		explanation:
			'A slow reaction rate indicates that only a small fraction of collisions are successful — either because the particles lack enough kinetic energy to overcome the activation energy barrier, or because they collide with the wrong orientation.',
		difficulty: 'advanced',
		illustration: collisionTheoryConceptIllustration
	},

	// ── TEMPERATURE & REACTION RATE (Q11–Q14) ───────────────────────────
	{
		id: 11,
		question:
			'The lecture presents temperature as one of the four factors affecting reaction rate. What is the specific chain of cause-and-effect that occurs when temperature is increased?',
		options: [
			'↑ Temperature → particles move more quickly → particles have more kinetic energy → reaction rate increases.',
			'↑ Temperature → particles become more crowded → more collisions occur → reaction rate increases.',
			'↑ Temperature → catalyst becomes activated → activation energy drops → reaction rate increases.',
			'↑ Temperature → particles gain surface area → more reactive sites exposed → reaction rate increases.'
		],
		answer: '↑ Temperature → particles move more quickly → particles have more kinetic energy → reaction rate increases.',
		explanation:
			'The lecture explicitly lists this sequence: \"If temperature is increased: the reactant particles move more quickly, the reactant particles have more kinetic energy, the reaction rate increases.\" This is the direct relationship between temperature and reaction rate.',
		difficulty: 'advanced',
		illustration: temperatureEffectIllustration
	},
	{
		id: 12,
		question:
			'A chemistry experiment demonstrates that dissolving sugar in hot water is much faster than in cold water. Using the collision theory, which explanation best accounts for this observation?',
		options: [
			'Hot water particles move faster and have more kinetic energy, increasing the frequency of effective collisions with sugar molecules.',
			'Cold water has more dissolved air, which physically blocks sugar molecules from dissolving.',
			'Hot water expands to create more space, allowing sugar molecules to fit between water molecules more easily.',
			'Cold water molecules are more structured and actively resist the intrusion of sugar molecules.'
		],
		answer: 'Hot water particles move faster and have more kinetic energy, increasing the frequency of effective collisions with sugar molecules.',
		explanation:
			'The lecture uses temperature and solubility of sugar as a real-world example (slide 26). Higher temperature increases particle kinetic energy and movement speed, leading to more frequent and more energetic collisions between water and sugar molecules, accelerating dissolution.',
		difficulty: 'advanced',
		illustration: temperatureEffectIllustration
	},
	{
		id: 13,
		question:
			'The lecture asks to arrange Cold Water (I), Hot Water (II), and Lukewarm Water (III) from slowest to fastest according to the rate of solubility of sugar. What is the correct order?',
		options: [
			'Cold Water (I), Lukewarm Water (III), Hot Water (II) — I, III, II.',
			'Hot Water (II), Lukewarm Water (III), Cold Water (I) — II, III, I.',
			'Cold Water (I), Hot Water (II), Lukewarm Water (III) — I, II, III.',
			'Lukewarm Water (III), Cold Water (I), Hot Water (II) — III, I, II.'
		],
		answer: 'Cold Water (I), Lukewarm Water (III), Hot Water (II) — I, III, II.',
		explanation:
			'The lecture slide 26 explicitly provides the answer as \"I, III, II\" meaning: Cold Water (slowest), then Lukewarm Water, then Hot Water (fastest). Higher temperature means more kinetic energy, faster particle movement, and therefore faster dissolution.',
		difficulty: 'advanced',
		illustration: temperatureEffectIllustration
	},
	{
		id: 14,
		question:
			'A food scientist observes that milk spoils much faster at room temperature than in a refrigerator. Based on the collision theory, which statement best explains this difference?',
		options: [
			'Lower temperature in the refrigerator reduces molecular kinetic energy, slowing down the spoilage reactions.',
			'The refrigerator introduces a catalyst that actively preserves the milk.',
			'Room temperature creates more surface area for bacterial growth.',
			'Cold temperatures increase the concentration of preservatives in the milk.'
		],
		answer: 'Lower temperature in the refrigerator reduces molecular kinetic energy, slowing down the spoilage reactions.',
		explanation:
			'The collision theory explains that lower temperature reduces particle kinetic energy and movement speed. This decreases the frequency and effectiveness of collisions between molecules involved in spoilage reactions, effectively slowing the reaction rate — which is why refrigeration preserves food.',
		difficulty: 'expert',
		illustration: temperatureEffectIllustration
	},

	// ── SURFACE AREA & REACTION RATE (Q15–Q17) ─────────────────────────
	{
		id: 15,
		question:
			'Why does a larger surface area of a solid reactant increase the rate of a chemical reaction, according to the lecture?',
		options: [
			'Larger surface area provides a larger space for collisions between particles of a reaction.',
			'Larger surface area increases the temperature of the reactants automatically.',
			'Larger surface area changes the chemical composition of the reactants.',
			'Larger surface area reduces the activation energy required for the reaction.'
		],
		answer: 'Larger surface area provides a larger space for collisions between particles of a reaction.',
		explanation:
			'The lecture states: \"Larger surface area would have a larger space of collision between particles of a reaction.\" More surface area means more reactant particles are exposed and available to collide with other reactant particles, increasing the reaction rate.',
		difficulty: 'advanced',
		illustration: surfaceAreaIllustration
	},
	{
		id: 16,
		question:
			'A pharmaceutical company grinds a solid drug into a fine powder before packaging. How does this manufacturing step affect the drug\'s dissolution rate in the patient\'s body?',
		options: [
			'Grinding increases the surface area, allowing the drug to dissolve faster in bodily fluids.',
			'Grinding decreases the surface area, making the drug last longer in the body.',
			'Grinding has no effect on dissolution; only temperature affects dissolution.',
			'Grinding makes the drug chemically different, altering its solubility properties.'
		],
		answer: 'Grinding increases the surface area, allowing the drug to dissolve faster in bodily fluids.',
		explanation:
			'Grinding a solid into a fine powder dramatically increases its surface area. According to the collision theory and the lecture, a larger surface area exposes more particles for collision with solvent molecules, resulting in faster dissolution and quicker absorption in the body.',
		difficulty: 'advanced',
		illustration: surfaceAreaIllustration
	},
	{
		id: 17,
		question:
			'In a chemical manufacturing plant, a reaction between a solid metal and an acid proceeds slowly. An engineer suggests cutting the metal into smaller pieces. Why would this action accelerate the reaction?',
		options: [
			'The smaller pieces collectively have a larger surface area, providing more sites for the acid to collide with the metal.',
			'The smaller pieces generate more heat during handling, increasing the reaction temperature.',
			'The smaller pieces have a higher density, forcing more particles into contact with the acid.',
			'The smaller pieces change the reaction mechanism, making it more favorable thermodynamically.'
		],
		answer: 'The smaller pieces collectively have a larger surface area, providing more sites for the acid to collide with the metal.',
		explanation:
			'Cutting a solid into smaller pieces increases the total surface area exposed to the reactant (acid). The lecture emphasizes that larger surface area means a larger space for collision, which increases the reaction rate. This is why powdered reactants react faster than solid chunks.',
		difficulty: 'expert',
		illustration: surfaceAreaIllustration
	},

	// ── CONCENTRATION & REACTION RATE (Q18–Q20) ────────────────────────
	{
		id: 18,
		question:
			'According to the lecture, what happens to the reaction rate when the concentration of reactants is increased, and why?',
		options: [
			'The rate increases because the reactant particles become more crowded, leading to a greater chance of colliding.',
			'The rate decreases because crowded particles interfere with each other\'s movement.',
			'The rate stays the same because concentration only affects reaction equilibrium, not reaction rate.',
			'The rate initially increases, then decreases as the system reaches saturation.'
		],
		answer: 'The rate increases because the reactant particles become more crowded, leading to a greater chance of colliding.',
		explanation:
			'The lecture explains: \"If the concentration is increased: the reactant particles become more crowded, there is a greater chance of the particles colliding; the rate of reaction increases.\" More particles in the same volume means more frequent collisions.',
		difficulty: 'advanced',
		illustration: concentrationEffectIllustration
	},
	{
		id: 19,
		question:
			'A factory produces ammonia using the Haber process. If the concentration of nitrogen gas entering the reactor is doubled while keeping temperature and pressure constant, what effect would this have on the reaction rate?',
		options: [
			'The reaction rate would increase because there are more nitrogen molecules available to collide with hydrogen molecules.',
			'The reaction rate would decrease because the system becomes too crowded for effective collisions.',
			'The reaction rate would stay the same because only temperature affects the Haber process.',
			'The reaction rate would first increase then decrease as the system seeks equilibrium.'
		],
		answer: 'The reaction rate would increase because there are more nitrogen molecules available to collide with hydrogen molecules.',
		explanation:
			'Doubling the concentration of nitrogen gas means twice as many nitrogen molecules in the same volume. According to the collision theory from the lecture, increased concentration leads to more crowded particles and a greater chance of collision, thus increasing the reaction rate.',
		difficulty: 'expert',
		illustration: concentrationEffectIllustration
	},
	{
		id: 20,
		question:
			'An industrial chemist is comparing two vats for a reaction: one with a dilute solution of reactants and another with a concentrated solution. According to the collision theory, which vat will have a faster reaction rate, and why?',
		options: [
			'The concentrated solution will react faster because the particles are more crowded, leading to more frequent collisions.',
			'The dilute solution will react faster because particles have more space to move freely and find each other.',
			'Both will react at the same rate because only temperature determines reaction speed.',
			'The dilute solution will react faster because there is less interference between particles.'
		],
		answer: 'The concentrated solution will react faster because the particles are more crowded, leading to more frequent collisions.',
		explanation:
			'The lecture clearly states that higher concentration leads to more crowded particles and a greater chance of collision. The concentrated solution has more reactant molecules per unit volume, increasing collision frequency and thus reaction rate compared to a dilute solution.',
		difficulty: 'advanced',
		illustration: concentrationEffectIllustration
	},

	// ── CATALYST (Q21–Q25) ──────────────────────────────────────────────
	{
		id: 21,
		question:
			'According to the lecture, what is a catalyst, and what is its defining characteristic at the end of a chemical reaction?',
		options: [
			'A catalyst is a substance that makes a chemical reaction faster and is chemically unchanged at the end.',
			'A catalyst is a substance that slows down a reaction and is consumed during the process.',
			'A catalyst is a substance that changes the products of a reaction without affecting the rate.',
			'A catalyst is a substance that increases the temperature of a reaction automatically.'
		],
		answer: 'A catalyst is a substance that makes a chemical reaction faster and is chemically unchanged at the end.',
		explanation:
			'The lecture provides two complementary statements about catalysts: (1) \"it is a substance that makes a chemical reaction faster,\" and (2) \"it also speeds up a reaction, but is chemically unchanged at its end.\" The catalyst is recovered unchanged at the end of the reaction.',
		difficulty: 'advanced',
		illustration: factorsReactionRateIllustration
	},
	{
		id: 22,
		question:
			'A researcher is studying why a certain industrial reaction requires extremely high temperatures. She adds a small amount of a new material, and the reaction proceeds rapidly at much lower temperatures. The new material is found unchanged at the end. What role did this material play?',
		options: [
			'The material acted as a catalyst, providing an alternative pathway with lower activation energy.',
			'The material acted as a reactant that was consumed to generate additional heat.',
			'The material increased the surface area of the reaction vessel.',
			'The material increased the concentration of the products to drive the reaction forward.'
		],
		answer: 'The material acted as a catalyst, providing an alternative pathway with lower activation energy.',
		explanation:
			'The material fits the lecture\'s description: it speeds up the reaction and is chemically unchanged at the end — this is a catalyst. Catalysts work by lowering the activation energy, providing a different reaction pathway that requires less energy to reach the transition state.',
		difficulty: 'expert',
		illustration: catalystComparisonIllustration
	},
	{
		id: 23,
		question:
			'How does a catalyst achieve an increase in reaction rate at the molecular level, according to the collision theory?',
		options: [
			'A catalyst lowers the activation energy required, allowing more collisions to have sufficient energy to overcome the barrier.',
			'A catalyst increases the temperature of the reaction mixture.',
			'A catalyst increases the concentration of the reactants by absorbing them onto its surface.',
			'A catalyst changes the orientation of all molecules to ensure perfect alignment.'
		],
		answer: 'A catalyst lowers the activation energy required, allowing more collisions to have sufficient energy to overcome the barrier.',
		explanation:
			'By lowering the activation energy, a catalyst increases the proportion of collisions that have enough energy to reach the transition state. This means more collisions are effective, resulting in a faster reaction rate without the catalyst being consumed.',
		difficulty: 'expert',
		illustration: catalystComparisonIllustration
	},
	{
		id: 24,
		question:
			'A student argues that \"a catalyst is consumed during a reaction because it participates in the reaction mechanism.\" How would you correct this statement based on the lecture?',
		options: [
			'While a catalyst does participate in the reaction mechanism, it is regenerated by the end and chemically unchanged.',
			'The student is correct; catalysts are fully consumed and must be replaced after each reaction.',
			'Catalysts do not participate in the reaction at all; they simply create favorable conditions for the reaction.',
			'Catalysts are only consumed in exothermic reactions but not in endothermic reactions.'
		],
		answer: 'While a catalyst does participate in the reaction mechanism, it is regenerated by the end and chemically unchanged.',
		explanation:
			'The lecture explains that a catalyst \"is chemically unchanged at its end.\" While catalysts do participate in the reaction mechanism (they interact with reactants and form intermediate species), they are regenerated in a later step, so they are not consumed overall.',
		difficulty: 'expert',
		illustration: catalystComparisonIllustration
	},
	{
		id: 25,
		question:
			'A chemical plant manager needs to increase the production rate of an exothermic reaction. Considering the four factors from the lecture, which combination of changes would most effectively increase the reaction rate?',
		options: [
			'Increase temperature, grind solid reactants into powder (increase surface area), increase concentration of reactants, and add a suitable catalyst.',
			'Decrease temperature and pressure, and remove the catalyst to allow the reaction to proceed naturally.',
			'Use only one factor — increasing temperature — since the other factors do not significantly affect reaction rate.',
			'Reduce surface area to control the reaction, decrease concentration to prevent explosions, and maintain room temperature.'
		],
		answer: 'Increase temperature, grind solid reactants into powder (increase surface area), increase concentration of reactants, and add a suitable catalyst.',
		explanation:
			'The lecture identifies four factors: Temperature (increasing speeds up particles), Surface Area (larger provides more collision space), Concentration (more crowded particles collide more), and Catalyst (lowers activation energy). Combining all four would have a multiplicative effect on reaction rate.',
		difficulty: 'expert',
		illustration: factorsReactionRateIllustration
	}
];

export const collisionTheoryQuizData = collisionTheoryQuizItems satisfies Question[];
