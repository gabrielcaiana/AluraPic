<template>
  <div class="painel" @dblclick="visivel = !visivel">
   <transition name="fade">
     <div class="parentImg" v-show="visivel">
       <slot name="imagem"></slot>
     </div>
    </transition>
    <h3>{{ titulo }}</h3>
  </div>
</template>

<script>
export default {
 data() {
   return {
     visivel: true
   };
 },
  props: ["titulo"],
};
</script>

<style  scoped>
.painel{
  width: 300px;
  height: 100%;
  background-color: #39364b;
  border-radius: 5px;
  box-shadow: 1px 1px 20px #37334d;
}

.parentImg {
 width: 100%;
 height: 350px;
}

.painel h3 {
 margin-top: 16px;
 padding: 16px 0;
 box-sizing: border-box;
  text-align: center;
  color: #fff;
}

.fade-enter {
 opacity: 0;
}
.fade-enter-active {
 transition: opacity .5s ease-out; 
}

.fade-leave-to { /* ending style */
  opacity: 0;
}
.fade-leave-active { /* leaving style */
  transition: opacity .5s ease-out;
}
</style>
