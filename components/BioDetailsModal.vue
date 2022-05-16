<template>
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllBioDetails" tabindex="-1"
        aria-labelledby="modalBioDetails" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="icon-socialNetworks">
                        <a href="javascript: void(0)" class="btn btn-social">
                            <img src="~/assets/images/icons/facebook.svg" alt="">
                        </a>
                        <a href="javascript: void(0)" class="btn btn-social">
                            <img src="~/assets/images/icons/instagram.svg" alt="">
                        </a>
                        <a href="javascript: void(0)" class="btn btn-social">
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
    
  }
}
</script>