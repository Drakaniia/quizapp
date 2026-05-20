export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty: 'advanced' | 'expert';
	illustration?: string;
}

const karyotypeIllustration = `
<svg role="img" aria-label="Karyotype with autosomes and sex chromosomes" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#161119"/>
	<text x="34" y="38" fill="#ff5aa5" font-family="monospace" font-size="18" font-weight="700">KARYOTYPE SORTING</text>
	<text x="34" y="66" fill="#d9cad5" font-family="monospace" font-size="13">size + centromere position separate homologous pairs</text>
	<g transform="translate(36 94)" fill="none" stroke-width="8" stroke-linecap="round">
		<path d="M12 0 L12 74" stroke="#f7c744"/><path d="M34 0 L34 74" stroke="#f7c744"/>
		<path d="M80 10 L80 80" stroke="#40d6c4"/><path d="M102 10 L102 80" stroke="#40d6c4"/>
		<path d="M148 22 L148 86" stroke="#f7c744"/><path d="M170 22 L170 86" stroke="#f7c744"/>
		<path d="M216 4 L216 78" stroke="#40d6c4"/><path d="M238 4 L238 78" stroke="#40d6c4"/>
		<path d="M284 28 L284 88" stroke="#f7c744"/><path d="M306 28 L306 88" stroke="#f7c744"/>
		<path d="M352 12 L352 82" stroke="#40d6c4"/><path d="M374 12 L374 82" stroke="#40d6c4"/>
	</g>
	<g transform="translate(530 92)" fill="none" stroke-width="9" stroke-linecap="round">
		<path d="M20 0 L20 92" stroke="#ff5aa5"/><path d="M54 28 L54 92" stroke="#9ee6d9"/>
	</g>
	<text x="536" y="208" fill="#d9cad5" font-family="monospace" font-size="14">sex pair</text>
	<text x="36" y="208" fill="#d9cad5" font-family="monospace" font-size="14">autosome pairs</text>
</svg>`;

const sexAneuploidIllustration = `
<svg role="img" aria-label="Sex chromosome aneuploid comparison" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#161119"/>
	<text x="32" y="38" fill="#ff5aa5" font-family="monospace" font-size="18" font-weight="700">SEX ANEUPLOID CHECK</text>
	<g font-family="monospace" font-size="15" fill="#f4edf1">
		<rect x="36" y="66" width="154" height="130" rx="6" fill="#221923" stroke="#ff5aa5"/>
		<text x="58" y="98">45,X</text><text x="58" y="128">Turner</text><text x="58" y="158">single X</text>
		<rect x="214" y="66" width="154" height="130" rx="6" fill="#221923" stroke="#40d6c4"/>
		<text x="236" y="98">47,XXX</text><text x="236" y="128">Meta female</text><text x="236" y="158">2 Barr bodies</text>
		<rect x="392" y="66" width="154" height="130" rx="6" fill="#221923" stroke="#f7c744"/>
		<text x="414" y="98">47,XXY</text><text x="414" y="128">Klinefelter</text><text x="414" y="158">male phenotype</text>
		<rect x="570" y="66" width="154" height="130" rx="6" fill="#221923" stroke="#9ee6d9"/>
		<text x="592" y="98">47,XYY</text><text x="592" y="128">Jacobs</text><text x="592" y="158">extra Y</text>
	</g>
</svg>`;

const translocationIllustration = `
<svg role="img" aria-label="Robertsonian and Philadelphia chromosome translocations" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="250" rx="8" fill="#161119"/>
	<text x="32" y="38" fill="#ff5aa5" font-family="monospace" font-size="18" font-weight="700">STRUCTURAL CHROMOSOME CHANGES</text>
	<g font-family="monospace" font-size="15" fill="#f4edf1" stroke-linecap="round">
		<text x="46" y="78">Robertsonian</text>
		<path d="M76 102 L76 190" stroke="#f7c744" stroke-width="10"/>
		<path d="M126 116 L126 190" stroke="#40d6c4" stroke-width="10"/>
		<path d="M206 104 L206 190" stroke="#f7c744" stroke-width="10"/>
		<path d="M206 116 L246 190" stroke="#40d6c4" stroke-width="10"/>
		<text x="62" y="218">14 + 21</text><text x="198" y="218">fusion risk</text>
		<path d="M336 150 L396 150" stroke="#9ee6d9" stroke-width="4"/>
		<path d="M386 140 L400 150 L386 160" stroke="#9ee6d9" stroke-width="4" fill="none"/>
		<text x="462" y="78">Philadelphia</text>
		<path d="M498 102 L498 190" stroke="#ff5aa5" stroke-width="10"/>
		<path d="M548 102 L548 190" stroke="#f7c744" stroke-width="10"/>
		<path d="M498 154 L548 132" stroke="#40d6c4" stroke-width="8"/>
		<text x="470" y="218">t(9;22) in CML</text>
	</g>
</svg>`;

