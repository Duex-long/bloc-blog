<template>
  <div class="test">
      <div class="menu" 
      >
      <!-- v-for="item in testList" :key="item.id" -->

          <!-- <div class="menu-head">
            {{item.title}}
          </div>
          <p class="menu-p">{{item.menu}}</p>
          <div class="menu-code">
            <pre>
              <code>{{item.code}}</code>
            </pre>
          </div> -->
      <paragraph url="/test" />
      </div>
  </div>
</template>

<script>
import Paragraph from '../Paragraph/Paragraph.vue'
export default {
  components: { Paragraph },
  name:'test',
  data(){
    return{
      testList:[]
    }
  },
  methods:{
     getTestList(){
        this.$http.get('/test')
        .then(res=>{
            if(res.status == 200)
            {
              this.testList = res.data
              console.log(res.data,"testData")
            }else{
              console.log(res)
            }
        })
    }
  },
  mounted(){
    // this.getTestList()
  }
  
}
</script>

<style scoped>
  .menu{

    /* margin-left: 60px;
    margin-top: 30px;
    width: 920px;
    text-align: left; */

  }
  
  
</style>