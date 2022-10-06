<template>
  <div>
    <radio-svg-map
      v-model="selectedLocation"
      :map="World"
      class="hidden justify-center items-center max-h-screen w-full scale-[85%] lg:flex"
      @click.prevent="getInfo()"
    />
    <CountriesList class="block lg:hidden" :list="countriesList" />
    <SimpleSpinner
      v-if="!countriesList"
      class="bg-white flex justify-center items-center m-auto h-screen lg:hidden"
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
      flags: [],
      isLoading: false,
    }
  },
  head() {
    return {
      title: 'Countries',
    }
  },
  computed: {
    countriesList() {
      return this.$store.state.countries
    },
  },
  created() {
    this.isLoading = true
    if (this.$store.state.countries === null) {
      this.$store.dispatch('fetchCountries')
    }
    this.isLoading = false
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
