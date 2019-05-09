<template>
  <Layout>
    <div class="home">
      <Hero />
      <Popular />
      <Packages />
      <Blog />
    </div>
  </Layout>
</template>

<script>
import Hero from '@/modules/Hero';
import Popular from '@/modules/Popular';
import Packages from '@/modules/Packages';
import Blog from '@/modules/Blog';

export default {
  metaInfo: {
    title: 'Home Page'
  },
  components: {
    Hero,
    Popular,
    Packages,
    Blog,
  }

}
</script>

<style lang="scss" scoped>

  .home {
    margin-top: 90px;
  }

</style>

