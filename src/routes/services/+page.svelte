<script>
	import { PageHead } from '$lib/head';
	import { PostHeader } from '$lib/postHeader';
	import InfiniteBlurbSec from '$lib/sections/infiniteBlurbSec.svelte';

	// Post Imports
	import { ServicePost, LandingPage } from '$lib/utils/config';
</script>
<PageHead headItems={{siteTitle: ServicePost.title, siteDescription: LandingPage.fullSection.desc, siteImage: ServicePost.background.src}}/>
<PostHeader currentPost={ServicePost} />
<InfiniteBlurbSec sectionData={LandingPage.services} />
<div class="spacer" />

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;

	.spacer {
		width: 100%;
		height: 300px;
		background: getColor(whites, 80);
	}
</style>
