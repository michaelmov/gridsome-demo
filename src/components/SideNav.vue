<template>
  <div :class="['side_menu', {'open': sideNavIsOpen }]">
    <div class="logo">
      <g-link to="/">
        <g-image
          src="@/assets/img/logo.png"
          alt=""
        />
      </g-link>
    </div>
    <ul class="list menu-left">
      <li>
        <g-link to="/">
          Home
        </g-link>
      </li>
      <li>
        <g-link to="/about">
          About
        </g-link>
      </li>
      <li>
        <g-link to="/contact">
          Contact
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'SideNav',
    props: {
        sideNavIsOpen: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
<style lang="scss" scoped>
.side_menu {
	position: fixed;
	left: -500px;
	top: 0px;
    width: 100%;
    height: 100vh;
	background: #fff;
	max-width: 500px;
    padding: 130px 115px;
    z-index: 11;


    &.open {
        left: 0px;
    }

	@media (max-width: 575px) {
		max-width: 300px;
		padding: 20px 15px;
	}
	z-index: 9;
	box-shadow: 0px 20px 50px rgba(70, 129, 255, 0.1);
    @include transition();

    .list {
        list-style: none;
        padding: 0;
    }
	.logo {
		margin-bottom: 100px;
		@media (max-width: 991px) {
			margin-bottom: 30px;
		}
	}
	.menu-left {
		max-height: 420px;
		@media (max-width: 1440px) {
			margin-top: 20px;
		}
		li {
			margin-bottom: 25px;
			@media (max-width: 1440px) {
				margin-bottom: 15px;
			}
			&:last-child {
				margin-bottom: 0px;
			}
			a,
			.dropdown-toggle {
				cursor: pointer;
				font-size: 18px;
				font-weight: 500;
				color: $headings-color;
				@include transition();
				&:hover {
					color: $primary;
				}
			}
			.dropdown-toggle {
				background: transparent;
				border: 0;
				padding: 0;
				&:focus {
					outline: none;
				}
				&:after {
					content: none;
				}
			}
			.dropdown-menu {
				top: -36px !important;
				left: 110px !important;
				border: 0;
				background: $primary;
				border-radius: 0px;
				a {
					color: #fff;
					font-size: 14px;
				}
				&.show {
					&:after {
						content: "\f178";
						font: normal normal normal 14px/1 FontAwesome;
						position: absolute;
						top: 18px;
						left: -22%;
						color: #000;
						@include transform(scaleX(3));
					}
				}
				.dropdown-item {
					background: transparent;
					&:hover {
						opacity: 0.7;
					}
				}
			}
		}
	}
}
</style>


