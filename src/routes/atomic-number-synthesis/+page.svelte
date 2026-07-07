<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { atomicNumberSynthesisQuizData } from '$lib/atomicNumberSynthesisQuizData';

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
	quizData={atomicNumberSynthesisQuizData}
	headTitle="Atomic Number & Element Synthesis Quiz"
	eyebrow="Lecture // Atomic Number & Element Synthesis"
	title="Atomic Number &amp;"
	accentTitle="Element Synthesis"
	source="Source: 2. Concept of Atomic Number led to the synthesis of the new elements in the laboratory.pptx"
	scope="Scope: Mendeleev, Moseley, Transmutation, Cyclotron, Transuranic Elements"
	topics={['Mendeleev', 'Moseley', 'Nuclear Transmutation', 'Cyclotron', 'Missing Elements', 'Transuranic']}
	introTitle="From Mendeleev to Super Heavy Elements"
	introText="Practice the extracted lecture on the concept of atomic number, Mendeleev vs Moseley, nuclear transmutation, particle accelerators, the cyclotron, James Chadwick's neutron discovery, missing elements, transuranic elements, and super heavy elements."
	noteTitle="Lab Note"
	resultTitle="Atomic Number Synthesis Assessment Complete"
	scoreLabel="Atomic Number & Element Synthesis Score"
	footer="Source extracted from 2. Concept of Atomic Number led to the synthesis of the new elements in the laboratory.pptx"
	{colors}
/>
