<template>
  <button class="main_btn">
    <slot />
    <g-image
      src="@/assets/img/next.png"
      alt=""
    />
  </button>
</template>

<script>
export default {
    name: 'Btn'
}
</script>

<style lang="scss" scoped>
.main_btn {
	padding: 0px 25px;
	background: transparent;
	display: inline-block;
	text-align: center;
	color: $gray-900;
	font-size: 12px;
	font-weight: 500;
	line-height: 48px;
	border: 1px solid $yellow;
	border-radius: 0px;
	text-transform: uppercase;
	letter-spacing: 2px;
    position: relative;
    transition: all 0.35s ease-in-out;
	cursor: pointer;
	img {
		position: absolute;
		top: 50%;
		right: -30px;
		transform: translateY(-50%);
		transition: all 0.35s ease-in-out;
	}
	&:hover {
		background: $yellow;
		color: $gray-900;
        border: 1px solid $yellow;
        text-decoration: none;
		img {
			right: -38px;
		}
	}
}
</style>


