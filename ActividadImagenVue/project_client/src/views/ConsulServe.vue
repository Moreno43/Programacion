<template>
    <div>
        <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="4">
                <v-card class="mx-auto">
                    <v-img :src="item.download_url" height="200px" cover></v-img>

                    <v-card-title>
                        {{ item.author }}
                    </v-card-title>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    methods: {
        fetchData() {
            fetch("https://picsum.photos/v2/list?page=2&limit=100")
                .then((response) =>
                    response.json().then((data) => {
                        this.items = data;
                    })
                )
                .catch((error) => console.log(error));
        },
    },
    created() {
        this.fetchData();
    },
};
</script>