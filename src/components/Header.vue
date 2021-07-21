<template>
    <div class="header-container"> 

        <img src="../img/logo-net.jpg" alt="Logo Netflix">
        
        
        <div class="nav-menu">
            <div><a href="#">Home</a></div>
            <div><a href="#">Serie Tv</a></div>
            <div><a href="#">Film</a></div>
            <div><a href="#">Originali</a></div>
            <div><a href="#">Aggiunti di recente</a></div>  
            <div><a href="#">La mia lista</a></div>
        </div>

        <div class="info-container">
            <i class="fas fa-search"></i>
            <input type="text" v-model="inputText">
            <button @click="[$emit('search', inputText),clearInputText()]">Cerca</button>
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
    },
    methods:{
        clearInputText() {
            this.inputText= '';
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