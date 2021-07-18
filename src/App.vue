<template>
  <div class="fluid-container">

    <Header @search="newSearch"/>
    <Main  :films='films' />
    
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
      films:[],
      apiToCall:'https://api.themoviedb.org/3/movie/popular?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4',
    }
  },
  created () {
    //chiamata Api con i film più popolari
    this.callApi (this.apiToCall)
  },
  methods: {
    //genero url della nuova chiamata
    newSearch (inputText) {
      let apiToCallNew = 'https://api.themoviedb.org/3/search/multi?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=';
      apiToCallNew += inputText;

      //chiamo l'api
      this.callApi(apiToCallNew);
    },
    //funzione per chiamare un Api con una nuova query
    //paramentro: query da passare
    callApi (newQuery) {
        axios.get(newQuery).then((result)=>{
        this.films= result.data.results;
      })
    }
  }
}
</script>

<style lang="scss">
@import url('./style/app.scss');

</style>
