<template>
  <div class="painel">
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
}

.painel img {
  height: 80%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
}

.painel h3 {
  margin-top: 16px;
  text-align: center;
  color: #fff;
}
</style>
