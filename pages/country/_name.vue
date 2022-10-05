<template>
  <div>
    <div
      v-if="isLoading"
      class="bg-white h-screen text-3xl pt-48 text-center mx-auto w-full;"
    >
      <!-- <p>Loading...</p> -->
      <span class="flex h-3 w-3">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"
        ></span>
      </span>
    </div>
    <div v-if="data">
      <div>
        <h3 class="text-lg font-medium text-center text-gray-900">
          {{ data.name.official }}
        </h3>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">Capital</dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              {{ data.capital[0] }}
            </dd>
          </div>
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">Currency</dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              {{ getCurrency }}
            </dd>
          </div>
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">Language</dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              {{ getLanguage }}
            </dd>
          </div>
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">
              Population
            </dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              {{ data.population }}
            </dd>
          </div>
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">Flag</dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              <img
                class="object-cover shadow-lg"
                :src="data.flags.png"
                alt="Flag"
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryInfo',
  data() {
    return {
      data: null,
      isLoading: false,
      isError: false,
    }
  },
  computed: {
    getCurrency() {
      const list = this.data.currencies
      const currency = list[Object.keys(list)[0]].name
      return currency
    },
    getLanguage() {
      const list = this.data.languages
      return list[Object.keys(list)[0]]
    },
  },
  created() {
    this.isLoading = true
    this.$axios
      .get(`https://restcountries.com/v3.1/name/${this.$route.params.name}`)
      .then((res) => {
        if (res.status === 200) {
          this.data = res.data[0]
          console.log(this.data)
        } else {
          this.error = true
        }
      })
      .catch((e) => console.log(e))
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style></style>
