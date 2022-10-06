<template>
  <div class="flex flex-col">
    <div class="sticky top-0 shadow-sm z-10">
      <input
        v-model="searchQuery"
        type="text"
        class="block w-full bg-black px-6 sm:text-sm h-20 text-white placeholder-white focus:outline-none focus:border-transparent"
        placeholder="Search for a country here..."
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <clientOnly>
          <unicon name="search" fill="white"></unicon>
        </clientOnly>
      </div>
    </div>
    <div class="bg-[#FAF9F6]">
      <div
        v-for="country in filteredList"
        :key="country.name"
        class="bg-white shadow m-2"
      >
        <n-link :to="`/country/${country.name}`">
          <div class="flex items-center space-x-6 p-6">
            <div class="scale-[200%]">{{ country.flag }}</div>
            <h3 class="text-sm font-light text-gray-900">
              {{ country.name }}
            </h3>
          </div>
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    list: { default: null, type: Array },
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: {
    filteredList() {
      if (this.searchQuery && this.list) {
        return this.list.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((alpha) => item.name.toLowerCase().includes(alpha))
        })
      } else {
        return this.list
      }
    },
  },
}
</script>

<style></style>
