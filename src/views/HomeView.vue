<template>
  <top-menu></top-menu>
  <home-comp></home-comp>
  <btn-top></btn-top>
  <about-company></about-company>
  <philosophy-comp></philosophy-comp>
  <catalog-comp></catalog-comp>
  <info-comp></info-comp>
  <cont-comp></cont-comp>
  <form-back></form-back>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/UI/TopMenu.vue'
import HomeComp from '@/components/HomeComp.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import PhilosophyComp from '@/components/PhilosophyComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CatalogComp from '@/components/CatalogComp.vue'
import InfoComp from '@/components/InfoComp.vue'
import BtnTop from '@/components/UI/BtnTop.vue'
import ContComp from '@/components/ContComp.vue'
import FormBack from '@/components/FormBack.vue'



export default {
  name: 'HomeView',
  components: {
    TopMenu,
    HomeComp,
    AboutCompany,
    PhilosophyComp,
    CatalogComp,
    InfoComp,
    FooterComp,
    BtnTop,
    ContComp,
    FormBack    
  }
}
</script>

<style lang="scss">

</style>