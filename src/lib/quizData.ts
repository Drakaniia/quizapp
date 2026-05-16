export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
}

export const quizData: Question[] = [
	{
		id: 1,
		question: "Which of the following describes a compound composed only of carbon and hydrogen?",
		options: ["Carbohydrate", "Hydrocarbon", "Hydrate", "Carbonate"],
		answer: "Hydrocarbon",
		explanation: "Hydrocarbons are organic compounds consisting entirely of hydrogen and carbon atoms."
	},
	{
		id: 2,
		question: "Hydrocarbons with only single bonds are classified as:",
		options: ["Unsaturated", "Aromatic", "Saturated", "Alkynes"],
		answer: "Saturated",
		explanation: "Saturated hydrocarbons have only single bonds between carbon atoms, meaning they are 'saturated' with hydrogen."
	},
	{
		id: 3,
		question: "Which type of hydrocarbon contains at least one double or triple bond?",
		options: ["Alkanes", "Saturated", "Unsaturated", "Paraffins"],
		answer: "Unsaturated",
		explanation: "Unsaturated hydrocarbons have double or triple bonds, which reduces the number of hydrogen atoms they can hold."
	},
	{
		id: 4,
		question: "Alkanes, Alkenes, and Alkynes are sub-classifications of which group?",
		options: ["Aromatic", "Aliphatic", "Cyclic", "Benzenoid"],
		answer: "Aliphatic",
		explanation: "Aliphatic hydrocarbons are open-chain or cyclic compounds that do not contain a benzene ring."
	},
	{
		id: 5,
		question: "What is the hybridization of carbon atoms in Alkanes?",
		options: ["sp", "sp²", "sp³", "dsp²"],
		answer: "sp³",
		explanation: "In alkanes, each carbon atom is bonded to four other atoms, resulting in sp³ hybridization."
	},
	{
		id: 6,
		question: "What is the characteristic bond angle in Alkanes?",
		options: ["90°", "120°", "180°", "109.5°"],
		answer: "109.5°",
		explanation: "The tetrahedral arrangement of sp³ hybridized carbons leads to bond angles of 109.5°."
	},
	{
		id: 7,
		question: "Which is the simplest alkane?",
		options: ["Ethane", "Methane", "Propane", "Butane"],
		answer: "Methane",
		explanation: "Methane (CH₄) is the smallest and simplest member of the alkane family."
	},
	{
		id: 8,
		question: "What is the molecular geometry of Methane?",
		options: ["Linear", "Trigonal Planar", "Tetrahedral", "Octahedral"],
		answer: "Tetrahedral",
		explanation: "Methane has a central carbon bonded to four hydrogen atoms at the corners of a tetrahedron."
	},
	{
		id: 9,
		question: "What is the boiling point of Methane?",
		options: ["0 °C", "−161.5 °C", "−183 °C", "100 °C"],
		answer: "−161.5 °C",
		explanation: "Methane has a very low boiling point of −161.5 °C, making it a gas at room temperature."
	},
	{
		id: 10,
		question: "Which intermolecular force is primarily responsible for the properties of methane?",
		options: ["Hydrogen bonding", "Ionic bonding", "Van der Waals forces", "Covalent bonding"],
		answer: "Van der Waals forces",
		explanation: "Methane is nonpolar, so it relies on weak Van der Waals (London dispersion) forces."
	},
	{
		id: 11,
		question: "Methane is insoluble in water. In which of the following is it soluble?",
		options: ["Alcohol", "Acetic acid", "Benzene", "Ammonia"],
		answer: "Benzene",
		explanation: "Methane is nonpolar and follows the 'like dissolves like' rule, being soluble in nonpolar solvents like benzene and gasoline."
	},
	{
		id: 12,
		question: "Which of the following is NOT a common name for methane?",
		options: ["Firedamp", "Marsh gas", "Biogas", "Synthesis gas"],
		answer: "Synthesis gas",
		explanation: "Common names for methane include Firedamp, Marsh gas, and Biogas. Synthesis gas (syngas) is a mixture of CO and H₂."
	},
	{
		id: 13,
		question: "How can methane be prepared in the laboratory?",
		options: ["Burning coal", "Heating sodium acetate with sodium hydroxide", "Reacting methane with chlorine", "Distillation of air"],
		answer: "Heating sodium acetate with sodium hydroxide",
		explanation: "The decarboxylation of sodium acetate using soda lime (NaOH + CaO) is a standard lab method."
	},
	{
		id: 14,
		question: "The reaction of aluminum carbide (Al₄C₃) with water produces:",
		options: ["Ethane", "Acetylene", "Methane", "Carbon dioxide"],
		answer: "Methane",
		explanation: "Aluminum carbide reacts with water to release methane gas: Al₄C₃ + 12H₂O → 4Al(OH)₃ + 3CH₄."
	},
	{
		id: 15,
		question: "What are the products of the complete combustion of methane?",
		options: ["CO and H₂O", "CO₂ and H₂O", "C and H₂", "CH₃OH and H₂O"],
		answer: "CO₂ and H₂O",
		explanation: "Complete combustion in excess oxygen yields carbon dioxide, water, and heat."
	},
	{
		id: 16,
		question: "How much heat is released in the complete combustion of one mole of methane?",
		options: ["100 kcal", "213 kcal", "500 kcal", "850 kcal"],
		answer: "213 kcal",
		explanation: "The reaction is highly exothermic, releasing 213 kcal of energy."
	},
	{
		id: 17,
		question: "Incomplete combustion of methane produces which of the following?",
		options: ["Carbon dioxide", "Methanol", "Soot (Carbon monoxide)", "Formaldehyde"],
		answer: "Soot (Carbon monoxide)",
		explanation: "When oxygen is limited, methane burns to produce carbon monoxide and carbon (soot)."
	},
	{
		id: 18,
		question: "What catalyst is used in the manufacture of methanol from methane at 850°C?",
		options: ["Platinum", "Iron", "Nickel", "Copper"],
		answer: "Nickel",
		explanation: "Nickel is used as a catalyst in the steam reforming/partial oxidation process to create synthesis gas and alcohols."
	},
	{
		id: 19,
		question: "What is the correct reactivity order of halogens with methane?",
		options: ["I₂ > Br₂ > Cl₂ > F₂", "F₂ > Cl₂ > Br₂ > I₂", "Cl₂ > F₂ > Br₂ > I₂", "Br₂ > Cl₂ > F₂ > I₂"],
		answer: "F₂ > Cl₂ > Br₂ > I₂",
		explanation: "Fluorine is the most reactive (often explosive), while Iodine is the least reactive."
	},
	{
		id: 20,
		question: "Which condition is required for the halogenation of methane to occur?",
		options: ["Darkness", "Low temperature", "UV light or >250°C", "High pressure only"],
		answer: "UV light or >250°C",
		explanation: "Energy is needed to initiate the reaction by breaking the halogen-halogen bond."
	},
	{
		id: 21,
		question: "The first step of the methane chlorination mechanism is:",
		options: ["Chain Propagation", "Chain Termination", "Chain Initiation", "Hydrogen Abstraction"],
		answer: "Chain Initiation",
		explanation: "Initiation involves the homolytic cleavage of the Cl-Cl bond by UV light to form free radicals."
	},
	{
		id: 22,
		question: "What is a 'free radical' in the context of halogenation?",
		options: ["A stable molecule", "A charged ion", "An atom/molecule with an unpaired electron", "A catalyst"],
		answer: "An atom/molecule with an unpaired electron",
		explanation: "Free radicals are highly reactive species produced by the initiation step."
	},
	{
		id: 23,
		question: "Which of the following is a termination step in chlorination?",
		options: ["Cl₂ → 2•Cl", "CH₄ + •Cl → •CH₃ + HCl", "2•Cl → Cl₂", "•CH₃ + Cl₂ → CH₃Cl + •Cl"],
		answer: "2•Cl → Cl₂",
		explanation: "Termination occurs when two radicals combine to form a stable molecule, ending the chain."
	},
	{
		id: 24,
		question: "What is the common name for CHCl₃?",
		options: ["Methyl chloride", "Methylene chloride", "Chloroform", "Carbon tetrachloride"],
		answer: "Chloroform",
		explanation: "Trichloromethane is widely known as chloroform."
	},
	{
		id: 25,
		question: "Which halogenated derivative of methane is a gas at room temperature?",
		options: ["CH₃Cl", "CH₂Cl₂", "CHCl₃", "CCl₄"],
		answer: "CH₃Cl",
		explanation: "Methyl chloride (CH₃Cl) has a boiling point of −24.2 °C, making it a gas."
	},
	{
		id: 26,
		question: "Why did the EPA ban certain CFCs in aerosols in 1978?",
		options: ["Toxicity", "Flammability", "Ozone layer depletion", "High cost"],
		answer: "Ozone layer depletion",
		explanation: "CFCs were found to release chlorine atoms in the stratosphere, which catalyze the destruction of ozone."
	},
	{
		id: 27,
		question: "What were Chlorofluorocarbons (CFCs) primarily used for before the 1978 ban?",
		options: ["Food additives", "Aerosol propellants", "Fertilizers", "Medicines"],
		answer: "Aerosol propellants",
		explanation: "CFCs like Freon were used in hair sprays and antiperspirants due to their inertness and low boiling points."
	},
	{
		id: 28,
		question: "Which of these is a source of methane?",
		options: ["Distillation of bituminous coal", "Decayed plants", "Aluminum carbide and water", "All of the above"],
		answer: "All of the above",
		explanation: "Methane is found in nature from decay and coal, and can be synthesized from carbides."
	}
];
