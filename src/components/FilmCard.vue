<template>
    <div>
        <div class="film-content">


            <!-- 
                src composta da 
                - https://image.tmdb.org/t/p/
                - w342
                - poster_path in film
             -->
            <img :src="getSrc(film.poster_path)" alt="">
            <!-- <img src="https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg" alt=""> -->

            <div class="info-film-container">
                <h3>{{ film.title }} {{ film.name }}</h3>
                <div>Titolo Originale: {{ film.original_title }} {{ film.original_name }}</div>
                <div>Lingua: {{ film.original_language }}</div>
                <div>Voto: {{ film.vote_average }}</div>   
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
            let src = 'https://image.tmdb.org/t/p/w342';
            src += finalSrc;
            return src
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
        padding: 25px 0;
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