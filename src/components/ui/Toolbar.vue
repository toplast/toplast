<template>
  <div>
    <VAppBar color="primary" dark>
      <VToolbarTitle class="clickable font-weight-bold" @click="$router.push('/')"
        >TopLast</VToolbarTitle
      >
    </VAppBar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar'
};
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}
</style>
