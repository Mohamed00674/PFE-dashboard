<template>
<div>
    
      <img class="rounded-circle" alt="50x50" src=""
          data-holder-rendered="true"> <br>
    <facebook-login class="button"
    appId = "285508587122471"
    @login="onLogin"
    @logOut="onLogout"
    @sdk-loaded="sdkLoaded"
     />
</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import facebookLogin from 'facebook-login-vuejs';
export default {
  name: 'facebook',
  data(){
      return{
          id : "",
          email : "",
          name : ""
      }
  },
   components: {
        facebookLogin
    },
    methods:{
        getUserData(){
            this.FB.api('/me', 'GET' , {fields : 'id,name,email' },
            userInformation => {
                console.warn("data api " , userInformation )
                this.personalID = userInformation.id;
                this.email = userInformation.email;
                this.name = userInformation.name;
               this.authFacebook()
            } 
)
        },
        sdkLoaded(payload){
            this.isConnected = payload.isConnected;
            this.FB = payload.FB
            if(this.isConnected) this.getUserData()
        },
        onLogin(){
            this.isConnected = true;
            this.getUserData();
        },
        onLogout(){
            this.isConnected = false;
        },
        authFacebook(){
            axios.post('https://localhost:2400/api/auth/facebook' ,{
                email : this.email,
                name : this.name,
                id : this.id
            }).then(response => {
                console.log(response)
            } ).catch(error => {
                console.log(error)
            } )
        }
    }
}
</script>
<style scoped >
#sub{
  background-color :#1877f2;
}
.login-form {
		width: 500px;
    	margin: 60px auto;
	}
    .login-form form {
    	margin-bottom: 15px;
        font-family: inherit;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 30px;
    }
    .form-control, .btn {
        min-height: 45px;
        border-radius: 10px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>