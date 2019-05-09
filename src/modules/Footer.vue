<template>
  <footer class="footer-area">
    <div class="container">
      <div class="row footer-top">
        <div class="col-lg-3  col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>About Crafted</h6>
            <p>
              The world has become so fast paced that people don’t want to stand by reading a page of information, they would
              much rather look.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>Navigation Links</h6>
            <div class="row">
              <ul class="col footer-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="project.html">Project</a></li>
              </ul>
              <ul class="col footer-nav">
                <li><a href="team-members.html">Team Members</a></li>
                <li><a href="blog-single.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-3  col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>Newsletter</h6>
            <p>For business professionals caught between high OEM price mediocre print and graphic.</p>
            <div
              id="mc_embed_signup"
              class=""
            >
              <form
                target="_blank"
                novalidate="true"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get"
                class="form-inline"
              >
                <div class="d-flex flex-row">
                  <input
                    class="form-control"
                    name="EMAIL"
                    placeholder="Enter Email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Email '"
                    required=""
                    type="email"
                  >


                  <button class="click-btn btn btn-default">
                    <i
                      class="fa fa-paper-plane"
                      aria-hidden="true"
                    />
                  </button>
                  <div style="position: absolute; left: -5000px;">
                    <input
                      name="b_36c4fd991d266f23781ded980_aefe40901a"
                      tabindex="-1"
                      value=""
                      type="text"
                    >
                  </div>
                </div>
                <div class="info" />
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3  col-md-6 col-sm-6">
          <div class="single-footer-widget mail-chimp">
            <h6 class="mb-20">
              Instafeed
            </h6>
            <ul class="instafeed d-flex flex-wrap">
              <li>
                <g-image
                  src="@/assets/img/instagram/i1.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i2.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i3.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i4.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i5.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i6.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i7.jpg"
                  alt=""
                />
              </li>
              <li>
                <g-image
                  src="@/assets/img/instagram/i8.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
      <div class="container">
        <div class="row justify-content-between">
          <div>
            <p class="footer-text m-0">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright ©2019 All rights reserved
            </p>
          </div>
          <div class="footer-social d-flex align-items-center">
            <a href="#"><i class="fa fa-facebook" /></a>
            <a href="#"><i class="fa fa-twitter" /></a>
            <a href="#"><i class="fa fa-dribbble" /></a>
            <a href="#"><i class="fa fa-behance" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
/* =================================== */
/*  Start Footer Area CSS
/* =================================== */
.footer-area {
	min-height: 100%;
	background: #1e1c27;
	margin-top: 150px;
	h6 {
		color: #fff;
		margin-bottom: 25px;
		font-size: 18px;
		font-weight: 600;
	}

	@media (max-width: 991px) {
		.col-lg-3:nth-child(3), .col-lg-3:nth-child(4){
			.single-footer-widget{
				margin-bottom: 0;
			}
		}
	}
	@media (max-width: 570px) {
		.col-lg-3:nth-child(3){
			.single-footer-widget{
				margin-bottom: 40px;
			}
		}
	}
}

.copy-right-text {
	i,
	a {
		color: $yellow;
	}
}

.instafeed {
	margin: 0px -24px;
	padding: 0 15px;
	@media (max-width: 767px) {
		margin: -16px;
	}
	@media (max-width: 575px) {
		margin: 0px;
		padding: 0;
	}
	li {
		overflow: hidden;
		width: 25%;
		img {
			margin: 5px;
		}
	}
}

.footer-social {
	@media (max-width: 575px) {
		margin-top: 15px;
	}
	a {
		padding-left: 25px;
		@media (max-width: 575px) {
			&:first-child {
				padding-left: 0;
			}
		}
		@include transition();
		&:hover {
			i {
				color: $yellow;
			}
		}
	}
	i {
		color: #cccccc;
		@include transition();
	}
	@media (max-width: 991px) {
		text-align: left;
	}
}

.footer-top {
	padding: 120px 0px;
	@media (max-width: 991px) {
		padding: 80px 0px;
	}
}
.single-footer-widget {
	@media (max-width: 991px) {
		margin-bottom: 40px;
	}
	.footer-nav {
		li {
			list-style: none;
			margin-bottom: 12px;
			@media (max-width: 991px) {
				margin-bottom: 3px;
			}
			a {
				color: $body-color;
				&:hover {
					color: #ffffff;
				}
			}
		}
	}
	input {
		border: 1px solid #333333;
		width: 80% !important;
		font-weight: 300;
		background: transparent;
		color: #ffffff;
		padding-left: 20px;
		border-radius: 0;
		font-size: 14px;
		border-right: 0px;
		&:focus {
			box-shadow: none;
			color: #ffffff;
			background: #222222;
		}
	}
	.info {
		position: absolute;
		margin-top: 20%;
		color: #fff;
		font-size: 12px;
		background: transparent;
		&.valid {
			color: green;
		}
		&.error {
			color: red;
		}
	}
	.click-btn {
		background: $yellow;
		border-radius: 0;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		padding: 6px 12px;
		border: 0;
		&:focus {
			box-shadow: none;
		}
		i {
			color: #fff;
		}
	}
	::-moz-selection {
		/* Code for Firefox */
		background-color: #191919 !important;
		color: #999999;
	}
	::selection {
		background-color: #191919 !important;
		color: #999999;
	}
	::-webkit-input-placeholder {
		/* WebKit, Blink, Edge */
		color: #999999;
		font-weight: 300;
	}
	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999999;
		opacity: 1;
		font-weight: 300;
	}
	::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #999999;
		opacity: 1;
		font-weight: 300;
	}
	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #999999;
		font-weight: 300;
	}
	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #999999;
		font-weight: 300;
	}
}
.footer-bottom {
	padding: 26px 0px;
	border-top: 1px solid #333333;
	@media (max-width: 570px) {
		padding: 26px 15px;
	}
	@media (max-width: 380px) {
		text-align: left !important;
	}
}

.footer-text {
	a,
	i {
		color: $yellow;
	}
}
/* =================================== */
/*  End Footer Area CSS
/* =================================== */

</style>


