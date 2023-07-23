<template>
  <div>
    <navbar />
    <div class="pt-24 text-center">
      <h1 class="animate-pulse flex items-center justify-center font-bold text-blue-600 text-3xl lg:text-5xl mb-3">
        Checkout
      </h1>
      <nuxt-link to="/medicines" class="underline text-blue-700 text-xl text-center">&lArr; Back to shop</nuxt-link>
    </div>
    <div class="lg:container p-12 mx-auto">
      <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
          <h2 class="mb-8 font-bold md:text-xl text-heading text-center ">Shipping Address
          </h2>
          <form class="justify-center w-full mx-auto border-4 p-2 shadow-xl" method="post"
            @submit.prevent="uploadOrderDetails">
            <div class="">
              <div class="space-x-0 lg:flex lg:space-x-4">
                <div class="w-full lg:w-1/2">
                  <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                    Name</label>
                  <input name="firstName" type="text" placeholder="First Name"
                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="firstName">
                </div>
                <div class="w-full lg:w-1/2 ">
                  <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                    Name</label>
                  <input name="Last Name" type="text" placeholder="Last Name"
                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="lastName">
                </div>
              </div>
              <div class="mt-4 space-x-0 lg:flex lg:space-x-4">
                <div class="w-full">
                  <label for="Email" class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                  <input name="Last Name" type="email" placeholder="Email"
                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="email">
                </div>
                <div class="w-full">
                  <label for="phone" class="block mb-3 text-sm font-semibold text-gray-500">Phone</label>
                  <input name="Last Name" type="tel" placeholder="Cell Number"
                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="phone">
                </div>
              </div>
              <div class="mt-4">
                <div class="w-full">
                  <label for="Address" class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                  <textarea
                    class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="Address" cols="20" rows="4" placeholder="Address" v-model="address"></textarea>
                </div>
              </div>


              <div class="relative pt-3 xl:pt-6">
                <label for="note" class="block mb-3 text-sm font-semibold text-gray-500">
                  Notes
                  (Optional)
                </label>
                <textarea name="note"
                  class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                  rows="4" placeholder="Notes for delivery" v-model="notes"></textarea>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <div v-if="user">
                  <button
                    class="flex-1 px-6 py-2 text-white bg-blue-500  hover:bg-blue-600 font-bold text-lg rounded-lg">Proceed
                    To Checkout</button>
                </div>
                <div v-else>
                  <nuxt-link to="/signup"
                    class="flex-1 px-6 py-2 text-white bg-blue-500  hover:bg-blue-600 font-bold text-lg rounded-lg text-center">
                    Sign Up</nuxt-link>
                </div>
                <div>
                  <!-- <nuxt-link to="/medicines"
                  class=" px-6 py-2 text-white bg-blue-500  hover:bg-blue-600 font-bold text-lg rounded-lg">Continue
                  Shopping</nuxt-link> -->
                  <nuxt-link to="/medicines" class="underline text-blue-700 text-xl text-center">&lArr; Back to
                    shop</nuxt-link>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Cart component -->

        <div class="flex flex-col w-full ml-6 lg:ml-12 lg:w-2/5">
          <div class="pt-12 md:pt-0 2xl:ps-4">
            <h2 class="text-xl font-bold text-center text-blue-500 animate-pulse">Your Bag
            </h2>
            <div class="mt-4">
              <div class="flex flex-col space-y-4">
                <div v-for="(product, index) in getCartItems" :key="index"
                  class="flex items-center space-x-4 border-2 border-blue-400 rounded-lg pr-2">
                  <div class="w-36 h-36">
                    <img class="overflow:hidden" :src="product.imageUrl">
                  </div>
                  <div>
                    <h2 class="text-md font-bold mb-3">{{ product.name }}</h2>
                    <span class="text-black "> PKR {{ product.price }} .00</span>
                    <p class="text-black "> Quantity : {{ product.quantity }}</p>
                    <p class="text-black "> Total : {{ product.quantity * product.price }}</p>
                  </div>
                  <div>
                    <button @click="removeFromCart(product)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="getCartItems.length == 0" class="flex p-2 mt-4">
              <h2 class="text-xl font-bold">Your Cart Is Empty </h2>
            </div>
            <div v-else class="flex p-2 mt-4">
              <h2 class="text-xl font-bold">Total Items in Cart : {{ getCartItems.length }}</h2>
            </div>
            <div
              class="flex items-center w-full py-4 text-sm font-semibold border-y border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Subtotal : <span class="ml-2"> PKR {{ getTotal }} </span>
            </div>
            <div
              class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Fix Shipping : <span class="ml-2">PKR {{ shipping }}</span></div>
            <div v-if="getTotal > 0"
              class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 mb-4">
              Total : <span class="ml-2">PKR {{ getTotal + shipping }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data: () => ({
    user: '',
    shipping: 200,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    notes: '',
  }),

  computed: {
    ...mapGetters('cart', ["getTotal", "getCartItems"])
  },

  async mounted() {
    this.$fire.auth.onAuthStateChanged(user => {
      this.user = user;
    });
  },

  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeFromCart', product)
    },

    async uploadOrderDetails() {
      const userDetails = {
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        Phone: this.phone,
        Address: this.address,
        Notes: this.notes,
      }
      const checkoutData = {
        UserData: userDetails,
        CartData: this.getCartItems,
        OrderPrice: this.getTotal
      }
      await this.$fire.firestore.collection('orders').add(checkoutData)
        .then(() => {
          alert('Product ordered successfully!')
          this.firstName = '',
          this.lastName = '',
          this.email = '',
          this.phone = '',
          this.address = '',
          this.notes = '',
          this.$router.push('/medicines')
          this.$store.commit('cart/clearCart');
        })
        .catch(error => {
          console.error(error)
        })

    }
  }

};

</script>