import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Catalyst Definition ──────────────────────────────────────

const catalystDefinitionIllustration = `
<svg role="img" aria-label="Definition of a catalyst: speeds up reaction without being changed" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="cdBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#cdBg)"/>
	<text x="32" y="40" fill="#f97316" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">WHAT IS A CATALYST?</text>
	<text x="380" y="66" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">A substance that speeds up a chemical reaction without being changed or used up</text>
	<!-- Left: Reaction without catalyst -->
	<rect x="24" y="82" width="350" height="148" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="199" y="106" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">WITHOUT CATALYST</text>
	<line x1="40" y1="116" x2="358" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<!-- Slow reaction arrows -->
	<text x="199" y="144" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="24" font-weight="700">⟳</text>
	<text x="199" y="170" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">Slow reaction</text>
	<text x="199" y="188" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">High activation energy needed</text>
	<text x="199" y="206" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Few molecules have enough energy</text>
	<!-- Right: With catalyst -->
	<rect x="390" y="82" width="350" height="148" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="565" y="106" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">WITH CATALYST</text>
	<line x1="406" y1="116" x2="724" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<!-- Fast reaction arrows -->
	<text x="565" y="144" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="24" font-weight="700">⟳</text>
	<text x="565" y="170" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10" font-weight="700">Fast reaction</text>
	<text x="565" y="188" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Lower activation energy needed</text>
	<text x="565" y="206" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">More molecules can react — unchanged at end</text>
</svg>`;

// ── ILLUSTRATION: Alternative Reaction Pathway ─────────────────────────────

const alternativePathwayIllustration = `
<svg role="img" aria-label="Alternative reaction pathway diagram showing how catalysts lower activation energy" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="apBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<marker id="apArrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill="#c4b8ad"/></marker>
	</defs>
	<rect width="760" height="270" rx="8" fill="url(#apBg)"/>
	<text x="32" y="38" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">ALTERNATIVE REACTION PATHWAY</text>
	<text x="380" y="60" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Catalyst provides a different route with lower activation energy</text>
	<!-- Energy diagram -->
	<line x1="80" y1="220" x2="720" y2="220" stroke="#ffffff20" stroke-width="1"/>
	<line x1="80" y1="220" x2="80" y2="60" stroke="#ffffff20" stroke-width="1"/>
	<text x="720" y="236" text-anchor="end" fill="#888" font-family="monospace" font-size="8">Reaction Progress →</text>
	<text x="52" y="60" text-anchor="middle" fill="#888" font-family="monospace" font-size="8" transform="rotate(-90,52,60)">Energy →</text>
	<!-- Un-catalyzed path (higher peak — dashed) -->
	<path d="M80 215 C120 215 260 180 380 80 C500 180 620 215 720 215" fill="none" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,3" stroke-linecap="round"/>
	<text x="380" y="68" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">Uncatalyzed</text>
	<!-- Catalyzed path (lower peak — solid) -->
	<path d="M80 215 C120 215 260 180 420 125 C580 180 620 215 720 215" fill="none" stroke="#4ecdc4" stroke-width="2.5" stroke-linecap="round"/>
	<text x="440" y="118" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">Catalyzed</text>
	<!-- Activation energy arrows -->
	<path d="M200 208 L200 130" fill="none" stroke="#ff6b6b" stroke-width="1.5" marker-end="url(#apArrow)" stroke-dasharray="3,2"/>
	<text x="204" y="175" fill="#ff6b6b" font-family="monospace" font-size="9" font-weight="700">Eₐ (high)</text>
	<path d="M230 208 L230 158" fill="none" stroke="#4ecdc4" stroke-width="1.5" marker-end="url(#apArrow)" stroke-dasharray="3,2"/>
	<text x="216" y="200" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">Eₐ (low)</text>
	<!-- Labels -->
	<text x="140" y="246" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">Reactants</text>
	<text x="640" y="246" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">Products</text>
	<!-- Note -->
	<rect x="50" y="254" width="660" height="14" rx="4" fill="#1f1917" stroke="#ffffff08" stroke-width="1"/>
	<text x="380" y="264" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Catalyst provides an alternative pathway with lower Eₐ — regenerated at the end</text>
</svg>`;

// ── ILLUSTRATION: Types of Catalysts ───────────────────────────────────────

