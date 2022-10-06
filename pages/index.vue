<template>
  <div>
    <radio-svg-map
      v-model="selectedLocation"
      :map="World"
      class="flex justify-center items-center max-h-screen w-full scale-[85%]"
      @click.prevent="getInfo()"
    />
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
    }
  },
  head() {
    return {
      title: 'Countries',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    }
  },
  methods: {
    getInfo() {
      this.World.locations.forEach((item) => {
        if (item.id === this.selectedLocation) {
          this.$router.push(`country/${item.name}`)
        }
        return null
      })
    },
  },
}
</script>

<style src="vue-svg-map/dist/index.css"></style>
