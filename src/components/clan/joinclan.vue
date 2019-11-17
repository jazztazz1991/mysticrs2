<template>
    <div id="clans">
        <app-header title="Mystic RS - Join Clan"></app-header>
        <button id="join" v-on:click="join">Join Clan</button>
    </div>
</template>

<script>
    import Header from '../header/header.vue'
    
    
    export default{
        components: {
//            'app-header': Header,
        },
        methods: {
            join: function(){
                window.open("http://services.runescape.com/m=forum/c=xUegUXAkiiw/forums.ws?92,93,471,66128735,goto,1");
            }
        }
    }
</script>

<style scoped>
    #clans{
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
    #join{
        width: 150px;
        height: 50px;
        background-color: slategrey;
        color: purple;
        float: right;
        position: fixed;
        right: 0;
        font-size: 15px;
        font-weight: bold;
        border-radius: 25px;
        margin-top: 10px;
    }
    #join:hover {
        cursor: pointer;
    }
</style>