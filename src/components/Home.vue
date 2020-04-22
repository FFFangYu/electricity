<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>
<script>
export default {
  methods: {
    logout() {
      /* 清除session */
      window.sessionStorage.clear()
      /* 导航到登入页面 */
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less">

</style>
