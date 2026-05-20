export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty: 'expert';
	illustration?: string;
}

const hardyWeinbergIllustration = `
<svg role="img" aria-label="Hardy-Weinberg genotype proportions" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#111511"/>
	<text x="32" y="38" fill="#71e088" font-family="monospace" font-size="18" font-weight="700">HARDY-WEINBERG MODEL</text>
	<text x="32" y="66" fill="#dce7dc" font-family="monospace" font-size="13">alleles sum first; genotypes expand from the square</text>
	<g font-family="monospace" font-size="17" fill="#f4f7f1">
		<rect x="52" y="98" width="150" height="84" rx="6" fill="#182018" stroke="#71e088"/>
		<text x="92" y="132">p + q = 1</text>
		<text x="94" y="160">alleles</text>
		<rect x="304" y="98" width="150" height="84" rx="6" fill="#182018" stroke="#f3b34f"/>
		<text x="330" y="132">p^2 + 2pq</text>
		<text x="360" y="160">+ q^2 = 1</text>
		<rect x="558" y="98" width="150" height="84" rx="6" fill="#182018" stroke="#72c7dd"/>
		<text x="595" y="132">large random</text>
		<text x="614" y="160">mating</text>
	</g>
	<path d="M214 140 H292 M466 140 H546" stroke="#e4d17a" stroke-width="4" stroke-linecap="round"/>
	<path d="M282 130 L296 140 L282 150 M536 130 L550 140 L536 150" stroke="#e4d17a" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`;

const selectionModesIllustration = `
<svg role="img" aria-label="Selection modes across phenotypic ranges" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="260" rx="8" fill="#111511"/>
	<text x="32" y="38" fill="#71e088" font-family="monospace" font-size="18" font-weight="700">SELECTION SHIFTS PHENOTYPES</text>
	<g font-family="monospace" font-size="14" fill="#f4f7f1" stroke-linecap="round">
		<text x="70" y="76">stabilizing</text>
		<path d="M54 168 C86 88 148 88 180 168" fill="none" stroke="#72c7dd" stroke-width="5"/>
		<path d="M42 186 H192" stroke="#3d493d" stroke-width="3"/>
		<path d="M46 116 L80 142 M188 116 L154 142" stroke="#f06d55" stroke-width="4"/>
		<text x="292" y="76">directional</text>
		<path d="M280 170 C308 128 352 96 424 94" fill="none" stroke="#f3b34f" stroke-width="5"/>
		<path d="M270 186 H436" stroke="#3d493d" stroke-width="3"/>
		<path d="M306 114 L340 94" stroke="#f06d55" stroke-width="4"/>
		<text x="536" y="76">disruptive</text>
		<path d="M514 168 C542 90 578 118 610 162 C642 118 678 90 706 168" fill="none" stroke="#71e088" stroke-width="5"/>
		<path d="M506 186 H716" stroke="#3d493d" stroke-width="3"/>
		<path d="M610 102 V148" stroke="#f06d55" stroke-width="4"/>
	</g>
</svg>`;

const geneFlowDriftIllustration = `
<svg role="img" aria-label="Gene flow and genetic drift comparison" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#111511"/>
	<text x="32" y="38" fill="#71e088" font-family="monospace" font-size="18" font-weight="700">FORCES THAT MOVE FREQUENCIES</text>
	<g fill="#182018" stroke-width="2" font-family="monospace" font-size="14">
		<rect x="48" y="74" width="220" height="132" rx="8" stroke="#72c7dd"/>
		<rect x="492" y="74" width="220" height="132" rx="8" stroke="#f3b34f"/>
		<text x="88" y="102" fill="#f4f7f1">source population</text>
		<text x="528" y="102" fill="#f4f7f1">recipient population</text>
		<g>
			<circle cx="88" cy="138" r="9" fill="#71e088"/><circle cx="124" cy="150" r="9" fill="#71e088"/>
			<circle cx="166" cy="132" r="9" fill="#72c7dd"/><circle cx="210" cy="162" r="9" fill="#f3b34f"/>
			<circle cx="552" cy="138" r="9" fill="#72c7dd"/><circle cx="590" cy="152" r="9" fill="#72c7dd"/>
			<circle cx="632" cy="134" r="9" fill="#f3b34f"/><circle cx="672" cy="162" r="9" fill="#f3b34f"/>
		</g>
	</g>
	<path d="M282 138 H472" stroke="#e4d17a" stroke-width="5" stroke-linecap="round"/>
	<path d="M456 124 L476 138 L456 152" stroke="#e4d17a" stroke-width="5" fill="none" stroke-linecap="round"/>
	<text x="332" y="122" fill="#dce7dc" font-family="monospace" font-size="14">migration</text>
	<text x="315" y="178" fill="#dce7dc" font-family="monospace" font-size="14">small samples drift</text>
</svg>`;

