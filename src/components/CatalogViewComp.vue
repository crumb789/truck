<template>
    <div class="grid" :class="{modalActive: modalOn === true}">
        <div class="grid-img" v-for="img in array" :key="img.id" :class="{imgActive: modalOn}">
            <img @click="choiseImg(img.id)" @mouseenter="console.log(img.id)" title="Открыть/закрыть"
            v-if="modalOn === false || modalOn === true && modalId === img.id" 
            :src="img.link" 
            :alt="img.name">
            <div class="modalActive_btns" v-if="modalOn && modalId === img.id">
                <div @click="removeToId" v-if="modalId > 0"
                    class="modalActive_btns-left">
                        <i class="bi bi-caret-left"></i>
                </div>
                <div @click="addToId" v-if="modalId < array.length -1 "  
                    class="modalActive_btns-right">
                        <i class="bi bi-caret-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            array:[
                {
                    id:0,
                    link: 'https://i.ibb.co/67CNTrpc/photo-0.jpg',
                    name: 'photo-0',
                },
                {
                    id:1,
                    link: 'https://i.ibb.co/yBqm1kbv/photo-1.jpg',
                    name: 'photo-1',
                },
                {
                    id:2,
                    link: 'https://i.ibb.co/fVPghPyG/photo-2.jpg',
                    name: 'photo-2',
                },
                {
                    id:3,
                    link: 'https://i.ibb.co/twkVc3Km/photo-3.jpg',
                    name: 'photo-3',
                },
                {
                    id:4,
                    link: 'https://i.ibb.co/8g8Hq0Fs/photo-4.jpg',
                    name: 'photo-4',
                },
                {
                    id:5,
                    link: 'https://i.ibb.co/Q38YH98h/photo-5.jpg',
                    name: 'photo-5',
                },
                {
                    id:6,
                    link: 'https://i.ibb.co/rKHTVvkr/photo-6.jpg',
                    name: 'photo-6',
                },
                {
                    id:7,
                    link: 'https://i.ibb.co/q3fCkMpr/photo-7.jpg',
                    name: 'photo-7',
                },
            ],
            modalOn: false,
            modalId: 0,
        }
    },
    methods:{
        choiseImg(id){
            if(this.modalId !== id){
                this.modalId = id
                this.modalOn = true
                this.$store.commit('catalogModalState', true)
            }
            else{
                this.modalId = false
                this.modalOn = false
                this.$store.commit('catalogModalState', false)
            }
        },
        addToId(){
                this.modalId = this.modalId + 1
        },
        removeToId(){
            this.modalId = this.modalId - 1
        }
    },
}
</script>

<style lang="scss">
.grid{
    grid-template-rows: 3fr repeat(2, 1fr) 1fr;
    /* grid-template-rows: 3fr 2fr 2fr 1fr; */
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    height: 95%;
    margin: 0px 0 30px;
    align-items: self-end;
    &-img{
        img{
            border: 2px solid #1c65a8;
            border-radius: 20px;
            width: 100%;
            height: 350px;
            object-fit: cover;
            cursor: pointer;
            box-shadow: 0px 4px 6px 0px rgb(0 0 0 / 60%); 
            transition: 0.3s all;
            &:hover{
                box-shadow: 0px 6px 18px 0px rgb(0 0 0 / 90%); 
            }
        }
    }
}
.imgActive{
    position: absolute;
}
.modalActive{
    position: fixed;
    // width: 100vw;
    // height: 100vh;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 102;
    background-color: rgba(0, 0, 0, 0.8);
    transition: 0.3s all;
    &_btns{
        position: absolute;
        font-size: 60px;
        width: 100%;
        top: 50%;
        &-left{
            position: inherit;
            left: 8%;
            cursor: pointer;
            background-color: rgba(95, 158, 160, 0.1);
            backdrop-filter: blur(0.2rem);
            border: 1px solid #a9a9a91c;
            border-radius: 10px;
            i{
                color: #a4c7c7;
            }
        }
        &-right{
            position: inherit;
            right: 8%;
            cursor: pointer;
            background-color: rgba(95, 158, 160, 0.1);
            backdrop-filter: blur(0.2rem);
            border: 1px solid #a9a9a91c;
            border-radius: 10px;
            i{
                color: #a4c7c7;
            }
        }
    }
    
    img{
        width: 70%;
        height: 70%;
        object-fit: cover;
    }
    
}

@media(max-width: 426px){
    .modalActive{
        &_btns{
            font-size: 100px;
        }
        img{
            width: 85%;
            height: 85%;
        }
    }
}
</style>

