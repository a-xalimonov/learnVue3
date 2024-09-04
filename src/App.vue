<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/declarative_rendering">Declarative Rendering</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  background-color: rgb(226, 226, 226);
}

main {
  height: 100vh;
  width: 100vw;
}

nav {
  min-width: 300px;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
}

nav a {
  text-decoration: none;
  color: rgb(9, 40, 87);
  transition: 0.4s;
  padding: 6px;
  font-size: 20px;
}

nav a:hover {
  background-color: rgb(236, 236, 236);
}
</style>
