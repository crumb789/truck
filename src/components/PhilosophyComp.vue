<template>
    <div class="philosophy animate__animated animate__fadeInUpBig animate__faster animate__delay-2s"
        :class="{philosophyMoveLeftTop: whereBackMove == 1, philosophyMoveRightTop: whereBackMove == 2,
            philosophyMoveRightBottom: whereBackMove == 3, philosophyMoveLeftBottom: whereBackMove == 4}">
        <ul class="philosophy-grid">
                <li @mouseenter="whereBackMove = 1" @mouseleave="whereBackMove = 0">
                    <i :class="{circleTop: whereBackMove == 1}" 
                    class="bi bi-circle-fill circle circle-one"></i>
                </li>
                <li @mouseenter="whereBackMove = 2" @mouseleave="whereBackMove = 0">
                    <i :class="{circleTop: whereBackMove == 2}" 
                    class="bi bi-circle-fill circle circle-two"></i>
                </li>
                <li @mouseenter="whereBackMove = 3" @mouseleave="whereBackMove = 0">
                    <i :class="{circleBottom: whereBackMove == 3}" 
                    class="bi bi-circle-fill circle circle-three"></i>
                </li>
                <li @mouseenter="whereBackMove = 4" @mouseleave="whereBackMove = 0">
                    <i :class="{circleBottom: whereBackMove == 4}" 
                    class="bi bi-circle-fill circle circle-four"></i>
                </li>
        </ul>
        <div class="philosophy_one">
            <div class="one_title titles">
                Философия компании
                <div class="divider"></div>
            </div>
            <div class="philosophy_one-content">
                <span>Цель нашей компании:</span> стать партнером крупного бизнеса в России, осуществляя эффективные и бесперебойные перевозки грузов.
                <br>
                <br>
                <span>Миссия:</span> с каждым днём становиться всё лучше, чтобы в любое время и в любом месте обеспечивать надежные перевозки грузов, помогая удовлетворять потребности каждлго клиента, расти и развиваться.
            </div>
        </div>
        <div class="philosophy_two">
            <div class="two_title titles" :class="{hide: whereBackMove != 0 }">
                Наши ценности
                <!-- <div class="divider"></div> -->
            </div>
            <!-- <div class="philosophy_two-content">
                Всегда быть честными со своими клиентами и партнерами
                <span></span>
                Ответственно и качественно   выполнять поставленные задачи
                <span></span>
                Проявлять уважение к людям и помогать им
                <span></span>
                Постоянно учиться и развиваться
            </div> -->
            <div class="philosophy_two-content">
                <div class="content-item" :class="{activeItem: whereBackMove == 1}">
                    Всегда быть честными со своими клиентами и партнерами
                </div>
                <div class="content-item" :class="{activeItem: whereBackMove == 2}">
                    Ответственно и качественно   выполнять поставленные задачи
                </div>
                <div class="content-item" :class="{activeItem: whereBackMove == 3}">
                    Проявлять уважение к людям и помогать им
                </div> 
                <div class="content-item" :class="{activeItem: whereBackMove == 4}">
                    Постоянно учиться и развиваться
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{
            // backMove: false,
            whereBackMove: 0,
        }        
    },
}
</script>


<style lang="scss">
.philosophy{
    display: flex;
    justify-content: space-around;
    background-color: #9ebc9fc9;
    margin: 0 auto;
    padding: 100px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    border-radius: 8px;
    border: 1px solid #2a2a2a;
    box-shadow: 0px -1px 11px #3e3e3e;
    // opacity: 0.8 !important;
    transition: 4s all;
    overflow: hidden;
    &:hover{
        /* opacity: 1 !important; */
    }
    &_one{
        width: 50%;
        display: none;
        &-content{
            margin-top: 20px;
            text-align: left;
            background-color: #5f9ea0bd;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            span{
                font-weight: 600;
                color: rgb(242 240 241);
                text-shadow: 1px 1px 2px #423f3f;
            }
        }
    }
    &_two{
        width: 50%;
        &-content{
            text-align: center;
            // margin-top: 20px;
            // background-color: #5f9ea0bd;
            // padding: 10px;
            box-sizing: border-box;
            margin-left: 5px;
            border-radius: 10px;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                display: grid;
                grid-template-columns: repeat(2, 50%);
                grid-template-rows: repeat(2, 50%);
                z-index: 50;
            span{
                display: block;
                width: 3px;
                height: 18px;
                border-radius: 2px;
                background-color: #315270e0;
                margin: 0 auto;
            }
        }
    }
    &-grid{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(2, 50%);
        z-index: 55;
        cursor: pointer;
    }
    &::before{
        content: "";
        background-image: url(/src/assets/images/phil-back.jpg);
        // -webkit-background-size: 100% 800%;
        -moz-background-size: cover;
        -o-background-size: cover;
        // background-size: 100% 800%;
        opacity: 0.5;
        position: absolute;
        z-index: -1;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 7px;
        background-position: center;
        transition: 1s all;
    }
    
}

