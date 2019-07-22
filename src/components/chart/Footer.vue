<template>
  <VCard flat tile color="#fafafa" height="150">
    <VLayout px-3 align-center fill-height>
      <VFlex
        v-for="(item, i) in items"
        :key="i"
        class="xs6 px-3"
        :style="`color: ${textColor};`"
      >
        <Item :data="item" :textColor="textColor" />
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
    items: { type: Object, default: () => {} },
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
