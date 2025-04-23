<template>
    <div class="catalog" :class="{catalogActive: imgActive }">
        <div class="catalog-title" @click="imgActive = !imgActive" >
            Каталог
            <i :class="{arrowBack: imgActive }" class="bi bi-arrow-right"></i>
        </div>
        <div class="catalog_actual">
            <div class="catalog_actual-content">
                <div class="content_actual-link" :class="{opacityLink: imgActive}">
                    Актуальный каталог и наличие можно посмотреть в WhatsApp по 
                    <a href="https://wa.me/c/79013100781" target="_blank" >ссылке</a>
                </div>  
                
                <div :class="{activeImg: actual.id === idImg}" v-for="actual in imagesActual" :key="actual.id" class="content-image">
                    <img v-if="actual.id === idImg"  :class="{active: imgActive}" :src="require(`../assets/images/${actual.imgName}`)" :alt="actual.imgTitle">
                    <!-- <img v-if="actual.id === idImg" :class="{active: imgActive}" src="../assets/images/catalogeImage2.jpg" :alt="actual.imgTitle">
                    <img v-if="actual.id === idImg" :class="{active: imgActive}" src="../assets/images/catalogeImage3.jpg" :alt="actual.imgTitle">
                    <img v-if="actual.id === idImg" :class="{active: imgActive}" src="../assets/images/catalogeImage4.jpg" :alt="actual.imgTitle"> -->
                    <div class="buttons"  v-if="actual.id === idImg && imgActive">
                        <div class="buttons-left" :class="{opacityBnts: imgActive}">
                            <i @click="idImg = idImg - 1" v-if="idImg > 0" class="bi bi-chevron-compact-left"></i> 
                        </div>        
                         
                        <div class="buttons-right" :class="{opacityBnts: imgActive}">
                            <i  @click="idImg = idImg + 1" v-if="idImg < 3" class="bi bi-chevron-compact-right"></i>
                        </div>
                    </div>
                </div>
            </div>   

        </div>
    </div>
</template>

<script>

import catalogeImage from '@/assets/images/catalogeImage1.jpg'
import catalogeImage2 from '@/assets/images/catalogeImage2.jpg'
import catalogeImage3 from '@/assets/images/catalogeImage3.jpg'
import catalogeImage4 from '@/assets/images/catalogeImage4.jpg'


export default {
    data() {
        return{
            imgActive: false,
            catalogeImage,
            catalogeImage2,
            catalogeImage3,
            catalogeImage4,
            idImg: 0,
            imagesActual:[
                {
                    id:0,
                    imgTitle:'catalogeImage1',
                    imgName: 'catalogeImage1.jpg'
                },
                {
                    id:1,
                    imgTitle:'catalogeImage2',
                    imgName: 'catalogeImage2.jpg'
                },
                {
                    id:2,
                    imgTitle:'catalogeImage3',
                    imgName: 'catalogeImage3.jpg'
                },
                {
                    id:3,
                    imgTitle:'catalogeImage4',
                    imgName: 'catalogeImage4.jpg'
                },
            ],
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
    height: 340px;
    transition: 0.4s all;
}
.content{
    &-image{
        // height: 250px;
        display: none;
        height: 300px;
        width: 200px;
        position: absolute;
        left: 900px;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 98;
        img{
            height: 0px;
            width: 0px;
            position: absolute;
            top: 0;
            z-index: 98;
            left: 0;
            border-radius: 15px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.5s all;
            box-sizing: border-box;
            object-fit: cover;   // сохраняет пропорции изображения //
        }
    }
    &_actual{
        &-link{
            opacity: 0;
            transition: 0.5s all;
        }
    }
}
.activeImg{
    display: block !important;
}
.buttons{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 99;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    overflow: hidden;
    transition: 0.5s all;
    &-left{
        opacity: 0;
        position: absolute;
        cursor: pointer;
        left: -34px;
        border: 1px solid #aba7a730;
        border-radius: 100%;
        padding: 32px 0px 32px 32px;
        background-color: #aba7a730;
        transition: 0.3s all;
        &:hover{
            background-color: #aba7a77d;
        }
    }
    &-right{
        opacity: 0;
        position: absolute;
        cursor: pointer;
        right: -34px;
        border: 1px solid #aba7a730;
        border-radius: 100%;
        padding: 32px 32px 32px 0px;
        background-color: #aba7a730;
        transition: 0.3s all;
        &:hover{
            background-color: #aba7a77d;
        }
    }
}
.opacityLink{
    opacity: 1 !important;
}
.opacityBnts{
    opacity: 1 !important;
}
.active{
    height: 300px !important;
    width: 200px !important;
    // left: 235px !important;
    // left: 900px !important;
    left: 0;
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