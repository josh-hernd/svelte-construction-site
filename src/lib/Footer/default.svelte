<script lang="ts">
	import type { FooterElementsType } from '$lib/types/postTypes';

    import { page } from '$app/stores';
	import SimpleButton from '$lib/buttons/simpleButton.svelte';

	export let footerData: FooterElementsType;
    let theYear = new Date().getFullYear()
</script>

<footer style="background-image: url({footerData.background});">
	<div class="wrapper">
		<div class="col">
			<h2>{footerData.label}</h2>
			<p>{footerData.paragraph}</p>
            <SimpleButton buttonData={footerData.cta}/>
		</div>
		<div class="col">
			<h2>{footerData.links.label}</h2>
			{#each footerData.links.sitemap as item}
				<ul>
					<li><a href={item.href}>{item.title}</a></li>
				</ul>
			{/each}
		</div>
		<div class="col">
			<h2>{footerData.htrs.label}</h2>
			{#each footerData.htrs.cta as blurb}
				<div class="md-blurb">
					<div class="icon">
						<a
							href={blurb.href}
							target={blurb.target ? '_blank' : '_self'}
							rel="noopener noreferrer"
						>
							<iconify-icon
								icon={blurb.icon}
								style="color: var(--accent-color);"
								width="35"
								height="35"
							/>
						</a>
					</div>
					<a href={blurb.href} target={blurb.target ? '_blank' : '_self'} rel="noopener noreferrer"
						><h2>{blurb.title}</h2></a
					>
				</div>
			{/each}
		</div>
	</div>
    <div class="copyrights">
        <p>© All Copyright {theYear} | {$page.url.hostname}</p>
    </div>
</footer>

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;
	@use '../../abstract/mixins.scss' as *;
	$blurb-font-size: (
		null: 13px,
		small: 15px,
		medium: 16px,
		large: 17px
	);
    $link-font-size: (
		null: 17px,
		small: 18px,
		medium: 19px,
		large: 20px
	);
    ul {
        list-style: none;
        li {
            margin: 7.5px 0;
        a {
            color: getColor(whites, 80);
			@include font-size($link-font-size);
        }}
    }
	footer {
		padding: 100px 0px 0px;
        background-size: cover;
        background-position: right bottom;
        @include dynamicpoint($max: 950px) {
            padding-top: 40px;
        }
	}
	.wrapper {
		display: flex;
        padding: 0 var(--page-padding) 40px;
		.col {
			flex: 2 0 calc((100% - var(--page-padding)) / 3);
			margin: 0 15px;
            h2 {
                margin-bottom: 10px;
            }
            p{
                text-align: justify;
                margin-bottom: 20px;
            }
            &:nth-child(2) {
                padding-left: 10%;
            }
		}
		@include dynamicpoint($max: 950px) {
			flex-wrap: wrap;
			.col {
                margin: 15px 0px;
				flex-basis: calc((100% - var(--page-padding)));
                &:nth-child(2) {
                padding-left: 0%;
            }
			}
		}
	}
	.md-blurb {
		display: flex;
		align-items: center;
		margin: 7.5px auto;
		.icon {
			padding: 5px;
			margin-right: 10px;
			background: getColor(darkgrays, 80);
			border-radius: 6px;
			box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
		}
		h2 {
			color: getColor(whites, 80);
			@include font-size($blurb-font-size);
		}
	}

    .copyrights {
        padding: 29px var(--page-padding);
        background: getColor(darkgrays, 100);
    }
</style>
