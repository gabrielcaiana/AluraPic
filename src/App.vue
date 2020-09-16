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
      fotos: [
        {
          url: "https://source.unsplash.com/collection/212527/800x500",
          titulo: "cachorro",
        },
        {
          url: "https://source.unsplash.com/collection/212527/800x500",
          titulo: "cachorrão",
        },
      ],
    };
  },
};
</script>

<style></style>
