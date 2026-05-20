import type { Question } from './collegeQuizTypes';

const normalCurveIllustration = `
<svg role="img" aria-label="Normal distribution of quantitative traits" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#101719"/>
	<text x="32" y="38" fill="#8be07f" font-family="monospace" font-size="18" font-weight="700">QUANTITATIVE TRAIT DISTRIBUTION</text>
	<path d="M86 184 C164 184 178 82 270 82 C362 82 376 184 454 184" fill="none" stroke="#8be07f" stroke-width="6" stroke-linecap="round"/>
	<path d="M72 184 H470" stroke="#eaf5e8" stroke-width="3"/>
	<g font-family="monospace" font-size="14" fill="#eaf5e8">
		<text x="238" y="212">mean</text>
		<text x="516" y="104">many small additive effects</text>
		<text x="516" y="136">plus environment</text>
		<text x="516" y="168">continuous variation</text>
	</g>
</svg>`;

const regressionIllustration = `
<svg role="img" aria-label="Regression slope and mean" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#101719"/>
	<text x="32" y="38" fill="#8be07f" font-family="monospace" font-size="18" font-weight="700">REGRESSION LOGIC</text>
	<path d="M92 190 V72 M92 190 H336" stroke="#eaf5e8" stroke-width="4" stroke-linecap="round"/>
	<path d="M104 168 L324 58" stroke="#ffd166" stroke-width="6" stroke-linecap="round"/>
	<path d="M104 184 C168 150 236 128 324 116" stroke="#70d6c8" stroke-width="5" stroke-dasharray="12 8"/>
	<g font-family="monospace" font-size="14" fill="#eaf5e8">
		<text x="380" y="92">slope: change in Y per X</text>
		<text x="380" y="126">intercept: where line crosses Y</text>
		<text x="380" y="160">extreme offspring regress toward mean</text>
	</g>
</svg>`;

const varianceIllustration = `
<svg role="img" aria-label="Phenotypic variance components" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="240" rx="8" fill="#101719"/>
	<text x="32" y="38" fill="#8be07f" font-family="monospace" font-size="18" font-weight="700">VARIANCE COMPONENTS</text>
	<g font-family="monospace" font-size="16" fill="#eaf5e8">
		<rect x="62" y="82" width="140" height="82" rx="6" fill="#182426" stroke="#8be07f"/>
		<text x="104" y="116">Vp</text><text x="86" y="144">phenotype</text>
		<text x="238" y="130">=</text>
		<rect x="284" y="82" width="120" height="82" rx="6" fill="#182426" stroke="#ffd166"/>
		<text x="328" y="116">Vg</text><text x="310" y="144">genetic</text>
		<text x="430" y="130">+</text>
		<rect x="472" y="82" width="120" height="82" rx="6" fill="#182426" stroke="#70d6c8"/>
		<text x="516" y="116">Ve</text><text x="498" y="144">environment</text>
		<text x="616" y="130">+</text>
		<rect x="650" y="82" width="74" height="82" rx="6" fill="#182426" stroke="#ff7f70"/>
		<text x="674" y="116">Vge</text><text x="660" y="144">interaction</text>
	</g>
</svg>`;

const heritabilityIllustration = `
<svg role="img" aria-label="Narrow and broad heritability" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#101719"/>
	<text x="32" y="38" fill="#8be07f" font-family="monospace" font-size="18" font-weight="700">HERITABILITY</text>
	<g font-family="monospace" font-size="16" fill="#eaf5e8">
		<rect x="84" y="78" width="250" height="94" rx="6" fill="#182426" stroke="#ffd166"/>
		<text x="112" y="116">narrow sense</text>
		<text x="112" y="146">h2 = Va / Vp</text>
		<rect x="426" y="78" width="250" height="94" rx="6" fill="#182426" stroke="#70d6c8"/>
		<text x="454" y="116">broad sense</text>
		<text x="454" y="146">h2 = Vg / Vp</text>
	</g>
</svg>`;

function quantitativeGeneticsIllustrationFor(id: number) {
	if (id <= 12) return normalCurveIllustration;
	if (id <= 15) return regressionIllustration;
	if (id <= 18) return varianceIllustration;
	return heritabilityIllustration;
}

