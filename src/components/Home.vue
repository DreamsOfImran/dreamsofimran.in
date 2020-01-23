<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="vh-100 text-white bg-img" style="background-image: url(img/6.jpg)">
      <b-container class="my-auto text-center">
        <b-row align-v="center" class="vh-100">
          <b-col class="display-1">
            I am Imran Basha
            <br>
            <span class="display-4">Developer</span>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="about" class="paddsection">
      <b-container>
        <b-row class="justify-content-between">
          <b-col class="col-lg-4">
            <div class="div-img-bg">
              <div class="about-img">
                <b-img src="img/5.jpg" class="img-responsive" alt="me" />
              </div>
            </div>
          </b-col>

          <b-col class="col-lg-7">
            <div class="about-descr">
              <p
                class="p-heading"
              >
                im a ux /ui designer austin based who loves clean, simple & unique design. i also enjoy crafting brand identities, icons, & ilustration work.
              </p>
              <p
                class="separator"
              >
                To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="services">
      <b-container>
        <div class="services-carousel owl-theme owl-carousel">
          <div class="services-block">
            <i class="ion-ios-browsers-outline" />
            <span>UI/UX DESIGN</span>
            <p
              class="separator"
            >
              To an English person, it will seem like simplified English,told me what
            </p>
          </div>

          <div class="services-block">
            <i class="ion-ios-lightbulb-outline" />
            <span>BRAND IDENTITY</span>
            <p
              class="separator"
            >
              To an English person, it will seem like simplified English,told me what
            </p>
          </div>
        </div>
      </b-container>
    </div>

    <div>Below background image</div>
  </div>
</template>

<script>
import NavBar from "./layout/NavBar"
export default {
  name: "Home",
  components: {
    NavBar
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
