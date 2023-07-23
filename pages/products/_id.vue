<template>
  <div>
    <navbar />
    <div class="pt-24 mb-8">
      <p class="text-4xl font-bold text-center text-blue-500 animate-pulse">Product Details</p>

      <div class="lg-container grid grid-cols-1 gap-5 px-8 pt-6 mx-auto product-preview md:grid-cols-2">
        <div class="w-full img-section h-2/4 ">
          <img class="w-full h-full" :src="product.imageUrl">
        </div>
        <div class="h-screen p-5 product-details">
          <h1 class="text-sm font-bold md:text-lg">{{ product.name }}</h1>
          <p class="mb-2">{{ product.description }}</p>
          <p class="mb-2 font-bold">{{ product.price }}</p>
          <div class="flex items-center space-x-3 mb-4">
            <p class=" text-lg"> Quantity : {{ product.quantity }}</p>
            <input id="quantity" name="quantity" type="number" required
              class="appearance-none block border border-blue-500 rounded py-2 px-4 leading-tight focus:outline-none focus  focus:border-gray-500 w-[10rem]"
              v-model="product.quantity">

            <!-- <button class="px-2 text-2xl rounded-lg font-bold border-2 border-blue-400 text-blue-400"
              @click="product.quantity++">+</button>
            <button class="px-3 rounded-lg text-2xl font-bold border-2 border-blue-400 text-blue-400"
              @click="decreament">-</button> -->
          </div>
          <div class="btn-align">



            <div class="flex items-center justify-between ">
              <button @click="addToCart(product)"
                class="px-2 py-1 text-lg font-bold text-blue-600 border-2 border-blue-500 rounded hover:bg-blue-600 hover:text-white">ADD
                TO
                CART
              </button>
              <nuxt-link to="/medicines" class="text-xl text-center text-blue-700 underline">&larr; Continue
                Shopping
              </nuxt-link>
            </div>
            <div v-if="added" class="w-full mt-4" id="alertbox">
              <div class=" bg-blue-500 text-white flex items-center text-md font-bold px-4 py-3 rounded-md relative"
                role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                </svg>
                <p>product successfully added to the cart.</p>

                <span class="absolute top-0 bottom-0 right-0 px-4 py-3 closealertbutton">
                  <svg @click="close" class="fill-current h-6 w-6 text-white" role="button"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path
                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            </div>
            <!-- <div v-if="modalActive"
              class="flex items-center p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Success alert !</span> Product Added To Cart Successfully
              </div>
            </div> -->

          </div>
        </div>
      </div>

    </div>
    <thefooter />
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {

  data: () => ({
    product: {},
    cart: [],
    added: false,

  }),
  async created() {
    const doc = await this.$fire.firestore.collection('products').doc(this.$route.params.id)
      .get()
    this.product = doc.exists ? doc.data() : {}
  },
  computed: {
    ...mapMutations['cart', ['addToCart']]
  },

  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        ...this.product,
        id: this.$route.params.id
      })
      this.added = true
      this.product.quantity = 1
    },
    close() {
      this.added = false
    },

    decreament() {
      if (this.product.qunatity > 0) {
        this.product.quantity--;
      }
      else {
        this.product.quantity;
      }
    }
  }
};

</script>
