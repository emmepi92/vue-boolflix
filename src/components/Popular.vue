<template>
    <div>
        <span v-if="flagTitle">
            <h1>Le ultime aggiunte</h1>
        </span>

        <span v-else>
            <h1>I più visti</h1>
        </span>

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
        populars:Array,
        flagTitle:Boolean
    },
    components:{
        FilmCard
    },
    created() {
        console.log(this.flagTitle)
    }
}
</script>

<style lang="scss" scoped>

</style>