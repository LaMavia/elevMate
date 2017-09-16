<template>
  <main class="posts__list">
      <article class="post__link" v-for="post in posts" v-bind:key="post.id">
        <router-link :to="{name: 'post', params: { postId: posts.indexOf(post), body: post}}" class="post__link__title">
          #{{ posts.indexOf(post) + 1}} {{ post.Title }}
        </router-link>
        <time class="post__link__date">
          {{ post.Date}}
        </time>
        <p class="post__link__text" :class="{'post__link__text-extended': post.isExtended}">
          {{ post.Content }}
        </p>
        <button class="post__text__extend icon-down-open">

        </button>
      </article>
  </main>
</template>

<script>
import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCf7xe3IUcs2n1F-3fFOl9LTD3oT-WX1ho",
    authDomain: "elevmate.firebaseapp.com",
    databaseURL: "https://elevmate.firebaseio.com",
    projectId: "elevmate",
    storageBucket: "elevmate.appspot.com",
    messagingSenderId: "811310525635"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let postsRef = db.ref('Posts')
console.log(postsRef);


export default {
	name: 'posts',
	firebase: {
		posts: postsRef
	},
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Righteous');
@import url('https://fonts.googleapis.com/css?family=Concert+One');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
  --postLinkH: 20vh;
  --mainFont: 'Righteous', cursive;
  --secFont: 'Concert One', cursive;
}

.posts__list{
  width: 60%;
  height: auto;
  padding: 9vh 0 9vh 0;
  margin: auto;
  display: flex;
  flex-flow: column-reverse wrap;
  //border: 2px solid #1b1b1b;

  .post__link{
    width: 100%;
    min-height: 15vh;
    height: auto;
    max-height: 60vh;
    border-bottom: 1.5px solid #1b1b1b;
    margin-bottom: 3vh;
    will-change: height;
    //border: 2px dashed #1b1b1b;

    .post__link__title{
      display: block;
      font-size: calc(var(--postLinkH) / 4);
      width: 40%;
      height: auto;
      min-height: 20%;
      max-height: 40%;
      font-weight: 800;
      font-family: var(--mainFont);
      text-transform: capitalize;
      color: #1b1b1b;
      text-decoration: none;
      will-change: text-decoration;
      transition: transform .5s 0s;
      &:hover, &:focus{
        transition: transform .5s 0s, text-decoration .5s 0s  ;
        transform: translateX(-2%);
        text-decoration: underline #00ffff;
        outline: none;
      }
    }
    .post__link__date{
      width: 100%;
      height: auto;
      max-height: 10%;
      font-size: calc(var(--postLinkH) / 7);
      color: #3c3c3c;
      font-weight: 800;
      padding-left: 1%;
    }
    .post__link__text{
      width: 100%;
      height: auto;
      min-height: 40%;
      max-height: 50%;
      font-size: calc(var(--postLinkH) / 6);
      padding-left: 2%;
    }
    .post__text__extend{
      --h: 4vh;
      width: 100%;
      height: var(--h);
      font-size: calc(var(--h) / 1.1);
      text-align: center;
      color: #3c3c3c;
      background-color: transparent;
      border: none;
      transition: color .5s 0s;
      margin: .5vh 0 1vh 0; 
      &:hover, &:focus{
        transition: color .5s 0s;
        color: #00ffff;
        outline: none;
      }
    }
    .post__link__text-extended{

    }
  }
}
</style>