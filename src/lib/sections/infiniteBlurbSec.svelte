<script lang="ts">
	import type { LandingPageType } from '$lib/types/postTypes';

	export let sectionData: LandingPageType['services'];
</script>

<div class="infinite">
	<div class="content" style="background-image: url({sectionData.background});">
		<span class="subtitle">{sectionData.subtitle}</span>
		<h3>{sectionData.title}</h3>
	</div>
	<div class="blurbs-wrapper">
		<div class="blurbs">
			{#each sectionData.list as blurb}
				<div class="blurb">
					<div class="blurb-img"><img src={blurb.img.src} alt={blurb.title} srcset="" /></div>
					<div class="blurb-content">
						<h2>{blurb.title}</h2>
						<p>{blurb.desc}</p>
					</div>
				</div>
			{/each}
		</div>
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
    
	.content {
		padding: calc(450px / 2) var(--page-padding) 394px;
		text-align: center;
		@include dynamicpoint($max: 950px) {
			padding: calc(320px / 2) var(--page-padding) 324px;
		}
	}
	.blurbs-wrapper {
		width: 100%;
		padding: 40px var(--page-padding);
		margin: -374px auto -260.98px;
		overflow: scroll visible;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		@include dynamicpoint($max: 950px) {
			margin: -304px auto -237px;
		}
	}
	.blurbs {
		width: max-content;
		display: flex;
		padding-right: var(--page-padding);
		.blurb {
			width: 420px;
			margin: 0px 15px;
			background: getColor(whites, 80);
			box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
			border-radius: 6px;
			overflow: hidden;
			@include dynamicpoint($max: 950px) {
				width: 350px;
			}
			.blurb-img {
				width: 420px;
				height: 334px;
				@include dynamicpoint($max: 950px) {
					width: 350px;
					height: 264px;
				}
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			.blurb-content {
				padding: 24px 40px;
				text-align: center;
				h2 {
					color: getColor(darkgrays, 100);
					@include font-size($title-font-size);
				}
				p {
					color: getColor(darkgrays, 60);
					@include font-size($parag-font-size);
					text-align: justify;
				}
			}
		}
	}
</style>
