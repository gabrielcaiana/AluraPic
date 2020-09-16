<template>
  <div class="corpo">
    <h1>{{ titulo }}</h1>
    <ul class="grid-images">
      <li v-for="(foto, index) of fotos" :key="index">
        <img :src="foto.url" :alt="foto.titulo" />
        <h3>{{foto.titulo}}</h3>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: gray;
    background-color: #18171E;
    box-sizing: border-box;
  }
  .grid-images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0;
    margin-top: 32px;
  }
  .grid-images li {
    list-style: none;
    height: 400px;
    background-color: #39364b;
    border-radius: 5px;
  }
  .grid-images li img {
    width: 300px;
    height: 80%;
    object-fit: cover;
    border-radius: 4px 4px 0 0 ;
  }
  .grid-images li h3 {
    margin-top: 16px;
    text-align: center;
    color: #fff;
  }
</style>

