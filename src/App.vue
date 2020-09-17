<template>
  <div class="corpo">
    <h1>{{ titulo }}</h1>
    <ul class="grid-images">
      <li v-for="(foto, index) of fotos" :key="index">

        <meu-painel :titulo="foto.titulo">
          <img slot="img" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel"
export default {
  components: {
    'meu-painel': Painel
  },
  data() {
    return {
      titulo: "AluraPic",
      fotos: []
    };
  },
  created() {
  this.$axios.get("http://localhost:3000/v1/fotos")
  .then((response) => response.data)
  .catch((error) => console.log(error))
  .then((fotosDaApi) => this.fotos = fotosDaApi)

    // this.$http.get("http://localhost:3000/v1/fotos")
    //   .then((res) => res.json())
    //   .then(fotosDaApi => this.fotos = fotosDaApi, err => console.log(err))
  },
};
</script>

<style scoped>
  .corpo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: gray;
    background-color: #18171E;
    padding: 32px 0 ;
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
  }

  @media (max-width:1200px) {
    .grid-images {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

</style>

