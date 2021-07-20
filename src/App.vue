<template>
  <div class="fluid-container">

    <Header @search="[searchFilms($event),searchSeries($event)]" @show="showThis" />
    <Main :populars='popularFilms' :films='searchedFilms' :series='searchedSeries' />
    
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
    searchFilms (inputText) {

      if (inputText.trim() === '') {

        this.searchedFilms = []

      } else {

        let query  = 'https://api.themoviedb.org/3/search/movie?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=';
        query +=inputText;
  
        axios.get(query).then((result) => {
           this.searchedFilms= result.data.results;
        })      
      }

    },
    searchSeries (inputText) {

      if (inputText.trim() === '') {

        this.searchedSeries = []

      } else {

        let query = 'https://api.themoviedb.org/3/search/tv?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=';
        query +=inputText;
        
        axios.get(query).then((result) => {
           this.searchedSeries= result.data.results;
        })      
      }
    },
    //funzione per chiamare un Api con una nuova query
    //paramentro: query da passare
    callApi (newQuery) {
        axios.get(newQuery).then((result)=>{
        this.popularFilms= result.data.results;
      })
    },
    //metodo per cambiare le liste cliccando su la nav-bar
    showThis (selection) {
      let query = "https://api.themoviedb.org/3" + selection + "?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4";
      console.log(query)
      this.callApi(query)
    }
  }
}
</script>

<style lang="scss">
@import url('./style/app.scss');

</style>
