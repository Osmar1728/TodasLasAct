<template>
  <main>
    <form @submit.prevent="login">
      <h1>Login</h1>
      <input v-model="email" type="email" placeholder="Email Address" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('it.mx@shawellness.com'); 
const password = ref('Sha2024.'); 
const login = () => {
  if (email.value === 'it.mx@shawellness.com' && password.value === 'Sha2024.') {
    alert('Usted logró acceder a su correo de manera éxitosa');
    router.push('/crud');
  } else {
    alert('Usuario y/o contraseña incorrectos. Valide de nuevo');
  }
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./angel.jpg');
  background-size: cover;
  background-position: center;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

input[type="email"],
input[type="password"],
button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>