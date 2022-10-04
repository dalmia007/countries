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
      isLoading: false,
      isError: false,
      countryInfo: null,
    }
  },
  head() {
    return {
      title: 'Countries',
    }
  },
  methods: {
    getInfo() {
      this.isLoading = true
      this.World.locations.forEach((item) => {
        if (item.id === this.selectedLocation) {
          this.$axios
            .get(`https://restcountries.com/v3.1/name/${item.name}`)
            .then((res) => {
              if (res.status === 200) {
                console.log(res.data)
              } else {
                this.error = true
              }
            })
            .catch((e) => console.log(e))
            .finally(() => (this.isLoading = false))
        }
        return null
      })
    },
  },
}
</script>

<style src="vue-svg-map/dist/index.css"></style>
