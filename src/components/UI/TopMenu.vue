<template>
    <div class="menu" :class="{activeBack: menuBackActive}">
        <nav>
            <ul class="menu_list" v-if="this.$route.name == 'home'">
                <li :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
                        @mouseleave="dividerHover = 10"
                    v-for="item in listMenuItems" :key="item.id" class="menu_item">
                        <a  v-if="item.id < 5" :href="item.link">{{ item.name }}</a>
                        
                        <router-link v-if="item.id == 5" :to="{ name: item.link }" >{{ item.name }}</router-link>

                        <div :class="{activeDivider: dividerHover == item.id  }" 
                            class="divider divider-menu">
                        </div>                        
                </li>
            </ul>

            <ul class="menu_list" v-if="this.$route.name == 'catalogview'">
                <li :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
                        @mouseleave="dividerHover = 10"
                    v-for="item in listMenuItemsContacts" :key="item.id" class="menu_item">

                        <router-link :to="item.link" exact>{{ item.name }}</router-link>

                        <!-- <router-link :to="{ name: item.link }" >{{ item.name }}</router-link>   -->

                        <div :class="{activeDivider: dividerHover == item.id  }" 

                        class="divider divider-menu">
                    </div>                        
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return{
            menuBackActive: false,
            dividerHover: 10,
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
    methods:{
        handleScrollForMenu(){
            let howScroll = window.pageYOffset

            if(howScroll > 80){
                this.menuBackActive = true
            }
            else this.menuBackActive = false
        }
    },
    computed:{
        page(){
            return this.$route.name
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScrollForMenu);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScrollForMenu);
    },
}
</script>

<style lang="scss">
nav{
    padding: 15px;
}
.menu{
    background-color: #5f9ea06e;
    // border: 1px solid #3e7375;
    box-shadow: 2px 2px 2px #00000033;
    border-radius: 0 0 4px 4px;
    width: 60%;
    height: 55px;

    border-radius: 5px;
    position: fixed;
    top: 0;
    width: 1160px;
    left: 50%;
    transform: translate(-50%);
    // background-color: rgba(95, 158, 160, 0.48);
    transition: 0.3s all;
    z-index: 100;
    &_list{
        display: flex;
        justify-content: center;
        column-gap: 150px;
    }
    &_item{
        transition: 0.3s all;
        cursor: pointer;
        a{
            font-family: "Oswald", sans-serif;
            font-optical-sizing: auto;
            color: #2c3e50;
            font-weight: 700;
            box-sizing: border-box;
            &:hover{
                color: #fff;
                text-shadow: 1px 1px 2px #242424;
            }
        }
    }
}
.activeBack{
    background-color: #5f9ea0f7;
    border: 1px solid #3e7375;
    border-radius: 0 0 4px 4px;
    width: 100%;
}

.divider{
    &-menu{
        position: absolute;
        margin-top: 0 !important;
        width: 0% !important;
    }
}
.activeDivider{
    width: 5% !important;
}
</style>