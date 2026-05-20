export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty: 'expert';
	illustration?: string;
}

const morphologyWorkflowIllustration = `
<svg role="img" aria-label="Systematics morphology workflow" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#10100c"/>
	<text x="34" y="40" fill="#f4c542" font-family="monospace" font-size="18" font-weight="700">MORPHOLOGY EVIDENCE WORKFLOW</text>
	<g font-family="monospace" font-size="14" fill="#f1eee3">
		<rect x="48" y="80" width="150" height="112" rx="6" fill="#17150f" stroke="#f4c542"/>
		<text x="78" y="112">measure</text><text x="78" y="142">calipers</text><text x="78" y="170">matrix</text>
		<rect x="228" y="80" width="150" height="112" rx="6" fill="#17150f" stroke="#3fb6a8"/>
		<text x="258" y="112">observe</text><text x="258" y="142">microscope</text><text x="258" y="170">minute traits</text>
		<rect x="408" y="80" width="150" height="112" rx="6" fill="#17150f" stroke="#f16d4d"/>
		<text x="438" y="112">compare</text><text x="438" y="142">diagnostic</text><text x="438" y="170">characters</text>
		<rect x="588" y="80" width="124" height="112" rx="6" fill="#17150f" stroke="#f4c542"/>
		<text x="614" y="112">publish</text><text x="614" y="142">voucher</text><text x="614" y="170">record</text>
	</g>
</svg>`;

const molecularWorkflowIllustration = `
<svg role="img" aria-label="Systematics molecular workflow" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#10100c"/>
	<text x="34" y="40" fill="#f4c542" font-family="monospace" font-size="18" font-weight="700">MOLECULAR SYSTEMATICS WORKFLOW</text>
	<g font-family="monospace" font-size="14" fill="#f1eee3">
		<rect x="56" y="86" width="130" height="96" rx="6" fill="#17150f" stroke="#3fb6a8"/><text x="84" y="122">PCR</text><text x="84" y="152">amplify</text>
		<rect x="226" y="86" width="130" height="96" rx="6" fill="#17150f" stroke="#f4c542"/><text x="254" y="122">gel</text><text x="254" y="152">size check</text>
		<rect x="396" y="86" width="130" height="96" rx="6" fill="#17150f" stroke="#f16d4d"/><text x="424" y="122">sequence</text><text x="424" y="152">ACTG read</text>
		<rect x="566" y="86" width="130" height="96" rx="6" fill="#17150f" stroke="#3fb6a8"/><text x="594" y="122">tree</text><text x="594" y="152">relationship</text>
		<path d="M194 134 H218 M364 134 H388 M534 134 H558" stroke="#f1eee3" stroke-width="4" stroke-linecap="round"/>
	</g>
</svg>`;

function systematicsIllustrationFor(id: number) {
	return id <= 14 ? morphologyWorkflowIllustration : molecularWorkflowIllustration;
}

