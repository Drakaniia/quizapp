import type { Question } from './collegeQuizTypes';

// ── ILLUSTRATION: Limiting vs Excess Reactant Definition ───────────────────

const limitingExcessDefinitionIllustration = `
<svg role="img" aria-label="Limiting reactant vs excess reactant comparison" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="ledBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#ledBg)"/>
	<text x="32" y="40" fill="#f97316" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">LIMITING &amp; EXCESS REACTANT</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">The reactant that runs out first determines how much product can form</text>
	<!-- Limiting Reactant Panel -->
	<rect x="24" y="82" width="350" height="148" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="199" y="106" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">LIMITING REACTANT</text>
	<line x1="40" y1="116" x2="358" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<circle cx="120" cy="150" r="16" fill="#ff6b6b" opacity="0.2"/>
	<text x="120" y="146" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="18" font-weight="700">L</text>
	<text x="199" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Completely consumed</text>
	<text x="199" y="166" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Determines max product</text>
	<text x="199" y="184" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">\"Runs out first\"</text>
	<text x="199" y="206" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Controls theoretical yield</text>
	<!-- Excess Reactant Panel -->
	<rect x="390" y="82" width="350" height="148" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="565" y="106" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">EXCESS REACTANT</text>
	<line x1="406" y1="116" x2="724" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<circle cx="480" cy="150" r="16" fill="#4ecdc4" opacity="0.2"/>
	<text x="480" y="146" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="18" font-weight="700">X</text>
	<text x="565" y="148" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Left over after reaction</text>
	<text x="565" y="166" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Not all is used up</text>
	<text x="565" y="184" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">\"Remains at end\"</text>
	<text x="565" y="206" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Amount remaining = initial - used</text>
</svg>`;

// ── ILLUSTRATION: Sandwich Analogy ─────────────────────────────────────────

const sandwichAnalogyIllustration = `
<svg role="img" aria-label="Sandwich analogy for limiting and excess reactants" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="saBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="260" rx="8" fill="url(#saBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">SANDWICH ANALOGY</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Each sandwich needs 2 slices of bread + 1 slice of cheese</text>
	<!-- Bread -->
	<rect x="40" y="86" width="200" height="70" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="140" y="110" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">10 slices Bread</text>
	<text x="140" y="132" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Enough for 5 sandwiches</text>
	<text x="140" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">10 ÷ 2 = 5 possible</text>
	<!-- Plus -->
	<text x="260" y="126" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="18">+</text>
	<!-- Cheese -->
	<rect x="280" y="86" width="200" height="70" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="380" y="110" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="13" font-weight="700">6 slices Cheese</text>
	<text x="380" y="132" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Enough for 6 sandwiches</text>
	<text x="380" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">6 ÷ 1 = 6 possible</text>
	<!-- Arrow -->
	<text x="500" y="126" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="18" font-weight="700">→</text>
	<!-- Result -->
	<rect x="530" y="86" width="210" height="70" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="635" y="108" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">5 Sandwiches</text>
	<text x="635" y="128" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">1 slice cheese left</text>
	<text x="635" y="148" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Bread = Limiting • Cheese = Excess</text>
	<!-- Bottom note -->
	<rect x="30" y="172" width="700" height="70" rx="6" fill="#1f1917" stroke="#ffffff10" stroke-width="1"/>
	<text x="380" y="196" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Key insight: The reactant that produces the LEAST amount of product is limiting</text>
	<text x="380" y="218" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Bread makes 5 sandwiches • Cheese makes 6 • Bread runs out first → Limiting reactant</text>
</svg>`;

// ── ILLUSTRATION: Step-by-Step Calculation ─────────────────────────────────

const calculationStepsIllustration = `
<svg role="img" aria-label="Step-by-step stoichiometric calculation for finding limiting reactant" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="csBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="270" rx="8" fill="url(#csBg)"/>
	<text x="32" y="40" fill="#4ecdc4" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">IDENTIFYING THE LIMITING REACTANT</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Example: 2 H₂ + O₂ → 2 H₂O (4 mol H₂, 3 mol O₂)</text>
	<!-- Step 1 -->
	<rect x="24" y="80" width="230" height="78" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="139" y="102" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="11" font-weight="700">Step 1: Balanced Eqn</text>
	<line x1="38" y1="112" x2="240" y2="112" stroke="#ffffff10" stroke-width="1"/>
	<text x="139" y="132" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="12" font-weight="700">2 H₂ + O₂ → 2 H₂O</text>
	<text x="139" y="152" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">2 mol H₂ : 1 mol O₂ ratio</text>
	<!-- Arrow 1 -->
	<text x="264" y="124" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="16" font-weight="700">→</text>
	<!-- Step 2 -->
	<rect x="280" y="80" width="230" height="78" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="395" y="102" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="11" font-weight="700">Step 2: Check Ratios</text>
	<line x1="294" y1="112" x2="496" y2="112" stroke="#ffffff10" stroke-width="1"/>
	<text x="395" y="132" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10">H₂ needs ½ × 4 = 2 mol O₂</text>
	<text x="395" y="152" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="10">We have 3 mol O₂ → Enough!</text>
	<!-- Arrow 2 -->
	<text x="520" y="124" text-anchor="middle" fill="#ffffff20" font-family="monospace" font-size="16" font-weight="700">→</text>
	<!-- Step 3 -->
	<rect x="536" y="80" width="200" height="78" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="2"/>
	<text x="636" y="102" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11" font-weight="700">Step 3: Identify</text>
	<line x1="550" y1="112" x2="722" y2="112" stroke="#ffffff10" stroke-width="1"/>
	<text x="636" y="132" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">H₂ = Limiting</text>
	<text x="636" y="152" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">O₂ = Excess</text>
	<!-- Result box -->
	<rect x="180" y="174" width="400" height="42" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="380" y="196" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="11" font-weight="700">Theoretical yield: 4 mol H₂ × (2 mol H₂O / 2 mol H₂) = 4 mol H₂O</text>
	<!-- Bottom note -->
	<text x="380" y="246" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">Product yield is always determined by the limiting reactant — the one that runs out first</text>
</svg>`;

