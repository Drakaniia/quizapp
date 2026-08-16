import type { Question } from './collegeQuizTypes';

const microbialGrowthQuizItems: Question[] = [
	{
		id: 1,
		question:
			'A carton of milk kept at 4°C develops slime and an off-flavor over two weeks. The responsible microbe grows at 0°C, thrives between 20–30°C, and cannot grow above about 40°C. Which classification fits, and why is it the usual culprit?',
		options: [
			'Psychrotroph — it grows at refrigerator temperatures yet has a higher optimum (20–30°C), and it is the major cause of low-temperature food spoilage.',
			'Strict psychrophile — it is abundant in refrigerators and rarely causes food preservation problems.',
			'Mesophile — refrigerator temperatures are close to its 37°C optimum.',
			'Thermophile — it survives dormancy at 4°C and resumes growth when the milk warms.'
		],
		answer:
			'Psychrotroph — it grows at refrigerator temperatures yet has a higher optimum (20–30°C), and it is the major cause of low-temperature food spoilage.',
		explanation:
			'The lecture distinguishes psychrotrophs, which grow at 0°C but prefer 20–30°C and cannot grow above ~40°C, as the major cause of low-temperature food spoilage; strict psychrophiles are rarely responsible for food preservation problems.',
		difficulty: 'expert'
	},
	{
		id: 2,
		question:
			'A hyperthermophile grows at 110°C near a deep-sea hydrothermal vent. Which combined explanation matches the lecture for how this is possible?',
		options: [
			'Immense ocean pressure keeps water from boiling above 100°C, and sulfur often plays a key role in the metabolism of these organisms.',
			'The organisms form heat-resistant endospores that germinate only at vent temperatures.',
			'Their enzymes stay stable because the vents constantly supply oxygen for rapid protein repair.',
			'They are actually mesophiles that merely survive, not grow, at vent temperatures.'
		],
		answer:
			'Immense ocean pressure keeps water from boiling above 100°C, and sulfur often plays a key role in the metabolism of these organisms.',
		explanation:
			'The lecture notes hyperthermophiles (often Archaea) thrive in volcanic hot springs and near deep-sea hydrothermal vents, where immense pressure prevents water from boiling above 100°C and sulfur often plays a key role in metabolism; the known maximum growth record is ~121°C.',
		difficulty: 'expert'
	},
	{
		id: 3,
		question:
			'For most bacteria, the growth curve shows the optimum temperature sitting near the maximum, and growth collapses sharply just above the optimum. What is the immediate cause of that collapse?',
		options: [
			'Enzyme inactivation at the elevated temperature halts metabolism.',
			'The cell wall weakens and plasmolysis occurs from water loss.',
			'Nutrients in the medium are exhausted at the optimum.',
			'Endospore formation diverts all energy away from growth.'
		],
		answer: 'Enzyme inactivation at the elevated temperature halts metabolism.',
		explanation:
			"The lecture states that above the optimum, growth drops rapidly due to enzyme inactivation — the reason the optimum sits near the upper end of a species' roughly 30°C growth range.",
		difficulty: 'advanced'
	},
	{
		id: 4,
		question:
			'A large pot of hot soup is placed straight into a refrigerator to cool. Why does this practice increase the risk of spoilage compared with small shallow containers?',
		options: [
			'Large amounts of warm food cool slowly, so the contents linger longer at temperatures where psychrotrophs still grow.',
			'The soup becomes hypertonic as it cools, pulling water out of microbial cells.',
			'The heat drives off dissolved oxygen, converting the soup into an anaerobic culture.',
			'Condensation on the lid creates a hypotonic environment that lyses protective bacteria.'
		],
		answer:
			'Large amounts of warm food cool slowly, so the contents linger longer at temperatures where psychrotrophs still grow.',
		explanation:
			'The lecture warns that large amounts of warm food cool slowly, reducing refrigeration efficiency — psychrotrophs continue degrading the food during the extended cooling period at refrigerator temperatures.',
		difficulty: 'advanced'
	},
	{
		id: 5,
		question:
			'Phosphate salts are the most common buffers added to laboratory media to counteract acid produced by growing bacteria. Which set of properties makes them the preferred choice?',
		options: [
			'They buffer effectively across the bacterial growth pH range, are nontoxic, and supply phosphorus, an essential nutrient.',
			'They raise the medium to an alkaline pH that inhibits fungal contaminants.',
			'They precipitate excess nitrogen and keep the medium chemically defined.',
			'They lower the osmotic pressure so delicate microbes do not lyse.'
		],
		answer:
			'They buffer effectively across the bacterial growth pH range, are nontoxic, and supply phosphorus, an essential nutrient.',
		explanation:
			'The lecture lists the advantages of phosphate salts as buffers: effective in the bacterial growth pH range, nontoxic, and a source of phosphorus, an essential nutrient.',
		difficulty: 'expert'
	},
	{
		id: 6,
		question:
			'Chemoautotrophic bacteria flourish in coal mine drainage at pH 1, where most organisms could never survive. Which mechanism from the lecture explains this?',
		options: [
			'They oxidize sulfur compounds, generating sulfuric acid, and are acidophiles that thrive in the resulting acidic conditions.',
			'They excrete buffer salts that keep their external environment near neutrality.',
			'They form endospores that germinate only when the pH rises above 4.',
			'They are obligate anaerobes that avoid the toxic oxygen found at low pH.'
		],
		answer:
			'They oxidize sulfur compounds, generating sulfuric acid, and are acidophiles that thrive in the resulting acidic conditions.',
		explanation:
			'The lecture cites chemoautotrophic bacteria in coal mine drainage that oxidize sulfur to form sulfuric acid and survive at pH 1 — a classic example of acidophiles that tolerate and thrive in acidic conditions.',
		difficulty: 'expert'
	},
	{
		id: 7,
		question:
			'Honey and salted fish remain unspoiled for long periods even though they contain nutrients. What microbial process do they exploit, and why does it stop growth?',
		options: [
			'Plasmolysis — the hypertonic environment draws water out of cells, so the cytoplasm shrinks and growth is inhibited.',
			'Lysis — the hypotonic environment causes cells to burst and release their contents.',
			'Denaturation — the high sugar and salt directly cook microbial enzymes.',
			'Desiccation — the foods contain no water at all for microbial metabolism.'
		],
		answer:
			'Plasmolysis — the hypertonic environment draws water out of cells, so the cytoplasm shrinks and growth is inhibited.',
		explanation:
			'The lecture describes plasmolysis in hypertonic environments — water leaves the cell and the plasma membrane pulls away from the wall, inhibiting growth; high salt or sugar in foods such as salted fish and honey exploits this for preservation.',
		difficulty: 'advanced'
	},
	{
		id: 8,
		question:
			'A microbe grows normally in freshwater but also thrives on cured meat where 2% salt suppresses most competitors, and some strains tolerate up to 15% salt. How should it be classified?',
		options: [
			'Facultative halophile — it does not require salt but tolerates it.',
			'Obligate halophile — it needs salt concentrations near 30% to grow.',
			'Extreme halophile — it can only grow in saturated brine.',
			'Halophobe — it grows best when salt inhibits other microbes.'
		],
		answer: 'Facultative halophile — it does not require salt but tolerates it.',
		explanation:
			'The lecture defines facultative halophiles as organisms that do not require salt but tolerate it — they can grow at up to 2% salt (which inhibits many other organisms), with some species tolerating up to 15%.',
		difficulty: 'advanced'
	},
	{
		id: 9,
		question:
			'Which statement about nitrogen sources for microbial growth is correct according to the lecture?',
		options: [
			'Atmospheric nitrogen (N₂) can be used through nitrogen fixation carried out by free-living bacteria or symbiotic bacteria in legumes such as clover and soybeans.',
			'Most bacteria can fix atmospheric nitrogen directly through their ribosomes without helper organisms.',
			'Protein decomposition releases nitrogen only as inert N₂ gas that cannot be reused.',
			'Nitrogen is supplied only as ammonium ions; nitrates and N₂ cannot support growth.'
		],
		answer:
			'Atmospheric nitrogen (N₂) can be used through nitrogen fixation carried out by free-living bacteria or symbiotic bacteria in legumes such as clover and soybeans.',
		explanation:
			'The lecture lists protein decomposition, ammonium ions (NH₄⁺), nitrates (NO₃⁻), and atmospheric nitrogen via nitrogen fixation — by free-living bacteria or symbionts in legumes such as clover, soybeans, alfalfa, beans, and peas — as usable nitrogen sources.',
		difficulty: 'expert'
	},
	{
		id: 10,
		question:
			'A defined medium must supply sulfur for a bacterium that cannot synthesize cysteine. Which element-and-source pairing meets that requirement?',
		options: [
			'Sulfur, provided as sulfate ion (SO₄²⁻), for sulfur-containing amino acids like cysteine and methionine.',
			'Phosphorus, provided as phosphate (PO₄³⁻), for cysteine and methionine.',
			'Nitrogen, provided as nitrate (NO₃⁻), for the thiol group of cysteine.',
			'Carbon, provided as CO₂, for the sulfur backbone of methionine.'
		],
		answer:
			'Sulfur, provided as sulfate ion (SO₄²⁻), for sulfur-containing amino acids like cysteine and methionine.',
		explanation:
			'The lecture states sulfur is required for sulfur-containing amino acids (cysteine, methionine) and vitamins (thiamine, biotin), with sources including sulfate ion (SO₄²⁻), hydrogen sulfide, and sulfur-containing amino acids.',
		difficulty: 'advanced'
	},
	{
		id: 11,
		question:
			'A bacterium uses oxygen for respiration but grows only when O₂ is well below atmospheric levels and is poisoned by normal air because of peroxide and radical production. How is it classified?',
		options: [
			'Microaerophile — requires oxygen at lower concentrations than air and is sensitive to high O₂ levels.',
			'Aerotolerant anaerobe — tolerates oxygen but cannot use it.',
			'Facultative anaerobe — grows best with no oxygen at all.',
			'Obligate aerobe — requires the maximum O₂ concentration available.'
		],
		answer:
			'Microaerophile — requires oxygen at lower concentrations than air and is sensitive to high O₂ levels.',
		explanation:
			'The lecture defines microaerophiles as requiring oxygen at lower concentrations than air; they are sensitive to high O₂ levels due to peroxide and radical production.',
		difficulty: 'expert'
	},
	{
		id: 12,
		question:
			'A technician adds hydrogen peroxide to a bacterial culture and observes vigorous oxygen bubbling. Which enzyme explains the bubbles, and which enzyme would instead degrade peroxide without releasing gas?',
		options: [
			'Catalase produces the O₂ bubbles (2H₂O₂ → 2H₂O + O₂); peroxidase degrades H₂O₂ without gas formation.',
			'Superoxide dismutase produces the bubbles; catalase neutralizes superoxide radicals.',
			'Peroxidase produces the O₂ bubbles; catalase converts peroxide to singlet oxygen.',
			'Oxidase produces the bubbles; superoxide dismutase converts peroxide to hydroxyl radicals.'
		],
		answer:
			'Catalase produces the O₂ bubbles (2H₂O₂ → 2H₂O + O₂); peroxidase degrades H₂O₂ without gas formation.',
		explanation:
			'The lecture gives catalase as 2H₂O₂ → 2H₂O + O₂, the bubbling reaction, while peroxidase converts H₂O₂ + 2H⁺ to 2H₂O with no gas; superoxide dismutase instead neutralizes superoxide radicals.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'Obligate anaerobes such as Clostridium are highly sensitive to oxygen. What does the lecture identify as the underlying reason?',
		options: [
			'They lack superoxide dismutase and catalase, so toxic oxygen products accumulate and damage them.',
			'They cannot perform glycolysis, so oxygen blocks their only ATP source.',
			'Oxygen oxidizes their endospores, preventing germination.',
			'They require CO₂, and oxygen displaces it from the medium.'
		],
		answer:
			'They lack superoxide dismutase and catalase, so toxic oxygen products accumulate and damage them.',
		explanation:
			'The lecture states obligate anaerobes lack SOD and catalase, making them highly sensitive to oxygen; toxic oxygen species such as superoxide and peroxide are normally neutralized by these enzymes.',
		difficulty: 'advanced'
	},
	{
		id: 14,
		question:
			'Agar is preferred over gelatin as a solidifying agent in culture media. Which two properties from the lecture make it superior for routine microbiology?',
		options: [
			'Very few microbes degrade agar (so it stays solid), and it can withstand incubation temperatures up to ~100°C.',
			'It liquefies at 40°C and solidifies at 100°C, allowing easy pouring.',
			'It is a rich nutrient that feeds bacteria during incubation.',
			'It raises the osmotic pressure so contaminants cannot grow on it.'
		],
		answer:
			'Very few microbes degrade agar (so it stays solid), and it can withstand incubation temperatures up to ~100°C.',
		explanation:
			'The lecture lists the advantages of agar: few microbes degrade it so it remains solid, it liquefies near 100°C and solidifies near 40°C, it is safe when poured at ~50°C, and it withstands incubation up to ~100°C — useful even for thermophiles.',
		difficulty: 'advanced'
	},
	{
		id: 15,
		question:
			'In a microbiological assay for a vitamin, the medium contains everything except the vitamin, and bacterial growth (measured by lactic acid production) increases in proportion to the amount of vitamin added. Why does this design quantify the vitamin?',
		options: [
			'The vitamin is the limiting factor, so the amount of growth directly reflects the vitamin concentration supplied.',
			'The vitamin is a toxin, and growth stops proportionally as more is added.',
			'Lactic acid production is inversely proportional to cell numbers.',
			'The bacteria convert the vitamin into the very acid being measured.'
		],
		answer:
			'The vitamin is the limiting factor, so the amount of growth directly reflects the vitamin concentration supplied.',
		explanation:
			'The lecture describes microbiological assays where the medium holds all growth requirements except the vitamin being tested; the test substance and bacterium are added, and growth measured by lactic acid production is proportional to the vitamin concentration, enabling quantification.',
		difficulty: 'expert'
	},
	{
		id: 16,
		question:
			'A researcher must study the precise nutritional requirements of a fastidious organism. What is the key difference they must consider between chemically defined and complex media?',
		options: [
			'Chemically defined media have a precisely known composition; complex media are made from extracts whose exact composition varies between batches.',
			'Complex media have a precisely known composition; chemically defined media vary between batches.',
			'Chemically defined media are sterile; complex media are not sterile initially.',
			'Complex media lack nitrogen; chemically defined media lack carbon.'
		],
		answer:
			'Chemically defined media have a precisely known composition; complex media are made from extracts whose exact composition varies between batches.',
		explanation:
			'The lecture defines chemically defined media as having a precisely known chemical composition, while complex media are made from nutrient-rich extracts or protein digests whose exact composition varies between batches; fastidious organisms require many additional growth factors.',
		difficulty: 'advanced'
	},
	{
		id: 17,
		question:
			'In complex media, proteins are the main nutrient source, yet they are digested into peptones before use. What is the reason?',
		options: [
			'Proteins are insoluble and not directly usable by most microbes, while peptones are soluble fragments bacteria can use.',
			'Peptones are toxic to contaminants, so digestion sterilizes the medium.',
			'Digestion converts proteins into vitamins that the bacteria cannot otherwise absorb.',
			'Peptones raise the pH, matching the optimum for most bacteria.'
		],
		answer:
			'Proteins are insoluble and not directly usable by most microbes, while peptones are soluble fragments bacteria can use.',
		explanation:
			'The lecture states proteins provide carbon, nitrogen, and sulfur but are insoluble and not directly usable by most microbes; they are digested into soluble fragments called peptones that bacteria can use.',
		difficulty: 'expert'
	},
	{
		id: 18,
		question:
			'The OxyPlate system lets each Petri plate act as its own anaerobic chamber. Which mechanism does it use to remove oxygen?',
		options: [
			'An oxyrase enzyme combines oxygen with hydrogen to form water.',
			'A lit candle inside consumes oxygen and enriches carbon dioxide.',
			'Chemical envelopes containing ascorbic acid absorb the oxygen.',
			'A vacuum pump evacuates the air before the lid is sealed.'
		],
		answer: 'An oxyrase enzyme combines oxygen with hydrogen to form water.',
		explanation:
			'The lecture describes OxyPlate plates containing oxyrase enzyme, which removes oxygen by combining it with hydrogen to form water; chemical envelopes with ascorbic acid are a separate oxygen-removal system, and candle jars are a capnophile technique.',
		difficulty: 'advanced'
	},
	{
		id: 19,
		question:
			'A clinical lab works with Mycobacterium tuberculosis, an airborne pathogen, using biological safety cabinets, negative air pressure, and air filtration. Which biosafety level does this describe?',
		options: [
			'BSL-3 — for highly infectious airborne pathogens, worked on in biological safety cabinets with negative air pressure and air filtration.',
			'BSL-1 — basic teaching labs handling nonpathogenic organisms.',
			'BSL-2 — moderate-risk organisms on an open benchtop with gloves and eye protection.',
			'BSL-4 — requiring sealed space suits and double-filtered HEPA air.'
		],
		answer:
			'BSL-3 — for highly infectious airborne pathogens, worked on in biological safety cabinets with negative air pressure and air filtration.',
		explanation:
			'The lecture places Mycobacterium tuberculosis at BSL-3: highly infectious airborne pathogens handled in biological safety cabinets under negative air pressure with air filtration; BSL-4 (e.g., Ebolavirus) adds sealed labs, double-filtered HEPA air, sterilized waste, and air-supplied space suits.',
		difficulty: 'advanced'
	},
	{
		id: 20,
		question:
			"On mannitol salt agar, one organism forms yellow colonies surrounded by a color change while no other growth appears. What does the lecture say about the plate's design and what the result indicates?",
		options: [
			'The 7.5% NaCl selectively allows Staphylococcus aureus while inhibiting most bacteria, and the mannitol-plus-indicator design changes color when S. aureus ferments mannitol to acid.',
			'The agar is differential only; the color change identifies any gram-negative fermenter.',
			'The pH 5.6 agar favors fungi, so yellow colonies indicate a mold.',
			'The blood in the agar lyses, producing yellow zones around beta-hemolytic colonies.'
		],
		answer:
			'The 7.5% NaCl selectively allows Staphylococcus aureus while inhibiting most bacteria, and the mannitol-plus-indicator design changes color when S. aureus ferments mannitol to acid.',
		explanation:
			'The lecture calls mannitol salt agar combined selective and differential: 7.5% NaCl inhibits most bacteria while allowing S. aureus, and mannitol with a pH indicator changes color when S. aureus ferments mannitol to acid; the identification is confirmed with additional tests.',
		difficulty: 'expert'
	}
];

export const microbialGrowthQuizData = microbialGrowthQuizItems.map((question) => ({
	...question,
	difficulty: question.difficulty as 'advanced' | 'expert'
})) satisfies Question[];
