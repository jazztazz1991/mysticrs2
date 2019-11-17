<template>
    <div id="head">
        <router-link to="/" tag="h1">{{ title }}</router-link>
            <ul id="nav2">
                <router-link to="/about" tag="li" active-class="active">About</router-link>
                <router-link to="/bossing" tag="li" active-class="active">Boss Splits</router-link>
                <router-link to="/clan" tag="li" active-class="active">Clan</router-link>
                <router-link to="/discord" tag="li" active-class="active">Discord</router-link>
                <router-link to="/duelarena" tag="li" active-class="active">Duel Arena</router-link>
                <router-link to="/videos" tag="li" active-class="active">Videos</router-link>
            </ul>
    </div>
</template>

<script>
    import Discord from '../clan/discord.vue'
    import Joinclan from '../clan/joinclan.vue'

    export default{
        components: {
            'app-discord': Discord,
            'app-joinclan': Joinclan,
        },
        data: function(){
            return{
                
            }
        },
        methods: {
        },
        props: [ 'title' ]
    }

</script>

<style scoped>
    #head{
    }
    h1 { 
        font-family: Papyrus, fantasy; 
        font-size: 36px; 
        font-style: normal; 
        font-variant: normal; 
        font-weight: bold; 
        line-height: 26.4px; 
        color: #3e0f53;
        text-align: center;
    }
    h1:hover{
        cursor: pointer;
    }
    ul {
        list-style-type: none;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
        width: 798px;
        overflow: hidden;
        background-color: black;
    }

    li {
        float: left;
        border: purple .5px solid;
        display: block;
        color: lawngreen !important;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        width: 100px;
    }

    /* Change the link color to #111 (black) on hover */
    li:hover {
        background-color: purple;
        color: white;
        cursor: pointer;
    }
    a:-webkit-any-link {
        color: lawngreen;
    }
    a:hover{
        color: white;
    }
</style>
