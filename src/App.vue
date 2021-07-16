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
      newInputText: ''
    }
  },
  computed : {
    // al variare di newInputText => aggiornare automaticamente => auguri!
  }, 
  created () {
    //chiamata Api con i film più popolari
    this.callApi (this.apiToCall)
  },
  methods: {
    //genero url nuova chiamata
    newSearch (inputText) {
      let apiToCallNew = 'https://api.themoviedb.org/3/search/multi?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=';
      apiToCallNew += inputText;

      //chiamo l'api
      this.callApi(apiToCallNew);

      //test per il computed
      this.newInputToSearch(inputText)
    },
    //funzione per chiamare un Api
    //il paramentro è il nuovo url con query annessa
    callApi (newQuery) {
        axios.get(newQuery).then((result)=>{
        this.films= result.data.results;
      })
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
