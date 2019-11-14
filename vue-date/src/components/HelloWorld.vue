<template>
  <div class="hello">
  <h2>{{name}}----{{msg}}</h2>
  <button  @click="setdata">传值</button>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'hello'
    }
  },
  name: 'HelloWorld',
  props: ['msg'],
  methods: {
    setdata(){
     this.$emit('abc',this.name)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
