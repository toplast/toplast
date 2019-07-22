<template>
  <v-list-tile>
    <v-list-tile-avatar size="75" color="grey darken-3">
      <v-img
        class="elevation-6"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
      ></v-img>
    </v-list-tile-avatar>

    <v-list-tile-content class="ml-3">
      <v-list-tile-title>Evan You</v-list-tile-title>
      <v-list-tile-subtitle>Evan You</v-list-tile-subtitle>
    </v-list-tile-content>
  </v-list-tile>
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
