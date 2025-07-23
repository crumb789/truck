<template>
  <top-menu></top-menu>
  <div class="catalog view">
    <h2>Самый актуальный каталог доступен по 
      <a href="https://wa.me/c/79013100781" target="_blank" >ссылке</a>
    </h2>

    <catalog-view-comp></catalog-view-comp>

    <footer-comp></footer-comp>
  </div>
</template>


<script>
// @ is an alias to /src
import TopMenu from '@/components/UI/TopMenu.vue'
import CatalogViewComp from '@/components/CatalogViewComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
  name: 'CatalogView1',
  components: {
    TopMenu,
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
  },

}

</script>

<style lang="scss">
.catalog{
  &.view{
    min-height: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 55px;
    border-radius: 8px;
  }
}
</style> 