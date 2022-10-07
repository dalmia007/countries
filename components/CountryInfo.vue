<template>
  <div class="h-screen flex w-full lg:w-1/4" @click.stop="">
    <div
      v-if="countryData"
      class="bg-[#FAF9F6] shadow sm:rounded-lg w-full sm:mt-0 sm:mx-auto md:m-auto"
    >
      <div
        class="sticky top-0 px-4 py-5 sm:px-6 bg-black flex justify-between items-center"
      >
        <div>
          <h3 class="text-lg font-medium leading-6 text-white align-text-top">
            {{ countryData.name.common }}
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-[#9FA0A5]">
            {{ countryData.region }}
          </p>
        </div>
        <div>
          <n-link to="/" class="flex lg:hidden">
            <client-only>
              <unicon name="times" fill="white" class="scale-150"></unicon>
            </client-only>
          </n-link>
          <button class="hidden lg:flex" @click="closeModal">
            <client-only>
              <unicon name="times" fill="white" class="scale-150"></unicon>
            </client-only>
          </button>
        </div>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="divide-y divide-gray-200">
          <CountryInfoDetail
            title="Capital"
            :detail="
              countryData.capital ? countryData.capital[0] : 'None Specified'
            "
          />
          <CountryInfoDetail
            title="Population"
            :detail="
              countryData.population
                ? countryData.population.toString()
                : 'None Specified'
            "
          />
          <CountryInfoDetail title="Currency" :detail="getCurrency" />
          <CountryInfoDetail title="Languages" :detail="getLanguages" />
          <CountryInfoDetail title="Flag"
            ><img
              class="shadow-2xl scale-[40%] origin-top-left mt-2 lg:mt-0"
              :src="countryData.flags.png"
              alt="Flag"
            />
          </CountryInfoDetail>
        </dl>
      </div>
    </div>
    <!-- Error State -->
    <div
      v-if="countryData == null"
      class="flex h-full w-full m-auto p-5 text-center"
    >
      <p class="m-auto">
        There was an error fetching data for this country. Go back and try
        again!
        <br />
        <n-link to="/">
          <client-only>
            <unicon
              name="arrow-left"
              fill="black"
              class="scale-[150%] mt-10"
            ></unicon>
          </client-only>
        </n-link>
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
      if (this.countryData.currencies) {
        const list = this.countryData.currencies
        const currency = list[Object.keys(list)[0]].name
        return currency
      } else return 'None Specified'
    },
    getLanguages() {
      if (this.countryData.languages) {
        const list = this.countryData.languages
        const listArray = Object.values(list)
        return listArray.slice(0, 5).toString()
      } else {
        return 'None Specified'
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