.philosophyMoveLeftTop{
    &::before{
        background-position-x: left;
        background-position-y: top;
    }
}
.philosophyMoveRightTop{
    &::before{
        background-position-x: right;
        background-position-y: top;
    }
}
.philosophyMoveRightBottom{
    &::before{
        background-position-x: left;
        background-position-y: bottom;
    }
}

.philosophyMoveLeftBottom{
    &::before{
        background-position-x: right;
        background-position-y: bottom;
    }
}

.titles{
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    text-align: center;
    font-size: 24px;
    border-radius: 5px;
    color: #F4F2F3;
    text-shadow: 1px 1px 2px #242424;
    letter-spacing: 1px;
}
.divider{
    height: 4px;
    width: 8%;
    background-color: #1c65a8e0;
    transition: 0.4s all;
    border-radius: 2px;
    margin: 0 auto;
    margin-top: 5px;
}

.one{
    &_title{
        cursor: pointer;
        
        &:hover{
            .divider{
                width: 58%;
            }
        }
    }
}
.two{
    &_title{
        cursor: pointer;
        font-size: 44px;
        transition: 0.3s all;
        &:hover{
            .divider{
                width: 58%;
            }
        }
    }
}
.content{
    &-item{
        opacity: 0;
        color: #fff;
        text-shadow: 1px 1px 2px #242424;
        &:nth-child(1){
            background-color: #525174d5;
        }
        &:nth-child(2){
            background-color: #a69cacda;
        }
        &:nth-child(3){
            background-color: #348aa7d2;
        }
        &:nth-child(4){
            background-color: #513b56d0;
        }
    }
}
.activeItem{
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s all;
    background-color: #000;
    border: 1px solid #696969;
    padding: 15px;
    font-size: 24px;
    border-radius: 5px;
    z-index: 100;
}
.hide{
    opacity: 0;
}

.circle{
    position: absolute;
    z-index: 50;
    transition: 0.5s all;
    &-one{
        font-size: 40px;
        left: 14%;
        
        color: #52517480;
        animation: lt 3s infinite ease-in;
    }
    &-two{
        font-size: 35px;
        color: #a69cac85;
        animation: rt 4s infinite ease-in;
        right: 25%;
    }
    &-three{
        font-size: 33px;
        color: #348aa777;
        animation: lb 4s infinite ease-in;
        bottom: 15%;
        left: 15%;        
    }
    &-four{
        font-size: 45px;
        color: #513b5681;
        animation: rb 6s infinite ease-in;
        right: 10%;
        bottom: 10%;
    }
}

@keyframes lt {
    0%{
        left: 14%;
        top: 2%;
        font-size: 40px;
    }
    25%{
        left: 15%;
        top: 20%;
        font-size: 37px;
    }
    50%{
        left: 16%;
        top: 10%;
       font-size: 38px;

    }
    100%{
        left: 14%;
        top: 2%;
        font-size: 40px;
    }
    
}
@keyframes rt {
    0%{
        right: 25%;
        top: 3%;
        font-size: 35px;
    }
    25%{
        right: 26%;
        top: 18%;
        font-size: 27px;
    }
    50%{
        right: 23%;
        top: 17%;
        font-size: 33px;

    }
    100%{
        right: 25%;
        top: 3%;
        font-size: 35px;
    }
}

@keyframes rb {
    0%{
        right: 10%;
        bottom: 10%;
        font-size: 50px;
    }
    25%{
        right: 15%;
        bottom: 11%;
        font-size: 52px;
    }
    50%{
        right: 12%;
        bottom: 9%;
        font-size: 44px;

    }
    100%{
        right: 10%;
        bottom: 10%;
        font-size: 50px;
    }
}

@keyframes lb {
    0%{
        bottom: 15%;
        left: 15%;   
        font-size: 33px;
    }
    25%{
        left: 17%;
        bottom: 11%;
        font-size: 46px;
    }
    50%{
        left: 16%;
        bottom: 12%;
        font-size: 36px;

    }
    100%{
        left: 15%;
        bottom: 15%;
        font-size: 33px;
    }
}
.circleBottom{
        animation: auto;
        // left: 50%;
        top: 45%;
        font-size: 225px;
        // transform: translate(-50%, -50%);     
        &.bi-circle-fill{
            &::before{
                transition: 0.5s all;
            }
        }
}
.circleTop{
        animation: auto;
        // left: 50%;
        bottom: 45% !important;
        font-size: 225px;
        // transform: translate(-50%, -50%);  
        &.bi-circle-fill{
            &::before{
                transition: 0.5s all;
            }
        }
}
</style>