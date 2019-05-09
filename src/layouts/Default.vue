<template>
  <div class="layout">
    <Navbar
      :side-nav-is-open="sideNavIsOpen" 
      @toggle-side-nav="toggleSideNav"
    />
    <SideNav :side-nav-is-open="sideNavIsOpen" />
    <slot />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/modules/Footer';
export default {
  name: 'Default',
  components: {
    Navbar,
    SideNav,
    Footer,
  },
  data() {
    return {
      sideNavIsOpen: false
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNavIsOpen = !this.sideNavIsOpen;
    }
  }
}
</script>




