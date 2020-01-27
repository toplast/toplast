<template>
  <VCard flat tile :color="colors[2]" height="275">
    <VRow class="mx-1 fill-height" align="center">
      <VCol v-for="(item, i) in items" :key="i" class="px-1 text-center" cols="3">
        <div :style="`color: ${textColor};`">
          <img
            :src="item.image"
            :alt="item.title"
            class="elevation-5 image"
            :style="item.round ? 'border-radius: 100%' : ''"
          />
          <div class="pt-1 text-truncate body-1 font-weight-bold">
            {{ item.title }}
          </div>
          <div v-if="item.subtitle" class="pt-1 text-truncate body-1">
            {{ item.subtitle }}
          </div>
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>

<script>
import getContrastRatio from 'get-contrast-ratio';
import getBestContrastColor from 'get-best-contrast-color';

export default {
  name: 'ChartBody',
  props: {
    items: { type: Array, default: () => [] },
    colors: { type: Array, default: () => [] }
  },
  computed: {
    textColor() {
      if (this.colors.length === 0) return '#000';

      const backgroundColor = this.colors[2];
      let color = getBestContrastColor(backgroundColor, this.colors);

      if (!this.isReadable(color, backgroundColor)) {
        color = getBestContrastColor(backgroundColor, ['#000', '#FFF']);
      }

      return color;
    }
  },
  methods: {
    isReadable(color1, color2) {
      const contrastRatio = getContrastRatio(color1, color2);
      return contrastRatio > 2;
    }
  }
};
</script>

<style scoped>
.image {
  width: 170px;
  height: 170px;
  object-fit: cover;
}
</style>