const speciationIllustration = `
<svg role="img" aria-label="Race and species formation through gene flow reduction" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#111511"/>
	<text x="32" y="38" fill="#71e088" font-family="monospace" font-size="18" font-weight="700">FROM VARIATION TO ISOLATION</text>
	<g font-family="monospace" font-size="14" fill="#f4f7f1" stroke-linecap="round">
		<text x="68" y="82">race</text>
		<ellipse cx="130" cy="146" rx="78" ry="48" fill="#182018" stroke="#72c7dd" stroke-width="3"/>
		<ellipse cx="192" cy="146" rx="78" ry="48" fill="#182018" stroke="#72c7dd" stroke-width="3" opacity="0.72"/>
		<path d="M158 146 H164" stroke="#e4d17a" stroke-width="5"/>
		<text x="74" y="218">gene flow can fuse</text>
		<text x="430" y="82">species</text>
		<ellipse cx="488" cy="146" rx="78" ry="48" fill="#182018" stroke="#f3b34f" stroke-width="3"/>
		<ellipse cx="646" cy="146" rx="78" ry="48" fill="#182018" stroke="#f06d55" stroke-width="3"/>
		<path d="M566 112 L566 190" stroke="#dce7dc" stroke-width="4" stroke-dasharray="8 8"/>
		<text x="464" y="218">reproductive isolation</text>
	</g>
</svg>`;

function populationGeneticsIllustrationFor(id: number) {
	if (id <= 7) return hardyWeinbergIllustration;
	if (id <= 15) return selectionModesIllustration;
	if (id <= 18) return geneFlowDriftIllustration;
	return speciationIllustration;
}

