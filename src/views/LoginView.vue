<template>
    <div>
        <div class="">
            <label for="email"> Email: </label>
            <input id="email" type="text" v-model="email">
        </div>
        <div class="">
            <label for="pass"> Password: </label>
            <input id="pass" type="password" v-model="password">
        </div>
        <button :disabled=" !(email.length > 0 && password.length > 8) "> Login </button>

        <hr>
        <br>
        {{ email }}
        <br>
        {{ password }}

    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeMount } from "vue";
import type { Ref } from 'vue'

onBeforeMount(() => {
    console.log('Antes de crear')
})

onMounted(() => {
    console.log('Montado')
})

const email:Ref<string> = ref('')
const password:Ref<string> = ref('')
const error:Ref<boolean> = ref(true)

</script>


<style>
    div {
    padding: 20px;
    text-align: center;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

button:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}
</style>
