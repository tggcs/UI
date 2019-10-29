<template>
  <div>
    <div class="main">
      <div class="nav">
        <span @click="open('button')">BUTTON</span>
      </div>
      <router-view class="content"></router-view>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    open(doc){
      this.$router.push('/button')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  .nav {
    width: 200px;
    > span {
      cursor: pointer;
    }
    > span:hover {
      color: #2196f3;
    }
  }
  .content {
    flex-grow: 1;
  }
}
</style>