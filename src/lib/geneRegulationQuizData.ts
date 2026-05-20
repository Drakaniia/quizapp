import type { Question } from './collegeQuizTypes';

const tripletCodeIllustration = `
<svg role="img" aria-label="Triplet code capacity" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#15120f"/>
	<text x="32" y="38" fill="#ffb86b" font-family="monospace" font-size="18" font-weight="700">WHY THREE BASES?</text>
	<g font-family="monospace" font-size="16" fill="#fbf2e8">
		<rect x="74" y="82" width="150" height="84" rx="6" fill="#241c15" stroke="#ffb86b"/>
		<text x="116" y="118">4^1 = 4</text><text x="96" y="146">not enough</text>
		<rect x="304" y="82" width="150" height="84" rx="6" fill="#241c15" stroke="#70d6c8"/>
		<text x="346" y="118">4^2 = 16</text><text x="326" y="146">not enough</text>
		<rect x="534" y="82" width="150" height="84" rx="6" fill="#241c15" stroke="#ff738a"/>
		<text x="576" y="118">4^3 = 64</text><text x="566" y="146">works</text>
	</g>
</svg>`;

const operonIllustration = `
<svg role="img" aria-label="Lac and trp operon control" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="260" rx="8" fill="#15120f"/>
	<text x="32" y="38" fill="#ffb86b" font-family="monospace" font-size="18" font-weight="700">OPERON SWITCH LOGIC</text>
	<g font-family="monospace" font-size="15" fill="#fbf2e8">
		<rect x="64" y="84" width="280" height="110" rx="6" fill="#241c15" stroke="#70d6c8"/>
		<text x="92" y="118">lac: inducible</text>
		<text x="92" y="148">allolactose inactivates repressor</text>
		<text x="92" y="176">operator opens transcription</text>
		<rect x="416" y="84" width="280" height="110" rx="6" fill="#241c15" stroke="#ff738a"/>
		<text x="444" y="118">trp: repressible</text>
		<text x="444" y="148">tryptophan activates repressor</text>
		<text x="444" y="176">operator blocks transcription</text>
	</g>
</svg>`;

const chromatinIllustration = `
<svg role="img" aria-label="Pre-transcriptional chromatin control" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#15120f"/>
	<text x="32" y="38" fill="#ffb86b" font-family="monospace" font-size="18" font-weight="700">PRE-TRANSCRIPTIONAL CONTROL</text>
	<g fill="none" stroke-linecap="round">
		<path d="M80 116 C124 72 168 160 212 116 C256 72 300 160 344 116" stroke="#70d6c8" stroke-width="6"/>
		<path d="M456 92 C496 128 536 128 576 92 C616 56 656 56 696 92" stroke="#ff738a" stroke-width="9"/>
	</g>
	<g font-family="monospace" font-size="14" fill="#fbf2e8">
		<text x="106" y="188">euchromatin: more accessible</text>
		<text x="500" y="188">heterochromatin: usually silent</text>
		<text x="310" y="220">methylated cytosines reinforce inactivation</text>
	</g>
</svg>`;

const developmentIllustration = `
<svg role="img" aria-label="Cell fate and developmental potency" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="240" rx="8" fill="#15120f"/>
	<text x="32" y="38" fill="#ffb86b" font-family="monospace" font-size="18" font-weight="700">DEVELOPMENTAL GENETICS</text>
	<circle cx="126" cy="132" r="42" fill="#241c15" stroke="#70d6c8" stroke-width="4"/>
	<path d="M184 132 H280 M466 132 H560" stroke="#fbf2e8" stroke-width="4" stroke-linecap="round"/>
	<path d="M266 118 L284 132 L266 146 M546 118 L564 132 L546 146" stroke="#fbf2e8" stroke-width="4" fill="none"/>
	<circle cx="368" cy="96" r="34" fill="#241c15" stroke="#ffb86b" stroke-width="4"/>
	<circle cx="368" cy="168" r="34" fill="#241c15" stroke="#ffb86b" stroke-width="4"/>
	<rect x="584" y="82" width="120" height="96" rx="6" fill="#241c15" stroke="#ff738a"/>
	<text x="86" y="202" fill="#fbf2e8" font-family="monospace" font-size="14">potent cell</text>
	<text x="310" y="220" fill="#fbf2e8" font-family="monospace" font-size="14">determinants segregate</text>
	<text x="600" y="132" fill="#fbf2e8" font-family="monospace" font-size="14">fate fixed</text>
</svg>`;

