<template>
    <div>
        <RouterLink :to="data.path">{{ data.name }}</RouterLink>
    </div>
</template>
<script lang="ts" setup>
import type ImenuItem from '@/interface/IMenuItem';

const data = defineProps<ImenuItem>()
</script>
