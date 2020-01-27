<template>
  <VApp>
    <Toolbar v-if="showUI" />

    <VContent>
      <RouterView />
    </VContent>
  </VApp>
</template>

<script>
import Toolbar from '@/components/ui/Toolbar.vue';

export default {
  name: 'App',
  components: { Toolbar },
  computed: {
    showUI() {
      const isChart = this.$route.path.search('chart') > -1;

      return !isChart;
    }
  }
};
</script>
