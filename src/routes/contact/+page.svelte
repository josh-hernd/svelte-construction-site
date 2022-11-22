<script lang="ts">
	import { PageHead } from '$lib/head';
	import { LandingPage } from '$lib/utils/config';

	let pageTitle = 'Contact';
</script>

<PageHead
	headItems={{
		siteTitle: pageTitle,
		siteDescription: LandingPage.fullSection.desc,
		siteImage: LandingPage.fullSection.background.desktop
	}}
/>
