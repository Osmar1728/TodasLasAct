<template>
  <div>
      <!---->
      <button @click="click($event)">Click</button>
      <PostItem 
          @say-hi="click($event)"
          v-bind="post" 
          v-for="(post, index) in PostData" 
          :key="index"/>
  </div>
</template>
<script lang="ts" setup>
  import PostData from '@/data/PostData'
  import PostItem from './PostItem.vue'
  const click = (event:any) => {
      alert('Hola desde el padre SOY YO OSMAR CASILLAS GALLARDO ' + event)
  }
</script>
<style scoped></style>