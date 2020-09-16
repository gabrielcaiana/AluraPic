<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="(foto, index) of fotos" :key="index">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "AluraPic",
      fotos: []
    };
  },
  created() {
    this.$http.get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(fotosDaApi => this.fotos = fotosDaApi, err => console.log(err))
  }
};
</script>

<style></style>
