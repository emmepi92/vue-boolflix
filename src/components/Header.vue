<template>
    <div class="header-container"> 

        <img src="../img/logo-net.jpg" alt="Logo Netflix" @click="$emit('search', '')">
        
        
        <div class="nav-menu">
            <div><a href="#" @click="$emit('show','/tv/on_the_air')">Home</a></div>
            <div><a href="#" @click="$emit('show','/discover/tv')">Serie Tv</a></div>
            <div><a href="#" @click="$emit('show','/movie/top_rated')">Film</a></div>
            <div><a href="#" @click="$emit('show','/discover/tv')">Originali</a></div>
            <div><a href="#" @click="$emit('show','/movie/upcoming')">Aggiunti di recente</a></div>  
            <div><a href="#">La mia lista</a></div>
        </div>

        <div class="info-container">
            <i class="fas fa-search"></i>
            <input type="text" v-model="inputText">
            <button @click="$emit('search', inputText)">Cerca</button>
            <div><a href="#">Bambini</a></div>
            <div><i class="fas fa-bell"></i></div>
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
        cursor: pointer;
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
        
        .fa-search {
            font-size: 20px;
        }

        div {
            .fa-bell {
                font-size: 20px;
            }
        }
    }
}


</style>