<template>
  <VCard flat tile :color="colors[0]" height="325">
    <VRow class="mx-3 fill-height" align="center">
      <VCol cols="8">
        <div :style="`color: ${textColor};`">
          <div class="headline font-weight-light">{{ data.sectionName }}</div>
          <div class="display-2 font-weight-regular">{{ data.title }}</div>
          <div v-if="data.subtitle" class="headline font-weight-regular">
            {{ data.subtitle }}
          </div>
        </div>
      </VCol>
      <VCol class="xs-4 text-center">
        <img
          :src="data.image"
          :alt="data.title"
          class="elevation-6 image"
          :style="data.round ? 'border-radius: 100%' : ''"
        />
      </VCol>
    </VRow>
  </VCard>
</template>

<script>
import getContrastRatio from 'get-contrast-ratio';
import getBestContrastColor from 'get-best-contrast-color';

export default {
  name: 'ChartHeader',
  props: {
    data: { type: Object, default: () => {} },
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

<style scoped>
.image {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
