<template>
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
              <a href="https://medium.com/@DreamsOfImran/learn-grpc-and-protobuf-with-golang-8456a2e64977" target="_blank">
                <img src="https://cdn-images-1.medium.com/max/800/1*JzeYG3sdWeKfcQ_A69m8oA.jpeg" class="img-responsive" alt="img">
              </a>
              <div class="journal-txt">
                <h4>
                  <a href="https://medium.com/@DreamsOfImran/learn-grpc-and-protobuf-with-golang-8456a2e64977" target="_blank">
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
          <b-col lg="4" md="6">
            <div class="journal-info">
              <a href="https://medium.com/@DreamsOfImran/passwordless-authentication-for-web-app-using-webauthn-162165692636" target="_blank">
                <img src="https://miro.medium.com/max/800/1*TbqD29HeLICRuuQ9manBdA.png" class="img-responsive" alt="img">
              </a>
              <div class="journal-txt">
                <h4>
                  <a href="https://medium.com/@DreamsOfImran/passwordless-authentication-for-web-app-using-webauthn-162165692636" target="_blank">
                    Passwordless Authentication for Web App using WebAuthn
                  </a>
                </h4>
                <p class="separator">
                  This blog introduces you to passwordless authentication using webauthn.
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Blogs'
}
</script>
