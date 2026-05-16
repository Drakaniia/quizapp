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

export const quizData2: Question[] = [
	{
		id: 1,
		question: "What is the hybridization and geometry of carbon atoms in ethyne (acetylene)?",
		options: ["sp³, tetrahedral", "sp², trigonal planar", "sp, linear", "dsp², square planar"],
		answer: "sp, linear",
		explanation: "Ethyne has sp hybridized carbons with 2 p orbitals and 2 sp hybrid orbitals, resulting in a linear geometry with 180° bond angles.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 450 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="450" height="140" fill="#1a1a1a" rx="8"/>
			<text x="225" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ETHYNE (ACETYLENE): sp HYBRIDIZATION</text>
			<text x="100" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="18">H</text>
			<line x1="120" y1="70" x2="170" y2="70" stroke="#e0e0e0" stroke-width="2"/>
			<line x1="170" y1="65" x2="280" y2="65" stroke="#bfff00" stroke-width="2"/>
			<line x1="170" y1="70" x2="280" y2="70" stroke="#bfff00" stroke-width="3"/>
			<line x1="170" y1="75" x2="280" y2="75" stroke="#bfff00" stroke-width="2"/>
			<line x1="280" y1="70" x2="330" y2="70" stroke="#e0e0e0" stroke-width="2"/>
			<text x="350" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="18">H</text>
			<text x="225" y="55" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">C≡C triple bond</text>
			<text x="225" y="100" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="13">Bond angle: 180° (linear)</text>
			<text x="225" y="125" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">1 σ bond + 2 π bonds between carbons</text>
		</svg>`
	},
	{
		id: 2,
		question: "In the preparation of alkynes from calcium carbide, what is the complete reaction sequence from limestone?",
		options: [
			"CaCO₃ → CaO → CaC₂ → C₂H₂",
			"CaCO₃ → Ca(OH)₂ → CaC₂ → C₂H₄",
			"CaO → CaCO₃ → CaC₂ → CH₄",
			"CaCO₃ → CaCl₂ → CaC₂ → C₂H₂"
		],
		answer: "CaCO₃ → CaO → CaC₂ → C₂H₂",
		explanation: "Limestone (CaCO₃) is heated to produce CaO, which reacts with carbon at 2000°C to form CaC₂. Calcium carbide then reacts with water to produce acetylene (C₂H₂).",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="180" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ACETYLENE FROM CALCIUM CARBIDE</text>
			<text x="100" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CaCO₃</text>
			<text x="100" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Limestone</text>
			<text x="175" y="60" text-anchor="middle" fill="#bfff00" font-size="16">→</text>
			<text x="175" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="9">heat</text>
			<text x="250" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CaO + CO₂</text>
			<text x="325" y="60" text-anchor="middle" fill="#bfff00" font-size="16">→</text>
			<text x="325" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="9">3C, 2000°C</text>
			<text x="400" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CaC₂ + CO</text>
			<text x="475" y="60" text-anchor="middle" fill="#bfff00" font-size="16">→</text>
			<text x="475" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="9">2H₂O</text>
			<text x="540" y="55" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">C₂H₂</text>
			<text x="540" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Acetylene</text>
			<text x="300" y="110" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">CaC₂ + 2H₂O → HC≡CH + Ca(OH)₂</text>
			<text x="300" y="140" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Side products: CO and H₂ used in alcohol production</text>
			<text x="300" y="165" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">6CH₄ + O₂ → 2C₂H₂ + 2CO + 10H₂ (alternative at 1500°C)</text>
		</svg>`
	},
	{
		id: 3,
		question: "Why is the reaction of sodium acetylides limited to PRIMARY alkyl halides?",
		options: [
			"Primary halides are cheaper",
			"Secondary/tertiary halides undergo elimination instead of substitution",
			"Primary halides react faster with acetylides",
			"Secondary halides don't react at all"
		],
		answer: "Secondary/tertiary halides undergo elimination instead of substitution",
		explanation: "The acetylide ion is a strong base. With secondary and tertiary halides, it abstracts a β-hydrogen (E2 elimination) rather than performing nucleophilic substitution (SN2).",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 550 170" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="170" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ACETYLIDE REACTION LIMITATION</text>
			<text x="275" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13">✓ PRIMARY HALIDES: SN2 substitution works</text>
			<text x="150" y="80" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">HC≡C:⁻Na⁺ + CH₃CH₂CH₂CH₂Br</text>
			<text x="275" y="80" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="420" y="80" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12">HC≡C(CH₂)₃CH₃</text>
			<text x="275" y="110" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="13">✗ SECONDARY/TERTIARY: E2 elimination dominates</text>
			<text x="150" y="140" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">HC≡C:⁻ + (CH₃)₂CHBr</text>
			<text x="275" y="140" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="420" y="140" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12">CH₃CH=CH₂ + HC≡CH + Br⁻</text>
			<text x="275" y="160" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Acetylide acts as base (not nucleophile) with 2°/3° halides</text>
		</svg>`
	},
	{
		id: 4,
		question: "What are the stereochemical outcomes when reducing 2-butyne with (a) H₂/Pd-NiBr and (b) Na/NH₃?",
		options: [
			"(a) trans-2-butene, (b) cis-2-butene",
			"(a) cis-2-butene, (b) trans-2-butene",
			"Both give cis-2-butene",
			"Both give trans-2-butene"
		],
		answer: "(a) cis-2-butene, (b) trans-2-butene",
		explanation: "Lindlar catalyst (Pd/NiBr) gives syn addition producing cis-alkene. Na/NH₃ reduction proceeds via radical anion intermediate giving trans-alkene (anti addition).",
		difficulty: "expert",
		structureIllustration: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="200" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ALKYNE REDUCTION: STEREOCHEMISTRY</text>
			<text x="150" y="50" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃−C≡C−CH₃</text>
			<text x="150" y="65" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">2-butyne</text>
			<line x1="220" y1="70" x2="300" y2="50" stroke="#bfff00" stroke-width="2"/>
			<line x1="220" y1="70" x2="300" y2="90" stroke="#bfff00" stroke-width="2"/>
			<text x="350" y="50" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12">H₂, Pd/NiBr</text>
			<text x="350" y="65" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">(a) Syn addition</text>
			<text x="350" y="90" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12">Na/NH₃</text>
			<text x="350" y="105" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">(b) Anti addition</text>
			<text x="480" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">CIS-2-BUTENE</text>
			<text x="480" y="68" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">CH₃    CH₃</text>
			<text x="480" y="82" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">  \\    /</text>
			<text x="480" y="96" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">   C=C</text>
			<text x="480" y="110" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">  /    \\</text>
			<text x="480" y="124" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11"> H      H</text>
			<text x="480" y="145" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12" font-weight="bold">TRANS-2-BUTENE</text>
			<text x="480" y="163" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">CH₃    H</text>
			<text x="480" y="177" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">  \\    /</text>
			<text x="480" y="191" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">   C=C</text>
		</svg>`
	},
	{
		id: 5,
		question: "What product forms when acetylene reacts with water in the presence of H⁺ and Hg²⁺ catalyst?",
		options: ["Ethanol", "Acetaldehyde (ethanal)", "Acetic acid", "Ethylene glycol"],
		answer: "Acetaldehyde (ethanal)",
		explanation: "Hg²⁺-catalyzed hydration of acetylene follows Markovnikov addition to form vinyl alcohol (enol), which tautomerizes to acetaldehyde. This is an important industrial process.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 550 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="160" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ACETYLENE HYDRATION (Industrial Process)</text>
			<text x="120" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="15">HC≡CH + H₂O</text>
			<text x="275" y="50" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="275" y="40" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">H⁺, Hg²⁺</text>
			<text x="400" y="50" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">[CH₂=CH-OH]</text>
			<text x="400" y="68" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">vinyl alcohol (enol)</text>
			<text x="275" y="95" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">↓ tautomerization</text>
			<text x="275" y="125" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="15" font-weight="bold">CH₃CHO (acetaldehyde)</text>
			<text x="275" y="145" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Can be oxidized to acetic acid (CH₃COOH)</text>
		</svg>`
	},
	{
		id: 6,
		question: "Which class of dienes has DOUBLE BONDS SEPARATED BY EXACTLY ONE SINGLE BOND?",
		options: ["Cumulated dienes", "Isolated dienes", "Conjugated dienes", "Aromatic dienes"],
		answer: "Conjugated dienes",
		explanation: "Conjugated dienes have alternating double-single-double bonds (C=C-C=C). This arrangement allows electron delocalization, making them more stable than isolated dienes.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="180" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">CLASSES OF DIENES</text>
			<text x="150" y="50" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11" font-weight="bold">CUMULATED</text>
			<text x="150" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₂=C=CH₂</text>
			<text x="150" y="88" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">1,2-Butadiene</text>
			<text x="150" y="103" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Neighboring double bonds</text>
			<text x="300" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">CONJUGATED ✓</text>
			<text x="300" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₂=CH-CH=CH₂</text>
			<text x="300" y="88" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">1,3-Butadiene</text>
			<text x="300" y="103" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Separated by ONE single bond</text>
			<text x="450" y="50" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11" font-weight="bold">ISOLATED</text>
			<text x="450" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₂=CH-CH₂-CH=CH₂</text>
			<text x="450" y="88" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">1,5-Hexadiene</text>
			<text x="450" y="103" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Separated by >1 single bonds</text>
			<text x="300" y="140" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12">Conjugated dienes: MORE STABLE due to delocalization</text>
			<text x="300" y="160" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Heat of hydrogenation: 54.1 kcal/mol (vs 60.8 for non-conjugated)</text>
		</svg>`
	},
	{
		id: 7,
		question: "What are the TWO types of addition products formed in electrophilic addition to conjugated dienes?",
		options: ["1,1-addition and 2,2-addition", "1,2-addition and 1,4-addition", "1,3-addition and 2,4-addition", "Markovnikov and anti-Markovnikov only"],
		answer: "1,2-addition and 1,4-addition",
		explanation: "Electrophilic addition to conjugated dienes yields a mixture: 1,2-addition (adjacent carbons) and 1,4-addition (ends of conjugated system) via an allylic cation intermediate.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="200" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ELECTROPHILIC ADDITION TO CONJUGATED DIENES</text>
			<text x="300" y="50" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₂=CH-CH=CH₂ + HBr</text>
			<text x="300" y="70" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="14">↓ forms allylic cation intermediate</text>
			<text x="150" y="100" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">1,2-ADDITION</text>
			<text x="150" y="120" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃-CHBr-CH=CH₂</text>
			<text x="150" y="138" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">3-bromo-1-butene</text>
			<text x="150" y="153" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Adjacent carbons (C1, C2)</text>
			<text x="450" y="100" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">1,4-ADDITION</text>
			<text x="450" y="120" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃-CH=CH-CH₂Br</text>
			<text x="450" y="138" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">1-bromo-2-butene</text>
			<text x="450" y="153" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Ends of system (C1, C4)</text>
			<text x="300" y="180" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Product ratio depends on temperature (kinetic vs thermodynamic control)</text>
		</svg>`
	},
	{
		id: 8,
		question: "How does heat of hydrogenation demonstrate the stability of conjugated dienes vs non-conjugated dienes?",
		options: [
			"Conjugated dienes release MORE heat (less stable)",
			"Conjugated dienes release LESS heat (more stable): 54.1 vs 60.8 kcal/mol",
			"Heat of hydrogenation is equal for both",
			"Non-conjugated dienes cannot be hydrogenated"
		],
		answer: "Conjugated dienes release LESS heat (more stable): 54.1 vs 60.8 kcal/mol",
		explanation: "Lower heat of hydrogenation indicates greater stability. Conjugated dienes (54.1 kcal/mol) are more stable than non-conjugated (60.8 kcal/mol) due to electron delocalization and hyperconjugation.",
		difficulty: "advanced",
		structureIllustration: `<svg viewBox="0 0 550 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="180" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">STABILITY VIA HEAT OF HYDROGENATION</text>
			<text x="150" y="55" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11" font-weight="bold">NON-CONJUGATED</text>
			<text x="150" y="75" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₂=CH-CH₂-CH=CH₂</text>
			<text x="150" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">+ 2H₂ → CH₃CH₂CH₂CH₂CH₃</text>
			<text x="150" y="120" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="14" font-weight="bold">ΔH = 60.8 kcal/mol</text>
			<text x="150" y="138" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Higher heat = LESS stable</text>
			<text x="400" y="55" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">CONJUGATED</text>
			<text x="400" y="75" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₂=CH-CH=CH-CH₃</text>
			<text x="400" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">+ 2H₂ → CH₃CH₂CH₂CH₂CH₃</text>
			<text x="400" y="120" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="14" font-weight="bold">ΔH = 54.1 kcal/mol</text>
			<text x="400" y="138" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Lower heat = MORE stable</text>
			<text x="275" y="165" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="11">Stability from: (a) Delocalization (b) Hyperconjugation</text>
		</svg>`
	},
	{
		id: 9,
		question: "What heavy metal ion forms INSOLUBLE acetylides when reacted with terminal alkynes?",
		options: ["Na⁺", "K⁺", "Ag⁺ (silver)", "Mg²⁺"],
		answer: "Ag⁺ (silver)",
		explanation: "Terminal alkynes are acidic and react with heavy metal ions like Ag⁺ to form insoluble metal acetylides. This is used as a test for terminal alkynes.",
		difficulty: "intermediate",
		reactionScheme: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">HEAVY METAL ACETYLIDE FORMATION</text>
			<text x="130" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">HC≡CH + 2Ag⁺</text>
			<text x="250" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="250" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">alcohol</text>
			<text x="380" y="60" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="14">AgC≡CAg + 2H⁺</text>
			<text x="380" y="78" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">silver acetylide (insoluble)</text>
			<text x="250" y="110" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Test for terminal alkynes: white precipitate forms</text>
			<text x="250" y="128" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Also reacts with alkali metals (Na) to liberate H₂ gas</text>
		</svg>`
	},
	{
		id: 10,
		question: "What are the FOUR common reactions of dienes listed in the lecture?",
		options: [
			"Hydrogenation, Ozonolysis, Glycol formation, Halogenation",
			"Combustion, Polymerization, Hydration, Decarboxylation",
			"Substitution, Elimination, Addition, Rearrangement",
			"Oxidation, Reduction, Hydrolysis, Condensation"
		],
		answer: "Hydrogenation, Ozonolysis, Glycol formation, Halogenation",
		explanation: "Dienes undergo: (1) Hydrogenation - adds H₂ across double bonds, (2) Ozonolysis - cleaves double bonds with O₃, (3) Glycol formation - adds OH groups, (4) Halogenation - adds X₂.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 550 200" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="200" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">REACTIONS OF DIENES</text>
			<rect x="30" y="45" width="120" height="60" fill="#1a1a2e" stroke="#00f2ff" stroke-width="1" rx="4"/>
			<text x="90" y="65" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11" font-weight="bold">1. HYDROGENATION</text>
			<text x="90" y="82" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">Adds H₂ across</text>
			<text x="90" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">double bonds</text>
			<rect x="160" y="45" width="120" height="60" fill="#1a1a2e" stroke="#bfff00" stroke-width="1" rx="4"/>
			<text x="220" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">2. OZONOLYSIS</text>
			<text x="220" y="82" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">Cleaves C=C with</text>
			<text x="220" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">O₃, then Zn/H₂O</text>
			<rect x="290" y="45" width="120" height="60" fill="#1a1a2e" stroke="#00ff00" stroke-width="1" rx="4"/>
			<text x="350" y="65" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">3. GLYCOL FORM</text>
			<text x="350" y="82" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">Adds -OH groups</text>
			<text x="350" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">to each carbon</text>
			<rect x="420" y="45" width="120" height="60" fill="#1a1a2e" stroke="#ff3e00" stroke-width="1" rx="4"/>
			<text x="480" y="65" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11" font-weight="bold">4. HALOGENATION</text>
			<text x="480" y="82" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">Adds X₂ (Cl₂, Br₂)</text>
			<text x="480" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="10">across double bonds</text>
			<text x="275" y="135" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Conjugated dienes also show 1,2- and 1,4-addition patterns</text>
			<text x="275" y="155" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Isolated dienes behave like simple alkenes</text>
			<text x="275" y="180" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="11">Note: Decarboxylation is NOT a typical diene reaction</text>
		</svg>`
	},
	{
		id: 11,
		question: "What is the general formula for alkynes?",
		options: ["CnH₂n", "CnH₂n₊₂", "CnH₂n₋₂", "CnHₙ"],
		answer: "CnH₂n₋₂",
		explanation: "Alkynes have the general formula CnH₂n₋₂, reflecting the presence of one triple bond which removes 4 hydrogens compared to the saturated alkane formula CnH₂n₊₂.",
		difficulty: "intermediate"
	},
	{
		id: 12,
		question: "What is the boiling point of ethyne (acetylene)?",
		options: ["−75°C", "−23°C", "9°C", "40°C"],
		answer: "−75°C",
		explanation: "Ethyne (acetylene) has a boiling point of −75°C and a melting point of −82°C. It is the simplest alkyne with formula C₂H₂.",
		difficulty: "intermediate"
	},
	{
		id: 13,
		question: "Why are alkynes more reactive than alkanes and alkenes?",
		options: [
			"They have longer bond lengths",
			"Shorter bond length and increased electron density at the triple bond",
			"They are more polar than alkenes",
			"They have sp³ hybridization"
		],
		answer: "Shorter bond length and increased electron density at the triple bond",
		explanation: "Alkynes are unstable and most reactive compared to alkanes and alkenes because of their shorter bond length and increased electron density at the triple bond, making them susceptible to electrophilic attack.",
		difficulty: "advanced"
	},
	{
		id: 14,
		question: "What is the difference between terminal and internal alkynes?",
		options: [
			"Terminal alkynes have a hydrogen bonded to an sp carbon; internal have other groups",
			"Terminal alkynes are more stable than internal alkynes",
			"Internal alkynes have triple bonds at the end of the chain",
			"There is no difference between them"
		],
		answer: "Terminal alkynes have a hydrogen bonded to an sp carbon; internal have other groups",
		explanation: "Terminal alkynes have a hydrogen atom bonded to at least one of the sp hybridized carbons (e.g., methyl acetylene). Internal alkynes have something other than hydrogen attached to the sp carbons (e.g., 2-pentyne).",
		difficulty: "intermediate"
	},
	{
		id: 15,
		question: "What alternative method produces acetylene from methane at 1500°C?",
		options: [
			"6CH₄ + O₂ → 2C₂H₂ + 2CO + 10H₂",
			"CH₄ + H₂O → C₂H₂ + 3H₂",
			"2CH₄ → C₂H₂ + 3H₂",
			"CH₄ + Cl₂ → C₂H₂ + 2HCl"
		],
		answer: "6CH₄ + O₂ → 2C₂H₂ + 2CO + 10H₂",
		explanation: "At 1500°C, methane reacts with oxygen to produce acetylene. CO and H₂ are important side products needed in the production of alcohol.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 550 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="140" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">ACETYLENE FROM METHANE (1500°C)</text>
			<text x="130" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">6CH₄ + O₂</text>
			<text x="275" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="275" y="52" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">1500°C</text>
			<text x="420" y="55" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13">2C₂H₂ + 2CO + 10H₂</text>
			<text x="420" y="75" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">CO and H₂ used in alcohol production</text>
			<text x="275" y="110" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Alternative to calcium carbide method</text>
		</svg>`
	},
	{
		id: 16,
		question: "What reagent is used for dehydrohalogenation of alkyl dihalides to form alkynes?",
		options: ["H₂SO₄", "KOH or NaNH₂", "NaBH₄", "Hg(OAc)₂"],
		answer: "KOH or NaNH₂",
		explanation: "Dehydrohalogenation of alkyl dihalides uses KOH or NaNH₂ to eliminate two HX molecules, forming the triple bond. This reaction is useful since dihalides are readily obtained from alkenes.",
		difficulty: "advanced"
	},
	{
		id: 17,
		question: "What is the IUPAC name for the diene commonly called 'divinyl'?",
		options: ["Propadiene", "1,3-Butadiene", "1,5-Hexadiene", "1,2-Butadiene"],
		answer: "1,3-Butadiene",
		explanation: "Divinyl is the common name for 1,3-butadiene (CH₂=CH-CH=CH₂), which is a conjugated diene. Other examples: allene = propadiene, diallyl = 1,5-hexadiene.",
		difficulty: "intermediate"
	},
	{
		id: 18,
		question: "How are dienes usually prepared?",
		options: [
			"By direct hydrogenation of alkanes",
			"By adaptations of methods used to make simple alkenes, such as catalytic cracking",
			"By halogenation of alkynes",
			"By hydration of alcohols only"
		],
		answer: "By adaptations of methods used to make simple alkenes, such as catalytic cracking",
		explanation: "Dienes are usually prepared by adaptations of the methods used to make simple alkenes, including catalytic cracking (dehydrogenation) and dehydration of diols.",
		difficulty: "intermediate"
	},
	{
		id: 19,
		question: "What three ways do conjugated dienes differ from simple alkenes?",
		options: [
			"They are less stable, favor 1,2-addition, and are less reactive",
			"They are more stable, favor 1,4-addition, and are more reactive toward free radical addition",
			"They have identical reactivity but different boiling points",
			"They cannot undergo addition reactions"
		],
		answer: "They are more stable, favor 1,4-addition, and are more reactive toward free radical addition",
		explanation: "Conjugated dienes differ from simple alkenes in three ways: (a) they are more stable due to delocalization, (b) they favor 1,4-addition over 1,2-addition, (c) toward free radical addition, they are more reactive.",
		difficulty: "advanced"
	},
	{
		id: 20,
		question: "What product forms when acetylene reacts with excess HCl followed by excess HI?",
		options: [
			"1,1-dichloroethane",
			"CH₃-C(Cl)(I)-CH₃ (geminal dihalide with Cl and I)",
			"1,2-dichloroethene",
			"Ethane"
		],
		answer: "CH₃-C(Cl)(I)-CH₃ (geminal dihalide with Cl and I)",
		explanation: "With excess hydrogen halides, a second addition occurs to the alkene product, giving a geminal dihalide. First HCl adds to form chloropropene, then HI adds to give the geminal dihalide with both Cl and I on the same carbon.",
		difficulty: "expert",
		reactionScheme: `<svg viewBox="0 0 550 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="160" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">EXCESS HX ADDITION TO ALKYNES</text>
			<text x="100" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃C≡CH + HCl</text>
			<text x="275" y="55" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="400" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃CCl=CH₂</text>
			<text x="275" y="85" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">+ HI →</text>
			<text x="400" y="85" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">CH₃-C(Cl)(I)-CH₃</text>
			<text x="400" y="103" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">geminal dihalide</text>
			<text x="275" y="135" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Second addition yields geminal dihalide</text>
			<text x="275" y="152" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="10">Both halogens on the same carbon</text>
		</svg>`
	}
];
