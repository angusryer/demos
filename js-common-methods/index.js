Vue.component('button-counter', {
  template: `
    <button @click="count++">
      {{ count }}
    </button>`,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    mPly: () => {
      count = (count + 1) * 5
    }
  }
})

new Vue({
  el: '#app'
})