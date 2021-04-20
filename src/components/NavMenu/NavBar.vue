<template>
    <div class="NavBar">

        <div class="nav-box">
            <div class="nav-icon"> <i class="bi-github" style="font-size: 32px; cursor:pointer;" role="img" aria-label="GitHub"></i></div>
        </div>
        <div class="nav-link">
            <div>  <router-link to="/">首页</router-link></div>
            <div>  <router-link to="/document">文档</router-link></div>
            <div>  <router-link to="/resource">资源</router-link></div>
            <div>  <router-link to="/template">模板</router-link></div>
            <div>  <router-link to="/choice">精选</router-link></div>
            <div>  <router-link to="/support">支持</router-link></div>
            <div> <a href="https://cn.vuejs.org/">Vue</a> </div>
            <div> <a href="https://v4.bootcss.com/">Bootstrap</a> </div>
        </div>
        <div class="nav-right-link">
            <i class="bi-github" role="img" aria-label="GitHub"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-lightbulb"></i>
            <button class="nav-right-btn">Pay (:</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'NavBar',
    methods: {
        getLinkList:function(){
             let dom = document.querySelectorAll("a")
             let link = []
             for(let i = 0; i< dom.length; i++){
                 link.push(dom[i])
             }
             return link
        }
    },
    mounted() {
       let linkList = this.getLinkList()
       document.addEventListener("click",(e)=>{
           if(!linkList.includes(e.target))
           {
               return
           }else{
               for(let i = 0; i < linkList.length; i++){
                   if(linkList[i] == e.target){
                       e.target.style = "color:#fff"
                   }else{
                       linkList[i].style = "color:rgb(97, 97, 97)"
                   }
               }
           }
       })
    },
}
</script>

<style>
    .NavBar{
        min-width: 870px;
        width: 100%;
        height:60px;
        border: 1px solid white;
        box-shadow: 6px 2px 3px rgb(218, 214, 214);
        display: flex;
        overflow: hidden;
        background: #4fc08d;
    }
    .nav-box{
        margin-left: 40px ;
        line-height: 60px;
    }
    .nav-link{
        display: flex;
    }
    .nav-link div{
        
        font-size: 20px;
        margin-left:20px;
        cursor: pointer;
        line-height: 50px;
    }
    .nav-link div a{
        color:rgb(97, 97, 97);
        text-decoration: none;
    }
   
    .nav-link div a:hover{
        color: rgb(255, 255, 255);
    }
     
    .nav-right-link{
        margin-left:auto ;
        line-height: 50px;
        display: flex;
        justify-content: center;
        /* height:60px; */
        line-height: 50px;
        align-items: center;

    }
    .nav-right-link  i {
        margin-right: 20px ;
    }
    .nav-right-btn{
        margin-right:20px ;
        line-height: 30px;
        width: 80px;
        border: 1px solid rgb(0, 82, 204);
        border-radius: 8px;
        color:  rgb(0, 82, 204);
        background-color: transparent;
    }
    .nav-right-link button:hover{
        
        border-radius: 15px;
        background-color: skyblue;
        width: 80px;
        /* transform: rotate(30deg); */
        animation: deg 1.5s ;
        transition: all 1.5s ease;

    }

    @keyframes deg {
        from{transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
</style>