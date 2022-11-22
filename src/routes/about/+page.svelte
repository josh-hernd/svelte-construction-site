<script>
	import { PageHead } from '$lib/head';
	import { PostHeader } from '$lib/postHeader';

	import { AboutPost } from '$post/about/index.json';
</script>
<PageHead
	headItems={{
		siteTitle: AboutPost.title,
		siteDescription: AboutPost.introduction.about.title,
		siteImage: AboutPost.background.src
	}}
/>
<PostHeader currentPost={AboutPost} />

<div class="two-col">
	<div class="col-wrapper">
		<div class="col">
			<div class="image-wrapper">
				<img src={AboutPost.introduction.image.src} alt={AboutPost.introduction.image.alt} />
				<div class="visual">{AboutPost.introduction.image.alt}</div>
			</div>
		</div>
		<div class="col">
			<div class="intro">
				<span class="subtitle">{AboutPost.introduction.about.subTitle}</span>
				<h3>{@html AboutPost.introduction.about.title}</h3>
				<div class="body-paragraph">
					<p>{AboutPost.introduction.about.paragraph}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;
	@use '../../abstract/mixins.scss' as *;

	.two-col {
		padding: 65px var(--page-padding);
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
			.col {
				margin: 15px 0px;
			}
		}
	}
	.image-wrapper {
		width: 487px;
		margin: auto;
		position: relative;
		@include dynamicpoint($max: 950px) {
			width: 80%;
		}
		img {
            position: relative;
            width: 100%;
			border-radius: 6px;
			overflow: hidden;
            z-index: 2;
		}
		.visual {
            position: relative;
			width: max-content;
            padding: 10px 60px 20px;
            border-radius: 6px 6px 0px 0px;
			background: var(--accent-color);
            transform: rotate(-90deg) translate(50px, -43px);
            transform-origin: left top;
            z-index: 1;
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
</style>
