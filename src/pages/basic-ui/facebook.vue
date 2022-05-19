<template>
    <div>
        <button @click="loginWithFb()">Login with Facebook</button>
    </div>
</template>

<script>

import jwtDecode from 'jwt-decode'

export default {
  name: 'facebook',
  data(){
      return{
          id : "",
          email : "",
          name : ""
      }
  },
    methods:{
        loginWithFb() {
            const user = jwtDecode(localStorage.getItem('accessToken'));

            window.location = `http://localhost:2400/auth/facebook?id=${user._id}`;
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