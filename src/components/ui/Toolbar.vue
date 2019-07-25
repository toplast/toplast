<template>
  <VToolbar color="primary" dense prominent dark>
    <VToolbarTitle class="clickable font-weight-bold" @click="$router.push('/')"
      >TopLast</VToolbarTitle
    >
    <VSpacer />

    <!-- <VBtn v-if="isLogged" flat icon @click="$router.push('/account')">
      <VIcon>mdi-account</VIcon>
    </VBtn>
    <VBtn v-else icon flat @click="$router.push('/login')">
      <VIcon>mdi-login</VIcon>
    </VBtn>-->
  </VToolbar>
</template>

<script>
export default {
  name: 'Toolbar'
  // computed: {
  //   isLogged () {
  //     return Math.random() >= 0.5
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}
</style>
