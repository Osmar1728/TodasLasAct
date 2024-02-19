<template>
    <div class="crud-view">
        <h1>USTED HA INGRESADO CORRECTAMENTE A SU CORREO</h1>
        <H4>BIENVENIDO AL CRUD DE JUGADORES</H4>
        <table>
            <thead>
                <tr>
                    <th class="th-color">Nombre</th>
                    <th class="th-color">Equipo</th>
                    <th class="th-color">Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.equipo }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const users = ref([
    { id: 1, name: 'LIONEL MESSI', equipo: 'BARCELONA - ARGENTINA', email: 'messi@gmail.com' },
    { id: 2, name: 'ANGEL ZALDIVAR', equipo: 'Guadalajara - México', email: 'zaldivar@gmail.com' },
    { id: 3, name: 'Osmar Casillas', equipo: 'Atlas - México', email: 'osmar@gmail.com' },
    { id: 4, name: 'Ruud Guilit', equipo: 'Milan - Holanda', email: 'guilit@gmail.com' },
    { id: 5, name: 'Ismael Sosa', equipo: 'Pumas - Argentina', email: 'sosa@gmail.com' },
    { id: 6, name: 'Zico', equipo: 'Udinese - Brasil', email: 'zico@gmail.com' },
]);
</script>

<style>
.crud-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: black;
    text-align: center;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

h4 {
    font-size: 18px;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #007bff;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}

.th-color {
    color: white;
}
</style>