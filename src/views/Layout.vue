<template>
  <div class="container">
    <!-- 左侧导航 -->
    <el-scrollbar>
      <div class="left-panel">
        
        <!-- Logo 信息 -->
        <div class="logo-info">
          <div @click="$router.push('/home')" style="cursor: pointer;">
            <el-icon><House /></el-icon>
          </div>
          <el-image :src="logoImg" fit="cover" style="width: 70px; margin-left: 50px;"></el-image>
        </div>
        
        <!-- 功能按钮 -->
        <div class="function-list">

          <!-- 新对话 -->
          <el-button class="function-new-chat" @click="newChat" type="primary" plain>
            <div style="position: absolute; left: 10px; display: flex; align-items: center;">
              <el-icon><Plus /></el-icon>
              <div>新对话</div>
            </div>
          </el-button>
          
          <div 
            class="function-item" 
            :class="{ 'function-item-active': data.activeFunction === 'search' }"
            @click="setActiveFunction('search')"
          >
            <el-icon><Search /></el-icon>
            <span>AI 搜索</span>
          </div>
          
          <div 
            class="function-item" 
            :class="{ 'function-item-active': data.activeFunction === 'write' }"
            @click="setActiveFunction('write')"
          >
            <el-icon><Edit /></el-icon>
            <span>帮我写作</span>
          </div>
          
          <div 
            class="function-item" 
            :class="{ 'function-item-active': data.activeFunction === 'code' }"
            @click="setActiveFunction('code')"
          >
            <el-icon><Connection /></el-icon>
            <span>AI 编程</span>
          </div>
          
          <div 
            class="function-item" 
            :class="{ 'function-item-active': data.activeFunction === 'image' }"
            @click="setActiveFunction('image')"
          >
            <el-icon><Picture /></el-icon>
            <span>图像生成</span>
          </div>
          
          <!-- 更多 -->
          <div class="function-item">
            <el-popover
              placement="right-start"
              trigger="hover"
              :width="200"
              popper-class="more-popover"
            >
              <template #reference>
                <div style="display: flex; align-items: center; width: 100%;">
                  <el-icon><More /></el-icon>
                  <span>更多</span>
                </div>
              </template>
              
              <div class="more-menu">
                <div @click="setActiveFunction('read')" class="more-menu-item">
                  <el-icon><Reading /></el-icon>
                  <span>AI 阅读</span>
                </div>
              </div>
            </el-popover>
          </div>
        </div>
        
        <el-divider style="margin: 0;" />
        
        <!-- 历史对话 -->
        <div class="history-section">

          <!-- 标题 -->
          <div class="section-title">
            <div>历史对话</div>
            <svg style="width: 20px; height: 20px;" t="1746035598640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4991" width="200" height="200"><path d="M511.998 64C264.574 64 64 264.574 64 511.998S264.574 960 511.998 960 960 759.422 960 511.998 759.422 64 511.998 64z m353.851 597.438c-82.215 194.648-306.657 285.794-501.306 203.579S78.749 558.36 160.964 363.711 467.621 77.917 662.27 160.132c168.009 70.963 262.57 250.652 225.926 429.313a383.995 383.995 0 0 1-22.347 71.993z" fill="#aaaaac" p-id="4992"></path><path d="M543.311 498.639V256.121c0-17.657-14.314-31.97-31.97-31.97s-31.97 14.314-31.97 31.97v269.005l201.481 201.481c12.485 12.485 32.728 12.485 45.213 0s12.485-32.728 0-45.213L543.311 498.639z" fill="#aaaaac" p-id="4993"></path></svg>
          </div>
          
          <div 
            class="history-item" 
            :class="{ 'history-item-active': data.activeHistory === item.title }"
            @click="setActiveHistory(item.title)"
            v-for="item in data.historyItems" 
            :key="item.id"
          >
            <el-icon><ChatLineRound /></el-icon>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </el-scrollbar>


    <!-- 中间主要区域 -->
    <div class="main-panel">
      <div v-if="data.mainView">
        <!-- 问候语和主要内容区域 (仅在未开始聊天时显示) -->
        <div v-if="!data.showChatInterface" class="greeting-container">
          <h2 class="greeting-text">{{ greeting }}好，有什么我可以帮你的吗？</h2>

          <!-- 输入框区域 -->
          <div style="position: relative; margin-top: 20px;"  class="input-container">
            <el-input
              v-model="data.form.prompt"
              type="textarea"
              placeholder="请输入内容..."
              :autosize="{ minRows: 4, maxRows: 10 }"
              class="auto-resize-textarea"
            />
                
            <div style="display: flex; justify-content: flex-end; background-color: #fff; padding: 5px; border-radius: 4px;" class="box-show">
              <el-button 
                @click="prompt" 
                type="primary" 
                :disabled="!data.form.prompt"
                circle
              >
                <el-icon size="20"><Top /></el-icon>
              </el-button>
            </div>
          </div>
          
          <!-- 功能按钮区域 -->
          <div class="function-buttons">
            <div @click="setActiveFunction('search')" class="function-button">
              <el-icon><Search /></el-icon>
              <span>AI 搜索</span>
            </div>
            <div @click="setActiveFunction('write')" class="function-button">
              <el-icon><Edit /></el-icon>
              <span>AI 写作</span>
            </div>
            <div @click="setActiveFunction('code')" class="function-button">
              <el-icon><Connection /></el-icon>
              <span>AI 编程</span>
            </div>
            <div @click="setActiveFunction('image')" class="function-button">
              <el-icon><Picture /></el-icon>
              <span>AI 绘画</span>
            </div>
            <div @click="setActiveFunction('more')" class="function-button">
              <el-icon><More /></el-icon>
              <span>更多</span>
            </div>
          </div>
        </div>

        <!-- 聊天界面 (仅在开始聊天后显示) -->
        <div v-if="data.showChatInterface" class="chat-container">
          <!-- 聊天消息列表 -->
          <div class="chat-messages">
            <div v-for="(message, index) in data.chatMessages" :key="index" :class="['message', message.type === 'ai' ? 'ai-message' : 'user-message']">
              <div class="message-content">{{ message.content }}</div>
            </div>
          </div>
          
          <!-- 输入框区域 -->
          <div class="chat-input-fixed">
            <div style="position: relative;" class="input-container">
              <el-input
                v-model="data.form.prompt"
                type="textarea"
                placeholder="请输入内容..."
                :autosize="{ minRows: 4, maxRows: 10 }"
                class="auto-resize-textarea"
              />
                  
              <div style="display: flex; justify-content: flex-end; background-color: #fff; padding: 5px; border-radius: 4px;" class="box-show">
                <el-button 
                  @click="prompt" 
                  type="primary" 
                  :disabled="!data.form.prompt"
                  circle
                >
                  <el-icon size="20"><Top /></el-icon>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import logoImg from '@/assets/imgs/logo.png'