const metabolismIllustration = `
<svg role="img" aria-label="Metabolic pathway blocks" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="240" rx="8" fill="#161119"/>
	<text x="32" y="38" fill="#ff5aa5" font-family="monospace" font-size="18" font-weight="700">INBORN ERROR LOGIC</text>
	<g font-family="monospace" font-size="15" fill="#f4edf1">
		<text x="52" y="92">galactose</text><path d="M160 88 H270" stroke="#40d6c4" stroke-width="4"/><text x="292" y="92">usable products</text>
		<text x="178" y="126" fill="#f7c744">Gal-1-P transferase</text>
		<text x="52" y="170">phenylalanine</text><path d="M184 166 H270" stroke="#40d6c4" stroke-width="4"/><text x="292" y="170">tyrosine / serotonin</text>
		<text x="492" y="114" fill="#f7c744">G6PD low</text>
		<text x="492" y="146">primaquine or fava beans</text>
		<text x="492" y="178">hemolytic anemia risk</text>
	</g>
</svg>`;

const behaviorIllustration = `
<svg role="img" aria-label="Behavioral genetics risk model" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
	<rect width="760" height="230" rx="8" fill="#161119"/>
	<text x="32" y="38" fill="#ff5aa5" font-family="monospace" font-size="18" font-weight="700">BEHAVIORAL GENETICS MODEL</text>
	<g font-family="monospace" font-size="15" fill="#f4edf1">
		<rect x="54" y="82" width="150" height="80" rx="6" fill="#221923" stroke="#40d6c4"/>
		<text x="82" y="116">genes</text><text x="78" y="144">40-60%</text>
		<rect x="306" y="82" width="150" height="80" rx="6" fill="#221923" stroke="#f7c744"/>
		<text x="334" y="116">environment</text><text x="344" y="144">exposure</text>
		<rect x="558" y="82" width="150" height="80" rx="6" fill="#221923" stroke="#ff5aa5"/>
		<text x="594" y="116">behavior</text><text x="598" y="144">adaptation</text>
		<path d="M216 122 H294 M468 122 H546" stroke="#9ee6d9" stroke-width="4"/>
	</g>
</svg>`;

