<template>
  <VCard flat tile width="750" height="750">
    <ChartHeader :data="chart.header" :colors="colors" />
    <ChartBody :items="chart.body" :colors="colors" />
    <ChartFooter :items="chart.footer" :colors="colors" />
  </VCard>
</template>

<script>
import ChartHeader from '@/components/chart/Header.vue';
import ChartBody from '@/components/chart/Body.vue';
import ChartFooter from '@/components/chart/Footer.vue';
import chartSample from '@/assets/chart.json';
import { handleChart } from '@/assets/handleChart';

export default {
  name: 'Chart',
  components: { ChartHeader, ChartBody, ChartFooter },
  data() {
    return {
      albums: [],
      artists: [],
      tracks: [],

      colors: [],
      option: '1'
    };
  },
  computed: {
    chart() {
      const data = [this.albums, this.artists, this.tracks];

      return handleChart(this.option, data);
    }
  },
  mounted() {
    const query = this.$route.query || {};

    if (Object.keys(query).length !== 5) {
      this.albums = chartSample.album;
      this.artists = chartSample.artist;
      this.tracks = chartSample.track;

      this.colors = chartSample.colors;
      this.option = chartSample.option;
    } else {
      this.albums = this.decodeParam(query.album);
      this.artists = this.decodeParam(query.artist);
      this.tracks = this.decodeParam(query.track);

      this.colors = this.decodeParam(query.colors);
      this.option = this.decodeParam(query.option);
    }
  },
  methods: {
    decodeParam(param) {
      let decodedParam = decodeURIComponent(param);
      decodedParam = JSON.parse(decodedParam);

      return decodedParam;
    }
  }
};
</script>
