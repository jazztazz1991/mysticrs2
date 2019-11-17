<template>
    <div id="home">
      <app-header title="Mystic RS - About"></app-header>
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
        height: 1500px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>