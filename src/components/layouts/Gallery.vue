<template>
  <div id="portfolio" class="text-center paddsection">
    <b-container>
      <div class="section-title text-center">
        <h2>Gallery</h2>
      </div>
    </b-container>

    <b-container>
      <b-row>
        <b-col md="12">
          <div class="portfolio-container">
            <carousel
              v-if="showImages"
              :autoplay="true"
              class="text-center"
              :responsive="{
                0: { items: 1 },
                768: { items: 2 },
                900: { items: 4 }
              }"
              :dots="false"
            >
              <a
                v-for="image in imageList"
                :key="image.id"
                :href="image.link"
                style="color: inherit"
                target="_blank"
              >
                <b-card
                  :img-src="image.images.standard_resolution.url"
                  img-alt="Image"
                  img-height="250"
                  img-width="250"
                  img-top
                  class="mx-2"
                  no-body
                >
                  <div>
                    <b-row class="likes-and-comments">
                      <b-col>
                        <v-icon medium class="text-danger">mdi-heart</v-icon>
                        {{ image.likes.count }}
                      </b-col>

                      <b-col>
                        <v-icon medium class="text-danger">mdi-comment-outline</v-icon>
                        {{ image.comments.count }}
                      </b-col>
                    </b-row>
                  </div>
                </b-card>
              </a>
            </carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'Gallery',
  components: {
    carousel
  },
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