import { useRouter } from 'vue-router'

const router = useRouter()

// 数据
const data = reactive({
  activeFunction: localStorage.getItem('activeFunction') || '', // 当前激活的功能
  activeHistory: localStorage.getItem('activeHistory') || '', // 当前选中的历史记录
  historyItems: [], // 历史对话列表
  showChatInterface: false, // 是否显示聊天界面
  chatMessages: [], // 聊天消息列表
  mainView: true, // 是否显示主视图，默认为true
  form: {
    prompt: '', // 输入框内容
  }
})

// 在组件初始化时检查当前路由，设置正确的mainView值
const currentPath = router.currentRoute.value.path
if (currentPath !== '/ai') {
  data.mainView = false
}

// 设置当前激活的功能
const setActiveFunction = (functionName) => {
  data.activeFunction = functionName
  data.activeHistory = ''
  localStorage.setItem('activeFunction', functionName)
  localStorage.removeItem('activeHistory')
  router.push(`/ai/${functionName}`)
  data.mainView = false
}

// 设置当前选中的历史记录
const setActiveHistory = (historyId) => {
  data.activeHistory = historyId
  data.activeFunction = ''
  localStorage.setItem('activeHistory', historyId)
  localStorage.removeItem('activeFunction')
  
  // 显示聊天界面
  data.showChatInterface = true
  data.mainView = true
  
  // 模拟加载历史对话内容
  data.chatMessages = [
    {
      type: 'user',
      content: '你好！很高兴认识你。'
    },
    {
      type: 'ai',
      content: '你好！很高兴和你交流，有什么我可以帮忙的事情吗？无论是问题解答还是其他需求，都可以告诉我哦。'
    },
  ]
}

