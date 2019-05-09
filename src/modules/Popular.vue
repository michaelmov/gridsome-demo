<template>
  <section class="popular-place-area">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-5 offset-lg-1">
          <div class="left-content">
            <g-image
              class="img1 img-fluid"
              src="@/assets/img/popular/img1.jpg"
              alt=""
            />
            <g-image
              class="img2 img-fluid"
              src="@/assets/img/popular/img2.jpg"
              alt=""
            />
            <g-image
              class="img3 img-fluid"
              src="@/assets/img/popular/img3.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="right-content">
            <div class="main_title">
              <h1>Popular <br>Places Around <br>The World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div class="counter_area">
              <div class="top-two">
                <!-- single counter -->
                <div class="single_counter">
                  <div class="thumb">
                    <g-image
                      src="@/assets/img/popular/icon1.png"
                      alt=""
                    />
                  </div>
                  <div class="info-content">
                    <h4>London</h4>
                    <p>135 Places</p>
                  </div>
                </div>
                <!-- single counter -->
                <div class="single_counter">
                  <div class="thumb">
                    <g-image
                      src="@/assets/img/popular/icon2.png"
                      alt=""
                    />
                  </div>
                  <div class="info-content">
                    <h4>Turkey</h4>
                    <p>75 Places</p>
                  </div>
                </div>
              </div>

              <div class="bottom-two">
                <!-- single counter -->
                <div class="single_counter">
                  <div class="thumb">
                    <g-image
                      src="@/assets/img/popular/icon3.png"
                      alt=""
                    />
                  </div>
                  <div class="info-content">
                    <h4>Paris</h4>
                    <p>150 Places</p>
                  </div>
                </div>
                <!-- single counter -->
                <div class="single_counter">
                  <div class="thumb">
                    <g-image
                      src="@/assets/img/popular/icon4.png"
                      alt=""
                    />
                  </div>
                  <div class="info-content">
                    <h4>Thailand</h4>
                    <p>85 Places</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'Popular'
}
</script>

<style lang="scss" scoped>
.popular-place-area{
    margin-bottom: 20px;
    margin-top: 180px;
    @media (max-width: 1024px) {
        margin-bottom: 0;
    }
    .left-content{
        position: relative;
        @media (max-width: 1024px) {
            img{
                max-width: 80%;
            }
            .img2{
                max-width: 50%;
                top: 5%!important;
            }
            .img3{
                right: 70%!important;
                max-width: 50%;
            }
        }
        @media (max-width: 991px) {
            display: none;
        }
        .img2{
            position: absolute;
            left: 50%;
            top: 2%;
        }
        .img3{
            position: absolute;
            right: 30%;
            bottom: -10%;
        }
    }
    .right-content{
        .main_title{
            padding-right: 30px;
        }
    }
}

.counter_area {
    @media(max-width: 615px) {
        text-align: center;
    }
    .top-two{
        margin-bottom: 30px;
        @media(max-width: 991px) {
            display: inline;
        }
    }
    .bottom-two{
        @media(max-width: 991px) {
            display: inline;
        }
    }
    .single_counter{
        text-align: center;
        padding: 30px;
        border: 1px solid #eeeeee;
        display: inline-block;
        height: 180px;
        width: 165px;
        margin-right: 30px;
        @include transition();
        @media(max-width: 1024px) {
            width: 150px;
        }
        @media(max-width: 991px) {
            height: 150px;
            width: 138px;
            padding: 15px;
            &:last-child{
                margin-top: 30px;
            }
        }
        @media(max-width: 767px) {
            margin-right: 25px;
        }
        @media(max-width:400px) {
            width: 100%;
            margin-right: 0;
            &:nth-child(2){
                margin-bottom: 30px;
            }
        }
        .thumb{
            margin-bottom: 20px;
            img{
                @include transition();
            }
        }
        .info-content{
            h4{
                font-size: 24px;
                font-weight: 700;
                font-family: $headings-font-family;
                margin-bottom: 10px;
            }
        }
        &:hover{
            background: $primary;
            color: #fff;
            border: 1px solid transparent;
            .thumb{
                img{
                    @include filter(brightness(0) invert(1));
                }
            }
            .info-content{
                h4{
                    color: #fff;
                }
            }
        }
    }
}

</style>