const quantitativeGeneticsQuizItems: Question[] = [
	{
		id: 1,
		question: 'Which aim best matches quantitative genetics as introduced in the lecture?',
		options: [
			'Analyze genetic and environmental trait influence.',
			'Classify species using one diagnostic character.',
			'Map only single-gene recessive disorders.',
			'Describe chromosomes without measuring phenotypes.'
		],
		answer: 'Analyze genetic and environmental trait influence.',
		explanation:
			'The first slide defines quantitative genetics as analysis of how genetic and environmental factors influence inheritance and expression of quantitative traits.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'Why are breeders and evolutionary biologists both interested in quantitative genetics?',
		options: [
			'It predicts selected traits and adaptation.',
			'It eliminates environmental effects entirely.',
			'It converts all traits into discrete ratios.',
			'It studies only nonheritable variation.'
		],
		answer: 'It predicts selected traits and adaptation.',
		explanation:
			'The lecture links quantitative genetics to artificial selection by breeders and to evolution through traits that allow species to adapt to environments.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'A trait varies measurably across individuals rather than falling into clear categories. Which lecture category fits?',
		options: [
			'It is a quantitative trait.',
			'It is a nullisomic trait.',
			'It is a codon trait.',
			'It is an operon trait.'
		],
		answer: 'It is a quantitative trait.',
		explanation:
			'Quantitative traits are defined as traits that vary measurably in a species and can be described by phenotypic measurements.',
		difficulty: 'expert',
		illustration: normalCurveIllustration
	},
	{
		id: 4,
		question: 'Which example set contains only quantitative trait categories from the lecture?',
		options: [
			'Milk production, learning ability, obesity.',
			'Codon start, stop signal, wobble.',
			'Promoter, operator, repressor.',
			'Transition, transversion, frameshift.'
		],
		answer: 'Milk production, learning ability, obesity.',
		explanation:
			'The lecture lists physiological traits such as milk production, behavioral traits such as learning abilities, and complex diseases such as obesity as quantitative traits.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'Johannsen explained continuous variation in quantitative traits as the combined effect of what?',
		options: [
			'Genotype and environment together.',
			'Only codon degeneracy alone.',
			'Only chromosome nondisjunction alone.',
			'Operator repression and induction.'
		],
		answer: 'Genotype and environment together.',
		explanation:
			'The lecture states that Johannsen explained continuous variation in quantitative traits as due to genotype and environment.',
		difficulty: 'expert',
		illustration: normalCurveIllustration
	},
	{
		id: 6,
		question:
			'Yule proposed that many genes, each with small effects, can generate continuous variation. Which later term summarizes this idea?',
		options: [
			'Polygenes, or multiple factors.',
			'Transposons, or jumping genes.',
			'Operons, or grouped genes.',
			'Nucleoids, or chromosome loops.'
		],
		answer: 'Polygenes, or multiple factors.',
		explanation:
			'The lecture says continuous variation may be due to multiple genes with small effects, later called multiple factors or polygenes.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question:
			'Why do quantitative traits often approach a normal curve as more loci independently segregate?',
		options: [
			'Many additive gene effects create graded classes.',
			'One dominant gene creates two discrete classes.',
			'All environmental effects disappear completely.',
			'Every genotype produces identical measurements.'
		],
		answer: 'Many additive gene effects create graded classes.',
		explanation:
			'The lecture states that as the number of independently segregating genes increases, the distribution approaches a normal curve because quantitative gene effects add across classes.',
		difficulty: 'expert',
		illustration: normalCurveIllustration
	},
	{
		id: 8,
		question: 'Which assumption belongs to the polygenic hypothesis slides?',
		options: [
			'Additive alleles with no dominance.',
			'One gene with complete dominance.',
			'No environmental effects on characters.',
			'Only qualitative phenotypic categories.'
		],
		answer: 'Additive alleles with no dominance.',
		explanation:
			'The polygenic hypothesis assumptions include two or more genes, additive alleles, no dominance, intermediate F1, environmental effects, and quantified characters.',
		difficulty: 'expert'
	},
	{
		id: 9,
		question:
			'Why can individual genes for a polygenic trait be Mendelian while the phenotype lacks a Mendelian ratio?',
		options: [
			'Several loci combine into continuous variation.',
			'Each locus becomes nonheritable in offspring.',
			'Environmental effects remove every genotype.',
			'Dominant alleles erase all frequency classes.'
		],
		answer: 'Several loci combine into continuous variation.',
		explanation:
			'The lecture states that individual genes conferring a polygenic trait are Mendelian, but together they do not produce Mendelian phenotypic ratios and instead show continuous variation.',
		difficulty: 'expert',
		illustration: normalCurveIllustration
	},
	{
		id: 10,
		question:
			'In the height example, people who do not eat enough fail to reach genetic potential. Which interpretation is intended?',
		options: [
			'Environment can modify quantitative phenotype.',
			'Nutrition removes all genetic variance.',
			'Height is controlled by one codon only.',
			'Dominance prevents regression to mean.'
		],
		answer: 'Environment can modify quantitative phenotype.',
		explanation:
			'The lecture uses height and nutrition to show obvious environmental effects on a quantitative trait, even when genetic potential differs among people.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question: 'Which statistical statement matches the frequency-distribution section?',
		options: [
			'Standard deviation is the square root of variance.',
			'Variance is the square root of standard deviation.',
			'Mean equals the coefficient of variation.',
			'Standard error equals the phenotypic mean.'
		],
		answer: 'Standard deviation is the square root of variance.',
		explanation:
			'The lecture lists variance as the amount of phenotypic variation and standard deviation as the square root of variance.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question:
			'A breeder compares variability in milk yield across two breeds with different means. Which statistic is most appropriate from the lecture list?',
		options: [
			'Coefficient of variation compares variability.',
			'Regression intercept compares variability.',
			'Polygenic ratio compares variability.',
			'Selection coefficient compares variability.'
		],
		answer: 'Coefficient of variation compares variability.',
		explanation:
			'The coefficient of variation is described as a measure used to compare variability of different samples or experiments.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'If a large value of X tends to occur with a small value of Y, how is the correlation described?',
		options: [
			'The correlation coefficient is negative.',
			'The correlation coefficient is exactly one.',
			'The correlation coefficient is zero always.',
			'The covariance becomes phenotypic variance.'
		],
		answer: 'The correlation coefficient is negative.',
		explanation:
			'The lecture explains that correlation is negative if a large Y goes with a small X, or equivalently if the variables move in opposite directions.',
		difficulty: 'expert',
		illustration: regressionIllustration
	},
	{
		id: 14,
		question: 'In the lecture equation y = 1.0 + 0.5x, what does 0.5 represent?',
		options: [
			'The slope, or change in y per x.',
			'The y-intercept where the line crosses.',
			'The variance of the phenotypic sample.',
			'The coefficient of inbreeding value.'
		],
		answer: 'The slope, or change in y per x.',
		explanation:
			'The regression slide states that the slope is the multiplier of x, the amount of change in y for a one-unit change in x; in y = 1.0 + 0.5x, the slope is 0.5.',
		difficulty: 'expert',
		illustration: regressionIllustration
	},
	{
		id: 15,
		question:
			'Galton found sons of extremely tall fathers tended to be shorter than their fathers. Which principle does this illustrate?',
		options: [
			'Regression of offspring toward the mean.',
			'Complete dominance of paternal height.',
			'Elimination of environmental variance.',
			'Triploid sterility in human pedigrees.'
		],
		answer: 'Regression of offspring toward the mean.',
		explanation:
			'The regression-to-the-mean slides describe Galton observing that extremely tall fathers tended to have shorter sons and extremely short fathers tended to have taller sons.',
		difficulty: 'expert',
		illustration: regressionIllustration
	},
	{
		id: 16,
		question: 'Which phenotypic-variance equation matches the lecture?',
		options: [
			'Vp equals Vg plus Ve plus Vge.',
			'Vg equals Vp plus Ve plus Vge.',
			'Ve equals Va plus Vd plus Vi.',
			'Vge equals Va divided by Vp.'
		],
		answer: 'Vp equals Vg plus Ve plus Vge.',
		explanation:
			'The components slide gives phenotypic variance as genetic variance plus environmental variance plus genotype-environment interaction: Vp = Vg + Ve + Vge.',
		difficulty: 'expert',
		illustration: varianceIllustration
	},
	{
		id: 17,
		question: 'Which decomposition of genetic variance is correct according to the lecture?',
		options: [
			'Vg equals Va plus Vd plus Vi.',
			'Vg equals Vp plus Ve plus Vge.',
			'Vg equals only environmental variance.',
			'Vg equals covariance divided by mean.'
		],
		answer: 'Vg equals Va plus Vd plus Vi.',
		explanation:
			'The lecture divides genotypic variance into additive, dominance, and epistatic components: Vg = Va + Vd + Vi.',
		difficulty: 'expert',
		illustration: varianceIllustration
	},
	{
		id: 18,
		question:
			'In the dandelion experiment, genetically identical seeds grown on hillside versus greenhouse primarily isolate what source of variation?',
		options: [
			'Environmental variance across growing conditions.',
			'Additive genetic variance among genotypes.',
			'Dominance variance within one gene pair.',
			'Epistatic variance between gene pairs.'
		],
		answer: 'Environmental variance across growing conditions.',
		explanation:
			'The dandelion slides use genetically identical seeds split between a grassy hillside and controlled greenhouse to compare environmental variation in stem length.',
		difficulty: 'expert',
		illustration: varianceIllustration
	},
	{
		id: 19,
		question:
			'Which heritability measure is most useful to breeders selecting parents for offspring resemblance?',
		options: [
			'Narrow-sense heritability, Va divided by Vp.',
			'Broad-sense heritability, Ve divided by Vp.',
			'Environmental variance, Ve divided by Va.',
			'Genotype interaction, Vge divided by Ve.'
		],
		answer: 'Narrow-sense heritability, Va divided by Vp.',
		explanation:
			'Narrow-sense heritability concerns how much parents phenotype is passed to progeny and is given as h2 = Va / Vp, making it important for breeders.',
		difficulty: 'expert',
		illustration: heritabilityIllustration
	},
	{
		id: 20,
		question:
			'A twin study asks how much of individual phenotype is caused by genotype rather than environment. Which heritability sense fits best?',
		options: [
			'Broad-sense heritability, Vg divided by Vp.',
			'Narrow-sense heritability, Va divided by Vp.',
			'Environmental heritability, Ve divided by Vg.',
			'Regression heritability, slope divided by mean.'
		],
		answer: 'Broad-sense heritability, Vg divided by Vp.',
		explanation:
			'The lecture says broad-sense heritability concerns how much of an individuals phenotype is caused by genotype and gives h2 = Vg / Vp, with twin comparisons as an example.',
		difficulty: 'expert',
		illustration: heritabilityIllustration
	}
];

export const quantitativeGeneticsQuizData = quantitativeGeneticsQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? quantitativeGeneticsIllustrationFor(question.id)
})) satisfies Question[];
