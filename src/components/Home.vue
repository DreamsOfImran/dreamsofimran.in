<template>
  <div v-if="loading" class="vh-100 align-items-center d-flex justify-content-center">
    <breeding-rhombus-spinner
      :animation-duration="2000"
      :size="100"
      color="#b8a07e"
    />
  </div>
  <div v-else>
    <b-navbar v-show="showNavBar" id="main-nav" toggleable="lg" fixed="top">
      <b-container class="py-0">
        <b-navbar-brand href="#" class="logo" style="font-family: 'Satisfy', cursive;">
          Dreams of Imran
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#header">
              Home
            </b-nav-item>
            <b-nav-item href="#about">
              About
            </b-nav-item>
            <b-nav-item href="#portfolio">
              Gallery
            </b-nav-item>
            <b-nav-item href="#journal">
              Blogs
            </b-nav-item>
            <b-nav-item href="#contact">
              Contact
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <div id="header" class="home">
      <b-container>
        <vue-typed-js
          :strings="['Developer', 'Designer', 'Freelancer', 'Photographer']"
          :loop="true"
          :smart-backspace="true"
          :back-speed="50"
          :show-cursor="true"
          :type-speed="100"
        >
          <div class="header-content">
            <h1>Imran Basha</h1>
            <p>
              <span class="typing" />
            </p>
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
                FullStack Developer, Geek, Designer, Reader & always a Lifetime
                Learner!
              </p>

              <p class="separator">
                I’m a developer from India, with 2+ years of experience. I
                almost code every day, and I still love it as much now as when I
                first discovered it. Writing code has always been easy to me as
                breathing, and even if I didn’t get paid for doing it. I love to
                do it anyhow because it is fun. The sense of accomplishment when
                solving a really complicated problem cannot be beat! It just
                feels as if you have been at the best party in town. How come
                not everybody wants to be a developer.
              </p>
              <br>
              <p class="separator">
                Do you need a help on a project or do you just want to say hello? <a href="#contact">Contact me.</a>
              </p>
            </div>

            <div id="footer" class="pb-0 pt-4">
              <div class="socials-media about-container">
                <ul class="list-unstyled">
                  <li v-for="social in socialLinks" :key="social.id">
                    <a :href="social.url" target="_blank">
                      <v-icon large>mdi-{{ social.name }}</v-icon>
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
          <carousel
            :autoplay="true"
            :loop="true"
            class="text-center"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 3, nav: false },
              1000: { items: 5, nav: false }
            }"
            :dots="false"
          >
            <div v-for="logo in logosList" :key="logo.id" class="services-block">
              <a :href="logo.url" target="_blank">
                <img
                  :src="`img/logos/${logo.name}.png`"
                  :alt="logo.name"
                  height="80"
                  style="width:80px!important"
                  class="m-auto"
                >
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
                <a href="https://blog.francium.tech/learn-grpc-and-protobuf-with-golang-8456a2e64977?source=friends_link&sk=cfc3716536dd5972e6e5d744703194ea" target="_blank">
                  <img src="https://cdn-images-1.medium.com/max/800/1*JzeYG3sdWeKfcQ_A69m8oA.jpeg" class="img-responsive" alt="img">
                </a>
                <div class="journal-txt">
                  <h4>
                    <a href="https://blog.francium.tech/learn-grpc-and-protobuf-with-golang-8456a2e64977?source=friends_link&sk=cfc3716536dd5972e6e5d744703194ea" target="_blank">
                      Learn gRPC and Protobuf with GoLang
                    </a>
                  </h4>
                  <p class="separator">
                    This blog introduces you to gRPC and protobuf (protocol
                    buffers) using GoLang.
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
                  <li>
                    <span>Broadway</span>
                  </li>
                  <li>
                    <span>Chennai, Tamil Nadu</span>
                  </li>
                  <li>
                    <span>+91 8056032342</span>
                  </li>
                  <li>
                    <span>contactme@dreamsofimran.in</span>
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col lg="6">
              <b-form class="contactForm" @submit.prevent="sendMessage()">
                <b-row>
                  <b-col lg="6" class="py-0">
                    <b-form-group class="contact-block1">
                      <b-input
                        id="name"
                        v-model="message.name"
                        type="text"
                        class="form-control-contact py-4"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </b-form-group>
                  </b-col>

                  <b-col lg="6" class="py-0">
                    <b-form-group>
                      <b-input
                        id="email"
                        v-model="message.email"
                        type="email"
                        class="form-control-contact py-4"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12" class="py-0">
                    <b-form-group>
                      <b-input
                        id="subject"
                        v-model="message.subject"
                        type="text"
                        class="form-control-contact py-4"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </b-form-group>
                  </b-col>

                  <b-col lg="12" class="py-0">
                    <b-form-group>
                      <b-textarea
                        v-model="message.messageBody"
                        class="form-control-contact"
                        name="message"
                        rows="4"
                        placeholder="Message"
                        required
                      />
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
                <v-icon medium>mdi-{{ social.name }}</v-icon>
              </a>
            </li>
          </ul>
        </div>

        <p>
          &copy; Copyrights
          <a href="javascript:void(0);">
            <b>Imran Basha</b>
          </a>. All rights reserved.
        </p>
      </b-container>
    </div>
  </div>
