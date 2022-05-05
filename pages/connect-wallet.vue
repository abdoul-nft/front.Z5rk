<template>
<div>
  <!-- ===================================
      START LODAER PAGE
    ==================================== -->
    <!-- <section class="loader-page" id="loaderPage">
        <div class="spinner_flash"></div>
    </section> -->
    <!-- START WRAPPER -->
    <div id="wrapper">
        <!-- START CONTENT -->
        <div id="content">
            <!-- ===================================
              START THE HEADER
            ==================================== -->
            <!-- <AppDefaultHeader title="Connect your wallet"/> -->
            <!-- ===================================
              START THE SPACE STICKY
            ==================================== -->
            <div class="space-sticky"></div>
            <!-- ===================================
              START WALLETS LIST
            ==================================== -->
            <section class="margin-t-10 un-connect-wallet margin-b-30">
                <CoverImageWallet />
                <ul class="nav flex-column">
                    <!-- <ConnectWalletItem name="Coinbase" icon="ezgif" /> -->
                    <ConnectWalletItem name="Metamask" icon="metamask" @clicked="login" />
                    <!-- <ConnectWalletItem name="Bitski" icon="bitski" /> -->
                    <!-- <ConnectWalletItem name="Dapper" icon="dapper-icon" /> -->
                    <!-- <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#mdllOtherOpen">
                            <div class="icon-app">
                                <img src="~/assets/images/icons/portis-alternative.svg" alt="metamask">
                            </div>
                            <h2 class="text-name">Portis</h2>
                        </a>
                    </li> -->
                </ul>
            </section>
        </div>
    </div>

    <!-- <ConnectWalletModal/> -->
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'connect-wallet',
  head() {
    return {
      script: [
        {
          src: '/js/bootstrap.bundle.min.js'
        }
      ],
    }
  },
  mounted() {},

  methods: {
    async login() {
      let user = window.Moralis.User.current();
      if (!user) {
        user = await window.Moralis.authenticate({
          signingMessage: "Log in using Moralis",
        })
        .then( (user)  => {
          this.getUser(user.get("ethAddress"))
        })
        .catch( (error)  => {
            console.log(error);
        });
      }else {
        this.getUser(user.get("ethAddress"))
      }
    },

    async register(wallet_address) {
      try {
        await this.$axios.post('http://localhost:4000/v1/auth/register', {
          'wallet_address': wallet_address
        })
         this.$store.dispatch('updateUser', data.data.user)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    getUser(wallet_address) {
      this.$axios.get('http://localhost:4000/v1/auth/account/' + wallet_address)
      .then( (data)  => {
        if(data.data.user) {
          console.log('data.data.user => ', data.data.user)
           this.$store.dispatch('updateUser', data.data.user)
          this.$router.push('/')
        }else {
          this.register(user.get("ethAddress"))
        }
      })
      .catch( (error)  => {
        console.log(error);
      });
    }
  }
})
</script>
<style scoped src="@/assets/css/abdoul.css">
</style>