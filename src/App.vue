<template>
  <div class="fluid-container">

    <Header @search="newSearch" @show="showThis" />
    <Main  :films='searchedFilms' />
    
  </div>
</template>

<script>
import Main from "./components/Main.vue"
import Header from "./components/Header.vue"
import axios from 'axios'

export default {
  name: 'App',

  components: {
    Main,
    Header
  },

  data() {
    return {
      popularFilms:[],
      searchedFilms:[],
      popularQuery:'https://api.themoviedb.org/3/movie/popular?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4',
    }
  },
  created () {
    //chiamata Api con i film più popolari
    this.callApi (this.popularQuery)
  },
  methods: {
    //genero url della nuova chiamata
    newSearch (inputText) {

      if (inputText.trim() === '') {
        this.searchedFilms = this.popularFilms

      } else {        
        let newQuery = 'https://api.themoviedb.org/3/search/multi?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=';
        newQuery += inputText;
  
        //chiamo l'api
        this.callApi(newQuery);
      }
    },
    //funzione per chiamare un Api con una nuova query
    //paramentro: query da passare
    callApi (newQuery) {
        axios.get(newQuery).then((result)=>{
        this.searchedFilms= result.data.results;

        if (this.popularFilms.length===0) {
          this.popularFilms= result.data.results;
        }
      })
    },
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
