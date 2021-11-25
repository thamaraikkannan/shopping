<template>
<Header />
  <router-view/>
</template>

<script>
import './assets/tailwind.css'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header,
  },
  created(){
    this.$store.dispatch('getProductsAction')
  }
}
</script>

<style lang="scss">
</style>