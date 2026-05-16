export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
}

export const quizData2: Question[] = [
	{
		id: 1,
		question: "What is the general formula for alkynes?",
		options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n-4"],
		answer: "CnH2n-2",
		explanation: "Alkynes contain at least one triple bond between two adjacent carbons and follow the general formula CnH2n-2."
	},
	{
		id: 2,
		question: "What type of hybrid orbital do carbon atoms in alkynes have?",
		options: ["sp³", "sp²", "sp", "dsp²"],
		answer: "sp",
		explanation: "Alkynes contain carbon atoms with sp hybrid orbitals (2 p orbitals & 2 sp hybrid orbitals)."
	},
	{
		id: 3,
		question: "Are alkynes soluble in water?",
		options: ["Yes, highly soluble", "No, they are insoluble", "Only at high temperatures", "Only terminal alkynes"],
		answer: "No, they are insoluble",
		explanation: "Alkynes are insoluble in water due to their low polarity, but are soluble in solvents of low polarity like ligroin, ether, benzene and CCl₄."
	},
	{
		id: 4,
		question: "How does the density of alkynes compare to water?",
		options: ["More dense", "Less dense", "Equal density", "Varies by temperature"],
		answer: "Less dense",
		explanation: "Alkynes are less dense than water, which is a characteristic physical property of these hydrocarbons."
	},
	{
		id: 5,
		question: "Why are alkynes more reactive than alkanes and alkenes?",
		options: ["Longer bond length", "Shorter bond length & increased electron density", "Lower molecular weight", "Higher boiling points"],
		answer: "Shorter bond length & increased electron density",
		explanation: "Alkynes are unstable and most reactive compared to alkanes and alkenes because of their shorter bond length and increased electron density."
	},
	{
		id: 6,
		question: "What characterizes a terminal alkyne?",
		options: ["Has a benzene ring", "Has a hydrogen atom bonded to an sp hybridized carbon", "Has only internal triple bonds", "Contains a heteroatom"],
		answer: "Has a hydrogen atom bonded to an sp hybridized carbon",
		explanation: "Terminal alkynes have a hydrogen atom bonded to at least one of the sp hybridized carbons involved in the triple bond, such as methyl acetylene."
	},
	{
		id: 7,
		question: "What is an example of an internal alkyne?",
		options: ["Methyl acetylene", "Ethyne", "2-pentyne", "Propyne"],
		answer: "2-pentyne",
		explanation: "Internal alkynes have something other than hydrogen attached to the sp hybridized carbons, usually carbon atoms. 2-pentyne is an example."
	},
	{
		id: 8,
		question: "What is produced when calcium carbide (CaC₂) reacts with water?",
		options: ["Methane", "Ethane", "Acetylene (HC≡CH)", "Propyne"],
		answer: "Acetylene (HC≡CH)",
		explanation: "The reaction CaC₂ + 2H₂O → HC≡CH produces acetylene, which is a common laboratory preparation method."
	},
	{
		id: 9,
		question: "What type of reaction is dehydrohalogenation of alkyl dihalides?",
		options: ["Addition reaction", "Substitution reaction", "Elimination reaction", "Oxidation reaction"],
		answer: "Elimination reaction",
		explanation: "Dehydrohalogenation of alkyl dihalides is an elimination reaction that removes halogen atoms to form alkynes."
	},
	{
		id: 10,
		question: "What reagent is commonly used for dehydrohalogenation to form alkynes?",
		options: ["H₂SO₄", "KOH or NaNH₂", "HCl", "Br₂"],
		answer: "KOH or NaNH₂",
		explanation: "Strong bases like KOH or NaNH₂ are used to remove HX from dihalides to form alkynes through elimination."
	},
	{
		id: 11,
		question: "Why is the reaction of sodium acetylides limited to primary alkyl halides?",
		options: ["Primary halides are cheaper", "Secondary and tertiary halides undergo elimination", "Primary halides are more stable", "Secondary halides don't react"],
		answer: "Secondary and tertiary halides undergo elimination",
		explanation: "The reaction is limited to primary halides because secondary and tertiary halides tend to undergo a side reaction (elimination) instead of substitution."
	},
	{
		id: 12,
		question: "What catalyst is used in the addition of hydrogen to alkynes?",
		options: ["Platinum", "Ni, Pd, or Li in NH₃", "Iron", "Copper"],
		answer: "Ni, Pd, or Li in NH₃",
		explanation: "Catalysts like Ni, Pd/NiBr, or Na/Li in NH₃ are used to add hydrogen to alkynes, converting them to alkenes or alkanes."
	},
	{
		id: 13,
		question: "What product forms when acetylene reacts with Br₂?",
		options: ["Ethane", "1,2-dibromoethene", "Bromopropene", "Ethanol"],
		answer: "1,2-dibromoethene",
		explanation: "Acetylene reacts with halogens like Br₂ through halogenation to form 1,2-dibromoethene."
	},
	{
		id: 14,
		question: "What is formed when water is added to acetylene in the presence of H⁺ and Hg²⁺?",
		options: ["Ethanol", "Acetaldehyde", "Acetic acid", "Ethylene"],
		answer: "Acetaldehyde",
		explanation: "The hydration of acetylene forms acetaldehyde, which can be oxidized to acetic acid. This is an extremely important industrial process."
	},
	{
		id: 15,
		question: "What type of metal forms insoluble acetylides with acetylene?",
		options: ["Alkali metals", "Heavy metals like Ag⁺", "Transition metals", "Alkaline earth metals"],
		answer: "Heavy metals like Ag⁺",
		explanation: "Acidic acetylene reacts with certain heavy metals such as silver (Ag⁺) to form insoluble acetylides."
	},
	{
		id: 16,
		question: "What is liberated when acetylene reacts with sodium?",
		options: ["Oxygen gas", "Hydrogen gas", "Nitrogen gas", "Carbon dioxide"],
		answer: "Hydrogen gas",
		explanation: "The reaction HC≡C-H + Na → HC≡C⁻Na⁺ + ½H₂ liberates hydrogen gas and forms sodium acetylide."
	},
	{
		id: 17,
		question: "How many double bonds do dienes contain?",
		options: ["One", "Two", "Three", "Four"],
		answer: "Two",
		explanation: "Dienes are hydrocarbons which contain two double bonds and are intermediate between alkanes and polyenes."
	},
	{
		id: 18,
		question: "What characterizes cumulated dienes?",
		options: ["Double bonds separated by two single bonds", "Neighboring double bonds", "Isolated double bonds", "Aromatic rings"],
		answer: "Neighboring double bonds",
		explanation: "Cumulated dienes have neighboring double bonds, such as in 1,2-butadiene (CH₂=C=CH₂)."
	},
	{
		id: 19,
		question: "What is an example of a conjugated diene?",
		options: ["1,5-Hexadiene", "1,2-Butadiene", "1,3-Butadiene", "Propene"],
		answer: "1,3-Butadiene",
		explanation: "Conjugated dienes have double bonds separated by one single bond. 1,3-Butadiene (CH₂=CH-CH=CH₂) is a classic example."
	},
	{
		id: 20,
		question: "How do isolated dienes behave chemically?",
		options: ["More reactive than alkenes", "Identical to simple alkenes", "Less reactive than alkenes", "Form aromatic compounds"],
		answer: "Identical to simple alkenes",
		explanation: "Isolated dienes have double bonds separated by more than one single bond and are chemically identical to simple alkenes."
	},
	{
		id: 21,
		question: "What makes conjugated dienes more stable than non-conjugated dienes?",
		options: ["Higher molecular weight", "Delocalization and hyperconjugation", "More hydrogen atoms", "Longer carbon chains"],
		answer: "Delocalization and hyperconjugation",
		explanation: "Conjugated dienes are more stable due to electron delocalization and hyperconjugation, which is observed through lower heat of hydrogenation."
	},
	{
		id: 22,
		question: "What is the IUPAC name for allene?",
		options: ["1,2-Butadiene", "Propadiene", "1,3-Butadiene", "Methylallene"],
		answer: "Propadiene",
		explanation: "Allene (CH₂=C=CH₂) is systematically named propadiene according to IUPAC nomenclature."
	},
	{
		id: 23,
		question: "What method is used to prepare dienes by catalytic cracking?",
		options: ["Oxidation", "Dehydrogenation", "Halogenation", "Hydration"],
		answer: "Dehydrogenation",
		explanation: "Dienes can be prepared by catalytic cracking (dehydrogenation), such as converting butane to 1,3-butadiene using heat and a catalyst."
	},
	{
		id: 24,
		question: "What happens during the dehydration of a diol to form a diene?",
		options: ["Water molecules are added", "Water molecules are removed", "Hydrogen is added", "Carbon atoms are removed"],
		answer: "Water molecules are removed",
		explanation: "Dehydration is the loss of water molecules. When a diol is heated with acid, OH groups are removed, forming double bonds and producing a diene."
	},
	{
		id: 25,
		question: "What are the two types of addition products in conjugated dienes?",
		options: ["1,1- and 2,2-addition", "1,2- and 1,4-addition", "1,3- and 2,4-addition", "1,2- and 2,3-addition"],
		answer: "1,2- and 1,4-addition",
		explanation: "Electrophilic addition to conjugated dienes yields a mixture of 1,2-addition (adjacent carbons) and 1,4-addition (ends of conjugated system) products."
	},
	{
		id: 26,
		question: "What intermediate is formed during electrophilic addition to conjugated dienes?",
		options: ["Carbocation", "Allylic cation", "Free radical", "Carbanion"],
		answer: "Allylic cation",
		explanation: "Addition to the end of the conjugated system forms an allylic cation intermediate, which can lead to both 1,2- and 1,4-addition products."
	},
	{
		id: 27,
		question: "How does the heat of hydrogenation indicate stability in conjugated dienes?",
		options: ["Higher heat = more stable", "Lower heat = more stable", "No correlation", "Equal for all dienes"],
		answer: "Lower heat = more stable",
		explanation: "Conjugated dienes release less heat during hydrogenation (54.1 kcal/mol) compared to non-conjugated dienes (60.8 kcal/mol), indicating greater stability."
	},
	{
		id: 28,
		question: "Which of the following is NOT a typical reaction of dienes?",
		options: ["Hydrogenation", "Ozonolysis", "Halogenation", "Decarboxylation"],
		answer: "Decarboxylation",
		explanation: "Common reactions of dienes include hydrogenation, ozonolysis, glycol formation, and halogenation. Decarboxylation is not a typical diene reaction."
	}
];
