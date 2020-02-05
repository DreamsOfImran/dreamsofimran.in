<template>
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
                  <b-btn type="submit" class="btn-default btn-send w-100 bg-dark" :disabled="sending">
                    <atom-spinner
                      v-if="sending"
                      :animation-duration="1000"
                      :size="40"
                      class="mx-auto"
                    />
                    <span v-else>
                      Send Message
                    </span>
                  </b-btn>
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'
import NewMessage from './../../templates/NewMessage'
export default {
  name: 'Contact',
  components: {
    AtomSpinner
  },
  data: () => ({
    sending: false,
    message: {
      name: '',
      email: '',
      ipAddress: '',
      subject: '',
      messageBody: ''
    }
  }),
  mounted() {
    this.getIPAddress()
  },
  methods: {
    sendMessage() {
      this.sending = true
      let emailTemplate = NewMessage.generateEmailTemplate(this.message)
      Email.send({
        SecureToken : process.env.VUE_APP_SMTP_SECURE_TOKEN,
        To : 'contactme@dreamsofimran.in',
        From : 'ibasha66@gmail.com',
        Subject : this.message.subject,
        Body : emailTemplate
      })
      .then((message) => {
        if(message === 'OK') {
          this.$toast('Your Message Sent Successfully!')
          this.clearForm()
          this.sending = false
        } else {
          this.clearForm()
          this.$toast.error('Oops! Something went wrong.')
          this.sending = false
        }
      })
    },
    getIPAddress() {
      fetch('https://api.ipify.org?format=json')
      .then(x => x.json())
      .then(({ ip }) => {
        this.message.ipAddress = ip
      })
    },
    clearForm() {
      this.message.name = ''
      this.message.email = ''
      this.message.subject = ''
      this.message.messageBody = ''
    }
  }
}
</script>
