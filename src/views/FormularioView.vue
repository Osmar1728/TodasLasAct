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
import { ref } from 'vue';
import type { Ref } from 'vue';
import type {ITarea} from '../interface/ITarea'


const tareas: Ref<any> = ref([])
const id: Ref<number> = ref(1)
const tarea = ref('')
const completed: Ref<boolean> = ref(false)

let mensaje = ref('')
let tipo = ref('')

const tareaGuardada = (e: any) => {
    
    e.preventDefault();
    
    if ([tarea.value].includes('')) {
        mensaje.value = 'Todos los datoss son obligatorios'
        tipo.value = 'error'
        return;
    }

    let registro = {
        id: id.value ++,
        title: tarea.value,
        completed: completed.value
    }


    tareas.value.push(registro);
    console.log(tareas);
    tarea.value = ''
    mensaje.value = ''
    tipo.value = ''
    
}


</script>

<style>

.container {
    font-size: 0; /* Elimina el espacio entre los elementos inline-block */
}

.element {
    width: 50%; /* Para que cada div ocupe el 50% del ancho del contenedor */
    display: inline-block; /* Establece que los div se muestren como elementos en línea */
    font-size: initial; /* Restablece el tamaño de fuente a su valor inicial */
    box-sizing: border-box; /* Para incluir el padding y el borde en el ancho total */
    justify-content: center;
}
    
</style>
