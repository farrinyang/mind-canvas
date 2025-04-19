<template>
  <div class="container">
    <!-- 左侧生成记录 -->
    <div class="left-panel">
      <!-- 标题 -->
      <div class="panel-title">
        <div style="display: flex; align-items: center;">
          <svg style="width: 20px; height: 20px; margin-right: 10px; color: #fff;"  t="1744997183654" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4734" width="200" height="200"><path d="M762.805186 140.938939c-14.335497-9.66922-33.725102-5.887081-43.373857 8.398274-9.648754 14.295588-5.897314 33.714869 8.398274 43.373857 106.369609 71.852468 169.864736 191.267185 169.864736 319.445496 0 212.414831-172.802648 385.217479-385.217479 385.217479S127.259382 724.571397 127.259382 512.156566c0-128.178311 63.494103-247.593028 169.864736-319.445496 14.295588-9.658987 18.047028-29.078269 8.398274-43.373857-9.658987-14.285355-29.088502-18.067494-43.373857-8.398274C138.575102 224.432539 64.791655 363.206162 64.791655 512.156566c0 246.851131 200.834074 447.685205 447.685205 447.685205S960.162066 759.007697 960.162066 512.156566C960.162066 363.206162 886.377596 224.432539 762.805186 140.938939z" fill="#ffffff" p-id="4735"></path><path d="M401.003 64.47136c-17.253966 0-31.234375 13.980409-31.234375 31.233352l0 30.470989c0 17.253966 13.980409 31.234375 31.234375 31.234375s31.234375-13.980409 31.234375-31.234375L432.237375 95.704712C432.236352 78.450746 418.256966 64.47136 401.003 64.47136z" fill="#ffffff" p-id="4736"></path><path d="M623.950721 64.47136c-17.253966 0-31.233352 13.980409-31.233352 31.233352l0 30.470989c0 17.253966 13.980409 31.234375 31.233352 31.234375s31.234375-13.980409 31.234375-31.234375L655.185097 95.704712C655.184073 78.450746 641.204687 64.47136 623.950721 64.47136z" fill="#ffffff" p-id="4737"></path><path d="M426.012603 227.493248c11.214413 18.047028 41.970904 48.589648 86.157265 48.589648 43.963281 0 75.105558-30.318516 86.574774-48.223305 9.222035-14.396895 5.03262-33.358759-9.242502-42.763966-14.304797-9.405207-33.593096-5.398964-43.159986 8.764618-0.132006 0.193405-13.614066 19.754926-34.172287 19.754926-19.989263 0-32.423457-18.098193-33.267685-19.36914-9.160637-14.427594-28.264741-18.799158-42.834574-9.770528C421.416935 193.584973 416.912341 212.841549 426.012603 227.493248z" fill="#ffffff" p-id="4738"></path><path d="M510.781242 335.164502c-17.253966 0-31.233352 13.980409-31.233352 31.233352l0 208.225415c0 0.63445 0.149403 1.227967 0.187265 1.853208 0.067538 1.115404 0.148379 2.217505 0.333598 3.314489 0.168846 1.00898 0.416486 1.978051 0.679475 2.951215 0.258896 0.954745 0.529049 1.895163 0.87595 2.821255 0.36839 0.981351 0.801249 1.916653 1.26276 2.847861 0.431835 0.876973 0.880043 1.734504 1.393743 2.569522 0.532119 0.860601 1.115404 1.670036 1.727341 2.472308 0.610914 0.805342 1.235131 1.588171 1.926886 2.336208 0.688685 0.74292 1.424442 1.420349 2.181689 2.093684 0.741897 0.659009 1.484817 1.303692 2.298346 1.89721 0.899486 0.657986 1.850138 1.222851 2.819209 1.783623 0.544399 0.314155 1.00898 0.714268 1.577938 0.998747l208.225415 104.113219c4.484128 2.236947 9.252735 3.304256 13.94971 3.304256 11.44875 0 22.479991-6.334265 27.959795-17.274432 7.706519-15.433504 1.454118-34.192753-13.970176-41.909505l-190.961216-95.480608L542.015617 366.397854C542.015617 349.143888 528.035208 335.164502 510.781242 335.164502z" fill="#ffffff" p-id="4739"></path></svg>
          <div style="color: #fff;">生成记录</div>
        </div>
        <el-button type="text" style="color: #fff;">清空</el-button>
      </div>
      <!-- 记录列表 -->
      <div class="record-list">
        <div class="record-item" v-for="(item, index) in data.records" :key="index">
          <div class="record-image">
            <img :src="item.img" alt="生成图片" />
          </div>
          <div class="record-date">{{ item.date }}</div>
        </div>
        <el-empty v-if="!data.records.length" description="暂无记录" />
      </div>
    </div>

    <!-- 中间主要区域 -->
    <div class="main-panel">
      <div style="position: absolute; left: 390px; top: 20px;">
        <el-button @click="$router.push('/home')"><el-icon size="15"><ArrowLeftBold /></el-icon>返回首页</el-button>
      </div>
      <!-- 头部选项 -->
      <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 16px;">
        <el-radio-group v-model="data.form.radio" size="large">
          <el-radio-button @click="changeRadio('文生图')" label="文生图" value="文生图" class="box-show" style="margin-right: 20px;" />
          <el-radio-button @click="changeRadio('图生图')" label="图生图" value="图生图" class="box-show" />
        </el-radio-group>
      </div>

      <div style="margin-top: 50px;">
        <!-- 文生图 -->
        <div v-if="data.form.radio === '文生图'">
          <!-- 标题 -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 35px; font-weight: bold; color: #272729; display: flex; justify-content: center;">欢迎使用 <img :src="logoImg" style="width: 100px; margin: 0 10px;"> 文生图</div>
            <div style="color: #6c757d;">智能生成符合描述的图片，让您拥有独一无二的空间。</div>
          </div>
          
          <!-- 选项区域 -->
          <div class="options-area">
            <div class="option-group">
              <div class="option-label">选择尺寸</div>
              <el-select size="large" v-model="data.form.sizeselected" placeholder="选择尺寸" style="width: 100%;" class="box-show">
                <el-option v-for="(item, index) in data.size" :key="index"  :label="item.label" :value="item.value" />
              </el-select>
            </div>
          </div>
        </div>

        <!-- 图生图 -->
        <div v-else>
          <!-- 标题 -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 35px; font-weight: bold; color: #272729; display: flex; justify-content: center;">欢迎使用 <img :src="logoImg" style="width: 100px; margin: 0 10px;"> 图生图</div>
            <div style="color: #6c757d;">图片结合描述，智能生成符合描述的图片，让您拥有期望的空间。</div>
          </div>

          <!-- 图片上传区域 -->
          <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
            <el-upload
              class="img-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :on-success="handleImgSuccess"
            >
              <img v-if="data.form.imgUrl" :src="data.imgUrl" class="img" />
              <el-icon v-else class="img-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </div>
        </div>

        <!-- 公共区域 -->
        <div>
          <!-- 选项区域 -->
          <div class="options-area">
            <div class="option-group">
              <div class="option-label">正向提示词</div>
              <el-input size="large" v-model="data.form.forwardPrompt" placeholder="描述您想要生成的画面..." class="box-show" />
            </div>
            <div class="option-group">
              <div class="option-label">反向提示词</div>
              <el-input size="large" v-model="data.form.backwardPrompt" placeholder="描述您不想出现的元素..." class="box-show" />
            </div>
          </div>

          <!-- 输入框区域 -->
          <div style="position: relative; margin-top: 20px;">
            <el-input
              v-model="data.form.prompt"
              type="textarea"
              placeholder="描述您想要生成的图像场景..."
              :autosize="{ minRows: 4, maxRows: 10 }"
              class="auto-resize-textarea"
              prefix-icon="Picture"
              size="large"
            />
                
            <div style="display: flex; justify-content: flex-end; background-color: #fff; padding: 5px; border-radius: 4px;" class="box-show">
              <el-button 
                @click="prompt" 
                size="min" 
                type="primary" 
                :disabled="!data.form.prompt"
              >
                立即生成
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧预览区 -->
    <div class="right-panel">
      <div class="preview-area">
        <div class="preview-placeholder">
          生成结果
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import logoImg from '@/assets/imgs/logo.png'

