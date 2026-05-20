import type { Question } from './collegeQuizTypes';

const replicationModelsIllustration = `
<svg role="img" aria-label="Three DNA replication models" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#13121d"/>
	<text x="32" y="38" fill="#caa8ff" font-family="monospace" font-size="18" font-weight="700">REPLICATION MODEL TEST</text>
	<g font-family="monospace" font-size="14" fill="#f2edf9" stroke-linecap="round">
		<text x="70" y="76">conservative</text>
		<path d="M82 100 V178 M110 100 V178" stroke="#caa8ff" stroke-width="6"/>
		<path d="M154 100 V178 M182 100 V178" stroke="#f6c667" stroke-width="6"/>
		<text x="298" y="76">semi-conservative</text>
		<path d="M322 100 V178" stroke="#caa8ff" stroke-width="6"/>
		<path d="M350 100 V178" stroke="#f6c667" stroke-width="6"/>
		<path d="M394 100 V178" stroke="#caa8ff" stroke-width="6"/>
		<path d="M422 100 V178" stroke="#f6c667" stroke-width="6"/>
		<text x="570" y="76">dispersive</text>
		<path d="M582 100 V124 M582 140 V178 M610 100 V134 M610 150 V178" stroke="#caa8ff" stroke-width="6"/>
		<path d="M582 124 V140 M610 134 V150" stroke="#f6c667" stroke-width="6"/>
		<path d="M654 100 V116 M654 132 V178 M682 100 V128 M682 144 V178" stroke="#caa8ff" stroke-width="6"/>
		<path d="M654 116 V132 M682 128 V144" stroke="#f6c667" stroke-width="6"/>
	</g>
</svg>`;

const replisomeIllustration = `
<svg role="img" aria-label="Replication fork enzymes" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="260" rx="8" fill="#13121d"/>
	<text x="32" y="38" fill="#caa8ff" font-family="monospace" font-size="18" font-weight="700">REPLISOME ROLES</text>
	<g fill="none" stroke-linecap="round">
		<path d="M82 128 H316 L430 82" stroke="#f2edf9" stroke-width="5"/>
		<path d="M82 128 H316 L430 174" stroke="#f2edf9" stroke-width="5"/>
		<path d="M346 116 L414 90" stroke="#70d6c8" stroke-width="6"/>
		<path d="M346 142 L414 168" stroke="#f6c667" stroke-width="6" stroke-dasharray="14 10"/>
	</g>
	<g font-family="monospace" font-size="14" fill="#f2edf9">
		<rect x="244" y="102" width="116" height="52" rx="6" fill="#211d32" stroke="#caa8ff"/>
		<text x="270" y="133">helicase</text>
		<rect x="452" y="62" width="132" height="48" rx="6" fill="#211d32" stroke="#70d6c8"/>
		<text x="484" y="92">leading</text>
		<rect x="452" y="154" width="132" height="48" rx="6" fill="#211d32" stroke="#f6c667"/>
		<text x="484" y="184">lagging</text>
		<rect x="604" y="116" width="112" height="48" rx="6" fill="#211d32" stroke="#ff7f6e"/>
		<text x="628" y="146">ligase</text>
	</g>
</svg>`;

const repairIllustration = `
<svg role="img" aria-label="Replication error correction" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#13121d"/>
	<text x="32" y="38" fill="#caa8ff" font-family="monospace" font-size="18" font-weight="700">ERROR CORRECTION</text>
	<g font-family="monospace" font-size="15" fill="#f2edf9">
		<rect x="54" y="78" width="188" height="100" rx="6" fill="#211d32" stroke="#70d6c8"/>
		<text x="84" y="116">proofreading</text>
		<text x="82" y="146">3' to 5' exonuclease</text>
		<rect x="286" y="78" width="188" height="100" rx="6" fill="#211d32" stroke="#f6c667"/>
		<text x="324" y="116">T dimer repair</text>
		<text x="322" y="146">damage correction</text>
		<rect x="518" y="78" width="188" height="100" rx="6" fill="#211d32" stroke="#ff7f6e"/>
		<text x="550" y="116">N-glycosidase</text>
		<text x="550" y="146">base removal</text>
	</g>
</svg>`;

