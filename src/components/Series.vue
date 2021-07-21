<template>
    <div>
        <h1>Serie</h1>
        <div v-if="series.length !== 0">
            <div class="films-container">
                <FilmCard class="single-film"
                v-for="film in series"
                :key="film.id"
                :film="film" />
            </div>
        </div>

        <div v-else>
            <p>
                Nessuna serie trovata
            </p>
        </div>

    </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
export default {
    name: 'Series',
    props:{
        series:Array
    },
    components:{
        FilmCard
    }
}
</script>

<style lang="scss" scoped>

</style>