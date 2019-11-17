<template>
    <div id="home">
        <app-header title="Mystic RS - Nex"></app-header>
        
        <div id="numberofplayers">
            <h3>Players in Team? <input type="number" id="nexplayers" v-model="players"></h3>
            <button type="submit" id="nexstart" @click="start"> Start </button>
        </div>
        
        <div id="nexDrops" v-if="!isActive">
            <h3>Drop: </h3>
                <button type="submit" id="tHelm" @click="addThelm">Torva Helm</button>
                <button type="submit" id="tBody" @click="addTbody">Torva Platebody</button>
                <button type="submit" id="tLegs" @click="addTlegs">Torva Platelegs</button>
                <button type="submit" id="tGloves" @click="addTgloves">Torva Gloves</button>
                <button type="submit" id="tBoots" @click="addTboots">Torva Boots</button>
                <button type="submit" id="pCowl" @click="addPcowl">Pernix Cowl</button>
                <button type="submit" id="pBody" @click="addPbody">Pernix Body</button>
                <button type="submit" id="pChaps" @click="addPchaps">Pernix chaps</button>
                <button type="submit" id="pGloves" @click="addPgloves">Pernix Gloves</button>
                <button type="submit" id="pBoots" @click="addPboots">Pernix Boots</button>
                <button type="submit" id="zBow" @click="addZbow">Zaryte Bow</button>
                <button type="submit" id="vMask" @click="addVmask">Virtus Mask</button>
                <button type="submit" id="vTop" @click="addVtop">Virtus Robe Top</button>
                <button type="submit" id="vLegs" @click="addVlegs">Virtus Robe Legs</button>
                <button type="submit" id="vGloves" @click="addVgloves">Virtus Gloves</button>
                <button type="submit" id="vBoots" @click="addVboots">Virtus Boots</button>
                <button type="submit" id="vWand" @click="addVwand">Virtus Wand</button>
                <button type="submit" id="vBook" @click="addVbook">Virtus Book</button>
                <button type="submit" id="onyxBolts" @click="addOnyx">Onyx Bolts(e)</button>
                <button type="submit" id="gDhide" @click="addGdhide">Green Dragonhide</button>
                <button type="submit" id="dragonstone" @click="addDragonstone">Uncut Dragonstone</button>
                <button type="submit" id="gADW" @click="addGAD">Grimy Avantoe / Grimy Dwarf Weed</button>
                <button type="submit" id="gT" @click="addGT">Grimy Torstol</button>
                <button type="submit" id="mLog" @click="addMagiclogs">Magic Logs</button>
                <button type="submit" id="brewR" @click="addBR">Brew > Restore</button>
                <button type="submit" id="restoreB" @click="addRB">Restore > Brew</button>
                <button type="submit" id="mSeed" @click="addMagicseed">Magic Seed</button>
                <button type="submit" id="tSeed" @click="addTseed">Torstol Seed</button>
                <button type="submit" id="luminite" @click="addLSS">Luminite Stone Spirit</button>
                <button type="submit" id="runite" @click="addRSS">Runite Stone Spirit</button>

            <div id="tSplit" v-if="split">
                <p># of items per person:</p> <button class="nexReset" @click="reset">reset</button>
                <br>
                <div class="organize">
                    <p>Torva Helm: {{ tHelm }}</p>
                    <p>Torva Platebody: {{ tBody }}</p>
                    <p>Torva Platelegs: {{ tLegs }}</p>
                    <p>Torva Gloves: {{ tGloves }}</p>
                    <p>Torva Boots: {{ tBoots }}</p>
                    <p>Pernix Cowl: {{ pCowl }}</p>
                    <p>Pernix Body: {{ pBody }}</p>
                    <p>Pernix Chaps: {{ pChaps }}</p>
                    <p>Pernix Gloves: {{ pGloves }}</p>
                    <p>Pernix Boots: {{ pBoots }}</p>
                    <p>Zaryte Bow: {{ zBow }}</p>
                </div>
                <div class="organize">
                    <p>Virtus Mask: {{ vMask }}</p>
                    <p>Virtus Robe Top: {{ vTop }}</p>
                    <p>Virtus Robe Legs: {{ vLegs }}</p>
                    <p>Virtus Gloves: {{ vGloves }}</p>
                    <p>Virtus Boots: {{ vBoots }}</p>
                    <p>Virtus Wand: {{ vWand }}</p>
                    <p>Virtus Book: {{ vBook }}</p>
                    <p>Onyx Bolts(e): {{ onyx }}</p>
                    <p>Greed Dragonhide: {{ gDhide }}</p>
                    <p>Uncute Dragonstone: {{ dragonstone }}</p>
                    <p>Grimy Avantoe: {{ gAv }}</p>
                </div>
                <div class="organize">
                    <p>Grimy Dwarf weed: {{ gDw }}</p>
                    <p>Grimy Torstol: {{ gT }}</p>
                    <p>Magic Logs: {{ mLogs }}</p>
                    <p>Brews: {{ brew }}</p>
                    <p>Restores: {{ restore }}</p>
                    <p>Magic Seed: {{ mSeed }}</p>
                    <p>Torstol Seed: {{ tSeed }}></p>
                    <p>Luminite Stone Spirit: {{ lSs }}</p>
                    <p>Runite Stone Spirit: {{ rSs }}</p>
                </div>
            </div>
            <div id="drops" v-if="!split">
                <h3>Drops this hour: <button class="nexReset" @click="reset" >reset</button><button type="submit" id="tsFind" @click="findsplit">find split</button></h3>
                <div class="organize">
                    <p>Torva Helm: {{ tHelm }}</p>
                    <p>Torva Platebody: {{ tBody }}</p>
                    <p>Torva Platelegs: {{ tLegs }}</p>
                    <p>Torva Gloves: {{ tGloves }}</p>
                    <p>Torva Boots: {{ tBoots }}</p>
                    <p>Pernix Cowl: {{ pCowl }}</p>
                    <p>Pernix Body: {{ pBody }}</p>
                    <p>Pernix Chaps: {{ pChaps }}</p>
                    <p>Pernix Gloves: {{ pGloves }}</p>
                    <p>Pernix Boots: {{ pBoots }}</p>
                    <p>Zaryte Bow: {{ zBow }}</p>
                </div>
                <div class="organize">
                    <p>Virtus Mask: {{ vMask }}</p>
                    <p>Virtus Robe Top: {{ vTop }}</p>
                    <p>Virtus Robe Legs: {{ vLegs }}</p>
                    <p>Virtus Gloves: {{ vGloves }}</p>
                    <p>Virtus Boots: {{ vBoots }}</p>
                    <p>Virtus Wand: {{ vWand }}</p>
                    <p>Virtus Book: {{ vBook }}</p>
                    <p>Onyx Bolts(e): {{ onyx }}</p>
                    <p>Greed Dragonhide: {{ gDhide }}</p>
                    <p>Uncute Dragonstone: {{ dragonstone }}</p>
                    <p>Grimy Avantoe: {{ gAv }}</p>
                </div>
                <div class="organize">
                    <p>Grimy Dwarf weed: {{ gDw }}</p>
                    <p>Grimy Torstol: {{ gT }}</p>
                    <p>Magic Logs: {{ mLogs }}</p>
                    <p>Brews: {{ brew }}</p>
                    <p>Restores: {{ restore }}</p>
                    <p>Magic Seed: {{ mSeed }}</p>
                    <p>Torstol Seed: {{ tSeed }}></p>
                    <p>Luminite Stone Spirit: {{ lSs }}</p>
                    <p>Runite Stone Spirit: {{ rSs }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../header/header.vue'


    export default{
        components: {
            'app-header': Header
        },
        data: function() {
            return{
                players: 0,
                tHelm: 0,
                tBody: 0,
                tLegs: 0,
                tGloves: 0,
                tBoots: 0,
                pCowl: 0,
                pBody: 0,
                pChaps: 0,
                pGloves: 0,
                pBoots: 0,
                zBow: 0,
                vMask: 0,
                vTop: 0,
                vLegs: 0,
                vGloves: 0,
                vBoots: 0,
                vWand: 0,
                vBook: 0,
                onyx: 0,
                gDhide: 0,
                dragonstone: 0,
                gAv: 0,
                gDw: 0,
                gT: 0,
                mLogs: 0,
                brew: 0,
                restore: 0,
                mSeed: 0,
                tSeed: 0,
                lSs: 0,
                rSs: 0,
                isActive: true,
                split: false
            }
        },
        methods: {
            start(){
                this.isActive = false;
            },
            reset(){
                 Object.assign(this.$data, this.$options.data());
            },
            findsplit(){
                this.tHelm = this.tHelm / this.players;
                this.tBody = this.tBody / this.players;
                this.tLegs = this.tLegs / this.players;
                this.tGloves = this.tGloves / this.players;
                this.tBoots = this.tBoots / this.players;
                this.pCowl = this.pCowl / this.players;
                this.pBody = this.pBody / this.players;
                this.pChaps = this.pChaps / this.players;
                this.pGloves = this.pGloves / this.players;
                this.pBoots = this.pBoots / this.players;
                this.zBow = this.zBow / this.players;
                this.vMask = this.vMask  / this.players;
                this.vTop = this.vTop / this.players;
                this.vLegs = this.vLegs / this.players;
                this.vGloves = this.vGloves / this.players;
                this.vBoots = this.vBoots / this.players;
                this.vWand = this.vWand / this.players;
                this.vBook = this.vBook / this.players;
                this.onyx = this.onyx / this.players;
                this.gDhide = this.gDhide / this.players;
                this.dragonstone = this.dragonstone / this.players;
                this.gAv = this.gAv / this.players;
                this.gDw = this.gDw / this.players;
                this.gT = this.gT   / this.players;
                this.mLogs = this.mLogs / this.players;
                this.brew = this.brew / this.players;
                this.restore = this.restore / this.players;
                this.mSeed = this.mSeed / this.players;
                this.tSeed = this.tSeed    / this.players;
                this.lSs = this.lSs / this.players;
                this.rSs = this.rSs / this.players;
                this.split = true;
            },
            addThelm(){
                this.tHelm = this.tHelm + 1;
            },
            addTbody(){
                this.tBody = this.tBody + 1;
            },
            addTlegs(){
                this.tLegs = this.tLegs + 1;
            },
            addTgloves(){
                this.tGloves = this.tGloves + 1;
            },
            addTboots(){
                this.tBoots = this.tBoots + 1;
            },
            addPcowl(){
                this.pCowl = this.pCowl + 1;
            },
            addPbody(){
                this.pBody = this.pBody + 1;
            },
            addPchaps(){
                this.pChaps = this.pChaps + 1;
            },
            addPgloves(){
                this.pGloves = this.pGloves + 1;
            },
            addPboots(){
                this.pBoots = this.pBoots + 1;
            },
            addZbow(){
                this.zBow = this.zBow + 1;
            },
            addVmask(){
                this.vMask = this.vMask + 1;
            },
            addVtop(){
                this.vTop = this.vTop + 1;
            },
            addVlegs(){
                this.vLegs = this.vLegs + 1;
            },
            addVgloves(){
                this.vGloves = this.vGloves + 1;
            },
            addVboots(){
                this.vBoots = this.vBoots + 1;
            },
            addVwand(){
                this.vWand = this.vWand + 1;
            },
            addVbook(){
                this.vBook = this.vBook + 1;
            },
            addOnyx(){
                this.onyx = this.onyx + 1;
            },
            addGdhide(){
                this.gDhide = this.gDhide + 1;
            },
            addDragonstone(){
                this.dragonstone = this.dragonstone + 1;
            },
            addGAD(){
                this.gAv = this.gAv + 1;
                this.gDw = this.gDw + 1;
            },
            addGT(){
                this.gT = this.gT + 1;
            },
            addMagiclogs(){
                this.mLogs = this.mLogs + 1;
            },
            addBR(){
                this.brew = this.brew + 1;
                this.restore = this.restore + 1;
            },
            addRB(){
                this.brew = this.brew + 1;
                this.restore = this.restore + 1;
            },
            addMagicseed(){
                this.mSeed = this.mSeed + 1;
            },
            addTseed(){
                this.tSeed = this.tSeed + 1;
            },
            addLSS(){
                this.lSs = this.lSs + 1;
            },
            addRSS(){
                this.rSs = this.rSs + 1;
            },
        }
        
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
    }
    #tSplit{
        background-color: rgba(97, 91, 91, 0.39);
        overflow: hidden;
        clear: both;

    }
    #drops{
        background-color: rgba(97, 91, 91, 0.39);
        overflow: hidden;
        clear: both;
    }

    button{
        background-color: black;
        color: lime;
        padding: 5px;
        border-radius: 10px;
        margin-right: 5px;
        margin-bottom: 5px;
    }
    .organize{
        width: 28%;
        float: left;
    }
    .hide{
        display: none;
    }
</style>