export const dnaReplicationQuizData: Question[] = [
	{
		id: 1,
		question:
			'A proposed replication model preserves the parental duplex intact and produces a completely new duplex. Which model is being described?',
		options: [
			'Conservative replication preserves parental duplex.',
			'Semi-conservative replication preserves one strand.',
			'Dispersive replication fragments both strands.',
			'Rolling-circle replication preserves no template.'
		],
		answer: 'Conservative replication preserves parental duplex.',
		explanation:
			'The lecture defines conservative replication as preserving the parental molecules while daughter molecules are composed wholly of new material.',
		difficulty: 'advanced',
		illustration: replicationModelsIllustration
	},
	{
		id: 2,
		question:
			'Meselson and Stahl found daughter DNA with half old and half new strand identity. Which replication model did this support?',
		options: [
			'Semi-conservative replication of DNA.',
			'Conservative replication of DNA.',
			'Dispersive degradation of DNA.',
			'Non-template synthesis of DNA.'
		],
		answer: 'Semi-conservative replication of DNA.',
		explanation:
			'The lecture states that Meselson and Stahl proved DNA replication is semi-conservative, producing molecules with one conserved parental strand and one new complementary strand.',
		difficulty: 'advanced',
		illustration: replicationModelsIllustration
	},
	{
		id: 3,
		question:
			'Why was an ultracentrifuge central to the Meselson-Stahl experiment in the lecture account?',
		options: [
			'It separated DNA according to density.',
			'It cut primers from daughter strands.',
			'It created rolling-circle intermediates.',
			'It joined Okazaki fragment backbones.'
		],
		answer: 'It separated DNA according to density.',
		explanation:
			'The slide identifies an ultracentrifuge as the instrument used to determine DNA density, allowing old and new strand distributions to be inferred.',
		difficulty: 'advanced'
	},
	{
		id: 4,
		question:
			'A replication assay contains template DNA and enzymes but lacks dATP, dGTP, dTTP, and dCTP. Which component is missing?',
		options: [
			'Deoxyribonucleotide triphosphate substrates.',
			'Single-strand binding protein substrates.',
			'RNA primer removal substrates.',
			'Topoisomerase relaxation substrates.'
		],
		answer: 'Deoxyribonucleotide triphosphate substrates.',
		explanation:
			'The lecture lists dATP, dGTP, dTTP, and dCTP as deoxyribonucleotide triphosphate substrates required for replication.',
		difficulty: 'advanced'
	},
	{
		id: 5,
		question:
			'At a replication fork, the parental strands remain paired because the helix-unwinding protein is inactive. Which enzyme is defective?',
		options: [
			'DNA helicase is defective.',
			'DNA ligase is defective.',
			'DNA polymerase I is defective.',
			'Single-strand binding protein is defective.'
		],
		answer: 'DNA helicase is defective.',
		explanation:
			'DNA helicase is described as the helix-unwinding protein that separates parental strands to create two templates.',
		difficulty: 'advanced',
		illustration: replisomeIllustration
	},
	{
		id: 6,
		question:
			'Separated template strands repeatedly reanneal before polymerase can copy them. Which required factor is most directly absent?',
		options: [
			'Single-strand DNA binding protein.',
			'DNA topoisomerase or gyrase.',
			'DNA polymerase III holoenzyme.',
			'DNA ligase joining enzyme.'
		],
		answer: 'Single-strand DNA binding protein.',
		explanation:
			'SSBP prevents separated strands from reannealing, keeping templates accessible after helicase opens the duplex.',
		difficulty: 'advanced',
		illustration: replisomeIllustration
	},
	{
		id: 7,
		question:
			'Unwinding produces torsional strain ahead of the fork because the parental helix cannot freely rotate. Which enzyme relieves this problem?',
		options: [
			'DNA topoisomerase, also called gyrase.',
			'DNA primase, also called replicase.',
			'DNA ligase, also called helicase.',
			'DNA polymerase I, also called SSBP.'
		],
		answer: 'DNA topoisomerase, also called gyrase.',
		explanation:
			'The lecture assigns DNA topoisomerase or DNA gyrase the role of relaxing supercoiled twists created during unwinding without rotation of the parental double helix.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question:
			'Which enzyme is identified in the lecture as the main replicase catalyzing daughter DNA synthesis in bacteria?',
		options: [
			'DNA polymerase III catalyzes daughter synthesis.',
			'DNA polymerase I catalyzes primer synthesis.',
			'DNA ligase catalyzes template unwinding.',
			'DNA primase catalyzes phosphate joining.'
		],
		answer: 'DNA polymerase III catalyzes daughter synthesis.',
		explanation:
			'DNA polymerase III, also called DNA replicase in the slide, catalyzes synthesis of daughter DNA.',
		difficulty: 'advanced',
		illustration: replisomeIllustration
	},
	{
		id: 9,
		question:
			'A fork can open, but DNA polymerase cannot start because no short RNA segments are made. Which enzyme activity is missing?',
		options: [
			'Primase RNA-primer synthesis is missing.',
			'Ligase fragment-joining activity is missing.',
			'Gyrase supercoil relaxation is missing.',
			'SSBP strand-stabilizing activity is missing.'
		],
		answer: 'Primase RNA-primer synthesis is missing.',
		explanation:
			'Primase initiates synthesis of RNA primer strands, described as varying from 10 to 60 nucleotides.',
		difficulty: 'advanced'
	},
	{
		id: 10,
		question:
			'RNA primers remain embedded in an elongating bacterial DNA strand. Which enzyme function should remove them according to the lecture?',
		options: [
			'DNA polymerase I 5-prime to 3-prime exonuclease.',
			'DNA polymerase II 5-prime to 3-prime exonuclease.',
			'DNA polymerase III 5-prime to 3-prime exonuclease.',
			'DNA ligase 3-prime to 5-prime exonuclease.'
		],
		answer: 'DNA polymerase I 5-prime to 3-prime exonuclease.',
		explanation:
			'The enzyme table and Pol I slide indicate that DNA polymerase I has 5-prime to 3-prime exonuclease activity for primer removal; Pol II and Pol III do not.',
		difficulty: 'expert',
		illustration: repairIllustration
	},
	{
		id: 11,
		question:
			'After primer removal, adjacent DNA fragments have a nick in the sugar-phosphate backbone. Which enzyme completes the covalent seal?',
		options: [
			'DNA ligase forms the phosphodiester bond.',
			'DNA helicase forms the phosphodiester bond.',
			'Primase forms the phosphodiester bond.',
			'SSBP forms the phosphodiester bond.'
		],
		answer: 'DNA ligase forms the phosphodiester bond.',
		explanation:
			'DNA ligase is described as the joining enzyme that catalyzes phosphodiester bond formation between adjacent nucleotides.',
		difficulty: 'advanced',
		illustration: replisomeIllustration
	},
	{
		id: 12,
		question:
			'Which bacterial polymerase activity pattern is unique to DNA polymerase I in the lecture table?',
		options: [
			'It has 5-prime to 3-prime exonuclease activity.',
			'It lacks 3-prime to 5-prime exonuclease activity.',
			'It lacks 5-prime to 3-prime polymerase activity.',
			'It alone lacks all proofreading activity.'
		],
		answer: 'It has 5-prime to 3-prime exonuclease activity.',
		explanation:
			'The table shows DNA polymerases I, II, and III all have 5-prime to 3-prime polymerase and 3-prime to 5-prime exonuclease activities, but only DNA polymerase I has 5-prime to 3-prime exonuclease activity.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'In the eukaryotic polymerase list, which pairing is correct for strand or organelle assignment?',
		options: [
			'Pol delta leads; Pol gamma copies mtDNA.',
			'Pol alpha leads; Pol beta copies mtDNA.',
			'Pol gamma lags; Pol delta repairs mtDNA.',
			'Pol epsilon primes; Pol alpha copies mtDNA.'
		],
		answer: 'Pol delta leads; Pol gamma copies mtDNA.',
		explanation:
			'The lecture lists DNA Pol delta for leading-strand synthesis, DNA Pol alpha for lagging-strand synthesis and primers, and DNA Pol gamma for mitochondrial DNA replication.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'Which eukaryotic polymerases are identified as having proofreading ability in the lecture?',
		options: [
			'Pol delta, Pol epsilon, and Pol gamma.',
			'Pol alpha, Pol beta, and Pol ligase.',
			'Pol beta, primase, and helicase.',
			'Pol I, Pol II, and Pol III.'
		],
		answer: 'Pol delta, Pol epsilon, and Pol gamma.',
		explanation:
			'The eukaryotic polymerase slide states that DNA Pol delta, epsilon, and gamma have 3-prime to 5-prime exonuclease proofreading ability.',
		difficulty: 'expert',
		illustration: repairIllustration
	},
	{
		id: 15,
		question: 'Which pair of complexes forms the replisome as summarized in the lecture?',
		options: [
			'Holoenzyme DNA Pol III plus primosome.',
			'DNA Pol I plus ligase-only complex.',
			'RNA polymerase plus ribosomal subunits.',
			'Topoisomerase plus nucleosome scaffold.'
		],
		answer: 'Holoenzyme DNA Pol III plus primosome.',
		explanation:
			'The replisome slide defines the complete replication apparatus as holoenzyme DNA Pol III plus the primosome, which contains helicase and primase.',
		difficulty: 'advanced',
		illustration: replisomeIllustration
	},
	{
		id: 16,
		question:
			'Linear DNA replication shows bidirectional synthesis with local openings along the molecule. What structure does the lecture name?',
		options: [
			'Replication bubbles form during linear replication.',
			'Rolling circles form during linear replication.',
			'Theta loops form during linear replication.',
			'Nucleoids form during linear replication.'
		],
		answer: 'Replication bubbles form during linear replication.',
		explanation:
			'The conformation slide describes linear DNA replication as bidirectional with formation of replication bubbles.',
		difficulty: 'advanced'
	},
	{
		id: 17,
		question: 'Which replication conformations are specifically listed for circular DNA?',
		options: [
			'Theta and rolling-circle conformations.',
			'Bubble and solenoid conformations.',
			'Conservative and dispersive conformations.',
			'Nucleosome and scaffold conformations.'
		],
		answer: 'Theta and rolling-circle conformations.',
		explanation: 'The circular DNA slide lists theta and rolling-circle conformations.',
		difficulty: 'advanced'
	},
	{
		id: 18,
		question:
			'A mutation increases incorrect bases because the enzyme cannot remove newly added mismatches. Which replication safeguard is impaired?',
		options: [
			'The 3-prime to 5-prime proofreading function.',
			'The 5-prime to 3-prime primer synthesis function.',
			'The helicase-dependent annealing function.',
			'The ligase-dependent unwinding function.'
		],
		answer: 'The 3-prime to 5-prime proofreading function.',
		explanation:
			'Proofreading is tied to 3-prime to 5-prime exonuclease activity, which removes incorrectly incorporated bases during DNA synthesis.',
		difficulty: 'expert',
		illustration: repairIllustration
	},
	{
		id: 19,
		question: 'Which error-correction targets are explicitly listed in the replication lecture?',
		options: [
			'Thymine dimers and N-glycosidase repair.',
			'Lac repressors and allolactose repair.',
			'Histone methylation and capping repair.',
			'Codon wobble and release-factor repair.'
		],
		answer: 'Thymine dimers and N-glycosidase repair.',
		explanation:
			'The error-correction slide lists proofreading and repair mechanisms, including repair of T dimers and N-glycosidase activity.',
		difficulty: 'advanced',
		illustration: repairIllustration
	},
	{
		id: 20,
		question: 'Which sequence of events best matches the fork logic from the lecture?',
		options: [
			'Unwind, stabilize, prime, extend, replace, ligate.',
			'Ligate, unwind, methylate, translate, cap, splice.',
			'Prime, terminate, fold, transcribe, repress, drift.',
			'Supercoil, denature, wobble, silence, select, fuse.'
		],
		answer: 'Unwind, stabilize, prime, extend, replace, ligate.',
		explanation:
			'The required factors imply a fork workflow: helicase unwinds, SSBP stabilizes, primase starts primers, DNA Pol III extends, DNA Pol I replaces primers, and ligase seals nicks.',
		difficulty: 'expert',
		illustration: replisomeIllustration
	}
];
