<script lang="ts">
	// Component imports
	import SimpleButton from '$lib/buttons/simpleButton.svelte';
	import { PageHead } from '$lib/head';
	import FullSection from '$lib/sections/fullSection.svelte';
	import InfiniteBlurbSec from '$lib/sections/infiniteBlurbSec.svelte';
	import PortfolioSection from '$lib/sections/portfolioSection.svelte';
	import ThreeColBlurbs from '$lib/sections/threeColBlurbs.svelte';
	import TwoColSection from '$lib/sections/twoColSection.svelte';

	// Post Imports
	import { LandingPage, SiteName } from '$lib/utils/config';
</script>
<PageHead headItems={{siteTitle: SiteName, siteDescription: LandingPage.fullSection.desc, siteImage: LandingPage.fullSection.background.desktop}}/>
<FullSection sectionData={LandingPage.fullSection} />

<!-- Start Call to action section  -->
<div
	class="cta-section"
	style="background-image :url({LandingPage.ctaSection.background.src});"
>
	<div class="cta-wrapper">
		<div class="col"><h3>{@html LandingPage.ctaSection.title}</h3></div>
		<div class="col"><p>{LandingPage.ctaSection.desc}</p></div>
		<div class="col">
			<SimpleButton
				buttonData={{
					title: LandingPage.ctaSection.action.title,
					href: LandingPage.ctaSection.action.href
				}}
			/>
		</div>
	</div>
</div>
<!-- Start Call to action section  -->
<TwoColSection sectionData={LandingPage.introduction} />

<ThreeColBlurbs sectionData={LandingPage.promises} />

<InfiniteBlurbSec sectionData={LandingPage.services} />

<PortfolioSection sectionData={LandingPage.portfolio} />

<style lang="scss">
	@use '../abstract/mixins.scss' as *;

	.cta-section {
		padding: 90px var(--page-padding);
		background-position: center bottom;
		background-repeat: no-repeat;
	}

	.cta-wrapper {
		display: flex;
		align-items: center;
		.col:nth-child(2) {
			margin: 0px 72px;
		}
		@include dynamicpoint($max: 950px) {
			flex-direction: column;
			text-align: center;
			.col:nth-child(2) {
				margin: 40px 0px;
			}
		}
	}
</style>
