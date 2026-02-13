<template>
  <!-- 容器：flex布局，垂直方向 -->
  <div class="flex flex-col">
    <!-- 标题：字体大小，颜色，粗细，底部边距 -->
    <h1 class="text-3xl text-gray-800 font-bold mb-4">欢迎来到首页</h1>
    <!-- 描述：字体大小，颜色，底部边距 -->
    <p class="text-gray-600 mb-8">这是一个使用Vue 3、TypeScript和Tailwind CSS构建的现代化前端应用。</p>
    <!-- 卡片容器：grid布局，3列，间距 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- 卡片1：背景色，边框，圆角，阴影，内边距 -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <!-- 卡片图标：背景色，圆角，内边距，底部边距 -->
        <div class="bg-indigo-100 rounded-lg p-3 mb-4 w-12 h-12 flex items-center justify-center">
          <!-- 图标占位符 -->
          <div class="text-indigo-600 text-xl">🏠</div>
        </div>
        <!-- 卡片标题：字体大小，颜色，粗细，底部边距 -->
        <h2 class="text-xl text-gray-800 font-semibold mb-2">首页</h2>
        <!-- 卡片描述：字体大小，颜色 -->
        <p class="text-gray-600">这是应用的首页，展示了基本的布局和设计风格。</p>
      </div>
      <!-- 卡片2：背景色，边框，圆角，阴影，内边距 -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <!-- 卡片图标：背景色，圆角，内边距，底部边距 -->
        <div class="bg-green-100 rounded-lg p-3 mb-4 w-12 h-12 flex items-center justify-center">
          <!-- 图标占位符 -->
          <div class="text-green-600 text-xl">📊</div>
        </div>
        <!-- 卡片标题：字体大小，颜色，粗细，底部边距 -->
        <h2 class="text-xl text-gray-800 font-semibold mb-2">关于我们</h2>
        <!-- 卡片描述：字体大小，颜色 -->
        <p class="text-gray-600">了解更多关于我们的信息和我们的使命。</p>
      </div>
      <!-- 卡片3：背景色，边框，圆角，阴影，内边距 -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <!-- 卡片图标：背景色，圆角，内边距，底部边距 -->
        <div class="bg-blue-100 rounded-lg p-3 mb-4 w-12 h-12 flex items-center justify-center">
          <!-- 图标占位符 -->
          <div class="text-blue-600 text-xl">✏️</div>
        </div>
        <!-- 卡片标题：字体大小，颜色，粗细，底部边距 -->
        <h2 class="text-xl text-gray-800 font-semibold mb-2">Three Path</h2>
        <!-- 卡片描述：字体大小，颜色 -->
        <p class="text-gray-600">使用Three.js和Three Path绘制3D管道的交互式演示。</p>
      </div>
    </div>
    <!-- 信息区域：背景色，边框，圆角，阴影，内边距 -->
    <div class="bg-indigo-50 border border-indigo-100 rounded-xl shadow-sm p-6">
      <!-- 信息标题：字体大小，颜色，粗细，底部边距 -->
      <h2 class="text-xl text-indigo-800 font-semibold mb-2">技术栈</h2>
      <!-- 信息列表：无列表样式，间距 -->
      <ul class="list-none space-y-2">
        <li class="flex items-center text-indigo-700">
          <!-- 列表项图标 -->
          <span class="mr-2">•</span>
          <!-- 列表项文本 -->
          Vue 3 + TypeScript
        </li>
        <li class="flex items-center text-indigo-700">
          <!-- 列表项图标 -->
          <span class="mr-2">•</span>
          <!-- 列表项文本 -->
          Tailwind CSS
        </li>
        <li class="flex items-center text-indigo-700">
          <!-- 列表项图标 -->
          <span class="mr-2">•</span>
          <!-- 列表项文本 -->
          Three.js + Three Path
        </li>
        <li class="flex items-center text-indigo-700">
          <!-- 列表项图标 -->
          <span class="mr-2">•</span>
          <!-- 列表项文本 -->
          Vue Router
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>