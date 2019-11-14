<template>
  <div class="about">
     <h2>{{this.$store.state.nickname}}</h2>
       <input type="text" v-model="bname">
  </div>
</template>

<script>
export default {
  computed: {
   nickname(){
    return  this.$store.state.nickname
      
   }
 },
  name:'about',
  data(){
    return{
      bname:this.nickname,
      // bname:''
    }
  },
  // mounted() {
  //   this.$bus.$on('chan',val=>{
  //     this.bname = val
  //   })
  // },
  watch: {
     bname(val){
    this.$store.commit('change',val)
   },
   nickname(val){
     this.bname = this.nickname
   }
  // bname(val){
  //    this.$bus.$emit('chan',val)
  // }
 
    
  },
  
}
</script>