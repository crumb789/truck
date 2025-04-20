<template>
    <div class="philosophy animate__animated animate__fadeInUpBig animate__faster animate__delay-2s">
        <div class="philosophy_one">
            <div class="one_title titles">
                Философия комании
                <div class="divider"></div>
            </div>
            <div class="philosophy_one-content">
                <span>Цель нашей компании:</span> стать первым партнером крупного бизнеса в России, осуществляя эффективные и бесперебойные перевозки грузов.
                <br>
                <br>
                <span>Миссия:</span> с каждым днём становиться всё лучше, чтобы в любое время и в любом месте обеспечивать надежные перевозки грузов, помогая крупному бизнесу удовлетворять потребности своих клиентов, расти и развиваться.
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