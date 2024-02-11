<template>
  <ul>
    <li v-for="(item, index) in dataList" :key="index" :style="{ backgroundColor: item.backgroundColor, color: item.textColor}">
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface DataItem {
  text: string;
  backgroundColor: string;
  textColor: string;
}

export default defineComponent({
  props: {
    dataList: {
      type: Array as PropType<DataItem[]>,
      required: true
    }
  },
  methods: {

  }
});
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  text-align: center;
}
button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #1900ff;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
}

li:hover {
  background-color: #e5e5e5;
}
</style>
