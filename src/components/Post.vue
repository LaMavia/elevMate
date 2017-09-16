<template>
  <article class="post">
    <h1 class="post__title">{{ body.Title }}</h1>
    <h1 class="post__date">{{ body.Date }}</h1>
    <p class="post__body">{{ body.Content }}</p>
  </article>
</template>

<script>



export default {
  name: 'post',
  props: ['postId', 'body'],
  data: function(){
    return{
      
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
.post{
  width: 70vw;
  min-height: 40vh;
  height: auto;
  margin: 10vh auto 0 auto;
  display: flex;
  flex-flow: column wrap;

  .post__title{
    font-size: 6vh;
    text-align: center;
    color: #2c2c2c;
    text-shadow: 0px 0px .5px #1b1b1b;
    text-decoration: underline;
  }
  .post__date{
    margin-bottom: 2.5vh;
    text-align: center;
    color: #3c3c3c;
  }
  .post__body{
    width: 100%;
    height: auto;
    font-size: 3vh;
  }
}
</style>