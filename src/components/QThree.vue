<script setup>
import { ref } from 'vue'
const count = ref(1)
const interval = ref('')

const addOneWait1s = () => {
  count.value += 1
}
</script>

<template>
  <h2>问题三</h2>
  <div class="question-describe">
    下方有一个按钮，每点击一下，数字会增加一，现在你的boss觉得按钮点击过快，数字增加太快了，所以有如下要求：<br/>
    1. 每秒钟只能让数字增加一，无论这秒钟内点击了多少次。<br/>
    2. 希望能自定义时间间隔，下方输入框内输入一个数字，则间隔这么多秒增加一,默认为1。<br/>
  </div>

  <div class="verify-area">
    <h5>这里显示你的函数功能：</h5>
    <input placeholder="要间隔多少秒呢？" v-model="interval"/>
    <button style="margin: 20px" @click="addOneWait1s">点我加一</button><br />
    <span>现在的数字是：{{ count }}</span>
  </div>
</template>
