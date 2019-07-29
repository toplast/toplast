<template>
  <VCard flat tile color="#fafafa" height="150">
    <VRow class="px-3 fill-height" align="center">
      <VCol v-for="(item, i) in items" :key="i" cols="6" class="px-3">
        <Item :data="item" :text-color="textColor" />
      </VCol>
    </VRow>
  </VCard>
</template>

<script>
import bestContrast from 'get-best-contrast-color';
import Item from '@/components/chart/footer/Item.vue';

export default {
  name: 'ChartFooter',
  components: { Item },
  props: {
    items: { type: Array, default: () => [] },
    colors: { type: Array, default: () => [] }
  },
  computed: {
    textColor() {
      if (this.colors.length === 0) return '#000';
      return bestContrast('#f4f4f4', this.colors);
    }
  }
};
</script>
