<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { microbialGrowthQuizData } from '$lib/microbialGrowthQuizData';

	const colors = {
		bg: '#0d1310',
		panel: '#16211a',
		panelAlt: '#22332a',
		border: '#3d5647',
		text: '#eaf6ee',
		muted: '#b8ccbd',
		primary: '#4ade80',
		secondary: '#fbbf24',
		tertiary: '#22d3ee',
		danger: '#f87171'
	};
</script>

<CollegeQuiz
	quizData={microbialGrowthQuizData}
	headTitle="Microbial Growth College Quiz"
	eyebrow="Chapter 6 // Microbial Growth"
	title="Microbial"
	accentTitle="Growth"
	source="Source: CHAPTER 6.pdf"
	scope="Scope: Physical & Chemical Requirements to Culture Techniques"
	topics={[
		'Temperature & pH',
		'Osmotic Pressure',
		'Nutritional Requirements',
		'Culture Media & Methods'
	]}
	introTitle="Engineer the Conditions"
	introText="Command the physical and chemical conditions that govern microbial growth — temperature and pH optima, osmotic pressure and plasmolysis, nutritional requirements, and the selective, differential, and anaerobic culture techniques used to grow and identify microbes."
	noteTitle="Growth Note"
	resultTitle="Growth Assessment Complete"
	scoreLabel="Microbial Growth Score"
	footer="Source extracted from CHAPTER 6.pdf"
	{colors}
/>
