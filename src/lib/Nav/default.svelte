<script lang="ts">
	import MediaQuery from '$lib/mediaQuery.svelte';
	import type { NavElementType } from '$lib/types/postTypes';
	import Menu from './menu.svelte';
	import MenuPanel from './menuPanel.svelte';
	import Secondary from './secondary.svelte';

	export let NavElement: NavElementType;

    export let Yposition: number;
	export let NavHeight: number;
	let adjustToSencondary: number;
	let showPanel = false;
</script>


<Secondary bind:adjustToSencondary secondary={NavElement.secondary} />

<nav
	bind:clientHeight={NavHeight}
	style="top: {Yposition > adjustToSencondary ? '0px' : `${adjustToSencondary - Yposition}px`};"
>
	<div class="primary">
		<div class="logo">
			<a href={NavElement.logo?.href}
				><img src={NavElement.logo?.src} alt={NavElement.logo?.alt} /></a
			>
		</div>
		<Menu bind:showPanel index={NavElement.sitemap} />
	</div>
</nav>
<MediaQuery query="(min-width: 700px)" let:matches>
	{#if !matches}
			<MenuPanel
				bind:showPanel
				bind:NavHeight
				bind:adjustToSencondary
				bind:Yposition
				index={NavElement.sitemap}
			/>
	{/if}
</MediaQuery>

<style lang="scss">
	@use '../../abstract/mixins.scss' as *;
	@use '../../abstract/palettes.scss' as *;

	nav {
		width: 100%;
		position: fixed;
		background: getColor(darkgrays, 80);
		z-index: 10;
	}
	.primary {
		padding: 10px var(--nav-padding);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
