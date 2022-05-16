<template>
  <div class="head">
    <div class="cover-image">
        <picture>
            <source :srcset="coverImage() ? user.cover_image : require(`../assets/images/avatar/20.jpg`)" type="image/webp">
            <img :src="coverImage() ? user.cover_image : require(`../assets/images/avatar/20.jpg`)" alt="cover image">
        </picture>
    </div>
    <div class="text-user-creator">
        <div class="d-flex align-items-center">
            <div class="user-img">
                <picture>
                    <source :srcset="profileImage() ? user.profile_photo : require(`../assets/images/avatar/avatar.png`)" type="image/webp">
                    <img :src="profileImage() ? user.profile_photo : require(`../assets/images/avatar/avatar.png`)" alt="creator image">
                </picture>
                <i class="ri-checkbox-circle-fill"></i>
            </div>
            <div class="text">
                <h3>{{ user.username }}</h3>
                <p>{{ user.wallet_address.slice(0, 15) + '...' }}</p>
            </div>
        </div>
        <button type="button" class="btn btn-copy-address mt-3" @click="$copyText(user.wallet_address)">
            <input type="checkbox">
            <div class="icon-box">
                <i class="ri-file-copy-2-line"></i>
            </div>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHead',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    coverImage() {
      return this.user.cover_image != undefined && this.user.cover_image != '' && this.user.cover_image != null
    },
    profileImage() {
      return this.user.profile_photo != undefined && this.user.profile_photo != '' && this.user.profile_photo != null
    }
  }
}
</script>