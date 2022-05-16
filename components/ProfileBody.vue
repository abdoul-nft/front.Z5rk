<template>
    <div class="body">
        <div class="item-followers">
            <div class="users-text"></div>

            <button v-if="creator" type="button" class="btn btn-md-size text-white bg-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#mdllBioDetails">
                Join community
            </button>
            <a v-else @click="$nuxt.$router.push('/edit-profile')"
                class="btn btn-md-size text-white btn-edit-profile rounded-pill">
                Edit Profile
            </a>
        </div>
        <div class="statistics">
            <div class="text-grid">
                <h4>35</h4>
                <p>Items</p>
            </div>
            <div class="text-grid">
                <h4>2,3K</h4>
                <p>Likes</p>
            </div>
            <div class="text-grid">
                <h4>8.8K</h4>
                <p>Views</p>
            </div>
            <div class="text-grid">
                <h4>48</h4>
                <p>Minted</p>
            </div>

        </div>
        <div class="description">
            <p>
                {{user.bio}}
                <a class="read-more" data-bs-toggle="modal" data-bs-target="#mdllBioDetails">Read more</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileBody',
  props: {
    user: {
      type: Object,
      required: true
    },
    creator: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    
  }
}
</script>