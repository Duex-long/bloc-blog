<template>
  <div class="test">
      <div class="menu" v-for="item in urlList" :key="item.id">
          <div class="menu-head">
            {{item.title}}
          </div>
          <p class="menu-p">{{item.menu}}</p>
          <div class="menu-code">
            <pre>
              <code>{{item.code}}</code>
            </pre>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'test',
  data(){
    return{
      urlList:[]
    }
  },
  props:{
      url:{
          type:String,
          required:true
      }
  },
  methods:{
     getTestList(){
        this.$http.get(this.url)
        .then(res=>{
            if(res.status == 200)
            {
              this.urlList = res.data
              console.log(res.data,"testData")
            }else{
              console.log(res)
            }
        })
    }
  },
  mounted(){
    this.getTestList()
  }
  
}
</script>

<style>
  .menu{
    margin-left: 30px;
    margin-top: 30px;
    width: 920px;
    text-align: left;
  }
  .menu-head{
    font-size: 48px;
    /* font-weight: bold; */
    margin-bottom: 20px;
  }
  .menu-p{
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 100;
    color: rgb(68, 68, 68);
  }
  .menu-code{
    padding: 10px;
    background: rgb(240, 240, 240);
  }
  .menu-code pre{
    text-align: left;
    margin: 0;
    padding-left: 30px ;
    height: 60px;
    overflow-y:hidden ;
  }
  .menu-code pre code{
    /* display: inline-block; */
    display: block;
  }
  
</style>