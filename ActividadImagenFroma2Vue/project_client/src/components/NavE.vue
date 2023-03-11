<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <BotNav />
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
            <RouterLink to="/help">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <v-btn class="bg-cyan-accent-1 btn btn-primary me-md-2">Help</v-btn>
                </div>
            </RouterLink>
        </v-app-bar>

        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>

<script>


import BotNav from "./BotNav.vue";
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'navBar',
    data: () => ({
    drawer: false }),

    components:{
        BotNav,
    }
})

</script>