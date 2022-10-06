<template>
  <div class="bg-[#FAF9F6]">
    <div
      v-for="country in list"
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
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    list: { default: null, type: Array },
  },
}
</script>

<style></style>
