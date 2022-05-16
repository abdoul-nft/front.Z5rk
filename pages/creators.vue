<template>
    <div class="unList-bestSeller bg-white">
        <div class="content-list-sellers">
            <ul class="nav flex-column">

                <li v-for="(creator, index) in this.$store.state.creators" :key="index"  class="nav-item">
                    <div class="nav-link item-user-seller">
                        <a @click="gotoCreatorDetails(creator)" class="item-user-img">
                            <picture>
                                <source :srcset="creator.profile_photo ? creator.profile_photo : require(`../assets/images/avatar/22.jpg`)" type="image/webp">
                                <img class="avt-img" :src="creator.profile_photo ? creator.profile_photo : require(`../assets/images/avatar/22.jpg`)" alt="">
                            </picture>
                            <div class="txt-user">
                                <!-- <h5>9.4 <span>ETH</span></h5> -->
                                <p>{{creator.username}} <i class="ri-checkbox-circle-fill"></i> </p>
                            </div>
                        </a>
                        <div class="other-option">
                            <button type="button" class="btn btn-box-check">
                                <input type="checkbox">
                                <div class="icon-box">
                                    <i class="ri-add-fill"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  name: 'creators',
  layout: 'others',
  methods:{
    gotoCreatorDetails(creator: any) {
        this.$store.dispatch('updateCurrentCreator', creator)
        this.$router.push ({name: 'creator-address', params: {address: creator.wallet_address}})
    }
  } 
})
</script>