<template>
  <div class="painel">
   <slot name="img"></slot>
   <h3>{{ titulo }}</h3>
  </div>
</template>

<script>
export default {
  props: ["titulo"],
};
</script>

<style scoped>
.painel {
  width: 300px;
  height: 400px;
  background-color: #39364b;
  border-radius: 5px;
  box-shadow: 1px 1px 20px #37334d;
}

.painel img {
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
}

.painel h3 {
  margin-top: 24px;
  text-align: center;
  color: #fff;
}
</style>
