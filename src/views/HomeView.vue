<template>
  <home-comp></home-comp>
  <about-company></about-company>
  <philosophy-comp></philosophy-comp>
  <catalog-comp></catalog-comp>
  <info-comp></info-comp>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import PhilosophyComp from '@/components/PhilosophyComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CatalogComp from '@/components/CatalogComp.vue'
import InfoComp from '@/components/InfoComp.vue'



export default {
  name: 'HomeView',
  components: {
    HomeComp,
    AboutCompany,
    PhilosophyComp,
    CatalogComp,
    InfoComp,
    FooterComp,
    
  }
}
</script>

<style lang="scss">

</style>