<template>
  <!--
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="搜索">

    </el-form-item>
  </el-form>
  -->
  <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>

<script>
export default {
  name: 'Per',
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>

</style>
