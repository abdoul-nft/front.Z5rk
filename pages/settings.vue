<template>
  <div>
    <!-- ===================================
      START THE ACCOUNT DETAILS
    ==================================== -->
    <section class="un-my-account">
      <!-- head -->
      <div class="head">
          <div class="my-personal-account">
              <div class="user">
                  <picture>
                      <source srcset="~/assets/images/avatar/11.webp" type="image/webp">
                      <img src="~/assets/images/avatar/11.jpg" alt="">
                  </picture>
                  <div class="txt-user">
                      <h1>Rocco Gavin</h1>
                      <p>0xe388e162b88cvq85f...E162</p>
                  </div>
              </div>
              <button type="button" class="btn btn-copy-address">
                  <input type="checkbox">
                  <div class="icon-box">
                      <i class="ri-file-copy-2-line"></i>
                  </div>
              </button>
          </div>
      </div>
      <!-- body -->
      <div class="body">
          <div class="img-coin-eth">
              <picture>
                  <source srcset="~/assets/images/other/eth.webp" type="image/webp">
                  <img src="~/assets/images/other/eth.png" alt="">
              </picture>
          </div>
          <div class="my-balance-text">
              <h2>My Balance</h2>
              <p>3,650 ETH</p>

              <button type="button"
                  class="btn btn-md-size effect-click border-primary rounded-pill text-primary"
                  data-bs-toggle="modal" data-bs-target="#mdllAddETH">
                  Add Balance
              </button>
          </div>
      </div>
  </section>
  <!-- ===================================
    START ACCOUNT LIST
  ==================================== -->
  <section class="un-navMenu-default without-visit">
      <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link visited" href="page-my-wallet.html">
                <div class="item-content-link">
                    <div class="icon bg-green-1 color-green">
                        <i class="ri-wallet-line"></i>
                    </div>
                    <h3 class="link-title">My Wallet</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text"> 0Xe388...E162</span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="page-edit-profile.html">
                <div class="item-content-link">
                    <div class="icon bg-orange-1 color-orange">
                        <i class="ri-user-3-line"></i>
                    </div>
                    <h3 class="link-title">Edit Profile</h3>
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
            <a class="nav-link" href="page-my-item.html">
                <div class="item-content-link">
                    <div class="icon bg-blue-1 color-blue">
                        <i class="ri-landscape-line"></i>
                    </div>
                    <h3 class="link-title">My Items</h3>
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
            <a class="nav-link" href="page-news-list.html">
                <div class="item-content-link">
                    <div class="icon bg-pink-1 color-pink">
                        <i class="ri-file-list-2-line"></i>
                    </div>
                    <h3 class="link-title">News List</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text"></span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>

        <div class="sub-title-pkg">
            <h2>Settings</h2>
        </div>

        <li class="nav-item">
            <div class="nav-link">
                <div class="item-content-link">
                    <div class="txt">
                        <h3 class="link-title">Dark Mode</h3>
                        <p class="size-11 color-text m-0">Browsing in night mode</p>
                    </div>
                </div>
                <div class="other-cc">

                    <label class="switch_toggle toggle_lg theme-switch" for="switchDark">
                        <input type="checkbox" class="switchDarkMode theme-switch" id="switchDark"
                            aria-describedby="switchDark" aria-label="switchDark">
                        <span class="handle"></span>
                    </label>

                </div>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="javascript: void(0)">
                <div class="item-content-link">
                    <div class="icon bg-snow text-dark">
                        <i class="ri-global-line"></i>
                    </div>
                    <h3 class="link-title">Language</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text">English (UK)</span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="page-activity-settings.html">
                <div class="item-content-link">
                    <div class="icon bg-red-1 color-red">
                        <i class="ri-notification-line"></i>
                    </div>
                    <h3 class="link-title">Activity Settings</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text"></span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>

        <div class="sub-title-pkg">
            <h2>Support</h2>
        </div>

        <li class="nav-item">
            <a class="nav-link visited" href="page-help.html">
                <div class="item-content-link">
                    <div class="icon bg-green-1 color-green">
                        <i class="ri-questionnaire-line"></i>
                    </div>
                    <h3 class="link-title">Help Center</h3>
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
          <a class="nav-link" href="page-about.html">
              <div class="item-content-link">
                  <div class="icon bg-blue-1 color-blue">
                      <i class="ri-information-line"></i>
                  </div>
                  <h3 class="link-title">About Unic.</h3>
              </div>
              <div class="other-cc">
                  <span class="badge-text"></span>
                  <div class="icon-arrow">
                      <i class="ri-arrow-drop-right-line"></i>
                  </div>
              </div>
          </a>
        </li>

        <div class="sub-title-pkg">
            <h2>we'll miss you</h2>
        </div>

        <LogOutItem  @clicked="logOut" />

      </ul>
  </section>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'settings',
    layout: 'navigation',
    mounted() {
        console.log(this.$store.state.user)
    },
    methods : {
        async  logOut() {
            await  window.Moralis.User.logOut();
            console.log("logged out");
            this.$store.dispatch('updateUser', null)
            this.$router.push('/connect-wallet')
        }
    }
 
})
</script>
