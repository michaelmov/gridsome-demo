<template>
  <Layout>
    <TitleHero />
    <section class="about-bio mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque placeat eos nihil explicabo necessitatibus molestias temporibus quidem ipsam, illo dolorum et, autem quo animi recusandae, atque nemo quas perferendis? Accusantium.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import TitleHero from '@/modules/TitleHero'
export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    TitleHero,
  }
}
</script>
