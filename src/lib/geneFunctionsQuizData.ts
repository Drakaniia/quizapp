import type { Question } from './collegeQuizTypes';

const centralDogmaIllustration = `
<svg role="img" aria-label="Central dogma flow of information" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#10151f"/>
	<text x="32" y="38" fill="#5bd8c8" font-family="monospace" font-size="18" font-weight="700">INFORMATION FLOW</text>
	<g font-family="monospace" font-size="16" fill="#eef7f5">
		<rect x="58" y="92" width="130" height="70" rx="6" fill="#172231" stroke="#5bd8c8"/>
		<text x="104" y="133">DNA</text>
		<rect x="314" y="92" width="130" height="70" rx="6" fill="#172231" stroke="#f5c766"/>
		<text x="360" y="133">RNA</text>
		<rect x="570" y="92" width="130" height="70" rx="6" fill="#172231" stroke="#ff8f70"/>
		<text x="598" y="133">protein</text>
	</g>
	<path d="M200 128 H300 M456 128 H556" stroke="#eef7f5" stroke-width="5" stroke-linecap="round"/>
	<path d="M286 114 L304 128 L286 142 M542 114 L560 128 L542 142" stroke="#eef7f5" stroke-width="5" fill="none" stroke-linecap="round"/>
	<text x="228" y="106" fill="#b8cac6" font-family="monospace" font-size="13">transcription</text>
	<text x="484" y="106" fill="#b8cac6" font-family="monospace" font-size="13">translation</text>
</svg>`;

const promoterIllustration = `
<svg role="img" aria-label="Promoter elements and RNA polymerase direction" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#10151f"/>
	<text x="32" y="38" fill="#5bd8c8" font-family="monospace" font-size="18" font-weight="700">TRANSCRIPTION PROMOTER MAP</text>
	<path d="M64 138 H696" stroke="#eef7f5" stroke-width="5" stroke-linecap="round"/>
	<g font-family="monospace" font-size="14" fill="#eef7f5">
		<rect x="112" y="96" width="112" height="58" rx="6" fill="#172231" stroke="#f5c766"/>
		<text x="132" y="130">-35 TTGACA</text>
		<rect x="268" y="96" width="126" height="58" rx="6" fill="#172231" stroke="#5bd8c8"/>
		<text x="286" y="130">-10 TATAAT</text>
		<rect x="456" y="96" width="76" height="58" rx="6" fill="#172231" stroke="#ff8f70"/>
		<text x="482" y="130">+1</text>
		<text x="542" y="178">RNA grows 5' to 3'</text>
	</g>
</svg>`;

const translationIllustration = `
<svg role="img" aria-label="Ribosome P and A sites" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#10151f"/>
	<text x="32" y="38" fill="#5bd8c8" font-family="monospace" font-size="18" font-weight="700">TRANSLATION SITES</text>
	<ellipse cx="380" cy="142" rx="230" ry="74" fill="#172231" stroke="#5bd8c8" stroke-width="4"/>
	<path d="M126 174 H636" stroke="#eef7f5" stroke-width="5" stroke-linecap="round"/>
	<g font-family="monospace" font-size="16" fill="#eef7f5">
		<rect x="284" y="92" width="84" height="72" rx="6" fill="#212d3d" stroke="#f5c766"/>
		<text x="316" y="132">P</text>
		<rect x="392" y="92" width="84" height="72" rx="6" fill="#212d3d" stroke="#ff8f70"/>
		<text x="424" y="132">A</text>
		<text x="222" y="204">mRNA moves codon by codon</text>
	</g>
</svg>`;

const processingIllustration = `
<svg role="img" aria-label="Eukaryotic mRNA processing" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#10151f"/>
	<text x="32" y="38" fill="#5bd8c8" font-family="monospace" font-size="18" font-weight="700">RNA PROCESSING</text>
	<g font-family="monospace" font-size="15" fill="#eef7f5">
		<rect x="62" y="82" width="150" height="78" rx="6" fill="#172231" stroke="#5bd8c8"/>
		<text x="92" y="114">5' cap</text><text x="82" y="140">protection</text>
		<rect x="304" y="82" width="150" height="78" rx="6" fill="#172231" stroke="#f5c766"/>
		<text x="340" y="114">splicing</text><text x="324" y="140">introns removed</text>
		<rect x="546" y="82" width="150" height="78" rx="6" fill="#172231" stroke="#ff8f70"/>
		<text x="574" y="114">poly A tail</text><text x="572" y="140">3' stability</text>
	</g>
</svg>`;

