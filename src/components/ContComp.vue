<template>
  <div class="contact">
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
    Можете связаться с нами удобным для вас способом!
      <div class="contact-icons">
        Написать нам в Whatsapp
        <a href="#">
          <i id="whatsapp" class="bi bi-whatsapp"></i>
        </a>
        <a href="#">
          <i id="telegram" class="bi bi-telegram"></i>
        </a>
        Написать нам в Telegram
      </div>
    
  </div>
</template>


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
}
#whatsapp{
  color: #25d366;
  margin-right: 20px;
}
#telegram{
  color: #18a3e6;
  margin-left: 20px;
}

</style>






