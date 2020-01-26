<template>
  <div>
    <b-navbar toggleable="lg" id="main-nav" fixed="top">
      <b-container class="py-0">
        <b-navbar-brand href="#" class="logo">Dreams of Imran</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              Home
            </b-nav-item>
            <b-nav-item>
              About
            </b-nav-item>
            <b-nav-item>
              Gallery
            </b-nav-item>
            <b-nav-item>
              Blogs
            </b-nav-item>
            <b-nav-item>
              Contact
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>


    <div id="header" class="home">
      <b-container>
        <vue-typed-js :strings="['Developer', 'Designer', 'Freelancer', 'Photographer']" :loop="true" :smart-backspace="true" :back-speed="50" :show-cursor="true">
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
                <b-img src="img/about.jpeg" class="img-responsive" alt="me" />
              </div>
            </div>
          </b-col>

          <b-col lg="7">
            <div class="about-descr">

              <p class="p-heading">
                FullStack Developer, Geek, Designer, Reader & always a Lifetime Learner!
              </p>

              <p class="separator">
                I’m a developer from India, with 2+ years of experience.
                I almost code every day, and I still love it as much now as when I first discovered it.
                Writing code has always been easy to me as breathing, and even if I didn’t get paid for doing it.
                I love to do it anyhow because it is fun.
                The sense of accomplishment when solving a really complicated problem cannot be beat!
                It just feels as if you have been at the best party in town.
                How come not everybody wants to be a developer.
              </p>
            </div>

            <div id="footer" class="pb-0 pt-4">
              <div class="socials-media text-left">
                <ul class="list-unstyled">
                  <li v-for="social in socialLinks" :key="social.id">
                    <a :href="social.url">
                      <v-icon large>
                        mdi-{{ social.name }}
                      </v-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </b-col>
        </b-row>
      </b-container>


      <div id="services">
        <b-container>
          <b-container>
            <div class="section-title text-center">
              <h2>Tools I have played with</h2>
            </div>
          </b-container>
          <carousel :autoplay="true" :loop="true" class="text-center" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false},1000:{items:5,nav:false}}" :dots="false">

            <div class="services-block" v-for="logo in logosList" :key="logo.id">
              <a :href="logo.url">
                <img :src="`img/logos/${logo.name}.png`" :alt="logo.name" height="80" style="width:80px!important" class="m-auto" />
              </a>
            </div>

          </carousel>
        </b-container>
      </div>

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
              <carousel v-if="showImages" :autoplay="true" class="text-center" :responsive="{ 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }" :responsiveClass="true" :dots="false">
                <a v-for="image in imageList" :key="image.id" :href="image.link" style="color: inherit" target="_blank">
                  <b-card :img-src="image.images.standard_resolution.url" img-alt="Image" img-height="250" img-width="250" img-top class="mx-2" no-body>
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
                  </b-card>
                </a>
              </carousel>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="journal" class="text-left paddsection">
      <b-container class="p-0">
        <div class="section-title text-center">
          <h2>Blogs</h2>
        </div>
      </b-container>

      <b-container>
        <div class="journal-block">
          <b-row>
            <b-col lg="4" md="6">
              <div class="journal-info">
                <a href="blog-single.html"><img src="https://placeimg.com/400/200/any?3" class="img-responsive" alt="img"></a>
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
                  <b-col lg="6" class="py-0">
                    <b-form-group class="contact-block1">
                      <b-input id="name" type="text" class="form-control-contact py-4" name="name" placeholder="Your Name" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="6" class="py-0">
                    <b-form-group>
                      <b-input id="email" type="email" class="form-control-contact py-4" name="email" placeholder="Your Email" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12" class="py-0">
                    <b-form-group>
                      <b-input id="subject" type="text" class="form-control-contact py-4" name="subject" placeholder="Subject" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12" class="py-0">
                    <b-form-group>
                      <b-textarea class="form-control-contact" name="message" rows="4" placeholder="Message" required />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12" class="py-0">
                    <b-btn type="submit" class="btn-default btn-send w-100 bg-dark">
                      Send Message
                    </b-btn>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>

          </b-row>
        </div>
      </b-container>
    </div>

    <div id="footer" class="text-center">
      <b-container>
        <div class="socials-media text-center">
          <ul class="list-unstyled">
            <li v-for="social in socialLinks" :key="social.id">
              <a :href="social.url" target="_blank">
                <v-icon medium>mdi-{{social.name}}</v-icon>
              </a>
            </li>
          </ul>
        </div>

        <p>&copy; Copyrights <a href="javascript:void(0);"><b>Imran Basha</b></a>. All rights reserved.</p>
      </b-container>
    </div>
  </div>
</template>

<script>
// import NavBar from "./layout/NavBar"
import carousel from 'vue-owl-carousel'

export default {
  name: "Home",
  components: {
    // NavBar,
    carousel
  },
  data: () => ({
    imageList: [],
    showImages: false,
    logosList: [
      {id: 1, name: 'ruby', url: '#'},
      {id: 2, name: 'vuejs', url: '#'},
      {id: 3, name: 'golang', url: '#'},
      {id: 4, name: 'rails', url: '#'},
      {id: 5, name: 'python', url: '#'},
      {id: 6, name: 'flutter', url: '#'},
      {id: 7, name: 'docker', url: '#'},
      {id: 8, name: 'java', url: '#'},
      {id: 9, name: 'c-sharp', url: '#'},
    ],
    socialLinks: [
      {id: 1, name: 'facebook-box', url: '#'},
      {id: 2, name: 'twitter', url: '#'},
      {id: 3, name: 'instagram', url: '#'},
      {id: 4, name: 'github-box', url: '#'},
      {id: 5, name: 'medium', url: '#'},
      {id: 6, name: 'dev-to', url: '#'},
    ]
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


