import { animalDiversityQuizData } from '../src/lib/animalDiversityQuizData';

function assert(condition: unknown, message: string): asserts condition {
	if (!condition) {
		throw new Error(message);
	}
}

function wordCount(value: string) {
	return value.trim().split(/\s+/).filter(Boolean).length;
}

assert(
	animalDiversityQuizData.length === 25,
	'Animal Diversity quiz must contain exactly 25 items.'
);

animalDiversityQuizData.forEach((question, index) => {
	assert(question.id === index + 1, `Question ${index + 1} must have sequential id ${index + 1}.`);
	assert(question.question.trim().length > 0, `Question ${question.id} must include prompt text.`);
	assert(
		question.options.length === 4,
		`Question ${question.id} must include exactly four options.`
	);
	assert(
		new Set(question.options).size === question.options.length,
		`Question ${question.id} must not include duplicate options.`
	);
	assert(
		question.options.includes(question.answer),
		`Question ${question.id} answer must be one of its options.`
	);
	const optionWordCounts = question.options.map(wordCount);
	assert(
		optionWordCounts.every((count) => count >= 4 && count <= 8),
		`Question ${question.id} options must each be short sentences of four to eight words.`
	);
	assert(
		Math.max(...optionWordCounts) - Math.min(...optionWordCounts) <= 2,
		`Question ${question.id} options must have similar word counts.`
	);
	assert(
		question.options.every((option) => /^[A-Z]/.test(option) && /[.!?]$/.test(option)),
		`Question ${question.id} options must be sentence-like choices.`
	);
	assert(
		question.explanation.trim().length > 0,
		`Question ${question.id} must include an explanation.`
	);
});

console.log('Animal Diversity quiz data contract passed.');
