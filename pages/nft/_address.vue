<template>
    <section class="un-details-collectibles">
        <!-- head -->
        <div class="head">
            <div class="cover-main-img">
                <picture>
                    <source :srcset="getImage(parseNftMetaData($store.state.currentNFT.metadata).image)" type="image/webp">
                    <img class="img-full" :src="getImage(parseNftMetaData($store.state.currentNFT.metadata).image)" alt="">
                </picture>
                <div class="action-sticky">
                    <button type="button" class="btn btn-fullScreen">
                        <i class="ri-fullscreen-fill"></i>
                    </button>
                    <button type="button" class="btn btn-share" data-bs-toggle="modal"
                        data-bs-target="#mdllShareCollectibles">
                        <i class="ri-share-forward-line"></i>
                    </button>
                </div>
            </div>

            <div class="title-card-text d-flex align-items-center justify-content-between">
                <div class="text">
                    <h1>{{ parseNftMetaData($store.state.currentNFT.metadata).name }}</h1>
                    <!-- <p>12 Editions Minted</p> -->
                </div>
                <!-- <span class="btn-xs-size bg-pink text-white rounded-pill">Sports</span> -->
            </div>

            <div class="txt-price-coundown d-flex justify-content-between">
                <div class="price">
                    <h2>Starting Bid</h2>
                    <p>2.3 <span class="size-16">ETH</span> <span class="dollar">($8,350)</span></p>
                </div>
                <!-- <div class="coundown">
                    <h3>Auction Ends In</h3>
                    <span>08H 38M 16S</span>
                </div> -->
            </div>
        </div>
        <!-- body -->
        <div class="body">
            <div class="description">
                <p>
                    {{ parseNftMetaData($store.state.currentNFT.metadata).description }}
                </p>
            </div>
            <ul class="nav nav-pills nav-pilled-tab" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-Info-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Info" type="button" role="tab" aria-controls="pills-Info"
                        aria-selected="true">Info</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-Owner-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Owner" type="button" role="tab" aria-controls="pills-Owner"
                        aria-selected="false">Owner</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-History-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-History" type="button" role="tab" aria-controls="pills-History"
                        aria-selected="false">History</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-Bids-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Bids" type="button" role="tab" aria-controls="pills-Bids"
                        aria-selected="false">Bids</button>
                </li>
            </ul>

            <div class="tab-content content-custome-data" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-Info" role="tabpanel"
                    aria-labelledby="pills-Info-tab">
                    <ul class="nav flex-column nav-users-profile margin-t-20">
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/14.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/14.jpg" alt="">
                                        </picture>
                                        <div class="icon"><i class="ri-checkbox-circle-fill"></i></div>
                                    </div>
                                    <div class="txt-user">
                                        <h5>Creator</h5>
                                        <p>Shelly Villa</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/13.jpg" alt="">
                                        </picture>
                                        <div class="icon"><i class="ri-checkbox-circle-fill"></i></div>
                                    </div>
                                    <div class="txt-user">
                                        <h5>Owner</h5>
                                        <p>Ausonio_Loi</p>
                                    </div>
                                </a>
                                <div class="other-option">
                                    <button type="button" class="btn btn-copy-address">
                                        <input type="checkbox">
                                        <span>0xe388...e162</span>
                                        <div class="icon-box">
                                            <i class="ri-file-copy-2-line"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="tab-pane fade" id="pills-Owner" role="tabpanel" aria-labelledby="pills-Owner-tab">

                    <ul class="nav flex-column nav-users-profile margin-t-20">
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/13.jpg" alt="">
                                        </picture>
                                        <div class="icon"><i class="ri-checkbox-circle-fill"></i></div>
                                    </div>
                                    <div class="txt-user">
                                        <h5>Owner</h5>
                                        <p>Ausonio_Loi</p>
                                    </div>
                                </a>
                                <div class="other-option">
                                    <button type="button" class="btn btn-copy-address">
                                        <input type="checkbox">
                                        <span>0xe388...e162</span>
                                        <div class="icon-box">
                                            <i class="ri-file-copy-2-line"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="pills-History" role="tabpanel"
                    aria-labelledby="pills-History-tab">
                    <ul class="nav flex-column nav-users-profile margin-t-20">
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/8.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/8.png" alt="">
                                        </picture>
                                    </div>
                                    <div class="txt-user">
                                        <h5>16 days ago</h5>
                                        <p class="weight-400 size-14"><span class="color-text">Bought by</span>
                                            smally <span class="color-text">for</span> <span
                                                class="color-green">
                                                $300.00</span></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/17.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/17.jpg" alt="">
                                        </picture>
                                    </div>
                                    <div class="txt-user">
                                        <h5>24 days ago</h5>
                                        <p class="weight-400 size-14">
                                            <span class="color-text">
                                                Bid placed by </span> Pingu
                                            <span class="color-text">for</span> <span class="color-green">
                                                $150.00</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/18.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/18.jpg" alt="">
                                        </picture>
                                    </div>
                                    <div class="txt-user">
                                        <h5>26 days ago</h5>
                                        <p class="weight-400 size-14">
                                            <span class="color-text">
                                                Bid placed by </span> Vinicius
                                            <span class="color-text">for</span> <span class="color-green">
                                                $250.00</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="tab-pane fade" id="pills-Bids" role="tabpanel" aria-labelledby="pills-Bids-tab">
                    <ul class="nav flex-column nav-users-profile margin-t-20">

                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/12.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/12.png" alt="">
                                        </picture>
                                    </div>
                                    <div class="txt-user">
                                        <h5>24 days ago</h5>
                                        <p class="weight-400 size-14">
                                            Pingu
                                            <span class="color-text">
                                                bid for</span>
                                            <span class="color-green">
                                                $300.00</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/7.webp" type="image/webp">
                                            <img class="avt-img" src="~/assets/images/avatar/7.jpg" alt="">
                                        </picture>
                                    </div>
                                    <div class="txt-user">
                                        <h5>24 days ago</h5>
                                        <p class="weight-400 size-14">
                                            Pingu
                                            <span class="color-text">
                                                bid for</span>
                                            <span class="color-green">
                                                $300.00</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <div class="space-sticky-footer"></div>
        
        <div class="footer">
            <div class="content">
                <div class="links-item-pages">
                    <a href="page-collectibles-details.html" class="icon-box prev">
                        <i class="ri-arrow-left-line"></i>
                    </a>
                    <a href="page-collectibles-details.html" class="icon-box next">
                        <i class="ri-arrow-right-line"></i>
                    </a>
                </div>
                <a @click="getNftAsset" class="btn btn-bid-items">
                    <p>Place a bid</p>
                    <div class="ico">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </a>
            </div>
        </div>

    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  layout: 'details',
  mounted() {
    // const { address } = this.$route.params
    const { currentNFT } = this.$store.state
    console.log(currentNFT)
    console.log(this.parseNftMetaData(currentNFT.metadata))
  },
  methods: {
        parseNftMetaData(value) {
            return JSON.parse(value)
        },
        getImage(value) {
            return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
        },

        async createBuyOrder() {
            try {
                const { currentNFT, user } = this.$store.state
                const options = {
                    network: 'testnet',
                    tokenAddress: currentNFT.token_address,
                    tokenId: currentNFT.token_id,
                    tokenType: currentNFT.contract_type,
                    amount: 0.1,
                    userAddress: user.wallet_address,
                    paymentTokenAddress: user.wallet_address,
                }
                await window.Moralis.Plugins.opensea.createBuyOrder(options);
            }catch (err) {
                console.log(err)
            }
        },

        async getNftAsset() {
            try {
                const testnetNFTs = await window.Moralis.Web3.getNFTs({ chain: 'testnet' });
                // const { currentNFT } = this.$store.state
                // const options = {
                //     network: 'testnet',
                //     tokenAddress: '0x2a6327f7f83c16ead8c4a209ac9826d539280ffd',
                //     tokenId: '1',
                // }
                // console.log(options)
                // const data = await Moralis.Plugins.opensea.getAsset(options)
                console.log(testnetNFTs)
            }catch(err) {
                 console.log(err)
            }
        }
  }
})
</script>