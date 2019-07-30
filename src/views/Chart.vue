<template>
  <VImg :src="chartImage" alt="Chart" max-height="750" max-width="750" />
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return { chartImage: undefined };
  },
  mounted() {
    const query = this.$route.query || {};
    const { image } = query;

    this.chartImage = JSON.parse(decodeURIComponent(image));
  }
};
</script>
