<template>
  <div class="transform scale-100">
    <div
      v-if="isLoading"
      class="bg-white flex justify-center items-center m-auto h-screen"
    >
      <SimpleSpinner />
    </div>
    <CountryInfo v-else :country-data="data" />
  </div>
</template>

<script>
export default {
  name: 'CountryInfoPage',
  data() {
    return {
      data: null,
      isLoading: false,
    }
  },
  head() {
    return {
      title: `${this.$route.params.name}`,
    }
  },
  mounted() {
    this.isLoading = true
    this.$axios
      .get(`https://restcountries.com/v3.1/name/${this.$route.params.name}`)
      .then((res) => {
        this.$route.params.name === 'China'
          ? (this.data = res.data[1])
          : (this.data = res.data[0])
      })
      .catch((e) => console.error(e))
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style></style>
