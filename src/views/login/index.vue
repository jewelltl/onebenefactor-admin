<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card no-body class="p-4">
            <b-card-body bg-variant="dark" text-variant="white">
              <b-form @submit.prevent="onSubmit">
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><font-awesome-icon icon="user"></font-awesome-icon></b-input-group-text></b-input-group-prepend>
                  <b-form-input 
                    type="email" 
                    class="form-control" 
                    v-model="form.email"
                    placeholder="Username" 
                    autocomplete="username email" 
                    data-vv-name="email"
                    v-validate="'required|email'"
                    :class="{'is-invalid': errors.has('email')}"
                  />
                  <b-form-invalid-feedback>
                    {{errors.first('email')}}
                  </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><font-awesome-icon icon="key"></font-awesome-icon></b-input-group-text></b-input-group-prepend>
                    <b-form-input
                      type="password"
                      v-model="form.password"
                      class="form-control"
                      placeholder="Password"
                      data-vv-name="password"
                      :class="{'is-invalid': errors.has('password')}"
                      v-validate="'required|min:6'"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{errors.first('password')}}
                    </b-form-invalid-feedback>
                </b-input-group>
                <b-row>
                  <b-col cols="6" >
                    <b-button variant="primary" type="submit" class="px-4">Login</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import notificationMixin from '@/mixins/notification.js'
export default {
  name: 'Login',
  mixins: [notificationMixin],
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    onSubmit () {
      this.$validator
        .validateAll()
        .then(res => {
          if (res) {
            this.$store.dispatch('user/Login', this.form).then((suc) => {
              this.successNotification('Succeed', 'You logged in successfully!')
              this.$router.push({path: this.redirect || '/'})
            }).catch(err => {
              this.errorNotification('Failure', 'Verification failed, please try again.')
              this.$toast.error({
                title: 'Failure',
                message: err
              })
              console.log(err)
            })
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">

</style>
