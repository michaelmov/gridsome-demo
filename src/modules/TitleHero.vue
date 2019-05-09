<template>
	<section class="title-hero d-flex align-items-center justify-content-center">
		<g-image class="title-hero__bg" src="@/assets/img/about.jpg" fit="cover" />
        <h1 class="text-white display-3">About Us</h1>
	</section>
</template>

<script>
export default {
    name: 'TitleHero'
}
</script>

<style lang="scss" scoped>
    .title-hero {
        position: relative;
        height: 50vh;
        overflow: hidden;
        margin-top: 80px;

        &__bg {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 70%;
            z-index: -1;
        }
    }
</style>


