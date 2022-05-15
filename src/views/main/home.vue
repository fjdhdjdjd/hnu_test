<template>
  <div class="P-Home">
    <!-- 轮播图 -->
    <main-carousel1 class="carousel1" />

    <!-- 师大新闻 -->
    <main-news class="news" />

    <article class="article1">
      <div class="box">
        <!-- 通知公告 -->
        <main-announcement class="announcement" />
        <!-- 院部动态 -->
        <main-dynamic class="dynamic" />
        <!-- 教学科研 -->
        <main-teaching class="teaching" />
      </div>
    </article>

    <article class="article2">
      <div class="box">
        <!-- 媒体师大 -->
        <main-mtsd class="mtsd" />
        <!-- 校园媒体 -->
        <main-xymt class="xymt" />
        <!-- 影像师大 -->
        <main-yxsd class="yxsd" />
        <!-- 文化师大 -->
        <main-whsd class="whsd" />
      </div>
    </article>

    <article class="article3">
      <!-- 校园专题 -->
      <main-special class="special" />
    </article>

    <article class="article4">
      <!-- 师大24小时 -->
      <main-hnu24 class="hnu24" />
    </article>

    <!-- 底部导航 -->
    <main-footer class="footer" />
  </div>
</template>
<script>
import MainCarousel1 from "../../components/main/carousel1.vue";
// import MainCarousel2 from "../../components/main/carousel2.vue";
import MainNews from "../../components/main/news.vue";
import MainAnnouncement from "../../components/main/announcement.vue";
import MainDynamic from "../../components/main/dynamic.vue";
import MainTeaching from "../../components/main/teaching.vue";
import MainMtsd from "../../components/main/mtsd.vue";
import MainXymt from "../../components/main/xymt.vue";
import MainYxsd from "../../components/main/yxsd.vue";
import MainWhsd from "../../components/main/whsd.vue";
import MainSpecial from "../../components/main/special.vue";
import MainHnu24 from "../../components/main/hnu24.vue";
import MainFooter from "../../components/main/footer.vue";

export default {
  name: "Home",
  components: {
    MainCarousel1,
    // MainCarousel2,
    MainNews,
    MainAnnouncement,
    MainDynamic,
    MainTeaching,
    MainMtsd,
    MainXymt,
    MainYxsd,
    MainWhsd,
    MainSpecial,
    MainHnu24,
    MainFooter,
  },
  created(){
    console.log(JSON.stringify({code:200,data:['https://www.htu.edu.cn/_upload/article/images/9b/60/3801971746a189c15fbd4868f20a/8ed580dd-b568-45dc-bf6b-d25381b99f07_s.jpg','https://www.htu.edu.cn/_upload/article/images/d8/81/960e03094e6681f2dff44e5d0006/c54d96e8-666e-4cc0-bbc2-59f96f262aeb_s.jpg','https://www.htu.edu.cn/_upload/article/images/10/27/126c956346d2808ee2708e764bb5/f1624265-a3a7-4a9d-a816-19c000678638_s.jpg','https://www.htu.edu.cn/_upload/article/images/8d/fd/aea2be5446ca9e81f7f131f930b5/4937a1f0-c8fc-4d38-9f49-32cfd4d32857_s.jpg','https://www.htu.edu.cn/_upload/article/images/e6/86/e866240b4d8db132e198e9d1b6b7/5adaa56c-d634-4956-82c3-0b2e598760b8_s.jpg','https://www.htu.edu.cn/_upload/article/images/88/86/3d70bbae40f6a4ad19cbd298869b/3d08e479-ff83-45b9-b9c8-9347686b3b0f_s.jpg','https://www.htu.edu.cn/_upload/article/images/a0/4e/c478ac0b40879ee99bb56f4a3790/cf7274ca-6d05-471d-a0b0-8a09c54c2a1b_s.jpg','https://www.htu.edu.cn/_upload/article/images/1a/0d/320d207f4c1488c9e97db0de1b3d/b4fb3f20-03be-40ca-b99e-c741b4049c65_s.jpg','https://www.htu.edu.cn/_upload/article/images/97/fc/a2adda204021ab93370bbb5c36d6/e953020b-d471-4413-9866-31d99ff66aea_s.jpg','https://www.htu.edu.cn/_upload/article/images/8f/e5/059a76434b8385b47561f3ae014a/226ee52e-b00c-464b-bf96-5289c1bee82a_s.jpg','https://www.htu.edu.cn/_upload/article/images/fc/0c/058fada94891b095c55c5538f56b/49ad30ff-35a7-49b0-b8ba-a52b0abee712_s.jpg','https://www.htu.edu.cn/_upload/article/images/66/c0/7acea14b48beb606d0c0f985b54d/45db25b7-244f-454e-8126-9d44646426d9_s.jpg']}))
  }
};
</script>
<style lang="less" scoped>
.P-Home {
  position: relative;
  .carousel1 {
    position: relative;
    width: 1250px;
    margin: 0 auto;
    height: 450px;
    background-color:darksalmon;
  }
  .news{
    position: relative;
    margin:10px auto 30px;
    width: 1250px;
    height: 470px;
    background-color: brown;
  }
  .article1{
    position: relative;
    background-color: #f7f7f7;
    .box{
      position: relative;
      width: 1250px;
      display: flex;
      justify-content: space-between;
      margin:0 auto;
      padding:20px 0;
      height: 360px;
      .announcement,.dynamic,.teaching{
        position: relative;
        width: 390px;
        height: 100%;
        background-color: cadetblue;
      }
    }
  }
  .article2{
    position: relative;
    .box{
      position: relative;
      width: 1250px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding:20px 0 30px 0;
      height: 340px;
      .mtsd,.xymt,.yxsd,.whsd{
        height:100%;
        width: 300px;
        background-color: coral;
      }
    }
  }
  .article3{
    position: relative;
    background-color: #f7f7f7;
    padding:20px 0 40px 0;
    .special{
      position: relative;
      width: 1250px;
      margin:0 auto;
      height: 160px;
      background-color:cornflowerblue;
    }
  }
  .article4{
    position: relative;
    background-color: #f7f7f7;
    padding:20px 0 40px 0;
    .hnu24{
      position: relative;
      width: 1250px;
      margin:0 auto;
      height: 240px;
      background-color:crimson;
    }
  }
  .footer{
    position: relative;
    height:200px;
    background-color: #1d4e92;
  }
}
</style>