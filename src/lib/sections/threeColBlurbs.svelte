<script lang="ts">
	import type { LandingPageType } from '$lib/types/postTypes';

	export let sectionData: LandingPageType['promises'];
</script>

<div class="blurb-section">
	<div class="blurb-wrapper">
	{#each sectionData as blurb}
		<div class="blurb">
			<div class="icon"><img src={blurb.icon.src} alt={blurb.icon.alt} srcset="" /></div>
			<div class="content">
				<h2>{blurb.title}</h2>
				<p>{blurb.desc}</p>
			</div>
		</div>
	{/each}
</div>
</div>

<style lang="scss">
	@use '../../abstract/mixins.scss' as *;
	@use '../../abstract/palettes.scss' as *;

	$title-font-size: (
		null: 19px,
		small: 22px,
		medium: 24px,
		large: (
			24px,
			29px
		)
	);

	$parag-font-size: (
		null: 17px,
		small: 17px,
		medium: 18px,
		large: (
			18px,
			160%
		)
	);

	.blurb-section {
		width: 100%;
		padding: 40px var(--page-padding);
		margin: calc(-429px / 2) auto;
		overflow: scroll hidden;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		@include dynamicpoint($max: 950px) {
			margin: calc(-306px / 2) auto;
		}
	}
	.blurb-wrapper {
		width: 100%;
		display: flex;
		@include dynamicpoint($max: 950px) {
			width: max-content;
			padding-right: 30px;
		}
	}
	.blurb {
		width: calc(550px - 90px);
		padding: 45px 60px;
		background: getColor(whites, 80);
		display: flex;
		align-items: center;
		border-radius: 6px;
		box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
		@include dynamicpoint($max: 950px) {
			width: calc(450px - 90px);
		}
		.icon {
			margin-right: 30px;
		}
		h2 {
			color: getColor(darkgrays, 100);
			@include font-size($title-font-size);
		}
		p {
			color: getColor(darkgrays, 60);
			@include font-size($parag-font-size);
			text-align: left;
		}
		&:nth-child(2){
			margin: 0px 30px;
		}
	}
</style>
