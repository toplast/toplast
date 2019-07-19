<template>
  <VCard flat tile width="600" height="600">
    <VCard flat tile :color="`#${colors.topAlbum.backgroundColor}`">
      <VLayout class="align-center height--275">
        <VFlex xs7 px-3 :style="`color: #${colors.topAlbum.textColor};`">
          <div class="headline font-weight-light">Most listened album</div>
          <div class="display-2 font-weight-regular">{{ topAlbum.name }}</div>
          <div class="headline font-weight-regular">{{ topAlbum.artist }}</div>
        </VFlex>
        <VFlex xs5 text-xs-center>
          <img
            :src="topAlbum.cover"
            :alt="`${topAlbum.name} - ${topAlbum.artist}`"
            width="200"
            height="200"
            class="elevation-6"
          />
        </VFlex>
      </VLayout>
    </VCard>

    <VCard flat tile :color="`#${colors.otherAlbums.backgroundColor}`">
      <VLayout class="align-center height--225 px-1">
        <VFlex
          v-for="(albumm, n) in otherAlbums"
          :key="n"
          class="xs3 px-1 text-xs-center"
          :style="`color: #${colors.otherAlbums.textColor};`"
        >
          <VImg
            :src="albumm.cover"
            :alt="`${albumm.name} - ${albumm.artist}`"
            class="elevation-3 grey lighten-2"
            aspect-ratio="1"
          />
          <div class="pt-1 text-truncate body-2">{{ albumm.name }}</div>
          <div class="pt-1 text-truncate body-1">{{ albumm.artist }}</div>
        </VFlex>
      </VLayout>
    </VCard>

    <VCard flat tile>
      <VLayout class="justify-center align-center height--100" :style="`color: #${colors.otherStats.textColor};`">
          <div class="pr-4" style="align-items: center; display: flex;">
            <div
              style="
              display: flex; -webkit-box-pack: start; justify-content: flex-start; min-width: 56px;
            "
            >
              <VAvatar>
                <img :src="otherStats.topArtist.image" :alt="otherStats.topArtist.name" />
              </VAvatar>
            </div>

            <div>
              <div class="font-weight-light">Most listened artist</div>
              <div class="title font-weight-regular">{{ otherStats.topArtist.name }}</div>
            </div>
          </div>
          <div style="align-items: center; display: flex;">
            <div
              style="
              display: flex; -webkit-box-pack: start; justify-content: flex-start; min-width: 56px;
            "
            >
              <VAvatar tile>
                <img
                  :src="otherStats.topTrack.cover"
                  :alt="`${otherStats.topTrack.name} - ${otherStats.topTrack.artist}`"
                />
              </VAvatar>
            </div>

            <div>
              <div class="font-weight-light">Most listened track</div>
              <div class="title font-weight-regular">{{ otherStats.topTrack.name }}</div>
              <div class="font-weight-regular">{{ otherStats.topTrack.artist }}</div>
            </div>
          </div>
      </VLayout>
    </VCard>
  </VCard>
</template>

<script>
import weekly from '@/assets/weekly.json'

export default {
  name: 'WeeklyChart',
  data () {
    return {
      colors: {
        topAlbum: {},
        otherAlbums: {},
        otherStats: {}
      },
      topAlbum: {},
      otherAlbums: [],
      otherStats: {
        topArtist: {},
        topTrack: {}
      }
    }
  },
  mounted () {
    let param
    if (this.$route && this.$route.query.json) {
      param = JSON.parse(this.$route.query.json)
    } else {
      param = weekly
    }

    this.colors = param.colors
    this.topAlbum = param.topAlbum
    this.otherAlbums = param.otherAlbums
    this.otherStats = param.otherStats
  },
  // To be implemented in the API
  methods: {
    getUrlQuery () {
      const json = {
        colors: this.colors,
        topAlbum: this.topAlbum,
        otherAlbums: this.otherAlbums,
        otherStats: this.otherStats
      }
      const jsonString = JSON.stringify(json).replace(/#/g, '')

      return encodeURI(jsonString)
    }
  }
}
</script>

<style lang="scss" scoped>
.height--275 {
  height: 275px
}
.height--225 {
  height: 225px
}
.height--100 {
  height: 100px
}
</style>
