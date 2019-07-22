<template>
  <VCard flat tile :color="colors[0]" height="325">
    <VLayout align-center fill-height>
      <VFlex xs8 px-3 :style="`color: ${textColor};`">
        <div class="headline font-weight-light">
          {{ data.sectionName }}
        </div>
        <div class="display-2 font-weight-regular">
          {{ data.title }}
        </div>
        <div v-if="data.subtitle" class="headline font-weight-regular">
          {{ data.subtitle }}
        </div>
      </VFlex>
      <VFlex xs4 text-xs-center>
        <img
          :src="data.image"
          :alt="`${data.title}`"
          width="200"
          height="200"
          class="elevation-6"
          :style="data.round ? 'border-radius: 100%' : ''"
        />
      </VFlex>
    </VLayout>
  </VCard>
</template>

<script>
import bestContrast from 'get-best-contrast-color'

export default {
  name: 'ChartHeader',
  props: {
    data: { type: Object, default: () => {} },
    colors: { type: Array, default: () => [] }
  },
  computed: {
    textColor: function () {
      if (this.colors.length === 0)
        return '#000'
      return bestContrast(this.colors[0], this.colors)
    }
  }
}
</script>
