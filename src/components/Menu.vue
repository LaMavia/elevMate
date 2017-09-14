<template>
  <header id="menu" class="menu">
    <h1 class="logo"><router-link to="/home" class="logo__link">{{ logo }}</router-link></h1>
    <nav class="nav">
      <ul class="nav__links">
        <router-link :class="{'active': page.isActive}  " :to="page.name" class="nav__link" v-for="page in pages" :key="page.id">
          <span :class="[page.icon, linkClass]"></span>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'menu',
  methods: {
  },
  mounted: function(){
    this.$nextTick((e) => console.log('Menu loaded'));
  },
  data: function(){
    return{
    logo: 'ElevMate',
    linkClass: 'nav__link__icon',
    pages: [
      {name: 'home',  icon: 'icon-home',      isActive: false}, 
      {name: 'posts', icon: 'icon-newspaper', isActive: false}, 
      {name: 'about', icon: 'icon-phone',     isActive: false} 
    ]
    }
  },
  functions: {

  }
}

</script>

<style lang="scss">
//Import your icons
@import url('../css/fontello.css');
//^^^^
@import url('https://fonts.googleapis.com/css?family=Righteous');
@import url('https://fonts.googleapis.com/css?family=Concert+One');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media only screen and (min-width: 1367px){
:root{
  --h: 5vh;
  --navItemSize: calc(var(--h) / 1.5);
  --LogofontSize: calc(var(--h) * 1.1);
  --mainFont: 'Righteous', cursive;
  --secFont: 'Concert One', cursive;
  --navItemfontSize: calc(var(--navItemSize) / 1.7);
  --lineHeight: calc(var(--h) + (var(--h) / 20));
  --navLineHeight: calc(var(--navItemSize) + (var(--navItemSize) / 20));
  --logoColor: #fff;
  --color: #00ffd0;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--h);
  background-color: #2c2c2c;
  border-bottom: 4px solid #3d3d3d;

  .logo{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .logo__link{
      color: var(--logoColor);
      transition: color 10s 0s;
      text-decoration: none;
      line-height: calc(var(--lineHeight) * 1.7);
      text-shadow: 2px 2px 4px #2c2c2c;
      font-size: var(--LogofontSize);
      font-family: var(--mainFont);
      transition:
        text-shadow .5s 0s
      ;
      &:hover, &:focus{
        outline: none;
        text-shadow: 2px 2px 4px #00ffff;
        transition:
          text-shadow .5s 0s
        ;
      }
    }
  }

  .nav{
    width: 40%;
    height: 100%;

    .nav__links{
      display: flex;
      flex-flow: row nowrap;
    }
    .nav__link{
      display: block;
      width: var(--navItemSize);
      height: var(--navItemSize);
      background-color: #fff;
      line-height: var(--navLineHeight);
      text-align: center;
      border-radius: 50%;
      margin: calc((var(--h) - var(--navItemSize)) / 2) 2%;
      box-shadow: 0px 0px 1px 2px #1b1b1b;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      transform-origin: 50% -50%;
      
      &:hover, &:focus{
        outline: none;
        transform: translateY(10%) scale(1.2);
        border-radius: 0;
        transition: 
          transform .5s 0s,
          border-radius .5s 0s
        ;
        .nav__link__icon{
          color: #00ffd0;
          transition: color .5s 0s;
        }
      }

      .nav__link__icon{
        color: #1b1b1b;
        font-size: var(--navItemfontSize);
        transition: color .5s 0s;
      }
    }
    .active{
      outline: none;
      transform: translateY(10%) scale(1.2);
      border-radius: 0;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      .nav__link__icon{
        color: #00ffd0;
        transition: color .5s 0s;
      }
    }
  }
}}
@media only screen and (min-width: 1025px) and (max-width: 1366px){
:root{
  --h: 7vh;
  --navItemSize: calc(var(--h) / 1.3);
  --LogofontSize: calc(var(--h) * 0.9);
  --mainFont: 'Righteous', cursive;
  --secFont: 'Concert One', cursive;
  --navItemfontSize: calc(var(--navItemSize) / 1.7);
  --lineHeight: calc(var(--h) + (var(--h) / 20));
  --navLineHeight: calc(var(--navItemSize) + (var(--navItemSize) / 20));
  --logoColor: #fff;
  --color: #00ffd0;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--h);
  background-color: #2c2c2c;
  border-bottom: 4px solid #3d3d3d;

  .logo{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .logo__link{
      color: var(--logoColor);
      transition: color 10s 0s;
      text-decoration: none;
      line-height: calc(var(--lineHeight) * 1.8);
      text-shadow: 2px 2px 4px #2c2c2c;
      font-size: var(--LogofontSize);
      font-family: var(--mainFont);
      transition:
        text-shadow .5s 0s
      ;
      &:hover, &:focus{
        outline: none;
        text-shadow: 2px 2px 4px #00ffff;
        transition:
          text-shadow .5s 0s
        ;
      }
    }
  }

  .nav{
    width: 40%;
    height: 100%;

    .nav__links{
      display: flex;
      flex-flow: row nowrap;
    }
    .nav__link{
      display: block;
      width: var(--navItemSize);
      height: var(--navItemSize);
      background-color: #fff;
      line-height: var(--navLineHeight);
      text-align: center;
      border-radius: 50%;
      margin: calc((var(--h) - var(--navItemSize)) / 2) 4%;
      box-shadow: 0px 0px 1px 2px #1b1b1b;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      transform-origin: 50% -50%;
      
      &:hover, &:focus{
        outline: none;
        transform: translateY(10%) scale(1.2);
        border-radius: 0;
        transition: 
          transform .5s 0s,
          border-radius .5s 0s
        ;
        .nav__link__icon{
          color: #00ffd0;
          transition: color .5s 0s;
        }
      }

      .nav__link__icon{
        color: #1b1b1b;
        font-size: var(--navItemfontSize);
        transition: color .5s 0s;
      }
    }
    .active{
      outline: none;
      transform: translateY(10%) scale(1.2);
      border-radius: 0;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      .nav__link__icon{
        color: #00ffd0;
        transition: color .5s 0s;
      }
    }
  }
}}

