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
      meta: [
        {
          name: 'viewport',
          content:
            'initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi',
        },
      ],
    }
  },
  mounted() {
    this.isLoading = true
    this.$axios
      .get(`https://restcountries.com/v3.1/name/${this.$route.params.name}`)
      .then((res) => {
        this.data = res.data[0]
      })
      .catch((e) => console.error(e))
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style></style>
