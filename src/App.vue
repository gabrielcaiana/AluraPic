<template>
  <div class="container">
    <menu-page :routes="routes"></menu-page>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu"
import { routes } from "./routes"
export default {
  components: {
    'menu-page': Menu
  },
  data() {
    return {
      routes
    }
  }
};
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: gray;
    background-color: #18171E;
    padding: 32px 0 ;
  }

.page-enter {
 opacity: 0;
}
.page-enter-active {
 transition: opacity .5s ease-out; 
}

.page-leave-to { /* ending style */
  opacity: 0;
}
.page-leave-active { /* leaving style */
  transition: opacity .5s ease-out;
}
</style>

