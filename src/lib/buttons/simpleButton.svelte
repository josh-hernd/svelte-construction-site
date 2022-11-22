<script lang="ts">
	import type { LandingPageType } from '$lib/types/postTypes';

	export let buttonData: LandingPageType['fullSection']['cta'];
</script>

<div class="cta wobble-hor-bottom"><a href={buttonData.href}>{buttonData.title}</a></div>