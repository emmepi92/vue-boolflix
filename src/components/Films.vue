<template>
    <div>
        <h1>Film</h1>
        <div v-if="films.length !== 0">
            <div class="films-container">
                <FilmCard class="single-film"
                v-for="film in films"
                :key="film.id"
                :film="film" />
            </div>
        </div>

        <div v-else>
            <p>
                Nessun film trovato
            </p>
        </div>

    </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
export default {
    name: 'Films',
    props:{
        films:Array
    },
    components:{
        FilmCard
    }
}
</script>

<style lang="scss" scoped>

</style>