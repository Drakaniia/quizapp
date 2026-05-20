import type { Question } from './collegeQuizTypes';

const helixGeometryIllustration = `
<svg role="img" aria-label="DNA helix geometry" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">WATSON-CRICK GEOMETRY</text>
	<g fill="none" stroke-linecap="round">
		<path d="M152 62 C260 104 260 146 152 188" stroke="#7fd0ff" stroke-width="8"/>
		<path d="M328 62 C220 104 220 146 328 188" stroke="#f6c85f" stroke-width="8"/>
		<path d="M170 82 H310 M206 106 H274 M206 146 H274 M170 170 H310" stroke="#e9eef7" stroke-width="5"/>
	</g>
	<g font-family="monospace" font-size="15" fill="#e9eef7">
		<text x="430" y="92">3.4 A between stacked bases</text>
		<text x="430" y="126">36 degrees per base step</text>
		<text x="430" y="160">10 bp per 34 A turn</text>
		<text x="430" y="194">20 A helix diameter</text>
	</g>
</svg>`;

const chargaffIllustration = `
<svg role="img" aria-label="Chargaff base-pair balance" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">CHARGAFF BALANCE</text>
	<g font-family="monospace" font-size="18" fill="#e9eef7">
		<rect x="76" y="82" width="150" height="90" rx="6" fill="#172033" stroke="#7fd0ff"/>
		<text x="118" y="122">A = T</text>
		<text x="96" y="150">purine:pyrimidine</text>
		<rect x="306" y="82" width="150" height="90" rx="6" fill="#172033" stroke="#f6c85f"/>
		<text x="348" y="122">G = C</text>
		<text x="326" y="150">purine:pyrimidine</text>
		<rect x="536" y="82" width="150" height="90" rx="6" fill="#172033" stroke="#7ee0b2"/>
		<text x="564" y="122">total purines</text>
		<text x="564" y="150">equal pyrimidines</text>
	</g>
</svg>`;

const chromosomePackingIllustration = `
<svg role="img" aria-label="DNA packing in prokaryotes and eukaryotes" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">PACKING DNA INTO CHROMOSOMES</text>
	<g fill="none" stroke-linecap="round">
		<path d="M76 142 C118 82 164 206 206 142 C248 82 294 206 336 142" stroke="#7fd0ff" stroke-width="6"/>
		<path d="M452 156 C488 96 536 96 572 156 C610 216 658 216 696 156" stroke="#f6c85f" stroke-width="6"/>
		<circle cx="500" cy="132" r="18" fill="#172033" stroke="#7ee0b2" stroke-width="5"/>
		<circle cx="620" cy="184" r="18" fill="#172033" stroke="#7ee0b2" stroke-width="5"/>
	</g>
	<g font-family="monospace" font-size="14" fill="#e9eef7">
		<text x="92" y="212">prokaryote: loops plus supercoiling</text>
		<text x="454" y="212">eukaryote: nucleosome to solenoid</text>
	</g>
</svg>`;

function molecularStructureIllustrationFor(id: number) {
	if (id <= 2 || id === 6 || id === 17) return chargaffIllustration;
	if (id <= 12 || id === 18 || id === 19 || id === 20) return helixGeometryIllustration;
	return chromosomePackingIllustration;
}

