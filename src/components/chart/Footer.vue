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
import getContrastRatio from 'get-contrast-ratio';
import getBestContrastColor from 'get-best-contrast-color';
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
      if (this.colors.length === 0) return 'rgba(0, 0, 0, 0.87)';

      const color = getBestContrastColor('#f4f4f4', this.colors);

      if (this.isReadable(color, '#f4f4f4')) return color;
      return getBestContrastColor('#f4f4f4', ['rgba(0, 0, 0, 0.87)', '#FFFFFF']);
    }
  },
  methods: {
    isReadable(color1, color2) {
      const contrastRatio = getContrastRatio(color1, color2);
      return contrastRatio > 10;
    }
  }
};
</script>
