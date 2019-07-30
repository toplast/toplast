<template>
  <VContainer class="text-center">
    <VRow>
      <VCol cols="12">
        <div class="display-1">TopLast</div>
        <div class="title font-weight-light">A Last.fm chart generator</div>
      </VCol>
      <VCol cols="12" sm="6" md="4" offset-sm="3" offset-md="4">
        <VCard>
          <VCardText>
            <VForm v-model="valid">
              <VRow>
                <VCol cols="12">
                  <VTextField
                    v-model="user"
                    label="Last.fm username"
                    :rules="rules"
                  />
                </VCol>
                <VCol cols="12">
                  <VSelect
                    v-model="option"
                    item-text="value"
                    item-value="option"
                    label="Chart option"
                    :items="options"
                    :rules="rules"
                  />
                </VCol>
                <VCol cols="12">
                  <VSelect
                    v-model="period"
                    item-text="value"
                    item-value="option"
                    label="Period"
                    :items="periods"
                    :rules="rules"
                  />
                </VCol>
                <VCol cols="12">
                  <VBtn
                    block
                    color="primary"
                    :loading="loading"
                    :disabled="!valid"
                    @click="generateChart()"
                    >Generate chart</VBtn
                  >
                </VCol>
                <!-- <VCol cols="12">
                  <VBtn
                    block
                    color="primary"
                    :loading="loading"
                    :disabled="!valid"
                    @click="generateChart(true)"
                    >Dev chart</VBtn
                  >
                </VCol> -->
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
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
      option: '1',
      period: '7day',

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
    goToChartGeneratorPage(responses) {
      this.$router.push({
        path: '/chartGenerator',
        query: {
          album: this.encodeParam(responses[0]),
          artist: this.encodeParam(responses[1]),
          track: this.encodeParam(responses[2]),
          option: this.encodeParam(this.option)
        }
      });
    },
    handleLimit(option) {
      return parseInt(this.option, 0) === option ? '5' : '1';
    },

    async generateChart(isDevelopment) {
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

        if (isDevelopment) this.goToChartGeneratorPage(responses);
        else await this.goToChartImagePage(responses);
      } catch (error) {
        this.loading = false;
      }
    },
    async goToChartImagePage(responses) {
      const { data } = await axios.get('https://api.toplast.net/getImage', {
        params: {
          album: this.encodeParam(responses[0]),
          artist: this.encodeParam(responses[1]),
          track: this.encodeParam(responses[2]),
          option: this.encodeParam(this.option),
          user: this.user
        }
      });

      this.$router.push({
        path: '/chart',
        query: {
          image: this.encodeParam(data.url)
        }
      });
    }
  }
};
</script>
