import type { PathnameWithSearchOrHash } from '$app/types';

export type QuizSubject = 'Chemistry' | 'Genetics' | 'Microbiology' | 'Organismal Biology';

export interface QuizModule {
	id: string;
	title: string;
	description: string;
	href: PathnameWithSearchOrHash;
	icon: string;
	subject: QuizSubject;
	items: number;
	featured?: boolean;
}

export const quizSubjects: QuizSubject[] = [
	'Chemistry',
	'Genetics',
	'Microbiology',
	'Organismal Biology'
];

export const quizModules: QuizModule[] = [
	{
		id: 'limiting-excess-reactant',
		title: 'Limiting & Excess Reactant',
		description: 'Stoichiometry, theoretical yield, percent yield, industrial applications',
		href: '/limiting-excess-reactant',
		icon: 'LR',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'intermolecular-forces',
		title: 'Intermolecular Forces',
		description: 'London dispersion, dipole-dipole, hydrogen bonding, ion-dipole',
		href: '/intermolecular-forces',
		icon: 'IF',
		subject: 'Chemistry',
		items: 25,
		featured: true
	},
	{
		id: 'effect-intermolecular-forces',
		title: 'IMFA Effects',
		description: 'Boiling point, vapor pressure, surface tension, viscosity, solubility',
		href: '/effect-intermolecular-forces',
		icon: 'EF',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'polarity-molecules',
		title: 'Polarity of Molecules',
		description: 'Electronegativity, bond polarity, VSEPR geometry, dipole moments',
		href: '/polarity-molecules',
		icon: 'PM',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'big-bang-nucleosynthesis',
		title: 'Big Bang & Nucleosynthesis',
		description: 'BBN, isotopes, stellar fusion, and element formation',
		href: '/big-bang-nucleosynthesis',
		icon: 'BN',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'atomic-number-synthesis',
		title: 'Atomic Number & Synthesis',
		description: 'Mendeleev, Moseley, transmutation, and transuranic elements',
		href: '/atomic-number-synthesis',
		icon: 'AN',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'hydrocarbons',
		title: 'Hydrocarbons & Methane',
		description: 'Properties, reactions, and halogenation',
		href: '/hydrocarbons',
		icon: 'HC',
		subject: 'Chemistry',
		items: 20,
		featured: true
	},
	{
		id: 'alkenes',
		title: 'Alkenes',
		description: 'Double bonds, isomerism, and addition reactions',
		href: '/alkenes',
		icon: 'C=C',
		subject: 'Chemistry',
		items: 20
	},
	{
		id: 'alkynes-dienes',
		title: 'Alkynes & Dienes',
		description: 'Triple bonds, conjugation, and reactions',
		href: '/alkynes-dienes',
		icon: 'C#C',
		subject: 'Chemistry',
		items: 20
	},
	{
		id: 'collision-theory',
		title: 'Collision Theory',
		description:
			'Activation energy, reaction rate, temperature, surface area, concentration, catalysts',
		href: '/collision-theory',
		icon: 'CT',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'catalyst',
		title: 'Catalyst',
		description: 'Alternative pathway, activation energy, types of catalysts, enzyme catalysis',
		href: '/catalyst',
		icon: 'Ca',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'biological-macromolecules',
		title: 'Biological Macromolecules',
		description: 'Carbs, proteins, lipids, and nucleic acids',
		href: '/biological-macromolecules',
		icon: 'BM',
		subject: 'Chemistry',
		items: 25
	},
	{
		id: 'molecular-structure-dna',
		title: 'DNA Structure',
		description: 'Watson-Crick model, base pairing, and packing',
		href: '/molecular-structure-dna',
		icon: 'D1',
		subject: 'Genetics',
		items: 25
	},
	{
		id: 'dna-replication',
		title: 'DNA Replication',
		description: 'Replication models, fork enzymes, and repair',
		href: '/dna-replication',
		icon: 'D2',
		subject: 'Genetics',
		items: 20,
		featured: true
	},
	{
		id: 'gene-functions',
		title: 'Gene Functions',
		description: 'Gene-enzyme logic, transcription, and translation',
		href: '/gene-functions',
		icon: 'G3',
		subject: 'Genetics',
		items: 20
	},
	{
		id: 'gene-regulation',
		title: 'Gene Regulation',
		description: 'Genetic code, operons, and developmental control',
		href: '/gene-regulation',
		icon: 'G4',
		subject: 'Genetics',
		items: 20,
		featured: true
	},
	{
		id: 'mutations',
		title: 'Mutations',
		description: 'Chromosome changes, point mutations, and transposons',
		href: '/mutations',
		icon: 'M5',
		subject: 'Genetics',
		items: 20
	},
	{
		id: 'quantitative-genetics',
		title: 'Quantitative Genetics',
		description: 'Polygenes, variance, regression, and heritability',
		href: '/quantitative-genetics',
		icon: 'Q6',
		subject: 'Genetics',
		items: 20
	},
	{
		id: 'population-genetics',
		title: 'Population Genetics',
		description: 'Hardy-Weinberg, selection, drift, and speciation',
		href: '/population-genetics',
		icon: 'P7',
		subject: 'Genetics',
		items: 20
	},
	{
		id: 'human-genetics',
		title: 'Human Genetics',
		description: 'Karyotypes, aneuploids, mutations, and behavior',
		href: '/human-genetics',
		icon: 'HG',
		subject: 'Genetics',
		items: 30
	},
	{
		id: 'microbial-catabolism',
		title: 'Microbial Catabolism',
		description: 'Glycolysis, cellular respiration, fermentation, and lipid & protein catabolism',
		href: '/microbial-catabolism',
		icon: 'MC',
		subject: 'Microbiology',
		items: 20
	},
	{
		id: 'microbial-growth',
		title: 'Microbial Growth',
		description: 'Temperature, pH, osmotic pressure, culture media, and growth techniques',
		href: '/microbial-growth',
		icon: 'MG',
		subject: 'Microbiology',
		items: 20,
		featured: true
	},
	{
		id: 'animal-diversity',
		title: 'Animal Diversity',
		description: 'Phyla, body plans, and chordate concepts',
		href: '/animal-diversity',
		icon: 'AD',
		subject: 'Organismal Biology',
		items: 25,
		featured: true
	},
	{
		id: 'plant-diversity',
		title: 'Plant Diversity',
		description: 'Bryophytes, seed plants, and angiosperms',
		href: '/plant-diversity',
		icon: 'PD',
		subject: 'Organismal Biology',
		items: 25
	},
	{
		id: 'systematics',
		title: 'Systematics Tools',
		description: 'Morphology, DNA, barcoding, and NGS',
		href: '/systematics',
		icon: 'ST',
		subject: 'Organismal Biology',
		items: 25
	}
];

export const totalQuestions = quizModules.reduce((sum, module) => sum + module.items, 0);
