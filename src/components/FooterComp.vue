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
    height: 300px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    &_links{
        img{
            height: 65px;
        }
    }
}
</style>

