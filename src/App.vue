<template>
  <div class="fluid-container">

    <Header @search="searchTvAndMovie" />
    <Main :populars='popularFilms' 
    :series='searchedSeries'
    :films='searchedFilms' 
    />
    
  </div>
</template>

<script>
import Main from "@/components/Main.vue"
import Header from "@/components/Header.vue"
import axios from 'axios'

export default {
  name: 'App',

  components: {
    Main,
    Header
  },

  data() {
    return {
      popularFilms:[],    //dove salvo il risultato della prima chiamata API
      searchedFilms:[],   //dove salvo il risultato delle ricerche in film
      searchedSeries:[],  //dove salvo il risultato delle ricerche in serie
      //la prima chiamata che mi popola l'array di default => popular
      popularQuery:'https://api.themoviedb.org/3/movie/popular?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4', 
    }
  },
  created () {
    //chiamata Api con i film più popolari
    this.callApi (this.popularQuery)
  },
  methods: {
    searchTvAndMovie (inputText) {

      if (inputText.trim() === '') {

        this.searchedFilms = [];
        this.searchedSeries = [];        

      } else {
        axios.get(this.tvOrMovie('tv',inputText)).then((result) => {
           this.searchedSeries = result.data.results;
        })  
        axios.get(this.tvOrMovie('movie',inputText)).then((result) => {
           this.searchedFilms = result.data.results;
        }) 
      }
    },
    //ritorna l'url cambiando tv/movie con l'input
    tvOrMovie(tvOrMovie, inputText) { 
      let query = `https://api.themoviedb.org/3/search/${tvOrMovie}?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=${inputText}`;
      console.log(query)
      return query
    },
    //funzione per chiamare un Api con una nuova query
    //paramentro: query da passare
    callApi (newQuery) {
        axios.get(newQuery).then((result)=>{
        this.popularFilms= result.data.results;
      })
    }
  }
}
</script>

<style lang="scss">
@import url('./style/app.scss');

</style>
