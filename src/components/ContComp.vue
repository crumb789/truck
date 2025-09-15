<template>
  <div v-if="contactShowOnVuex" class="contact animate__animated animate__fadeInUpBig animate__faster" id="contact">
    <div class="contact-title titles">
       Обратная связь и контакты
    </div>
    <div class="contact-map">
      <div class="contact-map_descr">
        Мы находимся в г.Санкт‑Петербург, пер.Химический, дом 1, литера О, помещение 2-Н, офис 408
      </div>
      <div style="position:relative;overflow:hidden;">
        <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a>
        <a href="https://yandex.ru/maps/2/saint-petersburg/house/khimicheskiy_pereulok_1lito/Z0kYdA9iTkwFQFtjfXR5dnVmYA==/?ll=30.283416%2C59.888086&utm_medium=mapframe&utm_source=maps&z=17" style="color:#eee;font-size:12px;position:absolute;top:14px;">Химический переулок, 1литО на карте Санкт‑Петербурга — Яндекс Карты</a>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=30.283416%2C59.888086&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=30.282792%2C59.887954&whatshere%5Bzoom%5D=17&z=17" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;">
        </iframe>
    </div>
    </div>
    <p class="contact-text">Можете связаться с нами удобным для вас способом!
      <a href="tel:+79013100781" title="Позвонить нам">
        <i class="bi bi-telephone-outbound phone phone_contact ">
        </i>
      </a> 
    </p>
      <div class="contact-icons">
        Написать нам в Whatsapp
        <a href="https://wa.me/+79013100781/?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B7%D0%BE%D0%BA"
            target="_blank">
          <i id="whatsapp" class="bi bi-whatsapp"></i>
        </a>
        <a href="#" target="_blank">
          <i id="telegram" class="bi bi-telegram"></i>
        </a>
        Написать нам в Telegram
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  computed:{
    contactShowOnVuex(){
      return this.$store.state.contactHide
    }
  }
}
</script>


<style lang="scss">
.contact{
    background-color: rgb(95 158 160 / 48%);
    width: 98%;
    margin: 0 auto;
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    color: #fff;
    text-shadow: 1px 1px 2px #242424;
    letter-spacing: 0.5px;
    &-map{
      margin: 30px 0;
      box-sizing: border-box;
      &_descr{
        // color: #fff;
        margin-bottom: 10px;
        // text-shadow: 1px 1px 2px #242424;
        // letter-spacing: 0.5px;
      }
      iframe{
          position: relative;
          border: 1px solid #000;
          border-radius: 6px;
      }
    }
    &-icons{
      margin-top: 0px;
      display: flex;
      justify-content: center;
      column-gap: 10px;
      align-items: center;
      // color: #fff;
      // text-shadow: 1px 1px 2px #242424;
      // letter-spacing: 0.5px;
      a{
        i{
          font-size: 50px;
        }
      }
    }
    &-text{
      a{
        position: relative;
      }
    }
}
#whatsapp{
  color: #25d366;
  margin-right: 20px;
}
#telegram{
  color: #18a3e6;
  margin-left: 20px;
}
.phone{
  &_contact{
    position: absolute;
    opacity: 1;
    color: #7daaa5;
    // color: #eaf0f2;
    margin-left: 10px;
    font-size: 25px;
    top: 50%;
    transform: translate(0, -50%);
    right: -35px;
  }
  &:hover{
    animation: none;
  }
}

@media(max-width: 769px){
  .contact{
    &-map{
      &_descr{
        font-size: 22px;
      }
    }
    &-text{
      font-size: 22px;
    }
    &-icons{
      font-size: 22px;
    }
  }
}
</style>