const typesOfCatalystsIllustration = `
<svg role="img" aria-label="Types of catalysts: homogeneous, heterogeneous, and enzyme catalysts" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="tcBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="270" rx="8" fill="url(#tcBg)"/>
	<text x="32" y="40" fill="#f97316" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">TYPES OF CATALYSTS</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Catalysts can be classified by phase, structure, or origin</text>
	<!-- Homogeneous -->
	<rect x="20" y="80" width="232" height="110" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="136" y="104" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">HOMOGENEOUS</text>
	<line x1="34" y1="114" x2="238" y2="114" stroke="#ffffff10" stroke-width="1"/>
	<circle cx="80" cy="148" r="10" fill="#a78bfa" opacity="0.3"/>
	<text x="80" y="152" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">Cat</text>
	<circle cx="136" cy="148" r="10" fill="#fcb045" opacity="0.3"/>
	<text x="136" y="152" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">A</text>
	<circle cx="192" cy="148" r="10" fill="#4ecdc4" opacity="0.3"/>
	<text x="192" y="152" text-anchor="middle" fill="#fff" font-family="monospace" font-size="8" font-weight="700">B</text>
	<text x="136" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Same phase as reactants (e.g., both in solution)</text>
	<!-- Heterogeneous -->
	<rect x="264" y="80" width="232" height="110" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="380" y="104" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">HETEROGENEOUS</text>
	<line x1="278" y1="114" x2="482" y2="114" stroke="#ffffff10" stroke-width="1"/>
	<rect x="320" y="130" width="80" height="36" rx="4" fill="#4ecdc4" opacity="0.15" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="360" y="146" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">Cat Surface</text>
	<circle cx="340" cy="128" r="6" fill="#fcb045" opacity="0.5"/>
	<circle cx="370" cy="126" r="6" fill="#fcb045" opacity="0.5"/>
	<circle cx="388" cy="130" r="6" fill="#fcb045" opacity="0.5"/>
	<text x="380" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Different phase from reactants (e.g., solid catalyst in gas reaction)</text>
	<!-- Enzyme (Biological) -->
	<rect x="508" y="80" width="232" height="110" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="624" y="104" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">ENZYME CATALYST</text>
	<line x1="522" y1="114" x2="726" y2="114" stroke="#ffffff10" stroke-width="1"/>
	<path d="M570 155 Q590 128 610 155 Q630 128 650 155 Q670 128 690 155" fill="none" stroke="#fcb045" stroke-width="2.5" opacity="0.6"/>
	<circle cx="610" cy="155" r="14" fill="#f97316" opacity="0.2"/>
	<text x="610" y="159" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="8" font-weight="700">Active</text>
	<rect x="595" y="178" width="66" height="16" rx="3" fill="#fcb045" opacity="0.1" stroke="#fcb045" stroke-width="1"/>
	<text x="628" y="189" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="8" font-weight="700">Substrate</text>
	<text x="624" y="228" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Biological protein catalysts (e.g., catalase)</text>
	<text x="624" y="244" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">Highly specific — each enzyme catalyzes one reaction</text>
</svg>`;

// ── ILLUSTRATION: How Catalysts Work ───────────────────────────────────────

const howCatalystsWorkIllustration = `
<svg role="img" aria-label="Catalytic cycle showing how a catalyst participates and is regenerated" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="hwBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient>
		<marker id="hwCycle" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#f97316"/></marker></defs>
	<rect width="760" height="260" rx="8" fill="url(#hwBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">HOW A CATALYST WORKS</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Catalyst participates in the reaction mechanism but is regenerated at the end</text>
	<!-- Step 1: Catalyst + Reactant A -->
	<rect x="30" y="88" width="220" height="70" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<circle cx="80" cy="128" r="14" fill="#a78bfa" opacity="0.3"/>
	<text x="80" y="132" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9" font-weight="700">Cat</text>
	<text x="110" y="133" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="12">+</text>
	<circle cx="150" cy="128" r="14" fill="#fcb045" opacity="0.3"/>
	<text x="150" y="132" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="9" font-weight="700">A</text>
	<text x="140" y="150" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Catalyst binds to A</text>
	<!-- Arrow -->
	<text x="260" y="128" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="16" font-weight="700">→</text>
	<!-- Step 2: Intermediate complex -->
	<rect x="280" y="88" width="200" height="70" rx="6" fill="#1f1917" stroke="#f97316" stroke-width="1.5"/>
	<circle cx="340" cy="128" r="20" fill="#f97316" opacity="0.12" stroke="#f97316" stroke-width="1"/>
	<circle cx="340" cy="128" r="10" fill="#a78bfa" opacity="0.3"/>
	<text x="340" y="132" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="8" font-weight="700">Cat</text>
	<circle cx="370" cy="128" r="10" fill="#fcb045" opacity="0.3"/>
	<text x="370" y="132" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="8" font-weight="700">A</text>
	<text x="380" y="150" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Cat-A complex (intermediate)</text>
	<!-- Arrow -->
	<text x="490" y="128" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="16" font-weight="700">→</text>
	<!-- Step 3: Product released -->
	<rect x="510" y="88" width="220" height="70" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<circle cx="570" cy="128" r="14" fill="#a78bfa" opacity="0.3"/>
	<text x="570" y="132" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="9" font-weight="700">Cat</text>
	<text x="600" y="133" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="12">+</text>
	<circle cx="650" cy="128" r="14" fill="#4ecdc4" opacity="0.3"/>
	<text x="650" y="132" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9" font-weight="700">P</text>
	<text x="620" y="150" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Catalyst regenerated + Product</text>
	<!-- Bottom cycle -->
	<path d="M570 158 Q380 210 340 158" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.5" marker-end="url(#hwCycle)"/>
	<text x="380" y="215" text-anchor="middle" fill="#f97316" font-family="monospace" font-size="9" font-weight="700">Catalyst recycled ←</text>
	<!-- Bottom note -->
	<rect x="30" y="230" width="700" height="24" rx="4" fill="#1f1917" stroke="#ffffff08" stroke-width="1"/>
	<text x="380" y="246" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">The catalyst is chemically unchanged at the end — it can be used again and again</text>
</svg>`;

