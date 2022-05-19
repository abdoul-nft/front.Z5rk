<template>
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllPlaceABid" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="title-modal">Make an offer</h1>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-upload-item">
                        <form  @submit="createBuyOrder" class="form-report">
                            <div class="form-group">
                                <label>Offer Expiration <span class="size-11">(Optional)</span></label>
                                <select class="form-select custom-select form-control"
                                    aria-label="Default select example">
                                    <option selected>1 day</option>
                                    <option value="Sales">3 day</option>
                                    <option value="Account">7 day</option>
                                    <option value="NFTs">1 month</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Amount</label>
                                <input v-model="amount" type="text" class="form-control"  placeholder="Amount">
                                <!--  -->
                            </div>

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
                             <span v-if="success" class="text-success">Success !</span>

                            <button type="submit" class="btn btn-md-size btn-report">
                                Make Offer
                            </button>
                        </form>
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
  name: 'BidModal',
  data() {
      return {
          loading: false,
          success: false,
          amount: null
      }
  },
  methods: {
      async createBuyOrder(e) {
          this.loading = true
          e.preventDefault()
            try {
                const { currentNFT, currentNftContractItem, user } = this.$store.state
                const options = {
                    network: 'testnet',
                    tokenAddress: currentNftContractItem != undefined ? currentNftContractItem.contract_adress : this.$store.state.globalNftContractAddress,
                    tokenId: currentNFT.token_id,
                    tokenType: currentNFT.contract_type,
                    amount: parseFloat(this.amount),
                    userAddress: user.wallet_address,
                    paymentTokenAddress: '0xc778417e063141139fce010982780140aa0cd5ab',
                }
                const web3 = await Moralis.enableWeb3()
                await Moralis.Plugins.opensea.createBuyOrder(options);
                this.loading = false
                this.success = true
            }catch (err) {
                console.log(err)
                this.loading = false
            }
        },
  }
}
</script>