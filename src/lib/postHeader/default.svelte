<script lang="ts">
	import type { HeaderPostType } from '$lib/types/postTypes';

	export let currentPost: HeaderPostType;
</script>

<div class="active-post" style="background-image: url({currentPost.background.src});">
    <div class="post-title">
        <p> Home <span>/</span> {currentPost.title}</p>
        <h1>{currentPost.title}</h1>
    </div>
</div>
<style lang="scss">
    @use '../../abstract/palettes.scss' as *;

.active-post {
    padding: 100px var(--page-padding) 180px;
    background-size: cover;
    background-position: center bottom;
}
p{
    font-size: 24px;
    font-weight: 600;
    color: getColor(whites, 80);
    span {
        font-size: 28px;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #{getColor(whites, 80)};
    }
}
</style>