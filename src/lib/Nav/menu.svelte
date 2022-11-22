<script lang="ts">
	import MediaQuery from '$lib/mediaQuery.svelte';
	import type { NavElementType } from '$lib/types/postTypes';

	export let index: NavElementType['sitemap'];
    export let showPanel: boolean;
    export let burgerSize = 34	
</script>

<MediaQuery query="(min-width: 700px)" let:matches>
	{#if matches}
		<div class="menu">
			<ul>
				{#each index as item}
					<li><a href={item.href}>{item.title}</a></li>
				{/each}
			</ul>
		</div>
	{:else}
		<div class="mobile-menu">
			<button on:click={() => showPanel = ! showPanel}>
				<iconify-icon
					inline
					icon="material-symbols:notes-rounded"
					style="color: var(--burger-color); -webkit-user-select: none; -ms-user-select: none; user-select: none;"
					width="{burgerSize}"
					height="{burgerSize}"
				/>
			</button>
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;
	@use '../../abstract/mixins.scss' as *;
	$menu-font-size: (
		null: 17px,
		small: 18px,
		medium: 19px,
		large: 20px
	);
	.menu {
		width: max-content;
	}
	.mobile-menu {
		--burger-color: #{getColor(whites, 80)};
	}
	ul {
		display: flex;
		flex-direction: row;
		float: right;
		list-style: none;
		li a {
			@include font-size($menu-font-size);
			font-weight: 600;
			color: getColor(whites, 80);
			margin: auto 10px;
		}
	}
    button {
        background: none;
        box-shadow: none;
        border: 0;
        cursor: pointer;
    }
</style>
