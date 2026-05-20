import type { Question } from './collegeQuizTypes';

const chromosomeMutationIllustration = `
<svg role="img" aria-label="Chromosomal mutation classes" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#171014"/>
	<text x="32" y="38" fill="#ff7aa8" font-family="monospace" font-size="18" font-weight="700">CHROMOSOMAL MUTATION SCALE</text>
	<g font-family="monospace" font-size="15" fill="#faedf2">
		<rect x="58" y="82" width="170" height="96" rx="6" fill="#24161d" stroke="#ff7aa8"/>
		<text x="90" y="118">euploidy</text><text x="82" y="148">whole set change</text>
		<rect x="294" y="82" width="170" height="96" rx="6" fill="#24161d" stroke="#ffd166"/>
		<text x="326" y="118">aneuploidy</text><text x="316" y="148">one chromosome off</text>
		<rect x="530" y="82" width="170" height="96" rx="6" fill="#24161d" stroke="#79d6c7"/>
		<text x="564" y="118">structure</text><text x="550" y="148">segment altered</text>
	</g>
</svg>`;

const pointMutationIllustration = `
<svg role="img" aria-label="Point mutation outcomes" viewBox="0 0 760 245" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="245" rx="8" fill="#171014"/>
	<text x="32" y="38" fill="#ff7aa8" font-family="monospace" font-size="18" font-weight="700">POINT MUTATION OUTCOMES</text>
	<g font-family="monospace" font-size="15" fill="#faedf2">
		<text x="70" y="88">THE ONE BIG FLY HAD ONE RED EYE</text>
		<text x="70" y="122" fill="#ffd166">missense: changed word, altered meaning</text>
		<text x="70" y="154" fill="#79d6c7">nonsense: early stop, shortened message</text>
		<text x="70" y="186" fill="#ff7aa8">same sense: altered codon, same amino acid</text>
	</g>
</svg>`;

const transposonIllustration = `
<svg role="img" aria-label="Transposon movement in maize kernels" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="240" rx="8" fill="#171014"/>
	<text x="32" y="38" fill="#ff7aa8" font-family="monospace" font-size="18" font-weight="700">TRANSPOSON MOSAICISM</text>
	<g>
		<rect x="78" y="82" width="120" height="100" rx="8" fill="#551934" stroke="#ff7aa8" stroke-width="3"/>
		<circle cx="110" cy="112" r="10" fill="#ffd166"/><circle cx="150" cy="134" r="8" fill="#faedf2"/><circle cx="172" cy="102" r="7" fill="#ffd166"/>
		<rect x="322" y="82" width="120" height="100" rx="8" fill="#faedf2" stroke="#ffd166" stroke-width="3"/>
		<path d="M340 112 C370 78 396 158 428 104" stroke="#551934" stroke-width="8" fill="none"/>
		<path d="M230 132 H300 M464 132 H534" stroke="#79d6c7" stroke-width="5" stroke-linecap="round"/>
		<path d="M286 118 L304 132 L286 146 M520 118 L538 132 L520 146" stroke="#79d6c7" stroke-width="5" fill="none"/>
		<text x="560" y="125" fill="#faedf2" font-family="monospace" font-size="15">Ac-Ds moves</text>
		<text x="560" y="153" fill="#faedf2" font-family="monospace" font-size="15">pigment gene off</text>
	</g>
</svg>`;

const mutationRateIllustration = `
<svg role="img" aria-label="Mutation rate balance" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#171014"/>
	<text x="32" y="38" fill="#ff7aa8" font-family="monospace" font-size="18" font-weight="700">MUTATION RATE BALANCE</text>
	<path d="M88 150 C236 60 520 60 672 150" fill="none" stroke="#79d6c7" stroke-width="6" stroke-linecap="round"/>
	<g font-family="monospace" font-size="15" fill="#faedf2">
		<text x="70" y="186">too low: no evolution</text>
		<text x="292" y="92">optimum: useful variation</text>
		<text x="520" y="186">too high: deleterious load</text>
	</g>
</svg>`;

