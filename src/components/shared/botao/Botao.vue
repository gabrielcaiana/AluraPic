<template>
  <button class="botao" :class="estiloDoBotao" @click="disparaAcao()" :type="tipo">
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
   tipo: {
    required: true,
    type: String
   },

   rotulo: {
    required: true,
    type: String
   },

   confirmacao: {
    required: false,
    type: Boolean
   },

   estilo: {
    required: false,
    type: String
   }

  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirmar exclusão?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
      return[]
    },
  },
};
</script>

<style scoped>
.botao {
  max-width: 200px;
  height: 42px;
  padding: 0 16px;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  margin: 16px 0;
}

.botao-perigo {
  background-color: firebrick;
  color: white;
}

.botao-padrao {
  background-color: darkcyan;
  color: white;
}
</style>
