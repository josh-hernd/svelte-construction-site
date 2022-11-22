<script lang="ts">
	import '../abstract/app.scss';

	import { page } from '$app/stores';

	// Components imports
	import { Nav } from '$lib/Nav';
	import { ContactSection } from '$lib/contactSection';
	import { Footer } from '$lib/Footer';
	import PageSlot from '$lib/pageTransition/pageSlot.svelte';

	// Content imports
	import { NavElement, FooterElements, ContactSectionData } from '$lib/utils/config';

	let Yposition: number;
	let NavHeight: number;
</script>

<svelte:window bind:scrollY={Yposition} />
<Nav bind:Yposition bind:NavHeight {NavElement} />
<PageSlot {NavHeight} url={$page.url.pathname}>
	<div class="adjuster" style="margin-top: {NavHeight}px;">
		<slot />
	</div>
</PageSlot>
<ContactSection contactSection={ContactSectionData} />

<Footer footerData={FooterElements} />
