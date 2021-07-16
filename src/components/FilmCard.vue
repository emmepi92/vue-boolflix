<template>
    <div>
        <div class="film-content">
            <img :src="getSrc(film.poster_path)" alt="">            

            <div class="info-film-container">
                <h3>{{ film.title }} {{ film.name }}</h3>
                <div>Titolo Originale: {{ film.original_title }} {{ film.original_name }}</div>
                <div>Nazione:

                    <span v-if="film.original_language === 'it'">
                        <img src="../img/it.jpg" alt="">
                    </span>

                    <span v-if="film.original_language === 'en'">
                        <img src="../img/en.jpg" alt="">
                    </span>

                    <span v-if="film.original_language === 'us'">
                        <img src="../img/us.jpg" alt="">
                    </span>

                    <span v-if="film.original_language === 'fr'">
                        <img src="../img/fr.jpg" alt="">
                    </span>

                    <span v-if="film.original_language === 'es'">
                        <img src="../img/es.jpg" alt="">
                    </span>

                    <span v-else>
                        {{film.original_language}}

                    </span>

                    <!-- metodo che non funziona -->
                    <!-- <img :src="getFlag(film.original_language)" alt=""> -->

                </div>

                <div>

                    <div v-if="vote===0"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    <div v-if="vote===1"><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    <div v-if="vote===2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    <div v-if="vote===3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    <div v-if="vote===4"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                    <div v-if="vote===5"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    
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
    methods: {
        getSrc (finalSrc) {
            return 'https://image.tmdb.org/t/p/w342'+ finalSrc;
        }, 
        // da ottenere ../img/it.jpg  => non funzia
        // getFlag (lang) {
        //     let src = "../img/" + lang + ".jpg";
        //     console.log(src) // nel console.log escono i src corretti
        //     return src;          
        // }
    },
    data() {
        return {
            vote: Math.round(this.film.vote_average / 2),
        }
    }
}
</script>

<style lang="scss" scoped>

.film-content {
    height: 450px;
    width: 300px;
    position: relative;
    margin: 24px 12px;

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

        div {

            img {
                width: 30px;
                border-radius: 5px;
            }
        }
    }
}

</style>