<script lang="ts">
	import type { NavElementType } from '$lib/types/postTypes';

	import { fly } from 'svelte/transition';

	export let index: NavElementType['sitemap'];
	export let showPanel: boolean;
	export let NavHeight: number;
	export let Yposition: number;
	export let adjustToSencondary: number;
</script>

{#if showPanel}
	<div
		class="menu-panel {showPanel ? 'open' : ''}"
		style="top: {Yposition > adjustToSencondary
			? `${NavHeight}px`
			: `${NavHeight + adjustToSencondary - Yposition}px`};
            --adjust-to-nav: {Yposition > adjustToSencondary ? NavHeight :  (NavHeight + adjustToSencondary) }px;"
		in:fly={{ x: 100 }}
		out:fly={{ x: 100 }}
	>
		<ul>
			{#each index as item}
				<li><a href={item.href} on:click={() => showPanel = ! showPanel}>{item.title}</a></li>
			{/each}
		</ul>
	</div>
{/if}

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;
	@use '../../abstract/mixins.scss' as *;

	$menu-font-size: (
		null: 17px,
		small: 18px,
		medium: 19px,
		large: 20px
	);

	.menu-panel {
		width: 40%;
		height: calc(100vh - var(--adjust-to-nav));
		position: fixed;
		right: 0;
		padding: 0 1.5rem;
		background: getColor(darkgrays, 80);
		display: flex;
		flex-direction: column;
		z-index: 10;
		ul {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			list-style: none;
			li {
				margin: 10px 0px;
				text-align: end;
			}
		}
		a {
			color: getColor(whites, 80);
			@include font-size($menu-font-size);
			font-weight: 600;
		}
	}
</style>
