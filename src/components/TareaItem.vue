<template>
    <div class="card">
        <div class="container">
            <p>
                <span style="font-size: 30px;">ID: </span> 
                <span> {{ tarea.id }}</span>
            </p>
            <p>
                <span style="font-size: 30px;">Tarea: </span>
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
import { Tareaa } from '@/interface/ITarea';
const tarea = defineProps<Tareaa>();
let completa = ref(tarea.completed);
const realizada = () => {
    completa.value = true;
}
</script>

<style>
    .card .container {
        margin: 100px;
    }
</style>
