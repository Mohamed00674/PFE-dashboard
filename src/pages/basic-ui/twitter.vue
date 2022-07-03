<template>
<div>
    <div>
      <img  class="rounded-circle mt-5" src="@/assets/images/faces/def.jpg" width="20%"><span class="font-weight-bold"></span><span class="text-black-50"></span></div><br>
    <a id="twitter-button" class="btn btn-block btn-social btn-twitter">
  <i class="fa fa-twitter"></i> Sign in with Twitter
</a>
</div> 
</template>    

<script>

import jwtDecode from 'jwt-decode'

export default{
    name : 'twitter',
    data(){
        return {
            id : "",
            email : "",
            name : ""
        }
    },
    methods:{
        loginWithTwitter(){
            const user = jwtDecode(localStorage.getItem('accessToken'));
            window.location = `http://localhost:2400/twitter/login?id=${user._id}`;
        }
    }
}
</script>

<style scoped >
#twitter-button{
    width:30%;
     margin-left: 300px;
}
img{
  margin-left: 350px;
}
</style>