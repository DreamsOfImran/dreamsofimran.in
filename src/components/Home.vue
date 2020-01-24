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
        <vue-typed-js :strings="['Developer', 'Designer', 'Freelancer', 'Photographer']" :loop="true" :smart-backspace="true" :back-speed="40" :show-cursor="true">
          <div class="header-content">
            <h1>Imran Basha</h1>
            <p><span class="typing" /></p>
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
            <h2>Tools I have played with</h2>
          </div>
        </b-container>
        <carousel :autoplay="true" :loop="true" class="text-center" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false},1000:{items:5,nav:false}}" :dots="false">
          <div class="services-block">
            <a href="#">
              <img src="img/logos/ruby.png" height="80" style="width:80px!important" class="m-auto" />
            </a>
          </div>

          <div class="services-block">
            <a href="#">
              <img src="img/logos/vuejs.png" height="80" style="width:80px!important" class="m-auto" />
            </a>
          </div>

          <div class="services-block">
            <a href="#">
              <img src="img/logos/golang.png" height="80" style="width:80px!important" class="m-auto" />
            </a>
          </div>

          <div class="services-block">
            <a href="#">
              <img src="img/logos/python.png" height="80" style="width:80px!important" class="m-auto" />
            </a>
          </div>

          <div class="services-block">
            <a href="#">
              <img src="img/logos/rails.png" height="80" style="width:80px!important" class="m-auto" />
            </a>
          </div>

          <div class="services-block">
            <a href="#">
              <img src="img/logos/flutter.png" height="80" style="width:80px!important" class="m-auto" />
            </a>
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
            <div class="portfolio-container">
              <carousel v-if="showImages" :autoplay="true" class="text-center" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false},1000:{items:4,nav:false}}" :dots="false">
                <b-card v-for="image in imageList" :key="image.id" :img-src="image.images.standard_resolution.url" img-alt="Image" img-height="250" img-width="250" img-top class="mx-2" no-body>
                  <div>
                    <b-row>

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
                  <!-- <template v-slot:footer>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </template> -->
                </b-card>
              </carousel>
            </div>
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
                <h2 class="mb-30">
                  GET IN TOUCH
                </h2>
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
                      <b-input id="name" type="text" class="form-control" name="name" placeholder="Your Name" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="6">
                    <b-form-group>
                      <b-input id="email" type="email" class="form-control" name="email" placeholder="Your Email" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12">
                    <b-form-group>
                      <b-input id="subject" type="text" class="form-control" name="subject" placeholder="Subject" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12">
                    <b-form-group>
                      <b-textarea class="form-control" name="message" rows="2" placeholder="Message" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12">
                    <b-btn type="submit" class="btn-default btn-send w-100 bg-dark">
                      Send Message
                    </b-btn>
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
            <li><a href="#"><i class="ion-social-facebook" /></a></li>
            <li><a href="#"><i class="ion-social-twitter" /></a></li>
            <li><a href="#"><i class="ion-social-instagram" /></a></li>
            <li><a href="#"><i class="ion-social-googleplus" /></a></li>
            <li><a href="#"><i class="ion-social-tumblr" /></a></li>
            <li><a href="#"><i class="ion-social-dribbble" /></a></li>
          </ul>
        </div>

        <p>&copy; Copyrights <a href="#"><b>Imran Basha</b></a>. All rights reserved.</p>
      </b-container>
    </div>
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


