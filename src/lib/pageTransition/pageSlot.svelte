<script lang="ts">
	import { quintIn } from 'svelte/easing';
	import { navigating } from '$app/stores';

	export let url: string;
    export let NavHeight: number;


	// Spinner
	import type { SpinnerTypes } from '$lib/types/postTypes';

	const durationUnitRegex = /[a-zA-Z]/;
	const range = (size: number, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);

	export let duration: SpinnerTypes['duration'] = '2.5s';
	export let size: SpinnerTypes['size'] = '100';
	export let unit: SpinnerTypes['unit'] = 'px';
	export let pause: SpinnerTypes['pause'] = false;
	
	let durationUnit: string = duration.match(durationUnitRegex)?.[0] ?? 's';
	let durationNum: string = duration.replace(durationUnitRegex, '');

	const transitionInOut = (
		node: HTMLDivElement,
		{ duration, delay }: { duration: number; delay: number }
	) => {
		return {
			duration,
			delay,
			easeing: quintIn,
			css: (t: any) => `opacity: ${t}`
		};
	};
</script>
{#if $navigating }
	<div
		class="loading" style="--adjust-to-nav:{NavHeight}px;"
		in:transitionInOut={{ duration: 1000, delay: 500 }}
		out:transitionInOut|local={{ duration: 500, delay: 0 }}
	>
	<div
	class="wrapper"
	style="--size: {size}{unit}; --motionOne: {-size /
		5}{unit}; --motionTwo: {+size / 4}{unit}; --motionThree: {-size /
		5}{unit}; --duration: {duration};"
>
	{#each range(6, 0) as version}
		<div
			class="ring"
			class:pause-animation={pause}
			style="animation-delay: {version * (+durationNum / 25)}{durationUnit}; width: {version *
				(+size / 6) +
				unit}; height: {(version * (+size / 6)) / 2 + unit}; "
		/>
	{/each}
</div>
	</div>
{:else}
	{#key url}
		<div
			class="transitionAway"
			in:transitionInOut={{ duration: 1000, delay: 500 }}
			out:transitionInOut|local={{ duration: 100, delay: 0 }}
		>
			<slot />
		</div>
	{/key}
{/if}

<style lang="scss">
    @use '../../abstract/palettes.scss' as *;

	.loading {
        --adjust-to-nav:102px;
		width: 100%;
		height: calc(100vh - var(--adjust-to-nav));
        position: fixed;
		inset: 85px auto auto;
		background: getColor(darkgrays, 100);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}
	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--size);
		height: var(--size);
	}
	.ring {
		position: absolute;
		border: 2px solid var(--accent-color);
		border-radius: 50%;
		background-color: transparent;
		-webkit-animation: motion var(--duration) ease infinite;
        animation: motion var(--duration) ease infinite;
	}
	.pause-animation {
		-webkit-animation-play-state: paused;
		        animation-play-state: paused;
	}
	@-webkit-keyframes motion {
		0% {
			-webkit-transform: translateY(var(--motionOne));
			        transform: translateY(var(--motionOne));
		}
		50% {
			-webkit-transform: translateY(var(--motionTwo));
			        transform: translateY(var(--motionTwo));
		}
		100% {
			-webkit-transform: translateY(var(--motionThree));
			        transform: translateY(var(--motionThree));
		}
	}
	@keyframes motion {
		0% {
			-webkit-transform: translateY(var(--motionOne));
			        transform: translateY(var(--motionOne));
		}
		50% {
			-webkit-transform: translateY(var(--motionTwo));
			        transform: translateY(var(--motionTwo));
		}
		100% {
			-webkit-transform: translateY(var(--motionThree));
			        transform: translateY(var(--motionThree));
		}
	}
</style>
