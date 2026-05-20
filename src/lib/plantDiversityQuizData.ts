export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty: 'expert';
	illustration?: string;
}

const plantTimelineIllustration = `
<svg role="img" aria-label="Plant evolution timeline" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#11120b"/>
	<text x="34" y="40" fill="#d7ea58" font-family="monospace" font-size="18" font-weight="700">PLANT LINEAGE MILESTONES</text>
	<line x1="80" y1="136" x2="680" y2="136" stroke="#4f5b2d" stroke-width="5" stroke-linecap="round"/>
	<g font-family="monospace" font-size="14" fill="#f1f3df">
		<circle cx="146" cy="136" r="13" fill="#d7ea58"/><text x="104" y="100">475 mya</text><text x="84" y="178">land plants</text>
		<circle cx="356" cy="136" r="13" fill="#66c08f"/><text x="314" y="100">420 mya</text><text x="296" y="178">vascular plants</text>
		<circle cx="566" cy="136" r="13" fill="#e08d64"/><text x="524" y="100">305 mya</text><text x="512" y="178">seed plants</text>
	</g>
</svg>`;

const generationShiftIllustration = `
<svg role="img" aria-label="Dominant generation shift in plants" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#11120b"/>
	<text x="34" y="40" fill="#d7ea58" font-family="monospace" font-size="18" font-weight="700">GENERATION DOMINANCE SHIFT</text>
	<g font-family="monospace" font-size="14" fill="#f1f3df">
		<rect x="52" y="82" width="190" height="108" rx="6" fill="#18190f" stroke="#d7ea58"/>
		<text x="82" y="116">bryophytes</text><text x="82" y="148">dominant gametophyte</text>
		<rect x="286" y="82" width="190" height="108" rx="6" fill="#18190f" stroke="#66c08f"/>
		<text x="316" y="116">ferns</text><text x="316" y="148">free gametophyte</text>
		<rect x="520" y="82" width="190" height="108" rx="6" fill="#18190f" stroke="#e08d64"/>
		<text x="550" y="116">seed plants</text><text x="550" y="148">dependent gametophyte</text>
	</g>
</svg>`;

const seedPlantIllustration = `
<svg role="img" aria-label="Gymnosperm and angiosperm seed comparison" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#11120b"/>
	<text x="34" y="40" fill="#d7ea58" font-family="monospace" font-size="18" font-weight="700">SEED PLANT DECISION POINT</text>
	<g font-family="monospace" font-size="15" fill="#f1f3df">
		<rect x="70" y="78" width="250" height="124" rx="6" fill="#18190f" stroke="#66c08f"/>
		<text x="104" y="112">gymnosperm</text><text x="104" y="144">exposed seed on cone</text><text x="104" y="176">no ovary enclosure</text>
		<rect x="440" y="78" width="250" height="124" rx="6" fill="#18190f" stroke="#e08d64"/>
		<text x="474" y="112">angiosperm</text><text x="474" y="144">flowering plant</text><text x="474" y="176">seed enclosed by fruit</text>
	</g>
	<path d="M344 140 H416" stroke="#d7ea58" stroke-width="5" stroke-linecap="round"/>
</svg>`;

const monocotEudicotIllustration = `
<svg role="img" aria-label="Monocot and eudicot comparison" viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="270" rx="8" fill="#11120b"/>
	<text x="34" y="40" fill="#d7ea58" font-family="monospace" font-size="18" font-weight="700">ANGIOSPERM CHARACTER MATRIX</text>
	<g font-family="monospace" font-size="14" fill="#f1f3df">
		<rect x="52" y="74" width="300" height="150" rx="6" fill="#18190f" stroke="#d7ea58"/>
		<text x="84" y="106">monocot</text><text x="84" y="136">one cotyledon</text><text x="84" y="164">parallel veins</text><text x="84" y="192">fibrous roots, 3s</text>
		<rect x="408" y="74" width="300" height="150" rx="6" fill="#18190f" stroke="#66c08f"/>
		<text x="440" y="106">eudicot</text><text x="440" y="136">two cotyledons</text><text x="440" y="164">netlike veins</text><text x="440" y="192">taproot, 4s or 5s</text>
	</g>
</svg>`;

