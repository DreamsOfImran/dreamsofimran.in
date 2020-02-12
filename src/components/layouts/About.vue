<template>
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
              Do you need help with a project or do you just want to say hello? <a v-scroll-to="'#contact'" class="about-contact-link" href="#">Contact me.</a>
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
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'About',
  components: {
    carousel
  },
  data: () => ({
    logosList: [
      { id: 1, name: 'ruby', url: 'https://www.ruby-lang.org' },
      { id: 2, name: 'vuejs', url: 'https://vuejs.org' },
      { id: 3, name: 'golang', url: 'https://golang.org' },
      { id: 4, name: 'rails', url: 'https://rubyonrails.org' },
      { id: 5, name: 'python', url: 'https://www.python.org' },
      { id: 6, name: 'flutter', url: 'https://flutter.dev' },
      { id: 7, name: 'docker', url: 'https://www.docker.com' },
      { id: 8, name: 'java', url: 'https://www.java.com' },
      { id: 9, name: 'c-sharp', url: 'https://docs.microsoft.com/en-us/dotnet/csharp' }
    ],
    socialLinks: [
      { id: 1, name: 'facebook-box', url: 'https://www.facebook.com/DreamsOfImran' },
      { id: 2, name: 'twitter', url: 'https://twitter.com/DreamsOfImran' },
      { id: 3, name: 'instagram', url: 'https://www.instagram.com/dreamsofimran' },
      { id: 4, name: 'github-box', url: 'https://github.com/DreamsOfImran' },
      { id: 5, name: 'medium', url: 'https://medium.com/@DreamsOfImran' },
      { id: 6, name: 'dev-to', url: 'https://dev.to/dreamsofimran' }
    ],
  }),
}
</script>
