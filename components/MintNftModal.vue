<template>
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllUploadItem" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="title-modal">Upload Item</h1>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-upload-item text-center">
                        <!-- <p>
                            Choose <span>"Single"</span> if you want your collectible to be one of a kind or
                            <span>"Multiple"</span>
                            if you want
                            to sell one collectible multiple times
                        </p> -->
                        <div class="grid_buttonUpload">
                            <a @click="$nuxt.$router.push('/mint-nft')" class="btn btn-create bg-primary text-white margin-b-20" data-bs-dismiss="modal" aria-label="Close">
                                Mint Single NFT
                            </a>
                            <!-- <a href="page-create-multi.html"
                                class="btn btn-create bg-white border border-solid border-snow text-dark">
                                Create Multiple
                            </a> -->
                        </div>
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
  name: 'MintNftModal',
}
</script>