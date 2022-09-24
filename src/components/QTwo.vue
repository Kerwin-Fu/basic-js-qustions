<template>
  <h2>问题二</h2>
  <div class="question-describe">
    你的boss给你一个他最喜欢的 '三夜' 的歌曲数据，希望你能帮他处理一下，他的要求如下：<br/>
    1. 将所有的歌曲（'type' 是 'song'）放到创建好的播放合集数组中。<br/>
    2. 整理他留下的歌曲数据，将所有空的 children 的值变为 null。<br/>
  </div>

  <div class="verify-area">
    <h5>这里显示你的函数返回值：</h5>
    <span>播放合集：</span>
    <div>
      <ul v-if="playList.length !== 0">
        <li v-for="song in playList">{{song}}</li>
      </ul>
      <span v-else style="color: #ccc">播放列表为空</span>
    </div>
    <button style="margin: 20px;" @click="toggleObject">点击{{showObject ? '关闭' : '展开'}}数组结构</button>
    <div v-if="showObject">

      {{fetchedData}}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showObject = ref(false)
const fetchedData = ref([
  {
    name: 'yoasobi',
    type: 'singer',
    children: [
      {
        name: 'もしも命が描けたら',
        type: 'album',
        children: [
          {
            name: 'もしも命が描けたら',
            type: 'song',
            children: []
          }
        ]
      },
      {
        name: 'THE BOOK 2',
        type: 'album',
        children: [
          {
            name: '三原色',
            type: 'song',
            children: []
          },
          {
            name: '大正浪漫',
            type: 'song',
            children: []
          },
          {
            name: '怪物',
            type: 'song',
            children: []
          },
          {
            name: 'もう少しだけ',
            type: 'song',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'ヨルシカ',
    type: 'singer',
    children: [
    {
        name: '盗作',
        type: 'album',
        children: [
          {
            name: '思想犯',
            type: 'song',
            children: []
          },
          {
            name: '爆弹魔',
            type: 'song',
            children: []
          },
          {
            name: '花人局',
            type: 'song',
            children: []
          },
          {
            name: '逃亡',
            type: 'song',
            children: []
          },
        ]
      },
      {
        name: 'だから僕は音楽を辞めた',
        type: 'album',
        children: [
        {
            name: '五月は花緑青の窓辺から',
            type: 'song',
            children: []
          },
          {
            name: 'エルマ',
            type: 'song',
            children: []
          },
          {
            name: 'だから僕は音楽を辞めた',
            type: 'song',
            children: []
          },
        ]
      }
    ]
  },
  {
    name: 'ずっと真夜中でいいのに',
    type: 'singer',
    children: [
      {
        name: '伸び仕草懲りて暇乞い',
        type: 'album',
        children: [
          {
            name: '袖のキルト',
            type: 'song',
            children: []
          },
          {
            name: 'あいつら全員同窓会',
            type: 'song',
            children: []
          },
          {
            name: '猫リセット',
            type: 'song',
            children: []
          }
        ]
      },
      {
        name: '夏枯れ',
        type: 'album',
        children: []
      }
    ]
  },
])
const toggleObject = () => {
  showObject.value = !showObject.value
}
const playList = ref([])
</script>
