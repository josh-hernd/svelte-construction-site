<script lang="ts">
	import type { NavElementType } from '$lib/types/postTypes';

	import {fly} from 'svelte/transition';
;
	export let secondary: NavElementType['secondary'];
    export let adjustToSencondary
	let iconFontSize = 19
	
</script>

<div class="secondary" in:fly={{y: 100}} out:fly={{y: -100}} bind:clientHeight={adjustToSencondary}>
	<div class="container">
		<div class="sm">
			<a href={secondary?.media?.facebook.href} target="_blank" rel="noopener noreferrer">
				<iconify-icon
					icon="iconoir:facebook-squared"
					style="color: var(--sm-icons);"
                    width="{iconFontSize}"
                    height="{iconFontSize}"
				/>
			</a>
			<a href={secondary?.media?.instagram.href} target="_blank" rel="noopener noreferrer">
				<iconify-icon
					icon="iconoir:instagram"
					style="color: var(--sm-icons);"
                    width="{iconFontSize}"
                    height="{iconFontSize}"
				/>
			</a>
		</div>
		<div class="welcome">
			<span
				>{secondary?.message?.text}
				<a href={secondary?.message?.cta.href}>{secondary?.message?.cta.text}</a>
			</span>
		</div>
	</div>
	<div class="htr">
		<div class="sl-blurb">
			<iconify-icon
				icon="ic:baseline-email"
				style="color: var(--accent-color);"
                width="{iconFontSize}"
                height="{iconFontSize}"
			/>
			<a href="mailto:{secondary?.htr?.email}">{secondary?.htr?.email}</a>
		</div>
		<div class="sl-blurb">
			<iconify-icon
				icon="material-symbols:location-on-rounded"
				style="color: var(--accent-color);"
                width="{iconFontSize}"
                height="{iconFontSize}"
			/>
			<a
				href={secondary?.htr?.address.href}
				target={secondary?.htr?.address.target ? '_blank' : '_self'}
				>{secondary?.htr?.address.title}</a
			>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../abstract/mixins.scss' as *;
	@use '../../abstract/palettes.scss' as *;
    $span-font-size: (
		null: 13px,
		small: 15px,
		medium: 16px,
		large: 17px
	);
	.secondary,
	.container,
	.secondary .htr {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.secondary {
		padding: 0px var(--nav-padding);
		background: getColor(darkgrays, 100);
		@include dynamicpoint($max: 780px) {
			flex-direction: column;
		}
	}
	.container {
		.sm {
			padding: 6.25px 13.4px;
            margin-right: 10px;
			display: flex;
			background: getColor(darkgrays, 60);
            a {
                margin: auto 5px;
            }
		}
	}
	.container,
	.htr {
		@include dynamicpoint($max: 780px) {
			width: 100%;
			display: inline-flex;
			justify-content: space-between;
		}
	}
	span,
	span a,
	.sl-blurb a {
		@include font-size($span-font-size);
		font-weight: 600;
		a {
			color: var(--accent-color);
		}
	}

	.htr {
		margin-left: auto;
        @include dynamicpoint($max: 780px) {
            margin: 10px auto
        }
	}
	.sl-blurb {
		margin: 0 5px;
		display: flex;
		align-items: center;
		a {
			color: getColor(whites, 100);
            margin-left: 5px;
		}
	}
</style>