// ── ILLUSTRATION: Theoretical vs Actual / Percent Yield ────────────────────

const percentYieldIllustration = `
<svg role="img" aria-label="Theoretical yield, actual yield, and percent yield diagram" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="pyBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="240" rx="8" fill="url(#pyBg)"/>
	<text x="32" y="38" fill="#a78bfa" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">THEORETICAL vs ACTUAL YIELD</text>
	<text x="380" y="62" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Percent yield = (actual / theoretical) × 100%</text>
	<!-- Theoretical -->
	<rect x="34" y="80" width="220" height="100" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="144" y="106" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="13" font-weight="700">Theoretical Yield</text>
	<line x1="48" y1="116" x2="240" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="144" y="140" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Maximum product possible</text>
	<text x="144" y="162" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="10">Calculated from LR</text>
	<!-- Actual -->
	<rect x="270" y="80" width="220" height="100" rx="6" fill="#1f1917" stroke="#fcb045" stroke-width="1.5"/>
	<text x="380" y="106" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="13" font-weight="700">Actual Yield</text>
	<line x1="284" y1="116" x2="476" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="380" y="140" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Measured experimentally</text>
	<text x="380" y="162" text-anchor="middle" fill="#fcb045" font-family="monospace" font-size="10">What you actually get</text>
	<!-- Percent -->
	<rect x="506" y="80" width="220" height="100" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="616" y="106" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="13" font-weight="700">Percent Yield</text>
	<line x1="520" y1="116" x2="712" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="616" y="140" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11">(Actual ÷ Theoretical)</text>
	<text x="616" y="162" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="11">× 100%</text>
	<!-- Bottom note -->
	<rect x="34" y="196" width="692" height="34" rx="6" fill="#1f1917" stroke="#ffffff10" stroke-width="1"/>
	<text x="380" y="216" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Percent yield is always ≤ 100% in reality — losses from side reactions, purification, or incomplete reactions</text>
</svg>`;

// ── ILLUSTRATION: Real-World Application ───────────────────────────────────

const realWorldApplicationIllustration = `
<svg role="img" aria-label="Real-world industrial application of limiting reactant concept" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="rwBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="250" rx="8" fill="url(#rwBg)"/>
	<text x="32" y="40" fill="#ff6b6b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">LIMITING REACTANT IN INDUSTRY</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Identifying the limiting reactant is crucial for cost optimization and efficiency</text>
	<!-- Costly reactant -->
	<rect x="34" y="86" width="340" height="130" rx="6" fill="#1f1917" stroke="#ff6b6b" stroke-width="1.5"/>
	<text x="204" y="110" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="12" font-weight="700">EXPENSIVE REACTANT</text>
	<line x1="48" y1="120" x2="360" y2="120" stroke="#ffffff10" stroke-width="1"/>
	<text x="204" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Make the expensive reactant</text>
	<text x="204" y="164" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">the LIMITING one</text>
	<text x="204" y="188" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="9">Maximizes utilization of costly materials</text>
	<!-- Cheap reactant -->
	<rect x="390" y="86" width="340" height="130" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="560" y="110" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">CHEAP REACTANT</text>
	<line x1="404" y1="120" x2="716" y2="120" stroke="#ffffff10" stroke-width="1"/>
	<text x="560" y="144" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Use the cheap reactant</text>
	<text x="560" y="164" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">in EXCESS</text>
	<text x="560" y="188" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="9">Ensures complete reaction of costly material</text>
	<!-- Bottom note -->
	<rect x="34" y="232" width="696" height="14" rx="4" fill="#1f1917" stroke="#ffffff08" stroke-width="1"/>
	<text x="382" y="243" text-anchor="middle" fill="#888" font-family="monospace" font-size="8">Industrial chemists strategically choose which reactant is limiting to minimize waste of expensive materials</text>
</svg>`;

// ── ILLUSTRATION: Molar Ratio Concept ──────────────────────────────────────

