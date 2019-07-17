<template>
  <VApp>
    <Toolbar v-if="showUI" />

    <VContent>
      <router-view/>
    </VContent>
  </VApp>
</template>

<script>
import Toolbar from '@/components/ui/Toolbar'

export default {
  name: 'App',
  components: { Toolbar },
  computed: {
    showUI () {
      const isChart = this.$route.path.search('chart') > -1

      return !isChart
    }
  }
}
</script>
