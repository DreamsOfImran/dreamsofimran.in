<template>
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
</template>

<script>
export default {
  name: 'Header'
}
</script>
