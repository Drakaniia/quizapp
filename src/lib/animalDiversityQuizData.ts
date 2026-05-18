export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty?: 'intermediate' | 'advanced' | 'expert';
	structureIllustration?: string;
	reactionScheme?: string;
}

export const animalDiversityQuizData: Question[] = [
	{
		id: 1,
		question:
			'A student observes an animal that moves water through pores and a central spongocoel. Which conclusion fits best?',
		options: [
			'The animal is most likely a sponge.',
			'The animal is most likely a jellyfish.',
			'The animal is most likely a mollusc.',
			'The animal is most likely an annelid.'
		],
		answer: 'The animal is most likely a sponge.',
		explanation:
			'Sponges move water through pores into the spongocoel and out through the osculum. Calcarea and Silicea are sponge groups in the lecture.',
		difficulty: 'intermediate'
	},
	{
		id: 2,
		question:
			'If water enters a sponge through pores, which chamber does it pass through before leaving the body?',
		options: [
			'Water passes through the spongocoel chamber.',
			'Water passes through the mantle chamber.',
			'Water passes through the coelom chamber.',
			'Water passes through the pharynx chamber.'
		],
		answer: 'Water passes through the spongocoel chamber.',
		explanation:
			'The spongocoel is the central cavity of a sponge. Water flows through it before exiting through the osculum.',
		difficulty: 'intermediate'
	},
	{
		id: 3,
		question:
			'A microscope view shows sponge cells with collars and flagella trapping food particles. Which cell is being observed?',
		options: [
			'The observed cells are choanocyte cells.',
			'The observed cells are cnidocyte cells.',
			'The observed cells are amoebocyte cells.',
			'The observed cells are podium cells.'
		],
		answer: 'The observed cells are choanocyte cells.',
		explanation:
			'Choanocytes use a flagellum and collar to keep water moving and trap food particles in mucus.',
		difficulty: 'advanced'
	},
	{
		id: 4,
		question:
			'When comparing cnidarian life forms, which pair correctly names the two forms shown in the lecture?',
		options: [
			'They are polyp and medusa forms.',
			'They are nymph and adult forms.',
			'They are larva and pupa forms.',
			'They are scolex and proglottid forms.'
		],
		answer: 'They are polyp and medusa forms.',
		explanation:
			'Cnidarians can occur as sessile polyps or free-swimming medusae, both with tentacles and a gastrovascular cavity.',
		difficulty: 'intermediate'
	},
	{
		id: 5,
		question:
			'A prey item touches a hydra tentacle, and a thread suddenly fires from a stinging cell. What fired?',
		options: [
			'A nematocyst thread fired from it.',
			'A radula strip fired from it.',
			'A lophophore crown fired from it.',
			'A metanephridium tube fired from it.'
		],
		answer: 'A nematocyst thread fired from it.',
		explanation:
			'A cnidocyte contains a nematocyst. When triggered, the thread discharges and helps capture prey.',
		difficulty: 'advanced'
	},
	{
		id: 6,
		question:
			'A wormlike animal is described as a flatworm from marine, freshwater, or damp terrestrial habitats. Which phylum fits?',
		options: [
			'The animal belongs in phylum Platyhelminthes.',
			'The animal belongs in phylum Rotifera.',
			'The animal belongs in phylum Nematoda.',
			'The animal belongs in phylum Echinodermata.'
		],
		answer: 'The animal belongs in phylum Platyhelminthes.',
		explanation:
			'The lecture identifies members of phylum Platyhelminthes as flatworms found in marine, freshwater, and damp terrestrial habitats.',
		difficulty: 'intermediate'
	},
	{
		id: 7,
		question:
			'You compare planarians with cnidarians. Which statement shows the planarian has a more centralized body system?',
		options: [
			'It has eyespots and nerve cords.',
			'It has pores and choanocytes.',
			'It has tentacles and nematocysts.',
			'It has tube feet rows.'
		],
		answer: 'It has eyespots and nerve cords.',
		explanation:
			'Planarians have light-sensitive eyespots and centralized nerve cords, making their nervous system more centralized than cnidarian nerve nets.',
		difficulty: 'advanced'
	},
	{
		id: 8,
		question:
			'A parasite absorbs nutrients directly from a vertebrate intestine and has no gut. Which statement explains it?',
		options: [
			'The parasite is probably a tapeworm.',
			'The parasite is probably a rotifer.',
			'The parasite is probably a chiton.',
			'The parasite is probably a sea star.'
		],
		answer: 'The parasite is probably a tapeworm.',
		explanation:
			'Tapeworms are vertebrate parasites that lack a digestive system and absorb nutrients from the host intestine.',
		difficulty: 'intermediate'
	},
	{
		id: 9,
		question:
			'A tiny freshwater animal is smaller than many protists but has specialized organ systems. What is it most likely?',
		options: [
			'It is most likely a rotifer.',
			'It is most likely a coral.',
			'It is most likely a barnacle.',
			'It is most likely a nautilus.'
		],
		answer: 'It is most likely a rotifer.',
		explanation:
			'Rotifers are tiny animals found in fresh water, the ocean, and damp soil. They are truly multicellular and have specialized organ systems.',
		difficulty: 'intermediate'
	},
	{
		id: 10,
		question:
			'Ectoprocts and brachiopods are both shown using the same feeding structure. Which structure is shared?',
		options: [
			'They both use a lophophore structure.',
			'They both use a radula structure.',
			'They both use a siphon structure.',
			'They both use a book-lung structure.'
		],
		answer: 'They both use a lophophore structure.',
		explanation: 'The lecture figure labels the lophophore in both ectoprocts and brachiopods.',
		difficulty: 'advanced'
	},
	{
		id: 11,
		question:
			'A group includes snails, slugs, oysters, clams, octopuses, and squids. Which phylum is being discussed?',
		options: [
			'The phylum being discussed is Mollusca.',
			'The phylum being discussed is Annelida.',
			'The phylum being discussed is Arthropoda.',
			'The phylum being discussed is Chordata.'
		],
		answer: 'The phylum being discussed is Mollusca.',
		explanation:
			'Mollusca includes gastropods such as snails and slugs, bivalves such as oysters and clams, and cephalopods such as octopuses and squids.',
		difficulty: 'intermediate'
	},
	{
		id: 12,
		question:
			'When analyzing a generalized mollusc, which three parts should you expect in its body plan?',
		options: [
			'It has foot, visceral mass, mantle.',
			'It has head, thorax, abdomen.',
			'It has disk, arms, tube-feet.',
			'It has scolex, hooks, proglottids.'
		],
		answer: 'It has foot, visceral mass, mantle.',
		explanation:
			'The lecture states that all molluscs share a body plan with a muscular foot, visceral mass, and mantle. Many also have a mantle cavity and radula.',
		difficulty: 'advanced'
	},
	{
		id: 13,
		question:
			'A shell is divided into two halves, and the animal resembles a clam or oyster. Which class fits?',
		options: [
			'The animal fits class Bivalvia best.',
			'The animal fits class Gastropoda best.',
			'The animal fits class Cephalopoda best.',
			'The animal fits class Polyplacophora best.'
		],
		answer: 'The animal fits class Bivalvia best.',
		explanation:
			'Bivalves have shells divided into two halves and include clams, oysters, mussels, and scallops.',
		difficulty: 'intermediate'
	},
	{
		id: 14,
		question:
			'A gastropod develops so its anus and mantle end up above its head. What process caused this?',
		options: [
			'Torsion caused the body arrangement.',
			'Molting caused the body arrangement.',
			'Segmentation caused the body arrangement.',
			'Metamorphosis caused the body arrangement.'
		],
		answer: 'Torsion caused the body arrangement.',
		explanation:
			'The lecture names torsion as the distinctive gastropod feature that causes the anus and mantle to end up above the head.',
		difficulty: 'advanced'
	},
	{
		id: 15,
		question:
			'An animal uses a siphon for rapid jet movement and belongs with squids and octopuses. Which group fits?',
		options: [
			'The animal belongs with cephalopods.',
			'The animal belongs with bivalves.',
			'The animal belongs with rotifers.',
			'The animal belongs with millipedes.'
		],
		answer: 'The animal belongs with cephalopods.',
		explanation:
			'Cephalopods include squids, octopuses, cuttlefish, and chambered nautiluses. Squids use a siphon to fire a jet of water.',
		difficulty: 'intermediate'
	},
	{
		id: 16,
		question:
			'If an animal body is made of repeated ringlike segments, which phylum-level idea is being applied?',
		options: [
			'The animal shows annelid segmentation.',
			'The animal shows mollusc torsion.',
			'The animal shows cnidarian symmetry.',
			'The animal shows sponge filtration.'
		],
		answer: 'The animal shows annelid segmentation.',
		explanation:
			'Annelids have bodies composed of a series of fused rings. The lecture lists Oligochaeta, Polychaeta, and Hirudinea as major classes.',
		difficulty: 'intermediate'
	},
	{
		id: 17,
		question: 'A segmented worm is identified as a leech. Which annelid class should be chosen?',
		options: [
			'The leech belongs in class Hirudinea.',
			'The leech belongs in class Oligochaeta.',
			'The leech belongs in class Polychaeta.',
			'The leech belongs in class Asteroidea.'
		],
		answer: 'The leech belongs in class Hirudinea.',
		explanation:
			'The lecture divides Annelida into Oligochaeta, Polychaeta, and Hirudinea; leeches belong to Hirudinea.',
		difficulty: 'advanced'
	},
	{
		id: 18,
		question:
			'A roundworm has a complete alimentary canal but no circulatory system. Which interpretation is correct?',
		options: [
			'The animal matches a nematode condition.',
			'The animal matches a mollusc condition.',
			'The animal matches an echinoderm condition.',
			'The animal matches a tapeworm condition.'
		],
		answer: 'The animal matches a nematode condition.',
		explanation:
			'Nematodes, or roundworms, are found in many habitats and have an alimentary canal, but they lack a circulatory system.',
		difficulty: 'advanced'
	},
	{
		id: 19,
		question:
			'Which observation would most strongly support identifying an unknown animal as an arthropod?',
		options: [
			'It has joints, segments, exoskeleton.',
			'It has mantle, foot, radula.',
			'It has notochord, nerve-cord, pharynx.',
			'It has disk, spines, tube-feet.'
		],
		answer: 'It has joints, segments, exoskeleton.',
		explanation:
			'Arthropods have a segmented body, a hard exoskeleton, and jointed appendages. The exoskeleton is a cuticle containing protein and chitin.',
		difficulty: 'intermediate'
	},
	{
		id: 20,
		question:
			'An arthropod grows larger, but its rigid outer covering cannot stretch enough. What must happen?',
		options: [
			'It must molt its exoskeleton.',
			'It must regrow its notochord.',
			'It must extend its lophophore.',
			'It must harden its mantle.'
		],
		answer: 'It must molt its exoskeleton.',
		explanation:
			'Because the arthropod body is covered by a rigid cuticle, growth requires molting the old exoskeleton.',
		difficulty: 'intermediate'
	},
	{
		id: 21,
		question:
			'During classification, you must choose the four major arthropod lineages from the lecture. Which set works?',
		options: [
			'Chelicerates, myriapods, hexapods, crustaceans.',
			'Gastropods, bivalves, cephalopods, chitons.',
			'Oligochaetes, polychaetes, hirudineans, rotifers.',
			'Asteroids, echinoids, holothuroids, crinoids.'
		],
		answer: 'Chelicerates, myriapods, hexapods, crustaceans.',
		explanation:
			'The lecture identifies chelicerates, myriapods, hexapods, and crustaceans as the four major arthropod lineages.',
		difficulty: 'advanced'
	},
	{
		id: 22,
		question:
			'A spider is examined for gas exchange structures. Which respiratory organ should the student identify?',
		options: [
			'The spider uses book lung organs.',
			'The spider uses tube foot organs.',
			'The spider uses mantle cavity organs.',
			'The spider uses nephridium tube organs.'
		],
		answer: 'The spider uses book lung organs.',
		explanation:
			'Spiders are arachnids, and the lecture notes that gas exchange in spiders occurs in respiratory organs called book lungs.',
		difficulty: 'advanced'
	},
	{
		id: 23,
		question:
			'A learner must separate millipedes from centipedes using leg arrangement. Which comparison is accurate?',
		options: [
			'Millipedes have two pairs per segment.',
			'Millipedes have one pair per segment.',
			'Millipedes have no legs per segment.',
			'Millipedes have wings on each segment.'
		],
		answer: 'Millipedes have two pairs per segment.',
		explanation:
			'The lecture describes myriapods as terrestrial mandibulates. Millipedes have two pairs of legs per trunk segment, while centipedes have one pair and are carnivores.',
		difficulty: 'advanced'
	},
	{
		id: 24,
		question:
			'A sea star moves and feeds using hydraulic canals connected to tube feet. Which system explains this?',
		options: [
			'It uses the water vascular system.',
			'It uses the open circulatory system.',
			'It uses the gastrovascular cavity system.',
			'It uses the tracheal exchange system.'
		],
		answer: 'It uses the water vascular system.',
		explanation:
			'Echinoderms have a water vascular system, a network of hydraulic canals branching into tube feet used in locomotion, feeding, and gas exchange.',
		difficulty: 'advanced'
	},
	{
		id: 25,
		question:
			'If an animal is a chordate, which defining body features should be expected from the lecture concepts?',
		options: [
			'It has notochord and dorsal nerve-cord.',
			'It has exoskeleton and jointed appendages.',
			'It has mantle and muscular foot.',
			'It has eyespots and flat body.'
		],
		answer: 'It has notochord and dorsal nerve-cord.',
		explanation:
			'The lecture key concepts state that chordates have a notochord and a dorsal, hollow nerve cord. More derived groups include craniates, vertebrates, gnathostomes, tetrapods, amniotes, mammals, and humans.',
		difficulty: 'intermediate'
	}
];