// 数据
const data = reactive({
  form: { 
    radio: '文生图',
    prompt: '',
    sizeselected: '',
    forwardPrompt: '',
    backwardPrompt: '',
    imgUrl: ''
  },
  size: [
    { label: '512x512', value: '512x512' },
    { label: '1024x1024', value: '1024x1024' },
    { label: '2048x2048', value: '2048x2048' }
  ],
  records: []
})

// 切换选项卡
const changeRadio = (value) => {
  data.form.radio = value
  data.form.prompt = ''
}

// 图片上传成功回调
const handleImgSuccess = (res) => {
  data.imgUrl = res.data.url
}

// 提交生成请求
const prompt = () => {
  console.log('提交生成请求')
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}

.left-panel {
  width: 20%;
  background: rgb(39,39,41);
  border-radius: 8px;
  padding: 16px;
}

.main-panel {
  flex: 1;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.right-panel {
  width: 30%;
  background: rgb(39,39,41);
  border-radius: 8px;
  padding: 16px;
  height: 100%;
}

.panel-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.record-list {
  flex: 1;
  overflow-y: auto;
}

.record-item {
  margin-bottom: 16px;
  cursor: pointer;
}

.record-image img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}

.record-date {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.options-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.option-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.option-label {
  width: 100px;
  color: #666;
}

.preview-area {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-placeholder {
  color: #fff;
  font-size: 14px;
}

.box-show {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.img {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.el-empty__description p {
  color: #fff;
}

.img-uploader .el-upload {
  border: 2px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.img-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.img-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.auto-resize-textarea textarea {
  resize: none;
  overflow-y: auto !important;
}
</style>