<template>
  <div class="fluid-container">

    <Header />
    <Main :films='films' />
    
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
      films:[]
    }
  },
  created () {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=26dda2d32d2ca2cdf1b60e2b114c69b4&query=ritorno+al+futuro').then((result)=>{
      this.films= result.data.results;
      console.log(this.films)  //controllare la lista, cancellare dopo
    })
  }
}
</script>

<style lang="scss">
@import url('./style/app.scss');

</style>
