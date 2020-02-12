<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.getUser()
    this.getCart()
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        console.log(res)
        this.$store.dispatch('saveUserName', res.username)
        // TODO: 保存到 vuex 里面
      })
    },
    getCart() {
      this.axios.get('/carts/products/sum').then(res => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';
</style>
