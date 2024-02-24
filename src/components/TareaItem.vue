<template>
    <div class="card">
        <div class="container">
            <p>
                <span style="font-weight: bold;">ID: </span> 
                <span> {{ tarea.id }}</span>
            </p>

            <p>
                <span style="font-weight: bold;">Tarea: </span>
                <span>{{ tarea.title }}</span>
            </p>

            <p>
                <span style="font-weight: bold;">Estado: </span>
                <span>{{ completa ? 'Verdad o Falso' }}</span>
            </p>

            <button v-if="completa === false" @click="realizada()">
                Tarea hecha
            </button>


        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import type ITarea  from ITarea;
const tarea = defineProps<ITarea>();
let completa = ref(tarea.completed);


const realizada = () => {
    completa.value = true;
}
</script>

<style>

    .card{
        margin: 1%;
        border: 1px solid blue;
    }

    .card .container {
        margin: 3%;
    }

</style>
