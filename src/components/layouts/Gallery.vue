<template>
  <div id="portfolio" class="text-center paddsection">
    <b-container>
      <div class="section-title text-center">
        <h2>Gallery</h2>
      </div>
    </b-container>

    <carousel-3d v-if="showImages" :width="350" :height="300" :display="7" :autoplay="true" :autoplay-hover-pause="false" :border="0">
      <slide v-for="(image, i) in imageList" :key="i" :index="i">
        <a :href="image.link" target="_blank">
          <v-img :src="image.images.standard_resolution.url" :lazy-src="image.images.thumbnail.url" class="insta-img" />
        </a>
        <figcaption>
          <b-row class="text-center">
            <b-col>
              <v-icon medium class="text-danger">
                mdi-heart
              </v-icon>
              {{ image.likes.count }}
            </b-col>

            <b-col>
              <v-icon medium class="text-danger">
                mdi-comment-outline
              </v-icon>
              {{ image.comments.count }}
            </b-col>
          </b-row>
        </figcaption>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data: () => ({
    imageList: [],
    showImages: false
  }),
  mounted() {
    this.fetchInstaImages()
  },
  methods: {
    fetchInstaImages() {
      this.$http
        .get(
          `https://api.instagram.com/v1/users/self/media/recent?access_token=${process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN}&count=50`
        )
        .then(response => {
          this.imageList = response.data.data
          this.showImages = true
          // this.loading = false
        })
        .catch(e => {
          this.imageList = nil
        })
    },
  }
}
</script>
