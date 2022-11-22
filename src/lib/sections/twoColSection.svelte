<script lang="ts">
	import type { LandingPageType } from '$lib/types/postTypes';

	export let sectionData: LandingPageType['introduction'];
</script>

<div class="two-col">
	<div class="col-wrapper">
		<div class="col">
			<div class="image-wrapper">
				<img src={sectionData.image.src} alt={sectionData.image.alt} />
				<div class="large-circ">
					<svg
						width="181"
						height="181"
						viewBox="0 0 181 181"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="90.5" cy="90.5" r="90" fill="#F68B1F" />
					</svg>
				</div>
				<div class="small-circ">
					<svg
						width="96"
						height="96"
						viewBox="0 0 96 96"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="48" cy="48" r="47.5" fill="#27292D" />
					</svg>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="intro">
				<span class="subtitle">{sectionData.about.subTitle}</span>
				<h3>{@html sectionData.about.title}</h3>
				<div class="body-paragraph">
					<p>{sectionData.about.paragraph}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;
	@use '../../abstract/mixins.scss' as *;

	.two-col {
		padding: 65px var(--page-padding) 260px;
		background: getColor(whites, 100);
	}
	.col-wrapper {
		width: 100%;
		display: flex;
		.col {
			flex: 1 0;
            margin: 0px 15px;
		}
        @include dynamicpoint($max: 950px) {
            flex-direction: column-reverse;
            .col{
                margin: 15px 0px;
            }
        }
	}
	.image-wrapper {
		width: 487px;
		height: 487px;
        margin: auto;
        position: relative;
        @include dynamicpoint($max: 950px) {
            width: 100%;
            height: 100%;
        }
		img {
			width: 100%;
			height: 100%;
            position: relative;
			object-fit: cover;
            z-index: 1;
		}
        .large-circ, .small-circ {
            position: absolute;
        }
        .large-circ{
            top: -10px;
			right: 0;
            z-index: 0;
			-webkit-animation: levitate 3s infinite ease-in-out alternate;
			animation: levitate 3s infinite ease-in-out alternate;
        }
        .small-circ {
            top: 50%;
            left: -2%;
            z-index: 2;
			-webkit-animation: levitate 4s infinite ease-in-out alternate-reverse;
			animation: levitate 4s infinite ease-in-out alternate-reverse;
        }
	}
	.intro {
		h3 {
			color: getColor(darkgrays, 100);
		}
		.body-paragraph {
			margin: 40px 0px;
            text-align: justify;
			p {
				color: getColor(darkgrays, 60);
			}
		}
	}

	
	@-webkit-keyframes levitate{
		0%{
			-webkit-transform: translateY(0px);
			        transform: translateY(0px);
		}
		100%{
			-webkit-transform: translateY(40px);
			        transform: translateY(40px);
		}
	}
@keyframes levitate{
		0%{
			-webkit-transform: translateY(0px);
			        transform: translateY(0px);
		}
		100%{
			-webkit-transform: translateY(40px);
			        transform: translateY(40px);
		}
	}
</style>
