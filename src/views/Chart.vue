<template>
  <img :src="chartImage" alt="Chart" />
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
