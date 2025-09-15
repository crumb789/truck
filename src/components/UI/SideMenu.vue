<template>
        <div class="menu sideMenu" :class="{sideMenuActive: activeSide}">
            <nav>
                <ul class="menu_list" v-if="this.$route.name == 'home'">
                    <li @click="activeSide = false" :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
                            @mouseleave="dividerHover = 10"
                        v-for="item in listMenuItems" :key="item.id" class="menu_item">
                            <a  v-if="item.id < 5" :href="item.link">{{ item.name }}</a>
                            
                            <router-link v-if="item.id == 5" :to="{ name: item.link }" >{{ item.name }}</router-link>

                            <!-- <div :class="{activeDivider: dividerHover == item.id  }" 
                                class="divider divider-menu">
                            </div>                         -->
                    </li>
                </ul>

                <ul class="menu_list" v-if="this.$route.name == 'catalogview'">
                    <li @click="activeSide = false" :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
                            @mouseleave="dividerHover = 10"
                        v-for="item in listMenuItemsContacts" :key="item.id" class="menu_item">

                            <router-link :to="item.link" exact>{{ item.name }}</router-link>

                            <!-- <router-link :to="{ name: item.link }" >{{ item.name }}</router-link>   -->

                            <!-- <div :class="{activeDivider: dividerHover == item.id  }" 

                                class="divider divider-menu">
                            </div>                         -->
                    </li>
                </ul>
            </nav>
        
        </div>
        <div class="btns btns-box">
            <div class="open sideBtns animate__animated animate__rubberBand" 
                v-if="!activeSide" @click="activeSide = true">
                <i class="bi bi-list"></i>
            </div>
            <div div class="close sideBtns animate__animated animate__jello" 
                v-if="activeSide" @click="activeSide = false">
                <i class="bi bi-x-lg"></i>
            </div>
        </div>
</template>


<script>
export default {
    data() {
        return{
            activeSide: false,
            listMenuItems: [
                {
                    id: 0,
                    name: 'Главная',
                    link: '#top'
                },
                {
                    id: 1,
                    name: 'О нас',
                    link: '#about'
                },
                {
                    id: 2,
                    name: 'Каталог',
                    link: '#catalog'
                },
                {
                    id: 3,
                    name: 'Информация',
                    link: '#info'
                },
                {
                    id: 4,
                    name: 'Контакты',
                    link: '#contact'
                },
                {
                    id: 5,
                    name: 'Архив',
                    link: 'catalogview'
                },
            ],
            listMenuItemsContacts: [
                {
                    id: 0,
                    name: 'Главная',
                    link: '/#top'
                },
                {
                    id: 1,
                    name: 'О нас',
                    link: '/#about'
                },
                {
                    id: 2,
                    name: 'Каталог',
                    link: '/#catalog'
                },
                {
                    id: 3,
                    name: 'Информация',
                    link: '/#info'
                },
                {
                    id: 4,
                    name: 'Контакты',
                    link: '/#contact'
                },
                {
                    id: 5,
                    name: 'Архив',
                    link: 'catalogview'
                },
            ]
        }
    },
}
</script>


<style lang="scss">
.sideMenu{
    display: none;    
}
.sideMenuActive{
    display: block;
}
.btns{
    &-box{
        display: none;
        top: 50px;
        left: 50px;
        border: 1px solid #a9a9a91c;
        height: 96px;
        position: fixed;
        width: 100px;
        z-index: 100;
        background-color: rgb(95 158 160 / 10%);
        backdrop-filter: blur(.2rem);
        border-radius: 10px;
    }

}
.sideBtns{
    font-size: 68px;
    position: relative;
    cursor: pointer;
    // top: 50px;
    // left: 50px;
    color: #000;
    z-index: 101;
}

@media(max-width: 426px){
    // .sideMenu{
    //     display: block;

    // }
    .btns{
        &-box{
            display: block;
        }
    }
}
</style>