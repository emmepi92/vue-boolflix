<template>
    <div>
        <div class="film-content">

            <img src="https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg" alt="">

            <div class="info-film-container">
                <h4>{{ film.title }}</h4>
                <div> Titolo Originale: {{ film.original_title }}</div>
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
    }
}
</script>

<style lang="scss" scoped>

.film-content {
    height: 450px;
    width: 300px;
    position: relative;
    margin: 2px;

    img {
        width: 100%;

    }

    .info-film-container {
        position: absolute;
        text-align: center;
        top:50%;
        opacity: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.6);
        border-radius: 20px;


        &:hover {
            opacity: 1;
        }
    }
}

</style>