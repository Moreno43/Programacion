<script setup>
import {ref} from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
let dato = ref(0)
let numArray = ref([])

const sumar = () => dato.value++
const resta = () => dato.value--
const reset = () => dato.value = 0

const agregar = () => {
  numArray.value.push(dato.value);
};

// const verificar = computed(() => {
//   return numArray.value.includes(dato.value);
// });
</script>

<template>
  <h1 :class="dato >0 ? 'positivo' : 'negativo'">{{ dato }}</h1>
  <h2>{{ numArray }}</h2>
  <button @click="resta">-</button>
  <button @click="sumar">+</button>
  <button @click="reset">reset</button>
  <button v-if="!verificar" @click="agregar">Agregar</button>
</template>

<style scoped>
.positivo{
  color:green;
}
.negativo{
  color:red;
}
</style>