function geneRegulationIllustrationFor(id: number) {
	if (id <= 6) return tripletCodeIllustration;
	if (id <= 13) return operonIllustration;
	if (id <= 17 || id === 20) return chromatinIllustration;
	return developmentIllustration;
}

const geneRegulationQuizItems: Question[] = [
	{
		id: 1,
		question:
			'Before the code was solved, why did a three-base codon become the most plausible coding unit?',
		options: [
			'Three bases create 64 possible codons.',
			'Two bases create 64 possible codons.',
			'One base creates 20 possible codons.',
			'Four bases create only 16 codons.'
		],
		answer: 'Three bases create 64 possible codons.',
		explanation:
			'The lecture explains that 4^1 gives 4 and 4^2 gives 16, both insufficient for 20 amino acids, while 4^3 gives 64 possible codons.',
		difficulty: 'expert',
		illustration: tripletCodeIllustration
	},
	{
		id: 2,
		question:
			'Nirenberg and Matthaei used synthetic poly-U RNA in E. coli translation machinery. Which result helped break the code?',
		options: [
			'Poly-U directed poly-phenylalanine synthesis.',
			'Poly-U directed poly-tryptophan synthesis.',
			'Poly-U directed poly-methionine synthesis.',
			'Poly-U directed poly-glycine synthesis.'
		],
		answer: 'Poly-U directed poly-phenylalanine synthesis.',
		explanation:
			'The codon slide says Nirenberg and Matthaei used synthetic poly-U RNA and obtained poly-Phe, a major step in cracking the genetic code.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'Khorana showed that nucleotide information is transmitted in groups of three and includes start or stop signals. What are these groups called?',
		options: [
			'Codons are three-base message units.',
			'Operons are three-base message units.',
			'Introns are three-base message units.',
			'Enhancers are three-base message units.'
		],
		answer: 'Codons are three-base message units.',
		explanation:
			'The lecture credits Khorana with proving that the nucleotide code is transmitted in groups of three called codons, some of which start or stop protein synthesis.',
		difficulty: 'expert',
		illustration: tripletCodeIllustration
	},
	{
		id: 4,
		question:
			'An mRNA is read three bases at a time without skipping bases, and each nucleotide belongs to only one codon. Which property pair is correct?',
		options: [
			'Comma-free and non-overlapping reading.',
			'Degenerate and mitochondrial reading.',
			'Inducible and constitutive reading.',
			'Repressible and polycistronic reading.'
		],
		answer: 'Comma-free and non-overlapping reading.',
		explanation:
			'The lecture defines comma-free as reading three bases at a time without skipping bases, and non-overlapping as each nucleotide being part of only one codon.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'Which statement captures degeneracy of the genetic code without making it ambiguous?',
		options: [
			'Many amino acids have multiple codons.',
			'Each codon specifies multiple amino acids.',
			'Every codon functions as a stop signal.',
			'Every amino acid has only one codon.'
		],
		answer: 'Many amino acids have multiple codons.',
		explanation:
			'The code is degenerate because an amino acid may be encoded by more than one codon, but each codon still has one amino acid meaning.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'Crick explained degeneracy by proposing precise pairing at the first two codon positions and flexible pairing at the third. Which hypothesis is this?',
		options: [
			'The wobble hypothesis explains degeneracy.',
			'The operon hypothesis explains degeneracy.',
			'The polygenic hypothesis explains degeneracy.',
			'The founder hypothesis explains degeneracy.'
		],
		answer: 'The wobble hypothesis explains degeneracy.',
		explanation:
			'The lecture states that Crick explained degeneracy with the wobble hypothesis: the first two positions pair precisely, while third-position pairing may wobble.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question: 'Which mitochondrial exception to universality is listed in the lecture?',
		options: [
			'UGA can mean tryptophan in mitochondria.',
			'UAA can mean methionine in mitochondria.',
			'UAG can mean phenylalanine in mitochondria.',
			'AUG can mean termination in mitochondria.'
		],
		answer: 'UGA can mean tryptophan in mitochondria.',
		explanation:
			'The universality slide gives mitochondrial exceptions: UGA equals UGG for tryptophan, and AUA equals AUG for methionine.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question: 'Which codon statement correctly links start, open reading frame, and stop signals?',
		options: [
			'AUG starts; UAA, UAG, and UGA stop.',
			'UAA starts; AUG, UAG, and UGA stop.',
			'UGA starts; AUG, UAA, and UAG stop.',
			'UAG starts; UAA, UGA, and AUG stop.'
		],
		answer: 'AUG starts; UAA, UAG, and UGA stop.',
		explanation:
			'The lecture states that AUG is the start signal defining the open reading frame, while UAA, UAG, and UGA are stop codons with no corresponding tRNA.',
		difficulty: 'expert'
	},
	{
		id: 9,
		question:
			'In prokaryotes, several metabolism-related genes are transcribed into one mRNA from a shared promoter. Which unit is described?',
		options: [
			'An operon coordinates grouped genes.',
			'An exon coordinates grouped genes.',
			'A nucleosome coordinates grouped genes.',
			'A spliceosome coordinates grouped genes.'
		],
		answer: 'An operon coordinates grouped genes.',
		explanation:
			'The operon slide defines an operon as grouped genes transcribed into a single polycistronic mRNA from one promoter for coordinated metabolic control.',
		difficulty: 'expert',
		illustration: operonIllustration
	},
	{
		id: 10,
		question:
			'Lactose is present, allolactose changes the lac repressor, and the repressor cannot bind the operator. What happens to the operon?',
		options: [
			'The lac operon turns on.',
			'The lac operon turns off.',
			'The trp operon turns on.',
			'The ara operon turns off.'
		],
		answer: 'The lac operon turns on.',
		explanation:
			'The lac operon is inducible: allolactose inactivates the repressor so it cannot bind the operator, turning gene expression on.',
		difficulty: 'expert',
		illustration: operonIllustration
	},
	{
		id: 11,
		question:
			'Tryptophan is abundant and converts the trp repressor into its active form. Which regulatory outcome follows?',
		options: [
			'The trp operon is turned off.',
			'The trp operon is induced on.',
			'The lac operon is turned on.',
			'The ara operon loses positive control.'
		],
		answer: 'The trp operon is turned off.',
		explanation:
			'The trp operon is repressible and usually on until tryptophan activates the repressor, which turns expression off.',
		difficulty: 'expert',
		illustration: operonIllustration
	},
	{
		id: 12,
		question:
			'Why are lac and trp operons classified together in the lecture despite opposite metabolite effects?',
		options: [
			'Both use negative control of pathways.',
			'Both use positive control by AraC.',
			'Both require eukaryotic enhancers.',
			'Both avoid repressor proteins entirely.'
		],
		answer: 'Both use negative control of pathways.',
		explanation:
			'The lecture explicitly states that lac and trp operons are negative control of a pathway, whereas the arabinose operon is presented as positive control.',
		difficulty: 'expert',
		illustration: operonIllustration
	},
	{
		id: 13,
		question:
			'In the arabinose operon example, arabinose changes AraC behavior so P1 leaves the operator and P2 binds the initiator. What kind of control is highlighted?',
		options: [
			'Positive control of gene expression.',
			'Negative control by allolactose.',
			'Pre-transcriptional DNA methylation.',
			'Post-translational insulin cleavage.'
		],
		answer: 'Positive control of gene expression.',
		explanation:
			'The lecture contrasts lac and trp negative control with the arabinose operon as positive control, where AraC conformation changes support expression in the presence of arabinose.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'Eukaryotic genes are usually solitary, and outside signals alter transcription factor activity. Which regulation principle is being described?',
		options: [
			'External signals can switch transcription.',
			'Operons always control solitary genes.',
			'Codons directly methylate histones.',
			'Ribosomes determine cell fate alone.'
		],
		answer: 'External signals can switch transcription.',
		explanation:
			'The eukaryotic regulation slide states that neurotransmitters or hormones interact with transcription factors to activate or inactivate transcription.',
		difficulty: 'expert'
	},
	{
		id: 15,
		question:
			'A cell becomes committed to one future identity as its developmental potential narrows. Which process is this?',
		options: [
			'Determination restricts developmental potency.',
			'Differentiation expands developmental potency.',
			'Degeneracy restricts developmental potency.',
			'Polyadenylation expands developmental potency.'
		],
		answer: 'Determination restricts developmental potency.',
		explanation:
			'The developmental genetics slides define cell fate and potency, then state that determination involves progressive restriction in developmental potentials.',
		difficulty: 'expert',
		illustration: developmentIllustration
	},
	{
		id: 16,
		question:
			'During cell division, one daughter receives most localized mRNAs or proteins, while the other receives little. Which determination mechanism is illustrated?',
		options: [
			'Asymmetric segregation of cellular determinants.',
			'Degenerate pairing of third codon positions.',
			'Polygenic inheritance of quantitative traits.',
			'Balanced polymorphism between phenotypes.'
		],
		answer: 'Asymmetric segregation of cellular determinants.',
		explanation:
			'The determination mechanism slide says localized proteins or mRNAs can segregate asymmetrically, causing daughter cells to adopt different fates.',
		difficulty: 'expert',
		illustration: developmentIllustration
	},
	{
		id: 17,
		question:
			'A gene is in tightly coiled heterochromatin with methylated cytosines. Which regulatory level is most directly involved?',
		options: [
			'Pre-transcriptional control of accessibility.',
			'Translational control by ribosome loading.',
			'Post-translational control by cleavage.',
			'Codon-level control by wobble pairing.'
		],
		answer: 'Pre-transcriptional control of accessibility.',
		explanation:
			'The pre-transcriptional control slide lists chromatin structure and DNA methylation, noting heterochromatin is generally not transcribed and methylation reinforces inactivation.',
		difficulty: 'expert',
		illustration: chromatinIllustration
	},
	{
		id: 18,
		question: 'Which pair best contrasts heterochromatin and euchromatin in the lecture?',
		options: [
			'Heterochromatin is condensed; euchromatin is decondensed.',
			'Heterochromatin is translated; euchromatin is spliced.',
			'Heterochromatin is induced; euchromatin is repressed.',
			'Heterochromatin is codonless; euchromatin is stopless.'
		],
		answer: 'Heterochromatin is condensed; euchromatin is decondensed.',
		explanation:
			'The chromatin slide labels heterochromatin as condensed and euchromatin as decondensed, with euchromatin more easily transcribed.',
		difficulty: 'expert',
		illustration: chromatinIllustration
	},
	{
		id: 19,
		question:
			'Different mRNAs are produced from the same primary transcript because different exons are retained. Which control mechanism is this?',
		options: [
			'Alternate splicing during transcriptional control.',
			'Ribosome recycling during translational control.',
			'Protein phosphorylation after translation.',
			'Tryptophan repression during operon control.'
		],
		answer: 'Alternate splicing during transcriptional control.',
		explanation:
			'The transcriptional control slide states that different mRNAs can be made from the same primary transcript by alternate splicing, using different exons.',
		difficulty: 'expert'
	},
	{
		id: 20,
		question:
			'An mRNA with a longer poly A tail persists longer and supports translation for more time. Which level of regulation is emphasized?',
		options: [
			'Translational control through mRNA half-life.',
			'Pre-transcriptional control through methylation.',
			'Post-translational control through phosphorylation.',
			'Operon control through allolactose induction.'
		],
		answer: 'Translational control through mRNA half-life.',
		explanation:
			'The translational control slide states that longer mRNA half-life allows longer use during translation, and a longer poly A tail lets mRNA exist longer.',
		difficulty: 'expert'
	}
];

export const geneRegulationQuizData = geneRegulationQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? geneRegulationIllustrationFor(question.id)
})) satisfies Question[];
