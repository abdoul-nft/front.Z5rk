<template>
    <header class="default heade-sticky">
        <div class="un-title-page go-back">
            <a @click="$nuxt.$router.back()" class="icon">
                <i class="ri-arrow-drop-left-line"></i>
            </a>
            <span class="color-text size-14 weight-500">@{{username}}</span>
        </div>
        <div class="un-block-right">
            <div class="un-block-right">
                <button v-if="creator" type="button" class="btn btn-box-icon bg-orange-1 color-orange" data-bs-toggle="modal"
                    data-bs-target="#mdllReport">
                    <i class="ri-flag-2-line"></i>
                </button>
                <button type="button" class="btn btn-box-icon bg-snow text-dark" data-bs-toggle="modal"
                    data-bs-target="#mdllShareProfile">
                    <i class="ri-share-forward-line"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: {
    username: {
      type: String,
      required: true
    },
    creator: {
      type: Boolean,
      required: true
    },
  },
}
</script>