<template>
  <div class="app-container">
    <!-- 这是根组件 -->
    <!-- 顶部header区域 -->
    <mt-header fixed title="CMS内容管理系统"></mt-header>
    <!-- 中间的路由 router-view区域 -->
    <router-view></router-view>
    <!-- 底部Tab bar区域 -->
    <h1>这是app根组件</h1>
    <nav class="mui-bar mui-bar-tab">
      <!-- 将原本的a链接改造成router-link -->
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .app-container{
    margin-top: 40px;
  }
</style>