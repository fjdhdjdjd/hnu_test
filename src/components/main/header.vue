<template>
  <div class="C-header">
    <div class="head">
      <!-- 导航条 -->
      <nav>
        <ul>
          <li v-for="(item,i) in nav1" :key="i">
            <router-link :to="item.link || '/'">{{item.title}}</router-link>
          </li>
        </ul>
        <ul>
          <li v-for="(item,i) in nav2" :key="i">
            <router-link :to="item.link || '/'">{{item.title}}</router-link>
          </li>
        </ul>
      </nav>
      <a href="#" class="logo"></a>
    </div>
  </div>
</template>
<script>
export default {
  name:'MainHeader',
  data(){
    return {
      nav1:[
        {
          link:'#',
          title:'学生'
        },
        {
          link:'#',
          title:'教工'
        },
        {
          link:'#',
          title:'校友'
        },
        {
          link:'#',
          title:'访客'
        },
      ],
      nav2:[
        {
          link:'#',
          title:'一网通办（说明）'
        },
        {
          link:'#',
          title:'办事大厅'
        },
        {
          link:'#',
          title:'客户端下载'
        },
        {
          link:'#',
          title:'校外访问通道'
        },
        {
          link:'#',
          title:'English'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.C-header{
  position: relative;
  background: url('../../assets/img/header.jpg') center no-repeat;
  background-size: 100% 100%;
  .head{
    position: relative;
    width: 1250px;
    height: 165px;
    margin:0 auto;
    background: url('../../assets/img/head.jpg') center no-repeat;
    background-size: auto auto;
    nav{
      position: relative;
      display: flex;
      height: 37px;
      align-items: center;
      justify-content: space-between;
      padding:0 75px;
      ul{
        position: relative;
        overflow: hidden;
        li{
          float: left;
          padding:0 10px;
          a{
            color:#cdcdcd;
            font-size: 1.4rem;
          }
        }
      }
    }
    a.logo{
      position: relative;
      display: block;
      width: 400px;
      height: 97px;
      margin: 15px 0 0 76px;
      background: url('../../assets/img/hnlogo.png') center no-repeat;
      background-size: auto 100%;
    }
  }
}
</style>