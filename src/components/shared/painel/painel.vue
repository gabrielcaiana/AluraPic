<template>
  <div class="painel" @dblclick="visivel = !visivel">
    <div v-show="visivel">
      <slot name="img"></slot>
    </div>
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

<style scoped>
.painel{
  width: 300px;
  height: 100%;
  background-color: #39364b;
  border-radius: 5px;
  box-shadow: 1px 1px 20px #37334d;
}

.painel div {
 width: 100%;
 height: 80%;
}

.painel img {
  width: 100%;
  height: 100%;
  min-height: 350px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
}

.painel h3 {
 margin-top: 16px;
 padding: 16px 0;
 box-sizing: border-box;
  text-align: center;
  color: #fff;
}
</style>