const populationGeneticsQuizItems: Question[] = [
	{
		id: 1,
		question:
			'A census samples 2,000 adults, but only mate-pair gametes define the next generation. Which definition best matches a population from this lecture?',
		options: [
			'Interbreeding individuals sharing one gene pool.',
			'Nearby organisms counted inside one habitat.',
			'Similar phenotypes sorted by one trait.',
			'All alleles stored in somatic tissues.'
		],
		answer: 'Interbreeding individuals sharing one gene pool.',
		explanation:
			'The lecture defines a genetic population as sexually interbreeding individuals that share a common gene pool, not merely organisms living near each other.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'A large randomly mating population shows no mutation, migration, selection, or drift. What should happen to allele frequencies under Hardy-Weinberg logic?',
		options: [
			'Allele frequencies remain stable across generations.',
			'Recessive alleles disappear after one generation.',
			'Heterozygotes become the only surviving genotype.',
			'Selection coefficients rise without phenotype change.'
		],
		answer: 'Allele frequencies remain stable across generations.',
		explanation:
			'Hardy-Weinberg equilibrium predicts unchanged gene frequency across generations when a large randomly mating population has no outside forces changing it.',
		difficulty: 'expert',
		illustration: hardyWeinbergIllustration
	},
	{
		id: 3,
		question:
			'In a codominant sample of 200 individuals, 120 are MM, 40 are MN, and 40 are NN. Which allele-frequency result is correct?',
		options: [
			'M equals 0.70 and N equals 0.30.',
			'M equals 0.60 and N equals 0.40.',
			'M equals 0.50 and N equals 0.50.',
			'M equals 0.30 and N equals 0.70.'
		],
		answer: 'M equals 0.70 and N equals 0.30.',
		explanation:
			'Codominant allele counts use two alleles per individual: M = (2 x 120 + 40) / 400 = 0.70, leaving N = 0.30.',
		difficulty: 'expert',
		illustration: hardyWeinbergIllustration
	},
	{
		id: 4,
		question:
			'For PTC tasting, 300 of 1,000 people are non-tasters with genotype tt. Which inference follows from Hardy-Weinberg assumptions?',
		options: [
			'q is about 0.55 and p about 0.45.',
			'q is about 0.30 and p about 0.70.',
			'q is about 0.45 and p about 0.55.',
			'q is about 0.70 and p about 0.30.'
		],
		answer: 'q is about 0.55 and p about 0.45.',
		explanation:
			'The recessive phenotype frequency is q^2 = 300/1000 = 0.30, so q is the square root of 0.30, about 0.55, and p is about 0.45.',
		difficulty: 'expert',
		illustration: hardyWeinbergIllustration
	},
	{
		id: 5,
		question:
			'If an X-linked recessive color-blind allele has q = 0.05, which contrast between males and females is expected?',
		options: [
			'Affected males approximate q; females approximate q^2.',
			'Affected males approximate q^2; females approximate q.',
			'Affected males approximate 2pq; females approximate p.',
			'Affected males approximate p^2; females approximate 2pq.'
		],
		answer: 'Affected males approximate q; females approximate q^2.',
		explanation:
			'For X-linked recessive traits, hemizygous males express the allele at q, whereas affected females require two recessive alleles, q^2.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'In the ABO example, phenotype O has frequency 0.42. Which step correctly begins estimating the i allele?',
		options: [
			'Take the square root of 0.42.',
			'Double 0.42 before subtracting p.',
			'Subtract AB frequency from group O.',
			'Divide O individuals by A individuals.'
		],
		answer: 'Take the square root of 0.42.',
		explanation:
			'Phenotype O is genotype ii, so its frequency equals r^2. The lecture begins by taking the square root of 0.42 to estimate the i allele frequency.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question:
			'A new mutation appears once in a huge population and is not favored by selection. Why is it unlikely to shift population frequency alone?',
		options: [
			'Mutation must recur before population effect.',
			'Mutation instantly replaces selection pressure.',
			'Mutation acts only on phenotype extremes.',
			'Mutation prevents gametes from forming zygotes.'
		],
		answer: 'Mutation must recur before population effect.',
		explanation:
			'The mutation section states that mutation must be recurrent to affect the population and summarizes the relationship as mutation proposes, selection disposes.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question:
			'A climate shift causes one extreme of a phenotypic range to survive best, moving the population mean toward that extreme. Which selective effect fits?',
		options: [
			'Directional selection favoring one extreme.',
			'Stabilizing selection removing all variation.',
			'Disruptive selection favoring only intermediates.',
			'Random drift preserving the original mean.'
		],
		answer: 'Directional selection favoring one extreme.',
		explanation:
			'Directional selection preserves one phenotypic extreme when it becomes fit, whereas stabilizing selection removes extremes and disruptive selection favors both extremes.',
		difficulty: 'expert',
		illustration: selectionModesIllustration
	},
	{
		id: 9,
		question:
			'A population preserves both phenotypic extremes in the same habitat, and intermediate forms become less successful. Which process best explains this pattern?',
		options: [
			'Disruptive selection maintaining divergent forms.',
			'Directional selection fixing one extreme form.',
			'Stabilizing selection favoring central forms.',
			'Reverse mutation restoring ancestral forms.'
		],
		answer: 'Disruptive selection maintaining divergent forms.',
		explanation:
			'The lecture describes disruptive or diversifying selection as favoring both extremes, preserving differences in the gene pool and potentially leading toward sub-speciation.',
		difficulty: 'expert',
		illustration: selectionModesIllustration
	},
	{
		id: 10,
		question:
			'A genotype produces 90 offspring while the alternative produces 100. Using the lecture definition, what are its relative fitness and selection coefficient?',
		options: [
			'W equals 0.90 and s equals 0.10.',
			'W equals 0.10 and s equals 0.90.',
			'W equals 1.10 and s equals 0.10.',
			'W equals 0.45 and s equals 0.55.'
		],
		answer: 'W equals 0.90 and s equals 0.10.',
		explanation:
			'Relative fitness is reproductive success compared with the alternative, so 90/100 = 0.90. The selection coefficient is s = 1 - W = 0.10.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question:
			'If selection against a haploid allele is complete with s = 1, what happens to its post-selection frequency q(1 - s)?',
		options: [
			'It falls to zero after selection.',
			'It doubles because selection is complete.',
			'It remains q because gametes are haploid.',
			'It becomes p through reverse mutation.'
		],
		answer: 'It falls to zero after selection.',
		explanation:
			'For selection against gametes, the lecture gives q(1 - s). If s = 1, then q(1 - s) = q(0) = 0.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question:
			'In a malarial region, the sickle-cell allele remains common because heterozygotes are favored. Which concept names this maintained variation?',
		options: [
			'Balanced polymorphism through heterozygote advantage.',
			'Founder principle through rare colonizing alleles.',
			'Inbreeding depression through recessive exposure.',
			'Assortative mating through similar partner choice.'
		],
		answer: 'Balanced polymorphism through heterozygote advantage.',
		explanation:
			'The lecture uses sickle-cell resistance to malaria as an example of balanced polymorphism, where heterozygote advantage helps maintain multiple forms.',
		difficulty: 'expert',
		illustration: selectionModesIllustration
	},
	{
		id: 13,
		question:
			'Why can selection continue changing a population even when the physical environment is not shifting?',
		options: [
			'New mutations and recombination supply variation.',
			'Genotypes are selected without phenotype expression.',
			'Gene flow stops whenever environments stay constant.',
			'Heterozygosity always declines to zero immediately.'
		],
		answer: 'New mutations and recombination supply variation.',
		explanation:
			'The lecture states that selection works on phenotypes, while new mutations and sexual recombination provide material for continued selection.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'Close relatives repeatedly mate in a small line, and deleterious recessives become expressed more often. Which outcome is being described?',
		options: [
			'Inbreeding depression from increased homozygosity.',
			'Hybrid vigor from unrelated line crossing.',
			'Gene flow from migrant allele input.',
			'Polyploid speciation from chromosome doubling.'
		],
		answer: 'Inbreeding depression from increased homozygosity.',
		explanation:
			'Inbreeding is assortative mating among close relatives. It increases homozygosity and exposes deleterious recessive alleles, reducing fitness.',
		difficulty: 'expert'
	},
	{
		id: 15,
		question:
			'Two unrelated inbred lines are crossed, and the hybrids show a marked fitness increase. Which lecture term best applies?',
		options: [
			'Hybrid vigor reversing inbreeding depression.',
			'Genetic drift reducing effective population size.',
			'Disassortative mating eliminating gene frequency.',
			'Postmating isolation reducing hybrid viability.'
		],
		answer: 'Hybrid vigor reversing inbreeding depression.',
		explanation:
			'The mating-system section states that hybridization of unrelated inbred lines can reverse inbreeding depression through hybrid vigor, also called heterosis.',
		difficulty: 'expert'
	},
	{
		id: 16,
		question:
			'Migrants enter a recipient population and interbreed. Which two variables most determine the allele-frequency shift in the recipient?',
		options: [
			'Frequency difference and migrant gene proportion.',
			'Founder number and chromosome arm length.',
			'Phenotype mean and cline steepness only.',
			'Mutation direction and codominant notation.'
		],
		answer: 'Frequency difference and migrant gene proportion.',
		explanation:
			'For migration or gene flow, the lecture emphasizes the difference in gene frequencies between populations and the proportion of migrant genes incorporated each generation.',
		difficulty: 'expert',
		illustration: geneFlowDriftIllustration
	},
	{
		id: 17,
		question:
			'A species has 1,000 adults, but only 300 mating pairs produce offspring. What effective population size is emphasized for drift?',
		options: [
			'Effective size is 600 breeding individuals.',
			'Effective size is 300 breeding individuals.',
			'Effective size remains 1,000 counted individuals.',
			'Effective size becomes 1,300 total individuals.'
		],
		answer: 'Effective size is 600 breeding individuals.',
		explanation:
			'The drift section notes that out of 1,000 individuals, 300 mating pairs create an effective population size of 600 because not all individuals are parents.',
		difficulty: 'expert',
		illustration: geneFlowDriftIllustration
	},
	{
		id: 18,
		question:
			'A few colonizers establish an isolated island population, and allele frequencies diverge by chance from the mainland source. Which process is most direct?',
		options: [
			'Founder principle within genetic drift.',
			'Stabilizing selection within random mating.',
			'Balanced polymorphism within malaria resistance.',
			'Hybrid vigor within inbred line crossing.'
		],
		answer: 'Founder principle within genetic drift.',
		explanation:
			'The lecture treats the founder principle as a drift-related change caused when a new population arises from a few founders, such as on an isolated island.',
		difficulty: 'expert',
		illustration: geneFlowDriftIllustration
	},
	{
		id: 19,
		question:
			'Two geographic races of the same species differ in gene-pool composition but still interbreed where they meet. What does migration tend to do?',
		options: [
			'Fuse races into a single gene pool.',
			'Create immediate postmating sterility barriers.',
			'Convert races into discrete species units.',
			'Prevent all clines from forming gradients.'
		],
		answer: 'Fuse races into a single gene pool.',
		explanation:
			'Race formation is reversible in the lecture. Migration between races can fuse them into a single gene pool because they are not reproductively isolated.',
		difficulty: 'expert',
		illustration: speciationIllustration
	},
	{
		id: 20,
		question:
			'Populations at opposite ends of a range experience different selection pressures, reducing gene flow without a clear physical barrier. Which speciation route fits?',
		options: [
			'Reduction of gene flow across the range.',
			'Complete panmixia across one gene pool.',
			'Assortative mating only among close relatives.',
			'ABO allele estimation using phenotype O.'
		],
		answer: 'Reduction of gene flow across the range.',
		explanation:
			'The species-formation section lists reduced gene flow as a cause of speciation when different selection pressures at opposite ends of a range prevent successful mating if groups reunite.',
		difficulty: 'expert',
		illustration: speciationIllustration
	}
];

export const populationGeneticsQuizData = populationGeneticsQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? populationGeneticsIllustrationFor(question.id)
})) satisfies Question[];
