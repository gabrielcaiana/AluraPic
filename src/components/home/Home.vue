<template>
  <div class="home">
    <h1>{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtro por parte do titulo">
    
    <ul class="grid-images">
      <li v-for="(foto, index) of fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform.animate.reverse="25" :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao 
          @botaoAtivado="remove(foto)" 
          tipo="button" 
          rotulo="Remover"
          :confirmacao="false"
          estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from "../shared/painel/Painel"
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva"
import Botao from "../shared/botao/Botao"
export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: ""
    };
  },
  computed: {
    fotosComFiltro(){
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i")
        return this.fotos.filter(foto => exp.test(foto.titulo) )
      }else {
        return this.fotos
      }
    }
  },
  methods: {
    remove(foto) {
        alert(`Foto ${foto.titulo} removida com sucesso!`)
    }
  },
  created() {
  this.$axios.get("http://localhost:3000/v1/fotos")
  .then((response) => response.data)
  .catch((error) => console.log(error))
  .then((fotosDaApi) => this.fotos = fotosDaApi)
  },
};
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .filtro {
    padding: 16px;
    width: 300px;
    margin-top: 16px;
    border: none;
    background-color: #37334d;
    color: #fff;
    border-radius: 5px;
  }
  
  .filtro:focus {
    outline: none;
    border: 1px solid #fff;
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

