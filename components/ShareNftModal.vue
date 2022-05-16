<template>
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllShareCollectibles"
        tabindex="-1" aria-labelledby="modalShareCollectibles" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="item-shared">
                        <div class="image-items">
                            <picture>
                                <source :srcset="nft.image ? getImage(nft.image) : require(`../assets/images/avatar/11.jpg`)" type="image/webp">
                                <img class="user-img" :src="nft.image ? getImage(nft.image) : require(`../assets/images/avatar/11.jpg`)" alt="">
                            </picture>
                        </div>
                        <div class="txt">
                            <h1> {{ nft.name }}</h1>
                            <p>{{ token_address.slice(0, 10) + '...' }}</p>
                        </div>
                    </div>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-share-socials">

                        <div class="un-navMenu-default p-0">

                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <button type="button" class="btn nav-link bg-snow ">
                                        <div class="item-content-link">
                                            <h3 class="link-title">Copy</h3>
                                        </div>
                                        <div class="other-cc">
                                            <span class="badge-text"></span>
                                            <div class="icon-arrow">
                                                <i class="ri-file-copy-2-line"></i>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            </ul>

                            <div class="sub-title-pkg">
                                <h2>Social Networks</h2>
                            </div>

                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link facebook" href="javascript: void(0)">
                                        <div class="item-content-link">
                                            <div class="icon-svg">
                                                <img src="~/assets/images/icons/facebook.svg" alt="">
                                            </div>
                                            <h3 class="link-title">Facebook</h3>
                                        </div>
                                        <div class="other-cc">
                                            <span class="badge-text"></span>
                                            <div class="icon-arrow">
                                                <i class="ri-arrow-drop-right-line"></i>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link twitter" href="javascript: void(0)">
                                        <div class="item-content-link">
                                            <div class="icon-svg">
                                                <img src="~/assets/images/icons/twitter.svg" alt="">
                                            </div>
                                            <h3 class="link-title">Twitter</h3>
                                        </div>
                                        <div class="other-cc">
                                            <span class="badge-text"></span>
                                            <div class="icon-arrow">
                                                <i class="ri-arrow-drop-right-line"></i>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link instrgrame" href="javascript: void(0)">
                                        <div class="item-content-link">
                                            <div class="icon-svg">
                                                <img src="~/assets/images/icons/instagram.svg" alt="">
                                            </div>
                                            <h3 class="link-title">Instrgrame</h3>
                                        </div>
                                        <div class="other-cc">
                                            <span class="badge-text"></span>
                                            <div class="icon-arrow">
                                                <i class="ri-arrow-drop-right-line"></i>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link whatsapp" href="javascript: void(0)">
                                        <div class="item-content-link">
                                            <div class="icon-svg">
                                                <img src="~/assets/images/icons/whatsapp.svg" alt="">
                                            </div>
                                            <h3 class="link-title">WhatsApp</h3>
                                        </div>
                                        <div class="other-cc">
                                            <span class="badge-text"></span>
                                            <div class="icon-arrow">
                                                <i class="ri-arrow-drop-right-line"></i>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
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
  name: 'ShareNftModal',
  props: {
    nft: {
      type: Object,
      required: true
    },
    token_address: {
      type: String,
      required: true
    }
  },
  methods: {
    getImage(value) {
        return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
    },
  }
}
</script>