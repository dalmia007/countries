<template>
  <div>
    <radio-svg-map
      v-model="selectedLocation"
      :map="World"
      class="hidden justify-center items-center max-h-screen w-full scale-[85%] lg:flex"
      @click.prevent="getInfo()"
    />
    <CountriesList class="block lg:hidden" :list="countriesList" />
    <CountryInfoModal
      v-if="isModalVisible"
      :is-error="isError"
      :is-loading="isLoading"
      class="hidden lg:flex"
      :country-data="data"
      @close="closeModal"
    />
    <SimpleSpinner
      v-if="!countriesList || isLoading"
      class="flex justify-center items-center m-auto h-screen lg:hidden"
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
      data: null,
      flags: [],
      isLoading: false,
      isModalVisible: false,
      isError: false,
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
      this.isModalVisible = true
      this.isLoading = true
      this.isError = false
      this.World.locations.forEach((item) => {
        if (item.id === this.selectedLocation) {
          this.$axios
            .get(`https://restcountries.com/v3.1/name/${item.name}`)
            .then((res) => {
              this.data = res.data[0]
            })
            .catch((e) => {
              console.error(e)
              this.isError = true
            })
            .finally(() => (this.isLoading = false))
        }
        return null
      })
    },
    closeModal() {
      this.isModalVisible = false
      this.selectedLocation = null
      this.data = null
    },
  },
}
</script>

<style src="vue-svg-map/dist/index.css"></style>