function geneFunctionsIllustrationFor(id: number) {
	if (id <= 6) return centralDogmaIllustration;
	if (id <= 13) return promoterIllustration;
	if (id <= 18) return translationIllustration;
	return processingIllustration;
}

const geneFunctionsQuizItems: Question[] = [
	{
		id: 1,
		question:
			'Garrod studied black urine disease and connected a Mendelian recessive disorder to a biochemical block. Which molecule accumulated?',
		options: [
			'Homogentisic acid accumulated in patients.',
			'Galactose oxidase accumulated in patients.',
			'Tryptophan synthetase accumulated in patients.',
			'Messenger RNA accumulated in patients.'
		],
		answer: 'Homogentisic acid accumulated in patients.',
		explanation:
			'The alcaptonuria slides state that accumulation of homogentisic acid, or alcapton, resulted from a biochemical block in patients lacking HA oxidase.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'Feeding phenylalanine and tyrosine to alcaptonuric patients helped establish which interpretation?',
		options: [
			'Phe and Tyr are alcapton precursors.',
			'Phe and Tyr are ribosomal subunits.',
			'Phe and Tyr are stop codons.',
			'Phe and Tyr are promoter boxes.'
		],
		answer: 'Phe and Tyr are alcapton precursors.',
		explanation:
			'The lecture says phenylalanine and tyrosine were established as precursors of alcapton by feeding those amino acids to alcaptonuric patients.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'Beadle and Tatum observed that a genetic mutation corresponded to the lack of a specific enzyme in a pathway. What hypothesis did this support?',
		options: [
			'Genes regulate definite chemical events.',
			'Genes are always unrelated to enzymes.',
			'Enzymes replace DNA in heredity.',
			'Proteins determine codons without RNA.'
		],
		answer: 'Genes regulate definite chemical events.',
		explanation:
			'The lecture states that Beadle and Tatum proposed genes act by regulating definite chemical events, based on a one-to-one correspondence between mutation and missing enzyme.',
		difficulty: 'expert'
	},
	{
		id: 4,
		question:
			'A protein loses function because valine replaces glutamic acid at position 6 of the beta chain. Which example is being invoked?',
		options: [
			'Sickle cell anemia from sequence alteration.',
			'Alcaptonuria from missing HA oxidase.',
			'Rho termination from hairpin failure.',
			'Polycistronic mRNA from operon transcription.'
		],
		answer: 'Sickle cell anemia from sequence alteration.',
		explanation:
			'The protein structure slides use sickle cell anemia as the consequence of valine substituting for glutamic acid at position 6 of the beta chain.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'Yanofsky mapped mutations in the E. coli trp synthetase gene and compared them with amino acid changes. What principle was supported?',
		options: [
			'Gene and polypeptide sequences are colinear.',
			'Genes and proteins are always noncolinear.',
			'Introns are translated into trp synthetase.',
			'Rho factors determine amino acid order.'
		],
		answer: 'Gene and polypeptide sequences are colinear.',
		explanation:
			'The lecture states that Yanofsky and coworkers proved colinearity: the order of mutations in the trp synthetase gene matched the order of amino acid changes in the protein.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'Which transfer is treated as a general information flow in cells, not a virus-specific special transfer?',
		options: [
			'DNA to RNA during transcription.',
			'RNA to RNA during viral replication.',
			'RNA to DNA during reverse transcription.',
			'Protein to DNA during translation.'
		],
		answer: 'DNA to RNA during transcription.',
		explanation:
			'The central-dogma slide separates general transfers in all cells from special transfers in viruses, including RNA to RNA and RNA to DNA.',
		difficulty: 'expert',
		illustration: centralDogmaIllustration
	},
	{
		id: 7,
		question:
			'During transcription, RNA polymerase reads the DNA template strand in which direction while polymerizing RNA?',
		options: [
			'Template read 3-prime to 5-prime.',
			'Template read 5-prime to 3-prime.',
			'Template read codon to codon only.',
			'Template read carboxyl to amino.'
		],
		answer: 'Template read 3-prime to 5-prime.',
		explanation:
			'The lecture says RNA polymerase uses the template or antisense DNA strand in the 3-prime to 5-prime direction while the RNA molecule elongates 5-prime to 3-prime.',
		difficulty: 'expert',
		illustration: promoterIllustration
	},
	{
		id: 8,
		question: 'Which eukaryotic RNA polymerase assignment matches the lecture?',
		options: [
			'RNA Pol II transcribes mRNA genes.',
			'RNA Pol I transcribes tRNA genes.',
			'RNA Pol III transcribes only mRNA genes.',
			'RNA Pol II transcribes larger rRNA genes.'
		],
		answer: 'RNA Pol II transcribes mRNA genes.',
		explanation:
			'The lecture lists RNA Pol I for larger rRNA genes, RNA Pol II for mRNA genes, and RNA Pol III for tRNA and other small RNA genes.',
		difficulty: 'expert'
	},
	{
		id: 9,
		question:
			'In the prokaryotic RNA polymerase description, which subunit mediates promoter binding?',
		options: [
			'The sigma subunit mediates promoter binding.',
			'The beta subunit mediates promoter binding.',
			'The alpha subunit mediates promoter binding.',
			'The beta-prime subunit mediates promoter binding.'
		],
		answer: 'The sigma subunit mediates promoter binding.',
		explanation:
			'The lecture describes alpha as assembly-related, beta as the ribonucleotide phosphate binding site, beta-prime as DNA template binding, and sigma as mediating promoter binding.',
		difficulty: 'expert',
		illustration: promoterIllustration
	},
	{
		id: 10,
		question: 'Which promoter-element pairing is correct for prokaryotic transcription initiation?',
		options: [
			'-10 TATAAT and -35 TTGACA.',
			'-10 CAAT and -35 AUG.',
			'-25 TTGACA and -80 TATAAT.',
			'+1 UAA and -35 poly A.'
		],
		answer: '-10 TATAAT and -35 TTGACA.',
		explanation:
			'The prokaryotic promoter slide lists the -10 consensus sequence TATAAT, also called the Pribnow box, and the -35 consensus sequence TTGACA.',
		difficulty: 'expert',
		illustration: promoterIllustration
	},
	{
		id: 11,
		question: 'Why does the AT-rich Pribnow box help initiate transcription?',
		options: [
			'It facilitates DNA unwinding into a bubble.',
			'It joins ribosomes into a 70S complex.',
			'It adds the 3-prime poly A tail.',
			'It removes introns using spliceosomes.'
		],
		answer: 'It facilitates DNA unwinding into a bubble.',
		explanation:
			'The lecture states that the AT-rich Pribnow box facilitates unwinding of DNA, forming a transcription bubble involving about 18 nucleotide pairs.',
		difficulty: 'expert',
		illustration: promoterIllustration
	},
	{
		id: 12,
		question:
			'A terminator contains a GC-rich region followed by AT base pairs, causing a hairpin and release after polymerase pauses. Which termination mode fits?',
		options: [
			'Rho-independent termination is indicated.',
			'Rho-dependent termination is indicated.',
			'Translation initiation is indicated.',
			'RNA splicing termination is indicated.'
		],
		answer: 'Rho-independent termination is indicated.',
		explanation:
			'Rho-independent terminators contain a GC-rich region that forms a hairpin, followed by A in DNA and U in RNA to facilitate release when RNA polymerase pauses.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'A termination signal needs a protein that interacts with mRNA and RNA polymerase after a pause site. Which mechanism is this?',
		options: [
			'Rho-dependent transcription termination.',
			'Rho-independent hairpin termination.',
			'Spliceosome-dependent intron removal.',
			'Release-factor translation initiation.'
		],
		answer: 'Rho-dependent transcription termination.',
		explanation:
			'The lecture describes rho-dependent termination as requiring rho protein, which interacts with mRNA and RNA polymerase and catches the paused polymerase.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'In bacterial translation initiation, which aminoacyl-tRNA enters first as the lead-off amino acid complex?',
		options: [
			'fMet-tRNA enters first.',
			'Val-tRNA enters first.',
			'Glu-tRNA enters first.',
			'Stop-tRNA enters first.'
		],
		answer: 'fMet-tRNA enters first.',
		explanation:
			'The translation section states that the first aa-tRNA complex to enter polypeptide synthesis is fMet-tRNA as the initiator.',
		difficulty: 'expert',
		illustration: translationIllustration
	},
	{
		id: 15,
		question: 'Which start codon and ribosomal assembly outcome match the lecture description?',
		options: [
			'AUG leads into a 70S initiation complex.',
			'UAA leads into a 70S initiation complex.',
			'UGA leads into a spliceosome complex.',
			'UAG leads into a promoter complex.'
		],
		answer: 'AUG leads into a 70S initiation complex.',
		explanation:
			'The lecture identifies AUG at the 5-prime end as the methionine start codon and describes assembly of 50S plus 30S subunits into the 70S complex.',
		difficulty: 'expert',
		illustration: translationIllustration
	},
	{
		id: 16,
		question:
			'Once fMet-tRNA is positioned in the donor site, the next aminoacyl-tRNA enters which ribosomal site?',
		options: [
			'The A site, also called acceptor site.',
			'The P site, also called donor site.',
			'The CAAT site, also called promoter site.',
			'The poly A site, also called tail site.'
		],
		answer: 'The A site, also called acceptor site.',
		explanation:
			'The lecture names the P site as peptidyl or donor and the A site as aminoacyl or acceptor; the next aa-tRNA enters the A site according to the mRNA codon.',
		difficulty: 'expert',
		illustration: translationIllustration
	},
	{
		id: 17,
		question: 'Which event stops translation according to the lecture?',
		options: [
			'A terminator codon activates release factors.',
			'A Pribnow box activates RNA polymerase.',
			'A poly A tail activates spliceosomes.',
			'A rho hairpin activates fMet-tRNA.'
		],
		answer: 'A terminator codon activates release factors.',
		explanation:
			'Polymerization stops when a terminator codon enters the ribosome and activates release factors RF1 and RF2, causing ribosome release from mRNA.',
		difficulty: 'expert'
	},
	{
		id: 18,
		question: 'Why can bacterial translation occur almost simultaneously with transcription?',
		options: [
			'mRNA can be translated while being made.',
			'Introns must be removed before translation.',
			'mRNA must receive a nuclear poly A tail.',
			'Proteins must enter the nucleus first.'
		],
		answer: 'mRNA can be translated while being made.',
		explanation:
			'The lecture notes that translation occurs almost simultaneously with transcription in prokaryotes, consistent with ribosomes engaging mRNA as it is produced.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question:
			'A single mRNA carries messages for several polypeptides and is associated with many ribosomes. Which terms apply?',
		options: [
			'Polycistronic mRNA and polysome formation.',
			'Monocistronic mRNA and spliceosome formation.',
			'Promoter mRNA and nucleosome formation.',
			'Rho mRNA and solenoid formation.'
		],
		answer: 'Polycistronic mRNA and polysome formation.',
		explanation:
			'The lecture describes some mRNAs as polycistronic, carrying messages for several polypeptides, and many ribosomes on one mRNA as a polyribosome or polysome.',
		difficulty: 'expert'
	},
	{
		id: 20,
		question:
			'Which processing combination converts a eukaryotic primary transcript into translation-ready mRNA?',
		options: [
			'5-prime capping, splicing, and polyadenylation.',
			'Rho binding, helicase loading, and ligation.',
			'Codon wobble, translocation, and termination.',
			'Supercoiling, nucleoid looping, and gyrase.'
		],
		answer: '5-prime capping, splicing, and polyadenylation.',
		explanation:
			'The eukaryotic processing slides describe removal of introns by spliceosome, 5-prime capping, and 3-prime polyadenylation with 100 to 300 A ribonucleotides.',
		difficulty: 'expert',
		illustration: processingIllustration
	}
];

export const geneFunctionsQuizData = geneFunctionsQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? geneFunctionsIllustrationFor(question.id)
})) satisfies Question[];
