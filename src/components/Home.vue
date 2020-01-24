<template>
  <div>
    <div>
      <NavBar />
    </div>
    <!-- <div class="vh-100 text-white bg-img" style="background-image: url(img/6.jpg)">
      <b-container class="my-auto text-center">
        <b-row align-v="center" class="vh-100">
          <b-col class="display-1">
            I am Imran Basha
            <br>
            <span class="display-4">Developer</span>
          </b-col>
        </b-row>
      </b-container>
    </div> -->
    <div id="header" class="home">
      <b-container>
        <vue-typed-js :strings="['Developer', 'Designer', 'Freelancer', 'Photographer']" :loop="true" :smartBackspace="true" :backSpeed="40" :showCursor="true">
          <div class="header-content">
            <h1>Imran Basha</h1>
            <p><span class="typing"></span></p>
          </div>
        </vue-typed-js>
      </b-container>
    </div>

    <div id="about" class="paddsection">
      <b-container>
        <b-row class="justify-content-between">
          <b-col lg="4">
            <div class="div-img-bg">
              <div class="about-img">
                <b-img src="img/5.jpg" class="img-responsive" alt="me" />
              </div>
            </div>
          </b-col>

          <b-col lg="7">
            <div class="about-descr">
              <p class="p-heading">
                Applications Developer, Geek, Designer, Reader & always a Lifetime Learner!
              </p>
              <p class="separator">
                I’m a developer from India, belongs to Chennai. I design and develop websites, web applications and in my spare time video games. I can also help you with a mobile app development.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="services">
      <b-container>
        <b-container>
          <div class="section-title text-center">
            <h2>Tools I played with</h2>
          </div>
        </b-container>
        <carousel :autoplay="true" :loop="true" :items="5" class="text-center" :responsive="{0:{items:1,nav:false},600:{items:4,nav:false}}" :dots="false">
          <div class="services-block">
            <i class="ion-ios-browsers-outline" />
            <span>Facebook</span>
            <p
              class="separator"
            >
              It is a long established fact that a reader will be distracted by the
            </p>
          </div>

          <div class="services-block">
            <i class="ion-ios-lightbulb-outline" />
            <span>Instagram</span>
            <p
              class="separator"
            >
              It is a long established fact that a reader will be distracted by the
            </p>
          </div>
          <div class="services-block">
            <i class="ion-ios-lightbulb-outline" />
            <span>Instagram</span>
            <p
              class="separator"
            >
              It is a long established fact that a reader will be distracted by the
            </p>
          </div>
          <div class="services-block">
            <i class="ion-ios-lightbulb-outline" />
            <span>Instagram</span>
            <p
              class="separator"
            >
              It is a long established fact that a reader will be distracted by the
            </p>
          </div>
        </carousel>
      </b-container>
    </div>

    <div id="portfolio" class="text-center paddsection">
      <b-container>
        <div class="section-title text-center">
          <h2>My Magics with Camera</h2>
        </div>
      </b-container>

      <b-container>
        <b-row>
          <b-col md="12">
            <!-- <div class="portfolio-list">
              <ul class="nav list-unstyled" id="portfolio-flters">
                <li class="filter filter-active" data-filter=".all">all</li>
                <li class="filter" data-filter=".branding">branding</li>
                <li class="filter" data-filter=".mockups">mockups</li>
                <li class="filter" data-filter=".uikits">ui kits</li>
                <li class="filter" data-filter=".webdesign">web design</li>
                <li class="filter" data-filter=".photography">photography</li>
              </ul>
            </div> -->

            <!-- <div class="portfolio-container">
              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign" style="width: 255px; display: inline-block">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign" style="width: 255px; display: inline-block">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
                <a class="popup-img" href="https://placeimg.com/340/255/any?1">
                  <img src="https://placeimg.com/340/255/any?1" alt="img">
                </a>
              </div>
            </div> -->


            <!-- <div class="portfolio-container">
              <vue-instagram token="8272330664.1677ed0.c558f1126b3f49019694d691a3a78fbb" :count="50" mediaType="image">
                <b-col lg="4" md="6" class="portfolio-thumbnail" slot="feeds" slot-scope="props" style="width: auto; display: inline-block">
                  <a class="popup-img" :href="props.feed.link">
                    <img :src="props.feed.images.standard_resolution.url" alt="img">
                  </a>
                </b-col>
              </vue-instagram>
            </div> -->

            <!-- <div class="portfolio-container">
              <carousel v-if="showImages" :autoplay="true" :loop="true" :items="5" class="text-center" :responsive="{0:{items:1,nav:false},600:{items:4,nav:false}}" :dots="false">
                <div class="services-block border border-thumbnail" v-for="image in imageList" :key="image.ID">
                  <img :src="image.images.thumbnail.url" />
                </div>
              </carousel>
            </div> -->

            <div class="portfolio-container">
              <carousel v-if="showImages" :autoplay="true" :loop="true" :items="5" class="text-center" :responsive="{0:{items:1,nav:false},600:{items:4,nav:false}}" :dots="false">
                <b-card :img-src="image.images.standard_resolution.url" img-alt="Image" img-top v-for="image in imageList" :key="image.id">
                  <b-card-text>
                    {{ image.likes.count }}
                  </b-card-text>
                  <!-- <template v-slot:footer>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </template> -->
                </b-card>
              </carousel>
            </div>

            <!-- <div class="portfolio-container">
              <carousel>
                <div class="services-block">
                  <img src="https://placeimg.com/400/200/any?1"/>
                </div>
              </carousel>
            </div> -->

            <!-- {{imageList[0].images.standard_resolution.url}} -->

          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="journal" class="text-left paddsection">
      <b-container>
        <div class="section-title text-center">
          <h2>Blogs</h2>
        </div>
      </b-container>

      <b-container>
        <div class="journal-block">
          <b-row>

            <b-col lg="4" md="6">
              <div class="journal-info">
                <a href="blog-single.html"><img src="https://placeimg.com/400/200/any?1" class="img-responsive" alt="img"></a>
                <div class="journal-txt">
                  <h4><a href="blog-single.html">Learn gRPC and Protobuf with GoLang</a></h4>
                  <p class="separator">
                    This blog introduces you to gRPC and protobuf (protocol buffers) using GoLang.
                  </p>
                </div>
              </div>
            </b-col>

          </b-row>
        </div>
      </b-container>
    </div>

    <div id="contact" class="paddsection">
      <b-container>
        <div class="contact-block">
          <b-row>
            <b-col lg="6">
              <div class="contact-contact">
                <h2 class="mb-30">GET IN TOUCH</h2>
                <ul class="contact-details">
                  <li><span>Broadway</span></li>
                  <li><span>Chennai, Tamil Nadu</span></li>
                  <li><span>+91 8056032342</span></li>
                  <li><span>imran@dreamsofimran.in</span></li>
                </ul>
              </div>
            </b-col>

            <b-col lg="6">
              <b-form class="contactForm">
                <b-row>

                  <b-col lg="6">
                    <b-form-group class="contact-block1">
                      <b-input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="6">
                    <b-form-group>
                      <b-input type="email" class="form-control" id="email" name="email" placeholder="Your Email" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12">
                    <b-form-group>
                      <b-input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12">
                    <b-form-group>
                      <b-textarea class="form-control" name="message" rows="2" placeholder="Message" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12">
                    <b-btn type="submit" class="btn-default btn-send w-100 bg-dark">Send Message</b-btn>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>

            <!-- <b-col lg="3"></b-col>

            <b-col lg="3">
              <div class="contact-contact">
                <h2 class="mb-30">GET IN TOUCH</h2>
                <ul class="contact-details">
                  <li><span>Broadway</span></li>
                  <li><span>Chennai, Tamil Nadu</span></li>
                  <li><span>+91 8056032342</span></li>
                  <li><span>imran@dreamsofimran.in</span></li>
                </ul>
              </div>
            </b-col> -->
          </b-row>
        </div>
      </b-container>
    </div>

    <div id="footer" class="text-center">
      <b-container>
        <div class="socials-media text-center">
          <ul class="list-unstyled">
            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
            <li><a href="#"><i class="ion-social-instagram"></i></a></li>
            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
            <li><a href="#"><i class="ion-social-tumblr"></i></a></li>
            <li><a href="#"><i class="ion-social-dribbble"></i></a></li>
          </ul>
        </div>

        <p>&copy; Copyrights <a href="#"><b>Imran Basha</b></a>. All rights reserved.</p>
      </b-container>
    </div>

    <!-- <vue-instagram token="8272330664.1677ed0.c558f1126b3f49019694d691a3a78fbb" :count="50" mediaType="image">
      <template slot="feeds" slot-scope="props">
        <li class="fancy-list"> {{ props.feed.images.standard_resolution.url }} </li>
        <b-img :src="props.feed.images.low_resolution.url" />
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
      </template>
    </vue-instagram> -->

  </div>
</template>

<script>
import NavBar from "./layout/NavBar"
import carousel from 'vue-owl-carousel'

export default {
  name: "Home",
  components: {
    NavBar,
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
      this.$http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=8272330664.1677ed0.c558f1126b3f49019694d691a3a78fbb&count=50')
      .then((response) => {
        this.imageList = response.data.data
        this.showImages = true
      })
      .catch((e) => {
        this.imageList = nil
      })
    }
  }
}
</script>

<style scoped>
.bg-img {
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center center;
}
</style>


