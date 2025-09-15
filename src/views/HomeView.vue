<template>
  <top-menu></top-menu>
  <side-menu></side-menu>
  <home-comp></home-comp>
  <btn-top></btn-top>
  <about-company></about-company>
  <philosophy-comp></philosophy-comp>
  <catalog-comp></catalog-comp>
  <info-comp></info-comp>
  <cont-comp></cont-comp>
  <form-back></form-back>
  <footer-divider></footer-divider>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/UI/TopMenu.vue'
import SideMenu from '@/components/UI/SideMenu.vue'
import HomeComp from '@/components/HomeComp.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import PhilosophyComp from '@/components/PhilosophyComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CatalogComp from '@/components/CatalogComp.vue'
import InfoComp from '@/components/InfoComp.vue'
import BtnTop from '@/components/UI/BtnTop.vue'
import ContComp from '@/components/ContComp.vue'
import FormBack from '@/components/FormBack.vue'
import FooterDivider from '@/components/UI/FooterDivider.vue'



export default {
  name: 'HomeView',
  components: {
    TopMenu,
    SideMenu,
    HomeComp,
    AboutCompany,
    PhilosophyComp,
    CatalogComp,
    InfoComp,
    FooterComp,
    BtnTop,
    ContComp,
    FormBack,
    FooterDivider    
  },
  methods:{
    handleScrollForItem(){
      let howScroll = window.pageYOffset

      if(howScroll > 100){
        this.$store.commit('philShow')
        console.log(howScroll)
      }
      if(howScroll > 600){
        this.$store.commit('catalogShow')
      }
      if(howScroll > 750){
        this.$store.commit('infoShow')
      }
      if(howScroll > 1000){
        this.$store.commit('contactShow')
      }
      if(howScroll > 1200){
        this.$store.commit('formShow')
      }

    },
  },
  created(){
    window.addEventListener('scroll', this.handleScrollForItem);
  }, 
}
</script>

<style lang="scss">

</style>