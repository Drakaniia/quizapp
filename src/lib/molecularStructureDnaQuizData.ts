import type { Question } from './collegeQuizTypes';

const evidenceIllustration = `
<svg role="img" aria-label="Four evidence streams for the Watson-Crick DNA model" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="260" rx="8" fill="#101321"/>
	<text x="32" y="40" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">MODEL CONSTRAINTS</text>
	<g font-family="monospace" font-size="14" fill="#e9eef7">
		<rect x="42" y="72" width="315" height="58" rx="6" fill="#172033" stroke="#7fd0ff"/>
		<text x="64" y="106">3-prime to 5-prime phosphodiester links</text>
		<rect x="402" y="72" width="315" height="58" rx="6" fill="#172033" stroke="#f6c85f"/>
		<text x="424" y="106">Chargaff balance: A=T and G=C</text>
		<rect x="42" y="156" width="315" height="58" rx="6" fill="#172033" stroke="#7ee0b2"/>
		<text x="64" y="190">Heat separates strands, not backbones</text>
		<rect x="402" y="156" width="315" height="58" rx="6" fill="#172033" stroke="#a98dff"/>
		<text x="424" y="190">X-ray fiber patterns imply a helix</text>
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

const helixGeometryIllustration = `
<svg role="img" aria-label="Watson-Crick DNA helix geometry" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="270" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">B-FORM DNA GEOMETRY</text>
	<g fill="none" stroke-linecap="round">
		<path d="M150 64 C262 106 262 164 150 206" stroke="#7fd0ff" stroke-width="8"/>
		<path d="M334 64 C222 106 222 164 334 206" stroke="#f6c85f" stroke-width="8"/>
		<path d="M172 86 H312 M205 112 H280 M205 158 H280 M172 184 H312" stroke="#e9eef7" stroke-width="5"/>
		<path d="M390 64 V206" stroke="#7ee0b2" stroke-width="4"/>
		<path d="M380 64 H400 M380 206 H400" stroke="#7ee0b2" stroke-width="4"/>
	</g>
	<g font-family="monospace" font-size="15" fill="#e9eef7">
		<text x="430" y="86">3.4 A between stacked bases</text>
		<text x="430" y="120">36 degrees per base step</text>
		<text x="430" y="154">10 base pairs per 34 A turn</text>
		<text x="430" y="188">20 A, or 2 nm, helix diameter</text>
		<text x="430" y="222">paired bases are internal steps</text>
	</g>
</svg>`;

const prokaryoticNucleoidIllustration = `
<svg role="img" aria-label="Prokaryotic nucleoid loops and supercoiling" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="260" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">E. COLI NUCLEOID LOGIC</text>
	<g fill="none" stroke-linecap="round">
		<path d="M112 168 C152 52 224 52 264 168 C306 52 378 52 418 168 C458 52 530 52 570 168" stroke="#7fd0ff" stroke-width="5"/>
		<path d="M120 172 C148 146 174 190 202 162 C230 134 256 190 284 162" stroke="#f6c85f" stroke-width="4"/>
		<path d="M336 172 C364 146 390 190 418 162 C446 134 472 190 500 162" stroke="#f6c85f" stroke-width="4"/>
		<circle cx="340" cy="132" r="18" fill="#172033" stroke="#7ee0b2" stroke-width="5"/>
		<circle cx="572" cy="132" r="18" fill="#172033" stroke="#7ee0b2" stroke-width="5"/>
	</g>
	<g font-family="monospace" font-size="14" fill="#e9eef7">
		<text x="68" y="220">long bacterial chromosome -> RNA-held loops -> supercoiled loop domains</text>
	</g>
