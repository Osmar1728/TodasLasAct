<template>
  <div id="app">
    <ListaDeDatos />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListaDeDatos from './components/ListaDeDatos.vue';

export default defineComponent({
  name: 'App',
  components: {
    ListaDeDatos
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-image: url('angel.jpg');
  background-size: auto;
  background-position: 50%;
}

#app {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