export const plantDiversityQuizData: Question[] = [
	{
		id: 1,
		question:
			'A cladogram starts with green algal ancestors before land plants. Which evidence-based interpretation best fits the lecture diagram?',
		options: [
			'Land plants branch from green algal relatives.',
			'Land plants branch from fungal relatives.',
			'Land plants branch from animal relatives.',
			'Land plants branch from bacterial relatives.'
		],
		answer: 'Land plants branch from green algal relatives.',
		explanation:
			'The lecture diagram places ancestral green algae before the origin of land plants, so the correct inference is descent from green algal relatives rather than fungi, animals, or bacteria.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 2,
		question:
			'A lineage lacks conducting vascular tissue but still produces embryos on land. Which informal plant group does this pattern diagnose?',
		options: [
			'Bryophytes as nonvascular land plants.',
			'Conifers as exposed-seed land plants.',
			'Monocots as flowering seed plants.',
			'Eudicots as net-veined seed plants.'
		],
		answer: 'Bryophytes as nonvascular land plants.',
		explanation:
			'The lecture uses bryophytes as the informal name for nonvascular plants, including mosses and related groups.',
		difficulty: 'expert',
		illustration: generationShiftIllustration
	},
	{
		id: 3,
		question:
			'A plant can support taller aerial growth because internal transport moves water and solutes. Which character is being scored?',
		options: [
			'Presence of vascular tissue in the sporophyte.',
			'Presence of exposed ovules on cone scales.',
			'Presence of one embryonic cotyledon only.',
			'Presence of showy petals in floral whorls.'
		],
		answer: 'Presence of vascular tissue in the sporophyte.',
		explanation:
			'The lecture separates nonvascular plants from vascular plants by the presence of vascular tissue, which supports transport and larger body organization.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 4,
		question:
			'A survey divides vascular plants into two lecture-level categories before discussing gymnosperms and angiosperms. Which split is correct?',
		options: [
			'Seedless vascular plants versus seed plants.',
			'Bryophyte gametophytes versus green algae.',
			'Coniferophytes versus flowering eudicots.',
			'Liverwort sporophytes versus hornworts.'
		],
		answer: 'Seedless vascular plants versus seed plants.',
		explanation:
			'The lecture states that vascular plants include seedless vascular plants and seed plants.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 5,
		question:
			'An instructor asks for the two clades used to organize seedless vascular plants in the lecture. Which answer preserves that grouping?',
		options: [
			'Lycophytes together with pterophytes.',
			'Monocots together with eudicots.',
			'Cycads together with conifers.',
			'Mosses together with liverworts.'
		],
		answer: 'Lycophytes together with pterophytes.',
		explanation:
			'Seedless vascular plants are divided into lycophytes and pterophytes, with examples such as club mosses and ferns.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 6,
		question:
			'A herbarium sheet lists club moss, spike moss, and quillwort specimens together. Which seedless vascular clade is being sampled?',
		options: [
			'Lycophytes, not fern-allied pterophytes.',
			'Pterophytes, not seed-bearing gymnosperms.',
			'Angiosperms, not nonvascular bryophytes.',
			'Gymnosperms, not flowering eudicots.'
		],
		answer: 'Lycophytes, not fern-allied pterophytes.',
		explanation:
			'Lycophytes include club mosses and their relatives, with the lecture showing spike mosses and quillworts as examples.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 7,
		question:
			'A specimen key groups lady fern, horsetail, and whisk fern together. Which lecture clade is being recognized?',
		options: [
			'Pterophytes among seedless vascular plants.',
			'Lycophytes among seedless vascular plants.',
			'Bryophytes among nonvascular land plants.',
			'Conifers among naked-seed plants.'
		],
		answer: 'Pterophytes among seedless vascular plants.',
		explanation:
			'The lecture places ferns and their relatives, including horsetails and whisk ferns, in the pterophyte group.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 8,
		question:
			'The lecture calls seedless vascular plants a grade rather than a complete natural clade. What does that wording imply?',
		options: [
			'They share organization but are paraphyletic.',
			'They share one ancestor and all descendants.',
			'They lack vascular tissue by definition.',
			'They contain only flowering descendants.'
		],
		answer: 'They share organization but are paraphyletic.',
		explanation:
			'A grade groups organisms at a similar level of organization; the lecture explicitly treats seedless vascular plants as paraphyletic.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 9,
		question:
			'A structure contains a young sporophyte, stored nutrients, and a protective outer covering. Which lecture definition is being applied?',
		options: [
			'Seed as embryo, food supply, and coat.',
			'Cone as megasporophyll, pollen, and bark.',
			'Flower as sepal, xylem, and phloem.',
			'Spore as ovary, fruit wall, and embryo.'
		],
		answer: 'Seed as embryo, food supply, and coat.',
		explanation:
			'The lecture defines a seed as an embryo and nutrients surrounded by a protective coat.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 10,
		question:
			'After recognizing seed plants as one clade, a student must separate the two major descendant clades. Which contrast is lecture-consistent?',
		options: [
			'Gymnosperms versus angiosperms.',
			'Bryophytes versus pterophytes.',
			'Lycophytes versus hornworts.',
			'Mosses versus whisk ferns.'
		],
		answer: 'Gymnosperms versus angiosperms.',
		explanation:
			'The seed plant section divides seed plants into gymnosperms, the naked seed plants, and angiosperms, the flowering plants.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 11,
		question:
			'A seed plant bears ovules exposed on cone structures rather than enclosed inside an ovary. Which group should be inferred?',
		options: [
			'Gymnosperm with naked seeds.',
			'Angiosperm with enclosed seeds.',
			'Bryophyte with dominant sporophytes.',
			'Pterophyte with protected flowers.'
		],
		answer: 'Gymnosperm with naked seeds.',
		explanation:
			'Gymnosperms bear naked seeds that are not enclosed by ovaries and are commonly exposed on cones.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 12,
		question:
			'A reproductive structure is interpreted as a flower, and fertilized ovules later become enclosed. Which seed-plant clade fits?',
		options: [
			'Angiosperms, the flowering plants.',
			'Gymnosperms, the naked-seed plants.',
			'Lycophytes, the club-moss relatives.',
			'Bryophytes, the nonvascular plants.'
		],
		answer: 'Angiosperms, the flowering plants.',
		explanation:
			'The lecture identifies angiosperms as flowering plants and treats the flower as the sex organ of that clade.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 13,
		question:
			'A timeline marker is placed at the earliest origin event shown for land plants. Which date should be selected?',
		options: [
			'About 475 million years ago.',
			'About 420 million years ago.',
			'About 305 million years ago.',
			'About 150 million years ago.'
		],
		answer: 'About 475 million years ago.',
		explanation:
			'The plant evolution diagram marks the origin of land plants at about 475 million years ago.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 14,
		question:
			'In the lecture timeline, a major event occurs at roughly 420 million years ago. Which innovation does that point represent?',
		options: [
			'Origin of vascular plants.',
			'Origin of extant seed plants.',
			'Origin of flowering plants only.',
			'Origin of green algal ancestors.'
		],
		answer: 'Origin of vascular plants.',
		explanation: 'The diagram places the origin of vascular plants around 420 million years ago.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 15,
		question:
			'A second timeline annotation sits near 305 million years ago in the plant evolution diagram. Which origin does it mark?',
		options: [
			'Origin of extant seed plants.',
			'Origin of the first land plants.',
			'Origin of vascular tissue.',
			'Origin of nonvascular plants.'
		],
		answer: 'Origin of extant seed plants.',
		explanation:
			'The lecture diagram identifies the origin of extant seed plants at about 305 million years ago.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 16,
		question:
			'A moss life-cycle diagram shows the photosynthetic generation as the larger, persistent phase. Which generation is dominant?',
		options: [
			'Gametophyte generation in nonvascular plants.',
			'Sporophyte generation in nonvascular plants.',
			'Seed generation in seedless vascular plants.',
			'Pollen generation in bryophyte life cycles.'
		],
		answer: 'Gametophyte generation in nonvascular plants.',
		explanation:
			'The lecture notes that the gametophyte is dominant in mosses and other nonvascular plants, while the sporophyte is reduced and dependent.',
		difficulty: 'expert',
		illustration: generationShiftIllustration
	},
	{
		id: 17,
		question:
			'A fern produces a small photosynthetic gametophyte that can live independently. Which life-cycle statement matches the lecture chart?',
		options: [
			'Fern gametophytes are reduced but free-living.',
			'Fern gametophytes are absent after meiosis.',
			'Fern gametophytes dominate woody sporophytes.',
			'Fern gametophytes remain inside ovules.'
		],
		answer: 'Fern gametophytes are reduced but free-living.',
		explanation:
			'The lecture chart shows fern gametophytes as reduced but independent, photosynthetic, and free-living.',
		difficulty: 'expert',
		illustration: generationShiftIllustration
	},
	{
		id: 18,
		question:
			'In seed plants, gametophytes are retained and nourished by surrounding sporophyte tissues. Which interpretation is correct?',
		options: [
			'They are microscopic and nutritionally dependent.',
			'They are dominant and ecologically independent.',
			'They are photosynthetic and free-living adults.',
			'They are absent from the seed-plant cycle.'
		],
		answer: 'They are microscopic and nutritionally dependent.',
		explanation:
			'Seed plant gametophytes are reduced, usually microscopic, and dependent on surrounding sporophyte tissue for nutrition.',
		difficulty: 'expert',
		illustration: generationShiftIllustration
	},
	{
		id: 19,
		question:
			'Carboniferous seedless vascular forests later became economically important fossil fuel deposits. Which process explains the link?',
		options: [
			'Buried plant biomass formed coal deposits.',
			'Flowering plant fruits formed coal deposits.',
			'Gymnosperm cones formed petroleum deposits.',
			'Green algal blooms formed pollen deposits.'
		],
		answer: 'Buried plant biomass formed coal deposits.',
		explanation:
			'The lecture explains that decaying plants from Carboniferous seedless vascular forests eventually became coal, a fossil fuel.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 20,
		question:
			'The Carboniferous discussion connects large photosynthetic forests with a climate effect. Which consequence is identified?',
		options: [
			'Increased photosynthesis contributed to cooling.',
			'Increased photosynthesis produced ocean salting.',
			'Increased photosynthesis eliminated all oxygen.',
			'Increased photosynthesis caused desert spread only.'
		],
		answer: 'Increased photosynthesis contributed to cooling.',
		explanation:
			'The lecture notes that increased photosynthesis by seedless vascular plants may have helped produce global cooling at the end of the Carboniferous period.',
		difficulty: 'expert',
		illustration: plantTimelineIllustration
	},
	{
		id: 21,
		question:
			'A gymnosperm survey must include every phylum named in the lecture. Which set is complete and correctly scoped?',
		options: [
			'Cycadophyta, Ginkgophyta, Gnetophyta, Coniferophyta.',
			'Lycophyta, Pterophyta, Bryophyta, Anthophyta.',
			'Monocotyledons, Eudicots, Mosses, Liverworts.',
			'Hornworts, Ferns, Horsetails, Whisk Ferns.'
		],
		answer: 'Cycadophyta, Ginkgophyta, Gnetophyta, Coniferophyta.',
		explanation:
			'The gymnosperm section lists Cycadophyta, Ginkgophyta, Gnetophyta, and Coniferophyta as the four phyla.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 22,
		question:
			'A city plants Ginkgo biloba because it tolerates polluted air. Which lecture phylum does the example represent?',
		options: [
			'Ginkgophyta, represented by one living species.',
			'Coniferophyta, represented by needle evergreens.',
			'Cycadophyta, represented by palm-like cones.',
			'Gnetophyta, represented by vessel-bearing forms.'
		],
		answer: 'Ginkgophyta, represented by one living species.',
		explanation:
			'The lecture identifies Ginkgophyta as the phylum containing the single living species Ginkgo biloba, noted for high tolerance to air pollution.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 23,
		question:
			'A conifer stand continues photosynthesis through much of the year. Which trait from the lecture best supports that observation?',
		options: [
			'Most conifers keep evergreen foliage.',
			'Most conifers produce enclosed flowers.',
			'Most conifers lack vascular tissues.',
			'Most conifers live as dominant gametophytes.'
		],
		answer: 'Most conifers keep evergreen foliage.',
		explanation:
			'The lecture states that most conifers are evergreens and can carry out photosynthesis year round.',
		difficulty: 'expert',
		illustration: seedPlantIllustration
	},
	{
		id: 24,
		question:
			'An angiosperm embryo has one cotyledon, parallel veins, fibrous roots, and flower parts in threes. Which classification is best supported?',
		options: [
			'Monocot, because all listed characters align.',
			'Eudicot, because all listed characters align.',
			'Conifer, because all listed characters align.',
			'Lycophyte, because all listed characters align.'
		],
		answer: 'Monocot, because all listed characters align.',
		explanation:
			'Monocots have one cotyledon, usually parallel veins, scattered vascular tissue, fibrous roots, one pollen opening, and floral organs in multiples of three.',
		difficulty: 'expert',
		illustration: monocotEudicotIllustration
	},
	{
		id: 25,
		question:
			'An angiosperm has two cotyledons, netlike veins, a taproot, and flower parts in fours or fives. Which classification is best supported?',
		options: [
			'Eudicot, because all listed characters align.',
			'Monocot, because all listed characters align.',
			'Bryophyte, because all listed characters align.',
			'Hornwort, because all listed characters align.'
		],
		answer: 'Eudicot, because all listed characters align.',
		explanation:
			'Eudicots have two cotyledons, usually netlike leaf veins, vascular tissue arranged in a ring, a taproot, three pollen openings, and floral organs in multiples of four or five.',
		difficulty: 'expert',
		illustration: monocotEudicotIllustration
	}
];
