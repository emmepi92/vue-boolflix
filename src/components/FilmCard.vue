<template>
    <div>
        <div class="film-content" :style="getUrl(film.poster_path)">

            <div class="info-film-container">

                <h3>{{ film.title }} {{ film.name }}</h3>
                <div>Titolo Originale: {{ film.original_title }} {{ film.original_name }}</div>

                <div>Lingua: 
                    <flag :iso="languanteToNation(film.original_language)" />
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
        // usare un api di nazioni con in input l'acronimodella lingua non è il massimo
        languanteToNation(lang) {
            if (lang==='en') {
                return 'us'
            } else if (lang==='ja') {
                return 'jp'
            } else if (lang==='hi') {
                return 'in'
            }
            return lang
        },
        getUrl (string) {
            if ( string === null) {
            return `background-image:url('https://www.staynerd.com/wp-content/uploads/2021/05/netflix-film-piu-visti.jpg')` 
            }
            return `background-image:url('https://image.tmdb.org/t/p/w342${string}')` 
        },
        isAFullStar(star) {
            if (star < this.stars) {
                return 'fas red'
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
    margin: 24px 12px;
    background-size: cover;
    background-position: center;

    &:hover .info-film-container {
            opacity: 1;   
    }

    img {
        width: 100%;
    }

    .info-film-container {
        padding-top: 100px;
        text-align: center;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
    }
}

</style>