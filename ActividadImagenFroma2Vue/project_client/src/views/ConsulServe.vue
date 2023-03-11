<template>
    <div>
        <h1>hola</h1>
        <Img :items="Items" />
    </div>
</template>

<script>
import Img from '@/components/Img.vue';

export default {
    name: "Img",

    components: {
        Img
    },

    created() {
        this.cargarImagen();
    },

    data() {
        return {
            Items: [],
        }
    },

    methods: {
        cargarImagen: async function () {
            try {
                const setting = {
                    method: 'GET',
                }
                const url = "https://picsum.photos/v2/list?page=2&limit=100"
                const data = await fetch(url, setting);
                const json = await data.json();
                this.Items = json;
            } catch (err) {
                console.log(err)
            }
        }
    }

}
</script>