<template>
<div id="wrapper">
    <form id="content" @submit="handleSubmit">
        <AppDefaultHeader title="Edit Profile" />
        <div class="space-sticky"></div>

        <section class="un-creator-ptofile">
            <div class="head">
                <div class="cover-image d-flex align-items-center justify-content-center overlay">
                    <picture>
                        <source :srcset="coverUrl != '' ? coverUrl : (coverImage() ? user.cover_image : require(`../assets/images/avatar/20.jpg`))" type="image/webp">
                        <img :src="coverUrl != '' ? coverUrl : (coverImage() ? user.cover_image : require(`../assets/images/avatar/20.jpg`))" alt="cover image">
                    </picture>
                    <div class="position-absolute">
                        <button type="button" class="btn btn-upload-text">
                            <input @change="onCovertChange" type="file">
                            <span>Upload cover photo</span>
                        </button>
                    </div>
                </div>
                <div class="text-user-creator">
                    <div class="d-flex align-items-center">
                        <div class="user-img d-flex align-items-center justify-content-center position-relative">
                            <picture>
                                <source :srcset="profileUrl != '' ? profileUrl : (profileImage() ? user.profile_photo : require(`../assets/images/avatar/avatar.png`))" type="image/webp">
                                <img :src="profileUrl != '' ? profileUrl : (profileImage() ? user.profile_photo : require(`../assets/images/avatar/avatar.png`))" alt="creator image">
                            </picture>
                            <div class="position-absolute">
                                <button type="button" class="btn btn-upload-icon">
                                    <input @change="onProfileChange" type="file">
                                    <div class="icon">
                                        <i class="ri-camera-line"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="text">
                            <h3 class="size-15 weight-500">Upload Profile Photo</h3>
                            <p class="size-11 weight-400">We recommend a 300x300px JPG, PNG, SVG, WEBP or GIF (1MB
                                max size)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="padding-20 form-edit-profile margin-b-20">
            <div class="form-group">
                <label>Username</label>
                <input v-model="user.username" type="text" class="form-control"  placeholder="Enter username">
                <div class="size-11 color-text form-text">Username is not visible to other users</div>
            </div>
            <div class="form-group">
                <label>Bio</label>
                <textarea v-model="user.bio" class="form-control" rows="3" placeholder="Tell the world your story!">
                </textarea>
            </div>
            <div class="form-group">
                <label>E-Mail Address</label>
                <!--is-invalid color-red -->
                <input v-model="user.email" type="email" class="form-control" 
                    placeholder="Enter your email">
                <div class="size-11 form-text">This email address is not valid</div>
            </div>

            <div class="bk-social-networks">
                <h3>Social networks</h3>
                <div class="form-group with_icon">
                    <label>Twitter</label>
                    <div class="input_group">
                        <input v-model="user.twitter_username" type="text" class="form-control" placeholder="@twitter username">
                        <div class="icon">
                            <i class="ri-twitter-fill"></i>
                        </div>
                    </div>
                </div>

                <div class="form-group with_icon">
                    <label>Instagram</label>
                    <div class="input_group">
                        <input v-model="user.instagram_username" type="text" class="form-control" placeholder="@instagram username">
                        <div class="icon">
                            <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="size-13 color-text margin-t-10 border-b border-b-solid border-snow padding-b-20">
                To update your settings you should sign a message through your wallet. Click <span
                    class="text-dark">'Update
                    Profile'</span> then
                sign the message.
            </div>

        </section>

        <div class="space-sticky-footer"></div>

        <footer class="footer-pages-forms">
            <div class="content">
                <div class="update-auto">
                        <div class="auto-saving">
                            <div class="loader-items" v-if="loading">
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
                            <span v-if="success" class="text-success">Save with success !</span>
                            <span v-else>{{ loading ? 'Saving' : '' }}</span>
                        </div>
                    </div>
                <button type="submit" aria-label="profile" class="btn btn-bid-items">
                    <p>Update Profile</p>
                    <div class="ico">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </button>
            </div>
        </footer>
    </form>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  name: 'edit-profile',
  layout: 'simple',
  data() {
    return {
        user: {
            username: '',
            bio: '',
            email: '',
            cover_image: '',
            profile_photo: '',
            twitter_username: '',
            instagram_username: '',
        },
        profile: null,
        cover: null,
        profileUrl: '',
        coverUrl: '',
        loading: false,
        success: false
    }
  },
  mounted() {
    const { username, bio, email, twitter_username, instagram_username, cover_image, profile_photo } = this.$store.state.user
    this.user = { username, bio, email, twitter_username, instagram_username, cover_image, profile_photo }
  },
  methods: {
    async handleSubmit(e){
        e.preventDefault();
        this.loading = true
        try {
            if(this.profile) {
                const profileImageFile = new Moralis.File(this.profile.name, this.profile);
                await profileImageFile.saveIPFS();
                const profileImageURI = profileImageFile.ipfs();
                this.user.profile_photo = profileImageURI
            }
            if(this.cover) {
                const coverImageFile = new Moralis.File(this.cover.name, this.cover);
                await coverImageFile.saveIPFS();
                const coverImageURI = coverImageFile.ipfs();
                this.user.cover_image = coverImageURI
            }
            
            await this.$store.dispatch('editProfile', { w_adress: this.$store.state.user.wallet_address,  data: this.user })
            
            this.loading = false
            this.success = true
        } catch(err) {
            this.loading = false
            console.log(err)
        }

    },
    onProfileChange(e) {
      this.profile = e.target.files[0];
      this.profileUrl = URL.createObjectURL(this.profile);
    },
    onCovertChange(e) {
      this.cover = e.target.files[0];
      this.coverUrl = URL.createObjectURL(this.cover);
    },
    coverImage() {
        return this.user.cover_image != undefined && this.user.cover_image != '' && this.user.cover_image != null
    },
    profileImage() {
        return this.user.profile_photo != undefined && this.user.profile_photo != '' && this.user.profile_photo != null
    }
  },
})
</script>