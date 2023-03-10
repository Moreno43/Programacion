<template>
  <div class="about">
    <navBar />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import navBar from "../components/NavE.vue";

export default defineComponent({
  name: 'AboutView',

  components: {
    navBar,
  },
});
</script>