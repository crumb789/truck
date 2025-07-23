<template>
    <div class="about animate__animated animate__fadeInUpBig animate__faster animate__delay-1s" id="about">
        <div class="about_title">
            О компании 
            <div class="about_title-descr">
                Доставим груз повсюду, где проедут колеса
            </div>
        </div>
        <div class="about-content">
            <div class="boxes">
                <div class="box_left">
                    <p>
                        Если взглянуть на карту России, будет очень сложно найти место, куда мы не можем добраться.
                        <br>
                        <br>
                        Мы побывали во многих уголках нашей 
                        необъятной страны и доставили тысячи тонн различных грузов.
                        <br>
                        <br>
                        Благодаря высокопрофессиональным 
                        сотрудникам и современному автопарку, Транспортная компания «Дукат» собирается стать первым помощником для среднего и 
                        крупного бизнеса.
                    </p>
                </div>
                <div class="box_right">
                    <p>
                        ООО «Дукат» существует на рынке с 2024 года.
                        <br>
                        <br>
                        Филиал компании находится г.Санкт-Петербург.
                        <br>
                        <br>
                        Транспортная компания «Дукат» предлагает 
                        сотрудничество по грузоперевозкам на территории Российской Федерации.
                        А так же ПРОДАЖЕЙ, АРЕНДОЙ рефрежераторных и спец. контейнеров!
                    </p>
                </div>
            </div>
        </div>
        <img class="truckImg" src="../assets/icons/truck-long-svgrepo-com.svg" alt="truck">
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
}
</script>


<style lang="scss">
.about{
    // background-color: rgb(95 158 160 / 48%);
    background: linear-gradient(#2de9ef00, #7ea2a37a);
    width: 98%;
    margin: 0 auto;
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    &_title{
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-size: 24px;
        color: #230903;
        position: absolute;
        left: 15px;
        text-align: left;
        background-color: #F4F2F3;
        padding: 5px 70px 5px 12px;
        border-radius: 5px;
        color: #230903;
        transition: 0.5s all;
        cursor: pointer;
        &:hover{
            box-shadow: 3px 2px 10px #181818;
        }
        &-descr{
            font-size: 18px;
        }
    }
}
.boxes{
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    text-align: left;
    color: #ffffff;
    border-radius: 3px;
    padding: 6px;
    text-shadow: 1px 1px 2px #242424;
    letter-spacing: 0.5px;
}
.box{
    &_left{
        width: 50%;
    }
    &_right{
        width: 50%;
    }
}

.truckImg{
    position: absolute;
    width: 350px;
    top: 190px;
    z-index: -1;
    opacity: 0.2;
    // right: 110px;
    animation: moving 5s infinite ease-in-out;
}

@keyframes moving {
    0%{
        right: 110px;
    }
    25%{
        right: 130px;
    }
    50%{
        right: 95px;
    }
    75%{
        right: 155px;
    }
    100%{
        right: 110px;
    }
}
</style>