// ── ILLUSTRATION: Hydrogen Peroxide Decomposition ──────────────────────────

const hydrogenPeroxideIllustration = `
<svg role="img" aria-label="Catalase enzyme breaking down hydrogen peroxide into water and oxygen" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="hpBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#hpBg)"/>
	<text x="32" y="38" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">CATALASE: BIOLOGICAL CATALYST</text>
	<text x="380" y="60" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Hydrogen peroxide (H₂O₂) decomposition — a harmful by-product of metabolism</text>
	<!-- Reactants panel -->
	<rect x="24" y="80" width="210" height="90" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="129" y="104" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">H₂O₂</text>
	<text x="129" y="124" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Hydrogen Peroxide</text>
	<text x="129" y="144" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Toxic by-product</text>
	<text x="129" y="160" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">of metabolism</text>
	<!-- Arrow with catalyst label -->
	<text x="270" y="108" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="14">→</text>
	<rect x="247" y="118" width="60" height="22" rx="4" fill="#f97316" opacity="0.15" stroke="#f97316" stroke-width="1"/>
	<text x="277" y="133" text-anchor="middle" fill="#f97316" font-family="monospace" font-size="9" font-weight="700">Catalase</text>
	<text x="277" y="162" text-anchor="middle" fill="#888" font-family="monospace" font-size="7">(enzyme)</text>
	<!-- Products panel -->
	<rect x="330" y="80" width="200" height="90" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="430" y="104" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">H₂O + O₂</text>
	<text x="430" y="124" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Water + Oxygen</text>
	<text x="430" y="144" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Harmless products</text>
	<text x="430" y="160" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">released safely</text>
	<!-- Explanation panel -->
	<rect x="24" y="184" width="710" height="46" rx="6" fill="#1f1917" stroke="#ffffff12" stroke-width="1"/>
	<text x="379" y="204" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10" font-weight="700">2 H₂O₂  →Catalase→  2 H₂O + O₂</text>
	<text x="379" y="222" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Catalase speeds up the decomposition without being consumed — protects cells from oxidative damage</text>
</svg>`;

// ── ILLUSTRATION: Catalyst in Industry ─────────────────────────────────────

const catalystIndustryIllustration = `
<svg role="img" aria-label="Industrial applications of catalysts: Haber process, catalytic converter, and enzymes" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="ciBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="270" rx="8" fill="url(#ciBg)"/>
	<text x="32" y="40" fill="#f97316" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">CATALYSTS IN ACTION</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Catalysts are essential in industry, biology, and environmental technology</text>
	<!-- Haber Process -->
	<rect x="24" y="82" width="232" height="110" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="140" y="106" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">HABER PROCESS</text>
	<line x1="38" y1="116" x2="242" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="140" y="138" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">N₂ + 3 H₂  →  2 NH₃</text>
	<text x="140" y="158" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Iron catalyst</text>
	<text x="140" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Fertilizer production</text>
	<!-- Catalytic Converter -->
	<rect x="268" y="82" width="228" height="110" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="382" y="106" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">CATALYTIC CONVERTER</text>
	<line x1="282" y1="116" x2="482" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="382" y="138" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">CO + NOx → CO₂ + N₂</text>
	<text x="382" y="158" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Pt, Pd, Rh catalyst</text>
	<text x="382" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Reduces vehicle emissions</text>
	<!-- Enzymes -->
	<rect x="508" y="82" width="232" height="110" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="624" y="106" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">BIOLOGICAL ENZYMES</text>
	<line x1="522" y1="116" x2="726" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<circle cx="570" cy="148" r="8" fill="#fcb045" opacity="0.3"/><text x="570" y="151" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">E</text>
	<circle cx="592" cy="148" r="8" fill="#fcb045" opacity="0.3"/><text x="592" y="151" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">+</text>
	<circle cx="614" cy="148" r="8" fill="#fcb045" opacity="0.3"/><text x="614" y="151" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">S</text>
	<text x="640" y="151" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="12">→</text>
	<circle cx="670" cy="148" r="8" fill="#fcb045" opacity="0.3"/><text x="670" y="151" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="7">P</text>
	<text x="624" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">Digestion, metabolism,</text>
	<text x="624" y="192" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="9">DNA replication</text>
</svg>`;

// ── QUIZ QUESTIONS ─────────────────────────────────────────────────────────

