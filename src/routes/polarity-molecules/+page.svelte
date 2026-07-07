<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { polarityMoleculesQuizData } from '$lib/polarityMoleculesQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#00d4ff',
		secondary: '#fcb045',
		tertiary: '#a78bfa',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={polarityMoleculesQuizData}
	headTitle="Polarity of Molecules Quiz"
	eyebrow="Lecture 3–4 // Polarity of Molecules"
	title="Polarity of"
	accentTitle="Molecules"
	source="Source: 3–4. Polarity of Molecules.pptx"
	scope="Scope: Electronegativity, Bond Polarity, Molecular Geometry, Dipole Moments"
	topics={['Electronegativity', 'Bond Polarity', 'Molecular Geometry', 'Applications']}
	introTitle="Explore Molecular Polarity"
	introText="Practice the extracted lecture on electronegativity trends, bond polarity classification, VSEPR molecular geometries, and the real-world applications of polarity — including why water and oil never mix."
	noteTitle="Chem Note"
	resultTitle="Polarity Assessment Complete"
	scoreLabel="Polarity of Molecules Score"
	footer="Source extracted from 3–4. Polarity of Molecules.pptx"
	{colors}
/>
