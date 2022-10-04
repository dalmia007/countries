<template>
  <div>
    <radio-svg-map
      v-model="selectedLocation"
      :map="World"
      class="p-2 md:p-4 lg:p-10 bg-blue-200 flex justify-center items-center min-h-screen w-full"
      @click.prevent="getInfo()"
    />
    {{ locationDisplay }}
  </div>
</template>

<script>
import { RadioSvgMap } from 'vue-svg-map'
import World from '@svg-maps/world'

export default {
  name: 'IndexPage',
  components: {
    RadioSvgMap,
  },
  data() {
    return {
      World,
      selectedLocation: null,
      locationDisplay: '',
    }
  },
  head() {
    return {
      title: 'Countries',
    }
  },
  methods: {
    getInfo() {
      this.World.locations.forEach((item) => {
        if (item.id === this.selectedLocation) {
          return (this.locationDisplay = item.name)
        }
        return null
      })
    },
  },
}
</script>

<style src="vue-svg-map/dist/index.css"></style>
