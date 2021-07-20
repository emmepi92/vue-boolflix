<template>
    <div class="popular-container">


        <div v-if="films.length === 0 && series.length === 0">

            <h1>I più visti</h1>        
            <div class="films-container">
                <FilmCard class="single-film"
                v-for="film in populars"
                :key="film.id"
                :film="film" />
            </div>

        </div>


        <div v-else>
            <h1>Film</h1>
            <div class="films-container">
                <FilmCard class="single-film"
                v-for="film in films"
                :key="film.id"
                :film="film" />
            </div>

            <h1>Serie</h1>
            <div class="films-container">
                <FilmCard class="single-film"
                v-for="film in series"
                :key="film.id"
                :film="film" />
            </div>

        </div>



    </div>
</template>

<script>
import FilmCard from "./FilmCard.vue" // non funzia con la @

export default {
    name:'Main',
    props: {
        films:Array,
        populars:Array,
        series:Array
    },
    components: {
        FilmCard
    }
}
</script>

<style lang="scss" scoped>
.popular-container {

    h1 {
        margin-left: 24px;
        margin-top: 24px;

    }

    .films-container {
        display: flex;
        overflow-x: auto;
    }
}

</style>