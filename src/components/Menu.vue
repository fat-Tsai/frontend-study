<template>
  <div class="menu-container">
    <aside class="sidebar">
      <h2>菜单</h2>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/three-path">Threejs-path</router-link>
        </li>
        <li>
          <!-- <router-link to="/contact">联系我们</router-link> -->
        </li>
      </ul>
    </aside>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
}

.sidebar h2 {
  margin-top: 0;
  color: #333;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: none;
  color: #666;
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
}

.sidebar a:hover {
  background-color: #e0e0e0;
  color: #333;
}

/* .sidebar a.router-link-active { */
/* exact完全匹配的路由 */
.sidebar a.router-link-exact-active { 
  background-color: #42b983;
  color: white;
}

.content {
  flex: 1;
  overflow-y: auto;
}
</style>