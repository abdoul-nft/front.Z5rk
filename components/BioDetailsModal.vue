<template>
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllBioDetails" tabindex="-1"
        aria-labelledby="modalBioDetails" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="icon-socialNetworks">
                        <a @click="gotoSocialMedia('facebook')" class="btn btn-social">
                            <img src="~/assets/images/icons/facebook.svg" alt="">
                        </a>
                        <a @click="gotoSocialMedia('instagram')" class="btn btn-social">
                            <img src="~/assets/images/icons/instagram.svg" alt="">
                        </a>
                        <a @click="gotoSocialMedia('twitter')" class="btn btn-social">
                            <img src="~/assets/images/icons/twitter.svg" alt="">
                        </a>
                    </div>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-upload-item">
                        <h2 class="size-16 weight-500 text-dark margin-b-10">Bio</h2>
                        <p>
                            {{ user.bio }}
                        </p>

                    </div>

                </div>
                <div class="modal-footer border-0">
                    <div class="env-pb"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'BioDetailsModal',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    gotoSocialMedia (media) {
        if(media == 'twitter') {
            window.location.href = 'https://twitter.com/' + this.user.twitter_username
        }
        if(media == 'instagram') {
            window.location.href = 'https://www.instagram.com/' + this.user.instagram_username
        }
        window.location.href = 'https://www.instagram.com/' + this.user.instagram_username
    }
  }
}
</script>