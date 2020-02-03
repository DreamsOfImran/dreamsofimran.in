<template>
  <b-navbar v-show="showNavBar" id="main-nav" toggleable="lg" fixed="top">
    <b-container class="py-0">
      <b-navbar-brand href="#" class="logo" style="font-family: 'Satisfy', cursive;">
        Dreams of Imran
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-scroll-to="'#header'">
            Home
          </b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#about'">
            About
          </b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#portfolio'">
            Gallery
          </b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#journal'">
            Blogs
          </b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#contact'">
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    showNavBar: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if(currentScrollPosition > 300) {
        this.showNavBar = true
      } else {
        this.showNavBar = false
      }
    },
  }
}

</script>
