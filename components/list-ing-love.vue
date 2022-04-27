<template>

</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'


export default {
  name: "lise-ing-love",
  components: {},
  data: ()=>{
    return {
      page_collect: null
    }
  },
  methods:{
    changePage: (data)=>{
      this.$store.commit('collect/changePageCollect', data)
    }
  }
}
</script>

<style scoped>

</style>
