<template>
  <section class="package-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-12 d-flex align-items-center">
          <div class="main_title">
            <h1 class="mb-4">
              Best Travel <br>Photos
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
            </p>
            <g-link to="/about">
              <Btn>View Photos</Btn>
            </g-link>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-12">
          <ClientOnly>
            <flickity
              ref="flickity"
              :options="flickityOptions"
            >
              <g-image
                src="@/assets/img/pac2.jpg"
                alt=""
              />
              <g-image
                src="@/assets/img/pac1.jpg"
                alt=""
              />
              <g-image
                src="@/assets/img/pac2.jpg"
                alt=""
              />
              <g-image
                src="@/assets/img/pac1.jpg"
                alt=""
              />
            </flickity>
          </ClientOnly>
          <nav class="flickity-nav">
            <button @click="prevPhoto">
              <g-image src="@/assets/img/cprev.png" />
            </button>
            <button @click="nextPhoto">
              <g-image src="@/assets/img/cnext.png" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '@/components/Btn';

export default {
    name: 'Packages',
    components: {
        Btn,
        Flickity: () => import('vue-flickity')
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,

            // any options from Flickity can be used

            }
        }
    },
    mounted() {

    },

    methods: {
        nextPhoto() {
            this.$refs.flickity.next();
        },
        prevPhoto() {
            this.$refs.flickity.previous();
        }
    }
}
</script>

<style lang="scss">
.package-area{
    margin-top: 180px;
    @media(max-width: 991px) {
        margin-bottom: 50px;
    }
    @media(max-width: 767px) {
        margin-bottom: 125px;
    }
    @media(max-width: 480px) {
        margin-bottom: 80;
    }
    .main_title{
        margin-bottom: 0;
        padding-left: 50%;
        @media(max-width: 1680px) {
            padding-left: 40%;
        }
        @media(max-width: 1440px) {
            padding-left: 30%;
        }
        @media(max-width: 1380px) {
            padding-left: 24%;
        }
        @media(max-width: 1024px) {
            padding-left: 8%;
        }
        @media(max-width: 991px) {
            padding-left: 12%;
            padding-right: 12%;
            margin-bottom: 50px;
        }
        @media(max-width: 570px) {
            padding-left: 0;
            padding-right: 0;
        }
        p{
            padding-bottom: 15px;
        }
        .main_btn{
            margin-top: 20px;
        }
    }

    .flickity-slider {
        img {
            margin-right: 30px;
        }
    }

    .flickity-nav {
        position: absolute;
        transform: rotate(-90deg);
        left: -80px;
        bottom: 50px;

        button {
            background: none;
            border: none;
            @include transition(0.5s);

            &:focus,
            &:active {
                outline: none;
            }

            &:hover {
                opacity: 0.5;
            }
        }
    }

}


</style>

