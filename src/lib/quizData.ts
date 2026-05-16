export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty?: 'intermediate' | 'advanced' | 'expert';
	structureIllustration?: string; // SVG string for molecular structures
	reactionScheme?: string; // SVG string for reaction mechanisms
}

export const quizData: Question[] = [
	{
		id: 1,
		question: "In the free radical chlorination of methane, what is the enthalpy change (ΔH°) for the chain initiation step (Cl₂ → 2Cl•)?",
		options: ["−243.4 kJ/mol", "+243.4 kJ/mol", "−16 kJ/mol", "+16 kJ/mol"],
		answer: "+243.4 kJ/mol",
		explanation: "Chain initiation requires energy input to break the Cl-Cl bond homolytically. The bond dissociation energy is +243.4 kJ/mol, making this an endothermic step.",
		difficulty: "advanced",
		structureIllustration: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
			<rect width="400" height="120" fill="#1a1a1a" rx="8"/>
			<text x="200" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">CHAIN INITIATION STEP</text>
			<text x="80" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="18">Cl−Cl</text>
			<text x="200" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="20">→</text>
			<text x="200" y="45" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">hv or Δ</text>
			<text x="320" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="18">2 Cl•</text>
			<text x="200" y="95" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="13">ΔH° = +243.4 kJ/mol</text>
		</svg>`
	},
	{
		id: 2,
		question: "During the propagation step of methane chlorination, which step is exothermic with ΔH° = −87 kJ/mol?",
		options: ["CH₄ + Cl• → •CH₃ + HCl", "•CH₃ + Cl₂ → CH₃Cl + Cl•", "2Cl• → Cl₂", "Cl₂ → 2Cl•"],
		answer: "•CH₃ + Cl₂ → CH₃Cl + Cl•",
		explanation: "The second propagation step where the methyl radical abstracts a chlorine atom from Cl₂ is highly exothermic (−87 kJ/mol), driving the chain reaction forward.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="150" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">PROPAGATION STEP 2</text>
			<text x="100" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">•CH₃ + Cl−Cl</text>
			<text x="250" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="20">→</text>
			<text x="400" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">CH₃−Cl + Cl•</text>
			<text x="250" y="100" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="14">ΔH° = −87 kJ/mol (Exothermic)</text>
			<text x="250" y="130" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Chain continues: Cl• regenerated</text>
		</svg>`
	},
	{
		id: 3,
		question: "Which termination pathway in methane chlorination has the most exothermic enthalpy change?",
		options: ["2Cl• → Cl₂ (−243.4 kJ/mol)", "•CH₃ + Cl• → CH₃Cl (−330 kJ/mol)", "2•CH₃ → C₂H₆ (−350 kJ/mol)", "All are equally exothermic"],
		answer: "2•CH₃ → C₂H₆ (−350 kJ/mol)",
		explanation: "The coupling of two methyl radicals to form ethane releases the most energy (−350 kJ/mol), though this pathway is less frequent due to lower radical concentration.",
		difficulty: "expert",
		structureIllustration: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="180" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">TERMINATION PATHWAYS</text>
			<text x="250" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">2 Cl• → Cl₂</text>
			<text x="420" y="55" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12">ΔH° = −243.4 kJ/mol</text>
			<text x="250" y="85" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">•CH₃ + Cl• → CH₃Cl</text>
			<text x="420" y="85" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="12">ΔH° = −330 kJ/mol</text>
			<text x="250" y="115" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">2 •CH₃ → CH₃−CH₃ (ethane)</text>
			<text x="420" y="115" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ΔH° = −350 kJ/mol ✓</text>
			<text x="250" y="155" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Note: Termination is infrequent due to low radical concentration</text>
		</svg>`
	},
	{
		id: 4,
		question: "What is the tetrahedral bond angle in methane (CH₄) and what hybridization accounts for this geometry?",
		options: ["120°, sp²", "109.5°, sp³", "180°, sp", "90°, dsp²"],
		answer: "109.5°, sp³",
		explanation: "Methane has sp³ hybridized carbon with four equivalent C-H bonds arranged tetrahedrally at 109.5° bond angles, minimizing electron pair repulsion.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
			<rect width="400" height="280" fill="#1a1a1a" rx="8"/>
			<text x="200" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">METHANE: TETRAHEDRAL GEOMETRY</text>
			<line x1="200" y1="140" x2="200" y2="70" stroke="#e0e0e0" stroke-width="2"/>
			<line x1="200" y1="140" x2="140" y2="200" stroke="#e0e0e0" stroke-width="2"/>
			<line x1="200" y1="140" x2="260" y2="200" stroke="#e0e0e0" stroke-width="2"/>
			<line x1="200" y1="140" x2="200" y2="220" stroke="#888" stroke-width="2" stroke-dasharray="4,4"/>
			<circle cx="200" cy="140" r="18" fill="#00f2ff"/>
			<text x="200" y="145" text-anchor="middle" fill="#0a0a0a" font-family="JetBrains Mono" font-size="12" font-weight="bold">C</text>
			<circle cx="200" cy="65" r="12" fill="#bfff00"/>
			<text x="200" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">H</text>
			<circle cx="135" cy="205" r="12" fill="#bfff00"/>
			<text x="120" y="225" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">H</text>
			<circle cx="265" cy="205" r="12" fill="#bfff00"/>
			<text x="280" y="225" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">H</text>
			<circle cx="200" cy="225" r="12" fill="#bfff00" opacity="0.5"/>
			<text x="200" y="250" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">H</text>
			<text x="230" y="120" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12">109.5°</text>
			<path d="M 200 140 L 230 110" stroke="#ff3e00" stroke-width="1" fill="none"/>
			<text x="200" y="270" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">sp³ hybridization, 4 σ bonds</text>
		</svg>`
	},
	{
		id: 5,
		question: "In the industrial manufacture of methanol from methane, what conditions are used (850°C, Ni catalyst)?",
		options: ["Complete combustion to CO₂", "Partial oxidation to CO + H₂, then methanol", "Direct hydration", "Halogenation followed by hydrolysis"],
		answer: "Partial oxidation to CO + H₂, then methanol",
		explanation: "At 850°C with Ni catalyst, methane undergoes partial oxidation to form synthesis gas (CO + H₂), which is then converted to methanol and other alcohols.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 550 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="160" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">METHANOL PRODUCTION FROM METHANE</text>
			<text x="120" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="15">CH₄ + O₂</text>
			<text x="275" y="55" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="275" y="45" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">850°C, Ni</text>
			<text x="400" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="15">CO + H₂</text>
			<text x="400" y="85" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">(synthesis gas)</text>
			<text x="275" y="110" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">↓</text>
			<text x="275" y="140" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="14">CH₃OH + other alcohols</text>
		</svg>`
	},
	{
		id: 6,
		question: "What are ALL the products formed when methane reacts with excess chlorine under UV light?",
		options: ["CH₃Cl only", "CH₃Cl and HCl", "CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄, and C₂H₆", "CHCl₃ and CCl₄ only"],
		answer: "CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄, and C₂H₆",
		explanation: "With excess Cl₂, multiple substitution occurs producing chloromethane, dichloromethane, chloroform, and carbon tetrachloride. Ethane (C₂H₆) forms from methyl radical coupling during termination.",
		difficulty: "advanced",
		structureIllustration: `<svg viewBox="0 0 550 220" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="220" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">CHLORINATION PRODUCTS OF METHANE</text>
			<text x="100" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CH₃Cl</text>
			<text x="100" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Methyl chloride</text>
			<text x="100" y="87" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">BP: −24.2°C (gas)</text>
			<text x="220" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CH₂Cl₂</text>
			<text x="220" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Methylene chloride</text>
			<text x="220" y="87" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="10">BP: 40°C (liquid)</text>
			<text x="350" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CHCl₃</text>
			<text x="350" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Chloroform</text>
			<text x="350" y="87" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="10">BP: 61.7°C (liquid)</text>
			<text x="470" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CCl₄</text>
			<text x="470" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Carbon tetrachloride</text>
			<text x="470" y="87" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="10">BP: 76.5°C (liquid)</text>
			<text x="275" y="130" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">+ C₂H₆ (ethane from termination)</text>
			<text x="275" y="160" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">CH₄ + Cl₂ → CH₃Cl + CH₂Cl₂ + CHCl₃ + CCl₄ + C₂H₆ + HCl</text>
			<text x="275" y="190" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">All chlorinated derivatives are excellent nonpolar solvents</text>
		</svg>`
	},
	{
		id: 7,
		question: "Why does the chlorination of methane NOT occur in the dark or at low temperatures?",
		options: ["Methane is unreactive", "Energy is required to generate free radicals via homolytic cleavage of Cl₂", "The reaction is exothermic", "Chlorine is a gas at room temperature"],
		answer: "Energy is required to generate free radicals via homolytic cleavage of Cl₂",
		explanation: "The initiation step requires UV light or temperatures >250°C to provide enough energy (243.4 kJ/mol) to break the Cl-Cl bond homolytically and generate chlorine radicals.",
		difficulty: "intermediate",
		reactionScheme: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">ENERGY REQUIREMENT FOR INITIATION</text>
			<text x="150" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">Cl−Cl</text>
			<text x="250" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="20">→</text>
			<text x="250" y="50" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">hv (UV) or Δ >250°C</text>
			<text x="370" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">Cl• + Cl•</text>
			<text x="250" y="100" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="12">Bond dissociation energy: 243.4 kJ/mol</text>
			<text x="250" y="125" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">No reaction in dark or low temp — no radicals formed!</text>
		</svg>`
	},
	{
		id: 8,
		question: "What is the reactivity order of halogens (X₂) with methane in free radical halogenation?",
		options: ["I₂ > Br₂ > Cl₂ > F₂", "F₂ > Cl₂ > Br₂ > I₂", "Cl₂ > Br₂ > F₂ > I₂", "Br₂ > Cl₂ > I₂ > F₂"],
		answer: "F₂ > Cl₂ > Br₂ > I₂",
		explanation: "Fluorine is most reactive (often explosive), followed by chlorine, bromine, and iodine (least reactive). This order reflects bond dissociation energies and reaction exothermicity.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="160" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">HALOGEN REACTIVITY ORDER</text>
			<text x="250" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₄ + X₂ → CH₃X + HX</text>
			<text x="250" y="95" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18" font-weight="bold">F₂ > Cl₂ > Br₂ > I₂</text>
			<text x="100" y="125" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">F₂: Explosive</text>
			<text x="220" y="125" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="11">Cl₂: Fast (UV)</text>
			<text x="340" y="125" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">Br₂: Slow (heat)</text>
			<text x="450" y="125" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">I₂: Negligible</text>
		</svg>`
	},
	{
		id: 9,
		question: "What laboratory method produces methane from sodium acetate?",
		options: ["Electrolysis", "Decarboxylation with soda lime (NaOH + CaO)", "Hydrolysis with HCl", "Oxidation with KMnO₄"],
		answer: "Decarboxylation with soda lime (NaOH + CaO)",
		explanation: "Heating sodium acetate with soda lime (NaOH + CaO) causes decarboxylation, removing CO₂ and producing methane: CH₃COONa + NaOH → CH₄ + Na₂CO₃.",
		difficulty: "intermediate",
		reactionScheme: `<svg viewBox="0 0 550 130" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="130" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">LABORATORY PREPARATION OF METHANE</text>
			<text x="150" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₃COONa + NaOH</text>
			<text x="275" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="275" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">CaO, Δ</text>
			<text x="420" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₄ + Na₂CO₃</text>
			<text x="275" y="95" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Decarboxylation: removal of CO₂ from carboxylic acid salt</text>
			<text x="275" y="115" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Soda lime = NaOH + CaO (CaO absorbs moisture)</text>
		</svg>`
	},
	{
		id: 10,
		question: "Which halogenated methane derivative was banned by the EPA in 1978 aerosols due to ozone layer depletion?",
		options: ["CH₃Cl (methyl chloride)", "CH₂Cl₂ (methylene chloride)", "CCl₂F₂ and CCl₃F (CFCs/Freons)", "CHCl₃ (chloroform)"],
		answer: "CCl₂F₂ and CCl₃F (CFCs/Freons)",
		explanation: "Chlorofluorocarbons (CFCs) like Freon (CCl₂F₂, CCl₃F) release chlorine atoms in the stratosphere that catalytically destroy ozone molecules, leading to the 1978 EPA ban.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 550 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="180" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12" font-weight="bold">CFCs & OZONE DEPLETION (EPA Ban 1978)</text>
			<text x="150" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CCl₂F₂ (Freon-12)</text>
			<text x="150" y="78" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Dichlorodifluoromethane</text>
			<text x="400" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CCl₃F (Freon-11)</text>
			<text x="400" y="78" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Trichlorofluoromethane</text>
			<text x="275" y="110" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="13">UV light → Cl• radicals in stratosphere</text>
			<text x="275" y="135" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="13">Cl• + O₃ → ClO• + O₂ (ozone destruction)</text>
			<text x="275" y="160" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Uses: aerosol propellants, refrigerants, antiperspirants</text>
		</svg>`
	},
	{
		id: 11,
		question: "What is the complete combustion equation for methane?",
		options: ["CH₄ + O₂ → CO + 2H₂O", "CH₄ + 2O₂ → CO₂ + 2H₂O + heat (213 kcal)", "CH₄ + O₂ → C + 2H₂O", "2CH₄ + 3O₂ → 2CO + 4H₂O"],
		answer: "CH₄ + 2O₂ → CO₂ + 2H₂O + heat (213 kcal)",
		explanation: "Complete combustion of methane produces carbon dioxide, water, and releases 213 kcal of heat energy. This makes methane an important source of heat and energy.",
		difficulty: "intermediate"
	},
	{
		id: 12,
		question: "What common names are used for methane?",
		options: ["Firedamp, marsh gas, biogas", "Natural gas, propane, butane", "Acetylene, ethylene, propylene", "Freon, halon, chloroform"],
		answer: "Firedamp, marsh gas, biogas",
		explanation: "Methane is commonly known as firedamp (in coal mines), marsh gas (produced in swamps), and biogas (from organic decomposition).",
		difficulty: "intermediate"
	},
	{
		id: 13,
		question: "What are the physical properties of methane at room temperature?",
		options: [
			"Colorless liquid, soluble in water, BP = 100°C",
			"Colorless gas, insoluble in water, BP = −161.5°C, MP = −183°C",
			"Yellow gas, soluble in benzene, BP = −50°C",
			"Colorless gas, soluble in water, BP = 0°C"
		],
		answer: "Colorless gas, insoluble in water, BP = −161.5°C, MP = −183°C",
		explanation: "Methane is a colorless, nonpolar gas at room temperature. It is insoluble in water but soluble in benzene, CCl₄, ether, and gasoline. Its boiling point is −161.5°C and melting point is −183°C.",
		difficulty: "intermediate"
	},
	{
		id: 14,
		question: "Methane can be produced by the reaction of aluminum carbide (Al₄C₃) with what substance?",
		options: ["Hydrochloric acid", "Water", "Oxygen", "Sodium hydroxide"],
		answer: "Water",
		explanation: "Aluminum carbide (Al₄C₃) reacts with water to produce methane. This is one of the laboratory methods for methane preparation alongside decarboxylation of sodium acetate.",
		difficulty: "advanced"
	},
	{
		id: 15,
		question: "In the first propagation step of methane chlorination (CH₄ + Cl• → •CH₃ + HCl), what is the enthalpy change?",
		options: ["−87 kJ/mol", "+243.4 kJ/mol", "−16 kJ/mol", "+16 kJ/mol"],
		answer: "−16 kJ/mol",
		explanation: "The first propagation step where a chlorine radical abstracts a hydrogen from methane is slightly exothermic with ΔH° = −16 kJ/mol.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">PROPAGATION STEP 1</text>
			<text x="120" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">CH₄ + Cl•</text>
			<text x="250" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="20">→</text>
			<text x="380" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">•CH₃ + HCl</text>
			<text x="250" y="100" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="14">ΔH° = −16 kJ/mol (slightly exothermic)</text>
			<text x="250" y="125" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Cl• abstracts H from methane</text>
		</svg>`
	},
	{
		id: 16,
		question: "What intermolecular force is present in methane?",
		options: ["Hydrogen bonding", "Dipole-dipole interactions", "Van der Waals forces", "Ionic bonding"],
		answer: "Van der Waals forces",
		explanation: "Methane is nonpolar, so the only intermolecular forces present are Van der Waals (London dispersion) forces. This explains its low boiling point and insolubility in water.",
		difficulty: "intermediate"
	},
	{
		id: 17,
		question: "What mixture passing through electric discharge can produce amino acids from methane?",
		options: ["CH₄, H₂O, NH₃, and H₂", "CH₄, O₂, CO₂, and N₂", "CH₄, Cl₂, HCl, and H₂O", "CH₄, H₂, He, and Ar"],
		answer: "CH₄, H₂O, NH₃, and H₂",
		explanation: "A mixture of methane, water, ammonia, and hydrogen passed through electric discharge can produce amino acids, the building blocks of proteins. This relates to theories about the origin of life.",
		difficulty: "advanced"
	},
	{
		id: 18,
		question: "Which chlorinated methane derivative has a boiling point of 61.7°C and is known as chloroform?",
		options: ["CH₃Cl", "CH₂Cl₂", "CHCl₃", "CCl₄"],
		answer: "CHCl₃",
		explanation: "Chloroform (CHCl₃) has a boiling point of 61.7°C and is a liquid at room temperature. It is one of the chlorinated derivatives of methane used as a nonpolar solvent.",
		difficulty: "intermediate"
	},
	{
		id: 19,
		question: "Why are chlorinated hydrocarbons excellent solvents for nonpolar solutes?",
		options: [
			"They are highly polar and ionic",
			"They are less volatile and significantly less flammable than hydrocarbons",
			"They have high boiling points above 200°C",
			"They react chemically with solutes"
		],
		answer: "They are less volatile and significantly less flammable than hydrocarbons",
		explanation: "Chlorinated hydrocarbons make excellent solvents for nonpolar solutes because they share similar nonpolar characteristics but have advantages: they are less volatile and significantly less flammable than pure hydrocarbons.",
		difficulty: "advanced"
	},
	{
		id: 20,
		question: "What is the general formula for alkanes, and how does methane fit into this series?",
		options: ["CnH₂n; methane is C₁H₂", "CnH₂n₊₂; methane is C₁H₄", "CnH₂n₋₂; methane is C₁H₀", "CnHₙ; methane is C₁H₁"],
		answer: "CnH₂n₊₂; methane is C₁H₄",
		explanation: "Alkanes follow the general formula CnH₂n₊₂. Methane (CH₄) is the simplest alkane where n=1, giving C₁H₄. All carbons in alkanes are sp³ hybridized with 109.5° bond angles.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="160" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">ALKANE GENERAL FORMULA: CnH₂n₊₂</text>
			<text x="100" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">Methane: CH₄</text>
			<text x="220" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">Ethane: C₂H₆</text>
			<text x="340" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">Propane: C₃H₈</text>
			<text x="440" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">Butane: C₄H₁₀</text>
			<text x="250" y="100" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="14">All sp³ | All 109.5° | Saturated</text>
			<text x="250" y="130" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Each carbon has 4 single bonds (σ bonds)</text>
			<text x="250" y="150" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Only C and H atoms | Nonpolar</text>
		</svg>`
	}
];
