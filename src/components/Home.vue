<template>
  <div v-if="loading" class="vh-100 align-items-center d-flex justify-content-center">
    <breeding-rhombus-spinner
      :animation-duration="2000"
      :size="100"
      color="#b8a07e"
    />
  </div>
  <div v-else>
    <nav-bar />

    <Header />

    <About />

    <Gallery />

    <Blogs />

    <Contact />

    <Footer />
  </div>
</template>

<script>
import NavBar from './layouts/NavBar'
import Header from './layouts/Header'
import About from './layouts/About'
import Gallery from './layouts/Gallery'
import Blogs from './layouts/Blogs'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'
import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
  name: 'Home',
  components: {
    BreedingRhombusSpinner,
    NavBar,
    Header,
    About,
    Gallery,
    Blogs,
    Contact,
    Footer
  },
  data: () => ({
    loading: true,
  }),
  mounted() {
    this.loader()
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false
      }, 4000)
    }
  }
}
</script>
