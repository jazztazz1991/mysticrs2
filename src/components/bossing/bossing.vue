<template>
    <div id="home">
        <app-header title="Mystic RS - Boss Splits"></app-header>
        <router-link to="/nex" class="bossId"></router-link>
    </div>
</template>

<script>
    import Header from '../header/header.vue'


    export default{
        components: {
            'app-header': Header
        },
        
    }
</script>

<style scoped>
    #home{
        background-color: #8c8c8c;
        background-size: auto;
        height: auto;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
        clear: both;
        overflow: auto;
    }
    .bossId{
        float: left;
        width: 150px;
        height: 150px;
        border-radius: 25px;
        margin:10px;
        background-image: url(../../assets/nex.jpg);
        background-size: contain;
    }
    .bossId:hover{
        float: left;
        width: 150px;
        height: 150px;
        border-radius: 25px;
        margin:10px;
        background-image: url(../../assets/nex2.jpg);
    }
    router-link{
        float: left;
        width: 150px;
        height: 150px;
        border-radius: 25px;
        margin:10px;
        background-image: url(../../assets/nex.jpg);
    }
</style>