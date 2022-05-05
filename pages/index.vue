<template>
  <div>
    <section class="margin-t-20 margin-b-10 stories-section">
        <!-- DISPLAY STRORIES -->
        <div class="display-stories">
            <!-- SWIPER -->
            <div class="swiper myStories">
                <div class="swiper-wrapper wrapper-stories" id="stories">
                    <!-- MY STORY -->
                    <div class="swiper-slide space">
                        <button type="button" class="btn add-my-story" data-bs-toggle="modal"
                            data-bs-target="#mdllAddStory">
                            <div class="my_img">
                                <img src="~/assets/images/avatar/11.jpg" alt="my story">
                                <div class="icon">
                                    <i class="ri-add-fill"></i>
                                </div>
                            </div>
                            <div class="display-text">
                                <span>My Story</span>
                            </div>
                        </button>
                    </div>
                    <!-- HERE -> ITEMS -> AUTOMATICALLY BY JAVASCRIPT -->
                </div>
            </div>
        </div>
    </section>
    <div class="border-sections-home"></div>

    <section class="unSwiper-cards margin-t-20">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Discover</h2>
                <p>Be on the lookout for the latest NFTs</p>
            </div>
            <div class="un-block-right">
                <a href="page-search-random.html" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>
        <div class="discover-nft-random margin-t-20">
            <div class="content-NFTs-body">
                <!-- item-card-nft -->
                <div class="item-card-nft">
                    <picture>
                        <source srcset="~/assets/images/other/14.webp" type="image/webp">
                        <img class="big-image" src="~/assets/images/other/14.jpg" alt="">
                    </picture>
                    <div class="counterdown">
                        <span>08H</span>
                        <span>38M</span>
                        <span>16S</span>
                    </div>
                    <div class="btn-like-click">
                        <div class="btnLike">
                            <input type="checkbox" checked>
                            <span class="count-likes">197</span>
                            <i class="ri-heart-3-line"></i>
                        </div>
                    </div>
                    <a href="page-collectibles-details.html" class="un-info-card">
                        <div class="block-left">
                            <h4>Dark Side of Me</h4>
                            <div class="user">
                                <picture>
                                    <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                    <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                </picture>
                                <h5>Julian Co. </h5>
                            </div>
                        </div>
                        <div class="block-right">
                            <h6>Starting Bid</h6>
                            <p>
                                <span>($3,650)</span>
                                1.50 ETH
                            </p>
                        </div>
                    </a>
                </div>
                <!-- item-sm-card-NFTs -->
                <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                    <div class="cover-image">
                        <picture>
                            <source srcset="~/assets/images/other/30.webp" type="image/webp">
                            <img class="big-image" src="~/assets/images/other/30.jpg" alt="">
                        </picture>
                        <div class="content-text">
                            <div class="btn-like-click">
                                <div class="btnLike">
                                    <input type="checkbox">
                                    <span class="count-likes">14</span>
                                    <i class="ri-heart-3-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="user-text">
                            <div class="user-avatar">
                                <picture>
                                    <source srcset="~/assets/images/avatar/10.webp" type="image/webp">
                                    <img class="sm-user" src="~/assets/images/avatar/10.jpg" alt="">
                                </picture>
                                <span>Camillo</span>
                            </div>
                            <div class="number-eth">
                                <span class="main-price">1.50 ETH</span>
                                <span>($3,650)</span>
                            </div>
                        </div>
                    </div>
                </a>
                <!-- item-sm-card-NFTs -->
                <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                    <div class="cover-image">
                        <picture>
                            <source srcset="~/assets/images/other/19.webp" type="image/webp">
                            <img class="big-image" src="~/assets/images/other/19.jpg" alt="">
                        </picture>
                        <div class="content-text">
                            <div class="icon-type">
                                <i class="ri-vidicon-line"></i>
                            </div>

                            <div class="btn-like-click">
                                <div class="btnLike">
                                    <input type="checkbox">
                                    <span class="count-likes">0</span>
                                    <i class="ri-heart-3-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="user-text">
                            <div class="user-avatar">
                                <picture>
                                    <source srcset="~/assets/images/avatar/14.webp" type="image/webp">
                                    <img class="sm-user" src="~/assets/images/avatar/14.jpg" alt="">
                                </picture>
                                <span>Julian Co.</span>
                            </div>
                            <div class="number-eth">
                                <span class="main-price">1.50 ETH</span>
                                <span>($3,650)</span>
                            </div>
                        </div>
                    </div>
                </a>
                <!-- item-sm-card-NFTs -->
                <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                    <div class="cover-image">
                        <picture>
                            <source srcset="~/assets/images/other/24.webp" type="image/webp">
                            <img class="big-image" src="~/assets/images/other/24.jpg" alt="">
                        </picture>
                        <div class="content-text">
                            <div class="btn-like-click">
                                <div class="btnLike">
                                    <input type="checkbox" checked>
                                    <span class="count-likes">42</span>
                                    <i class="ri-heart-3-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="user-text">
                            <div class="user-avatar">
                                <picture>
                                    <source srcset="~/assets/images/avatar/10.webp" type="image/webp">
                                    <img class="sm-user" src="~/assets/images/avatar/10.jpg" alt="">
                                </picture>
                                <span>Camillo</span>
                            </div>
                            <div class="number-eth">
                                <span class="main-price">1.50 ETH</span>
                                <span>($3,650)</span>
                            </div>
                        </div>
                    </div>
                </a>
                <!-- item-sm-card-NFTs -->
                <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                    <div class="cover-image">
                        <picture>
                            <source srcset="~/assets/images/other/16.webp" type="image/webp">
                            <img class="big-image" src="~/assets/images/other/16.jpg" alt="">
                        </picture>
                        <div class="content-text">
                            <div class="icon-type">
                                <i class="ri-vidicon-line"></i>
                            </div>

                            <div class="btn-like-click">
                                <div class="btnLike">
                                    <input type="checkbox">
                                    <span class="count-likes">27</span>
                                    <i class="ri-heart-3-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="user-text">
                            <div class="user-avatar">
                                <picture>
                                    <source srcset="~/assets/images/avatar/14.webp" type="image/webp">
                                    <img class="sm-user" src="~/assets/images/avatar/14.jpg" alt="">
                                </picture>
                                <span>Julian Co.</span>
                            </div>
                            <div class="number-eth">
                                <span class="main-price">1.50 ETH</span>
                                <span>($3,650)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="un-section-seller margin-y-20">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Best Sellers</h2>
                <p>Best seller of this week's NFTs</p>
            </div>
            <div class="un-block-right">
                <a href="page-best-seller.html" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>
        <!-- un-block-auther -->
        <div class="un-block-creators margin-t-20">
            <!-- Swiper -->
            <div class="swiper swiperCreators">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!-- un-item-seller -->
                        <a href="page-creator-profile.html" class="un-item-seller">
                            <div class="number">
                                01
                            </div>
                            <div class="media-profile">
                                <figure class="image-avatar">
                                    <picture>
                                        <source srcset="~/assets/images/avatar/22.webp" type="image/webp">
                                        <img src="~/assets/images/avatar/22.jpg" alt="">
                                    </picture>
                                    <div class="icon-verify">
                                        <i class="ri-checkbox-circle-fill"></i>
                                    </div>
                                </figure>
                                <div class="text">
                                    <h3>MelonPixel⚡</h3>
                                    <p>19.4 ETH</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <!-- un-item-seller -->
                        <a href="page-creator-profile.html" class="un-item-seller">
                            <div class="number">
                                02
                            </div>
                            <div class="media-profile">
                                <figure class="image-avatar">
                                    <picture>
                                        <source srcset="~/assets/images/avatar/18.webp" type="image/webp">
                                        <img src="~/assets/images/avatar/18.jpg" alt="">
                                    </picture>
                                    <div class="icon-verify">
                                        <i class="ri-checkbox-circle-fill"></i>
                                    </div>
                                </figure>
                                <div class="text">
                                    <h3>Camillo Ferrari</h3>
                                    <p>5.3 ETH</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <!-- un-item-seller -->
                        <a href="page-creator-profile.html" class="un-item-seller">
                            <div class="number">
                                03
                            </div>
                            <div class="media-profile">
                                <figure class="image-avatar">
                                    <picture>
                                        <source srcset="~/assets/images/avatar/14.webp" type="image/webp">
                                        <img src="~/assets/images/avatar/14.jpg" alt="">
                                    </picture>
                                    <div class="icon-verify">
                                        <i class="ri-checkbox-circle-fill"></i>
                                    </div>
                                </figure>
                                <div class="text">
                                    <h3>🚀 Pingu</h3>
                                    <p>3.9 ETH</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <!-- un-item-seller -->
                        <a href="page-creator-profile.html" class="un-item-seller">
                            <div class="number">
                                04
                            </div>
                            <div class="media-profile">
                                <figure class="image-avatar">
                                    <picture>
                                        <source srcset="~/assets/images/avatar/5.webp" type="image/webp">
                                        <img src="~/assets/images/avatar/5.png" alt="">
                                    </picture>
                                    <div class="icon-verify">
                                        <i class="ri-checkbox-circle-fill"></i>
                                    </div>
                                </figure>
                                <div class="text">
                                    <h3>Julian Co.</h3>
                                    <p>2.8 ETH</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <!-- un-item-seller -->
                        <a href="page-creator-profile.html" class="un-item-seller">
                            <div class="number">
                                05
                            </div>
                            <div class="media-profile">
                                <figure class="image-avatar">
                                    <picture>
                                        <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                        <img src="~/assets/images/avatar/13.jpg" alt="">
                                    </picture>
                                    <div class="icon-verify">
                                        <i class="ri-checkbox-circle-fill"></i>
                                    </div>
                                </figure>
                                <div class="text">
                                    <h3>Tito_Calab</h3>
                                    <p>2.7 ETH</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="border-sections-home"></div>

    <section class="margin-t-20 unList-creatores">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Creators</h2>
                <p>You can follow many Creators</p>
            </div>
            <div class="un-block-right">
                <a href="page-creators.html" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>

        <div class="content-list-creatores">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/13.jpg" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>Richard Noga</h5>
                                <p>$9,500.32</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">44 Item</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/7.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/7.jpg" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>Tito_Calab</h5>
                                <p>$8,382.32</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">37 Item</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/4.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/4.jpg" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>Settimio Loggia</h5>
                                <p>$6,920.00</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">30 Item</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/1.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/1.jpg" alt="user">
                            </picture>
                            <div class="txt-user">
                                <h5>Vinicius O.</h5>
                                <p>$4,500.32</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">20 Item</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'index',
    layout: 'navigation',
})
</script>
