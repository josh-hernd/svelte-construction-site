<script lang="ts">
	import type { LandingPageType } from '$lib/types/postTypes';

	export let buttonData: LandingPageType['fullSection']['cta'];
</script>

<div class="cta"><a href={buttonData.href}>{buttonData.title}</a></div>