<template>
  <!-- 容器：flex布局，垂直方向 -->
  <div class="flex flex-col">
    <!-- 标题：字体大小，颜色，粗细，底部边距 -->
    <h1 class="text-3xl text-gray-800 font-bold mb-4">联系我们</h1>
    <!-- 描述：字体大小，颜色，底部边距 -->
    <p class="text-gray-600 mb-8">如果您有任何问题或建议，请随时与我们联系。</p>
    <!-- 表单容器：背景色，边框，圆角，阴影，内边距 -->
    <div class="bg-white border border-gray-200 rounded-xl shadow-md p-6 mb-8">
      <!-- 表单：flex布局，垂直方向，间距 -->
      <form class="flex flex-col space-y-4">
        <!-- 表单组：flex布局，垂直方向，间距 -->
        <div class="flex flex-col space-y-2">
          <!-- 表单标签：字体大小，颜色，粗细 -->
          <label for="name" class="text-sm font-medium text-gray-700">姓名</label>
          <!-- 表单输入框：宽度100%，内边距，边框，圆角，聚焦效果，过渡效果 -->
          <input 
            type="text" 
            id="name" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
            placeholder="请输入您的姓名"
          >
        </div>
        <!-- 表单组：flex布局，垂直方向，间距 -->
        <div class="flex flex-col space-y-2">
          <!-- 表单标签：字体大小，颜色，粗细 -->
          <label for="email" class="text-sm font-medium text-gray-700">邮箱</label>
          <!-- 表单输入框：宽度100%，内边距，边框，圆角，聚焦效果，过渡效果 -->
          <input 
            type="email" 
            id="email" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
            placeholder="请输入您的邮箱"
          >
        </div>
        <!-- 表单组：flex布局，垂直方向，间距 -->
        <div class="flex flex-col space-y-2">
          <!-- 表单标签：字体大小，颜色，粗细 -->
          <label for="message" class="text-sm font-medium text-gray-700">消息</label>
          <!-- 表单文本域：宽度100%，高度，内边距，边框，圆角，聚焦效果，过渡效果，调整大小方式 -->
          <textarea 
            id="message" 
            rows="4" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 resize-y"
            placeholder="请输入您的消息"
          ></textarea>
        </div>
        <!-- 表单提交按钮：宽度100%，内边距，无边框，圆角，背景色，文字颜色，悬停效果，过渡效果，阴影 -->
        <button 
          type="submit" 
          class="w-full px-4 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 shadow-sm hover:shadow"
        >
          提交
        </button>
      </form>
    </div>
    <!-- 联系信息区域：背景色，边框，圆角，阴影，内边距 -->
    <div class="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6">
      <!-- 联系信息标题：字体大小，颜色，粗细，底部边距 -->
      <h2 class="text-xl text-gray-800 font-semibold mb-4">联系信息</h2>
      <!-- 联系信息列表：无列表样式，间距 -->
      <ul class="list-none space-y-3">
        <!-- 联系信息项：flex布局，对齐项目 -->
        <li class="flex items-start">
          <!-- 联系信息图标：宽度，高度，背景色，圆角，内边距，右边距，flex布局，对齐项目， justify-content -->
          <div class="w-10 h-10 bg-indigo-100 rounded-lg p-2 mr-4 flex items-center justify-center flex-shrink-0">
            <!-- 图标占位符 -->
            <span class="text-indigo-600">📧</span>
          </div>
          <!-- 联系信息内容：flex布局，垂直方向 -->
          <div class="flex flex-col">
            <!-- 联系信息标签：字体大小，颜色，粗细 -->
            <span class="text-sm font-medium text-gray-700">邮箱</span>
            <!-- 联系信息值：字体大小，颜色 -->
            <span class="text-gray-600">contact@example.com</span>
          </div>
        </li>
        <!-- 联系信息项：flex布局，对齐项目 -->
        <li class="flex items-start">
          <!-- 联系信息图标：宽度，高度，背景色，圆角，内边距，右边距，flex布局，对齐项目， justify-content -->
          <div class="w-10 h-10 bg-indigo-100 rounded-lg p-2 mr-4 flex items-center justify-center flex-shrink-0">
            <!-- 图标占位符 -->
            <span class="text-indigo-600">📞</span>
          </div>
          <!-- 联系信息内容：flex布局，垂直方向 -->
          <div class="flex flex-col">
            <!-- 联系信息标签：字体大小，颜色，粗细 -->
            <span class="text-sm font-medium text-gray-700">电话</span>
            <!-- 联系信息值：字体大小，颜色 -->
            <span class="text-gray-600">+86 123 4567 8910</span>
          </div>
        </li>
        <!-- 联系信息项：flex布局，对齐项目 -->
        <li class="flex items-start">
          <!-- 联系信息图标：宽度，高度，背景色，圆角，内边距，右边距，flex布局，对齐项目， justify-content -->
          <div class="w-10 h-10 bg-indigo-100 rounded-lg p-2 mr-4 flex items-center justify-center flex-shrink-0">
            <!-- 图标占位符 -->
            <span class="text-indigo-600">📍</span>
          </div>
          <!-- 联系信息内容：flex布局，垂直方向 -->
          <div class="flex flex-col">
            <!-- 联系信息标签：字体大小，颜色，粗细 -->
            <span class="text-sm font-medium text-gray-700">地址</span>
            <!-- 联系信息值：字体大小，颜色 -->
            <span class="text-gray-600">北京市朝阳区示例街道123号</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>