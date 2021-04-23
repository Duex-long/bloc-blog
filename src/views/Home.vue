<template>
  <div class="home">
      <div class="container">
        <div class="container-text">
          <h2 class="container-text-header">运用Vue以及Bootstrap-icon构建的微型个人Blog</h2>
          <p class="container-text-tips">
            Vue 是一套用于构建用户界面的渐进式框架。当与现代化的工具链以及各种支持类库结合使用时,Vue 也完全能够为复杂的单页应用提供驱动。基于Vue的强大功能,可以让你快速构建网站。
          </p>
          <div class="container-btn">
            <button class="container-btn-1"> <i class="bi bi-controller" style="width: 64px;"></i> 学习Vue</button>
            <button class="container-btn-2"> <i class="bi bi-github"></i>GITHUB</button>
          </div>
        </div>
        <div class="container-img"> 
          <img src="../assets/logo.png" alt="">
        </div>
      </div>

      <div class="followup">
        <div class="followup-star">
            <div class="follow-star-tips">
              <div class="follow-star-tips-icons">
                <i class="bi bi-speedometer"></i>
              </div>
              <h2>项目起步</h2>
              <p>通过Vue-cli创建项目,选择项目中需要的配置，在项目创建后还可以通过npm安装各种依赖。</p>
            </div>
        </div>
        <div class="follow-card">
          <div class="follow-card-1">
            <pre class="pre-code">
              <code> npm install vue-cli</code>
            </pre>
            <!-- <button class="copy-btn" @click="copyCode">copy</button> -->
          </div>
          <div class="follow-card">
            <pre class="pre-code">
              <code> npm install bootstrap</code>
            </pre>
            <!-- <button class="copy-btn" @click="copyCode">copy</button> -->
          </div>
        </div>
      </div>

      <footer class="home-footer">
        <div class="home-footer-tips">
          <span>GitHub</span> <span>Twitter</span>
          <p>Thank you for your support</p>
        </div>
      </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    async testAxios(){
      await this.$http.get('/').then(res=>{
        console.log(res.data)
      }).catch(err=>console.log(err))
    }
  },
  mounted() {
    this.testAxios()
  },
}
</script>

<style scoped>
  .home{
    /* margin-top: 60px; */
    background: transparent;
    display: flex;
    padding-top:40px;
    flex-direction: column;
  }
  .container{
      min-width: 740px;
      padding: 0px 70px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      /* margin-left: 200px; */
      /* margin-bottom:40px; */
      margin: 40px 200px 40px 200px;
  }
  .container-text-header{
    text-align: left;
    font-size: 55px;
    line-height: 64px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .container-img{
    min-width: 245px;
    display: flex;
  }
  .container-img img{
      align-items: center;
      height: 100%;
      width: 100%;
  }
  .container-text-tips{
    font-size: 24px;
    text-align: left;
  }
  .container-btn{
    text-align: left;
    letter-spacing: 8px;
    /* height: 60px; */
  }
  .container-btn button{
    width: 160px;
    height: 50px;
    font-size:18px ;
    border-radius: 30px;
  }
  .container-btn-1{
    background: #4fc08d;
    color: white;
    border: 0px;
    margin-right:20px ;
  }
  .container-btn-2{
    background: rgb(236, 234, 234);
    color: rgb(97, 97, 97);
    border: none;
  }
  .followup{
    min-width: 740px;
    padding: 0px 70px;
    display: flex;
    flex-direction: row;   
    margin: 40px 200px 40px 200px;
  }
  .follow-star-tips-icons{
    text-align: center;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 40px;
    color: rgb(36, 35, 35);
    border-radius: 15px;
    background: #4fc08d;
  }
  .follow-star-tips{
    text-align: left;
  }
  .follow-card div{
      width: 400px;
      height: 80px;
      margin-left:80px;
      margin-bottom:20px;
      background: rgb(238, 236, 236);
      box-shadow: 3px 1px  #ccc;
  }
  .follow-card{
    text-align: left;
    line-height: 80px;
  }
  .pre-code{
    text-align: left;
  }
  .pre-code code{
    display: inline-block;
    line-height: 20px;
    white-space: pre;
  }
  .pre-code code::before{
    content: '$';
    color: #009;
  }
  /* .copy-btn{
    width: 40px;
    height: 25px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #009;
    color: #009;
    border-radius: 3px;
    position:relative;
    top: -190px;
    left: 350px;
  }
  .copy-btn:hover{
    background: rgb(42, 85, 226);
  } */
  .home-footer{
    height: 120px;
    background: rgb(245, 245, 245);
    padding: 30px;
  }
  .home-footer-tips{
    text-align: left;
  }
  .home-footer-tips span{
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
  }
</style>
