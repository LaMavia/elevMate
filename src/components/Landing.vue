<template>
  <main class="landing__wrapper">
    <Posts/>
  </main>
</template>

<script>
import Posts from './Posts'
export default {
  name: 'landing',
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

.landing__wrapper{
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column wrap;
}

</style>