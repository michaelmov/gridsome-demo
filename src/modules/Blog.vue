<template>
  <section class="blog-area section_gap">
    <div class="container">
      <div class="row align-items-end justify-content-left">
        <div class="col-lg-5">
          <div class="main_title mb-5">
            <h1 class="mb-3">
              Our Stories
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- single-blog -->
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="single-blog">
            <div class="blog-thumb">
              <g-image
                class="img-fluid"
                src="@/assets/img/blog/h-blog1.jpg"
                alt=""
              />
            </div>
            <div class="blog-details">
              <div class="blog-meta">
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-calendar-full" />13th Dec</a>
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-heart" />15</a>
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-bubble" />04</a>
              </div>
              <h5>
                <a href="#">Luxerious Car
                  Rental Service Available</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
        <!-- single-blog -->
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="single-blog">
            <div class="blog-thumb">
              <g-image
                class="img-fluid"
                src="@/assets/img/blog/h-blog2.jpg"
                alt=""
              />
            </div>
            <div class="blog-details">
              <div class="blog-meta">
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-calendar-full" />13th Dec</a>
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-heart" />15</a>
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-bubble" />04</a>
              </div>
              <h5>
                <a href="#">Cruise Private Party
                  Booking Available</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
        <!-- single-blog -->
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="single-blog">
            <div class="blog-thumb">
              <g-image
                class="img-fluid"
                src="@/assets/img/blog/h-blog3.jpg"
                alt=""
              />
            </div>
            <div class="blog-details">
              <div class="blog-meta">
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-calendar-full" />13th Dec</a>
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-heart" />15</a>
                <a
                  href="#"
                  class="m-gap"
                ><span class="lnr lnr-bubble" />04</a>
              </div>
              <h5>
                <a href="#">Tremendous Options
                  for Food Lovers</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'Blog'
}
</script>
<style lang="scss" scoped>
.blog-area {
    margin-top: 100px;
    padding-top: 80px;
    position: relative;
    &:before{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 62%;
        background: $gray-200;
        content: "";
        @media (max-width: 1024px) {
            height: 58.6%;
        }
        @media (max-width: 991px) {
            height: 100%;
        }
    }
}

.single-blog {
    border: 1px solid #eee;
    @include transition();
    @media (max-width: 991px) {
        margin-bottom: 30px;
    }
    .blog-thumb {
        position: relative;
        overflow: hidden;
        img{
            @media (max-width: 575px) {
                width: 100%;
            }
        }
        &:before{
            position: absolute;
            content: "";
            background: rgba(255, 255, 255, 0.4);
            z-index: 999;
            left: 110%;
            top: 0;
            height: 100%;
            width: 130%;
            @include transition(.5s);
        }
    }
    .blog-details {
        padding: 25px;
        .blog-meta {
            margin-top: 15px;
            .m-gap{
                padding-right: 20px;
                color: $gray-900;
                span {
                    padding-right: 10px;
                    text-transform: uppercase;
                    i.fa {
                        padding-right: 10px;
                    }
                }
            }
        }
        h5 {
            font-size: 18px;
            a {
                color: $headings-color;
                font-size: 18px;
                line-height: 27px;
            }
            margin: 15px 0px 15px;
        }
    }
    &:hover {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid transparent;
        .blog-thumb{
            &:before{
                left: -130%;
            }
        }
    }
}
</style>