export const humanGeneticsQuizData: Question[] = [
	{
		id: 1,
		question:
			'A lab assistant arranges metaphase chromosomes first by chromosome size and then by centromere position. Which task is being performed?',
		options: [
			'Building a karyotype for chromosome-level analysis.',
			'Screening a metabolic pathway for single-enzyme deficiency.',
			'Testing a pedigree model for dominant behavioral inheritance.',
			'Sequencing a point mutation inside a globin coding region.'
		],
		answer: 'Building a karyotype for chromosome-level analysis.',
		explanation:
			'A karyotype is the cytogenetic arrangement of chromosomes according to size and centromere position.',
		difficulty: 'advanced',
		illustration: karyotypeIllustration
	},
	{
		id: 2,
		question:
			'During sex chromosome mapping, only a tiny terminal segment of X and Y behaves as homologous. Which conclusion best follows?',
		options: [
			'Most X-linked loci lack matching Y-linked partners.',
			'Most Y-linked loci encode ordinary autosomal body traits.',
			'Both sex chromosomes carry equivalent gene inventories.',
			'Autosomes determine sex through centromere placement alone.'
		],
		answer: 'Most X-linked loci lack matching Y-linked partners.',
		explanation:
			'The lecture states that X and Y are homologous only over a tiny end segment; the X carries many genes unrelated to sex determination, while many Y-linked genes are sex-determination related.',
		difficulty: 'advanced'
	},
	{
		id: 3,
		question:
			'A fetal karyotype shows three copies of chromosome 21. Which interpretation connects the cytogenetic finding to the named syndrome?',
		options: [
			'It supports Down syndrome caused by autosomal aneuploidy.',
			'It supports Turner syndrome caused by sex chromosome loss.',
			'It supports cri-du-chat caused by deletion of chromosome 5p.',
			'It supports Klinefelter syndrome caused by an extra X.'
		],
		answer: 'It supports Down syndrome caused by autosomal aneuploidy.',
		explanation: 'Down syndrome is listed as trisomy 21, an autosomal aneuploid condition.',
		difficulty: 'advanced'
	},
	{
		id: 4,
		question:
			'A newborn has trisomy 18, clenched fists, and overlapping fingers. Which syndrome name best matches the chromosome finding?',
		options: [
			'Edward syndrome, not Patau syndrome.',
			'Patau syndrome, not Edward syndrome.',
			'Turner syndrome, not Jacobs syndrome.',
			'Cri-du-chat, not Philadelphia chromosome.'
		],
		answer: 'Edward syndrome, not Patau syndrome.',
		explanation:
			'The lecture identifies Edward syndrome as trisomy 18 and notes overlapping fingers with clenched fists.',
		difficulty: 'advanced'
	},
	{
		id: 5,
		question:
			'A trisomy is classified in the D group and involves chromosome 13. Which diagnosis is most consistent with the lecture notes?',
		options: [
			'Patau syndrome with multiple physical defects.',
			'Edward syndrome with clenched overlapping fingers.',
			'Down syndrome with trisomy of chromosome 21.',
			'Jacobs syndrome with an extra Y chromosome.'
		],
		answer: 'Patau syndrome with multiple physical defects.',
		explanation:
			'D trisomy syndrome involves chromosomes 13, 14, or 15; Patau syndrome is trisomy 13.',
		difficulty: 'advanced'
	},
	{
		id: 6,
		question:
			'A patient has 45 chromosomes, one X chromosome, short stature, webbed neck, and ovarian failure. Which nondisjunction outcome fits best?',
		options: [
			'45,X Turner syndrome.',
			'47,XXX meta female.',
			'47,XXY Klinefelter syndrome.',
			'47,XYY Jacobs syndrome.'
		],
		answer: '45,X Turner syndrome.',
		explanation:
			'Turner syndrome is described as an XO condition with one X chromosome, short stature, retarded sexual development, and frequent sterility.',
		difficulty: 'advanced',
		illustration: sexAneuploidIllustration
	},
	{
		id: 7,
		question:
			'A female patient has 47 chromosomes and two condensed X chromosomes visible as Barr bodies. Which sex aneuploid condition is most likely?',
		options: [
			'Trisomy X, also called meta female.',
			'Monosomy X, also called Turner syndrome.',
			'XXY, also called Klinefelter syndrome.',
			'XYY, also called Jacobs syndrome.'
		],
		answer: 'Trisomy X, also called meta female.',
		explanation:
			'The meta female condition has three X chromosomes; two X chromosomes condense to Barr bodies, leaving 47 chromosomes in body cells.',
		difficulty: 'expert',
		illustration: sexAneuploidIllustration
	},
	{
		id: 8,
		question:
			'An adult male has small testes, sparse body hair, breast enlargement, and an XXY karyotype. Which treatment limitation should be expected?',
		options: [
			'Testosterone may improve anatomy but not fertility.',
			'Antibiotics may cure the chromosome-level mechanism.',
			'Dietary phenylalanine control may reverse the karyotype.',
			'Barr body removal may restore normal meiotic pairing.'
		],
		answer: 'Testosterone may improve anatomy but not fertility.',
		explanation:
			'For Klinefelter syndrome, the slide notes that testosterone injections can reverse some anatomical abnormalities but not mental impairment or lowered fertility.',
		difficulty: 'expert',
		illustration: sexAneuploidIllustration
	},
	{
		id: 9,
		question:
			'A school record labels a tall XYY student as genetically destined for criminal behavior. Which correction best fits the lecture?',
		options: [
			'XYY may be normal, with height and learning issues.',
			'XYY always causes a lethal autosomal trisomy phenotype.',
			'XYY is the same condition as a single X in females.',
			'XYY primarily deletes the short arm of chromosome 5.'
		],
		answer: 'XYY may be normal, with height and learning issues.',
		explanation:
			'The lecture notes early prison observations but says later studies showed XYY individuals can be normal, with traits such as exceptional height, acne, speech problems, and reading problems.',
		difficulty: 'advanced',
		illustration: sexAneuploidIllustration
	},
	{
		id: 10,
		question:
			'Using the nondisjunction frequency table, which listed syndrome has the highest live-birth frequency among the autosomal trisomies?',
		options: [
			'Down syndrome at about 1 in 700 births.',
			'Patau syndrome at about 1 in 15,000 births.',
			'Edward syndrome at about 1 in 6,000 births.',
			'Turner syndrome at about 1 in 6,000 births.'
		],
		answer: 'Down syndrome at about 1 in 700 births.',
		explanation:
			'The table lists Down syndrome as trisomy 21 with a birth frequency near 1/700, higher than the listed Patau and Edward frequencies.',
		difficulty: 'expert'
	},
	{
		id: 11,
		question:
			'A child has a cat-like cry caused by abnormal larynx development and a deletion on chromosome 5p. Which chromosomal aberration is being described?',
		options: [
			'Cri-du-chat syndrome.',
			'Philadelphia chromosome.',
			'Robertsonian translocation.',
			'G6PD-linked favism.'
		],
		answer: 'Cri-du-chat syndrome.',
		explanation:
			'Cri-du-chat, or 5p- syndrome, is due to deletion of the short arm of chromosome 5 and can cause abnormal larynx development.',
		difficulty: 'advanced'
	},
	{
		id: 12,
		question:
			'A male child develops progressive muscle wasting because a missing X-linked protein fails to stabilize muscle cell membranes. Which gene product is implicated?',
		options: ['Dystrophin.', 'Serotonin.', 'Gal-1-P transferase.', 'Neural CAM.'],
		answer: 'Dystrophin.',
		explanation:
			'The X-linked muscular dystrophy slide states that the normal gene codes for dystrophin, which stabilizes cell membranes during muscle contraction.',
		difficulty: 'expert'
	},
	{
		id: 13,
		question:
			'A parent carries a Robertsonian translocation involving chromosomes 14 and 21. Which reproductive risk is most directly highlighted by the lecture?',
		options: [
			'A child with Down syndrome from translocation.',
			'A child with cri-du-chat from chromosome 5p deletion.',
			'A child with CML from somatic t(9;22) translocation.',
			'A child with favism from an X-linked enzyme defect.'
		],
		answer: 'A child with Down syndrome from translocation.',
		explanation:
			'Robertsonian translocations between chromosomes 14 and 21 are noted as a cause of Down syndrome.',
		difficulty: 'expert',
		illustration: translocationIllustration
	},
	{
		id: 14,
		question:
			'A leukemia sample shows a reciprocal transfer from the q arm of chromosome 22 to the q arm of chromosome 9. What is the expected clinical association?',
		options: [
			'Philadelphia chromosome associated with CML.',
			'Robertsonian fusion producing inherited trisomy 21.',
			'Short-arm chromosome 5 deletion producing cat cry.',
			'X-linked dystrophin loss producing muscle wasting.'
		],
		answer: 'Philadelphia chromosome associated with CML.',
		explanation:
			'The Philadelphia chromosome is a reciprocal translocation designated t(9;22) that activates oncogenes and is associated with chronic myelogenous leukemia.',
		difficulty: 'expert',
		illustration: translocationIllustration
	},
	{
		id: 15,
		question:
			'An infant cannot metabolize galactose because the genotype lacks Gal-1-P uridyl transferase. Which inborn error is most consistent?',
		options: ['Galactosemia.', 'Phenylketonuria.', 'Favism.', 'Thalassemia.'],
		answer: 'Galactosemia.',
		explanation:
			'Galactosemia is described as inability to metabolize galactose because gg individuals lack Gal-1-P uridyl transferase.',
		difficulty: 'advanced',
		illustration: metabolismIllustration
	},
	{
		id: 16,
		question:
			'A metabolic disorder blocks conversion of phenylalanine to tyrosine and then serotonin. Which condition is being tested?',
		options: ['Phenylketonuria.', 'Galactosemia.', 'Cystic fibrosis.', 'Primaquine sensitivity.'],
		answer: 'Phenylketonuria.',
		explanation:
			'PKU is listed as the inability to convert phenylalanine to tyrosine and then serotonin.',
		difficulty: 'advanced',
		illustration: metabolismIllustration
	},
	{
		id: 17,
		question:
			'A patient develops hemolytic anemia after primaquine exposure and also reacts to fava beans. Which genetic explanation best fits?',
		options: [
			'X-linked G6PD deficiency with malaria resistance.',
			'Autosomal trisomy with increased maternal-age risk.',
			'CFTR deletion with recurrent lung infection risk.',
			'Chromosome 22 to 9 translocation in blood cells.'
		],
		answer: 'X-linked G6PD deficiency with malaria resistance.',
		explanation:
			'Primaquine sensitivity and favism are X-linked disorders associated with G6PD deficiency; the lecture notes this deficiency can confer resistance to malaria.',
		difficulty: 'expert',
		illustration: metabolismIllustration
	},
	{
		id: 18,
		question:
			'Sequencing of a beta globin allele shows valine replacing glutamic acid at the sixth amino acid. Which phenotype is most directly expected?',
		options: [
			'Sickle cell anemia from hemoglobin S.',
			'Thalassemia from reduced globin synthesis.',
			'PKU from blocked serotonin production.',
			'Galactosemia from transferase deficiency.'
		],
		answer: 'Sickle cell anemia from hemoglobin S.',
		explanation:
			'Sickle cell anemia is caused by hemoglobin S, with valine substituted for glutamic acid as the sixth amino acid in the beta globin chain.',
		difficulty: 'expert'
	},
	{
		id: 19,
		question:
			'A hereditary anemia is common in Mediterranean populations and results from reduced synthesis of one globin chain. Which diagnosis fits best?',
		options: ['Thalassemia.', 'Sickle cell anemia.', 'Favism.', 'Cystic fibrosis.'],
		answer: 'Thalassemia.',
		explanation:
			'Thalassemia is described as hereditary anemia due to a reduced rate of synthesis of one globin chain, occurring commonly in Mediterranean countries.',
		difficulty: 'advanced'
	},
	{
		id: 20,
		question:
			'A patient has a CFTR deletion, frequent lung infections, poor growth, diarrhea, and infertility. Which management statement is most accurate?',
		options: [
			'Antibiotics treat infections without curing the disorder.',
			'Testosterone can restore fertility and correct the mutation.',
			'Galactose restriction repairs the chloride-channel protein.',
			'Barr body condensation reverses the pulmonary symptoms.'
		],
		answer: 'Antibiotics treat infections without curing the disorder.',
		explanation:
			'Cystic fibrosis is linked to CFTR deletion, breathing difficulty from frequent lung infection, poor growth, diarrhea, and infertility; antibiotics can treat but not cure it.',
		difficulty: 'expert'
	},
	{
		id: 21,
		question:
			'A family shows dominant predisposition to allergy, and the mapped locus lies on chromosome 11. Which lecture detail strengthens the biological interpretation?',
		options: [
			'Chromosome 11 has immune cell-surface marker genes.',
			'Chromosome 11 carries the Philadelphia translocation break.',
			'Chromosome 11 lacks genes involved in cell communication.',
			'Chromosome 11 is the usual site of CFTR deletion alleles.'
		],
		answer: 'Chromosome 11 has immune cell-surface marker genes.',
		explanation:
			'The lecture states that predisposition to allergy is controlled by a single dominant gene on the long arm of chromosome 11, which also has genes for immune-system cell-surface markers.',
		difficulty: 'expert'
	},
	{
		id: 22,
		question:
			'A psychiatric genetics paper reports hallucinations, delusions, young adult onset, and linkage signals on chromosomes 1, 4, 6, 9, and 11. Which condition is being framed?',
		options: [
			'Schizophrenia.',
			'Bulimia nervosa.',
			'Major depressive disorder.',
			'Muscle dysmorphia.'
		],
		answer: 'Schizophrenia.',
		explanation:
			'The schizophrenia slide lists abnormalities in perception of reality, psychosis with delusions and hallucinations, young adult onset, and scan sites on chromosomes 1, 4, 6, 9, and 11.',
		difficulty: 'advanced'
	},
	{
		id: 23,
		question:
			'A patient perceives their body as obese despite starvation and faces one of the highest mortality risks among psychiatric disorders. Which eating disorder fits?',
		options: [
			'Anorexia nervosa.',
			'Bulimia nervosa.',
			'Muscle dysmorphia.',
			'Bipolar affective disorder.'
		],
		answer: 'Anorexia nervosa.',
		explanation:
			'Anorexia nervosa is described as perceiving oneself as obese and intentionally starving; the lecture gives a death risk of 15 to 21 percent.',
		difficulty: 'advanced'
	},
	{
		id: 24,
		question:
			'Which patient pattern best separates bulimia nervosa from anorexia nervosa in the lecture notes?',
		options: [
			'Binge eating followed by exercise or induced vomiting.',
			'Intentional starvation from perceiving oneself as obese.',
			'Fear of being too small with supplement overuse.',
			'Alternating depression and mania across episodes.'
		],
		answer: 'Binge eating followed by exercise or induced vomiting.',
		explanation:
			'Bulimia nervosa is characterized by overeating followed by vigorous exercise and self-induced vomiting to maintain weight.',
		difficulty: 'advanced'
	},
	{
		id: 25,
		question:
			'A male patient sees himself as too small and uses amino acid supplements to bulk up. Which behavioral genetics topic is most relevant?',
		options: [
			'Muscle dysmorphia, also called Adonis complex.',
			'Bulimia nervosa with compensatory vomiting.',
			'Schizophrenia with altered reality perception.',
			'Major depressive disorder with stress episodes.'
		],
		answer: 'Muscle dysmorphia, also called Adonis complex.',
		explanation:
			'Muscle dysmorphia, also called bigorexia or Adonis complex, is described as common among males who see themselves as too small and take amino acid supplements to bulk up.',
		difficulty: 'advanced'
	},
	{
		id: 26,
		question:
			'In the lecture model of drug addiction, which statement best integrates genetic and neurobiological evidence?',
		options: [
			'Genes contribute partly, and dopamine receptors may decrease.',
			'Genetic risk is absent, and receptor number remains unchanged.',
			'Genetic risk is complete, and environment has no measurable role.',
			'Genetic risk is single-gene, and dopamine signaling is irrelevant.'
		],
		answer: 'Genes contribute partly, and dopamine receptors may decrease.',
		explanation:
			'The lecture describes addiction risk as influenced by genetics, environment, and behavior, with genetics contributing about 40 to 60 percent; it also notes the brain may reduce dopamine receptors at synapses.',
		difficulty: 'expert',
		illustration: behaviorIllustration
	},
	{
		id: 27,
		question:
			'A pedigree analysis suggests maternal inheritance for alternating depression and mania, with loci on chromosomes 4, 10, 18, and 22. Which disorder fits?',
		options: [
			'Bipolar affective disorder.',
			'Major depressive disorder.',
			'Schizophrenia spectrum disorder.',
			'Drug addiction vulnerability.'
		],
		answer: 'Bipolar affective disorder.',
		explanation:
			'Bipolar affective disorder, or manic depression, is described as alternating depression and mania; the lecture notes maternal inheritance and genes on chromosomes 4, 10, 18, and 22.',
		difficulty: 'expert'
	},
	{
		id: 28,
		question:
			'A study measures verbal fluency, mathematical reasoning, memory, and spatial visualization as one heritable composite. Which construct is being assessed?',
		options: [
			'The g value, or general intelligence ability.',
			'The Barr body count for X chromosome dosage.',
			'The G6PD phenotype for malaria resistance.',
			'The ROB carrier state for meiotic segregation.'
		],
		answer: 'The g value, or general intelligence ability.',
		explanation:
			'The intelligence slide defines the g value as general intelligence ability, including verbal fluency, mathematical reasoning, memory, and spatial visualization.',
		difficulty: 'advanced'
	},
	{
		id: 29,
		question:
			'Why does the lecture argue that adult intelligence estimates can show high heritability while still allowing environmental effects earlier in life?',
		options: [
			'Adults gain more control over their environments with age.',
			'Environmental influence disappears because chromosome 4 is deleted.',
			'Environmental influence increases because N-CAM blocks learning.',
			'Environmental influence is impossible when h2 is below 0.1.'
		],
		answer: 'Adults gain more control over their environments with age.',
		explanation:
			'The lecture states that environmental effect declines as an individual ages, with h2 about 0.8 in adults, partly because adults better control their environment.',
		difficulty: 'expert'
	},
	{
		id: 30,
		question:
			'A case has both ovarian and testicular tissues, a 46,XY notation with a minute y chromosome, congenital abnormalities, and hypertonia. Which lecture topic fits best?',
		options: [
			'Hermaphroditism in the sex aneuploid section.',
			'Cri-du-chat in the deletion-aberration section.',
			'PKU in the inborn-error metabolism section.',
			'Thalassemia in the point-mutation section.'
		],
		answer: 'Hermaphroditism in the sex aneuploid section.',
		explanation:
			'The lecture lists hermaphroditism as 46, Xy with both ovarian and testicular tissues, a minute y chromosome, congenital abnormalities, and hypertonia.',
		difficulty: 'expert'
	}
];
