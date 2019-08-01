<template>
  <div>
    <img :src="chartImage" alt="Chart" style="width: 100%; max-width: 750px;" />
  </div>
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
