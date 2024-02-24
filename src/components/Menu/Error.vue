<script setup lang="ts">
    const props = defineProps(['prop1', 'prop2']);
    console.log(props.prop2)
    const tipo = 'alerta'
</script>

<template>
    <div>
        {{ prop1 }}
    </div>
</template>
