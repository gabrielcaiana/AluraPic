<template>
  <div class="corpo">
    <h1>{{ titulo }}</h1>
    <ul class="grid-images">
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

<style scoped>
  .corpo {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: gray;
  }
  .grid-images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0;
  }
  .grid-images li {
    list-style: none;
  }
  .grid-images li img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
  }
</style>

