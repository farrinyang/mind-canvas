<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <el-affix>
      <header class="header">
        <!-- Logo -->
        <div class="logo-container">
          <img src="@/assets/imgs/logo.png" class="logo-img">
          <div class="logo-text">
            <div class="logo-text-cn">智绘空间</div>
            <div class="logo-text-en">Mind Canvas</div>
          </div>
        </div>
        
        <!-- 导航 -->
        <div class="nav-menu">
          <el-menu 
            mode="horizontal" 
            :ellipsis="false" 
            class="main-menu"
            router 
            :default-active="$router.currentRoute.value.path"
          >
            <el-menu-item index="/mind-canvas">首页</el-menu-item>
            <el-menu-item index="/ai">AI</el-menu-item>
            <el-menu-item index="3">导航3</el-menu-item>
            <el-menu-item index="4">导航4</el-menu-item>
            <el-menu-item index="5">导航5</el-menu-item>
          </el-menu>
          
          <div class="search-box">
            <el-input v-model="data.title" placeholder="输入关键字搜索" class="search-input">
              <template #append>
                <el-button>搜索</el-button>
              </template>
            </el-input>
          </div>
        </div>
      </header>
    </el-affix>
    
    <!-- 轮播图区域 -->
    <div class="banner-container">
      <el-carousel height="400px" type="card">
        <el-carousel-item v-for="(item, index) in data.carouselItems" :key="index">
          <div :class="['carousel-content', index === 0 ? 'chinese-style' : '']">
            <template v-if="index === 0">
              <div class="title">
                <h1>智绘空间</h1>
                <p>AI圆你理想家居</p>
              </div>
              <div class="image">
                <img :src="item.src" :alt="item.alt">
              </div>
            </template>
            <img v-else :src="item.src" :alt="item.alt">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 最新资讯 -->
      <div class="news-section">
        <div class="section-header">
          <h2>最新资讯</h2>
          <el-link type="primary">MORE</el-link>
        </div>
        
        <div class="news-content">
          <div class="news-list">
            <div class="news-item" v-for="item in data.newsItems" :key="item.id">
              <div class="news-title">{{ item.title }}</div>
              <div class="news-date">{{ item.date }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 通知公告 -->
      <div class="notice-section">
        <div class="section-header">
          <h2>通知公告</h2>
          <el-link type="primary">MORE</el-link>
        </div>
        
        <div class="notice-list">
          <div class="notice-item" v-for="item in data.noticeItems" :key="item.id">
            <el-icon><ArrowRight /></el-icon>
            <div class="notice-title">{{ item.title }}</div>
            <div class="notice-date">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部区域 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p>版权所有 © 2025 智绘空间</p>
          <p>联系地址：莆田市涵江区梧塘镇荔涵东大道1001号</p>
          <p>联系电话：153-3833-2284</p>
          <p>邮箱：farrin@163.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

// 数据
const data = reactive({
  title: '', // 搜索关键字
  carouselItems: [], // 轮播图数据
  newsItems: [], // 最新资讯数据
  noticeItems: [] // 通知公告数据
})

data.carouselItems = [
  { src: new URL('@/assets/imgs/banner-main.jpg', import.meta.url).href, alt: '智绘空间' },
  { src: new URL('@/assets/imgs/banner-1.jpg', import.meta.url).href, alt: '轮播图1' },
  { src: new URL('@/assets/imgs/banner-2.jpg', import.meta.url).href, alt: '轮播图2' }
]

data.newsItems = [
    { title: '新闻标题1', date: '2025-01-01' },
    { title: '新闻标题2', date: '2025-01-02' },
    { title: '新闻标题3', date: '2025-01-03' },
    { title: '新闻标题4', date: '2025-01-04' },
    { title: '新闻标题5', date: '2025-01-05' }
]

data.noticeItems = [
    { title: '公告标题1', date: '2025-01-01' },
    { title: '公告标题2', date: '2025-01-02' },
    { title: '公告标题3', date: '2025-01-03' },
    { title: '公告标题4', date: '2025-01-04' },
    { title: '公告标题5', date: '2025-01-05' }
]
</script>

<style scoped>
.container {
  font-family: "Microsoft YaHei", sans-serif;
  color: #333;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 150px;
  height: 80px;
}

.logo-text {
  margin-left: 10px;
}

.logo-text-en {
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  text-align: center;
}

.logo-text-cn {
  font-size: 24px;
  font-weight: bold;
  color: #67bd05;
}

.nav-menu {
  display: flex;
  align-items: center;
}

.main-menu {
  border-bottom: none;
}

:deep(.el-menu-item) {
  border-bottom: 2px solid transparent;
  background-color: transparent !important;
  transition: border-color 0.3s;
}

:deep(.el-menu-item:hover), :deep(.el-menu-item.is-active) {
  background-color: transparent !important;
  border-bottom: 2px solid #67bd05;
}

:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):focus) {
  background-color: transparent !important;
}

.search-box {
  margin-left: 20px;
  width: 200px;
}

.banner-container {
  margin-bottom: 30px;
}

.carousel-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.carousel-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chinese-style {
  background-image: url('@/assets/imgs/logo-bg.jpg');
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #020203;
}

.title h1 {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.title p {
  font-size: 18px;
}

.main-content {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 30px;
}

.news-section, .notice-section {
  width: 48%;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ababaa;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 18px;
  margin: 0;
}

.news-content {
  display: flex;
}

.news-image {
  width: 200px;
  height: 150px;
  margin-right: 20px;
}

.news-list, .notice-list {
  flex: 1;
}

/* 合并相似的样式 */
.news-title, .notice-title {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-date, .notice-date {
  color: #999;
  font-size: 12px;
  margin-left: 10px;
}

.news-item, .notice-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed #eee;
  cursor: pointer;
}

.news-item:hover, .notice-item:hover {
  color: #67bd05;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 35px 0;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-logo-img {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}

.footer-info {
  text-align: center;
  font-size: 14px;
}

.footer-info p {
  margin: 15px 0;
}
</style>