export const mutationsQuizData: Question[] = [
	{
		id: 1,
		question: 'Which definition best matches the lecture framing of mutation?',
		options: [
			'Heritable permanent change in genetic material.',
			'Temporary change in protein folding only.',
			'Environmental change without heredity effects.',
			'RNA processing event removed by splicing.'
		],
		answer: 'Heritable permanent change in genetic material.',
		explanation:
			'The opening slide defines mutations as changes in genetic material that are heritable and essentially permanent.',
		difficulty: 'advanced'
	},
	{
		id: 2,
		question:
			'A plant changes from diploid to tetraploid across its entire chromosome set. Which mutation class is involved?',
		options: [
			'Euploidy changes the whole genome set.',
			'Aneuploidy changes one chromosome only.',
			'Transversion changes one base pair.',
			'Deletion removes only one nucleotide.'
		],
		answer: 'Euploidy changes the whole genome set.',
		explanation:
			'Euploidy is described as a chromosomal mutation involving the whole genome or entire chromosome set.',
		difficulty: 'advanced',
		illustration: chromosomeMutationIllustration
	},
	{
		id: 3,
		question: 'Which case best identifies an autopolyploid according to the lecture?',
		options: [
			'Multiple chromosome sets from one species.',
			'Multiple homeologous sets from two species.',
			'One extra chromosome from nondisjunction.',
			'One inverted segment within a chromosome.'
		],
		answer: 'Multiple chromosome sets from one species.',
		explanation:
			'Autopolyploids are composed of multiple chromosome sets originating within one species, with cultivated potato listed as an autotetraploid example.',
		difficulty: 'advanced',
		illustration: chromosomeMutationIllustration
	},
	{
		id: 4,
		question:
			'A breeder crosses a 4n parent with a 2n parent to produce a seedless watermelon. Why is the triploid outcome useful?',
		options: [
			'Odd chromosome sets make fertility poor.',
			'Odd chromosome sets restore diploid fertility.',
			'Homeologous pairing creates normal gametes.',
			'Robertsonian fusion repairs nondisjunction.'
		],
		answer: 'Odd chromosome sets make fertility poor.',
		explanation:
			'The lecture states that triploids can be constructed from 4n x 2n crosses, and odd chromosome sets are sterile or highly infertile because their gametes and offspring are aneuploid.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'Bread wheat is described as 2n = 6x = 42 and derived from sets from more than one species. Which term fits?',
		options: [
			'Allohexaploid with homeologous sets.',
			'Autotetraploid with identical sets.',
			'Monosomic with one missing chromosome.',
			'Frameshift mutant with two deleted bases.'
		],
		answer: 'Allohexaploid with homeologous sets.',
		explanation:
			'Allopolyploids have chromosome sets from two or more species that are partially homologous, or homeologous; bread wheat is listed as an allohexaploid.',
		difficulty: 'expert',
		illustration: chromosomeMutationIllustration
	},
	{
		id: 6,
		question:
			'Raphanobrassica is radish crossed with cabbage but has a radish head and cabbage root. Why is this example memorable in the lecture?',
		options: [
			'It illustrates experimental allopolyploid formation.',
			'It illustrates simple base-pair substitution.',
			'It illustrates X-ray mutagenic deletion.',
			'It illustrates transposon pigment silencing.'
		],
		answer: 'It illustrates experimental allopolyploid formation.',
		explanation:
			'Raphanobrassica is presented under chromosomal mutation examples involving polyploidy from different species, making it an allopolyploid case.',
		difficulty: 'advanced'
	},
	{
		id: 7,
		question: 'A karyotype shows 2n + 1 for a single chromosome. Which aneuploid class is this?',
		options: [
			'Trisomic, with one chromosome in excess.',
			'Monosomic, with one chromosome missing.',
			'Nullisomic, with two chromosomes missing.',
			'Tetrasomic, with whole genome duplication.'
		],
		answer: 'Trisomic, with one chromosome in excess.',
		explanation:
			'The aneuploidy slide lists monosomic as 2n - 1, nullisomic as 2n - 2, trisomic as 2n + 1, and tetrasomic as 2n + 2.',
		difficulty: 'advanced',
		illustration: chromosomeMutationIllustration
	},
	{
		id: 8,
		question: 'What meiotic error is named as a common source of aneuploidy in the lecture?',
		options: [
			'Nondisjunction of chromosomes during division.',
			'Wobble pairing during third-base reading.',
			'Allolactose binding during lac induction.',
			'Spliceosome action during intron removal.'
		],
		answer: 'Nondisjunction of chromosomes during division.',
		explanation:
			'The aneuploidy section states that aneuploidy can arise via nondisjunction of chromosomes.',
		difficulty: 'advanced'
	},
	{
		id: 9,
		question:
			'A structural chromosome loss is almost always lethal when homozygous and often lethal when heterozygous. Which change is this?',
		options: [
			'Deficiency or deletion of a segment.',
			'Balanced synonymous substitution.',
			'Autopolyploid genome duplication.',
			'Third-position wobble pairing.'
		],
		answer: 'Deficiency or deletion of a segment.',
		explanation:
			'The lecture describes deficiencies or deletions as almost always lethal when homozygous and often lethal when heterozygous.',
		difficulty: 'advanced'
	},
	{
		id: 10,
		question: 'Cri-du-chat syndrome is used as an example of which chromosomal structural change?',
		options: [
			'Terminal deletion of chromosome 5 short arm.',
			'Robertsonian fusion of chromosomes 14 and 21.',
			'Autotetraploidy of a mammalian genome.',
			'Activator-Dissociation movement in maize.'
		],
		answer: 'Terminal deletion of chromosome 5 short arm.',
		explanation:
			'The deletion slide gives Cri-du-chat syndrome as terminal deletion of the short arm of one chromosome 5, leading to mental retardation.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question:
			'Which structural mutation accounts for about 5 percent of known Down syndrome cases in the lecture?',
		options: [
			'Robertsonian translocation involving chromosome 21.',
			'Autopolyploid triploidy involving chromosome 21.',
			'Same-sense point mutation on chromosome 21.',
			'Ac-Ds transposition into chromosome 21.'
		],
		answer: 'Robertsonian translocation involving chromosome 21.',
		explanation:
			'The translocation slide asks how a Robertsonian translocation can lead to Down syndrome and notes translocation Down syndrome accounts for about 5 percent of known cases.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question:
			'Which point-mutation category substitutes A by G or T by C according to the lecture?',
		options: [
			'Transition substitution between similar bases.',
			'Transversion substitution between similar bases.',
			'Frameshift substitution between similar bases.',
			'Transposon substitution between similar bases.'
		],
		answer: 'Transition substitution between similar bases.',
		explanation:
			'The point-mutation slide defines transition as substitution of A by G or T by C, while transversion is substitution such as G by C or T by A.',
		difficulty: 'advanced'
	},
	{
		id: 13,
		question:
			'A mutation changes a codon but leaves the amino acid unchanged. Which outcome from the lecture is this?',
		options: [
			'Same-sense substitution outcome.',
			'Missense substitution outcome.',
			'Nonsense substitution outcome.',
			'Frameshift substitution outcome.'
		],
		answer: 'Same-sense substitution outcome.',
		explanation:
			'The base-pair substitution section lists same sense, missense, and nonsense outcomes; same sense changes the sequence without changing the encoded amino acid.',
		difficulty: 'advanced',
		illustration: pointMutationIllustration
	},
	{
		id: 14,
		question:
			'The sentence analogy stops early after a mutation, producing a shortened message. Which substitution outcome does it model?',
		options: [
			'Nonsense mutation introducing termination.',
			'Missense mutation changing one amino acid.',
			'Same-sense mutation preserving translation.',
			'Transition mutation restoring wild type.'
		],
		answer: 'Nonsense mutation introducing termination.',
		explanation:
			'In the lecture analogy, nonsense truncates the message, corresponding to a base substitution that creates a premature stop.',
		difficulty: 'advanced',
		illustration: pointMutationIllustration
	},
	{
		id: 15,
		question:
			'Why does insertion or deletion of one or two nucleotides usually cause a frameshift?',
		options: [
			'It changes the downstream triplet reading frame.',
			'It preserves every downstream codon boundary.',
			'It duplicates the entire chromosome complement.',
			'It creates only one synonymous codon.'
		],
		answer: 'It changes the downstream triplet reading frame.',
		explanation:
			'The frameshift slide defines frameshift mutations as insertion or deletion of one or two nucleotides that changes the reading frame.',
		difficulty: 'advanced',
		illustration: pointMutationIllustration
	},
	{
		id: 16,
		question:
			'Treffers mutator gene in E. coli changed A-T to C-G and increased mutation rate. What gene category does this illustrate?',
		options: [
			'Mutator genes affecting replication enzymes.',
			'Operator genes affecting lac induction.',
			'Homeotic genes affecting body pattern.',
			'Polygenes affecting quantitative traits.'
		],
		answer: 'Mutator genes affecting replication enzymes.',
		explanation:
			'Mutator genes are described as increasing mutation rate and being associated with enzymes involved in DNA replication, with Treffers mutator gene as an example.',
		difficulty: 'expert'
	},
	{
		id: 17,
		question:
			'Barbara McClintock explained variegated maize kernels using Ac-Ds elements. What type of mutation system is this?',
		options: [
			'Transposons, or jumping genes.',
			'Transitions, or purine swaps.',
			'Triploids, or odd polyploids.',
			'Tetrasomics, or extra pairs.'
		],
		answer: 'Transposons, or jumping genes.',
		explanation:
			'The lecture identifies Barbara McClintock as discovering the Activator-Dissociation transposon system in maize, producing colored, white, and variegated kernels.',
		difficulty: 'advanced',
		illustration: transposonIllustration
	},
	{
		id: 18,
		question:
			'A maize kernel has white streaks because an inserted element keeps a pigment gene off long enough in some cell lineages. Which explanation fits?',
		options: [
			'Transposon position alters pigment expression timing.',
			'Transition mutation restores pigment expression timing.',
			'Triploid sterility alters pigment expression timing.',
			'Rho termination alters pigment expression timing.'
		],
		answer: 'Transposon position alters pigment expression timing.',
		explanation:
			'The transposon slide states that movement next to a pigment-producing gene can turn pigment off, and the duration in that position affects mottling severity.',
		difficulty: 'expert',
		illustration: transposonIllustration
	},
	{
		id: 19,
		question: 'Which set contains only mutagen sources listed in the lecture?',
		options: [
			'X-rays, nitrous acid, colchicine, regeneration.',
			'Allolactose, tryptophan, histones, exons.',
			'Primase, ligase, helicase, topoisomerase.',
			'Poly A tails, CAAT boxes, ribosomes, codons.'
		],
		answer: 'X-rays, nitrous acid, colchicine, regeneration.',
		explanation:
			'The mutagen slide lists ionizing radiation, chemical mutagens including nitrous acid and colchicine, extreme conditions, cell regeneration, and hybridization.',
		difficulty: 'advanced'
	},
	{
		id: 20,
		question: 'Why is mutation described as both necessary and dangerous for populations?',
		options: [
			'It supplies variation but excess load is harmful.',
			'It prevents evolution but excess load is helpful.',
			'It removes all variation but improves fitness.',
			'It replaces selection and stabilizes every trait.'
		],
		answer: 'It supplies variation but excess load is harmful.',
		explanation:
			'The lecture frames mutation as the ultimate source of variation essential for evolution, but too low a rate prevents evolution and too high a rate overwhelms populations with deleterious effects.',
		difficulty: 'expert',
		illustration: mutationRateIllustration
	}
];
