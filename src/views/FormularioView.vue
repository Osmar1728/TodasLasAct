<script setup lang="ts">
    import { ref } from 'vue';
    import Error from '@/components/Menu/Error.vue';
    import Perfil from '@/components/Perfil.vue';

    const nombre = ref('')
    const apellido = ref('')
    const años = ref(0)
    const genero = ref('')
    const equipo = ref('')
    const mensaje = ref('')
    const tipo = ref('')
    const jugador = ref({})

    const infoguardada = (e: any) => {
        e.preventDefault();
        
        if ([nombre.value, apellido.value, años.value, genero.value, equipo.value].includes('')) {
            mensaje.value = 'Llene todos los campos, de favor'
            tipo.value = 'error'
            return
        }

        if (nombre.value === apellido.value) {
            mensaje.value = 'Es inposible que se llame igual que su apellido'
            tipo.value = 'advertencia'
            return
        }

        if(años.value > 65){
            mensaje.value = 'No puede vivir mas de 65años'
            tipo.value = 'advertencia'
            return
        }

        if (nombre.value.length > 10) {
            mensaje.value = 'No ponggamas de 10 caracteres'
            tipo.value = 'advertencia'
            return
        }

        let solicitante = {
            nombre: nombre,
            apellido: apellido,
            años: años,
            genero: genero,
            equipo: equipo
        }

        console.log(jugador)
        jugador.value = solicitante
        mensaje.value = ''
        tipo.value = ''
    }

</script>

<template>
    <div class="fondo">
        <form v-on:submit="infoguardada" class="formulario">

            <div v-if="mensaje">
                <Error :prop1="mensaje" :prop2="tipo" />
            </div>

            <div class="campo">
                <label for="nombre"> Nombre: </label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Nombre"
                    v-model="nombre"
                >
            </div>

            <div class="campo">
                <label for="apellido">Apellido</label>
                <input 
                    id="apellido"
                    type="text" 
                    placeholder="Apellido(s)"
                    v-model="apellido"
                >
            </div>   

            <div class="campo">
                <label for="años">Años</label>
                <input 
                    id="años"
                    type="number" 
                    placeholder="Años"
                    v-model="años"
                >       
            </div>

            <div class="campo">
                <label for="genero"> Genero: </label>
                <select 
                        id="genero"
                        v-model= 'genero'
                    >
                        <option value="">Elija</option>
                        <hr>
                        <option value="Mujer"> Mujer </option>
                        <option value="Hombre"> Hombre </option>
                        <option value="Otro"> Otro </option>
                    </select>
            </div>

            <div class="campo">
                <label for="equipo"> equipo: </label>
                <input 
                    id="equipo"
                    type="string" 
                    placeholder="equipo"
                    v-model="equipo"
                >
            </div>

            <div class="boton">
                <input 
                    type="submit" 
                    value="Enviar"
                >
            </div>
        </form>
    </div>

        <div v-if="Object.keys(jugador).length">
            <Perfil :prop3="jugador"/>
        </div>

</template>

<style>
.fondo {
    background-color: #f0f0f0;
    padding: 20px;
}

.formulario {
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.campo {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

select {
    cursor: pointer;
}

.boton input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

.boton input[type="submit"]:hover {
    background-color: #0056b3;
}

.error {
    color: #dc3545;
    font-size: 14px;
}

.advertencia {
    color: #ffc107;
    font-size: 14px;
}
</style>
