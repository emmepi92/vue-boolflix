<template>
    <div>
        <div class="film-content">
            <img :src="getSrc(film.poster_path)" :alt="film.original_title || film.original_name ">            

            <div class="info-film-container">

                <h3>{{ film.title }} {{ film.name }}</h3>
                <div>Titolo Originale: {{ film.original_title }} {{ film.original_name }}</div>

                <div>Lingua: 
                    <flag v-if="film.original_language=== 'en'" iso="us" />
                    <flag v-else :iso="film.original_language" />
                </div>

                <div>Voto: 
                    <i v-for="n in 5" :key="n" 
                    class="fa-star" :class="isAFullStar(n)"></i> 
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FilmCard',
    props: {
        film:Object
    },
    computed: {
        stars() {
            return Math.round(this.film.vote_average / 2)
        }
    },
    methods: {
        getSrc (finalSrc) {
            return 'https://image.tmdb.org/t/p/w342'+ finalSrc;
        },
        isAFullStar(star) {
            if (star < this.stars) {
                return 'fas'
            } else {
                return 'far'
            }
        }
    },
}
</script>

<style lang="scss" scoped>

.film-content {
    height: 450px;
    width: 300px;
    position: relative;
    margin: 24px 12px;
    overflow: hidden;  //alcuni poster sono più alti

    &:hover .info-film-container {
            opacity: 1;   
    }

    img {
        width: 100%;
    }

    .info-film-container {
        padding-top: 100px;
        position: absolute;
        text-align: center;
        top:0;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
    }
}

</style>