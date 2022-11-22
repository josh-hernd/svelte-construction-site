<script lang="ts">
	import type { LandingPageType } from '$lib/types/postTypes';

	export let sectionData: LandingPageType['portfolio'];
</script>

<div class="portfolio-section">
	<div class="content">
		<span class="subtitle">{sectionData.subtitle}</span>
		<h3>{sectionData.title}</h3>
	</div>
	<div class="portraits">
		<div class="contain">
			{#each sectionData.projects as project}
				<div class="wrapper"><img src={project.src} alt={project.alt} srcset="" /></div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../abstract/mixins.scss' as *;
	@use '../../abstract/palettes.scss' as *;

	.portfolio-section {
		padding: 277px 0px 0px;
		background: getColor(whites, 80);
	}
	.content {
		text-align: center;
		h3 {
			color: getColor(darkgrays, 100);
		}
	}
	.portraits {
        width: 100%;
        padding: 0 var(--page-padding);
        overflow: scroll visible;
        -ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		.contain {
            width: max-content;
			padding: 40px 0px var(--page-padding);
			display: flex;
		}
		.wrapper {
			width: 435px;
			height: auto;
            margin: 0px 15px;
			border-radius: 6px;
            box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
            flex: 0 0 auto;
			overflow: hidden;
            @include dynamicpoint($max: 950px) {
				width: 350px;
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
