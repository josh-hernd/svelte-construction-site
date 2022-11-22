<script lang="ts">
	import SimpleButton from '$lib/buttons/simpleButton.svelte';
	import type { LandingPageType } from '$lib/types/postTypes';

	export let sectionData: LandingPageType['fullSection'];
</script>

<div class="full-sec">
	<div class="desc-wrapper">
		<div class="content">
			<h1>{@html sectionData.title}</h1>
			<div class="desc"><p>{sectionData.desc}</p></div>
			<SimpleButton buttonData={{ title: sectionData.cta.title, href: sectionData.cta.href }} />
		</div>
	</div>
	<div class="background">
		{#if sectionData.background.mobile != ''}
			<img src={sectionData.background.mobile} alt={sectionData.background.alt} srcset="" />
		{:else}
			<img src={sectionData.background.desktop} alt={sectionData.background.alt} srcset="" />
		{/if}
	</div>
</div>

<style lang="scss">
	@use '../../abstract/mixins.scss' as *;

	.full-sec {
		width: 100%;
		height: 80vh;
		position: relative;
	}
	.desc-wrapper {
		width: 50%;
		height: 100%;
        padding: 0px var(--page-padding);
		display: flex;
		align-items: center;
        @include dynamicpoint($max: 700px){
            width: 100%;
        }
        @include dynamicpoint($max: 950px,$min: 700px){
            width: 100%;
        }
	}
	.desc {
		margin: 40px 0px;
	}
	.background {
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		z-index: -1;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
