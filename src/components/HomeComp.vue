<template>
    <div class="home" id="home">
        <div class="box-title">
            <img  class="logo" alt="Vue logo" src="../assets/logo.png">
            <h1 class="title">
                <!-- <img class="russ" src="../assets/icons/russia_1868186.png" alt="russia"> -->
            </h1> 
        </div>
        <div class="box-descr">
            <h2 class="box-descr_title">Предложение о сотрудничестве 
              <img class="russ" src="../assets/icons/russia_1868186.png" alt="russia">
            </h2>
            <h2 class="animate__animated animate__lightSpeedInLeft animate__delay-1s "
              @mouseenter="activeCall = true" @mouseleave="activeCall = false"> 
              <span>
                <img class="spanTruck" :class="{truckHidden: activeCall}" :src="truckIcon" alt="truckIcon">
                Дукат 
                <a href="tel:+79013100781" title="Позвонить нам">
                  <i :class="{phoneActive: activeCall}" 
                    class="bi bi-telephone-outbound phone">
                  </i>
                </a>                
              </span>
            </h2>
            <h4>
                <span>
                Перевозки любой сложности
                по всей России и зарубежью.
                Обеспечим комфорт и уверенность
                в выполнении грузоперевозок.
                </span>
            </h4>
        </div>
    </div>
</template>


<script>

import truckIcon from '@/assets/icons/local_shipping_2.svg'

export default {
  data() {
    return{
      truckIcon,
      activeCall: false,
    }
    
  },
}
</script>

<style lang="scss">
.home{
  display: flex;
  background-color: #9ebc9f;
  position: relative;
  padding: 17px 10px;
  border-radius: 10px;
  // align-items: flex-end;
  align-items: center;
  justify-content: space-between;
  background-image: url(/src/assets/images/shutterstock_1546486415-scaled.jpg);
  // -webkit-background-size: 100% 800%;
        -moz-background-size: cover;
        -o-background-size: cover;
        // background-size: 100% 800%;
  scroll-behavior: smooth; ///плавная прокрутка по ссылке по стр
  box-shadow: 3px 3px 11px #181818;
  margin-top: 65px;
}
.title{
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  color: #230903;
  display: flex;
  gap: 5px;
  align-items: center;
}
.logo{
  width: 210px;
  border-radius: 100%;
}
.russ{
  width: 50px;
}
.box{
  &-title{
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: center;
    width: 300px;
    padding: 10px;
  }
  &-descr{
    display: flex;
    flex-direction: column;
    width: 525px;
    margin-right: 15px;
    &_title{
      background: rgba(95, 158, 160, 0.8588235294);
      padding: 6px;
      border-radius: 3px;
      box-shadow: 3px 2px 8px #181818;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }  
}
h2{
  position: relative;
  text-align: end;
  color: #F4F2F3;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px #242424;

  span{
    position: relative;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-size: 24px;
    color: #230903;
    background-color: #F4F2F3;
    text-decoration: underline;
    width: 150px;
    padding: 5px 12px 5px 70px;
    border-radius: 3px;
    text-transform: uppercase;
    margin-top: 10px;
    text-shadow: none;
    box-shadow: 3px 2px 8px #181818;
    cursor: pointer;
    transition: 0.3s all;
    &:hover{
      padding: 5px 70px 5px 12px;
    }
    
  }
}
.spanTruck{
    height: 35px;
    position: absolute;
    left: 34px;
    transform: scaleX(-1);
    bottom: -5px;
    transition: 0.3s all;
}
.truckHidden{
  opacity: 0;
  left: -20px;
}
.phone{
  position: absolute;
  opacity: 0;
  right: 20px;
  top: 5px;
  transition: 0.4s all;
  color: #2952a4;
  &:hover{
    animation: heartBeat 2s 2;
  }
}
.phoneActive{
  opacity: 1;
}

h4{
  text-align: end;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  color: #230903;
  margin-top: 15px;

  background: #5f9ea0db;
    color: #ffffff;
    border-radius: 3px;
    padding: 6px;
    /* text-wrap-style: balance; */
    text-shadow: 1px 1px 2px #242424;
    letter-spacing: 0.5px;
}

@media(max-width: 769px){
  .home{

  }
  .box{
    &-descr{
      width: 640px;
      &_title{
        font-size: 35px;
        .russ{
          width: 60px;
        }
      }
      h2{
        span{
          font-size: 40px;
        }
      }
      h4{
        span{
          font-size: 20px;
        }
      }
    }
  }

  .spanTruck{
    height: 50px;
    left: 22px;
  }
}
</style>