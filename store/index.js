// Initializing VueX Store with sample code

export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment (state) {
      state.counter++
    }
  }