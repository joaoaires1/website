<template>
    <div id="app">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      
      <div class="nav">
        <router-link to="/"> <img src="./assets/home.svg" alt=""> Home</router-link>
        <router-link to="/projects"> <img src="./assets/code.svg" alt=""> Portifolio</router-link>
      </div>
    </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: 10px;
  border-top: 1px solid #eee;
  background: #fff;
  z-index: 10;
}

.nav a {
  text-decoration: none;
  color: #772ce8;
  margin-right: 15px;
  font-weight: bold;
  letter-spacing: .03em;
  display: flex;
  align-items: center;
}

.nav img {
  width: 25px;
  margin-right: 4px;
}
</style>
