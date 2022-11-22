<script lang="ts">
	import '../abstract/app.scss';

	// Content imports
	import { NavElement, FooterElements, ContactSectionData } from '$lib/utils/config';

	// Components imports
	import { Nav } from '$lib/Nav';
	import { ContactSection } from '$lib/contactSection';
	import { Footer } from '$lib/Footer';

	let Yposition: number;
	let NavHeight: number;
</script>

<svelte:window bind:scrollY={Yposition} />

<Nav bind:Yposition bind:NavHeight NavElement={NavElement} />
<div class="adjuster" style="margin-top: {NavHeight}px;">
	<slot />
</div>

<ContactSection contactSection={ContactSectionData}/>

<Footer footerData={FooterElements}/>