</svg>`;

const nucleosomeIllustration = `
<svg role="img" aria-label="Nucleosome composition and dimensions" viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="280" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">NUCLEOSOME UNIT</text>
	<g fill="none" stroke-linecap="round">
		<path d="M86 166 C146 78 260 78 320 166 C380 252 494 252 554 166" stroke="#7fd0ff" stroke-width="8"/>
		<circle cx="194" cy="132" r="34" fill="#172033" stroke="#f6c85f" stroke-width="5"/>
		<circle cx="252" cy="132" r="34" fill="#172033" stroke="#f6c85f" stroke-width="5"/>
		<circle cx="194" cy="190" r="34" fill="#172033" stroke="#f6c85f" stroke-width="5"/>
		<circle cx="252" cy="190" r="34" fill="#172033" stroke="#f6c85f" stroke-width="5"/>
		<path d="M336 116 V208" stroke="#7ee0b2" stroke-width="10"/>
	</g>
	<g font-family="monospace" font-size="14" fill="#e9eef7">
		<text x="430" y="92">chromatin = DNA + protein</text>
		<text x="430" y="122">octamer: 2 each H2A, H2B, H3, H4</text>
		<text x="430" y="152">146 bp DNA wound about two times</text>
		<text x="430" y="182">linker DNA about 50 bp</text>
		<text x="430" y="212">H1 sits outside the octamer</text>
		<text x="430" y="242">repeat unit about 200 bp</text>
	</g>
</svg>`;

const higherOrderPackingIllustration = `
<svg role="img" aria-label="Eukaryotic higher-order chromosome packing" viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="300" rx="8" fill="#101321"/>
	<text x="32" y="38" fill="#7fd0ff" font-family="monospace" font-size="18" font-weight="700">EUKARYOTIC COMPACTION LADDER</text>
	<g font-family="monospace" font-size="13" fill="#e9eef7">
		<text x="56" y="86">2 nm DNA helix</text>
		<text x="56" y="126">11 nm beads-on-string</text>
		<text x="56" y="166">30 nm solenoid fiber</text>
		<text x="56" y="206">300 nm radial loops</text>
		<text x="56" y="246">700 nm chromatid</text>
		<text x="506" y="246">1400 nm mitotic chromosome</text>
	</g>
	<g fill="none" stroke-linecap="round">
		<path d="M280 80 H612" stroke="#7fd0ff" stroke-width="4"/>
		<circle cx="296" cy="122" r="14" fill="#172033" stroke="#f6c85f" stroke-width="4"/>
		<circle cx="338" cy="122" r="14" fill="#172033" stroke="#f6c85f" stroke-width="4"/>
		<circle cx="380" cy="122" r="14" fill="#172033" stroke="#f6c85f" stroke-width="4"/>
		<path d="M280 166 C318 132 356 200 394 166 C432 132 470 200 508 166" stroke="#7ee0b2" stroke-width="6"/>
		<path d="M284 210 C330 154 366 262 412 210 C458 154 494 262 540 210" stroke="#a98dff" stroke-width="6"/>
		<path d="M300 246 C370 214 440 278 510 246" stroke="#f6c85f" stroke-width="10"/>
		<path d="M612 220 C646 246 646 246 612 274 M654 220 C620 246 620 246 654 274" stroke="#7fd0ff" stroke-width="10"/>
	</g>
