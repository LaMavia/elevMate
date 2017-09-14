<template>
  <main class="posts__list">
      <article class="post__link" v-for="post in posts" v-bind:key="post.id">
        <h1 class="post__link__title">
          {{ post.Title }}
        </h1>
        <p class="post__link__text">
          {{ post.Content }}
        </p>
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
  padding: 7vh 0 7vh 0;
  margin: auto;
  display: flex;
  flex-flow: column wrap;
  //border: 2px solid #1b1b1b;

  .post__link{
    width: 100%;
    height: 20vh;
    //border: 2px dashed #1b1b1b;
    .post__link__title{
      display: block;
      font-size: calc(var(--postLinkH) / 3);
      width: 100%;
      height: auto;
      font-weight: 600;
      font-family: var(--mainFont);
    }
  }
}
</style>