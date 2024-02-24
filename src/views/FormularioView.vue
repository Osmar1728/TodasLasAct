<template>
    <div class="container">
        <div class="element">
        <form v-on:submit="tareaGuardada" class="formulario">
            <div v-if="mensaje">
                <Error :prop1="mensaje" :prop2="tipo" />
            </div>
            <div class="datos">
                <label for="tarea">Agregar tarea:</label>
                <input 
                    id="tarea"
                    type="text"
                    v-model="tarea"
                >
            </div>
            <div class="boton">
                <input 
                    type="submit" 
                    value="Asignar"
                >
            </div>
        </form>
        </div>
        <div class="element" >
            <TareasList :tareas="tareas" />
        </div>
        
    </div>

</template>

<script setup lang="ts">

import Error from '@/components/Error.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';





const tareas: Ref<any> = ref([])
const id: Ref<number> = ref(1)
const tarea = ref('')
const completed: Ref<boolean> = ref(false)

let mensaje = ref('')
let tipo = ref('')

const tareaGuardada = (e: any) => {
    
    e.preventDefault();
    
    if ([tarea.value].includes('')) {
        mensaje.value = 'Debes tener todos los campos llenos'
        tipo.value = 'error'
        return;
    }

    let registro = {
        id: id.value ++,
        title: tarea.value,
        completed: completed.value
    }

    tareas.value.push(registro);
    tarea.value = ''
    mensaje.value = ''
    tipo.value = ''
    
}
</script>
