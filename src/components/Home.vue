<script setup>
 import './common.css'
const routerLinkList = [
  {
    path: '/questionOne',
    title: '问题一'
  },
  {
    path: '/questionTwo',
    title: '问题二'
  },
  {
    path: '/questionThree',
    title: '问题三'
  },
  {
    path: '/questionFour',
    title: '问题四'
  }
]

</script>

<template>
  <div>
    <div class="main-page-title">JavaScript基础检测</div>
    <ul>
      <li class="question-link-box" v-for="link in routerLinkList">
        <router-link :to="link.path">{{ link.title }}</router-link>
      </li>
    </ul>
    <div class="question-frame">

      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
a {
  display: inline-block;
  width: 100%;

  color: rgb(110, 108, 108);
}
.main-page-title {
  width: 40%;
  height: 30px;
  padding: 5px;
  margin: 40px auto;

  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color:steelblue

}

.question-link-box {
  width: 15%;
  height: 20px;
  padding: 5px;
  margin: 5px auto;

  text-align: center;
  cursor: pointer;

  border: 1px solid transparent;
  border-radius: 5px;
}

.question-link-box:hover {
  background-color: rgb(207, 238, 238);
}

.question-frame {
  width: 80%;
  padding: 5px;
  margin: 20px auto;

  border: 1px solid rgb(235, 232, 232);
  border-radius: 15px;
  box-shadow: 1px 1px 3px 1px rgb(248, 248, 248);
}
</style>
