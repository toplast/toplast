<template>
  <VContainer text-xs-center grid-list-md>
    <div class="display-1">TopLast</div>
    <VForm v-model="valid">
      <VLayout wrap>
        <VFlex xs12 md4>
          <VTextField v-model="user" label="Last.fm username" :rules="rules" />
        </VFlex>
        <VFlex xs12 md4>
          <VSelect
            v-model="option"
            item-text="value"
            item-value="option"
            label="Chart option"
            :items="options"
            :rules="rules"
          />
        </VFlex>
        <VFlex xs12 md4>
          <VSelect
            v-model="period"
            item-text="value"
            item-value="option"
            label="Period"
            :items="periods"
            :rules="rules"
          />
        </VFlex>
        <VFlex xs12 md3 offset-md9>
          <VBtn
            block
            color="primary"
            :loading="loading"
            :disabled="!valid"
            @click="generateChart()"
            >Generate chart</VBtn
          >
        </VFlex>
      </VLayout>
    </VForm>
  </VContainer>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      options: [
        { value: 'Top albums', option: '1' },
        { value: 'Top artists', option: '2' },
        { value: 'Top tracks', option: '3' }
      ],
      periods: [
        { value: '7 days', option: '7day' },
        { value: '1 month', option: '1month' },
        { value: '3 months', option: '3month' },
        { value: '6 months', option: '6month' },
        { value: '12 months', option: '12month' },
        { value: 'Overall', option: 'overall' }
      ],

      user: undefined,
      option: undefined,
      period: undefined,

      valid: false,
      rules: [v => !!v || 'Value is required'],

      loading: false
    };
  },
  methods: {
    encodeParam(param) {
      let encodedParam = JSON.stringify(param);
      encodedParam = encodeURIComponent(encodedParam);

      return encodedParam;
    },
    async generateChart() {
      this.loading = true;

      const { data } = await axios.get(
        `.netlify/functions/getChartInfo?option=${this.option}&user=${this.user}&period=${this.period}`
      );

      this.$router.push({
        path: '/chart',
        query: {
          album: this.encodeParam(data.album),
          artist: this.encodeParam(data.artist),
          colors: this.encodeParam(data.colors),
          option: this.encodeParam(data.option),
          track: this.encodeParam(data.track)
        }
      });
    }
  }
};
</script>
