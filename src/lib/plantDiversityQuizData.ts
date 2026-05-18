export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty?: 'intermediate' | 'advanced' | 'expert';
}

export const plantDiversityQuizData: Question[] = [
	{
		id: 1,
		question:
			'A learner traces land plants back to the ancestral group shown in the evolution diagram. Which origin fits best?',
		options: [
			'Land plants arose from green algal ancestors.',
			'Land plants arose from fungal ancestors.',
			'Land plants arose from animal ancestors.',
			'Land plants arose from bacterial ancestors.'
		],
		answer: 'Land plants arose from green algal ancestors.',
		explanation:
			'The plant evolution diagram begins with an ancestral green alga before the origin of land plants around 475 million years ago.',
		difficulty: 'intermediate'
	},
	{
		id: 2,
		question: 'If a plant group lacks vascular tissue, which informal name should be used for it?',
		options: [
			'The group is commonly called bryophytes.',
			'The group is commonly called conifers.',
			'The group is commonly called monocots.',
			'The group is commonly called eudicots.'
		],
		answer: 'The group is commonly called bryophytes.',
		explanation:
			'The lecture states that nonvascular plants are commonly called bryophytes, including mosses and related groups.',
		difficulty: 'intermediate'
	},
	{
		id: 3,
		question:
			'A botanist separates modern plants by the presence or absence of transport tissues. What is being compared?',
		options: [
			'The botanist compares vascular tissue presence.',
			'The botanist compares flower color presence.',
			'The botanist compares fruit sugar presence.',
			'The botanist compares leaf hair presence.'
		],
		answer: 'The botanist compares vascular tissue presence.',
		explanation:
			'Modern plants can be informally grouped based on whether vascular tissue is present or absent.',
		difficulty: 'intermediate'
	},
	{
		id: 4,
		question:
			'Most plants have vascular tissue. Which two broad groups make up these vascular plants in the lecture?',
		options: [
			'They include seedless vascular and seed plants.',
			'They include bryophytes and green algae.',
			'They include monocots and liverwort plants.',
			'They include mosses and hornwort plants.'
		],
		answer: 'They include seedless vascular and seed plants.',
		explanation:
			'The lecture says vascular plants include seedless vascular plants and seed plants.',
		difficulty: 'intermediate'
	},
	{
		id: 5,
		question:
			'When classifying seedless vascular plants, which pair of clades should a student choose?',
		options: [
			'The clades are lycophytes and pterophytes.',
			'The clades are monocots and eudicots.',
			'The clades are cycads and conifers.',
			'The clades are liverworts and mosses.'
		],
		answer: 'The clades are lycophytes and pterophytes.',
		explanation:
			'Seedless vascular plants are divided into lycophytes, such as club mosses, and pterophytes, such as ferns and their relatives.',
		difficulty: 'intermediate'
	},
	{
		id: 6,
		question:
			'A specimen is a club moss, spike moss, or quillwort. Which seedless vascular clade matches it?',
		options: [
			'The specimen matches the lycophyte clade.',
			'The specimen matches the pterophyte clade.',
			'The specimen matches the angiosperm clade.',
			'The specimen matches the gymnosperm clade.'
		],
		answer: 'The specimen matches the lycophyte clade.',
		explanation:
			'Lycophytes include club mosses and their relatives, with the lecture showing spike mosses and quillworts as examples.',
		difficulty: 'advanced'
	},
	{
		id: 7,
		question:
			'A plant is identified as a fern, horsetail, or whisk fern. Which seedless vascular clade fits?',
		options: [
			'The plant fits the pterophyte clade.',
			'The plant fits the lycophyte clade.',
			'The plant fits the bryophyte clade.',
			'The plant fits the conifer clade.'
		],
		answer: 'The plant fits the pterophyte clade.',
		explanation:
			'Pterophytes include ferns and their relatives, and the lecture shows lady fern, horsetail, and whisk fern examples.',
		difficulty: 'advanced'
	},
	{
		id: 8,
		question:
			'Seedless vascular plants are described as a grade rather than one complete natural clade. What does this mean?',
		options: [
			'They are paraphyletic at similar organization.',
			'They are monophyletic at identical species.',
			'They are unicellular at similar organization.',
			'They are artificial at identical species.'
		],
		answer: 'They are paraphyletic at similar organization.',
		explanation:
			'The lecture states that seedless vascular plants are paraphyletic and represent the same level of biological organization, or grade.',
		difficulty: 'expert'
	},
	{
		id: 9,
		question: 'In the lecture definition, which statement best describes a seed?',
		options: [
			'A seed contains embryo, nutrients, coat.',
			'A seed contains cone, pollen, stem.',
			'A seed contains leaf, root, flower.',
			'A seed contains spore, scale, bark.'
		],
		answer: 'A seed contains embryo, nutrients, coat.',
		explanation: 'A seed is defined as an embryo and nutrients surrounded by a protective coat.',
		difficulty: 'intermediate'
	},
	{
		id: 10,
		question:
			'Seed plants form one clade, but the lecture divides them into which two further clades?',
		options: [
			'They divide into gymnosperms and angiosperms.',
			'They divide into mosses and hornworts.',
			'They divide into lycophytes and pterophytes.',
			'They divide into liverworts and horsetails.'
		],
		answer: 'They divide into gymnosperms and angiosperms.',
		explanation:
			'Seed plants are divided into gymnosperms, the naked seed plants, and angiosperms, the flowering plants.',
		difficulty: 'intermediate'
	},
	{
		id: 11,
		question:
			'A seed plant bears exposed seeds on modified leaves called cones. Which group is it?',
		options: [
			'The seed plant is a gymnosperm.',
			'The seed plant is an angiosperm.',
			'The seed plant is a bryophyte.',
			'The seed plant is a pterophyte.'
		],
		answer: 'The seed plant is a gymnosperm.',
		explanation:
			'Gymnosperms bear naked seeds that are not enclosed by ovaries and are usually exposed on cones.',
		difficulty: 'intermediate'
	},
	{
		id: 12,
		question:
			'If a plant uses flowers as reproductive structures, which seed plant clade does it represent?',
		options: [
			'The plant represents an angiosperm clade.',
			'The plant represents a gymnosperm clade.',
			'The plant represents a lycophyte clade.',
			'The plant represents a bryophyte clade.'
		],
		answer: 'The plant represents an angiosperm clade.',
		explanation:
			'Angiosperms are the flowering plants, and the lecture identifies the flower as the sex organ of this clade.',
		difficulty: 'intermediate'
	},
	{
		id: 13,
		question:
			'Which timeline correctly matches the origin of land plants shown in the lecture diagram?',
		options: [
			'Land plants originated about 475 mya.',
			'Land plants originated about 420 mya.',
			'Land plants originated about 305 mya.',
			'Land plants originated about 050 mya.'
		],
		answer: 'Land plants originated about 475 mya.',
		explanation: 'The diagram marks the origin of land plants at about 475 million years ago.',
		difficulty: 'advanced'
	},
	{
		id: 14,
		question:
			'Which event in plant history is placed around 420 million years ago in the lecture diagram?',
		options: [
			'Vascular plants originated around that time.',
			'Seed plants originated around that time.',
			'Flowering plants originated around that time.',
			'Green algae originated around that time.'
		],
		answer: 'Vascular plants originated around that time.',
		explanation:
			'The evolution diagram places the origin of vascular plants at about 420 million years ago.',
		difficulty: 'advanced'
	},
	{
		id: 15,
		question: 'Which event is shown at about 305 million years ago in the plant evolution diagram?',
		options: [
			'Extant seed plants originated near then.',
			'Land plants originated near then.',
			'Vascular plants originated near then.',
			'Nonvascular plants originated near then.'
		],
		answer: 'Extant seed plants originated near then.',
		explanation:
			'The diagram identifies the origin of extant seed plants at about 305 million years ago.',
		difficulty: 'advanced'
	},
	{
		id: 16,
		question: 'In mosses and other nonvascular plants, which life-cycle generation is dominant?',
		options: [
			'The gametophyte generation is dominant.',
			'The sporophyte generation is dominant.',
			'The embryo generation is dominant.',
			'The pollen generation is dominant.'
		],
		answer: 'The gametophyte generation is dominant.',
		explanation:
			'The gametophyte is dominant in mosses and other nonvascular plants, while the sporophyte is reduced and dependent.',
		difficulty: 'advanced'
	},
	{
		id: 17,
		question: 'In ferns and other seedless vascular plants, how does the gametophyte mainly exist?',
		options: [
			'It is reduced, independent, photosynthetic, free-living.',
			'It is dominant, woody, microscopic, dependent.',
			'It is absent, enclosed, dormant, protected.',
			'It is naked, conelike, thickened, exposed.'
		],
		answer: 'It is reduced, independent, photosynthetic, free-living.',
		explanation:
			'The lecture chart shows fern gametophytes as reduced but independent, photosynthetic, and free-living.',
		difficulty: 'expert'
	},
	{
		id: 18,
		question:
			'In seed plants, what happens to the gametophytes compared with surrounding sporophyte tissue?',
		options: [
			'They are microscopic and nutritionally dependent.',
			'They are dominant and fully woody.',
			'They are free-living and tall.',
			'They are absent and unnecessary.'
		],
		answer: 'They are microscopic and nutritionally dependent.',
		explanation:
			'Seed plant gametophytes are reduced, usually microscopic, and dependent on surrounding sporophyte tissue for nutrition.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question: 'Why were seedless vascular forests significant during the Carboniferous period?',
		options: [
			'Their decay eventually formed coal deposits.',
			'Their flowers eventually formed fruit deposits.',
			'Their cones eventually formed pollen deposits.',
			'Their seeds eventually formed resin deposits.'
		],
		answer: 'Their decay eventually formed coal deposits.',
		explanation:
			'The lecture explains that decaying plants from Carboniferous forests eventually became coal, a fossil fuel.',
		difficulty: 'advanced'
	},
	{
		id: 20,
		question:
			'How may increased photosynthesis by seedless vascular plants have affected Earth during the Carboniferous?',
		options: [
			'It helped produce global cooling then.',
			'It helped produce global warming then.',
			'It helped produce ocean salting then.',
			'It helped produce desert spreading then.'
		],
		answer: 'It helped produce global cooling then.',
		explanation:
			'The lecture notes that increased photosynthesis may have helped produce global cooling at the end of the Carboniferous period.',
		difficulty: 'advanced'
	},
	{
		id: 21,
		question: 'Which set lists the four gymnosperm phyla named in the lecture?',
		options: [
			'Cycadophyta, Ginkgophyta, Gnetophyta, Coniferophyta.',
			'Lycophyta, Pterophyta, Bryophyta, Anthophyta.',
			'Monocotyledons, Eudicots, Mosses, Liverworts.',
			'Hornworts, Ferns, Horsetails, Whisk ferns.'
		],
		answer: 'Cycadophyta, Ginkgophyta, Gnetophyta, Coniferophyta.',
		explanation:
			'The gymnosperm section lists Cycadophyta, Ginkgophyta, Gnetophyta, and Coniferophyta as the four phyla.',
		difficulty: 'expert'
	},
	{
		id: 22,
		question:
			'A city chooses Ginkgo biloba because it tolerates polluted air well. Which phylum does this represent?',
		options: [
			'It represents phylum Ginkgophyta.',
			'It represents phylum Coniferophyta.',
			'It represents phylum Cycadophyta.',
			'It represents phylum Gnetophyta.'
		],
		answer: 'It represents phylum Ginkgophyta.',
		explanation:
			'Phylum Ginkgophyta consists of the single living species Ginkgo biloba, which has high tolerance to air pollution.',
		difficulty: 'advanced'
	},
	{
		id: 23,
		question:
			'Which statement best explains why conifers can photosynthesize through much of the year?',
		options: [
			'Most conifers are evergreen plants.',
			'Most conifers are flowering plants.',
			'Most conifers are nonvascular plants.',
			'Most conifers are floating plants.'
		],
		answer: 'Most conifers are evergreen plants.',
		explanation:
			'The lecture states that most conifers are evergreens and can carry out photosynthesis year round.',
		difficulty: 'intermediate'
	},
	{
		id: 24,
		question:
			'An angiosperm embryo has one cotyledon, parallel leaf veins, fibrous roots, and flower parts in threes. Which group fits?',
		options: [
			'The plant fits the monocot group.',
			'The plant fits the eudicot group.',
			'The plant fits the conifer group.',
			'The plant fits the moss group.'
		],
		answer: 'The plant fits the monocot group.',
		explanation:
			'Monocots have one cotyledon, usually parallel leaf veins, scattered vascular tissue, fibrous roots, one pollen opening, and floral organs in multiples of three.',
		difficulty: 'advanced'
	},
	{
		id: 25,
		question:
			'An angiosperm has two cotyledons, netlike veins, a taproot, and flower parts in fours or fives. Which group fits?',
		options: [
			'The plant fits the eudicot group.',
			'The plant fits the monocot group.',
			'The plant fits the lycophyte group.',
			'The plant fits the hornwort group.'
		],
		answer: 'The plant fits the eudicot group.',
		explanation:
			'Eudicots have two cotyledons, usually netlike leaf veins, vascular tissue arranged in a ring, a taproot, three pollen openings, and floral organs in multiples of four or five.',
		difficulty: 'advanced'
	}
];
