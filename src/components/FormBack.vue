<template>
    <div class="feedback">
        <div class="feedback-title titles">Форма связи</div>

        <form class="form" action="#" @submit.prevent="onSubmit">
            <input class="input" type="email" placeholder="Ваш Email для связи" />

            <input class="input" type="text" placeholder="Ваше имя" />

            <input class="input" type="number" placeholder="Телефон для связи"/>

            <button class="button">Отправить</button>

            <div class="policy">
                <router-link to="/policy" target="_blank" >Политика конфиденциальности</router-link>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        onSubmit(){
            console.log('Submit')
        }
    }
}
</script>


<style lang="scss">
.feedback{
    // display: flex;
    // justify-content: space-around;
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
    &-title{
        margin-bottom: 30px;
    }
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin-bottom: 10px;
        width: 300px !important;
    }
}
</style>