<script lang="ts">
	import type { ContactSectionDataType } from '$lib/types/postTypes';
	import Form from './form.svelte';

	export let contactSection: ContactSectionDataType;
</script>

<div class="contact-section">
	<div class="wrapper">
		<div class="col">
			<div class="content">
				<span class="subtitle">{contactSection.subtitle}</span>
				<h3>{@html contactSection.title}</h3>
				<div class="body-paragraph">
					<p>{contactSection.desc}</p>
				</div>
			</div>
			<div class="htr">
				{#each contactSection.blurbs as blurb}
					<div class="md-blurb">
						<div class="icon">
							<a href="{blurb.href}" target="{blurb.target ? '_blank' : '_self'}" rel="noopener noreferrer">
								<iconify-icon
									icon="{blurb.icon}"
									style="color: var(--accent-color);"
									width="35"
									height="35"
								/>
							</a>
						</div>
						<a href="{blurb.href}" target="{blurb.target ? '_blank' : '_self'}" rel="noopener noreferrer"><h2>{blurb.title}</h2></a>
					</div>
				{/each}
			</div>
		</div>
		<div class="col">
			<Form contactForm={contactSection.buildForm}/>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../abstract/mixins.scss' as *;
	@use '../../abstract/palettes.scss' as *;

    $blurb-font-size: (
		null: 13px,
		small: 15px,
		medium: 16px,
		large: 17px
	);
	.contact-section {
		padding: 40px var(--page-padding);
		background: getColor(whites, 80);
	}
	.wrapper {
		display: flex;
        .col {
            width: calc(50% - 34.5px);
            margin: 0px 34.5px;
        }
        @include dynamicpoint($max: 950px) {
            flex-direction: column;
            .col {
            width: 100%;
            margin: 34.5px auto;
        }
        }

	}
	.content {
		text-align: left;
		h3 {
			color: getColor(darkgrays, 100);
		}
	}
	.body-paragraph {
		margin: 40px 0px;
		text-align: justify;
		p {
			color: getColor(darkgrays, 60);
		}
	}
    .md-blurb {
        display: flex;
        align-items: center;
        margin: 7.5px auto;
        .icon {
            padding: 5px;
            margin-right: 10px;
            background: getColor(whites, 80);
            border-radius: 6px;
            box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: getColor(darkgrays, 60);
            @include font-size($blurb-font-size)
        }
    }
</style>
