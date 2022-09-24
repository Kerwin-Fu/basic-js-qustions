<script setup>

  const transformDate = (type="year",delimiter="-") => {
    // 写在这里
    return []
  }


</script>


<template>
  <h2>问题一</h2>
  <div class="question-describe">
    你的老大需要你写一个有关时间获取的函数，他的要求是这样的：<br/>
      1.这个函数用于返回两个时间戳：今年的第一天和今天；这个月的第一天和今天。<br/>
      2.这个函数返回一个数组，数组里面是两个时间戳字符串，格式是yyyy-MM-dd。<br/>
      3.这个函数有两个个参数：type: 传入 'year' 或者 'month',默认为 'year' ;用于判断返回今天的第一天还是这个月的第一天;delimiter: 用于改变分隔符，如传入 '/',则时间格式变为 yyyy/MM/dd，默认为 "-"。<br/>
  </div>

  <div class="verify-area">
    <h5>这里显示你的函数返回值：</h5>
    <span>目前的返回值是：</span>
    <span>{{transformDate[0] || '空值'}}</span>
    <span style="padding: 20px;">和</span>
    <span>{{transformDate[1] || '空值'}}</span>
  </div>
</template>