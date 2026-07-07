<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { bigBangNucleosynthesisQuizData } from '$lib/bigBangNucleosynthesisQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#a78bfa',
		secondary: '#fcb045',
		tertiary: '#4ecdc4',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={bigBangNucleosynthesisQuizData}
	headTitle="Big Bang & Stellar Nucleosynthesis Quiz"
	eyebrow="Lecture // Big Bang & Stellar Nucleosynthesis"
	title="Big Bang &amp;"
	accentTitle="Nucleosynthesis"
	source="Source: 1. BigBang and Stellar Nucleosynthesis (1).pptx"
	scope="Scope: Big Bang, Isotopes, BBN, Stellar Fusion"
	topics={['Big Bang', 'Isotopes', 'Nucleosynthesis', 'Stellar Fusion']}
	introTitle="Journey Through Cosmic Origins"
	introText="Practice the extracted lecture on the Big Bang theory, atomic structure, isotopes, Big Bang nucleosynthesis of light elements, and stellar nucleosynthesis of heavier elements in stars."
	noteTitle="Cosmo Note"
	resultTitle="Nucleosynthesis Assessment Complete"
	scoreLabel="Big Bang & Nucleosynthesis Score"
	footer="Source extracted from 1. BigBang and Stellar Nucleosynthesis (1).pptx"
	{colors}
/>
