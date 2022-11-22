<script lang="ts">
	import type { HeadItemsType } from '$lib/types/postTypes';
	import { page } from '$app/stores';

	import { SiteName } from '$lib/utils/config';
	export let headItems: HeadItemsType;
	let siteUrl = $page.url.hostname;
</script>

<svelte:head>
	<title>{headItems.siteTitle}</title>

	<meta content={headItems.siteDescription} name="description" />

	<meta content={headItems.siteTitle} property="og:title" />
	<meta content={headItems.siteImage} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={headItems.siteDescription} property="og:description" />
	<meta content={SiteName} property="og:site_name" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={headItems.siteTitle} name="twitter:title" />
	<meta content={headItems.siteDescription} name="twitter:description" />
	<meta content={headItems.siteImage} name="twitter:image" />
</svelte:head>
