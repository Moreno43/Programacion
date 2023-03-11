<template>
    <div>
        <v-btn v-for="(ruta,i) in rutas" :key="i" color="success" @click="$event => InsertarRuta(ruta.ruta)" block dark class="my-3">
            <span>{{ ruta.name }}</span>
        </v-btn>
    </div>
</template>

<script>
export default{
    name: 'BotNav',
    data: () =>({
        rutas : [
            {name: 'home', ruta: '/'},
            {name: 'about', ruta: '/about'},
            {name: 'help', ruta: '/help'},
            {name: 'project', ruta: '/project'},
            {name: 'Consulta', ruta: '/ConsulServe'},
        ]
    }),
    methods: {
        InsertarRuta(ruta){
            this.$router.push(ruta)
        }
    },
}

</script>