const systematicsQuizItems: Question[] = [
	{
		id: 1,
		question:
			'When planning a systematics study, which set best matches the main approaches listed in the lecture?',
		options: [
			'Morphology, molecular tools, collections, journals.',
			'Anatomy, weather records, fossils, surveys.',
			'Behavior, maps, climate, interviews, field guides.',
			'Ecology, chemistry, soils, drawings, transects.'
		],
		answer: 'Morphology, molecular tools, collections, journals.',
		explanation:
			'The lecture frames systematics through morphology, molecular systematics, museums and herbaria with data information systems, and scientific journals.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'A student must inspect insect genitalia or fungal spores for classification. Which tool is most appropriate?',
		options: [
			'A stereomicroscope is most appropriate for minute structures.',
			'A thermal cycler is most appropriate for minute structures.',
			'A field press is most appropriate for minute structures.',
			'A journal index is most appropriate for minute structures.'
		],
		answer: 'A stereomicroscope is most appropriate for minute structures.',
		explanation:
			'The morphology slides identify stereomicroscopes as necessary for viewing minute characters such as insect genitalia and fungal spores.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'If a researcher needs exact pronotum width from a beetle specimen, which tool should be used?',
		options: [
			'Digital calipers should measure the beetle structure.',
			'Dissecting pins should measure the beetle structure.',
			'Gel chambers should measure the beetle structure.',
			'Barcode libraries should measure the beetle structure.'
		],
		answer: 'Digital calipers should measure the beetle structure.',
		explanation:
			'Digital calipers are listed for precise biometric measurements, including examples such as pronotum width of a stag beetle.',
		difficulty: 'expert'
	},
	{
		id: 4,
		question:
			'During morphology work, a specimen must be opened to observe internal structures. Which materials fit this task?',
		options: [
			'Forceps, scalpels, and micro-pins fit this task.',
			'Primers, buffers, and nucleotides fit this task.',
			'Columns, enzymes, and adapters fit this task.',
			'Indexes, archives, and articles fit this task.'
		],
		answer: 'Forceps, scalpels, and micro-pins fit this task.',
		explanation:
			'The lecture lists forceps, scalpels, and micro-pins as dissecting tools used for examining internal structures.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'Why are measurements and detailed illustrations important when documenting a new specimen?',
		options: [
			'They form the first character matrix.',
			'They replace the need for descriptions.',
			'They remove the value of journals.',
			'They prove every species is related.'
		],
		answer: 'They form the first character matrix.',
		explanation:
			'The morphology section states that standardized measurements and detailed illustrations form the initial character matrix.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'A learner compares crows and ravens using bill shape, tail shape, calls, and habitat. What are these traits?',
		options: [
			'These traits are useful diagnostic characters.',
			'These traits are random molecular markers.',
			'These traits are hidden genomic primers.',
			'These traits are sequencing quality errors.'
		],
		answer: 'These traits are useful diagnostic characters.',
		explanation:
			'The diagnostic characters slide compares crows and ravens through traits such as travel pattern, habitat, life span, call, tail shape, and bill shape.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question:
			'Which group of butterfly features best represents the six external characters from the lecture?',
		options: [
			'Antennae, venation, patterns, body, legs, and genitalia.',
			'Eyes, feathers, claws, scales, teeth, and jaws.',
			'Roots, stems, leaves, flowers, fruits, and seeds.',
			'Genes, proteins, salts, buffers, primers, and enzymes.'
		],
		answer: 'Antennae, venation, patterns, body, legs, and genitalia.',
		explanation:
			'The butterfly morphology section lists antennae, wing venation, wing patterns, body structure, legs, and genitalia as external characters.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question:
			'An insect has slender antennae with swollen clubs at the tips. What identification step does this support?',
		options: [
			'It supports confirming the insect is a butterfly.',
			'It supports confirming the insect is a beetle.',
			'It supports confirming the insect is a spider.',
			'It supports confirming the insect is a fly.'
		],
		answer: 'It supports confirming the insect is a butterfly.',
		explanation:
			'The lecture describes clubbed antennae as the primary differentiator used to distinguish butterflies from moths.',
		difficulty: 'expert'
	},
	{
		id: 9,
		question:
			'A butterfly has a hooked club on the antenna. Which family clue from the lecture fits best?',
		options: [
			'The clue points toward Hesperiidae identification.',
			'The clue points toward Pieridae identification.',
			'The clue points toward Nymphalidae identification.',
			'The clue points toward Papilionidae identification.'
		],
		answer: 'The clue points toward Hesperiidae identification.',
		explanation:
			'The antennae slide gives simple clubs for Papilionidae, thicker clubs for Nymphalidae, and a hooked club for Hesperiidae.',
		difficulty: 'expert'
	},
	{
		id: 10,
		question:
			'When wing color is confusing, a student checks vein arrangement across the wings. Why is this useful?',
		options: [
			'Wing venation is reliable for classification.',
			'Wing venation is useless for classification.',
			'Wing venation replaces every character.',
			'Wing venation confirms DNA quality.'
		],
		answer: 'Wing venation is reliable for classification.',
		explanation:
			'The lecture calls wing venation one of the most reliable taxonomic characters used in butterfly classification.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question:
			'Why can eyespots, bands, stripes, and marginal markings help identify butterfly species?',
		options: [
			'They reflect camouflage, mimicry, and signaling.',
			'They reflect primers, buffers, and enzymes.',
			'They reflect journals, archives, and citations.',
			'They reflect denaturing, annealing, and extension.'
		],
		answer: 'They reflect camouflage, mimicry, and signaling.',
		explanation:
			'The wing pattern slide connects markings to species identification and to camouflage, mimicry, and sexual signaling.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question:
			'A butterfly seems to walk on only four legs because the forelegs are reduced. Which family is suggested?',
		options: [
			'The butterfly suggests a Nymphalidae family.',
			'The butterfly suggests a Pieridae family.',
			'The butterfly suggests a Hesperiidae family.',
			'The butterfly suggests a Papilionidae family.'
		],
		answer: 'The butterfly suggests a Nymphalidae family.',
		explanation:
			'Nymphalidae are brush-footed butterflies with severely reduced forelegs, creating a four-legged appearance.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'Two closely related butterflies have nearly identical wing patterns. Which evidence should separate them most accurately?',
		options: [
			'Genital morphology should separate them most accurately.',
			'General habitat should separate them most accurately.',
			'Common color should separate them most accurately.',
			'Wing size should separate them most accurately.'
		],
		answer: 'Genital morphology should separate them most accurately.',
		explanation:
			'The lecture presents genital morphology as the ultimate tie-breaker when external wing patterns are identical.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'In field identification of butterflies, which observation should be made before wing shape and wing patterns?',
		options: [
			'Antenna shape should be checked first.',
			'Host plant should be checked first.',
			'Geographic range should be checked first.',
			'Genital form should be checked first.'
		],
		answer: 'Antenna shape should be checked first.',
		explanation:
			'The field identification sequence starts with antenna shape to confirm butterfly identity before checking wing shape, patterns, behavior, host plant, and location.',
		difficulty: 'expert'
	},
	{
		id: 15,
		question:
			'A laboratory must amplify a COI barcoding gene before sequencing. Which machine performs this step?',
		options: [
			'A thermal cycler performs the amplification step.',
			'A stereomicroscope performs the amplification step.',
			'A herbarium cabinet performs the amplification step.',
			'A chromatogram performs the amplification step.'
		],
		answer: 'A thermal cycler performs the amplification step.',
		explanation:
			'The molecular systematics slides describe thermal cyclers for PCR, where precise temperature cycling and Taq polymerase amplify target genome regions such as COI.',
		difficulty: 'expert'
	},
	{
		id: 16,
		question:
			'After amplification, a machine reads the order of ACTG bases from genetic material. What is being used?',
		options: [
			'A DNA sequencer is being used.',
			'A digital caliper is being used.',
			'A UV cabinet is being used.',
			'A field notebook is being used.'
		],
		answer: 'A DNA sequencer is being used.',
		explanation:
			'DNA sequencers are described as machines that read the order of ACTG bases, from Sanger sequencing to whole-genome NGS platforms.',
		difficulty: 'expert'
	},
	{
		id: 17,
		question:
			'A student runs amplified DNA through a gel under an electric field before sequencing. What is the purpose?',
		options: [
			'It checks DNA size and quality.',
			'It creates preserved voucher specimens.',
			'It measures butterfly thorax width.',
			'It publishes a taxonomic article.'
		],
		answer: 'It checks DNA size and quality.',
		explanation:
			'The gel electrophoresis slide explains that DNA runs through an agarose gel matrix under an electric field to check size and overall quality.',
		difficulty: 'expert'
	},
	{
		id: 18,
		question: 'What does a UV transilluminator help confirm after gel electrophoresis?',
		options: [
			'It shows glowing target DNA bands.',
			'It shows folded voucher specimens.',
			'It shows antenna club shapes.',
			'It shows journal citation counts.'
		],
		answer: 'It shows glowing target DNA bands.',
		explanation:
			'The lecture states that a UV transilluminator causes target DNA bands to glow bright orange for visual confirmation.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question:
			'Why have DNA, RNA, and protein analyses contributed strongly to modern phylogenetic trees?',
		options: [
			'They provide molecular evidence for relationships.',
			'They provide weather evidence for relationships.',
			'They provide journal evidence for relationships.',
			'They provide habitat evidence for relationships.'
		],
		answer: 'They provide molecular evidence for relationships.',
		explanation:
			'The phylogenetic tree slide states that advances in molecular biology and polymeric molecules such as DNA, RNA, and proteins helped develop phylogenetic trees.',
		difficulty: 'expert'
	},
	{
		id: 20,
		question: 'Which list contains examples of molecular data types named in the lecture?',
		options: [
			'DNA sequences, RFLPs, allozymes, microsatellites, RAPDs, AFLPs.',
			'Wing veins, antennae, legs, genitalia, color bands, scales.',
			'Forceps, scalpels, pins, calipers, lenses, field notebooks.',
			'Journals, archives, indexes, volumes, issues, editorial boards.'
		],
		answer: 'DNA sequences, RFLPs, allozymes, microsatellites, RAPDs, AFLPs.',
		explanation:
			'The molecular data slide lists DNA sequences, restriction sites or RFLPs, allozymes, microsatellites, RAPDs, and AFLPs.',
		difficulty: 'expert'
	},
	{
		id: 21,
		question:
			'During PCR, heat separates DNA strands, primers bind conserved regions, and polymerase extends them. What result follows?',
		options: [
			'The target DNA becomes many copies.',
			'The target DNA becomes voucher labels.',
			'The target DNA becomes wing venation.',
			'The target DNA becomes journal pages.'
		],
		answer: 'The target DNA becomes many copies.',
		explanation:
			'PCR is defined as a replication process used to amplify DNA into thousands of copies through denaturing, primer annealing, and polymerase extension.',
		difficulty: 'expert'
	},
	{
		id: 22,
		question: 'In Sanger-style sequencing, why are dideoxynucleotides added in small amounts?',
		options: [
			'They terminate new DNA strand synthesis.',
			'They preserve insect body structures.',
			'They widen butterfly wing veins.',
			'They index taxonomic journal archives.'
		],
		answer: 'They terminate new DNA strand synthesis.',
		explanation:
			'The sequencing slide explains that dideoxynucleotides terminate the polymerase reaction once they join a new DNA strand.',
		difficulty: 'expert'
	},
	{
		id: 23,
		question:
			'A sequencing chromatogram has clean single-color peaks and little baseline noise. What does this indicate?',
		options: [
			'The chromatogram is easier to interpret.',
			'The chromatogram is impossible to interpret.',
			'The chromatogram is unrelated to sequencing.',
			'The chromatogram is only morphology data.'
		],
		answer: 'The chromatogram is easier to interpret.',
		explanation:
			'The chromatogram slide highlights absent baseline noise, evenly distributed peaks, and single-color peaks as basics for interpreting sequence data.',
		difficulty: 'expert'
	},
	{
		id: 24,
		question: 'Which answer names the three DNA sequence data categories shown in the lecture?',
		options: [
			'Chloroplast, nuclear, and mitochondrial DNA.',
			'They are antenna, venation, and genital DNA.',
			'They are journal, museum, and herbarium DNA.',
			'They are caliper, scalpel, and primer DNA.'
		],
		answer: 'Chloroplast, nuclear, and mitochondrial DNA.',
		explanation:
			'The sequence data slide lists chloroplast DNA, nuclear DNA, and mitochondrial DNA, noting that mtDNA is used more with animals than plants.',
		difficulty: 'expert'
	},
	{
		id: 25,
		question:
			'A food product contains many hidden fish species in one mixed sample. Which method best handles the mixture?',
		options: [
			'NGS handles the mixed biological sample.',
			'Single barcoding handles the mixed biological sample.',
			'Wing venation handles the mixed biological sample.',
			'Digital calipers handle the mixed biological sample.'
		],
		answer: 'NGS handles the mixed biological sample.',
		explanation:
			'The NGS slides contrast traditional DNA barcoding for single organisms with NGS for high-throughput mixed samples, including detection of more than 15 mixed fish species.',
		difficulty: 'expert'
	}
];

export const systematicsQuizData = systematicsQuizItems.map((question) => ({
	...question,
	difficulty: 'expert' as const,
	illustration: question.illustration ?? systematicsIllustrationFor(question.id)
})) satisfies Question[];
