<template>
    <section class="un-details-collectibles">
        <section class="loader-page hidden" id="loaderPage">
            <div class="spinner_flash"></div>
        </section>
        <!-- head -->
        <div class="head">
            <div class="cover-main-img">
                <picture>
                    <source :srcset="getImage(parseNftMetaData($store.state.currentNFT.metadata).image)" type="image/webp">
                    <img class="img-full" :src="getImage(parseNftMetaData($store.state.currentNFT.metadata).image)" alt="">
                </picture>
                <div class="action-sticky">
                    <!-- <button type="button" class="btn btn-fullScreen">
                        <i class="ri-fullscreen-fill"></i>
                    </button> -->
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
                <span class="btn-xs-size bg-pink text-white rounded-pill">{{ $store.state.currentNFT.contract_type }}</span>
            </div>

            <div v-if="floorPrice" class="txt-price-coundown d-flex justify-content-between">
                <div class="price">
                    <h2>Starting Bid</h2>
                    <p>{{floorPrice}} <span class="size-16">ETH</span> <span class="dollar">(${{convertToUsd(floorPrice)}})</span></p>
                </div>
                <div class="coundown">
                    <h3>Auction Ends</h3>
                    <span>{{ formatDate($store.state.currentNFT.synced_at) }}</span>
                </div>
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
                        aria-selected="true">Collection</button>
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
                <!-- <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-Bids-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Bids" type="button" role="tab" aria-controls="pills-Bids"
                        aria-selected="false">Bids</button>
                </li> -->
                <!-- <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-Stats-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Stats" type="button" role="tab" aria-controls="pills-Stats"
                        aria-selected="false">Stats</button>
                </li> -->
            </ul>

            <div class="tab-content content-custome-data" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-Info" role="tabpanel"
                    aria-labelledby="pills-Info-tab">
                    <!-- lds-spinner -->
                    <div v-if="loading" class="loader-items">
                        <div class="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <ul v-else-if="nftAsset" class="nav flex-column nav-users-profile margin-t-20">

                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="txt-user">
                                        <h5>Name : </h5>
                                        <p>{{nftAsset.collection.name}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        
                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="txt-user">
                                        <h5>created</h5>
                                        <p>{{formatDate(nftAsset.collection.createdDate)}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="txt-user">
                                        <h5>Slug : </h5>
                                        <p>{{nftAsset.collection.slug}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="txt-user">
                                        <h5>Total sales : </h5>
                                        <p>{{nftAsset.collection.stats.total_sales}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="txt-user">
                                        <h5>Total supply : </h5>
                                        <p>{{nftAsset.collection.stats.total_supply}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="nav-link">
                                <a href="page-creator-profile.html" class="item-user-img visited">
                                    <div class="txt-user">
                                        <h5>Total volume : </h5>
                                        <p>{{nftAsset.collection.stats.total_volume}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="tab-pane fade" id="pills-Owner" role="tabpanel" aria-labelledby="pills-Owner-tab">

                    <ul v-if="nftAsset" class="nav flex-column nav-users-profile margin-t-20">
                        
                        <li class="nav-item">
                            <div class="nav-link">
                                <a class="item-user-img visited">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source :srcset="nftAsset.owner.profile_img_url" type="image/webp">
                                            <img class="avt-img" :src="nftAsset.owner.profile_img_url" alt="">
                                        </picture>
                                        <div class="icon"><i class="ri-checkbox-circle-fill"></i></div>
                                    </div>
                                    <div class="txt-user">
                                        <h5>Owner</h5>
                                        <p>{{ nftAsset.owner.user ? nftAsset.owner.user.username : ''}}</p>
                                    </div>
                                </a>
                                <div class="other-option">
                                    <button type="button" class="btn btn-copy-address" @click="$copyText(nftAsset.owner.address)">
                                        <input type="checkbox">
                                        <span>{{ nftAsset.owner.address.slice(0, 7) + '...' }}</span>
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
                    <ul v-if="orders" class="nav flex-column nav-users-profile margin-t-20">
                        <li v-for="(order, index) in orders" :key="index" class="nav-item">
                            <div class="nav-link">
                                <a class="item-user-img visited">
                                    <div class="txt-user">
                                        <!-- <h5>{{  }}</h5> -->
                                        <p class="weight-400 size-14"><span class="color-text">Floor price</span>
                                            <!-- smally <span class="color-text">for</span>  -->
                                            <span
                                                class="color-green">
                                                {{ convertToEthPrice(order) }} ETH</span></p>
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


                <div class="tab-pane fade" id="pills-Bids" role="tabpanel" aria-labelledby="pills-Stats-tab">
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

                    </ul>
                </div>
            </div>
        </div>

        <div class="space-sticky-footer"></div>
        
        <div class="footer">
            <div class="content">
                <div class="links-item-pages">
                </div>
                <a v-if="canBid" class="btn btn-bid-items" data-bs-toggle="modal" data-bs-target="#mdllPlaceABid">
                    <p>Make Offer</p>
                    <div class="ico">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </a>
            </div>
        </div>
        <ShareNftModal :token_address="$store.state.currentNFT.token_address" :nft="parseNftMetaData($store.state.currentNFT.metadata)"/>
    </section>
</template>

<script>
import Vue from 'vue'
import moment from 'moment';
export default Vue.extend({
  middleware: 'auth',
  layout: 'details',
  data() {
    return {
        nftAsset: null,
        orders: null,
        floorPrice: null,
        loading: false
    }
  },
  mounted() {
    this.getNftAsset()
    this.getOrders()
  },
  methods: {
        parseNftMetaData(value) {
            return JSON.parse(value)
        },
        getImage(value) {
            return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
        },

        async getNftAsset() {
            try {
                this.loading = true
                const { currentNftContractItem, currentNFT } = this.$store.state
                const options = {
                    network: 'testnet',
                    tokenAddress: currentNftContractItem != undefined ? currentNftContractItem.contract_adress : this.$store.state.globalNftContractAddress,
                    tokenId: currentNFT.token_id,
                }
                this.nftAsset = await Moralis.Plugins.opensea.getAsset(options)
                this.loading = false
            }catch(err) {
                console.log(err)
            }
        },

        async getOrders() {
            try {
                const { currentNftContractItem, currentNFT } = this.$store.state
                const data = await Moralis.Plugins.opensea.getOrders({
                    network: 'testnet',
                    tokenAddress: currentNftContractItem != undefined ? currentNftContractItem.contract_adress : this.$store.state.globalNftContractAddress,
                    tokenId: currentNFT.token_id,
                });
                this.orders = data.orders
            }catch(err) {
                 console.log(err)
            }
        },

    //    async saveCurrentNft() {
    //         const { currentNFT } = this.$store.state
    //         const nftData = {
    //             image: this.getImage(this.parseNftMetaData(currentNFT.metadata).image),
    //             name: this.parseNftMetaData(currentNFT.metadata).name,
    //             description: this.parseNftMetaData(currentNFT.metadata).description,
    //             token_id: currentNFT.token_id,
    //             token_address: currentNFT.token_address
    //         }
    //         await this.$store.dispatch('saveNft', { w_adress: currentNFT.token_address,  data:nftData})

    //     },

        getNftFloorPrice() {
        const { currentNFT } = this.$store.state
        this.$axios.get('https://sea-turtle-app-n8fhg.ondigitalocean.app/' + currentNFT.token_address)
            .then( (data)  => {
                if(data.data) {
                    console.log(data.data.data.price)
                    this.floorPrice = this.convertToEthPrice(data.data.data.price)
                }
            })
            .catch( (error)  => {
                console.log(error);
            })
        },

        formatDate(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        },
        convertToEthPrice(value) {
            return (parseInt(value.basePrice)/1000000000000000000).toFixed(2)
        },

        convertToUsd(value) {
            return 405.64 * value
        },

        canBid() {
            const { currentNftContractItem, user } = this.$store.state
            return nftAsset && nftAsset.owner.address != user.wallet_address && currentNftContractItem
        }
  }
})
</script>