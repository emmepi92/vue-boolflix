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
      apiCall:'https://api.themoviedb.org/3/search/movie?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=love',
      newInputText: ''
    }
  },
  computed : {
    // al variare di newInputText => aggionrare automaticamente => auguri!
  }, 
  created () {
    //lancio la funziona chiamata con il paramentro della chiamata 
    this.callApi (this.apiCall)
  },
  methods: {
    //nuovo parametro
    newSearch (inputText) {
      let apiCall = 'https://api.themoviedb.org/3/search/movie?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=';
      apiCall += inputText;
      this.callApi(apiCall)
    },
    //funzione per chiamare un Api
    //il paramentro è la nuova query
    callApi (newQuery) {
      axios.get(newQuery).then((result)=>{
      this.films= result.data.results;
    })
      //------------------------
    },
    //serve per il computed, se si riesce a farlo funzionare
    newInputToSearch (inputText) {
      this.newInputText = inputText;
    }

  }
}
</script>

<style lang="scss">
@import url('./style/app.scss');

</style>
