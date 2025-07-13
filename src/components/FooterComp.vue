<template>
    <footer class="footer">
        <div class="footer footer_links">
            <a href="#">
                <img :src="logoCrumb" alt="logoDev">
            </a>
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
    &_links{
        img{
            height: 65px;
        }
    }
}
</style>

