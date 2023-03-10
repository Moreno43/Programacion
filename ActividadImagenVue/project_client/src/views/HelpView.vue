<template>
    <div>
        <navBar/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import navBar from "../components/NavE.vue";

export default defineComponent({
    name: 'helpV',
    components: {
        navBar,
    },
})
</script>