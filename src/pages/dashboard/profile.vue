<template>
<div>
  <div v-if="message" class="alert alert-success" role="alert">
    {{message}}
  </div>
<div class="container rounded bg-white mt-5">
        <div class="row">
            <div class="col-md-4 border-right">
              
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <input id="file-input" name="avatar" @change="previewImage"  type="file" accept="image/*" />
                 <p><img class="rounded-circle mt-5" :src="imageData" width="150"></p> <br><br><br><br>
                    <label for="file"  class="btn btn-primary profile-button" onclick="document.getElementById('file-input').click()" > Upload Image
   </label>
                  </div>
            </div>
            <div class="col-md-8">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        
                        <h3 class="text-right">Edit Profile</h3>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                          <input type="text" v-model="user.username" class="form-control" placeholder="username" value=""></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">
                          <input type="text" v-model="user.email" class="form-control" placeholder="Email" value=""></div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="password" class="form-control" placeholder="password" ></div>
                        
                    </div>
                    <div class="mt-5 text-right">
                      <button @click="updateProfile()" class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>    

<script>
import axios from 'axios'
export default {
 name : "profile",
 data() {
   return {
    message : "",
     user : null,
     username : "" , 
     email : "",
     password : "",
     imageData: ""  
    }
 },
 async created() {
    const response = await axios.get('http://localhost:2400/api/profile',{
    headers:{
      authorization :  localStorage.getItem('accessToken')
    },
  })
  this.user = response.data;
  },
  methods:{
      async  updateProfile(){
        const res = await axios.put(`http://localhost:2400/api/${_id}`,{
          username : this.username,
          email : this.email,
          password : this.password,
        })
        this.message = res.data.message
      },
      previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
  },

  }}

</script>

<style scoped>
#file-input{
  display: none;
}
h3{
  margin-top: 20px;
}
.btn btn-primary profile-button{
  margin-top:250px;
}
p{
  font-size: 30px;
}
img {
        cursor: pointer;
        width: 200px;
        height: 200px;        
    }
</style>

