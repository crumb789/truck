<template>
    <div class="topBtn" :class="{activeBTN: btnActive}">
        <a href="#top" id="back-to-top" class="back-to-top" title="Вернуться наверх">
            <i class="bi bi-chevron-double-up"></i>
        </a>
    </div>
</template>


<script>
export default {
    data() {
        return{
            btnActive: false,
        }
    },
    methods:{
        handleScroll(){
            let howScroll = window.pageYOffset

            if(howScroll > 200 ){
                this.btnActive = true
            }
            else this.btnActive = false
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },

}
</script>
<style lang="scss">

.topBtn{
    position: fixed;
    bottom: 50px;
    z-index: 100;
    font-size: 30px;
    display: none;
    left: 19.5%;
    height: 40px;
    width: 40px;
    transition: 0.3s all;
    &:hover{
        border-radius: 100%;
        // background-color: rgba(70, 131, 180, 0.664);
        background-color: transparent;
        backdrop-filter: blur(1rem);
        border: solid 0.5px #7ea6a2a1;
        a{
            i{
                color: #5f9ea0;
            }
        }
    }
    a{
        position: absolute;
        transform: translate(-15px, -3px);
        color: #fff;
        
    }
}
.activeBTN{
    display: block;
}

@media(max-width: 426px){
    .topBtn{
        bottom: 100px;
        left: 7.5%;
        a{
            i{
                font-size: 55px;
            }
        }
    }
}
</style>