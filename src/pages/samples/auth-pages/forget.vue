<template>
     <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <form @submit.prevent="handleSubmit()" class="pt-3">
                <h3>Forgot Password</h3> <br>
                  <div class="form-group">
                    <input v-model="email" type="email" class="form-control form-control-lg" id="email" placeholder=" Enter your email ">
                  </div>
                  <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" > Submit   </button>
                </form>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
name : 'forget',
data() {
  return {
    email: "",
    error : ""
  }
},
methods: {
 async handleSubmit(){
   try{
     const response = await axios.post('http://localhost:2400/api/forgot-password',{
      email : this.email}
   )
   }catch(err){
     this.error = err.response.data.message
   }   
  }
},
}
</script>


