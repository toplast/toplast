<template>
  <VCard flat tile :color="colors[2]" height="275">
    <VRow class="mx-1 fill-height" align="center">
      <VCol
        v-for="(item, i) in items"
        :key="i"
        class="px-1 text-center"
        cols="3"
        :style="`color: ${textColor};`"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="elevation-5 image"
          :style="item.round ? 'border-radius: 100%' : ''"
        />
        <div class="pt-1 text-truncate body-2">{{ item.title }}</div>
        <div v-if="item.subtitle" class="pt-1 text-truncate body-1">
          {{ item.subtitle }}
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>

<script>
import bestContrast from 'get-best-contrast-color';

export default {
  name: 'ChartBody',
  props: {
    items: { type: Array, default: () => [] },
    colors: { type: Array, default: () => [] }
  },
  computed: {
    textColor() {
      if (this.colors.length === 0) return '#000';
      return bestContrast(this.colors[2], this.colors);
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
