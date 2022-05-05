<template>
<div>
    <div id="wrapper">
        <div id="content">
            <div class="space-sticky"></div>
            <section class="margin-t-10 un-connect-wallet margin-b-30">
                <CoverImageWallet />
                <ul class="nav flex-column">
                    <ConnectWalletItem name="Metamask" icon="metamask" />
                </ul>
            </section>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  name: 'account',
  layout: 'navigation',
})
</script>
<style scoped src="@/assets/css/abdoul.css">
</style>