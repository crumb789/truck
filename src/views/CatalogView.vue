<template>
  <top-menu></top-menu>
  <side-menu></side-menu>
  <div class="catalog view">
    <h2 v-if="!modalState">Самый актуальный каталог доступен по 
      <a href="https://wa.me/c/79013100781" target="_blank" >ссылке</a>
    </h2>

    <catalog-view-comp></catalog-view-comp>
    
    <h2 v-if="!modalState">Самый актуальный каталог доступен по 
      <a href="https://wa.me/c/79013100781" target="_blank" >ссылке</a>
    </h2>

    <footer-comp v-if="!modalState"></footer-comp>
  </div>
</template>


<script>
// @ is an alias to /src
import TopMenu from '@/components/UI/TopMenu.vue'
import SideMenu from '@/components/UI/SideMenu.vue'
import CatalogViewComp from '@/components/CatalogViewComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
  name: 'CatalogView1',
  components: {
    TopMenu,
    SideMenu,
    CatalogViewComp,
    FooterComp
  },
  data(){
    return{

    }
  },
  computed: {
    routeAnimation() {
      return this.$route;
    },
    modalState(){
      return this.$store.state.catalogModalOn
    }
  },

}

</script>

<style lang="scss">
h2{
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    padding-bottom: 15px;
}
.catalog{
  &.view{
    min-height: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 70px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px #181818;
    padding: 25px 30px 30px 30px;
  }
}
</style> 