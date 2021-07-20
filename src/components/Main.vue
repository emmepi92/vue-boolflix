<template>
    <div class="films-container">
        <FilmCard class="single-film"
        v-for="film in films"
        :key="film.id"
        :film="film" />
    
    </div>
</template>

<script>
import FilmCard from "./FilmCard.vue" // non funzia con la @


export default {
    name:'Main',
    props: {
        films:Array
    },
    components: {
        FilmCard
    }
}
</script>

<style lang="scss" scoped>
.films-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>