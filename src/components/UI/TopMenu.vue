<template>
    <div class="menu" v-if="activeSide || widthFromVuex > 425" :class="{activeBack: menuBackActive}">
        <nav>
            <ul class="menu_list" v-if="this.$route.name == 'home'">
                <li @click="activeSide = false" :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
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
                <li @click="activeSide = false" :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
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
    <div class="btns btns-box">
        <div class="open sideBtns animate__animated animate__rubberBand" 
            v-if="!activeSide && widthFromVuex < 426" @click="activeSide = true">
            <i class="bi bi-list"></i>
        </div>
        <div div class="close sideBtns animate__animated animate__jello" 
            v-if="activeSide && widthFromVuex < 426" @click="activeSide = false">
            <i class="bi bi-x-lg"></i>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            widthScreen: 0,
            menuBackActive: false,
            dividerHover: 10,
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
    methods:{
        handleScrollForMenu(){
            let howScroll = window.pageYOffset

            if(howScroll > 80){
                this.menuBackActive = true
            }
            else this.menuBackActive = false
        },
        myEventHandler(e){
            console.log(e)
            console.log('111')

        },
        menuShow(){
            if(this.widthScreen > 426){
                this.activeSide = false
                // console.log('side menu false')
                setTimeout(()=> {
                    this.activeSide = true
                },1000)
            }
            if(this.widthScreen < 426){
                this.activeSide = true
                // console.log('side menu true')
            }
        },

    },
    computed:{
        page(){
            return this.$route.name
        },
        widthFromVuex(){
            return this.$store.state.width
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScrollForMenu);
        
        window.addEventListener('resize' , () => {
            this.widthScreen = document.documentElement.clientWidth;
            // console.log(this.widthScreen, 'new screen size')

            this.menuShow()
        })

        window.addEventListener("load", function () {
            // console.log("All resources finished loading!");
            // const windowWidth = ref(window.innerWidth)
            // this.widthScreen = windowWidth.value
            // console.log(this.widthScreen)


            window.addEventListener('resize' , () => {
            this.widthScreen = document.documentElement.clientWidth;
        })
        });
    },
    mounted(){

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
    &-close{
        
    }
    &-open{

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
.activeBack{
    // background-color: #5f9ea0f7;
    background-color: rgb(95 158 160 / 69%);
    backdrop-filter: blur(1rem);
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

@media(max-width: 1025px){
    .menu{
        width: 100%;
        &_list{
            column-gap: 125px;
        }
    }
}

@media(max-width: 769px){
    .menu{
        height: 60px;
        width: 100%;
        &_list{
            column-gap: 75px;
            font-size: 20px;
        }
    }
}
@media(max-width: 426px){
    .menu{
        background-color: rgb(95 158 160 / 90%);
        backdrop-filter: blur(1rem);
        height: 100%;
        width: 100%;
        &_list{
            font-size: 50px;
            margin-top: 110px;
            gap: 78px;
            flex-direction: column;
            display: flex;
        }
    }
    .btns{
        &-box{
            display: block;
        }
    }
    .activeDivider{
        width: 25% !important;
    }
}

</style>