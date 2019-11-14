<template>
  <div class="home">
    <h1>{{data}}---{{name}}</h1>
    <HelloWorld :msg='data' @abc='getdata'/>
    <br>
      <h2>{{this.$store.state.nickname}}</h2>
      <input type="text" v-model="aname">
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapMutations} from 'vuex'

export default {
  computed: {
  //  nickname(){
  //    return this.$store.state.nickname 
  //  }
 ...mapState(['nickname']) //同上效果，把nickname找到，在页面创造一个nicakname
 },
  data() {
    return {
      data:'你好Vue我是你爸爸',
      name:'',
      aname:this.nickname,
      // aname:''

    }
  },
  name: 'home',
  components: {
    HelloWorld
  },
  // mounted() {
  //   this.$bus.$on('chan',val=>{
  //     this.aname = val
  //   })
  // },
  methods: {
    getdata(val){
      this.name = val
    },
    ...mapMutations(['change'])
  },
 watch: {
   aname(val){
     this.change(val)
    // this.$store.commit('change',val)
   },
    
   nickname(val){
     this.aname = this.nickname
   },
  //  aname(val){
  //    this.$bus.$emit('chan',val)
  //  }
 },
 
}
</script>
