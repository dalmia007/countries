<template>
  <div class="bg-[#0000004d] flex items-center justify-center fixed inset-0">
    <CountryInfo
      v-if="countryData && !isLoading"
      :country-data="countryData"
      @close="close"
    />
    <SimpleSpinner v-if="!countryData && !isError" />

    <!-- Error State -->
    <div
      v-if="isError"
      class="flex h-1/4 w-1/4 m-auto p-5 text-center bg-white"
    >
      <p class="m-auto">
        There was an error fetching data for this country. Go back and try
        again!
        <br />
        <button @click="close">
          <client-only>
            <unicon
              name="arrow-left"
              fill="black"
              class="scale-[150%] mt-10"
            ></unicon>
          </client-only>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryInfoModal',
  props: {
    countryData: { default: null, type: Object },
    isLoading: { default: false, type: Boolean },
    isError: { default: false, type: Boolean },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
