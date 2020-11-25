<template>
  <div class="cadastro">
    <h1 v-if="foto._id" class="centralizado">Editar Foto</h1>
    <h1 v-else class="centralizado">Cadastrar Foto</h1>

    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="grava(foto)">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo" />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url" />
        <imagem-responsiva
          v-show="foto.url"
          :url="foto.url"
          :titulo="foto.titulo"
        />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao">
        </textarea>
      </div>

      <div class="centralizado">{{ mensagem }}</div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link :to="{ name: 'home' }"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../../domain/foto/Foto";
import axios from "@/axios";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  data: function() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
      mensagem: "",
    };
  },
  created() {
    if (this.id) {
      axios
        .get(`v1/fotos`)
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .then((fotoAPI) => {
          fotoAPI.map((foto) => {
            if (foto._id == this.id) {
              this.foto = foto;
            }
          });
        });
    }
  },
  methods: {
    grava(foto) {
      if (this.id) {
        axios
          .put(`v1/fotos/${foto._id}`, this.foto)
          .then(() => {
            this.$router.push({name: 'home'})
          })
          .catch(() => (this.mensagem = "Não foi possível atualizar a foto"));
      } else {
        axios.post("v1/fotos", this.foto).then(
          () => (this.foto = new Foto()),
          (err) => console.log(err)
        );
      }
    },
  },
};
</script>
<style scoped>
.cadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}

form {
  width: 100%;
}

.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
