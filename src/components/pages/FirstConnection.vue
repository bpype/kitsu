<template>
  <div class="hero is-fullheight">
    <div class="container has-text-centered">
      <div class="box has-text-left">
        <div class="has-text-centered login-header">
          <img src="../../assets/kitsu-text-dark.svg" v-if="isDarkTheme" />
          <img src="../../assets/kitsu-text.svg" v-else />
        </div>

        <div class="has-text-centered">
          <h1 class="title">
            {{ $t('login.first_connection_title') }}
          </h1>
          <p>
            {{ $t('login.first_connection') }}
          </p>
          <p class="mt1">
            {{ $t('login.first_connection_2') }}
          </p>
        </div>

        <div class="field mt2">
          <p class="control has-icon">
            <input
              class="input is-medium email"
              type="email"
              :placeholder="$t('login.fields.email')"
              @keyup.enter="confirmResetPassword"
              v-model="email"
              v-focus
            />
            <span class="icon">
              <mail-icon :size="20" />
            </span>
          </p>
        </div>

        <p class="control">
          <a
            class="button main-button is-fullwidth"
            :class="{
              'is-loading': isLoading
            }"
            @click="confirmResetPassword"
            v-if="!isSuccess"
          >
            {{ $t('login.reset_password') }}
          </a>
        </p>
        <p class="error" v-if="isError">
          {{ $t('login.reset_password_failed') }}
        </p>
        <p class="success" v-if="isSuccess">
          {{ $t('login.reset_password_succeed') }}
        </p>
        <p class="has-text-centered">
          <router-link :to="{ name: 'login' }">
            <span v-if="isSuccess">
              {{ $t('login.back_to_login') }}
            </span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { MailIcon } from 'lucide-vue-next'

export default {
  name: 'first-connection',

  components: {
    MailIcon
  },

  data() {
    return {
      email: '',
      isLoading: false,
      isError: false,
      isSuccess: false
    }
  },

  mounted() {
    this.email = this.$store.state.login.email
    this.isLoading = false
    this.isSuccess = false
  },

  computed: {
    ...mapGetters(['isDarkTheme'])
  },

  methods: {
    ...mapActions(['resetPassword']),

    confirmResetPassword() {
      this.isLoading = true
      this.isError = false
      this.isSuccess = false
      this.resetPassword(this.email)
        .then(() => {
          this.isLoading = false
          this.isSuccess = true
        })
        .catch(() => {
          this.isLoading = false
          this.isError = true
          this.isSuccess = false
        })
    }
  },

  head() {
    return {
      title: this.$t('login.first_connection_title')
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  height: 3em;
  padding: 1.5em;
  border-radius: 1em;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border: 1px solid $green;
  }
}

.icon {
  padding: 0.25em;
}

.button {
  border-radius: 1em;
}

.hero .container .box {
  border-radius: 2em;
}

img {
  width: 150px;
}
</style>
