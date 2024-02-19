<template>
  <main>
    <form @submit.prevent="register" class="register-form">
      <h1>Register</h1>
      <div class="form-group">
        <label for="email">Correo:</label>
        <input v-model="email" type="email" id="email" placeholder="Correo" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input v-model="password" type="password" id="password" placeholder="Contraseña" />
      </div>
      <div class="form-group">
        <label for="equipo">Equipo:</label>
        <input v-model="equipo" type="text" id="equipo" placeholder="Equipo" />
      </div>
      <button type="submit" class="submit-button">Register</button>
    </form>

    <div v-if="registro" class="registered-info">
      <h2>Datos Registrados</h2>
      <p>Email: {{ registro.email }}</p>
      <p>Password: {{ registro.password }}</p>
      <p>Equipo: {{ registro.equipo }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const email = ref('');
const password = ref('');
const equipo = ref('');
const registro = ref<{ email: string; password: string, equipo: string } | null>(null);
const users = ref<{ email: string; password: string, equipo: string }[]>([]);
const emitRegistro = defineEmits(['registroUsuario']);

const register = () => {
  if (!email.value || !password.value) {
    alert('Completa todos los datos preferentemente');
    return;
  }

  const userExists = users.value.find(user => user.email === email.value);
  if (userExists) {
    alert('Correo no disponible, pruebe con otro');
    return;
  }

  registro.value = { email: email.value, password: password.value, equipo: equipo.value };
  users.value.push(registro.value);
  emitRegistro('registroUsuario', registro.value);
  alert('Todo ha sido registrado correctamente');
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.registered-info {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
