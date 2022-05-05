<template>
  <Nuxt />
</template>

<script>
export default {
  created(){
    if (process.browser){
      let user = window.Moralis.User.current();
      if (user && this.getUser(user.get("ethAddress"))) {
       this.$router.push('/')
      }
    }
  },
  methods: {
    async getUser(wallet_address) {
      try {
        return await this.$axios.get('http://localhost:4000/v1/auth/account/' + wallet_address)
      } catch (error) {
        console.log(error)
        return null
      }
    }
  }
}
</script>