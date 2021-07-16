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
            <div>Cerca</div>
            <input type="text">
            <div>Bambini</div>
            <div>Notifiche</div>
            <div>Profilo</div>
        </div>

    </div>
</template>

<script>
export default {
name:'Header'
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

        * {
            margin-left: 12px;
        }

    }
}


</style>