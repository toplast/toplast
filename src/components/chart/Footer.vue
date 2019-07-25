<template>
  <VCard flat tile color="#fafafa" height="150">
    <VLayout px-3 align-center fill-height>
      <VFlex
        v-for="(item, i) in items"
        :key="i"
        class="xs6 px-3"
        :style="`color: ${textColor};`"
      >
        <Item :data="item" :text-color="textColor" />
      </VFlex>
    </VLayout>
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
