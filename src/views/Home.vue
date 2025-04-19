<template>
  <div class="container">
    <img :src="logoImg" alt="Logo" class="logo"> 

    <div class="header">
      <h1 class="title">智绘空间</h1>
      <span class="subtitle">AI圆你理想家居</span>
      <div class="divider"></div>
    </div>

    <div class="card-container">
      <div class="card">
        <div class="card-number">01</div>
        <div class="card-icon">🎨</div>
        <h1>文生图</h1>
        <p>根据用户描述，智能生成符合描述的图片，让您拥有独一无二的空间。</p>
        <el-button @click="$router.push('/ai')" type="primary" style="position: relative; left: 330px;">立即体验<el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
      </div>
      <div class="card">
        <div class="card-number">02</div>
        <div class="card-icon">🖼️</div>
        <h1>图生图</h1>
        <p>根据用户提供的图片结合描述，智能生成符合描述的图片，让您拥有期望的空间。</p>
        <el-button @click="$router.push('/ai')" type="primary" style="position: relative; left: 330px;">立即体验<el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoImg from '@/assets/imgs/logo.png'
</script>

<style scoped>
.container {
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top, #e6e9f0, #eef1f5);
}

.logo {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 100px;
  height: 50px;
  transition: opacity 0.3s;
  cursor: pointer;
}

.logo:hover {
  opacity: 0.8;
}

.header {
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #323335;
  font-weight: 600;
}

.subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin-top: 0.5rem;
}

.divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #70c014, #323335);
  margin: 1rem auto;
}

.card-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 5rem;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  width: 500px;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-number {
  font-size: 1.5rem;
  color: #69bd06;
  margin: 1rem 0;
}

.card-icon {
  font-size: 50px;
}

.card-title {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #333;
}

.card-description {
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .logo {
    left: 15px;
    top: 15px;
    width: 35px;
    height: 35px;
  }
  
  .container {
    padding-top: 70px;
  }
}
</style>