</svg>`;

function molecularStructureIllustrationFor(id: number) {
	if (id <= 5) return evidenceIllustration;
	if (id === 6 || id === 8 || id === 17) return chargaffIllustration;
	if (id >= 7 && id <= 14) return helixGeometryIllustration;
	if (id === 15 || id === 16 || id === 25) return prokaryoticNucleoidIllustration;
	if (id >= 18 && id <= 20) return nucleosomeIllustration;
	return higherOrderPackingIllustration;
}

const molecularStructureDnaQuizItems: Question[] = [
	{
		id: 1,
		question:
			'A proposed DNA model has complementary bases and a helix, but no fixed covalent direction along either strand. Which lecture evidence does it fail to satisfy?',
		options: [
			'Nucleotides linked by 3-prime to 5-prime phosphodiester bonds.',
			'X-ray diffraction indicating a repeated helical organization in fibers.',
			'Chargaff equality between adenine and thymine abundance.',
			'Heat denaturation without cleavage of covalent linkages.'
		],
		answer: 'Nucleotides linked by 3-prime to 5-prime phosphodiester bonds.',
		explanation:
			'The phosphodiester-bond evidence establishes covalent strand continuity and directionality. A helix and base complementarity alone do not define the 3-prime to 5-prime linkage pattern.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'Which conclusion is best supported when purified DNA strands separate after gentle heating while covalent bonds remain intact?',
		options: [
			'Strand separation disrupts weak interstrand hydrogen bonds.',
			'Heat converts the sugar-phosphate rails into base pairs.',
			'Covalent phosphodiester bonds are the first bonds broken apart.',
			'Denaturation eliminates the original nucleotide sequence.'
		],
		answer: 'Strand separation disrupts weak interstrand hydrogen bonds.',
		explanation:
			'The lecture notes that gentle heat denatures DNA without covalent cleavage. That supports a model in which interstrand hydrogen bonds are disrupted while the sugar-phosphate backbones remain intact.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'Which evidence most directly restricts the Watson-Crick model to a repeating helical form rather than a nonhelical ladder?',
		options: [
			'X-ray diffraction patterns of DNA fibers.',
			'Equal purine and pyrimidine totals in DNA.',
			'Heat denaturation of purified DNA.',
			'Phosphodiester linkage directionality.'
		],
		answer: 'X-ray diffraction patterns of DNA fibers.',
		explanation:
			'The lecture identifies X-ray diffraction patterns from DNA fibers as the evidence indicating a helical structure.',
		difficulty: 'expert'
	},
	{
		id: 4,
		question:
			'A student treats Chargaff rules as evidence that all DNA molecules have the same base sequence. What is the best correction?',
		options: [
			'Chargaff rules constrain paired proportions, not base order.',
			'Chargaff rules describe histone octamers, not DNA bases in strands.',
			'Chargaff rules require identical genes in all organisms.',
			'Chargaff rules replace the need for complementary pairing.'
		],
		answer: 'Chargaff rules constrain paired proportions, not base order.',
		explanation:
			'Chargaff rules state A = T and G = C, or purines equal pyrimidines. They do not say that every DNA molecule has the same sequence.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'Which combination of evidence best explains why the Watson-Crick model can be both stable and replicable?',
		options: [
			'Specific base pairing plus intact covalent backbones.',
			'Random base order plus covalent base conversion in strands.',
			'Histone octamers plus bacterial RNA scaffolds.',
			'Metaphase coils plus loss of strand direction.'
		],
		answer: 'Specific base pairing plus intact covalent backbones.',
		explanation:
			'Specific base pairing allows each strand to specify its complement, while covalent backbones preserve the strand sequence. Together they explain stable storage and replicability.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'An analysis reports 22 percent adenine in a double-stranded DNA sample. Which base-composition inference follows from Chargaff rules?',
		options: [
			'T is 22 percent, while G and C are each 28 percent.',
			'G is 22 percent, while A and C are each 28 percent.',
			'C is 22 percent, while A and G are each 28 percent.',
			'T is 28 percent, while G and C are each 22 percent.'
		],
		answer: 'T is 22 percent, while G and C are each 28 percent.',
		explanation:
			'If A is 22 percent, T must also be 22 percent. The remaining 56 percent is split equally between G and C, giving 28 percent each.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question:
			'A DNA diagram shows both strands labeled 5-prime to 3-prime from left to right. Which Watson-Crick feature is violated?',
		options: [
			'The two strands must run anti-parallel.',
			'The base pairs must lie outside the helix.',
			'The molecule must lack hydrogen bonding.',
			'The chromosome must be prokaryotic only.'
		],
		answer: 'The two strands must run anti-parallel.',
		explanation:
			'The feature slide shows the DNA strands oriented in opposite directions, with one strand running 5-prime to 3-prime and the other 3-prime to 5-prime.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question:
			'Why does pairing a purine with a pyrimidine matter structurally in the Watson-Crick model?',
		options: [
			'It preserves a consistent helix width across base pairs.',
			'It prevents all base pairs from using hydrogen bonds correctly.',
			'It forces every chromosome to have identical genes.',
			'It makes the sugar-phosphate backbone noncovalent.'
		],
		answer: 'It preserves a consistent helix width across base pairs.',
		explanation:
			'Complementary pairing of A with T and C with G keeps purine-pyrimidine dimensions consistent, supporting the regular helix diameter described in the lecture.',
		difficulty: 'expert'
	},
	{
		id: 9,
		question:
			'A model places nitrogenous bases as the outer rails and the deoxyribose-phosphate chain as the steps. What correction matches the lecture?',
		options: [
			'Sugar-phosphate backbones are rails, and base pairs are steps.',
			'Nitrogenous bases are rails, and phosphate groups become steps.',
			'Histone proteins are rails, and solenoid fibers are steps.',
			'RNA loops are rails, and nucleosome cores are internal steps.'
		],
		answer: 'Sugar-phosphate backbones are rails, and base pairs are steps.',
		explanation:
			'The lecture describes the backbone or railing as deoxyribose phosphate, with nitrogenous bases bridging the strands as the staircase steps.',
		difficulty: 'expert'
	},
	{
		id: 10,
		question:
			'If 40 consecutive base pairs are modeled using the lecture geometry, which estimate is most consistent?',
		options: [
			'About four helical turns spanning roughly 136 A.',
			'About one helical turn spanning roughly 40 A.',
			'About ten helical turns spanning roughly 34 A.',
			'About forty helical turns spanning roughly 20 A.'
		],
		answer: 'About four helical turns spanning roughly 136 A.',
		explanation:
			'The slide gives 10 base pairs per turn and 3.4 A per base-pair step. Forty base pairs therefore make four turns and span about 136 A.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question:
			'What angular rotation should be expected between adjacent base-pair steps if one full 360-degree turn contains 10 base pairs?',
		options: [
			'36 degrees per base-pair step.',
			'20 degrees per base-pair step.',
			'34 degrees per base-pair step.',
			'3.4 degrees per base-pair step.'
		],
		answer: '36 degrees per base-pair step.',
		explanation:
			'The lecture directly states that each step is turned 36 degrees, which is also 360 degrees divided by 10 base-pair steps.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question:
			'Which statement best explains how weak hydrogen bonds can still contribute to a stable DNA molecule?',
		options: [
			'Many weak bonds act together across the long molecule.',
			'Each hydrogen bond is stronger than the covalent backbone.',
			'Hydrogen bonds permanently replace phosphodiester bonds.',
			'Weak bonding eliminates the need for base specificity.'
		],
		answer: 'Many weak bonds act together across the long molecule.',
		explanation:
			'The lecture says hydrogen bonds are relatively weak but their preponderance compensates, making the molecule stable and rigid.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'Two DNA molecules have the same sugar-phosphate chemistry but direct different traits. Which feature most likely differs?',
		options: [
			'The order of bases along the long molecule.',
			'The presence of any covalent backbone bonds.',
			'The use of deoxyribose instead of phosphate.',
			'The existence of paired strands in the helix.'
		],
		answer: 'The order of bases along the long molecule.',
		explanation:
			'The lecture states that DNA variety is supplied by varying the order of bases on the long molecule.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'Which inference connects complementary base pairing most directly to DNA replicability?',
		options: [
			'One strand can specify the sequence of its partner.',
			'One phosphate can determine the identity of a histone.',
			'One nucleosome can copy a bacterial chromosome.',
			'One solenoid can replace a missing nitrogenous base.'
		],
		answer: 'One strand can specify the sequence of its partner.',
		explanation:
			'Specific A-T and C-G pairing means the sequence on one strand determines the complementary sequence on the other, supporting replication.',
		difficulty: 'expert'
	},
	{
		id: 15,
		question:
			'Why does the bacterial chromosome need a condensed nucleoid organization according to the lecture?',
		options: [
			'The long chromosome cannot remain extended inside the cell.',
			'The chromosome must become a histone octamer before division.',
			'The bases must stop forming hydrogen bonds in bacteria.',
			'The RNA scaffold must convert DNA into eukaryotic chromatin.'
		],
		answer: 'The long chromosome cannot remain extended inside the cell.',
		explanation:
			'The prokaryotic chromosome slide states that the bacterial lone chromosome cannot exist as a long chain in the cell and must exist in a condensed nucleoid state.',
		difficulty: 'expert'
	},
	{
		id: 16,
		question:
			'Which mechanism best describes the E. coli nucleoid condensation shown in the lecture?',
		options: [
			'DNA loops held by RNA, with each loop further supercoiled.',
			'DNA wrapped around histone octamers, then folded into solenoids.',
			'Base pairs cleaved into codons, then attached to a scaffold.',
			'Purines converted into pyrimidines, then packed into fibers.'
		],
		answer: 'DNA loops held by RNA, with each loop further supercoiled.',
		explanation:
			'The nucleoid slide says DNA is folded into loops held in place by RNA molecules, and each loop is further condensed by supercoiling.',
		difficulty: 'expert'
	},
	{
		id: 17,
		question: 'Which pairing of chromosome and gene concepts matches the lecture most precisely?',
		options: [
			'Chromosomes carry genes; genes are DNA-based heredity units.',
			'Genes carry chromosomes; chromosomes are RNA-based units.',
			'Chromosomes are only protein; genes are only phosphate rails.',
			'Genes are nucleoids; chromosomes are single base-pair steps.'
		],
		answer: 'Chromosomes carry genes; genes are DNA-based heredity units.',
		explanation:
			'The lecture defines the chromosome as the carrier of genes and the gene as the physical and functional unit of heredity consisting of DNA.',
		difficulty: 'expert'
	},
	{
		id: 18,
		question:
			'A student claims a nucleosome core contains H1, H2A, H2B, H3, and H4 in equal numbers. Which correction fits the slide?',
		options: [
			'The octamer has two each of H2A, H2B, H3, and H4.',
			'The octamer has eight H1 proteins and no core histones.',
			'The octamer has one DNA loop held only by RNA molecules.',
			'The octamer has two phosphates for every nitrogenous base.'
		],
		answer: 'The octamer has two each of H2A, H2B, H3, and H4.',
		explanation:
			'The nucleosome slide lists histones H1, H2A, H2B, H3, and H4, but specifies the octamer as two each of H2A, H2B, H3, and H4. H1 is outside the octamer.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question: 'Which measurement set best matches one nucleosome repeat unit in the lecture?',
		options: [
			'146 bp around the octamer plus about 50 bp linker DNA.',
			'34 A around the octamer plus about 20 A linker DNA.',
			'30 nm around the octamer plus about 300 nm linker DNA.',
			'100 Kb around the octamer plus about 2 nm linker DNA.'
		],
		answer: '146 bp around the octamer plus about 50 bp linker DNA.',
		explanation:
			'The slide describes 146 bp of DNA wound about two times around a histone octamer, with linker DNA of about 50 bp and a repeat unit near 200 bp.',
		difficulty: 'expert'
	},
	{
		id: 20,
		question:
			'What does the phrase beads-on-a-string most directly represent in the nucleosome slide?',
		options: [
			'Nucleosomes connected by linker DNA segments.',
			'Purines connected by pyrimidine phosphate rails.',
			'Bacterial loop domains held by RNA molecules.',
			'Metaphase chromatids connected by centromeres.'
		],
		answer: 'Nucleosomes connected by linker DNA segments.',
		explanation: 'The lecture states that linker DNA connects nucleosomes like beads on a string.',
		difficulty: 'expert'
	},
	{
		id: 21,
		question:
			'In the eukaryotic higher-order structure slide, what is the immediate consequence of solenoid formation?',
		options: [
			'Packed nucleosomes create a 30 nm fiber.',
			'DNA loops become an 11 nm chromatosome.',
			'The mitotic chromosome expands to 2 nm.',
			'Radial loops dissolve into free nucleosomes.'
		],
		answer: 'Packed nucleosomes create a 30 nm fiber.',
		explanation:
			'The higher-order structure slide describes the solenoid as the interphase form that creates the 30 nm fiber.',
		difficulty: 'expert'
	},
	{
		id: 22,
		question:
			'Which description best captures radial loops in the lecture model of eukaryotic chromosome organization?',
		options: [
			'Anchored to a protein matrix and independently supercoilable.',
			'They are free histone octamers that cannot undergo supercoiling.',
			'They are denatured DNA strands lacking phosphodiester direction.',
			'They are bacterial nucleoids converted into mitotic chromatids.'
		],
		answer: 'Anchored to a protein matrix and independently supercoilable.',
		explanation:
			'The slide describes radial loops as independently supercoilable, anchored to a protein matrix, and about 100 Kb average length.',
		difficulty: 'expert'
	},
	{
		id: 23,
		question:
			'Which compaction sequence is most consistent with the eukaryotic chromosome diagrams?',
		options: [
			'2 nm helix, 11 nm beads, 30 nm fiber, 300 nm loops, 700 nm chromatid.',
			'11 nm helix, 2 nm beads, 700 nm fiber, 30 nm loops, 300 nm chromatid.',
			'30 nm helix, 300 nm beads, 2 nm fiber, 11 nm loops, 700 nm chromatid.',
			'700 nm helix, 30 nm beads, 11 nm fiber, 2 nm loops, 300 nm chromatid.'
		],
		answer: '2 nm helix, 11 nm beads, 30 nm fiber, 300 nm loops, 700 nm chromatid.',
		explanation:
			'The lecture diagram moves from 2 nm DNA double helix to 11 nm beads-on-string, 30 nm chromatin fiber, 300 nm extended chromosome loops, and 700 nm condensed chromatid.',
		difficulty: 'expert'
	},
	{
		id: 24,
		question:
			'A mitotic chromosome is described as 50,000 times shorter than the extended DNA molecule. Which interpretation is most defensible?',
		options: [
			'The chromosome reflects hierarchical compaction, not DNA loss.',
			'The chromosome shortens because base pairs are deleted in mitosis.',
			'The chromosome forms when histones become nitrogenous bases.',
			'The chromosome is shorter because phosphodiester bonds vanish.'
		],
		answer: 'The chromosome reflects hierarchical compaction, not DNA loss.',
		explanation:
			'The condensation diagram emphasizes hierarchical packaging from helix to chromosome. Shortening is due to compaction, not deletion or chemical conversion of DNA.',
		difficulty: 'expert'
	},
	{
		id: 25,
		question:
			'Which comparison best distinguishes prokaryotic and eukaryotic chromosome packing in the lecture?',
		options: [
			'RNA-held loops in prokaryotes; nucleosome-solenoids in eukaryotes.',
			'Prokaryotes use histone octamers; eukaryotes use RNA-held nucleoids.',
			'Prokaryotes use 30 nm fibers; eukaryotes lack scaffold-associated loops.',
			'Prokaryotes use chromatosomes; eukaryotes avoid higher-order compaction.'
		],
		answer: 'RNA-held loops in prokaryotes; nucleosome-solenoids in eukaryotes.',
		explanation:
			'The prokaryotic slide emphasizes loops held by RNA and supercoiling, while the eukaryotic slides emphasize nucleosomes, solenoids, scaffold-associated loops, and higher-order compaction.',
		difficulty: 'expert'
	}
];

export const molecularStructureDnaQuizData = molecularStructureDnaQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? molecularStructureIllustrationFor(question.id)
})) satisfies Question[];
