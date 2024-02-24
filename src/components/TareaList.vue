<template>

    <div>
        <h1>Lista de tareas</h1>
        <div>
            <TareaItem v-for="(tarea, index) in tareas" :id="tarea.id" :title="tarea.title" :completed="tarea.completed" :key="index" />
        </div>
    </div>

</template>

<script setup lang="ts">
import TareaItem from './TareaItem.vue';

const props = defineProps(['tareas']);

</script>

<style>
    
</style>
