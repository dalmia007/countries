<template>
  <div>
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
  created() {
    this.isLoading = true
    this.$axios
      .get(`https://restcountries.com/v3.1/name/${this.$route.params.name}`)
      .then((res) => {
        this.data = res.data[0]
        console.log(this.data)
      })
      .catch((e) => console.error(e))
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style></style>
