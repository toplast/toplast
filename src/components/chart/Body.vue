<template>
  <VCard flat tile :color="colors[2]" height="275">
    <VLayout px-1 align-center fill-height>
      <VFlex
        v-for="(item, i) in items"
        :key="i"
        class="xs3 px-1 text-xs-center"
        :style="`color: ${textColor};`"
      >
        <img
          :src="item.image"
          :alt="item.title"
          width="170"
          height="170"
          class="elevation-5"
          :style="item.round ? 'border-radius: 100%' : ''"
        />
        <div class="pt-1 text-truncate body-2">
          {{ item.title }}
        </div>
        <div v-if="item.subtitle" class="pt-1 text-truncate body-1">
          {{ item.subtitle }}
        </div>
      </VFlex>
    </VLayout>
  </VCard>
</template>

<script>
import bestContrast from 'get-best-contrast-color'

export default {
  name: 'ChartBody',
  props: {
    items: { type: Array, default: () => [] },
    colors: { type: Array, default: () => [] }
  },
  computed: {
    textColor: function () {
      if (this.colors.length === 0)
        return '#000'
      return bestContrast(this.colors[2], this.colors)
    }
  }
}
</script>