</template>

<script>
// import NavBar from "./layout/NavBar"
import carousel from "vue-owl-carousel"
import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
  name: "Home",
  components: {
    // NavBar,
    carousel,
    BreedingRhombusSpinner
  },
  data: () => ({
    loading: true,
    showNavBar: false,
    imageList: [],
    showImages: false,
    logosList: [
      { id: 1, name: "ruby", url: "https://www.ruby-lang.org" },
      { id: 2, name: "vuejs", url: "https://vuejs.org" },
      { id: 3, name: "golang", url: "https://golang.org" },
      { id: 4, name: "rails", url: "https://rubyonrails.org" },
      { id: 5, name: "python", url: "https://www.python.org" },
      { id: 6, name: "flutter", url: "https://flutter.dev" },
      { id: 7, name: "docker", url: "https://www.docker.com" },
      { id: 8, name: "java", url: "https://www.java.com" },
      { id: 9, name: "c-sharp", url: "https://docs.microsoft.com/en-us/dotnet/csharp" }
    ],
    socialLinks: [
      { id: 1, name: "facebook-box", url: "https://www.facebook.com/DreamsOfImran" },
      { id: 2, name: "twitter", url: "https://twitter.com/DreamsOfImran" },
      { id: 3, name: "instagram", url: "https://www.instagram.com/dreamsofimran" },
      { id: 4, name: "github-box", url: "https://github.com/DreamsOfImran" },
      { id: 5, name: "medium", url: "https://medium.com/@DreamsOfImran" },
      { id: 6, name: "dev-to", url: "https://dev.to/dreamsofimran" }
    ],
    message: {
      name: '',
      email: '',
      subject: '',
      messageBody: ''
    }
  }),
  mounted() {
    this.fetchInstaImages()
    this.loader()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false
      }, 4000)
    },
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if(currentScrollPosition > 300) {
        this.showNavBar = true
      } else {
        this.showNavBar = false
      }
    },
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
    sendMessage() {
      let message_body = `Name: ${this.message.name}<br>Email: ${this.message.email}<br>Subject: ${this.message.subject}<br>Message: ${this.message.messageBody}`
      Email.send({
        SecureToken : process.env.VUE_APP_SMTP_SECURE_TOKEN,
        To : 'contactme@dreamsofimran.in',
        From : 'ibasha66@gmail.com',
        Subject : this.message.subject,
        Body : message_body
      }).then(
        message => alert(message)
      )
    }
  }
}
</script>
