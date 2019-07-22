<template>
  <VCard flat tile color="#fafafa" height="150">
    <VLayout px-2 align-center fill-height>
      <VFlex xs6 px-2 text-xs-center :style="`color: ${textColor};`">
        <Item :data="data.left" :textColor="textColor" />
      </VFlex>
      <VFlex xs6 px-2 text-xs-center :style="`color: ${textColor};`">
        <Item :data="data.right" :textColor="textColor" />
      </VFlex>
    </VLayout>
  </VCard>
</template>

<script>
import Item from '@/components/chart/footer/Item.vue'
import bestContrast from 'get-best-contrast-color'

export default {
  name: 'ChartFooter',
  props: {
    data: { type: Object, default: () => {} },
    colors: { type: Array, default: () => [] }
  },
  components: { Item },
  computed: {
    textColor: function () {
      if (this.colors.length === 0)
        return '#000'
      return bestContrast('#f4f4f4', this.colors)
    }
  }
}
</script>
