<template>
  <div class="home">
    <h1>{{ titulo }}</h1>
    <p v-if="mensagem" class="centralizado">{{ mensagem }}</p>
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Filtro por parte do titulo"
    />

    <ul class="grid-images">
      <li v-for="(foto, index) of fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:scale.animate="1.1"
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <meu-botao
            @botaoAtivado="remove(foto)"
            tipo="button"
            rotulo="Remover"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva";
import Botao from "../shared/botao/Botao";
import transform from "../../directives/Transform";
export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  directives: {
    "meu-transform": transform,
  },
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: "",
      mensagem: "",
    };
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },
  methods: {
    remove(foto) {
      this.$axios.delete(`v1/fotos/${foto._id}`)
      .then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(
            indice,
            1
          )((this.mensagem = "Foto removida com sucesso"));
        },
        (err) => {
          console.log(err);
          this.mensagem = "Não foi possível excluir a foto";
        }
      );
    },
  },
  created() {
    this.$axios
      .get("v1/fotos")
      .then((response) => response.data)
      .catch((error) => console.log(error))
      .then((fotosDaApi) => (this.fotos = fotosDaApi));
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

@media (max-width: 1200px) {
  .grid-images {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
