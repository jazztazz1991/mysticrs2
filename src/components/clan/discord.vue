

<template>
    <div id="home">
      <app-header title="Mystic RS - Discord"></app-header>
        <img src="../../assets/discord.png" id="discord" v-on:click="joindiscord">
    </div>
</template>

<script>
    import Header from '../header/header.vue'


    export default{
        components: {
//            'app-header': Header,
        },
        methods: {
            joindiscord: function(){
                window.open("https://discord.gg/ha4dtF7");
            }
        }
        
    }
</script>

<style scoped>
    #home{
        background-color: #8c8c8c;
        background-size: auto;
        height: 1500px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    #discord{
        width: 150px;
        height: 50px;
        float: left;
        margin-top: 10px;
    }
    #discord:hover {
        cursor: pointer;
    }
</style>