<template>
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
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    socialLinks: [
      { id: 1, name: 'facebook-box', url: 'https://www.facebook.com/DreamsOfImran' },
      { id: 2, name: 'twitter', url: 'https://twitter.com/DreamsOfImran' },
      { id: 3, name: 'instagram', url: 'https://www.instagram.com/dreamsofimran' },
      { id: 4, name: 'github-box', url: 'https://github.com/DreamsOfImran' },
      { id: 5, name: 'medium', url: 'https://medium.com/@DreamsOfImran' },
      { id: 6, name: 'dev-to', url: 'https://dev.to/dreamsofimran' }
    ]
  })
}
</script>
