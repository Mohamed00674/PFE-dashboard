<template>

  <section class="register">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div  class="alert alert-danger" role="alert"   v-if="error" >
                {{error}}
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form @submit.prevent="register" class="pt-3">
                  <div class="form-group">
                    <input  v-model="username" type="text" class="form-control form-control-lg" id="username" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input  v-model="email" type="email" class="form-control form-control-lg" id="email" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <input  v-model="password" type="password" class="form-control form-control-lg" id="password" placeholder="Password">
                  </div>
                  <div class="mb-4">
                  </div>
                  <div class="mt-3">
                    <a href="">
                      <button  @click="register" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" > SIGNUP</button>
                    </a>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account? <router-link to="/auth/login" class="text-primary">Login</router-link>
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
import axios from 'axios';
export default {
  name: 'register',
  data() {
    return {
      username : '',
      email :'',
      password :'',
      error : "",
      }
    },
  methods: {
    async register(){
      try{
        const response = await axios.post('http://localhost:2400/api/signup' ,{
        email : this.email,
        username : this.username,
        password : this.password
      })
      this.$router.push(`/auth/login?success=${response.data.message}`);
      }catch(err){
        this.error = err.response.data.message;
      }

      

      
    }  
  },

}
</script>