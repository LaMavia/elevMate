<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <footer class="fotter">
      ElevMate&copy; 2017 Tomasz "LastShadowPL" Surowiec
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
  width: 100vw;
  height: 200vh;
  background-image: linear-gradient(#eee, #ddd);
  overflow-x: hidden;
  &::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
  } 
  &::-webkit-scrollbar-thumb{
    background-color: #262626;
    border-radius: 6px;
  }
}
#app{
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
  color: #1b1b1b;
}
</style>
