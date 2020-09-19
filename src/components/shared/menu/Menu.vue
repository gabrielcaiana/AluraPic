<template>
    <nav class="menu">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link class="menu-link"
            :to="route.path ? route.path : '/'">{{ route.titulo }}
           </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
 props: {
   routes: {
     type: Array,
     required: true
   }
 }
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
}

.menu ul {
  display: flex;
  list-style-type: none;
}

.menu-link{
  color: #fff;
  text-decoration: none;
  margin-left: 16px;
  font-size: 18px;
}

.menu-link:hover {
  color: rgb(173, 173, 173);
}
</style>