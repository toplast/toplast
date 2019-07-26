<template>
  <VContainer class="text-center">
    <div class="display-1">TopLast</div>
    <VForm v-model="valid">
      <VRow>
        <VCol cols="12" md="4">
          <VTextField v-model="user" label="Last.fm username" :rules="rules" />
        </VCol>
        <VCol cols="12" md="4">
          <VSelect
            v-model="option"
            item-text="value"
            item-value="option"
            label="Chart option"
            :items="options"
            :rules="rules"
          />
        </VCol>
        <VCol cols="12" md="4">
          <VSelect
            v-model="period"
            item-text="value"
            item-value="option"
            label="Period"
            :items="periods"
            :rules="rules"
          />
        </VCol>
        <VCol cols="12" md="3" offset-md="9">
          <VBtn
            block
            color="primary"
            :loading="loading"
            :disabled="!valid"
            @click="generateChart()"
            >Generate chart</VBtn
          >
        </VCol>
      </VRow>
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
    handleLimit(option) {
      return parseInt(this.option, 0) === option ? '5' : '1';
    },
    async generateChart() {
      this.loading = true;

      const { user, period } = this;
      const params = [
        { limit: this.handleLimit(1), user, period },
        { limit: this.handleLimit(2), user, period },
        { limit: this.handleLimit(3), user, period }
      ];

      const promises = [
        axios.get('https://api.toplast.net/getAlbums', { params: params[0] }),
        axios.get('https://api.toplast.net/getArtists', { params: params[1] }),
        axios.get('https://api.toplast.net/getTracks', { params: params[2] })
      ];

      try {
        let responses = await Promise.all(promises);
        responses = responses.map(response => response.data);

        this.$router.push({
          path: '/chart',
          query: {
            album: this.encodeParam(responses[0]),
            artist: this.encodeParam(responses[1]),
            track: this.encodeParam(responses[2]),
            option: this.encodeParam(this.option)
          }
        });
      } catch (error) {
        this.loading = false;
      }
    }
  }
};
</script>
