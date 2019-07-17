<template>
  <VToolbar color="primary" dense prominent dark>
    <VToolbarTitle class="font-weight-bold" @click="$router.push('/')">
      TopLast
    </VToolbarTitle>
    <VSpacer/>

    <VBtn flat @click="$router.push('/login')">
      Login&nbsp;
      <VIcon>mdi-login</VIcon>
    </VBtn>
  </VToolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>
