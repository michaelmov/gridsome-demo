<template>
  <section class="hero">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex flex-wrap align-items-center justify-content-center">
          <div class="headings">
            <h1>Travel<br> the World</h1>
            <p class="pt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quia dignissimos voluptatibus ut magni autem, voluptas ullam pariatur, esse repudiandae corporis eaque fugiat ratione voluptatum id aliquid. Dolores, rem eveniet!
            </p>
            <Btn class="mt-4">
              Get Started
            </Btn>
          </div>
        </div>
        <div class="col-12 col-lg-6 pr-0">
          <g-image
            class="w-100"
            src="@/assets/img/banner/banner-img.jpg"
          />
          <div class="video-popup d-flex align-items-center">
            <a
              class="play-video video-play-button animate"
              href="https://www.youtube.com/watch?v=ayjNhTnlwhU"
              data-animate="zoomIn"
              data-duration="1.5s"
              data-delay="0.1s"
            >
              <span />
            </a>
            <div class="watch">
              <h5>Watch Intro Video</h5>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Btn from '@/components/Btn';

export default {
    name: 'Hero',
    components: {
        Btn
    }
}
</script>

<style lang="scss" scoped>
.hero {

    .headings {
      padding-left: 25%;
      max-width: 70%;
    }

    .video-popup{
        position: absolute;
        bottom: 110px;
        left: -15px;
        @media(max-width: 991px) {
            bottom: 60px;
        }
        .watch{
            color: $white;
            padding-left: 50px;
            h5{
                font-size: 18px;
                color: $white;
            }
            p{
                text-transform: uppercase;
                font-size: 12px;
                margin: 0;
            }
        }
    }
    .video-play-button {
    position: relative;
    box-sizing: content-box;
    display: inline-block;
    width: 32px;
    height: 44px;
    border-radius: 50%;
    padding: 30px 8px 18px 28px;
    @media(max-width: 991px) {
        padding: 40px 8px 18px 28px;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      @include transform(translate(-50%, -50%));
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
        @media(max-width: 991px) {
            width: 70px;
            height: 70px;
        }
    }
    &:before {
      z-index: 0;
      @include animation(pulse-border 2000ms ease-out infinite);
      background: $white;
    }
    &:after {
      z-index: 1;
      @include transition(all 200ms ease);
      box-shadow: 0px 10px 30px rgba(39, 0, 110, 0.3);
      background: $primary;
    }
    span {
        display: block;
        position: relative;
        z-index: 3;
        width: 0;
        height: 0;
        border-left: 20px solid $white;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        @media(max-width: 991px) {
            border-left: 15px solid $white;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
        }
    }
    &:hover {
      &:after {
        background-color: darken($primary, 8%);
      }
    }
  }

  @include keyframes(pulse-border) {
    0% {
      @include transform(translate(-50%, -50%) translateZ(0) scale(1));
      opacity: 0.7;
    }
    50% {
      @include transform(translate(-50%, -50%) translateZ(0) scale(1.2));
      opacity: 1;
    }
    100% {
      @include transform(translate(-50%, -50%) translateZ(0) scale(1));
      opacity: 1;
    }
  }

  }
</style>


