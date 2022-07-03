<template>

  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                 <div v-if="error" class="alert alert-danger" role="alert" >
                  {{error}}
                  </div>
                 <div v-if="success" class="alert alert-success" role="alert" >
                  {{success}}
                  </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form @submit.prevent="login" class="pt-3">
                  <div class="form-group">
                    <input v-model="email" type="email" class="form-control form-control-lg" id="email" placeholder="email">
                  </div>
                  <div class="form-group">
                    <input  v-model="password" type="password" class="form-control form-control-lg" id="password" placeholder="Password">
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" > LOGIN</button>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                  <router-link to="/auth/forget" >Forgot password?</router-link> 
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account? <router-link to="/auth/register" class="text-primary">Create</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
      <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>

</template>

<script>
import axios from'axios'
export default {
  name: 'login',
  data() {
    return {
      email : "",
      password : "",
      success: '',
      error: "",
    }
  },
  mounted() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.success) this.success = params.success;
    //params.token admin dashboard
    setTimeout(() => {
      this.success = '';
    }, 3000);
  },
  methods:{
   async login(){
      try {
        const response = await axios.post('http://localhost:2400/api/login' ,{
          email : this.email,
          password : this.password
        });
      let token = response.data.token;
      localStorage.setItem("accessToken", token);
       this.$router.push(`/dashboard?success=${response.data.message}`);
} catch (err) {
        this.error = err.response.data.message;
      }
    }
  }
}
</script>