const molecularStructureDnaQuizItems: Question[] = [
	{
		id: 1,
		question:
			'A DNA model preserves covalent continuity while allowing the two strands to separate under gentle heat. Which evidence does this observation support?',
		options: [
			'Hydrogen bonds break before covalent bonds.',
			'Phosphodiester bonds melt before bases pair.',
			'Purines become pyrimidines after heating.',
			'Chromosomes lose genes during denaturation.'
		],
		answer: 'Hydrogen bonds break before covalent bonds.',
		explanation:
			'The lecture notes that purified DNA can be denatured by gentle heating without cleavage of covalent bonds, meaning strand separation disrupts weak interstrand bonding rather than the sugar-phosphate backbone.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'An unknown double-stranded DNA has 28 percent adenine. Under Chargaff logic, which base composition must also be true?',
		options: [
			'Thymine is 28 percent of bases.',
			'Guanine is 28 percent of bases.',
			'Cytosine is 44 percent of bases.',
			'Purines are 72 percent of bases.'
		],
		answer: 'Thymine is 28 percent of bases.',
		explanation:
			'Chargaff rules in the lecture state A = T and G = C, with total purines equaling total pyrimidines. If A is 28 percent, T is also 28 percent.',
		difficulty: 'expert',
		illustration: chargaffIllustration
	},
	{
		id: 3,
		question:
			'Which evidence most directly forced the Watson-Crick model to be helical rather than a flat ladder?',
		options: [
			'X-ray diffraction patterns from DNA fibers.',
			'Gentle heating of purified DNA samples.',
			'The 3-prime to 5-prime linkage pattern.',
			'Equal amounts of purines and pyrimidines.'
		],
		answer: 'X-ray diffraction patterns from DNA fibers.',
		explanation:
			'The lecture lists X-ray diffraction patterns of DNA fibers as evidence indicating a helical structure.',
		difficulty: 'expert',
		illustration: helixGeometryIllustration
	},
	{
		id: 4,
		question:
			'A student draws two DNA strands running 5-prime to 3-prime in the same direction. Which feature of the Watson-Crick model is violated?',
		options: [
			'The strands must be anti-parallel.',
			'The bases must be covalently linked.',
			'The helix must contain RNA loops.',
			'The chromosome must form solenoids.'
		],
		answer: 'The strands must be anti-parallel.',
		explanation:
			'The feature slide describes DNA as a double helix with two strands anti-parallel to each other, shown as opposite 5-prime and 3-prime orientations.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'In the lecture model, what forms the external railing of the DNA circular staircase?',
		options: [
			'Alternating deoxyribose and phosphate groups.',
			'Stacked purines and pyrimidines only.',
			'Histone proteins arranged into solenoids.',
			'RNA molecules holding bacterial loops.'
		],
		answer: 'Alternating deoxyribose and phosphate groups.',
		explanation:
			'The DNA backbone or railing is described as deoxyribose phosphate, while bases bridge the strands internally.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'If a base pair is described as C triple-bond G in the slide notation, what is the main conceptual point?',
		options: [
			'Guanine pairs specifically with cytosine.',
			'Cytosine converts chemically into guanine.',
			'Guanine bonds only to another purine.',
			'Cytosine breaks the phosphodiester backbone.'
		],
		answer: 'Guanine pairs specifically with cytosine.',
		explanation:
			'The lecture uses C triple-bond G notation to emphasize complementary base pairing through hydrogen bonding, not covalent conversion or backbone cleavage.',
		difficulty: 'expert',
		illustration: chargaffIllustration
	},
	{
		id: 7,
		question: 'Why can many weak hydrogen bonds still make the DNA molecule stable and rigid?',
		options: [
			'Their large number compensates collectively.',
			'Each one is stronger than covalent bonds.',
			'They replace all phosphodiester linkages.',
			'They prevent every base sequence difference.'
		],
		answer: 'Their large number compensates collectively.',
		explanation:
			'The lecture states that hydrogen bonds are relatively weak, but their preponderance compensates, giving the molecule stability and rigidity.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question: 'Which measurement set matches the geometry described for B-form DNA in the lecture?',
		options: [
			'3.4 A steps, 36 degrees, 20 A diameter.',
			'20 A steps, 34 degrees, 3.4 A diameter.',
			'10 A steps, 360 degrees, 34 A diameter.',
			'34 A steps, 20 degrees, 36 A diameter.'
		],
		answer: '3.4 A steps, 36 degrees, 20 A diameter.',
		explanation:
			'The slide states that each step is 3.4 A and turned 36 degrees, with 10 base pairs per 34 A turn and a 20 A helix diameter.',
		difficulty: 'expert',
		illustration: helixGeometryIllustration
	},
	{
		id: 9,
		question:
			'Ten successive base pairs in the model complete one full turn. Which inference follows from the lecture geometry?',
		options: [
			'One complete turn measures about 34 A.',
			'One complete turn measures about 3.4 A.',
			'Each complete turn contains one nucleotide.',
			'Each complete turn has no base rotation.'
		],
		answer: 'One complete turn measures about 34 A.',
		explanation:
			'The slide gives 3.4 A per step and 10 base pairs per full 360-degree turn, so one turn is about 34 A long.',
		difficulty: 'expert',
		illustration: helixGeometryIllustration
	},
	{
		id: 10,
		question: 'Which statement best connects base-pairing specificity with DNA replicability?',
		options: [
			'Each strand specifies its complementary strand.',
			'Each phosphate specifies an amino acid directly.',
			'Each sugar changes into a nitrogenous base.',
			'Each chromosome carries only one base type.'
		],
		answer: 'Each strand specifies its complementary strand.',
		explanation:
			'The lecture links specific hydrogen-bonded base pairing with replicability: sequence on one strand determines the complementary strand.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question:
			'If two DNA molecules share the same backbone chemistry but encode different traits, which feature supplies their information difference?',
		options: [
			'The varying order of nitrogenous bases.',
			'The replacement of phosphate by protein.',
			'The loss of anti-parallel strand direction.',
			'The number of covalent bonds per sugar.'
		],
		answer: 'The varying order of nitrogenous bases.',
		explanation:
			'The lecture states that variety is supplied by varying the order of bases along the long DNA molecule.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question: 'Which pairing correctly matches chromosome and gene concepts from the lecture?',
		options: [
			'Chromosome carries genes; genes consist of DNA.',
			'Gene carries chromosomes; chromosomes consist of RNA.',
			'Chromosome is only protein; gene is only sugar.',
			'Gene is a nucleoid; chromosome is one codon.'
		],
		answer: 'Chromosome carries genes; genes consist of DNA.',
		explanation:
			'The chromosome is described as the carrier of genes, and the gene as the physical and functional unit of heredity consisting of DNA.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'Why must a bacterial chromosome be condensed into a nucleoid rather than remain an extended chain?',
		options: [
			'The long chromosome must fit inside the cell.',
			'The DNA must become a eukaryotic nucleosome.',
			'The bases must stop pairing during growth.',
			'The chromosome must lose its phosphate groups.'
		],
		answer: 'The long chromosome must fit inside the cell.',
		explanation:
			'The prokaryotic chromosome slide says the lone bacterial chromosome cannot exist as a long chain in the cell and therefore exists in a condensed nucleoid state.',
		difficulty: 'expert',
		illustration: chromosomePackingIllustration
	},
	{
		id: 14,
		question:
			'Which mechanism is named for the condensation of the E. coli nucleoid in the lecture?',
		options: [
			'DNA loops held by RNA plus supercoiling.',
			'DNA wrapped around histones into solenoids.',
			'DNA copied through dispersive replication.',
			'DNA cleaved into separate covalent fragments.'
		],
		answer: 'DNA loops held by RNA plus supercoiling.',
		explanation:
			'The nucleoid slide describes DNA folded into loops held by RNA molecules, with each loop further condensed by supercoiling.',
		difficulty: 'expert',
		illustration: chromosomePackingIllustration
	},
	{
		id: 15,
		question:
			'In eukaryotic chromosome packing, which structure is identified as the basic structural unit?',
		options: [
			'The nucleosome is the structural unit.',
			'The nucleoid is the structural unit.',
			'The codon is the structural unit.',
			'The operator is the structural unit.'
		],
		answer: 'The nucleosome is the structural unit.',
		explanation:
			'The eukaryotic chromosome section states that the structural unit is the nucleosome.',
		difficulty: 'expert',
		illustration: chromosomePackingIllustration
	},
	{
		id: 16,
		question: 'Which packing sequence best follows the eukaryotic chromosome slides?',
		options: [
			'Nucleosomes coil into solenoids, then scaffold loops.',
			'Nucleoids coil into codons, then operon loops.',
			'Bases coil into primers, then helicase loops.',
			'Purines coil into pyrimidines, then RNA loops.'
		],
		answer: 'Nucleosomes coil into solenoids, then scaffold loops.',
		explanation:
			'The lecture states that nucleosomes link with other nucleosomes to form a helical coil called a solenoid, and solenoids are linked to a scaffold.',
		difficulty: 'expert',
		illustration: chromosomePackingIllustration
	},
	{
		id: 17,
		question:
			'Which statement would most directly contradict Chargaff rules in a double-stranded DNA sample?',
		options: [
			'Adenine greatly exceeds thymine abundance.',
			'Purines equal total pyrimidine abundance.',
			'Guanine equals cytosine abundance.',
			'Adenine pairs specifically with thymine.'
		],
		answer: 'Adenine greatly exceeds thymine abundance.',
		explanation:
			'Chargaff rules require A = T and G = C. A large excess of adenine over thymine would contradict that rule.',
		difficulty: 'expert',
		illustration: chargaffIllustration
	},
	{
		id: 18,
		question:
			'Why is the 3-prime to 5-prime phosphodiester linkage evidence important for the model?',
		options: [
			'It defines covalent strand directionality.',
			'It proves bases are outside the helix.',
			'It replaces hydrogen bonding specificity.',
			'It explains bacterial nucleoid looping.'
		],
		answer: 'It defines covalent strand directionality.',
		explanation:
			'One evidence slide states that DNA consists of nucleotides linked by 3-prime to 5-prime phosphodiester bonds, establishing directional covalent strands.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question: 'Which conclusion best integrates the denaturation and base-pairing slides?',
		options: [
			'Base pairing is specific but reversible by heat.',
			'Base pairing is random and covalently permanent.',
			'Backbone cleavage is required for renaturation.',
			'Heating converts nucleosomes into nucleoids.'
		],
		answer: 'Base pairing is specific but reversible by heat.',
		explanation:
			'Hydrogen bonding gives specificity to base pairing, while denaturation by gentle heat separates strands without breaking covalent bonds.',
		difficulty: 'expert'
	},
	{
		id: 20,
		question:
			'A diagram places nitrogenous bases as side rails and deoxyribose phosphate as ladder rungs. Which correction matches the lecture model?',
		options: [
			'Backbones are rails; paired bases are steps.',
			'Bases are rails; phosphates are paired steps.',
			'Histones are rails; RNA loops are steps.',
			'Solenoids are rails; nucleoids are steps.'
		],
		answer: 'Backbones are rails; paired bases are steps.',
		explanation:
			'The DNA feature slides describe the backbone or railing as deoxyribose phosphate, with nitrogenous base pairs bridging the strands as steps.',
		difficulty: 'expert',
		illustration: helixGeometryIllustration
	}
];

export const molecularStructureDnaQuizData = molecularStructureDnaQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? molecularStructureIllustrationFor(question.id)
})) satisfies Question[];