// 模拟历史对话数据
data.historyItems =[
  { id: 1, title: '历史对话1' },
  { id: 2, title: '历史对话2' },
  { id: 3, title: '历史对话3' },
  { id: 4, title: '历史对话4' },
  { id: 5, title: '历史对话5' }
]

// 根据时间获取问候语
const greeting = computed(() => {
  const hour = new Date().getHours()
  
  if (hour >= 0 && hour < 5) {
    return '深夜'
  } else if (hour >= 5 && hour < 8) {
    return '早上'
  } else if (hour >= 8 && hour < 11) {
    return '上午'
  } else if (hour >= 11 && hour < 13) {
    return '中午'
  } else if (hour >= 13 && hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
})

// 提交生成请求
const prompt = () => {
  // 添加用户消息到聊天记录
  data.chatMessages.push({
    type: 'user',
    content: data.form.prompt
  })
  
  // 添加AI回复消息
  data.chatMessages.push({
    type: 'ai',
    content: '你好！很高兴和你交流，有什么我可以帮忙的事情吗？无论是问题解答还是其他需求，都可以告诉我哦。'
  })
  
  // 显示聊天界面
  data.showChatInterface = true
  
  // 清空输入框
  data.form.prompt = ''
}

// 新建对话
const newChat = () => {
  // 清除所有选中状态
  data.activeFunction = ''
  data.activeHistory = ''
  localStorage.removeItem('activeFunction')
  localStorage.removeItem('activeHistory')

  // 清空聊天记录
  data.chatMessages = []
  
  // 隐藏聊天界面
  data.showChatInterface = false

  router.push('/ai')
  data.mainView = true
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.left-panel {
  width: 260px;
  background: #f3f4f6;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;
}

.logo-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.function-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.function-new-chat, .function-item, .history-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  height: 40px;
}

.function-item:not(.function-item-active):hover, 
.history-item:not(.history-item-active):hover {
  background-color: #e9eaec;
}

.function-item-active, .history-item-active {
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.function-new-chat .el-icon, .function-item .el-icon, .history-item.el-icon  {
  margin-right: 10px;
  font-size: 18px;
}

.function-item .el-icon, .history-item .el-icon, .history-item .el-avatar {
  margin-right: 10px;
  font-size: 18px;
}

.function-item span,.history-item span  {
  color: #333;
}

.history-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  color: #aaaaac;
  margin: 10px 0;
  padding-left: 10px;
}

.box-show {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.greeting-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 150px;
}

.greeting-text {
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin-bottom: 30px;
}

.input-container {
  width: 100%;
  margin-bottom: 30px;
}

.function-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
}

.function-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  padding: 15px;
}

.function-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}

.function-button .el-icon {
  font-size: 24px;
  margin-bottom: 10px;
  color: #69bd06;
}

.function-button span {
  font-size: 14px;
  color: #333;
}

.more-popover {
  padding: 12px !important;
}

.more-menu {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.more-menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.more-menu-item:hover {
  background-color: #f5f7fa;
}

.more-menu-item .el-icon {
  margin-right: 10px;
  font-size: 18px;
}

.more-menu-item span {
  color: #333;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 200px; /* 为底部输入框留出空间 */
}

.chat-input-fixed {
  position: fixed;
  bottom: 24px;
  left: 280px; /* 左侧面板宽度 + padding */
  right: 24px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  z-index: 10;
}

.message {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 8px;
  position: relative;
}

.ai-message {
  align-self: flex-start;
  background-color: #f5f7fa;
  margin-right: auto;
}

.user-message {
  align-self: flex-end;
  background-color: #ecf5ff;
  margin-left: auto;
}

.message-content {
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}
</style>

<style>
.auto-resize-textarea textarea {
  resize: none;
  overflow-y: auto !important;
}
</style>