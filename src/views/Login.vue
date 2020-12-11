<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }"
              >Having a count?</router-link
            >
          </p>

          <ul class="error-messages">
            <li v-for="(error, i) in errors" :key="i">
              {{ error.message }}
            </li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click="login"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: '',
    email: '',
    errors: []
  }),
  methods: {
    login() {
      this.$store
        .dispatch('users/loginUser', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.errors = []
          console.log(res)
        })
        .catch(err => this.errors.push(err))
    }
  }
}
</script>
