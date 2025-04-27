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
    left: 17%;
    height: 40px;
    width: 40px;
    transition: 0.3s all;
    &:hover{
        border-radius: 100%;
        background-color: steelblue;
    }
    a{
        position: absolute;
        transform: translate(-46%, 5%);
        color: #fff;
    }
}
.activeBTN{
    display: block;
}

</style>