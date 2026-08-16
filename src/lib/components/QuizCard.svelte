<script lang="ts">
	import { resolve } from '$app/paths';
	import type { QuizModule } from '$lib/quizzes';

	let { module, index = 0 }: { module: QuizModule; index?: number } = $props();
</script>

<div class="card-in" style={`animation-delay:${index * 60}ms`}>
	<a
		href={resolve(module.href)}
		class="group relative flex h-full flex-col border-2 border-[#333] bg-[#111] p-5 transition-all duration-200 ease-out hover:translate-y-[-3px] hover:border-[#00f2ff] focus-visible:border-[#00f2ff] focus-visible:outline-none active:scale-[0.97]"
	>
		<div class="mb-4 flex items-start justify-between">
			<span
				class="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-[#333] bg-[#0a0a0a] font-['JetBrains_Mono'] text-sm font-bold text-[#00f2ff] transition-colors duration-200 group-hover:border-[#00f2ff]"
			>
				{module.icon}
			</span>
			<span
				class="font-['JetBrains_Mono'] text-[9px] tracking-widest text-[#555] uppercase transition-colors duration-200 group-hover:text-[#00f2ff]"
			>
				{module.subject}
			</span>
		</div>
		<h3
			class="text-lg font-black tracking-tight text-white uppercase italic transition-colors duration-200 group-hover:text-[#00f2ff]"
		>
			{module.title}
		</h3>
		<p class="mt-2 flex-1 text-xs leading-relaxed text-[#888]">
			{module.description}
		</p>
		<div class="mt-4 flex items-center justify-between border-t border-[#ffffff10] pt-3">
			<span class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#666] uppercase">
				{module.items} Items
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
				class="h-4 w-4 text-[#555] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#00f2ff]"
			>
				<path d="M5 12h14" />
				<path d="m12 5 7 7-7 7" />
			</svg>
		</div>
	</a>
</div>

<style>
	.card-in {
		animation: cardIn 0.35s cubic-bezier(0.23, 1, 0.32, 1) both;
	}

	@keyframes cardIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card-in {
			animation: none;
		}
	}
</style>
