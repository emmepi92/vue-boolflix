<template>
    <div class="header-container"> 

        <img src="../img/logo-net.jpg" alt="">
        
        <div class="nav-menu">
            <div><a href="#">Home</a></div>
            <div><a href="#">Serie Tv</a></div>
            <div><a href="#">Film</a></div>
            <div><a href="#">Originali</a></div>
            <div><a href="#">Aggiunti di recente</a></div>  
            <div><a href="#">La mia lista</a></div>
        </div>

        <div class="info-container">
            <input type="text" v-model="inputText">
            <button @click="$emit('search', inputText)">Cerca</button>
            <div><a href="#">Bambini</a></div>
            <div><a href="#">Notifiche</a></div>
            <div><a href="#">Profilo</a></div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Header'
    ,
    data () {
        return {
            inputText:''
        }
    }
}
</script>

<style lang="scss" scoped>

.header-container {
    display: flex;
    align-items: center;
    font-size: 15px;
    padding: 6px 12px;

    img {
        width: 150px;
    }

    .nav-menu {
        display: flex;
        flex-grow: 1;

        * {
            margin-left: 12px;
        }
    
    }

    .info-container {
        display: flex;
        align-items: center;

        * {
            margin-left: 12px;
        }

    }
}


</style>