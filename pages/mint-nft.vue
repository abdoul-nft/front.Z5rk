<template>
    <div id="wrapper">
        <form @submit="handleSubmit" id="content">
            <AppDefaultHeader title="Mint my own NFT" />
            <div class="space-sticky"></div>
            <section class="un-create-collectibles">
                <div class="form-group upload-form">
                    <h2>Upload file</h2>
                    <p>Choose your file to upload</p>
                    <div class="upload-input-form">
                        <input @change="onFileChange" type="file">
                        <div class="content-input">
                            <div class="icon"><i class="ri-upload-cloud-line"></i></div>
                            <span>PNG, GIF, WEBP, MP4 or MP3. Max 50mb.</span>
                        </div>
                    </div>

                    <div class="uploaded-image mt-3">
                        <picture>
                            <source :srcset="fileUrl != '' ? fileUrl : require(`../assets/images/other/1.webp`)" type="image/webp">
                            <img :src="fileUrl != '' ? fileUrl : require(`../assets/images/other/1.jpg`)" alt="">
                        </picture>
                        <button type="clear" class="btn icon-clear">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </div>

                </div>

                <div class="form-group">
                    <label>Item Name</label>
                    <input v-model="nft.name" type="text" class="form-control" placeholder='e. g. "LUCKY_WATCHER"'>
                </div>
                <div class="form-group">
                    <label>Description <span class="size-11">(Optional)</span></label>
                    <textarea v-model="nft.description" class="form-control" rows="3"
                        placeholder='e. g. "After purchasing you’ll be able to get ..."'></textarea>
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
                            <span v-if="success" class="text-success">Mint with success !</span>
                            <span v-else>{{ loading ? 'Minting' : '' }}</span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-bid-items">
                        <p>Create item</p>
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
  name: 'mint-nft',
  layout: 'simple',
  data() {
    return {
        nft: {
            name: '',
            description: '',
            file: null,
        },
        fileUrl: '',
        nft_contract_address: "0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431", // NFT Minting Contract Use This One "Batteries Included", code of this contract is in the github repository under contract_base for your reference.
        web3: null,
        w_address: '',
        loading: false,
        success: false,
    }
  },
  mounted() {
    const { wallet_address } = this.$store.state.user
    this.w_address = wallet_address
    this.web3 = new Web3(window.ethereum)
  },
  methods: {
    async handleSubmit(e) {
        e.preventDefault()
        this.loading = true
        try {
            const imageFile = new Moralis.File(this.nft.file.name, this.nft.file);
            
            await imageFile.saveIPFS();
            const imageURI = imageFile.ipfs();
            const metadata = {
                "name": this.nft.name,
                "description": this.nft.description,
                "image": imageURI
            }

            const metadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
            await metadataFile.saveIPFS();
            const metadataURI = metadataFile.ipfs();
            const txt = await this.mintToken(metadataURI)
            this.loading = false
            this.success = true
        } catch(err) {
            this.loading = false
            console.log(err)
        }
    },

    async mintToken(_uri){
        try {
            const encodedFunction = this.web3.eth.abi.encodeFunctionCall({
            name: "mintToken",
            type: "function",
            inputs: [{
                    type: 'string',
                    name: 'tokenURI'
                }]
            }, [_uri]);
        
            const transactionParameters = {
                to: this.nft_contract_address,
                from: ethereum.selectedAddress,
                data: encodedFunction
            };
            const txt = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters]
            });
            return txt
        } catch(err) {
            this.loading = false
            console.log(err)
        }
    },

    onFileChange(e) {
      this.nft.file = e.target.files[0];
      this.fileUrl = URL.createObjectURL(this.nft.file);
    }
  },
})
</script>