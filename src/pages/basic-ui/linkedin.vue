<template>
<div>
<div>
   <img  class="rounded-circle mt-5" src="@/assets/images/faces/def.jpg" width="20%"><span class="font-weight-bold"></span><span class="text-black-50"></span></div><br>
<button  @click="loginwithtwitter" id="linkedin-button" class="btn btn-block btn-social btn-linkedin">
  <i class="fa fa-linkedin" aria-hidden="true"></i> Sign in with Linkedin
</button>
<button @click="LinkedinUser" >click me</button>
{{token}}
</div>
</template>


<script>
import jwtDecode from 'jwt-decode'
import axios from 'axios'
export default{
  name : "linkedin",
  data() {
    return {
      token : "",
    }
  },
  methods: {
   async LinkedinUser(){
      const response = await axios.get('http://localhost:2400/linkedin')
      this.token = response.data.linkedinAccessToken
    },  
   async loginwithtwitter(){
     const user = jwtDecode(localStorage.getItem('accessToken'));
      window.location = `http://localhost:2400/auth/linkedin?id=${user._id}`;
      console.log(user)
    },
   async apicall(){
      const res= await axios.get('')
    }
  }
}
</script>

<style scoped>
#linkedin-button{
  width: 30%;
  margin-left: 300px;

}
img{
  margin-left: 350px;
}
</style>