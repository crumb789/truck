<template>
    <div class="grid" :class="{modalActive: modalOn === true}">
        <div class="grid-img" v-for="img in array" :key="img.id">
            <img @click="choiseImg(img.id)"
            v-if="modalOn === false || modalOn === true && modalId === img.id" 
            :src="img.link" 
            :alt="img.name">
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
                }
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
            }
            else{
                this.modalId = false
                this.modalOn = false
            }
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
        }
    }
}
.modalActive{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 100;
    background-color: #000000a1;
    transition: 0.3s all;
    
    img{
        width: 70%;
        height: 70%;
        object-fit: cover;
    }
}
</style>

