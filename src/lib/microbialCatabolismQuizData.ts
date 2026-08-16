import type { Question } from './collegeQuizTypes';

const microbialCatabolismQuizItems: Question[] = [
	{
		id: 1,
		question:
			'A lab reports that glycolysis converted one glucose into pyruvic acid with a gross production of 4 ATP and 2 NADH. What must be subtracted to get the true net yield per glucose, and what is that net yield?',
		options: [
			'The 2 ATP consumed in the preparatory stage must be subtracted, leaving a net gain of 2 ATP.',
			'The 2 NADH must be subtracted as ATP equivalents, leaving a net gain of 2 ATP.',
			'The 2 pyruvic acid molecules must be subtracted, leaving a net gain of 4 ATP.',
			'Nothing is subtracted: glycolysis always nets 4 ATP per glucose.'
		],
		answer:
			'The 2 ATP consumed in the preparatory stage must be subtracted, leaving a net gain of 2 ATP.',
		explanation:
			'The preparatory stage invests 2 ATP to phosphorylate and split glucose, and the energy-conserving stage produces 4 ATP and 2 NADH, so the net gain is 4 − 2 = 2 ATP per glucose.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'Both cellular respiration and fermentation begin with the same first step, but a student claims they are interchangeable for a cell\'s energy budget. What does the lecture say makes them fundamentally different?',
		options: [
			'Respiration and fermentation both generate ATP only during glycolysis, so their yields are identical.',
			'Respiration continues past pyruvic acid into the Krebs cycle and electron transport, while fermentation converts pyruvic acid to products like ethanol or lactic acid.',
			'Respiration requires oxygen as a final electron acceptor, while fermentation requires the Krebs cycle.',
			'Fermentation yields more ATP because it does not waste energy on an electron transport chain.'
		],
		answer:
			'Respiration continues past pyruvic acid into the Krebs cycle and electron transport, while fermentation converts pyruvic acid to products like ethanol or lactic acid.',
		explanation:
			'The lecture notes both processes start with glycolysis but diverge afterward: respiration proceeds to the Krebs cycle or electron transport chain, while fermentation converts pyruvic acid into organic products, yielding far less ATP.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'A bacterium running the pentose phosphate pathway alongside glycolysis produces only 1 ATP per glucose oxidized, yet it thrives. What benefit justifies this low energy yield?',
		options: [
			'It generates NADPH for biosynthetic reactions and intermediate pentoses for nucleic acids, photosynthesis, and certain amino acids.',
			'It bypasses glycolysis entirely so the cell can stop using glucose as an energy source.',
			'It doubles the ATP yield of glycolysis by recycling NADH into NADPH.',
			'It allows the bacterium to use O₂ as a final electron acceptor without a transport chain.'
		],
		answer:
			'It generates NADPH for biosynthetic reactions and intermediate pentoses for nucleic acids, photosynthesis, and certain amino acids.',
		explanation:
			'The pentose phosphate pathway produces intermediate pentoses for nucleic acids and photosynthesis, generates NADPH for biosynthesis, and yields only 1 ATP per glucose — a biosynthetic trade-off, not an energy maximizer.',
		difficulty: 'expert'
	},
	{
		id: 4,
		question:
			'Which set of products is produced from a single glucose by the Entner-Doudoroff pathway, and why is it valuable in clinical labs?',
		options: [
			'1 NADPH, 1 NADH, and 1 ATP; it is used to help identify Pseudomonas.',
			'2 NADH and 4 ATP; it is used to confirm gram-positive identification.',
			'2 ATP and 2 NADPH; it is used to identify Streptococcus.',
			'1 FADH₂ and 2 ATP; it is used to detect E. coli O157.'
		],
		answer: '1 NADPH, 1 NADH, and 1 ATP; it is used to help identify Pseudomonas.',
		explanation:
			'The Entner-Doudoroff pathway yields 1 NADPH, 1 NADH, and 1 ATP per glucose, functions without glycolysis or the pentose phosphate pathway, is found in some gram-negative bacteria such as Pseudomonas, and is used in clinical labs to identify it.',
		difficulty: 'expert'
	},
	{
		id: 5,
		question:
			'A microbial culture is grown with nitrate ion (NO₃⁻) as the final electron acceptor and produces nitrite and nitrogen gas. Which process is occurring, and what distinguishes it from aerobic respiration?',
		options: [
			'Anaerobic respiration, in which the final electron acceptor is an inorganic molecule other than O₂.',
			'Aerobic respiration, in which nitrate substitutes for the electron transport chain.',
			'Fermentation, in which nitrate is the organic final electron acceptor.',
			'Chemiosmosis, in which nitrate directly powers ATP synthase.'
		],
		answer:
			'Anaerobic respiration, in which the final electron acceptor is an inorganic molecule other than O₂.',
		explanation:
			'Anaerobic respiration uses an inorganic substance other than oxygen as the final electron acceptor; Pseudomonas and Bacillus reduce nitrate to nitrite, nitrous oxide, or nitrogen gas.',
		difficulty: 'advanced'
	},
	{
		id: 6,
		question:
			'FADH₂ delivers its electrons to the electron transport chain at a lower step than NADH and consequently yields roughly one-third less ATP. What is the mechanistic reason?',
		options: [
			'FADH₂ skips the cytochromes entirely and reduces O₂ directly.',
			'Electrons entering lower in the chain traverse fewer energy-releasing steps before reaching O₂.',
			'FADH₂ carries fewer protons because it is a non-protein ubiquinone.',
			'FADH₂ is first converted to NADH, wasting two ATP in the conversion.'
		],
		answer:
			'Electrons entering lower in the chain traverse fewer energy-releasing steps before reaching O₂.',
		explanation:
			'The lecture states FADH₂ enters at a lower step than NADH, yielding about one-third less ATP, because fewer of the chain\'s energy-releasing redox steps lie ahead of its entry point.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question:
			'If a compound makes the inner membrane permeable to protons, what happens to oxidative phosphorylation even though electron transport may continue?',
		options: [
			'The proton gradient collapses, so ATP synthesis via chemiosmosis is lost because H⁺ no longer accumulates to drive ATP synthase.',
			'The electron transport chain reverses direction and pumps protons inward.',
			'ATP synthase begins pumping protons outward to compensate.',
			'Pyruvic acid is rerouted to fermentation to regenerate the gradient.'
		],
		answer:
			'The proton gradient collapses, so ATP synthesis via chemiosmosis is lost because H⁺ no longer accumulates to drive ATP synthase.',
		explanation:
			'The membrane is normally impermeable to protons so H⁺ accumulate and create the proton motive force; if H⁺ leak back freely, the gradient is destroyed and ATP synthase has no proton flow to convert ADP + Pi into ATP.',
		difficulty: 'expert'
	},
	{
		id: 8,
		question:
			'Prokaryotic aerobic respiration nets 38 ATP per glucose while eukaryotic aerobic respiration nets only 36. Where do the two ATP go in eukaryotes?',
		options: [
			'They are lost transporting pyruvate into the mitochondria before respiration can begin.',
			'They are used to convert FADH₂ into NADH in the cytoplasm.',
			'They are consumed generating the proton gradient twice.',
			'They are spent reducing O₂ to H₂O at the end of the chain.'
		],
		answer:
			'They are lost transporting pyruvate into the mitochondria before respiration can begin.',
		explanation:
			'The lecture attributes the lower eukaryotic yield to energy lost transporting pyruvate into the mitochondria: prokaryotes make 38 ATP, eukaryotes 36 ATP.',
		difficulty: 'advanced'
	},
	{
		id: 9,
		question:
			'Which overall reaction correctly summarizes prokaryotic aerobic respiration of one glucose as presented in the lecture?',
		options: [
			'C₆H₁₂O₆ + 6 O₂ + 38 ADP + 38 Pi → 6 CO₂ + 6 H₂O + 38 ATP',
			'C₆H₁₂O₆ + 6 O₂ + 36 ADP + 36 Pi → 6 CO₂ + 6 H₂O + 36 ATP',
			'C₆H₁₂O₆ + 2 ADP + 2 Pi → 2 ethanol + 2 CO₂ + 2 ATP',
			'C₆H₁₂O₆ + 6 CO₂ + 38 ATP → 6 O₂ + 6 H₂O + 38 ADP + 38 Pi'
		],
		answer: 'C₆H₁₂O₆ + 6 O₂ + 38 ADP + 38 Pi → 6 CO₂ + 6 H₂O + 38 ATP',
		explanation:
			'The lecture gives the prokaryotic overall reaction as C₆H₁₂O₆ + 6 O₂ + 38 ADP + 38 Pi → 6 CO₂ + 6 H₂O + 38 ATP; 36 ATP is the eukaryotic figure.',
		difficulty: 'expert'
	},
	{
		id: 10,
		question:
			'Which microorganism-to-final-electron-acceptor pairing correctly describes anaerobic respiration in the lecture?',
		options: [
			'Desulfovibrio uses sulfate (SO₄²⁻), producing hydrogen sulfide (H₂S).',
			'Pseudomonas uses carbon dioxide, producing methane (CH₄).',
			'Bacillus uses sulfate (SO₄²⁻), producing nitrogen gas (N₂).',
			'Archaea use nitrate (NO₃⁻), producing hydrogen sulfide (H₂S).'
		],
		answer: 'Desulfovibrio uses sulfate (SO₄²⁻), producing hydrogen sulfide (H₂S).',
		explanation:
			'Desulfovibrio uses sulfate as its final electron acceptor to form hydrogen sulfide; Pseudomonas and Bacillus reduce nitrate, and some archaea reduce CO₂ to methane.',
		difficulty: 'advanced'
	},
	{
		id: 11,
		question:
			'Anaerobes typically grow more slowly than aerobes. Which explanation matches the lecture\'s reasoning?',
		options: [
			'Anaerobic respiration uses only part of the Krebs cycle and some ETC carriers, so its ATP yield is lower.',
			'Anaerobes cannot perform glycolysis and must rely on the pentose phosphate pathway alone.',
			'Anaerobes must first convert O₂ into nitrate before any ATP can be made.',
			'Anaerobes produce more ATP but waste it repairing the electron transport chain.'
		],
		answer:
			'Anaerobic respiration uses only part of the Krebs cycle and some ETC carriers, so its ATP yield is lower.',
		explanation:
			'The lecture states that because only part of the Krebs cycle and some ETC carriers are used, ATP yield in anaerobic respiration is lower than in aerobic respiration, so anaerobes grow more slowly.',
		difficulty: 'advanced'
	},
	{
		id: 12,
		question:
			'Which statement about fermentation is FALSE according to the lecture?',
		options: [
			'Fermentation does not require oxygen, although it can occur in its presence.',
			'Fermentation uses an organic molecule synthesized in the cell as the final electron acceptor.',
			'Fermentation uses the Krebs cycle to fully oxidize pyruvic acid to CO₂.',
			'Fermentation releases energy from sugars or other organic molecules.'
		],
		answer: 'Fermentation uses the Krebs cycle to fully oxidize pyruvic acid to CO₂.',
		explanation:
			'Fermentation is defined as not using the Krebs cycle or electron transport chain; it transfers electrons from NADH/NADPH to pyruvic acid or its derivatives, which become the reduced end-products.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'What is the essential role of the final electron transfers in fermentation, in which NADH/NADPH reduce pyruvic acid to lactic acid or ethanol?',
		options: [
			'They regenerate NAD⁺/NADP⁺ so glycolysis can continue producing ATP.',
			'They generate the bulk of the ATP produced during fermentation.',
			'They create the proton gradient needed for chemiosmosis.',
			'They fully oxidize pyruvic acid to CO₂ and water.'
		],
		answer: 'They regenerate NAD⁺/NADP⁺ so glycolysis can continue producing ATP.',
		explanation:
			'The lecture explains that reducing pyruvic acid or its derivatives to end-products ensures a steady supply of NAD⁺/NADP⁺ for glycolysis — ATP in fermentation is generated only during glycolysis itself.',
		difficulty: 'expert'
	},
	{
		id: 14,
		question:
			'Fermentation yields only 1–2 ATP per starting molecule even though glucose holds far more energy. Where does the remaining energy go?',
		options: [
			'It stays in the chemical bonds of the end-products, such as lactic acid and ethanol.',
			'It is released entirely as heat during the reduction of pyruvic acid.',
			'It is stored as additional NADH for later use in the Krebs cycle.',
			'It is used to pump protons across the membrane during fermentation.'
		],
		answer: 'It stays in the chemical bonds of the end-products, such as lactic acid and ethanol.',
		explanation:
			'The lecture notes that much energy remains in the chemical bonds of fermentation end-products like lactic acid and ethanol, which is why the ATP yield is low even though the process is fast.',
		difficulty: 'expert'
	},
	{
		id: 15,
		question:
			'During strenuous exercise with insufficient oxygen, human muscle switches from aerobic respiration to fermentation. What happens to pyruvic acid in this state?',
		options: [
			'It is reduced to lactic acid in the absence of oxygen, regenerating NAD⁺ for glycolysis.',
			'It is oxidized to acetyl-CoA and continues through the Krebs cycle.',
			'It is converted to ethanol by yeast enzymes present in muscle.',
			'It is excreted directly as CO₂ through the bloodstream.'
		],
		answer: 'It is reduced to lactic acid in the absence of oxygen, regenerating NAD⁺ for glycolysis.',
		explanation:
			'The lecture describes that with insufficient oxygen, muscles switch from aerobic respiration to fermentation and pyruvic acid is reduced to lactic acid — the lactic acid causes muscle fatigue.',
		difficulty: 'advanced'
	},
	{
		id: 16,
		question:
			'Streptococcus and Lactobacillus are described as homolactic (homofermentative) lactic acid bacteria. What distinguishes them from heterolactic fermenters?',
		options: [
			'Homolactic fermenters produce only lactic acid, while heterolactic fermenters also produce other acids or alcohols, often via the pentose phosphate pathway.',
			'Homolactic fermenters produce ethanol and CO₂, while heterolactic fermenters produce only lactic acid.',
			'Homolactic fermenters require oxygen, while heterolactic fermenters are obligate anaerobes.',
			'Homolactic fermenters use the Entner-Doudoroff pathway, while heterolactic fermenters use glycolysis.'
		],
		answer:
			'Homolactic fermenters produce only lactic acid, while heterolactic fermenters also produce other acids or alcohols, often via the pentose phosphate pathway.',
		explanation:
			'The lecture identifies Streptococcus and Lactobacillus as lactic acid bacteria that produce only lactic acid (homolactic), whereas heterolactic fermenters produce lactic acid plus other acids or alcohols, often using the pentose phosphate pathway.',
		difficulty: 'expert'
	},
	{
		id: 17,
		question:
			'In alcohol fermentation, pyruvic acid is first converted to acetaldehyde and CO₂, then acetaldehyde is reduced by NADH to ethanol. Which observation directly supports the gas-producing step?',
		options: [
			'CO₂ produced during fermentation causes bread dough to rise.',
			'Ethanol evaporates, leaving the dough structureless.',
			'NADH accumulation stops glycolysis until ethanol is oxidized back.',
			'Acetaldehyde accumulation turns the dough alcoholic.'
		],
		answer: 'CO₂ produced during fermentation causes bread dough to rise.',
		explanation:
			'The lecture lists the products of alcohol fermentation as ethanol (used in beverages) and CO₂ (which causes bread dough to rise); the CO₂ is released when pyruvic acid is converted to acetaldehyde.',
		difficulty: 'expert'
	},
	{
		id: 18,
		question:
			'Which statement about lipid catabolism is correct according to the lecture?',
		options: [
			'Beta-oxidation breaks down fatty acids, and lipases first split fats into glycerol and fatty acids that enter the Krebs cycle.',
			'Lipases directly oxidize fatty acids into acetyl-CoA without releasing glycerol.',
			'Glycerol is broken down by beta-oxidation while fatty acids enter glycolysis.',
			'Bacteria that hydrolyze fatty acids cannot degrade petroleum products.'
		],
		answer:
			'Beta-oxidation breaks down fatty acids, and lipases first split fats into glycerol and fatty acids that enter the Krebs cycle.',
		explanation:
			'The lecture states that lipases break fats into glycerol and fatty acids, both of which enter the Krebs cycle, and that beta-oxidation breaks down fatty acids.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question:
			'An amino acid must be modified before entering the Krebs cycle. Which modification removes the amino group, and what is excreted as a result?',
		options: [
			'Deamination removes the amino group, producing NH₄⁺ that is excreted.',
			'Decarboxylation removes the amino group, producing CO₂ that is exhaled.',
			'Desulfurization removes the amino group, producing H₂S that is released.',
			'Transamination removes the –COOH group, producing NH₄⁺ that is recycled.'
		],
		answer: 'Deamination removes the amino group, producing NH₄⁺ that is excreted.',
		explanation:
			'The lecture lists deamination as removing the amino group (NH₄⁺ is excreted), decarboxylation as removing –COOH, and desulfurization as removing –SH.',
		difficulty: 'expert'
	},
	{
		id: 20,
		question:
			'Holes form in Swiss cheese because CO₂ accumulates during ripening. Which microbial interaction in the lecture explains this?',
		options: [
			'Propionibacterium converts lactic acid to pyruvic acid, which enters the Krebs cycle and yields propionic acid plus CO₂.',
			'Acetobacter oxidizes ethanol, releasing CO₂ as a by-product.',
			'E. coli ferments sorbitol, producing gas bubbles in the cheese matrix.',
			'Saccharomyces carries out alcohol fermentation, trapping ethanol in the curd.'
		],
		answer:
			'Propionibacterium converts lactic acid to pyruvic acid, which enters the Krebs cycle and yields propionic acid plus CO₂.',
		explanation:
			'The lecture cites Propionibacterium using lactic acid and converting it to pyruvic acid, which enters the Krebs cycle to produce propionic acid and CO₂ — the accumulated CO₂ forms holes in Swiss cheese.',
		difficulty: 'expert'
	}
];

export const microbialCatabolismQuizData = microbialCatabolismQuizItems.map((question) => ({
	...question,
	difficulty: question.difficulty as 'advanced' | 'expert'
})) satisfies Question[];