const molarRatioIllustration = `
<svg role="img" aria-label="Molar ratio concept for limiting reactant problems" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<defs><linearGradient id="mrBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f1917"/><stop offset="100%" stop-color="#171312"/></linearGradient></defs>
	<rect width="760" height="250" rx="8" fill="url(#mrBg)"/>
	<text x="32" y="40" fill="#fcb045" font-family="monospace" font-size="17" font-weight="700" letter-spacing="1">STOICHIOMETRIC RATIO METHOD</text>
	<text x="380" y="64" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="11">Two methods to find which reactant is limiting</text>
	<!-- Method 1 -->
	<rect x="24" y="82" width="350" height="140" rx="6" fill="#1f1917" stroke="#4ecdc4" stroke-width="1.5"/>
	<text x="199" y="106" text-anchor="middle" fill="#4ecdc4" font-family="monospace" font-size="12" font-weight="700">METHOD 1: COMPARE RATIOS</text>
	<line x1="38" y1="116" x2="360" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="199" y="138" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Calculate moles of each reactant</text>
	<text x="199" y="158" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Divide by coefficient in balanced eqn</text>
	<text x="199" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Smallest value = limiting reactant</text>
	<text x="199" y="206" text-anchor="middle" fill="#888" font-family="monospace" font-size="9">mol(A)/coeff(A) : mol(B)/coeff(B)</text>
	<!-- Method 2 -->
	<rect x="390" y="82" width="346" height="140" rx="6" fill="#1f1917" stroke="#a78bfa" stroke-width="1.5"/>
	<text x="563" y="106" text-anchor="middle" fill="#a78bfa" font-family="monospace" font-size="12" font-weight="700">METHOD 2: PRODUCT YIELD</text>
	<line x1="404" y1="116" x2="722" y2="116" stroke="#ffffff10" stroke-width="1"/>
	<text x="563" y="138" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">Calculate how much product</text>
	<text x="563" y="158" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">each reactant can produce</text>
	<text x="563" y="178" text-anchor="middle" fill="#c4b8ad" font-family="sans-serif" font-size="10">The one yielding LESS product</text>
	<text x="563" y="196" text-anchor="middle" fill="#ff6b6b" font-family="monospace" font-size="10" font-weight="700">= limiting reactant</text>
</svg>`;

// ── QUIZ QUESTIONS (College Difficulty) ────────────────────────────────────

