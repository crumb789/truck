<template>
    <div class="menu">
        <nav>
            <ul class="menu_list">
                <li :class="{menuHome: item.id == 0}" @mouseenter="dividerHover = item.id"
                        @mouseleave="dividerHover = 10"
                    v-for="item in listMenuItems" :key="item.id" class="menu_item">
                        <a :href="item.link">{{ item.name }}</a>
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
            dividerHover: 10,
            listMenuItems: [
                {
                    id: 0,
                    name: 'Home',
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
            ]
        }
    },
}
</script>

<style lang="scss">
nav{
    padding: 15px;
}
.menu{
    border-radius: 5px;
    position: fixed;
    top: 0;
    width: 1160px;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(95, 158, 160, 0.48);
    z-index: 100;
    &_list{
        display: flex;
        justify-content: center;
        column-gap: 160px;
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
.menuHome{

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