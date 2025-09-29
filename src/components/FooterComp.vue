<template>
    <footer class="footer">
        <div class="footer footer_links">
            <a href="https://t.me/crumb789" target="_blank">
                <img :src="logoCrumb" alt="logoDev">
            </a>
            2025 <i class="bi bi-c-circle"></i>
        </div>
    </footer>
</template>


<script>

import logoCrumb from '@/assets/icons/dev/crumb-logo.png'

export default {
    data() {
        return{
            logoCrumb,
        }
    },
}
</script>


<style lang="scss">
.footer{
    height: 450px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    &_links{
        img{
            height: 65px;
            transition: 0.1s all;
            &:hover{
                height: 68px;
            }
        }
    }
}

@media(max-width: 769px){
    .footer{
        font-size: 22px;
    }
}

@media(max-width: 426px){
    .footer{
        font-size: 35px;
        &_links{
            img{
                height: 140px;
            }
        }
    }
}
</style>

