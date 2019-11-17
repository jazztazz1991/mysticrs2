import Home from './components/home/home.vue';
import About from './components/about/about.vue';
import Bossing from './components/bossing/bossing.vue';
import Clan from './components/clan/joinclan.vue';
import Discord from './components/clan/discord.vue';
import Duelarena from './components/duelarena/duelarena.vue';
import Videos from './components/videos/videos.vue';
import Nex from './components/bossing/bosses/nex.vue';

export const routes =[
    { path: '', component: Home},
    { path: '/about', component: About},
    { path: '/bossing', component: Bossing},
    { path: '/clan', component: Clan},
    { path: '/discord', component: Discord},
    { path: '/duelarena', component: Duelarena},
    { path: '/videos', component: Videos},
    { path: '/nex', component: Nex},
    
]