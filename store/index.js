export const state = () => ({
  countries: null,
})

export const getters = {
  getCountries(state) {
    return state.countries
  },
}

export const mutations = {
  STORE_COUNTRIES(state, countries) {
    const countriesName = countries.map((value) => value.name.common)
    const flags = countries.map((value) => value.flag)
    const unsortedList = countriesName.map(function (x, i) {
      return { name: x, flag: flags[i] }
    })
    const countriesList = unsortedList.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    state.countries = countriesList
  },
}

export const actions = {
  async fetchCountries({ commit }) {
    await this.$axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        commit('STORE_COUNTRIES', res.data)
      })
      .catch((e) => console.error(e))
  },
}
