<template>
  <form v-if="!submitted" class="post__form">
    <span class="section">title</span>
    <input v-model="blog.Title" type="text" class="post__title">
    <span class="section">Content</span>
    <textarea v-model.lazy="blog.Content" type="text" class="post__content"></textarea>
    <button type="submit" class="post__button" @click.prevent="post()">Post</button>
  </form>
</template>

<script>



export default {
  name: 'cms',
  data: function(){
    return{
      blog: {
        Title: "",
        Content: "",
        Date: ""
      },
      submitted: false
    }
  },
  methods: {
    post: function(){
      if(!this.blog.Title || !this.blog.Content){
        alert('No Title/Content');
        return;
      }
      let d = new Date();
      this.blog.Date = `${d.getDay() < 10 ? `0${d.getDay()}` : d.getDay()}.${d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth()}.${d.getFullYear()}`;
      this.$http.post('https://elevmate.firebaseio.com/Posts.json',this.blog)
        .then(function(data){
          console.log(data);
          this.submitted = true;
          alert('Submitted');
        })
    }    
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post__form{
  width: 70vw;
  height: 90vh;
  margin: 10vh auto 0 auto;

  .section{
    display: block;
    width: 50%;
    height: auto;
    font-size: 4vh;
    color: #1b1b1b;
    text-align: center;
    text-transform: uppercase;
    margin: auto;
  }
  .post__title, .post__content{
    border: none;
    box-shadow: 0px 0px 7px 1px #3c3c3c;
  }
  .post__title{
    --h: 5vh;
    width: 80%;
    height: var(--h);
    padding-left: 1%;
    margin: 0 10% 5vh 10%;
    font-size: calc(var(--h) / 1.5);
  }
  .post__content{
    width: 100%;
    height: 50vh;
    font-size: 3vh !important;
    color: #1b1b1b !important;
    padding: 1%;
    font-kerning: 1%;
    word-spacing: 3px;
  }
  .post__button{
    width: 40%;
    height: 5vh;
    border-radius: 15px;
    background-color: #3c3c3c;
    border: none;
    margin: 0 30%;
    color: #fff;
    font-size: 3vh;
    text-transform: uppercase;
  }
}
</style>