const catalystQuizItems: Question[] = [
	// ── DEFINITION & BASIC CONCEPTS (Q1–Q7) ──────────────────────────────
	{
		id: 1,
		question:
			'According to the lecture, what is the precise definition of a catalyst?',
		options: [
			'A substance which speeds up the rate of reaction, without being changed or used up.',
			'A substance that increases the temperature of a reaction to make it proceed faster.',
			'A substance that is consumed during a reaction to produce more energy.',
			'A substance that changes the chemical products of a reaction without affecting the rate.'
		],
		answer: 'A substance which speeds up the rate of reaction, without being changed or used up.',
		explanation:
			'The lecture explicitly defines a catalyst as "A substance which speeds up the rate of reaction, without being changed or used up." This is the foundational concept — catalysts accelerate reactions while remaining chemically unchanged at the end.',
		difficulty: 'advanced',
		illustration: catalystDefinitionIllustration
	},
	{
		id: 2,
		question:
			'A student claims that a catalyst is "used up" during a reaction. Based on the lecture, how should this misconception be corrected?',
		options: [
			'A catalyst speeds up a reaction but is chemically unchanged at the end — it is not consumed.',
			'The student is correct; catalysts are fully consumed like any other reactant.',
			'Catalysts are only partially consumed, but most of them remain at the end.',
			'Catalysts are consumed only in exothermic reactions, not in endothermic reactions.'
		],
		answer: 'A catalyst speeds up a reaction but is chemically unchanged at the end — it is not consumed.',
		explanation:
			'The lecture repeatedly emphasizes that a catalyst "is chemically unchanged at its end." While catalysts do participate in the reaction mechanism (forming intermediate complexes), they are regenerated in full at the end of the reaction cycle.',
		difficulty: 'advanced',
		illustration: catalystDefinitionIllustration
	},
	{
		id: 3,
		question:
			'The lecture highlights that a catalyst works by providing something specific to the reaction. What does a catalyst provide?',
		options: [
			'An alternative reaction pathway with lower activation energy.',
			'Additional heat energy to the reaction mixture.',
			'More reactant molecules to drive the reaction forward.',
			'A higher concentration of products to shift equilibrium.'
		],
		answer: 'An alternative reaction pathway with lower activation energy.',
		explanation:
			'The lecture explicitly states that a catalyst "Provides an alternative reaction pathway" (Slide 3) and then emphasizes "Provides an ALTERNATIVE REACTION PATHWAY" (Slide 4). This alternative pathway has a lower activation energy than the uncatalyzed reaction.',
		difficulty: 'advanced',
		illustration: alternativePathwayIllustration
	},
	{
		id: 4,
		question:
			'In the energy profile diagram from the lecture, how does the catalyzed reaction pathway compare to the uncatalyzed pathway?',
		options: [
			'The catalyzed pathway has a lower energy barrier (peak) than the uncatalyzed pathway.',
			'The catalyzed pathway has a higher energy barrier, requiring more energy input.',
			'Both pathways have exactly the same energy barrier.',
			'The catalyzed pathway eliminates the energy barrier entirely, requiring no activation energy.'
		],
		answer: 'The catalyzed pathway has a lower energy barrier (peak) than the uncatalyzed pathway.',
		explanation:
			'As shown in the lecture slides and the accompanying diagram, a catalyst provides an alternative pathway with a lower activation energy. This means more molecules have sufficient energy to overcome the barrier, resulting in a faster reaction rate.',
		difficulty: 'advanced',
		illustration: alternativePathwayIllustration
	},
	{
		id: 5,
		question:
			'A factory produces ammonia using the Haber process (N₂ + 3 H₂ → 2 NH₃). The process uses an iron catalyst. Which statement best describes the role of the iron catalyst?',
		options: [
			'Iron provides an alternative reaction pathway with a lower activation energy, speeding up the reaction without being consumed.',
			'Iron reacts with nitrogen to form an intermediate that then decomposes, with iron being slowly consumed over time.',
			'Iron increases the temperature of the reaction mixture through its thermal conductivity.',
			'Iron absorbs ammonia as it forms, pulling the equilibrium toward products.'
		],
		answer: 'Iron provides an alternative reaction pathway with a lower activation energy, speeding up the reaction without being consumed.',
		explanation:
			'As with all catalysts, the iron in the Haber process lowers the activation energy by providing an alternative pathway. This allows the reaction to proceed faster at lower temperatures and pressures than would otherwise be possible, and the iron catalyst is not consumed.',
		difficulty: 'expert',
		illustration: catalystIndustryIllustration
	},
	{
		id: 6,
		question:
			'According to the reaction rate factors covered in the lecture, how does a catalyst differ from the other three factors (temperature, surface area, and concentration) in its effect?',
		options: [
			'A catalyst changes the activation energy of the reaction, whereas the other factors affect collision frequency.',
			'A catalyst changes the temperature of the reaction, whereas the other factors change the collision frequency.',
			'A catalyst is the only factor that can make a reaction proceed at all — the others just speed it up.',
			'A catalyst only works for gas-phase reactions, whereas the other factors work for all phases.'
		],
		answer: 'A catalyst changes the activation energy of the reaction, whereas the other factors affect collision frequency.',
		explanation:
			'Temperature, surface area, and concentration all affect how often particles collide (collision frequency). A catalyst is unique because it changes the activation energy itself — the energy barrier that colliding particles must overcome — by providing an alternative reaction pathway.',
		difficulty: 'expert',
		illustration: alternativePathwayIllustration
	},
	{
		id: 7,
		question:
			'A chemist adds a catalyst to a reaction and observes that the reaction rate increases significantly. However, the chemist notices that the catalyst does not appear in the overall balanced chemical equation. Why is this?',
		options: [
			'The catalyst participates in the reaction mechanism but is regenerated, so it cancels out in the net equation.',
			'The catalyst does not participate in the reaction at any step — it simply creates favorable conditions.',
			'The catalyst is consumed in the first step and produced in an earlier step, making it invisible.',
			'The balanced equation only shows major products, so catalysts are always omitted.'
		],
		answer: 'The catalyst participates in the reaction mechanism but is regenerated, so it cancels out in the net equation.',
		explanation:
			'A catalyst participates in the reaction mechanism (forming intermediate species) but is regenerated in a later step. Because it is both consumed and produced, the net change is zero, so the catalyst does not appear in the overall balanced equation. This is also why it is "chemically unchanged at its end."',
		difficulty: 'expert',
		illustration: howCatalystsWorkIllustration
	},

	// ── MECHANISM & ACTIVATION ENERGY (Q8–Q13) ───────────────────────────
	{
		id: 8,
		question:
			'The lecture uses the phrase "Provides an alternative reaction pathway." What does this phrase mean in terms of the reaction coordinate diagram?',
		options: [
			'The reaction follows a different route on the energy diagram with a lower activation energy peak.',
			'The reaction follows the exact same route but at a higher temperature.',
			'The reaction bypasses the transition state entirely, going straight from reactants to products.',
			'The reaction proceeds backwards through the energy diagram before going forward.'
		],
		answer: 'The reaction follows a different route on the energy diagram with a lower activation energy peak.',
		explanation:
			'The phrase "alternative reaction pathway" means the catalyst enables a different molecular mechanism for the reaction. On the energy diagram, this appears as a different curve with a lower peak (lower activation energy), even though the starting reactants and final products are the same.',
		difficulty: 'advanced',
		illustration: alternativePathwayIllustration
	},
	{
		id: 9,
		question:
			'A reaction has an activation energy of 150 kJ/mol without a catalyst and 80 kJ/mol with a catalyst. At the same temperature, why does the catalyzed reaction proceed faster?',
		options: [
			'A larger fraction of molecular collisions have sufficient energy to overcome the lower activation energy barrier.',
			'The catalyst increases the kinetic energy of all molecules in the system.',
			'The catalyst reduces the temperature needed for the reaction to reach equilibrium.',
			'The catalyst changes the orientation of molecules so that all collisions are perfectly aligned.'
		],
		answer: 'A larger fraction of molecular collisions have sufficient energy to overcome the lower activation energy barrier.',
		explanation:
			'At a given temperature, the distribution of molecular kinetic energies is fixed. A lower activation energy means that a larger fraction of molecules are above the energy threshold required for reaction. More collisions are therefore effective, increasing the reaction rate.',
		difficulty: 'expert',
		illustration: alternativePathwayIllustration
	},
	{
		id: 10,
		question:
			'In the catalytic cycle diagram from the lecture, what is the key feature that distinguishes a catalyst from an intermediate?',
		options: [
			'A catalyst is consumed in an early step and produced in a later step; an intermediate is produced in an early step and consumed in a later step.',
			'A catalyst is produced in the first step and consumed in the final step; an intermediate is only present at the end.',
			'Catalysts and intermediates are the same thing — both terms describe the same chemical species.',
			'A catalyst is always a solid, while an intermediate is always in solution.'
		],
		answer: 'A catalyst is consumed in an early step and produced in a later step; an intermediate is produced in an early step and consumed in a later step.',
		explanation:
			'In a catalyzed mechanism, the catalyst is present at the start, consumed (or bound) in an early step to form an intermediate, and then regenerated in a later step. The intermediate is formed from the catalyst plus reactants and then decomposes to release the product and regenerate the catalyst.',
		difficulty: 'expert',
		illustration: howCatalystsWorkIllustration
	},
	{
		id: 11,
		question:
			'Two students are debating whether a catalyst affects the equilibrium position of a reversible reaction. Based on the lecture concepts, which student is correct?',
		options: [
			'A catalyst speeds up both the forward and reverse reactions equally, so it does not shift equilibrium — it just helps equilibrium be reached faster.',
			'A catalyst shifts equilibrium to the right by lowering only the forward activation energy.',
			'A catalyst shifts equilibrium to the left by lowering only the reverse activation energy.',
			'A catalyst changes the equilibrium constant by making the reaction more thermodynamically favorable.'
		],
		answer: 'A catalyst speeds up both the forward and reverse reactions equally, so it does not shift equilibrium — it just helps equilibrium be reached faster.',
		explanation:
			'By lowering the activation energy, a catalyst accelerates both the forward and reverse reactions by the same amount. This means the system reaches equilibrium faster, but the equilibrium position (ratio of products to reactants) remains unchanged.',
		difficulty: 'expert',
		illustration: alternativePathwayIllustration
	},
	{
		id: 12,
		question:
			'A researcher is studying a reaction with a very high activation energy and wants to use a catalyst. The reaction proceeds through a multi-step mechanism. What must be true about the catalyst for it to be effective?',
		options: [
			'The catalyst must lower the activation energy of the rate-determining step (slowest step) of the reaction.',
			'The catalyst must lower the activation energy of every step in the reaction mechanism equally.',
			'The catalyst must raise the activation energy of the fastest step to balance the reaction rate.',
			'The catalyst must change the rate-determining step to a completely different molecular process.'
		],
		answer: 'The catalyst must lower the activation energy of the rate-determining step (slowest step) of the reaction.',
		explanation:
			'The overall rate of a multi-step reaction is determined by its slowest step (the rate-determining step). For a catalyst to effectively speed up the overall reaction, it must provide an alternative pathway with a lower activation energy for this rate-determining step.',
		difficulty: 'expert',
		illustration: howCatalystsWorkIllustration
	},
	{
		id: 13,
		question:
			'In the lecture, the phrase "Speeds up the rate of reaction, without being changed or used up" contains two key claims. If a student demonstrates that a substance is chemically changed during the reaction, what conclusion follows?',
		options: [
			'The substance is not a catalyst — it is a reactant that is being consumed.',
			'The substance is still a catalyst because the change is temporary.',
			'The substance is a catalyst if the change is reversible.',
			'The substance could still be a catalyst if it is regenerated by the end of the reaction.'
		],
		answer: 'The substance is not a catalyst — it is a reactant that is being consumed.',
		explanation:
			'The defining characteristic of a catalyst is that it is chemically unchanged at the end. If a substance is permanently changed (consumed as the reaction proceeds), it is classified as a reactant, not a catalyst. Even partial consumption disqualifies it from being a true catalyst.',
		difficulty: 'advanced',
		illustration: catalystDefinitionIllustration
	},

	// ── TYPES OF CATALYSTS (Q14–Q18) ─────────────────────────────────────
	{
		id: 14,
		question:
			'Which type of catalyst is in the same physical phase as the reactants, and what is a common example?',
		options: [
			'Homogeneous catalyst — same phase as reactants, e.g., an acid catalyst dissolved in an aqueous reaction mixture.',
			'Heterogeneous catalyst — same phase as reactants, e.g., solid iron in gas-phase ammonia synthesis.',
			'Enzyme catalyst — same phase as reactants, e.g., catalase in hydrogen peroxide decomposition.',
			'Autocatalyst — same phase as reactants, e.g., a product that catalyzes its own formation.'
		],
		answer: 'Homogeneous catalyst — same phase as reactants, e.g., an acid catalyst dissolved in an aqueous reaction mixture.',
		explanation:
			'Homogeneous catalysts are in the same phase as the reactants. For example, when an acid catalyst is dissolved in an aqueous solution, both the catalyst and reactants are in the liquid phase. This allows for easier molecular-level interactions between catalyst and reactants.',
		difficulty: 'advanced',
		illustration: typesOfCatalystsIllustration
	},
	{
		id: 15,
		question:
			'An industrial chemist uses a solid platinum surface to catalyze a gas-phase reaction. What type of catalyst is this, and what is the key practical advantage?',
		options: [
			'Heterogeneous catalyst — the solid catalyst can be easily separated from the gaseous products and reused.',
			'Homogeneous catalyst — the platinum dissolves in the gas phase for uniform catalysis.',
			'Enzyme catalyst — platinum acts as a biological catalyst.',
			'Homogeneous catalyst — the solid and gas are in the same phase at high temperature.'
		],
		answer: 'Heterogeneous catalyst — the solid catalyst can be easily separated from the gaseous products and reused.',
		explanation:
			'Heterogeneous catalysts are in a different phase from the reactants. A solid platinum catalyst in a gas-phase reaction is a classic example. The major practical advantage is that the solid catalyst can be easily separated from the gaseous products by simple physical means and reused multiple times.',
		difficulty: 'advanced',
		illustration: typesOfCatalystsIllustration
	},
	{
		id: 16,
		question:
			'The catalytic converter in a car uses solid metals (platinum, palladium, rhodium) coated on a ceramic honeycomb to convert harmful exhaust gases. What type of catalysis does this represent?',
		options: [
			'Heterogeneous catalysis — the solid metal catalysts are in a different phase from the exhaust gases.',
			'Homogeneous catalysis — the metals vaporize at exhaust temperatures to mix with the gases.',
			'Enzyme catalysis — the metals mimic the active sites of biological enzymes.',
			'Photocatalysis — the metals are activated by the heat of the exhaust.'
		],
		answer: 'Heterogeneous catalysis — the solid metal catalysts are in a different phase from the exhaust gases.',
		explanation:
			'The catalytic converter is a classic example of heterogeneous catalysis. The solid metal catalysts (Pt, Pd, Rh) are in a different phase from the gaseous exhaust (CO, NOx, hydrocarbons). The large surface area of the honeycomb maximizes contact between the gases and the catalyst surface.',
		difficulty: 'advanced',
		illustration: catalystIndustryIllustration
	},
	{
		id: 17,
		question:
			'The lecture contains a practice question about hydrogen peroxide decomposition. What biological catalyst (enzyme) is responsible for breaking down hydrogen peroxide in living cells?',
		options: [
			'Catalase — it decomposes hydrogen peroxide into water and oxygen.',
			'Lipase — it breaks down lipids that generate hydrogen peroxide.',
			'Amylase — it digests starch that contains hydrogen peroxide.',
			'DNA polymerase — it repairs cellular damage caused by hydrogen peroxide.'
		],
		answer: 'Catalase — it decomposes hydrogen peroxide into water and oxygen.',
		explanation:
			'The lecture question states: "Hydrogen peroxide is a harmful by-product of normal metabolic activity. What will you do to prevent damage and be broken down into water and oxygen quickly?" The correct answer is to use a catalyst (catalase) to speed up the decomposition: 2 H₂O₂ → 2 H₂O + O₂.',
		difficulty: 'advanced',
		illustration: hydrogenPeroxideIllustration
	},
	{
		id: 18,
		question:
			'Hydrogen peroxide (H₂O₂) is a harmful by-product of normal metabolic activity in cells. Why must it be broken down quickly, and what role does the catalyst play?',
		options: [
			'H₂O₂ is toxic and can damage cellular components; a catalyst (catalase) speeds its decomposition into harmless water and oxygen.',
			'H₂O₂ is needed for energy production; a catalyst converts it into ATP.',
			'H₂O₂ helps digest nutrients; a catalyst breaks it down into amino acids.',
			'H₂O₂ is a signaling molecule; a catalyst amplifies its signal.'
		],
		answer: 'H₂O₂ is toxic and can damage cellular components; a catalyst (catalase) speeds its decomposition into harmless water and oxygen.',
		explanation:
			'The lecture identifies H₂O₂ as "a harmful by-product of normal metabolic activity." Without rapid decomposition, H₂O₂ can cause oxidative damage to proteins, lipids, and DNA. The enzyme catalase acts as a biological catalyst, speeding up the decomposition reaction to protect the cell.',
		difficulty: 'expert',
		illustration: hydrogenPeroxideIllustration
	},

	// ── APPLICATIONS & REAL-WORLD (Q19–Q22) ─────────────────────────────
	{
		id: 19,
		question:
			'A student proposes four methods to speed up the decomposition of hydrogen peroxide: (A) add more H₂O₂, (B) decrease temperature, (C) add a catalyst, (D) bubble oxygen through the solution. Based on the lecture, which method would actually work?',
		options: [
			'Add a catalyst to speed up the decomposition — this lowers the activation energy for the reaction.',
			'Add more hydrogen peroxide — increasing concentration always speeds up reactions.',
			'Decrease temperature — lower temperatures increase reaction rates for decomposition reactions.',
			'Bubble oxygen through the solution — oxygen acts as a catalyst for this specific reaction.'
		],
		answer: 'Add a catalyst to speed up the decomposition — this lowers the activation energy for the reaction.',
		explanation:
			'The lecture presents this exact question (slides 22-23). The correct answer is to use a catalyst. Adding more H₂O₂ would not help (it would create more harmful material), decreasing temperature would slow the reaction, and bubbling oxygen does not catalyze decomposition.',
		difficulty: 'advanced',
		illustration: hydrogenPeroxideIllustration
	},
	{
		id: 20,
		question:
			'In the pharmaceutical industry, why are catalysts preferred over simply increasing temperature to speed up drug synthesis reactions?',
		options: [
			'Catalysts allow reactions to proceed at lower temperatures, reducing energy costs and preventing decomposition of heat-sensitive drug molecules.',
			'Catalysts are always cheaper than heating, regardless of the reaction scale.',
			'Catalysts eliminate the need for solvents in pharmaceutical synthesis.',
			'Catalysts produce higher yields than temperature increases in every reaction.'
		],
		answer: 'Catalysts allow reactions to proceed at lower temperatures, reducing energy costs and preventing decomposition of heat-sensitive drug molecules.',
		explanation:
			'While increasing temperature does speed up reactions, it consumes significant energy and can decompose heat-sensitive compounds. Catalysts lower the activation energy, allowing the reaction to proceed rapidly at much lower (often room) temperatures, preserving sensitive functional groups and reducing energy costs.',
		difficulty: 'expert',
		illustration: catalystIndustryIllustration
	},
	{
		id: 21,
		question:
			'A catalytic converter in a vehicle converts three harmful pollutants into less harmful substances. Which of the following conversions does a three-way catalytic NOT typically perform?',
		options: [
			'Converting nitrogen gas (N₂) into ammonia (NH₃) to reduce atmospheric nitrogen levels.',
			'Oxidizing carbon monoxide (CO) to carbon dioxide (CO₂).',
			'Reducing nitrogen oxides (NOx) to nitrogen (N₂).',
			'Oxidizing unburned hydrocarbons to carbon dioxide (CO₂) and water (H₂O).'
		],
		answer: 'Converting nitrogen gas (N₂) into ammonia (NH₃) to reduce atmospheric nitrogen levels.',
		explanation:
			'A three-way catalytic converter performs three key conversions: (1) CO → CO₂, (2) NOx → N₂, and (3) hydrocarbons → CO₂ + H₂O. It does NOT convert N₂ (which is already harmless and abundant in the atmosphere) into ammonia. That is the Haber process, which uses an iron catalyst for fertilizer production.',
		difficulty: 'expert',
		illustration: catalystIndustryIllustration
	},
	{
		id: 22,
		question:
			'A chemical manufacturer wants to produce a compound that currently requires very high temperatures (600 °C) and pressures (300 atm). If they develop a suitable catalyst, which benefits would they most likely achieve?',
		options: [
			'Lower operating temperature and pressure, reduced energy costs, and potentially fewer side reactions.',
			'Complete elimination of all temperature and pressure requirements — the reaction would occur at room conditions.',
			'Higher temperature and pressure requirements to activate the catalyst.',
			'The same conditions but with a different reaction mechanism producing different products.'
		],
		answer: 'Lower operating temperature and pressure, reduced energy costs, and potentially fewer side reactions.',
		explanation:
			'By lowering activation energy, a catalyst enables reactions to proceed at milder conditions. This reduces energy costs for heating and pressurization, and lower temperatures typically reduce unwanted side reactions, improving product purity and yield.',
		difficulty: 'expert',
		illustration: catalystIndustryIllustration
	},

	// ── INTEGRATIVE & SYNTHESIS (Q23–Q25) ────────────────────────────────
	{
		id: 23,
		question:
			'Considering the four factors affecting reaction rate from the lecture (temperature, surface area, concentration, and catalysts), which two factors are most directly related to overcoming the activation energy barrier?',
		options: [
			'Temperature (provides more kinetic energy) and catalyst (lowers the activation energy required).',
			'Surface area (exposes more particles) and concentration (increases collision frequency).',
			'Temperature (affects all rates) and concentration (crowds particles together).',
			'Catalyst (changes the mechanism) and surface area (creates more reaction sites).'
		],
		answer: 'Temperature (provides more kinetic energy) and catalyst (lowers the activation energy required).',
		explanation:
			'Both temperature and catalysts directly address the activation energy barrier. Increasing temperature gives molecules more kinetic energy, so a larger fraction can overcome the barrier. A catalyst lowers the barrier itself. Surface area and concentration increase collision frequency but do not directly address whether collisions have enough energy to react.',
		difficulty: 'expert',
		illustration: alternativePathwayIllustration
	},
	{
		id: 24,
		question:
			'A biology student observes that fresh liver (which contains catalase) produces bubbles of oxygen gas when placed in hydrogen peroxide, while cooked liver does not. Using the lecture concepts, what explains this difference?',
		options: [
			'Heat from cooking denatures the catalase enzyme, destroying its catalytic activity. The reaction then proceeds very slowly without the catalyst.',
			'Cooking converts the catalase into a more active form, but the higher temperature inhibits the reaction rate.',
			'Fresh liver has a larger surface area than cooked liver, which accounts for the faster reaction.',
			'Cooking releases inhibitors that block the catalase active site, preventing catalysis.'
		],
		answer: 'Heat from cooking denatures the catalase enzyme, destroying its catalytic activity. The reaction then proceeds very slowly without the catalyst.',
		explanation:
			'The lecture establishes that a catalyst speeds up reactions by providing an alternative pathway. Catalase is a protein enzyme; high temperatures denature (unfold) proteins, destroying their three-dimensional active site structure. Without the catalase catalyst, the decomposition of H₂O₂ proceeds very slowly on its own.',
		difficulty: 'expert',
		illustration: hydrogenPeroxideIllustration
	},
	{
		id: 25,
		question:
			'An environmental scientist is designing a system to remove industrial pollutants from wastewater. The pollutants decompose very slowly at room temperature with an activation energy of 200 kJ/mol. Which approach, based on the lecture concepts, would be the most efficient and cost-effective strategy?',
		options: [
			'Develop or select a catalyst that lowers the activation energy, allowing rapid decomposition at ambient temperature without high energy input.',
			'Heat the wastewater to very high temperatures to increase the reaction rate through thermal activation alone.',
			'Increase the concentration of pollutants to speed up their own decomposition reactions.',
			'Grind the pollutants into smaller particles to increase their surface area for faster decomposition.'
		],
		answer: 'Develop or select a catalyst that lowers the activation energy, allowing rapid decomposition at ambient temperature without high energy input.',
		explanation:
			'Heating large volumes of wastewater to high temperatures would be extremely energy-intensive and costly. Adding a suitable catalyst would lower the activation energy barrier, enabling the decomposition to proceed rapidly at ambient (or slightly elevated) temperatures. This is far more efficient than thermal activation alone.',
		difficulty: 'expert',
		illustration: catalystIndustryIllustration
	}
];

export const catalystQuizData = catalystQuizItems satisfies Question[];
