<script setup>
  import { ref } from 'vue'
  const variableName = ref('this-is-a-kabab')
  const transformedName = ref('')

  const trans2camel = (str) => {
    
  }
  
  </script>
  
  <template>
    <h2>问题四</h2>
    <div class="question-describe">
      <span style="color:red">注意！这一题会稍微有点难度</span><br/>
      你的老大想让你帮助他写一个将命名转化为小驼峰的工具函数，要求如下：<br/>
      1. 函数只有一个参数，为需要转化的变量名称。<br/>
      2. 函数可以自动识别当前传入的命名是什么命名格式（小驼峰、大驼峰还是烤串），且都能转化为小驼峰命名。<br/>
    </div>
  
    <div class="verify-area">
      <h5>这里显示你的函数功能：</h5>
      <span>这是你要转化的函数名称：<span style="color:#ccc">{{variableName}}</span></span><br/>
      <span>这是你转化后的函数名称：{{transformedName}}</span>
     
    </div>
  </template>