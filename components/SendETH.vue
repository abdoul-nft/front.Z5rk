<template>
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllSendETH" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="title-modal">Make a transfer</h1>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-upload-item">
                        <form  @submit="transferEth" class="form-report">
                            <div class="form-group">
                                <label>Receiver Adress</label>
                                <input v-model="receiver" type="text" class="form-control"  placeholder="Receiver Adress">
                                <!--  -->
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
                                Send
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
  name: 'SendETH',
  data() {
      return {
          loading: false,
          success: false,
          amount: '',
          receiver: ''
      }
  },
  methods: {
      async transferEth(e) {
          this.loading = true
          e.preventDefault()
            try {
                const options = {
                    type: "native",
                    amount: Moralis.Units.Token(this.amount, "18"),
                    receiver: this.receiver,
                };
                const web3 = await Moralis.enableWeb3()
                await Moralis.transfer(options);   
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