const limitingExcessReactantQuizItems: Question[] = [
	// ── DEFINITIONS & BASIC CONCEPTS (Q1–Q7) ─────────────────────────────
	{
		id: 1,
		question:
			'According to the lecture, what is the precise definition of a limiting reactant?',
		options: [
			'The reactant that is completely consumed in a chemical reaction and determines the maximum amount of product formed.',
			'The reactant that is left over after the chemical reaction has completed.',
			'The reactant that has the highest molecular mass in the reaction mixture.',
			'The reactant that is present in the largest molar quantity at the start of the reaction.'
		],
		answer: 'The reactant that is completely consumed in a chemical reaction and determines the maximum amount of product formed.',
		explanation:
			'The limiting reactant is the substance that is entirely used up first during a chemical reaction. Once it is consumed, the reaction stops, making it the factor that determines the maximum theoretical yield of product that can be formed.',
		difficulty: 'advanced',
		illustration: limitingExcessDefinitionIllustration
	},
	{
		id: 2,
		question:
			'Which statement correctly contrasts a limiting reactant with an excess reactant?',
		options: [
			'A limiting reactant is completely consumed; an excess reactant remains after the reaction stops.',
			'A limiting reactant remains after the reaction; an excess reactant is completely consumed.',
			'Both limiting and excess reactants are completely consumed during the reaction.',
			'Neither limiting nor excess reactants affect the amount of product formed.'
		],
		answer: 'A limiting reactant is completely consumed; an excess reactant remains after the reaction stops.',
		explanation:
			'The limiting reactant runs out first and stops the reaction. The excess reactant is present in a greater amount than needed, so some of it remains unreacted after the limiting reactant is fully consumed.',
		difficulty: 'advanced',
		illustration: limitingExcessDefinitionIllustration
	},
	{
		id: 3,
		question:
			'A student makes sandwiches using 2 slices of bread and 1 slice of cheese per sandwich. If the student has 10 slices of bread and 6 slices of cheese, what is the limiting "reactant" and why?',
		options: [
			'Bread is limiting — it can only make 5 sandwiches, while cheese can make 6.',
			'Cheese is limiting — there are only 6 slices of cheese available.',
			'Bread is limiting — there is less bread than cheese by count.',
			'Neither — both reactants will be completely used up.'
		],
		answer: 'Bread is limiting — it can only make 5 sandwiches, while cheese can make 6.',
		explanation:
			'Bread can make 10 ÷ 2 = 5 sandwiches, while cheese can make 6 ÷ 1 = 6 sandwiches. Since bread produces fewer sandwiches, it is the limiting "reactant." One slice of cheese will remain as excess.',
		difficulty: 'advanced',
		illustration: sandwichAnalogyIllustration
	},
	{
		id: 4,
		question:
			'A chemist has 4.0 g of hydrogen gas (H₂) and 40.0 g of oxygen gas (O₂) for the reaction 2 H₂ + O₂ → 2 H₂O. Which reactant is limiting? (H = 1.0 g/mol, O = 16.0 g/mol)',
		options: [
			'Hydrogen (H₂) is the limiting reactant — it will be consumed first.',
			'Oxygen (O₂) is the limiting reactant — it has a higher molar mass.',
			'Both reactants are in stoichiometric proportion — neither is limiting.',
			'Water (H₂O) is the limiting reactant — it is the product being formed.'
		],
		answer: 'Hydrogen (H₂) is the limiting reactant — it will be consumed first.',
		explanation:
			'Moles H₂ = 4.0 g ÷ 2.0 g/mol = 2.0 mol. Moles O₂ = 40.0 ÷ 32.0 = 1.25 mol. The reaction needs 2 mol H₂ per 1 mol O₂. 2.0 mol H₂ needs 1.0 mol O₂, but we have 1.25 mol O₂ — so H₂ runs out first. H₂ is limiting, O₂ is in excess by 0.25 mol.',
		difficulty: 'expert',
		illustration: calculationStepsIllustration
	},
	{
		id: 5,
		question:
			'A reaction vessel contains 4.0 moles of N₂ and 9.0 moles of H₂ for the Haber process: N₂ + 3 H₂ → 2 NH₃. What is the limiting reactant?',
		options: [
			'H₂ is the limiting reactant — 9.0 mol H₂ can only produce 6.0 mol NH₃, while N₂ can produce 8.0 mol NH₃.',
			'N₂ is the limiting reactant — 4.0 mol N₂ needs 12.0 mol H₂, but only 9.0 mol H₂ is available.',
			'Both reactants are in exactly the right proportions — neither is limiting.',
			'NH₃ is the limiting reactant — it is the product being formed.'
		],
		answer: 'H₂ is the limiting reactant — 9.0 mol H₂ can only produce 6.0 mol NH₃, while N₂ can produce 8.0 mol NH₃.',
		explanation:
			'From N₂: 4.0 mol N₂ × (2 NH₃ / 1 N₂) = 8.0 mol NH₃ possible. From H₂: 9.0 mol H₂ × (2 NH₃ / 3 H₂) = 6.0 mol NH₃ possible. Since H₂ produces less NH₃, H₂ is the limiting reactant. N₂ is in excess.',
		difficulty: 'advanced',
		illustration: calculationStepsIllustration
	},
	{
		id: 6,
		question:
			'A student argues that the reactant present in the smallest number of moles is always the limiting reactant. Is this statement always true?',
		options: [
			'No — the stoichiometric coefficients in the balanced equation determine how the reactants compare, not just the raw mole amounts.',
			'Yes — the reactant with the fewest moles always runs out first regardless of the reaction.',
			'Yes — but only for reactions where all coefficients are 1.',
			'No — the limiting reactant is always the one with the highest molar mass, regardless of moles.'
		],
		answer: 'No — the stoichiometric coefficients in the balanced equation determine how the reactants compare, not just the raw mole amounts.',
		explanation:
			'To find the limiting reactant, you must divide the moles of each reactant by its stoichiometric coefficient, then compare. For example, in 2 H₂ + O₂, 3 mol H₂ and 2 mol O₂: H₂/2 = 1.5 and O₂/1 = 2.0, so H₂ is limiting even though there are more moles of H₂.',
		difficulty: 'expert',
		illustration: molarRatioIllustration
	},
	{
		id: 7,
		question:
			'In a laboratory experiment, a student combines 5.0 g of magnesium (Mg) with 20.0 g of hydrochloric acid (HCl). The reaction is Mg + 2 HCl → MgCl₂ + H₂. Why is it incorrect to identify the limiting reactant by simply comparing the mass of Mg to the mass of HCl?',
		options: [
			'Reactants must be compared in moles, not grams, because stoichiometry is based on mole ratios.',
			'Mass comparison works only for solid reactants, not for solutions like HCl.',
			'The limiting reactant is always the one with the smaller mass in grams.',
			'Mass comparison is always correct because the law of conservation of mass applies.'
		],
		answer: 'Reactants must be compared in moles, not grams, because stoichiometry is based on mole ratios.',
		explanation:
			'Stoichiometric calculations require working in moles since chemical equations represent mole ratios. Each reactant has a different molar mass, so comparing masses directly gives no meaningful information about which will run out first. All mass-to-mass stoichiometry problems require converting to moles first.',
		difficulty: 'advanced',
		illustration: calculationStepsIllustration
	},

	// ── STOICHIOMETRIC CALCULATIONS (Q8–Q14) ─────────────────────────────
	{
		id: 8,
		question:
			'For the reaction 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂, a chemist uses 54.0 g of Al and 219.0 g of HCl. Which reactant is limiting? (Al = 27.0 g/mol, HCl = 36.5 g/mol)',
		options: [
			'HCl is limiting — 219.0 g HCl = 6.0 mol, needing 2.0 mol Al, and 54.0 g Al = 2.0 mol Al is exactly enough.',
			'Al is limiting — 54.0 g Al = 2.0 mol, needing 6.0 mol HCl, and 219.0 g HCl = 6.0 mol is exactly what is needed.',
			'Both are exactly stoichiometric — neither is limiting.',
			'Both are in excess — the reaction will produce unlimited product.'
		],
		answer: 'Both are exactly stoichiometric — neither is limiting.',
		explanation:
			'Moles Al = 54.0 ÷ 27.0 = 2.0 mol. Moles HCl = 219.0 ÷ 36.5 = 6.0 mol. From the equation: 2 Al requires 6 HCl. With 2.0 Al and 6.0 HCl, the reactants are in perfect stoichiometric proportion — neither is limiting.',
		difficulty: 'advanced',
		illustration: calculationStepsIllustration
	},
	{
		id: 9,
		question:
			'For the combustion of propane: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. If a chemist starts with 2.0 mol of C₃H₈ and 12.0 mol of O₂, what is the limiting reactant?',
		options: [
			'O₂ is limiting — 12.0 mol O₂ can produce 7.2 mol CO₂, while 2.0 mol C₃H₈ can produce 6.0 mol CO₂.',
			'C₃H₈ is limiting — it can only produce 6.0 mol CO₂, while O₂ can produce 7.2 mol CO₂.',
			'Both reactants are exactly balanced — neither is limiting.',
			'CO₂ is limiting — it is the product being measured.'
		],
		answer: 'C₃H₈ is limiting — it can only produce 6.0 mol CO₂, while O₂ can produce 7.2 mol CO₂.',
		explanation:
			'From C₃H₈: 2.0 mol × (3 CO₂ / 1 C₃H₈) = 6.0 mol CO₂ possible. From O₂: 12.0 mol × (3 CO₂ / 5 O₂) = 7.2 mol CO₂ possible. C₃H₈ produces less CO₂, so C₃H₈ is the limiting reactant and O₂ is in excess.',
		difficulty: 'advanced',
		illustration: calculationStepsIllustration
	},
	{
		id: 10,
		question:
			'For the reaction 2 H₂ + O₂ → 2 H₂O, a chemist has 6.0 g of H₂ and 32.0 g of O₂. What is the theoretical yield of water in grams? (H = 1.0, O = 16.0 g/mol)',
		options: [
			'54.0 g of H₂O is the theoretical yield.',
			'36.0 g of H₂O is the theoretical yield.',
			'18.0 g of H₂O is the theoretical yield.',
			'72.0 g of H₂O is the theoretical yield.'
		],
		answer: '36.0 g of H₂O is the theoretical yield.',
		explanation:
			'Moles H₂ = 6.0 ÷ 2.0 = 3.0 mol. Moles O₂ = 32.0 ÷ 32.0 = 1.0 mol. O₂ needs 2 mol H₂ per 1 mol O₂. We have 3.0 mol H₂ and only 1.0 mol O₂, so O₂ is limiting. 1.0 mol O₂ × (2 H₂O / 1 O₂) = 2.0 mol H₂O = 2.0 × 18.0 = 36.0 g H₂O.',
		difficulty: 'expert',
		illustration: calculationStepsIllustration
	},
	{
		id: 11,
		question:
			'A student performs the reaction Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂ using 160.0 g of Fe₂O₃ and 84.0 g of CO. What mass of iron (Fe) is theoretically produced? (Fe = 55.85, O = 16.00, C = 12.01 g/mol)',
		options: [
			'111.7 g of Fe is the theoretical yield.',
			'55.85 g of Fe is the theoretical yield.',
			'223.4 g of Fe is the theoretical yield.',
			'167.6 g of Fe is the theoretical yield.'
		],
		answer: '111.7 g of Fe is the theoretical yield.',
		explanation:
			'Moles Fe₂O₃ = 160.0 ÷ 159.7 = 1.0 mol. Moles CO = 84.0 ÷ 28.01 = 3.0 mol. From Fe₂O₃: 1.0 × (2 Fe / 1) = 2.0 mol Fe. From CO: 3.0 × (2 Fe / 3 CO) = 2.0 mol Fe. Both produce the same → stoichiometric. 2.0 mol Fe × 55.85 = 111.7 g Fe.',
		difficulty: 'expert',
		illustration: calculationStepsIllustration
	},
	{
		id: 12,
		question:
			'A reaction produces a theoretical yield of 50.0 g of product. The chemist actually isolates 42.5 g after purification. What is the percent yield?',
		options: [
			'85.0% is the percent yield.',
			'42.5% is the percent yield.',
			'117.6% is the percent yield.',
			'7.5% is the percent yield.'
		],
		answer: '85.0% is the percent yield.',
		explanation:
			'Percent yield = (actual yield / theoretical yield) × 100% = (42.5 g / 50.0 g) × 100% = 85.0%. This means the reaction produced 85% of the maximum possible product. The remaining 15% was lost to side reactions, incomplete reaction, or purification losses.',
		difficulty: 'advanced',
		illustration: percentYieldIllustration
	},
	{
		id: 13,
		question:
			'A student obtains a percent yield greater than 100% in an experiment. Which is the most likely explanation?',
		options: [
			'The product is contaminated with impurities, making the measured mass higher than the pure product mass.',
			'The reaction produced more product than theoretically possible, breaking the law of conservation of mass.',
			'The student used a more efficient catalyst than expected.',
			'The theoretical yield was calculated correctly but the reaction went to completion faster.'
		],
		answer: 'The product is contaminated with impurities, making the measured mass higher than the pure product mass.',
		explanation:
			'A percent yield over 100% indicates the measured "product" includes impurities (solvent, unreacted starting material, or other substances). Since the theoretical yield is the maximum possible based on the limiting reactant, no reaction can truly exceed 100% yield of pure product.',
		difficulty: 'expert',
		illustration: percentYieldIllustration
	},
	{
		id: 14,
		question:
			'For the reaction N₂ + 3 H₂ → 2 NH₃, 28.0 g of N₂ reacts with 10.0 g of H₂. After the reaction, 28.0 g of NH₃ is isolated. What are the limiting reactant and the percent yield? (N = 14.0, H = 1.0 g/mol)',
		options: [
			'N₂ is limiting with 82.4% yield.',
			'H₂ is limiting with 82.4% yield.',
			'N₂ is limiting with 100% yield.',
			'H₂ is limiting with 100% yield.'
		],
		answer: 'N₂ is limiting with 82.4% yield.',
		explanation:
			'Moles N₂ = 28.0 ÷ 28.0 = 1.0 mol. Moles H₂ = 10.0 ÷ 2.0 = 5.0 mol. N₂ needs 3 mol H₂ — we have 5.0, so N₂ is limiting. Theoretical yield: 1.0 mol N₂ × (2 NH₃ / 1 N₂) = 2.0 mol NH₃ = 34.0 g. Percent yield = 28.0/34.0 × 100% = 82.4%.',
	difficulty: 'expert',
		illustration: percentYieldIllustration
	},

	// ── CONCEPTUAL & APPLICATION (Q15–Q20) ──────────────────────────────
	{
		id: 15,
		question:
			'In an industrial process, a costly palladium catalyst is used alongside a cheap reactant and an expensive reactant. Which strategy would minimize waste and maximize efficiency?',
		options: [
			'Make the expensive reactant the limiting one so none of it is wasted, and use excess of the cheap reactant to drive the reaction.',
			'Make the cheap reactant the limiting one so less is used overall.',
			'Use equal molar amounts of both reactants to achieve perfect stoichiometry.',
			'Use the costly catalyst as the limiting reactant since it is the most valuable material.'
		],
		answer: 'Make the expensive reactant the limiting one so none of it is wasted, and use excess of the cheap reactant to drive the reaction.',
		explanation:
			'Industrially, the expensive reactant is made limiting to ensure it is fully consumed. The cheaper reactant is added in excess to push the equilibrium toward products and maximize conversion of the valuable material. This minimizes waste of costly substances.',
		difficulty: 'expert',
		illustration: realWorldApplicationIllustration
	},
	{
		id: 16,
		question:
			'A student mixes two solutions containing 0.50 mol of AgNO₃ and 0.30 mol of NaCl. The reaction is AgNO₃ + NaCl → AgCl↓ + NaNO₃. How much AgCl precipitate forms, and which reactant is in excess?',
		options: [
			'0.30 mol AgCl forms; AgNO₃ is in excess with 0.20 mol remaining.',
			'0.50 mol AgCl forms; NaCl is in excess with 0.20 mol remaining.',
			'0.80 mol AgCl forms; both reactants are completely consumed.',
			'0.20 mol AgCl forms; NaCl is the limiting reactant.'
		],
		answer: '0.30 mol AgCl forms; AgNO₃ is in excess with 0.20 mol remaining.',
		explanation:
			'The 1:1 ratio means both reactants compete equally. NaCl has fewer moles (0.30 < 0.50), so NaCl is limiting. 0.30 mol NaCl × (1 AgCl / 1 NaCl) = 0.30 mol AgCl forms. AgNO₃ excess = 0.50 - 0.30 = 0.20 mol remaining.',
		difficulty: 'advanced',
		illustration: calculationStepsIllustration
	},
	{
		id: 17,
		question:
			'For the reaction CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂, a student adds 10.0 g of CaCO₃ to 0.50 L of 0.50 M HCl. Which reactant is limiting? (CaCO₃ = 100.1 g/mol)',
		options: [
			'HCl is limiting — 0.25 mol HCl needs 0.125 mol CaCO₃, but only 0.10 mol CaCO₃ is available.',
			'CaCO₃ is limiting — 0.10 mol CaCO₃ needs 0.20 mol HCl, and 0.25 mol HCl is available.',
			'Both are perfectly balanced — neither is limiting.',
			'CO₂ is limiting — it escapes as a gas.'
		],
		answer: 'CaCO₃ is limiting — 0.10 mol CaCO₃ needs 0.20 mol HCl, and 0.25 mol HCl is available.',
		explanation:
			'Moles CaCO₃ = 10.0 ÷ 100.1 = 0.10 mol. Moles HCl = 0.50 L × 0.50 M = 0.25 mol. CaCO₃ requires 0.10 × 2 = 0.20 mol HCl, and 0.25 mol is available. CaCO₃ is limiting; HCl is in excess by 0.05 mol.',
		difficulty: 'expert',
		illustration: calculationStepsIllustration
	},
	{
		id: 18,
		question:
			'A car airbag inflates using the reaction: 2 NaN₃ → 2 Na + 3 N₂. If an airbag contains 130.0 g of NaN₃, what volume of N₂ gas is produced at STP? (NaN₃ = 65.0 g/mol, 1 mol gas = 22.4 L at STP)',
		options: [
			'67.2 L of N₂ gas is produced.',
			'44.8 L of N₂ gas is produced.',
			'130.0 L of N₂ gas is produced.',
			'22.4 L of N₂ gas is produced.'
		],
		answer: '67.2 L of N₂ gas is produced.',
		explanation:
			'Moles NaN₃ = 130.0 ÷ 65.0 = 2.0 mol. 2.0 mol NaN₃ × (3 N₂ / 2 NaN₃) = 3.0 mol N₂. Volume = 3.0 mol × 22.4 L/mol = 67.2 L N₂ at STP. This rapid gas generation inflates the airbag in milliseconds.',
		difficulty: 'advanced',
		illustration: realWorldApplicationIllustration
	},
	{
		id: 19,
		question:
			'The combustion of octane (C₈H₁₈) in automobile engines is: 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O. If an engine burns 57.0 g of octane with 160.0 g of O₂, which statement best describes the outcome? (C₈H₁₈ = 114.0 g/mol, O₂ = 32.0 g/mol)',
		options: [
			'Octane is limiting, and complete combustion will occur, converting all octane to CO₂ and H₂O.',
			'Oxygen is limiting, resulting in incomplete combustion and potentially producing carbon monoxide (CO) as a pollutant.',
			'Both reactants are in exactly the right proportions for complete combustion.',
			'Neither reactant is consumed — the engine temperature determines the reaction rate.'
		],
		answer: 'Oxygen is limiting, resulting in incomplete combustion and potentially producing carbon monoxide (CO) as a pollutant.',
		explanation:
			'Moles C₈H₁₈ = 57.0 ÷ 114.0 = 0.50 mol. Moles O₂ = 160.0 ÷ 32.0 = 5.0 mol. Octane needs 0.50 × (25/2) = 6.25 mol O₂. Only 5.0 mol O₂ available, so O₂ is limiting! Incomplete combustion occurs, potentially producing soot and CO.',
	difficulty: 'expert',
		illustration: realWorldApplicationIllustration
	},
	{
		id: 20,
		question:
			'A metallurgist is extracting iron from iron ore: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. If 500.0 kg of Fe₂O₃ (80.0% pure) and 200.0 kg of CO (90.0% pure) are used, what mass of pure iron is produced? (Fe₂O₃ = 159.7, CO = 28.0, Fe = 55.85 g/mol)',
		options: [
			'239.4 kg of Fe is produced.',
			'350.0 kg of Fe is produced.',
			'179.9 kg of Fe is produced.',
			'500.0 kg of Fe is produced.'
		],
		answer: '239.4 kg of Fe is produced.',
	explanation:
			'Pure Fe₂O₃ = 500.0 × 0.80 = 400.0 kg → 400.0×10³ ÷ 159.7 = 2504 mol. Pure CO = 200.0 × 0.90 = 180.0 kg → 180.0×10³ ÷ 28.0 = 6429 mol. Need 3×2504 = 7512 mol CO. Only 6429 mol CO available — CO is limiting. 6429 mol CO × (2 Fe / 3 CO) = 4286 mol Fe × 55.85 = 239.4 kg Fe.',
		difficulty: 'expert',
		illustration: realWorldApplicationIllustration
	},

	// ── ADVANCED INTEGRATIVE (Q21–Q25) ───────────────────────────────────
	{
		id: 21,
		question:
			'A student performs the reaction 2 H₂ + O₂ → 2 H₂O three times with different starting amounts. Trial 1: 2 mol H₂, 1 mol O₂. Trial 2: 4 mol H₂, 1 mol O₂. Trial 3: 1 mol H₂, 2 mol O₂. Which trial produces the most water?',
		options: [
			'Trial 2 produces the most water (2 mol H₂O) because it has the most total moles of reactants.',
			'Trial 1 produces the most water (2 mol H₂O) because both reactants are perfectly balanced.',
			'Trial 3 produces the most water (2 mol H₂O) because oxygen is in excess.',
			'All three trials produce the same amount (1 mol H₂O) because the limiting reactant determines the yield.'
		],
		answer: 'Trial 2 produces the most water (2 mol H₂O) because it has the most total moles of reactants.',
		explanation:
			'Trial 1: 2 mol H₂ × (2 H₂O / 2 H₂) = 2 mol H₂O, also 1 mol O₂ × (2 H₂O / 1 O₂) = 2 mol H₂O. Balanced → 2 mol H₂O. Trial 2: O₂ limiting → 1 mol × 2 = 2 mol H₂O. Trial 3: H₂ limiting → 1 mol × (2/2) = 1 mol H₂O. Trials 1 and 2 both produce 2 mol H₂O but from different limiting reactants.',
		difficulty: 'expert',
		illustration: calculationStepsIllustration
	},
	{
		id: 22,
		question:
			'In a blast furnace, iron(III) oxide reacts with carbon monoxide: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. An engineer has 1.0 tonne of Fe₂O₃ and 0.6 tonnes of CO. After the reaction, 0.5 tonnes of Fe is collected. What is the percent yield? (Fe₂O₃ = 159.7, CO = 28.0, Fe = 55.85 g/mol)',
		options: [
			'Approximately 89.4% is the percent yield.',
			'Approximately 71.5% is the percent yield.',
			'Approximately 95.2% is the percent yield.',
			'Approximately 83.3% is the percent yield.'
		],
		answer: 'Approximately 71.5% is the percent yield.',
	explanation:
			'1.0 t Fe₂O₃ = 1.0×10⁶ ÷ 159.7 = 6262 mol. 0.6 t CO = 0.6×10⁶ ÷ 28.0 = 21429 mol. Fe₂O₃ needs 3×6262 = 18786 mol CO. CO is in excess; Fe₂O₃ is limiting. Theoretical Fe = 6262 × 2 × 55.85 = 699.5 kg. Percent yield = (500/699.5) × 100% = 71.5%.',
		difficulty: 'expert',
		illustration: percentYieldIllustration
	},
	{
		id: 23,
		question:
			'A company produces ammonia via N₂ + 3 H₂ → 2 NH₃. They want to maximize the use of expensive N₂ while using cheaper H₂. If they have 100 kg of N₂, what mass of H₂ should they use to ensure N₂ is the limiting reactant but with minimal excess H₂? (N = 14.0, H = 1.0 g/mol)',
		options: [
			'Use at least 21.6 kg of H₂ to ensure N₂ is limiting.',
			'Use exactly 10.8 kg of H₂ for perfect stoichiometry.',
			'Use at least 43.2 kg of H₂ to ensure N₂ is limiting.',
			'Use 100 kg of H₂ to match the mass of N₂.'
		],
		answer: 'Use at least 21.6 kg of H₂ to ensure N₂ is limiting.',
		explanation:
			'Moles N₂ = 100 ÷ 28.0 = 3571 mol. For stoichiometric balance, need 3 × 3571 = 10714 mol H₂ = 21.6 kg. To make N₂ limiting with minimal excess, use just over 21.6 kg H₂. This way all expensive N₂ is consumed, and only a small amount of cheap H₂ is wasted.',
		difficulty: 'expert',
		illustration: realWorldApplicationIllustration
	},
	{
		id: 24,
		question:
			'A student prepares aspirin (C₉H₈O₄) from salicylic acid (C₇H₆O₃) and acetic anhydride (C₄H₆O₃): C₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + CH₃COOH. The student uses 13.8 g of salicylic acid and 10.2 g of acetic anhydride. If 15.0 g of aspirin is collected, what is the percent yield? (C₇H₆O₃ = 138.0, C₄H₆O₃ = 102.0, C₉H₈O₄ = 180.0 g/mol)',
		options: [
			'85.0% is the percent yield.',
			'92.6% is the percent yield.',
			'75.0% is the percent yield.',
			'100% is the percent yield — the reaction went to completion.'
		],
		answer: '83.3% is the percent yield.',
	explanation:
			'Moles salicylic acid = 13.8/138.0 = 0.100 mol. Moles acetic anhydride = 10.2/102.0 = 0.100 mol. 1:1 ratio → both react completely. Theoretical yield = 0.100 × 180.0 = 18.0 g aspirin. Percent yield = (15.0/18.0) × 100% = 83.3%.',
		difficulty: 'expert',
		illustration: percentYieldIllustration
	},
	{
		id: 25,
		question:
			'Consider the reaction: 4 NH₃ + 5 O₂ → 4 NO + 6 H₂O. A reactor is charged with 34.0 g of NH₃ and 96.0 g of O₂. After complete reaction of the limiting reactant, what mass of excess reactant remains? (NH₃ = 17.0, O₂ = 32.0 g/mol)',
		options: [
			'16.0 g of O₂ remains unreacted.',
			'32.0 g of NH₃ remains unreacted.',
			'48.0 g of O₂ remains unreacted.',
			'No excess remains — both reactants are completely consumed.'
		],
		answer: '16.0 g of O₂ remains unreacted.',
		explanation:
			'Moles NH₃ = 34.0/17.0 = 2.0 mol. Moles O₂ = 96.0/32.0 = 3.0 mol. NH₃ needs: 2.0 × (5/4) = 2.5 mol O₂. We have 3.0 mol O₂, so NH₃ is limiting. O₂ consumed = 2.5 mol. O₂ remaining = 3.0 - 2.5 = 0.5 mol × 32.0 = 16.0 g of O₂ remains unreacted.',
	difficulty: 'expert',
		illustration: calculationStepsIllustration
	}
];

export const limitingExcessReactantQuizData = limitingExcessReactantQuizItems satisfies Question[];
