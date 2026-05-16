export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty?: 'intermediate' | 'advanced' | 'expert';
	structureIllustration?: string;
	reactionScheme?: string;
}

export const quizData3: Question[] = [
	{
		id: 1,
		question: "What is the hybridization and geometry of carbon atoms in alkenes?",
		options: ["sp³, tetrahedral (109.5°)", "sp², trigonal planar (120°)", "sp, linear (180°)", "dsp², square planar (90°)"],
		answer: "sp², trigonal planar (120°)",
		explanation: "Alkenes have sp² hybridized carbons at the double bond, with trigonal planar geometry and 120° bond angles. The C=C bond restricts rotation, enabling geometric isomerism.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg">
			<rect width="450" height="200" fill="#1a1a1a" rx="8"/>
			<text x="225" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">ALKENE: sp² HYBRIDIZATION (ETHENE)</text>
			<text x="100" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">H</text>
			<line x1="115" y1="70" x2="160" y2="70" stroke="#e0e0e0" stroke-width="2"/>
			<line x1="160" y1="65" x2="290" y2="65" stroke="#00f2ff" stroke-width="2"/>
			<line x1="160" y1="75" x2="290" y2="75" stroke="#00f2ff" stroke-width="2"/>
			<line x1="290" y1="70" x2="335" y2="70" stroke="#e0e0e0" stroke-width="2"/>
			<text x="350" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">H</text>
			<line x1="160" y1="70" x2="130" y2="110" stroke="#e0e0e0" stroke-width="2"/>
			<line x1="290" y1="70" x2="320" y2="110" stroke="#e0e0e0" stroke-width="2"/>
			<text x="120" y="125" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">H</text>
			<text x="330" y="125" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="16">H</text>
			<text x="225" y="55" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="11">C=C double bond</text>
			<text x="225" y="155" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="13">Bond angle: 120° (trigonal planar)</text>
			<text x="225" y="175" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">1 σ bond + 1 π bond | Restricted rotation</text>
			<text x="225" y="192" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">General formula: CnH₂n</text>
		</svg>`
	},
	{
		id: 2,
		question: "What is the ease order of dehydrohalogenation of alkyl halides?",
		options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "All react equally"],
		answer: "3° > 2° > 1°",
		explanation: "Tertiary alkyl halides undergo dehydrohalogenation most easily because the transition state leading to the more substituted (Zaitsev) alkene is more stable. This follows the stability of the developing double bond.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="180" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">DEHYDROHALOGENATION: EASE OF REACTION</text>
			<text x="300" y="50" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16" font-weight="bold">3° > 2° > 1°</text>
			<text x="150" y="80" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">3° (EASIEST)</text>
			<text x="150" y="98" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">(CH₃)₃C-Cl + KOH</text>
			<text x="150" y="113" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">tert-butyl chloride</text>
			<text x="300" y="80" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="11" font-weight="bold">2°</text>
			<text x="300" y="98" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">CH₃CHClCH₃ + KOH</text>
			<text x="300" y="113" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">sec-propyl chloride</text>
			<text x="450" y="80" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11" font-weight="bold">1° (HARDEST)</text>
			<text x="450" y="98" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="11">CH₃CH₂CH₂Cl + KOH</text>
			<text x="450" y="113" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">n-propyl chloride</text>
			<text x="300" y="145" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Elimination reaction: loss of HX to form C=C</text>
			<text x="300" y="165" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">KOH (alcoholic) abstracts β-hydrogen</text>
		</svg>`
	},
	{
		id: 3,
		question: "In the dehydration of sec-butyl alcohol with H₂SO₄, what is the chief product?",
		options: ["1-butene (20%)", "2-butene (80%)", "Equal mixture of both", "Butane"],
		answer: "2-butene (80%)",
		explanation: "Following Zaitsev's rule, the more substituted alkene (2-butene) is the major product. The acid catalyst (H₂SO₄) promotes elimination of water from the alcohol.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="180" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">DEHYDRATION OF SEC-BUTYL ALCOHOL</text>
			<text x="150" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃CH₂CH(OH)CH₃</text>
			<text x="150" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">sec-butyl alcohol</text>
			<text x="300" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="300" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">H₂SO₄, Δ</text>
			<text x="450" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">CH₃CH=CHCH₃</text>
			<text x="450" y="68" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">2-butene (80%) ✓</text>
			<text x="450" y="90" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="12">CH₃CH₂CH=CH₂</text>
			<text x="450" y="108" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="11">1-butene (20%)</text>
			<text x="300" y="135" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Mechanism: (1) Protonation (2) Carbocation (3) H⁺ loss</text>
			<text x="300" y="155" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Zaitsev's rule: More substituted alkene = major product</text>
			<text x="300" y="172" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Ease of dehydration: 3° > 2° > 1°</text>
		</svg>`
	},
	{
		id: 4,
		question: "What is the difference in boiling points between cis-2-butene and trans-2-butene?",
		options: ["cis has lower b.p. (1°C) than trans (3.7°C)", "cis has higher b.p. (3.7°C) than trans (1°C)", "Both have identical boiling points", "Trans has a much higher b.p. than cis"],
		answer: "cis has higher b.p. (3.7°C) than trans (1°C)",
		explanation: "The cis isomer has a net dipole moment (polar), leading to stronger intermolecular forces and a higher boiling point. The trans isomer is nonpolar (dipoles cancel).",
		difficulty: "advanced",
		structureIllustration: `<svg viewBox="0 0 550 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="180" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">GEOMETRIC ISOMERS: BOILING POINTS</text>
			<text x="150" y="55" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12" font-weight="bold">CIS-2-BUTENE</text>
			<text x="150" y="75" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CH₃    CH₃</text>
			<text x="150" y="90" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  \\    /</text>
			<text x="150" y="105" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">   C=C</text>
			<text x="150" y="120" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  /    \\</text>
			<text x="150" y="135" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12"> H      H</text>
			<text x="150" y="160" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="14" font-weight="bold">b.p. = 3.7°C</text>
			<text x="150" y="175" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Net dipole (polar)</text>
			<text x="400" y="55" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12" font-weight="bold">TRANS-2-BUTENE</text>
			<text x="400" y="75" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CH₃    H</text>
			<text x="400" y="90" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  \\    /</text>
			<text x="400" y="105" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">   C=C</text>
			<text x="400" y="120" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  /    \\</text>
			<text x="400" y="135" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12"> H    CH₃</text>
			<text x="400" y="160" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="14" font-weight="bold">b.p. = 1°C</text>
			<text x="400" y="175" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">No net dipole (nonpolar)</text>
		</svg>`
	},
	{
		id: 5,
		question: "What does Markovnikov's rule predict in the addition of HBr to propene?",
		options: [
			"H adds to the carbon with fewer H atoms",
			"H adds to the carbon with more H atoms; Br adds to the more substituted carbon",
			"Br adds to both carbons equally",
			"No reaction occurs"
		],
		answer: "H adds to the carbon with more H atoms; Br adds to the more substituted carbon",
		explanation: "Markovnikov's rule: In addition of HX to an alkene, H attaches to the carbon with more hydrogens, and X attaches to the more substituted carbon, forming the more stable carbocation intermediate.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="180" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">MARKOVNIKOV ADDITION: PROPENE + HBr</text>
			<text x="150" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₃-CH=CH₂ + HBr</text>
			<text x="150" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">propene</text>
			<text x="300" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="300" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">no peroxides</text>
			<text x="450" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">CH₃-CHBr-CH₃</text>
			<text x="450" y="68" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">2-bromopropane (major)</text>
			<text x="450" y="83" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">(Isopropyl bromide)</text>
			<text x="300" y="105" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="300" y="93" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">with peroxides</text>
			<text x="450" y="110" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="13">CH₃-CH₂-CH₂Br</text>
			<text x="450" y="128" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">1-bromopropane (anti-Markovnikov)</text>
			<text x="300" y="155" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Mechanism: Carbocation intermediate (Markovnikov)</text>
			<text x="300" y="172" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Free radical mechanism (Anti-Markovnikov with peroxides)</text>
		</svg>`
	},
	{
		id: 6,
		question: "What is the reactivity order of hydrogen halides (HX) with alkenes?",
		options: ["HCl > HBr > HI", "HI > HBr > HCl", "HBr > HCl > HI", "All react equally"],
		answer: "HI > HBr > HCl",
		explanation: "Reactivity increases with decreasing bond strength of H-X. HI has the weakest bond (most reactive), while HCl has the strongest bond (least reactive).",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">HYDROGEN HALIDE REACTIVITY WITH ALKENES</text>
			<text x="250" y="60" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">C=C + HX → H-C-C-X</text>
			<text x="250" y="95" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="20" font-weight="bold">HI > HBr > HCl</text>
			<text x="120" y="120" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">HI: Most reactive</text>
			<text x="250" y="120" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="11">HBr: Moderate</text>
			<text x="380" y="120" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">HCl: Least reactive</text>
		</svg>`
	},
	{
		id: 7,
		question: "What product forms when propene undergoes catalytic hydrogenation (H₂, Ni)?",
		options: ["Propane", "Propyne", "2-propanol", "1,2-dibromopropane"],
		answer: "Propane",
		explanation: "Catalytic hydrogenation adds H₂ across the C=C double bond, converting the alkene to the corresponding alkane. Propene (C₃H₆) becomes propane (C₃H₈).",
		difficulty: "intermediate",
		reactionScheme: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">CATALYTIC HYDROGENATION OF PROPENE</text>
			<text x="120" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="15">CH₃-CH=CH₂</text>
			<text x="120" y="82" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">propene</text>
			<text x="250" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">+</text>
			<text x="250" y="50" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11">H₂</text>
			<text x="250" y="82" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">Ni, Pt, or Pd</text>
			<text x="250" y="100" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="380" y="65" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="15" font-weight="bold">CH₃-CH₂-CH₃</text>
			<text x="380" y="82" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">propane</text>
			<text x="250" y="125" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Addition of H₂ to multiple bond yields alkane</text>
		</svg>`
	},
	{
		id: 8,
		question: "What is the product of oxymercuration-demercuration of 2-methyl-1-butene?",
		options: ["2-methyl-2-butanol", "2-methyl-1-butanol", "tert-pentyl alcohol (2-methyl-2-butanol)", "3-methyl-2-butanol"],
		answer: "tert-pentyl alcohol (2-methyl-2-butanol)",
		explanation: "Oxymercuration-demercuration follows Markovnikov orientation without rearrangement. Hg(OAc)₂ adds OH to the more substituted carbon, then NaBH₄ replaces HgOAc with H.",
		difficulty: "expert",
		reactionScheme: `<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="160" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">OXYMERCURATION-DEMERCURATION</text>
			<text x="130" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="13">CH₃CH₂C(CH₃)=CH₂</text>
			<text x="130" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">2-methyl-1-butene</text>
			<text x="300" y="55" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="300" y="43" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="9">(1) Hg(OAc)₂, H₂O</text>
			<text x="300" y="68" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="300" y="80" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="9">(2) NaBH₄</text>
			<text x="470" y="55" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="13" font-weight="bold">CH₃CH₂C(OH)(CH₃)CH₃</text>
			<text x="470" y="72" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">tert-pentyl alcohol</text>
			<text x="470" y="87" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">2-methyl-2-butanol</text>
			<text x="300" y="115" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Markovnikov orientation, NO carbocation rearrangement</text>
			<text x="300" y="135" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Advantage over acid-catalyzed hydration: no rearrangements</text>
			<text x="300" y="152" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Oxymercuration: adds -OH and -HgOAc | Demercuration: replaces -HgOAc with -H</text>
		</svg>`
	},
	{
		id: 9,
		question: "What is the product when cis-2-butene reacts with Cl₂ and H₂O (halohydrin formation)?",
		options: ["erythro-3-chloro-2-butanol", "threo-3-chloro-2-butanol", "2,3-dichlorobutane", "2-chlorobutane"],
		answer: "threo-3-chloro-2-butanol",
		explanation: "Halohydrin formation is stereospecific (anti addition). cis-2-butene gives the threo product, while trans-2-butene gives the erythro product, following Markovnikov rule.",
		difficulty: "expert",
		structureIllustration: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
			<rect width="600" height="200" fill="#1a1a1a" rx="8"/>
			<text x="300" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">HALOHYDRIN FORMATION: STEREOSPECIFIC</text>
			<text x="150" y="50" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="11" font-weight="bold">CIS-2-BUTENE + Cl₂, H₂O</text>
			<text x="150" y="70" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CH₃    CH₃</text>
			<text x="150" y="85" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  \\    /</text>
			<text x="150" y="100" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">   C=C</text>
			<text x="150" y="115" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  /    \\</text>
			<text x="150" y="130" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12"> H      H</text>
			<text x="300" y="90" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="300" y="78" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="9">Cl₂, H₂O</text>
			<text x="450" y="60" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">THREO PRODUCT</text>
			<text x="450" y="80" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">CH₃    CH₃</text>
			<text x="450" y="95" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  |      |</text>
			<text x="450" y="110" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12"> H-C    C-H</text>
			<text x="450" y="125" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">  |      |</text>
			<text x="450" y="140" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12"> OH     Cl</text>
			<text x="450" y="160" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">threo-3-chloro-2-butanol</text>
			<text x="300" y="180" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Anti addition: Cl and OH add from opposite sides</text>
			<text x="300" y="195" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="10">Trans-2-butene → erythro product (stereospecific)</text>
		</svg>`
	},
	{
		id: 10,
		question: "Which natural source of alkenes acts as a plant hormone for fruit ripening?",
		options: ["Terpenes", "Ethylene (ethene)", "Isoprene", "β-carotene"],
		answer: "Ethylene (ethene)",
		explanation: "Ethylene (H₂C=CH₂) is a natural plant hormone that promotes fruit ripening. Terpenes are found in essential oils. Both are isolated from petroleum and plant materials.",
		difficulty: "intermediate",
		structureIllustration: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">NATURAL SOURCES OF ALKENES</text>
			<text x="150" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="14" font-weight="bold">H₂C=CH₂</text>
			<text x="150" y="78" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">Ethylene (Ethene)</text>
			<text x="150" y="98" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11">Natural ripening agent</text>
			<text x="150" y="113" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Plant hormone</text>
			<text x="350" y="60" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="14">Terpenes</text>
			<text x="350" y="78" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">Found in essential oils</text>
			<text x="350" y="98" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Isolated from plant material</text>
			<text x="350" y="113" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Also from petroleum</text>
			<text x="250" y="132" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">Alkenes: colorless gases, lighter than water, insoluble in water</text>
		</svg>`
	},
	{
		id: 11,
		question: "What is another name for alkenes, derived from their fat-dissolving property?",
		options: ["Paraffins", "Olefins", "Aromatics", "Naphthenes"],
		answer: "Olefins",
		explanation: "Alkenes are also called olefins, which means 'fat dissolving'. This name reflects their ability to dissolve fats and oils due to their nonpolar nature.",
		difficulty: "intermediate"
	},
	{
		id: 12,
		question: "What polymer is made from tetrafluoroethene (F₂C=CF₂)?",
		options: ["Polyethylene", "PVC (polyvinyl chloride)", "PTFE (Teflon)", "Polystyrene"],
		answer: "PTFE (Teflon)",
		explanation: "Tetrafluoroethene polymerizes to form polytetrafluoroethene (PTFE), commonly known as Teflon. It is used for coatings and gaskets due to its non-stick properties.",
		difficulty: "intermediate"
	},
	{
		id: 13,
		question: "What are the FOUR preparation methods for alkenes?",
		options: [
			"Dehydrohalogenation, Dehydration, Dehalogenation, Reduction of alkynes",
			"Hydrogenation, Hydration, Halogenation, Polymerization",
			"Combustion, Substitution, Addition, Elimination",
			"Oxidation, Reduction, Hydrolysis, Condensation"
		],
		answer: "Dehydrohalogenation, Dehydration, Dehalogenation, Reduction of alkynes",
		explanation: "Alkenes are prepared by: (1) Dehydrohalogenation of alkyl halides, (2) Dehydration of alcohols, (3) Dehalogenation of vicinal dihalides, (4) Reduction of alkynes.",
		difficulty: "intermediate"
	},
	{
		id: 14,
		question: "What is the ease order of dehydration of alcohols?",
		options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "All react equally"],
		answer: "3° > 2° > 1°",
		explanation: "Tertiary alcohols dehydrate most easily, followed by secondary, then primary. This order reflects the stability of the carbocation intermediate formed during the reaction.",
		difficulty: "advanced"
	},
	{
		id: 15,
		question: "What are the three steps in the mechanism of alcohol dehydration?",
		options: [
			"(1) Protonation of alcohol, (2) Formation of carbonium ion + water, (3) Loss of H⁺ to form alkene",
			"(1) Deprotonation, (2) Carbocation formation, (3) Nucleophilic attack",
			"(1) Oxidation, (2) Reduction, (3) Elimination",
			"(1) Addition, (2) Substitution, (3) Rearrangement"
		],
		answer: "(1) Protonation of alcohol, (2) Formation of carbonium ion + water, (3) Loss of H⁺ to form alkene",
		explanation: "The mechanism of alcohol dehydration involves: Step 1 - Alcohol unites with H⁺ to form protonated alcohol. Step 2 - Alcohol dissociates into water and carbonium ion. Step 3 - The carbonium ion loses H⁺ to form the alkene.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 550 180" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="180" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">MECHANISM OF ALCOHOL DEHYDRATION</text>
			<text x="275" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="12">Step 1: R-OH + H⁺ → R-OH₂⁺ (protonated alcohol)</text>
			<text x="275" y="80" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="12">Step 2: R-OH₂⁺ → R⁺ + H₂O (carbonium ion)</text>
			<text x="275" y="110" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="12">Step 3: R⁺ → C=C + H⁺ (alkene formed)</text>
			<text x="275" y="145" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Acid catalyst (H₂SO₄) serves as H⁺ donor</text>
			<text x="275" y="165" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="11">Ease of dehydration: 3° > 2° > 1°</text>
		</svg>`
	},
	{
		id: 16,
		question: "What product forms when 2,3-dibromobutane reacts with Zn (dehalogenation)?",
		options: ["Butane", "2-butene", "1-butyne", "2,3-dibromobutane stays unchanged"],
		answer: "2-butene",
		explanation: "Dehalogenation of vicinal dihalides with zinc removes the two halogen atoms from adjacent carbons, forming a double bond. 2,3-dibromobutane yields 2-butene + ZnBr₂.",
		difficulty: "advanced",
		reactionScheme: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
			<rect width="500" height="140" fill="#1a1a1a" rx="8"/>
			<text x="250" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">DEHALOGENATION OF VICINAL DIHALIDES</text>
			<text x="120" y="65" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="14">CH₃CHBrCHBrCH₃</text>
			<text x="120" y="82" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">2,3-dibromobutane</text>
			<text x="250" y="65" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">+</text>
			<text x="250" y="50" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="12">Zn</text>
			<text x="250" y="82" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="16">→</text>
			<text x="380" y="55" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="14" font-weight="bold">CH₃CH=CHCH₃</text>
			<text x="380" y="73" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">2-butene</text>
			<text x="380" y="93" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">+ ZnBr₂</text>
			<text x="250" y="125" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Vicinal = halogens on adjacent carbons</text>
		</svg>`
	},
	{
		id: 17,
		question: "What polymer is produced from styrene (H₂C=CHC₆H₅)?",
		options: ["Polyethylene", "PVC", "Polystyrene (Styron)", "PTFE (Teflon)"],
		answer: "Polystyrene (Styron)",
		explanation: "Styrene polymerizes to form polystyrene (also called Styron), which is used for foam packaging and other applications. The phenyl group (C₆H₅) gives polystyrene its characteristic properties.",
		difficulty: "intermediate"
	},
	{
		id: 18,
		question: "What does hydroboration-oxidation of an alkene produce?",
		options: [
			"Markovnikov alcohol",
			"Anti-Markovnikov alcohol (OH adds to less substituted carbon)",
			"Vicinal dihalide",
			"Alkane"
		],
		answer: "Anti-Markovnikov alcohol (OH adds to less substituted carbon)",
		explanation: "Hydroboration-oxidation is a two-step process that adds water across a double bond with anti-Markovnikov orientation. The OH group ends up on the less substituted carbon, opposite to acid-catalyzed hydration.",
		difficulty: "expert"
	},
	{
		id: 19,
		question: "What are the possible fates of a carbocation intermediate?",
		options: [
			"Only combine with a negative ion",
			"Combine with anion, rearrange, eliminate H⁺, add to alkene, or abstract hydride",
			"Only eliminate to form an alkene",
			"Only rearrange to a more stable carbocation"
		],
		answer: "Combine with anion, rearrange, eliminate H⁺, add to alkene, or abstract hydride",
		explanation: "A carbocation may: (a) combine with a negative ion, (b) rearrange to a more stable carbocation, (c) eliminate H⁺ to form an alkene, (d) add to an alkene to form a larger carbocation, (e) abstract a hydride ion from an alkane.",
		difficulty: "advanced"
	},
	{
		id: 20,
		question: "What product forms when isobutylene undergoes dimerization with H₂SO₄?",
		options: [
			"2,4,4-trimethyl-1-pentene and 2,4,4-trimethyl-2-pentene",
			"Octane",
			"2-methylpropane",
			"Isobutane"
		],
		answer: "2,4,4-trimethyl-1-pentene and 2,4,4-trimethyl-2-pentene",
		explanation: "Dimerization of isobutylene (two isobutylene units combine) with H₂SO₄ produces a mixture of 2,4,4-trimethyl-1-pentene and 2,4,4-trimethyl-2-pentene. The product contains exactly twice the number of C and H atoms as the original.",
		difficulty: "expert",
		reactionScheme: `<svg viewBox="0 0 550 160" xmlns="http://www.w3.org/2000/svg">
			<rect width="550" height="160" fill="#1a1a1a" rx="8"/>
			<text x="275" y="25" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="12" font-weight="bold">DIMERIZATION OF ISOBUTYLENE</text>
			<text x="130" y="55" text-anchor="middle" fill="#e0e0e0" font-family="JetBrains Mono" font-size="12">2 × (CH₃)₂C=CH₂</text>
			<text x="130" y="72" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="10">isobutylene</text>
			<text x="275" y="60" text-anchor="middle" fill="#bfff00" font-family="JetBrains Mono" font-size="18">→</text>
			<text x="275" y="48" text-anchor="middle" fill="#ff3e00" font-family="JetBrains Mono" font-size="10">H₂SO₄</text>
			<text x="420" y="50" text-anchor="middle" fill="#00ff00" font-family="JetBrains Mono" font-size="11" font-weight="bold">2,4,4-trimethyl-2-pentene</text>
			<text x="420" y="70" text-anchor="middle" fill="#ff9900" font-family="JetBrains Mono" font-size="11">+ 2,4,4-trimethyl-1-pentene</text>
			<text x="275" y="105" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Dimer = product has 2× the C & H of original</text>
			<text x="275" y="125" text-anchor="middle" fill="#888" font-family="JetBrains Mono" font-size="11">Mechanism: tert-butyl cation adds to isobutylene</text>
			<text x="275" y="145" text-anchor="middle" fill="#00f2ff" font-family="JetBrains Mono" font-size="10">Forms more stable tertiary cation intermediate</text>
		</svg>`
	}
];
