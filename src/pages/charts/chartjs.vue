<template>
    <div>
        <h3>Create a Post</h3>
<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label"> </label>
  <textarea class="form-control" v-bind="content" placeholder="type your post" id="textarea" rows="5"></textarea><br>
</div>
<div class="mb-3">
 <div class="image-upload">
  <label for="file-input">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" />
  </label> add images/video
  <input id="file-input" type="file" />
</div><br>
<button @click="post()" type="button" class="btn btn-primary">Post Now</button>
<button type="button" class="btn">Schedule Post</button><br><br>
<h4>post on these networks</h4><br>

<div class="wrapper">
  <a href="#" class="icon facebook">
    <div class="tooltip">Facebook</div>
    <span><i class="fab fa-facebook-f"></i></span>
  </a>
  <a href="#" class="icon twitter">
    <div class="tooltip">Twitter</div>
    <span><i class="fab fa-twitter"></i></span>
  </a>
  <a href="#" class="icon instagram">
    <div class="tooltip">Instagram</div>
    <span><i class="fab fa-instagram"></i></span>
  </a>
  <a href="#" class="icon linkedin">
    <div class="tooltip">Linkedin</div>
    <span><i class="fab fa-linkedin"></i></span>
  </a>
</div>
</div></div>
</template>

<script>
import popup from '@/components/popup'
export default {
name : "post",
data() {
  return {
    pageId : "",
    pageToken : "",
    content: "hello world"
  }
},
methods: {
    async pages(){
          const res2 = await axios.get(`https://graph.facebook.com/v14.0/me/accounts?access_token=${this.token}`)
          this.pageName1 = res2.data.data[0].name;
          this.pageToken = res2.data.data[0].access_token;
          this.pageId = res2.data.data[0].id;
        },
        async post(){
          const res = await axios.post(`https://graph.facebook.com/v14.0/ pageToken/feed?message=${content}%20Fans!&access_token=${pageToken}`)
        }
},
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Montserrat:wght@100&display=swap');
.image-upload>input {
  display: none;
  cursor: pointer;
}
.fa {
  padding: 20px;
  font-size: 15px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 5px;
  border-radius: 50%;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
h3 { 
    margin-left:15px;
    font-family: 'Hind Siliguri', sans-serif;
}
h4 { 
    margin-left:15px;
    font-family: 'Hind Siliguri', sans-serif;
    text-align:center;
}
#textarea{
    width: 80%;
}
img{
    width: 30px;
}
.btn{
    background-color:#cd4cc3;
}
/*
    Auther: Abdelrhman Said
*/

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");


.wrapper{
    background: #ddd;
    padding: 50px;
    text-align: center;
}

.wrapper .icon{
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  display: inline-block;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #333;
  text-decoration: none;
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  line-height: 1.5;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background-color: #de463b;
  color: #ffffff;
}

</style>
