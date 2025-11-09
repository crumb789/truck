import { createStore } from 'vuex'


import { ref } from 'vue'

const windowWidth = ref(window.innerWidth)
// console.log(windowWidth.value, 'vuex')

export default createStore({
  state: {
    width: windowWidth.value,
       /*  Код от функции появление блоков по прокрутке, работает нестабильно, мб пересмотреть  */
    philHide: true,
    catalogHide: true,
    infoHide: true,
    contactHide: true,
    formHide: true,
       /*  Код от функции появление блоков по прокрутке, работает нестабильно, мб пересмотреть  */
    contactData: [
      {   
          id: 0,
          name: 'ИНН',
          value: '-',
          hide: '7805817630',
      },
      {   
          id: 1,
          name: 'КПП',
          value: '-',
          hide: '780501001',
      },
      {   
          id: 2,
          name: 'ОГРН',
          value: '-',
          hide: '1247800083607',
      },
      {   
          id: 3,
          name: 'Расчетный счет',
          value: '-',
          hide: '40702810320000134118',
      },
      {   
          id: 4,
          name: 'БИК',
          value: '-',
      },
      {   
          id: 5,
          name: 'Корр. счет',
          value: '-',
          valueHide: '30101810745374525104',
      },
      {   
          id: 6,
          name: 'Юридический адрес',
          value:'',
          adress: `198095, Город Санкт-Петербург, 
          вн.тер. г. Муниципальный Округ Нарвский Округ,
            пер Химический, дом 1, литера О, 
            помещение 2-Н, офис 408`,
      },
      {   
          id: 7,
          name: 'Оператор ЭДО',
          value: 'АО «Калуга Астрал»',
          valueHide: '-'
      },
      {   
          id: 8,
          name: 'Идентификатор ЭДО',
          value: '-',
          valueHide: '2AE57C66832-E2C3-45C2-B64A-C7E69988B1D9',
      },
      {   
          id: 9,
          name: 'Телефон',
          phone: '+7 995-555-55-55',
          valueHide: '+7 901-310-07-81'
      },
      {   
          id: 10,
          name: 'Эл. почта',
          email: 'petdukat@mail.com',
          valueHide: 'dukatstroy@gmail.com'
      },
      {   
          id: 11,
          name: 'Генеральный директор',
          value: 'Иванов Дмитрий Иванович',
          valueHide: 'Мищенко Михаил Валерьевич'
      }
    ],
    keysMail:[
      {
        serv: 'service_cnnfavq',
        templ: 'template_qzxv2xf',
        key: 'QccUYVTCDVBSE0JEN',
      }
    ],
    catalogModalOn: false,

  },
  getters: {
  },
  mutations: {
    catalogModalState(state, trueOrFalse){
      state.catalogModalOn = trueOrFalse
    }
    // philShow(state){
    //   state.philHide = true
    // },
    // catalogShow(state){
    //   state.catalogHide = true
    // },
    // infoShow(state){
    //   state.infoHide = true
    // },
    // contactShow(state){
    //   state.contactHide = true
    // },
    // formShow(state){
    //   state.formHide = true
    // }
  },
  actions: {
  },
  modules: {
  }
})