<template>
    <div>
        <h1>I più visti</h1>
        <div class="films-container">
            <FilmCard class="single-film"
            v-for="film in populars"
            :key="film.id"
            :film="film" />
        </div>

    </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
export default {
    name: 'Popular',
    props:{
        populars:Array
    },
    components:{
        FilmCard
    }
}
</script>

<style lang="scss" scoped>

</style>