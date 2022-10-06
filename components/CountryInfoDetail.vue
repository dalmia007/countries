<template>
  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
    <dt class="font-semibold text-black">{{ title }}</dt>
    <dd class="mt-1 text-black font-light sm:col-span-2 sm:mt-0">
      {{ detail }}
      <slot></slot>
    </dd>
  </div>
</template>

<script>
export default {
  name: 'CountryInfoDetail',
  props: {
    title: { default: null, type: String },
    detail: { default: null, type: String || Number },
  },
}
</script>

<style></style>
