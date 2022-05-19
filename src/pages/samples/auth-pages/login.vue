<template>

  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
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
                    <a href="javascript:void(0);" class="auth-link text-black">Forgot password?</a>
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
      password : ""
    }
  },
  methods:{
   async login(){
      const response = await axios.post('http://localhost:2400/api/login' ,{
        email : this.email,
        password : this.password
      })
      console.log(response);
        let token = response.data.token;
        localStorage.setItem("accessToken", token);
        //how to know if any user is connected : localStorage
        // localStorage.removeItem("accessToken");

    }
  }
}
</script>
