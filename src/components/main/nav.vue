<template>
  <div class="C-nav">
    <div class="menu">
      <ul class="menu-ul">
        <li class="menu-li" v-for="(item,i) in nav_list" :key="i">
          <router-link class="menu-a" :to="item.link">{{item.title}}</router-link>
          <div class="drop-down" v-if="item.childrens">
            <ul>
              <li v-for="(jtem,j) in item.childrens" :key="j">
                <router-link :to="jtem.link">{{jtem.title}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'MainNav',
  data(){
    return {
      nav_list:[
        {
          link:'#',
          title:'网站首页'
        },
        {
          link:'#',
          title:'学校概况',
          childrens:[
            {
              link:'#',
              title:'学校简介'
            },
            {
              link:'#',
              title:'历史沿革'
            },
            {
              link:'#',
              title:'现任领导'
            },
            {
              link:'#',
              title:'历史领导'
            }
          ]
        },
        {
          link:'#',
          title:'机构设置',
          childrens:[
            {
              link:'#',
              title:'学院设置'
            },
            {
              link:'#',
              title:'党群机构'
            },
            {
              link:'#',
              title:'行政管理'
            },
            {
              link:'#',
              title:'直属单位'
            },
            {
              link:'#',
              title:'附属单位'
            },
          ]
        },
        {
          link:'#',
          title:'学科建设',
          childrens:[
            {
              link:'#',
              title:'重点科研平台'
            },
            {
              link:'#',
              title:'人文社科研究基地与智库建设'
            },
            {
              link:'#',
              title:'优势特色学科'
            },
            {
              link:'#',
              title:'学校简介'
            },
          ]
        },
        {
          link:'#',
          title:'人才招聘'
        },
        {
          link:'#',
          title:'数字校园',
          childrens:[
            {
              link:'#',
              title:'应用管理系统'
            },
            {
              link:'#',
              title:'数字图书馆'
            }
          ]
        },
        {
          link:'#',
          title:'招生就业',
          childrens:[
            {
              link:'#',
              title:'招生办公室'
            },
            {
              link:'#',
              title:'就业创业指导服务中心'
            },
            {
              link:'#',
              title:'研究生院'
            },
            {
              link:'#',
              title:'继续教育学院'
            },
            {
              link:'#',
              title:'国际教育学院'
            }
          ]
        },
        {
          link:'#',
          title:'信息公开'
        },
        {
          link:'#',
          title:'师大邮箱'
        },
        {
          link:'#',
          title:'校友网',
          childrens:[
            {
              link:'#',
              title:'校友网'
            },
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.C-nav{
  position: relative;
  background-color: #2a63b3;
  .menu{
    position: relative;
    height: 43px;
    width: 1250px;
    margin:0 auto;
    padding:0 75px;
    ul.menu-ul{
      position: relative;
      display: flex;
      li.menu-li{
        a.menu-a{
          font-size: 1.5rem;
          line-height: 43px;
          padding:0 25px;
          color:#fff;
        }
      }
      div.drop-down{
        position: absolute;
        visibility: hidden;
        background-color: #2a63b399;
        color:#fff;
        ul{
          position: relative;
          li{
            position: relative;
            line-height: 43px;
            max-width: 240px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding:0 25px;
            color:#fff;
            text-align: center;
            a{
              font-size: 1.5rem;
              color:#fff;
            }
          }

        }
      }
      li:hover div.drop-down{
        visibility: visible;
      }
    }
  }
}
</style>