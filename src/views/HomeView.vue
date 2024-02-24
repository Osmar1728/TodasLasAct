<script setup lang="ts">

import { ref } from 'vue';
const nombre = ref('');
const error = ref(true) 



const checarValidacion = () => {

  if (nombre.value.length < 5) {
    error.value = false
  }else{
    error.value = true
  }

}

</script>

<template>
  <main>
    <h2>This is Home!</h2>
    <h3>My name is: </h3>
    <input :on-input="checarValidacion()" type="text" v-model="nombre">

    <h3 :class="{ 'error' : error }"> {{ nombre }} </h3>
  </main>
</template>

<style>
  .error{
    color: #d03
  }

  .verdad{
    color: rgb(0, 221, 136)
  }
</style>
