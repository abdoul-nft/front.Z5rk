<template>
<div id="wrapper">
    <div id="content">
        <ProfileHeader :username="$store.state.currentCreator.username" :creator="true"/>

        <div class="space-sticky"></div>

        <section class="un-creator-ptofile">
            <ProfileHead :user="$store.state.currentCreator" />
            
            <ProfileBody :creator="true" :user="$store.state.currentCreator" />

            <div class="tab-creatore-profile">
                <ul class="nav nav-pills nav-pilled-tab w-100" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-Items-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Items" type="button" role="tab" aria-controls="pills-Items"
                            aria-selected="true">Items</button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-Selling-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Selling" type="button" role="tab" aria-controls="pills-Selling"
                            aria-selected="false">Selling</button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-Created-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Created" type="button" role="tab" aria-controls="pills-Created"
                            aria-selected="false">Created</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-Liked-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Liked" type="button" role="tab" aria-controls="pills-Liked"
                            aria-selected="false">Liked</button>
                    </li>
                </ul>

                <div class="tab-content content-custome-data" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-Items" role="tabpanel"
                        aria-labelledby="pills-Items-tab">
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/11.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/11.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Settimio Loggia</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox">
                                        <span class="count-likes">195</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/2.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/2.jpg" alt="image NFT">
                                    </picture>
                                    <div class="icon-type">
                                        <i class="ri-vidicon-line"></i>
                                    </div>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>The Dark Corner</h2>
                                        <p>8 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">3 for sale</span>
                                    </div>
                                </div>

                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>2.78 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/11.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/11.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Leda Beneventi</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox" checked>
                                        <span class="count-likes">164</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/14.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/14.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>Galaxy on Earth</h2>
                                        <p>6 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">2 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>2.40 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn effect-click btn-md-size bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/11.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/11.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Bruce Wheless</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox">
                                        <span class="count-likes">95</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/27.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/27.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>The Scary Shib</h2>
                                        <p>8 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">3 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.27 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>
                        <!-- lds-spinner -->
                        <div class="loader-items">
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
                    </div>
                    <div class="tab-pane fade" id="pills-Selling" role="tabpanel"
                        aria-labelledby="pills-Selling-tab">

                        <div class="empty-items">
                            <img class="empty-light" src="~/assets/images/icons/empty-file-light.svg" alt="">
                            <img class="empty-dark" src="~/assets/images/icons/empty-file-dark.svg" alt="">
                            <h4>No sale yet</h4>
                            <p>Sorry, there is no data to display</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-Created" role="tabpanel"
                        aria-labelledby="pills-Created-tab">
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Hunter Taylor</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox">
                                        <span class="count-likes">297</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/21.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/21.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>Ecstasy of the Dead</h2>
                                        <p>350 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">9 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.79 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>

                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/18.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/18.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Craig Leach</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox">
                                        <span class="count-likes">195</span>
                                        <i class="ri-heart-3-line"></i>

                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/6.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/6.jpg" alt="image NFT">
                                    </picture>
                                    <div class="icon-type">
                                        <i class="ri-vidicon-line"></i>
                                    </div>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>The Moon Boi</h2>
                                        <p>14 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">2 for sale</span>
                                    </div>
                                </div>

                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>2.78 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>

                            </div>
                        </div>

                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/13.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Bruce Wheless</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox">
                                        <span class="count-likes">95</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/27.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/27.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>The Scary Shib</h2>
                                        <p>8 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">3 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.27 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>

                        <!-- lds-spinner -->
                        <div class="loader-items">
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

                    </div>
                    <div class="tab-pane fade" id="pills-Liked" role="tabpanel" aria-labelledby="pills-Liked-tab">
                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Hunter Taylor</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox" checked>
                                        <span class="count-likes">297</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/21.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/21.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>Ecstasy of the Dead</h2>
                                        <p>350 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">9 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.79 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>

                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/18.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/18.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Craig Leach</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox" checked>
                                        <span class="count-likes">195</span>
                                        <i class="ri-heart-3-line"></i>

                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/6.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/6.jpg" alt="image NFT">
                                    </picture>
                                    <div class="icon-type">
                                        <i class="ri-vidicon-line"></i>
                                    </div>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>The Moon Boi</h2>
                                        <p>14 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">2 for sale</span>
                                    </div>
                                </div>

                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>2.78 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>

                            </div>
                        </div>

                        <!-- item-card-gradual -->
                        <div class="item-card-gradual">
                            <div class="head-card d-flex justify-content-between align-items-center">
                                <div class="creator-name">
                                    <div class="image-user">
                                        <picture>
                                            <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                            <img class="img-avatar" src="~/assets/images/avatar/13.jpg" alt="">
                                        </picture>
                                        <div class="icon">
                                            <i class="ri-checkbox-circle-fill"></i>
                                        </div>
                                    </div>
                                    <h3>Bruce Wheless</h3>
                                </div>
                                <div class="btn-like-click">
                                    <div class="btnLike">
                                        <input type="checkbox" checked>
                                        <span class="count-likes">95</span>
                                        <i class="ri-heart-3-line"></i>
                                    </div>
                                </div>
                            </div>
                            <a href="page-collectibles-details.html" class="body-card py-0">
                                <div class="cover-nft">
                                    <picture>
                                        <source srcset="~/assets/images/other/27.webp" type="image/webp">
                                        <img class="img-cover" src="~/assets/images/other/27.jpg" alt="image NFT">
                                    </picture>
                                    <div class="countdown-time">
                                        <span>08H 38M 16S</span>
                                    </div>
                                </div>
                                <div class="title-card-nft">
                                    <div class="side-one">
                                        <h2>The Scary Shib</h2>
                                        <p>8 Editions Minted</p>
                                    </div>
                                    <div class="side-other">
                                        <span class="no-sales">3 for sale</span>
                                    </div>
                                </div>
                            </a>
                            <div class="footer-card">
                                <div class="starting-bad">
                                    <h4>1.27 ETH</h4>
                                    <span>Starting Bid</span>
                                </div>
                                <button type="button"
                                    class="btn btn-md-size effect-click bg-primary text-white rounded-pill">
                                    Place a bid
                                </button>
                            </div>
                        </div>

                        <!-- lds-spinner -->
                        <div class="loader-items">
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
                    </div>
                </div>

            </div>
        </section>
    </div>
    <BioDetailsModal :user="$store.state.currentCreator"/>
    <ShareProfileModal :user="$store.state.currentCreator"/>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  layout: 'simple',
})
</script>