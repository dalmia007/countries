<template>
  <div class="h-screen flex">
    <div
      v-if="countryData"
      class="bg-[#FAF9F6] shadow sm:rounded-lg w-full lg:w-1/2 sm:mt-0 sm:mx-auto md:m-auto"
    >
      <div class="px-4 py-5 sm:px-6 bg-black flex justify-between items-center">
        <div>
          <div>
            <h3 class="text-lg font-medium leading-6 text-white align-text-top">
              {{ countryData.name.official }}
            </h3>
          </div>
          <p class="mt-1 max-w-2xl text-sm text-[#9FA0A5]">
            {{ countryData.region }}
          </p>
        </div>
        <div>
          <a href="/countries">
            <client-only>
              <unicon name="times" fill="white" class="scale-150"></unicon>
            </client-only>
          </a>
        </div>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt class="font-medium text-black">Capital</dt>
            <dd class="mt-1 text-black font-bold sm:col-span-2 sm:mt-0">
              {{ countryData.capital[0] }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt class="font-medium text-black">Population</dt>
            <dd class="mt-1 text-black font-bold sm:col-span-2 sm:mt-0">
              {{ countryData.population }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt class="font-medium text-black">Currency</dt>
            <dd class="mt-1 text-black font-bold sm:col-span-2 sm:mt-0">
              {{ getCurrency }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt class="font-medium text-black">Languages</dt>
            <dd class="mt-1 text-black font-bold sm:col-span-2 sm:mt-0">
              {{ getLanguages }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt class="font-medium text-black mb-2">Flag</dt>
            <dd class="mt-1 text-black font-bold sm:col-span-2 sm:mt-0">
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

    <div
      v-if="countryData == null"
      class="flex h-full w-full m-auto p-5 text-center"
    >
      <p class="m-auto">
        There was an error fetching data for this country. Go back and try
        again!
        <br />
        <a href="/countries">
          <client-only>
            <unicon
              name="arrow-left"
              fill="black"
              class="scale-[150%] mt-10"
            ></unicon>
          </client-only>
        </a>
      </p>
    </div>
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
    getLanguages() {
      const list = this.countryData.languages
      const listArray = Object.values(list)
      return listArray.toString()
    },
  },
}
</script>

<style></style>
