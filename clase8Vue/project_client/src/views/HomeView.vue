<template>
  <div>
    <NavE>
      <HelloWorld />
    </NavE>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import NavE from '@/components/NavE.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,NavE,
  },
});
</script>
