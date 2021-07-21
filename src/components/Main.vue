<template>
    <div class="popular-container">

        <div v-if="films.length === 0 && series.length === 0">

            <Popular :populars="populars"
            :flagTitle='flagTitle' />

        </div>

        <div v-else>

            <Films :films="films" />
            
            <Series :series="series" />

        </div>
    </div>
</template>

<script>
import Series from './Series.vue'
import Films from './Films.vue'
import Popular from './Popular.vue'

export default {
    name:'Main',
    props: {
        films:Array,
        populars:Array,
        series:Array,
        flagTitle:Boolean
    },
    components: {
        Series,
        Films,
        Popular
    }
}
</script>

<style lang="scss" scoped>

</style>