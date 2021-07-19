<template>
    <div>
        <span>Lingua: 
            
            <span v-if="language === 'it'">
                <img src="../img/it.jpg" alt="">
            </span>

            <span v-else-if="language === 'en'">
                <img src="../img/en.jpg" alt="">
            </span>

            <span v-else-if="language === 'us'">
                <img src="../img/us.jpg" alt="">
            </span>

            <span v-else-if="language === 'fr'">
                <img src="../img/fr.jpg" alt="">
            </span>

            <span v-else-if="language === 'es'">
                <img src="../img/es.jpg" alt="">
            </span>

            <span v-else>
                {{language}}
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name:'Language',
    props: {
        language:String
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 30px;
    border-radius: 5px;
}

</style>