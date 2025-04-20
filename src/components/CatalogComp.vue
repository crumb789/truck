<template>
    <div class="catalog" :class="{catalogActive: imgActive }">
        <div class="catalog-title" @click="imgActive = !imgActive" >
            Каталог
            <i :class="{arrowBack: imgActive }" class="bi bi-arrow-right"></i>
        </div>
        <div class="catalog_actual">
            <div class="catalog_actual-content">
                <div class="content-image">
                    <img :class="{active: imgActive}" src="../assets/images/catalogeImage.jpg" alt="">
                </div>
                 <div class="content_actual-link" :class="{opacityLink: imgActive}">
                    Актуальный каталог и наличие можете посмотреть в WhatsApp по 
                    <a href="https://wa.me/c/79013100781" target="_blank">ссылке</a>
                 </div>  
                
            </div>
            <!-- <div class="catalog_acutual-link">
                <a href="https://wa.me/c/79013100781">перейти по ссылке</a>
            </div> -->

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            imgActive: false,
        }
    },
}
</script>

<style lang="scss">
.catalog{
    background-color: #2f49a3a8;
    width: 98%;
    margin: 0 auto;
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    height: 100px;
    display: flex;
    align-items: center;
    // justify-content: flex-end;
    justify-content: center;
    transition: 0.4s all;
    // z-index: 99;
    &-title{
        position: relative;
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-size: 24px;
        color: #230903;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        text-align: left;
        background-color: #F4F2F3;
        padding: 5px 70px 5px 12px;
        border-radius: 5px;
        color: #230903;
        transition: 0.5s all;
        cursor: pointer;
        z-index: 99;
        box-shadow: 3px 2px 7px #181818;

        &:hover{
            // box-shadow: 3px 2px 10px #181818;
        }
        &:active{
            -webkit-box-shadow: 3px 2px 3px 0px #838282 inset;
            -moz-box-shadow: 3px 2px 3px 0px #838282 inset;
            box-shadow: 3px 2px 3px 0px #838282 inset;
        }
    }
    &_actual{
        &-content{
            display: flex;
            justify-content: space-between;
            margin-right: 5px;
            flex-direction: row;
            -moz-column-gap: 50px;
            text-align: right;
            color: #ffffff;
            border-radius: 3px;
            padding: 6px;
            text-shadow: 1px 1px 2px #242424;
            letter-spacing: 0.5px;
            a{
                font-family: "Oswald", sans-serif;
                font-optical-sizing: auto;
                font-size: 24px;
                color: #230903;
                left: 15px;
                text-align: left;
                background-color: #F4F2F3;
                padding: 3px 5px 5px 5px;
                border-radius: 5px;
                color: #230903;
                text-decoration: none;
                transition: 0.5s all;
                cursor: pointer;
            }
        }
        
    }
}
.catalogActive{
    background-color: rgb(95 158 160 / 48%);
    height: 280px;
    transition: 0.4s all;
}
.content{
    &-image{
        // height: 250px;
        img{
            height: 2px;
            position: absolute;
            top: 0;
            z-index: 98;
            left: 15px;
            border-radius: 72px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.5s all;
        }
    }
    &_actual{
        &-link{
            opacity: 0;
            transition: 0.5s all;
        }
    }
}

.opacityLink{
    opacity: 1 !important;
}

.active{
    height: 250px !important;
    // left: 235px !important;
    left: 900px !important;
    transition: 0.5s all;
    border: 1px solid #2a2a2a;
}
.bi-arrow-right::before{
        transform: rotate(0deg);
        transition: 0.5s all;
    }
.arrowBack{    
    &.bi-arrow-right::before{
        transform: rotate(180deg);
        transition: 0.5s all;
    }
}
</style>