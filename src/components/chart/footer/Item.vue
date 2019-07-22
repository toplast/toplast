<template>
  <div class="list">
    <img
      :src="data.image"
      :alt="data.title"
      class="elevation-2 mr-3 image"
      :style="data.round ? 'border-radius: 100%' : ''"
    />
    <div :style="`color: ${textColor};`">
      <div class="subheading font-weight-regular text-truncate">{{ data.sectionName }}</div>
      <div class="headline font-weight-medium text-truncate">{{ data.title }}</div>
      <div v-if="data.subtitle" class="title font-weight-light text-truncate">{{ data.subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartFooterItem',
  props: {
    data: { type: Object, default: () => {} },
    textColor: { type: String, default: '#000' }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  width: 78px;
  height: 78px;
  object-fit: cover;
}
</style>
