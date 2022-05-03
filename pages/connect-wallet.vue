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
            <AppDefaultHeader title="Connect your wallet"/>
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
                    <ConnectWalletItem name="Coinbase" icon="ezgif" />
                    <ConnectWalletItem name="Metamask" icon="metamask" />
                    <ConnectWalletItem name="Bitski" icon="bitski" />
                    <ConnectWalletItem name="Dapper" icon="dapper-icon" />
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#mdllOtherOpen">
                            <div class="icon-app">
                                <img src="~/assets/images/icons/portis-alternative.svg" alt="metamask">
                            </div>
                            <h2 class="text-name">Portis</h2>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>

    <!-- ===================================
      START THE EXTERNAL OPEN MODAL
    ==================================== -->

    <ConnectWalletModal/>
    

</div>
</template>

<script lang="ts">
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
    }
})
</script>
<style scoped src="@/assets/css/abdoul.css">
</style>