<template>
  <div>
    <div v-if="countryData">
      <div>
        <h3 class="text-lg font-medium text-center text-gray-900">
          {{ countryData.name.official }}
        </h3>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">Capital</dt>
            <dd
              class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
            >
              {{ countryData.capital[0] }}
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
              {{ countryData.population }}
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
                :src="countryData.flags.png"
                alt="Flag"
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div v-if="countryData == null">error</div>
  </div>
</template>

<script>
export default {
  name: 'CountryInfo',
  props: {
    countryData: { default: null, type: Object },
  },
  computed: {
    getCurrency() {
      const list = this.countryData.currencies
      const currency = list[Object.keys(list)[0]].name
      return currency
    },
    getLanguage() {
      const list = this.countryData.languages
      return list[Object.keys(list)[0]]
    },
  },
}
</script>

<style></style>
