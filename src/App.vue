<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: gray;
    background-color: #18171E;
    padding: 32px 0 ;
  }
</style>

