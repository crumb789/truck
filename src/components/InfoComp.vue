<template>
    <div class="info">
        <div class="info-title titles">
            РЕКВИЗИТЫ ООО «ДУКАТ»
        </div>
        <div class="info_list">
                <div class="list" v-for="info in dataInformation" :key="info.id">
                    <div class="list_name">
                        {{ info.name }}:
                    </div>
                    <div class="list_value" v-if="info.value">
                        {{ info.value }}
                    </div>
                    <div class="list_adress" v-if="info.adress">
                        <a href="https://yandex.ru/maps/-/CHbHvKzI" target="_blank" title="Показать на картах">
                            {{ info.adress }}
                        </a>
                    </div>
                    <div class="list_phone" v-if="info.phone">
                        <a href="tel:+79013100781" title="Позвонить нам">{{ info.phone }}</a>                        
                    </div>
                    <div class="list_email" v-if="info.email">
                        <a href="mailto:dukatstroy@gmail.com" title="Написать нам">{{ info.email }}</a>                        
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            dataInformation: [
                {   
                    id: 0,
                    name: 'ИНН',
                    value: '7805817630',
                },
                {   
                    id: 1,
                    name: 'КПП',
                    value: '780501001',
                },
                {   
                    id: 2,
                    name: 'ОГРН',
                    value: '1247800083607',
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
                    phone: '+7 901-310-07-81'
                },
                {   
                    id: 10,
                    name: 'Эл. почта',
                    email: 'dukatstroy@gmail.com',
                },
                {   
                    id: 11,
                    name: 'Генеральный директор',
                    value: 'Мищенко Михаил Валерьевич',
                }
            ],
        }
    },
}
</script>

<style lang="scss">
.info{
    // background-color: #9ebc9fc9;
    background-color: #1f3020c9;    
    margin: 0 auto;
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    border-radius: 8px;
    border: 1px solid #2a2a2a;
    box-shadow: 0px -1px 5px #3e3e3e;
    // opacity: 0.8 !important;
    transition: 0.4s all;
    &_list{
        margin-top: 15px;
        color: #fff;
    }
}

.list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 7px;
    &_name{
        text-align: left;
    }
    &_value{
        text-align: right;
    }
    &_adress{
        text-align: right;
    }
    a{
        color: #fff;
    }
}
</style>