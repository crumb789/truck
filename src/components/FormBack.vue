<template>
    <div class="feedback animate__animated animate__fadeInUpBig animate__faster animate__delay-3s">
        <div class="feedback-title titles">Форма связи</div>

        <form class="form" action="#" @submit.prevent="onSubmit">
            <input class="input" type="text" name="name" placeholder="Ваше имя" v-model="NamePersonal"  required />
            
            <input class="input" type="email" name="email" placeholder="Ваш Email для связи" v-model="MailPersonal" required />

            <input class="input" type="tel" name="phone" placeholder="Телефон для связи" minlength="10" maxlength="12" v-model="PhonePersonal" />

            <textarea class="textarea" placeholder="Короткое сообщение" v-model="MessagePersonal" required></textarea>
            
            <div class="policy">
                <router-link to="/policy" target="_blank" >Политика конфиденциальности</router-link> 
                <input type="checkbox" id="check" name="check" title="Согласиться с политикой конфиденциальности" required> 
            </div>

            <button class="button">
                Отправить 
                <i v-if="loaderShow" class="loader"></i>
            </button>
                <div v-if="showMessage" class="message mt-2">
                   Отправлено!
                </div>
                <div v-if="showMessageFalse" class=" message message-false mt-2">
                    Ошибка отправки...
                </div>
        </form>
    </div>
</template>


<script>

import emailjs from 'emailjs-com';

export default {
    data() {
        return{
            NamePersonal:'',
            MailPersonal:'',
            PhonePersonal:'',
            MessagePersonal: '',

            loaderShow: false,
            showMessage: false,
            showMessageFalse: false,

        }
    },
    computed:{
        arrayKeys(){
            return this.$store.state.keysMail[0]    /* keys from store */
        },
    },  
    methods:{
        onSubmit(){
            this.sendEmail()

            // onSubmit()
        },
        deleteString(){
            this.MessagePersonal = ''
        },
        async sendEmail() {
            // формируем данные для письма, в шаблоне отображение по имени ключа
            var template = {
                name: this.NamePersonal,
                email: this.MailPersonal,
                message: this.MessagePersonal,
                phone: this.PhonePersonal
            };
            

            // отправка на сервер
            this.loaderShow = true
            await  emailjs.send(this.arrayKeys.serv, this.arrayKeys.templ, template, this.arrayKeys.key)
            .then((result) => {
                    console.log('Mail Send!', result.text);
                    this.showMessage = true
                    this.deleteString()
                    this.loaderShow = false
                    setTimeout(() => this.showMessage = false, 3000)
                }, (error) => {
                    console.log('Sending error...try later', error.text);                    
                    this.showMessageFalse = true
                    this.loaderShow = false
                    setTimeout(() => this.showMessage = false, 3000)
                }) 

        },

    }
}
</script>


<style lang="scss">
.feedback{
    // display: flex;
    // justify-content: space-around;

    border-top: 1px solid #2a2a2a;  /* gradient */
    // box-shadow: 0px -3px 10px #2a2a2a; /* gradient */
    background: linear-gradient(180deg, rgb(158 188 159 / 78%), #1c65a800);  /* gradient */


    // background-color: #9ebc9fc9; !!!!!!!!ne gradient
    margin: 0 auto;
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    border-radius: 8px 8px 0 0;
    // border: 1px solid #2a2a2a; !!!!!!!!!!!!ne gradient
    // box-shadow: 0px -1px 11px #3e3e3e; ne !!!!!!!!!!!gradient
    // opacity: 0.8 !important;
    transition: 0.4s all;
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
        background-color: #1c65a8;
        &::placeholder{
            color: #ffffff9d;
        }
    }

    .policy{
        margin-top: 20px;
        display: flex;
        gap: 20px;
        a{
            color: #2a2a2a;
            &:hover{
                color: #1b1836ad;
            }
        }
        #check{
           width: 20px !important; 
           margin: 0 auto !important;
           cursor: pointer !important;
        }
    }
    .button{
        margin-top: 15px;
    }
}
.textarea{
    background-color: #1c65a8;
    min-height: 180px;
    max-height: 200px;

    min-width: auto;
    width: 300px !important;
    &::placeholder{
        color: #ffffff9d;
    }
}
.button{
    position: relative;
}
.loader{
    position: absolute;
    right: -32px;
    font-size: x-large;
}
</style>