@media only screen and (min-width: 500px) and (max-width: 1024px){
:root{
  --h: 7vh;
  --navItemSize: calc(var(--h) / 1.3);
  --LogofontSize: calc(var(--h) * 0.9);
  --mainFont: 'Righteous', cursive;
  --secFont: 'Concert One', cursive;
  --navItemfontSize: calc(var(--navItemSize) / 1.7);
  --lineHeight: calc(var(--h) + (var(--h) / 20));
  --navLineHeight: calc(var(--navItemSize) + (var(--navItemSize) / 20));
  --logoColor: #fff;
  --color: #00ffd0;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--h);
  background-color: #2c2c2c;
  border-bottom: 4px solid #3d3d3d;

  .logo{
    position: fixed;
    top: 0;
    right: 1%;

    .logo__link{
      color: var(--logoColor);
      transition: color 10s 0s;
      text-decoration: none;
      line-height: var(--lineHeight);
      text-shadow: 2px 2px 4px #2c2c2c;
      font-size: var(--LogofontSize);
      font-family: var(--mainFont);
      transition:
        text-shadow .5s 0s
      ;
      &:hover, &:focus{
        outline: none;
        text-shadow: 2px 2px 4px #00ffff;
        transition:
          text-shadow .5s 0s
        ;
      }
    }
  }

  .nav{
    width: 40%;
    height: 100%;

    .nav__links{
      display: flex;
      flex-flow: row nowrap;
    }
    .nav__link{
      display: block;
      width: var(--navItemSize);
      height: var(--navItemSize);
      background-color: #fff;
      line-height: var(--navLineHeight);
      text-align: center;
      border-radius: 50%;
      margin: calc((var(--h) - var(--navItemSize)) / 2) auto;
      box-shadow: 0px 0px 1px 2px #1b1b1b;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      transform-origin: 50% -50%;
      
      &:hover, &:focus{
        outline: none;
        transform: translateY(10%) scale(1.2);
        border-radius: 0;
        transition: 
          transform .5s 0s,
          border-radius .5s 0s
        ;
        .nav__link__icon{
          color: #00ffd0;
          transition: color .5s 0s;
        }
      }

      .nav__link__icon{
        color: #1b1b1b;
        font-size: var(--navItemfontSize);
        transition: color .5s 0s;
      }
    }
    .active{
      outline: none;
      transform: translateY(10%) scale(1.2);
      border-radius: 0;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      .nav__link__icon{
        color: #00ffd0;
        transition: color .5s 0s;
      }
    }
  }
}}

@media only screen and (max-width: 499px){
:root{
  --h: 8.5vh;
  --navItemSize: calc(var(--h) / 1.3);
  --LogofontSize: calc(var(--h) * 0.9);
  --mainFont: 'Righteous', cursive;
  --secFont: 'Concert One', cursive;
  --navItemfontSize: calc(var(--navItemSize) / 1.7);
  --lineHeight: calc(var(--h) + (var(--h) / 20));
  --navLineHeight: calc(var(--navItemSize) + (var(--navItemSize) / 20));
  --logoColor: #fff;
  --color: #00ffd0;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--h);
  background-color: #2c2c2c;
  border-bottom: 4px solid #3d3d3d;

  .logo{
    display: none;
  }

  .nav{
    width: 100%;
    height: 100%;

    .nav__links{
      display: flex;
      flex-flow: row nowrap;
    }
    .nav__link{
      display: block;
      width: var(--navItemSize);
      height: var(--navItemSize);
      background-color: #fff;
      line-height: var(--navLineHeight);
      text-align: center;
      border-radius: 50%;
      margin: calc((var(--h) - var(--navItemSize)) / 2) auto;
      box-shadow: 0px 0px 1px 2px #1b1b1b;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      transform-origin: 50% -50%;
      
      &:hover, &:focus{
        outline: none;
        transform: translateY(10%) scale(1.2);
        border-radius: 0;
        transition: 
          transform .5s 0s,
          border-radius .5s 0s
        ;
        .nav__link__icon{
          color: #00ffd0;
          transition: color .5s 0s;
        }
      }

      .nav__link__icon{
        color: #1b1b1b;
        font-size: var(--navItemfontSize);
        transition: color .5s 0s;
      }
    }
    .active{
      outline: none;
      transform: translateY(10%) scale(1.2);
      border-radius: 0;
      transition: 
        transform .5s 0s,
        border-radius .5s 0s
      ;
      .nav__link__icon{
        color: #00ffd0;
        transition: color .5s 0s;
      }
    }
  }
}}
</style>