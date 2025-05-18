<template>
    <div class="philosophy animate__animated animate__fadeInUpBig animate__faster animate__delay-2s"
        :class="{philosophyMoveLeftTop: whereBackMove == 1, philosophyMoveRightTop: whereBackMove == 2,
            philosophyMoveRightBottom: whereBackMove == 3, philosophyMoveLeftBottom: whereBackMove == 4}">
        <ul class="philosophy-grid">
                <li @mouseenter="whereBackMove = 1" @mouseleave="whereBackMove = 0"></li>
                <li @mouseenter="whereBackMove = 2" @mouseleave="whereBackMove = 0"></li>
                <li @mouseenter="whereBackMove = 3" @mouseleave="whereBackMove = 0"></li>
                <li @mouseenter="whereBackMove = 4" @mouseleave="whereBackMove = 0"></li>
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
            <div class="two_title titles">
                Ценности
                <div class="divider"></div>
            </div>
            <div class="philosophy_two-content">
                Всегда быть честными со своими клиентами и партнерами
                <span></span>
                Ответственно и качественно   выполнять поставленные задачи
                <span></span>
                Проявлять уважение к людям и помогать им
                <span></span>
                Постоянно учиться и развиваться
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
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    border-radius: 8px;
    border: 1px solid #2a2a2a;
    box-shadow: 0px -1px 11px #3e3e3e;
    // opacity: 0.8 !important;
    transition: 4s all;
    &:hover{
        /* opacity: 1 !important; */
    }
    &_one{
        width: 50%;
        
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
            margin-top: 20px;
            background-color: #5f9ea0bd;
            padding: 10px;
            box-sizing: border-box;
            margin-left: 5px;
            border-radius: 10px;
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
        &:hover{
            .divider{
                width: 58%;
            }
        }
    }
}
</style>