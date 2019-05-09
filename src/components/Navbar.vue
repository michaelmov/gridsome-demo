<template>
  <nav class="navbar d-flex align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <div
        :class="['toggle_icon', {'open': sideNavIsOpen}]"
        title="Menu Bar"
        @click="toggleSideNav"
      >
        <span />
      </div>
      <Btn>Lorem Ipsum</Btn>
    </div>
  </nav>
</template>

<script>
import Btn from '@/components/Btn';

export default {
    name: 'Navbar',
    components: {
        Btn
    },
    props: {
        sideNavIsOpen: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        toggleSideNav() {
            this.$emit('toggle-side-nav');
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        overflow: hidden;
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 10;
        min-height: 80px;
        width: 100%;
        background-color: $white;
        .toggle_icon {
            cursor: pointer;
            position: relative;
            height: 20px;
            width: 30px;
            left: 0;
            z-index: 99;
            display: inline-block;
            background: $white;
            @include transition();
            span {
                height: 2px;
                width: 30px;
                display: block;
                background: $gray-900;
                cursor: pointer;
                transition: all 0.35s ease-in-out;
                &:before {
                    content: "";
                    height: 2px;
                    width: 25px;
                    display: block;
                    background: $gray-900;
                    left: 0px;
                    top: 20px;
                    position: absolute;
                    transition: all 0.35s ease-in-out;
                }
                &:after {
                    content: "";
                    height: 2px;
                    width: 20px;
                    display: block;
                    background: $gray-900;
                    left: 0px;
                    bottom: 8px;
                    position: absolute;
                    transition: all 0.35s ease-in-out;
                }
            }

            &.open {
			left: 3%;
			@media (max-width: 1440px) {
				left: 240px;
			}
			@media (max-width: 575px) {
				left: 240px;
			}
			span {
				background: transparent !important;
				&:before {
					width: 25px;
					@include transform(rotate(45deg));
					top: 9px;
					left: 3px;
					@include transition(all 0.5s ease-in-out);
				}
				&:after {
					width: 25px;
					@include transform(rotate(-45deg));
					left: 3px;
					top: 9px;
					@include transition(all 0.5s ease-in-out);
				}
			}
		}
        }
    }
</style>

