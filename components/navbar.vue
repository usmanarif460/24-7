
<template>
  <!-- Main navigation container -->
  <div>
    <nav class="fixed z-40 w-full h-16 px-5 py-3 nav-bg">
      <div class="w-11/12 mx-auto">
        <!-- navbar -->
        <div class="flex justify-between w-full align-middle ">
          <!-- Header logo -->
          <div>
            <nuxt-link to="/"><img src="~/assets/images/logo.png" class="logo-img"></nuxt-link>
          </div>
          <!-- Navbar -->
          <div class="hidden md:block">
            <ul class="flex justify-center pt-2 space-x-8 text-white uppercase align-center text-md">
              <li><nuxt-link to="/" class="inline-block hover:scale-110">Home</nuxt-link></li>
              <li><nuxt-link to="/aboutUs" class="inline-block hover:scale-110">About </nuxt-link></li>
              <li><nuxt-link to="/medicines" class="inline-block hover:scale-110">Medicines</nuxt-link></li>
              <li><nuxt-link to="/contactUs" class="inline-block hover:scale-110">Contact </nuxt-link></li>
            </ul>
          </div>
          <!-- Mobile toggle -->
          <div class="flex gap-3">
            <div class="relative">
              <button @click="modalIsOpen = true">
                <svg class="cursor-pointer h-9 w-9 " viewBox="0 0 32 32" id="svg5" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" fill="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <defs id="defs2"></defs>
                    <g id="layer1" transform="translate(-12,-292)">
                      <path
                        d="m 21,316.00586 c -1.645008,0 -3,1.35499 -3,3 0,1.64501 1.354992,3 3,3 1.645008,0 3,-1.35499 3,-3 0,-1.64501 -1.354992,-3 -3,-3 z m 0,2 c 0.564129,0 1,0.43587 1,1 0,0.56413 -0.435871,1 -1,1 -0.564129,0 -1,-0.43587 -1,-1 0,-0.56413 0.435871,-1 1,-1 z"
                        id="circle5400"
                        style="color:#ffffff;fill:#ffffff;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none">
                      </path>
                      <path
                        d="m 35.999999,316.00586 c -1.645008,0 -3,1.35499 -3,3 0,1.64501 1.354992,3 3,3 1.645008,0 3,-1.35499 3,-3 0,-1.64501 -1.354992,-3 -3,-3 z m 0,2 c 0.564129,0 1,0.43587 1,1 0,0.56413 -0.435871,1 -1,1 -0.564129,0 -1,-0.43587 -1,-1 0,-0.56413 0.435871,-1 1,-1 z"
                        id="circle5402"
                        style="color:#ffffff;fill:#ffffff;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none">
                      </path>
                      <path
                        d="m 15,294.00586 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 1.179688 l 2.65039,13.24219 C 17.759297,309.70823 17,310.77542 17,312.00586 c 0,1.6447 1.355301,3 3,3 h 18.011718 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 H 20 c -0.571296,0 -1,-0.4287 -1,-1 0,-0.5713 0.428704,-1 1,-1 h 16.011718 3 c 0.492161,2.4e-4 0.911339,-0.35764 0.988281,-0.84375 l 1.730469,-11 c 0.09599,-0.60725 -0.373487,-1.15652 -0.988281,-1.15625 H 18.619141 l -0.638672,-3.19531 C 17.887292,294.34287 17.476874,294.00603 17,294.00586 Z m 4.019531,6 h 20.552734 l -1.416016,9 L 20.820312,309 Z m 3.980469,2 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 13.011718 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 z m 2,3 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 9.011718 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 z"
                        id="path5404"
                        style="color:#ffffff;fill:#ffffff;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none">
                      </path>
                    </g>
                  </g>
                </svg>
                <p class="absolute top-0 px-1 text-sm font-bold text-white bg-red-500 rounded-full left-5">{{
                  getCartItems.length
                }}</p>
              </button>
            </div>
            <div class="hidden space-x-2 md:block" v-if="!user">
              <headerbtn>
                <nuxt-link to="/login">Login</nuxt-link>
              </headerbtn>
              <headerbtn>
                <nuxt-link to="SignUp"> Sign Up </nuxt-link>
              </headerbtn>
            </div>
            <div class="hidden md:block" v-else>
              <headerbtn>
                <button @click="logoutbtn">Sign Out</button>
              </headerbtn>
            </div>

            <div class="md:hidden">
              <button @click="drawer">
                <svg class="text-white fill-current h-9 w-9" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

          </div>
        </div>
        <!-- Dark Background Transition -->
        <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
          leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="fixed inset-0 z-10 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="fixed top-0 left-0 z-30 w-full h-screen overflow-auto transition-all duration-300 ease-in-out transform bg-white "
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

          <div class="flex justify-between px-3 py-2 align-middle nav-bg">
            <div>
              <img src="~/assets/images/logo.png" class="logo-img">
            </div>
            <div class="close">
              <button @click="isOpen = false">
                <svg class="w-8 h-8 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>


          <ul
            class="container flex flex-col justify-center p-5 mx-auto font-bold uppercase divide-y text-md md:text-xl align-center">
            <li><nuxt-link to="/" @click="isOpen = false" class="block my-4 text-center hover:scale-110 ">Home</nuxt-link>
            </li>
            <li><nuxt-link to="/aboutus" @click="isOpen = false"
                class="block my-4 text-center hover:scale-110">About</nuxt-link></li>
            <li><nuxt-link to="/medicines" @click="isOpen = false"
                class="block my-4 text-center hover:scale-110">Medicines</nuxt-link></li>
            <li><nuxt-link to="/contactus" @click="drawer"
                class="block my-4 text-center hover:scale-110">Contact</nuxt-link></li>
            <li v-if="!user" class="flex justify-center gap-3">
              <nuxt-link to="/login" @click="isOpen = false"
                class="inline-block px-3 py-2 my-5 font-semibold text-center text-blue-600 border-2 border-blue-500 rounded cta hover:bg-blue-600 hover:text-white">Login</nuxt-link>
              <nuxt-link to="/signup" @click="isOpen = false"
                class="inline-block px-3 py-2 my-5 font-semibold text-center text-white bg-blue-500 rounded cta hover:bg-blue-600">Sign
                Up</nuxt-link>
            </li>
            <li v-else class="flex justify-center ">
              <button @click="logoutbtn"
                class="inline-block px-3 py-2 my-5 font-semibold text-center text-blue-600 border-2 border-blue-500 rounded cta hover:bg-blue-600 hover:text-white">Sign
                Out
              </button>
            </li>
          </ul>

          <div class="follow ">
            <p class="text-xl italic font-bold text-center sm:text-md">follow us:</p>
            <div class="flex justify-center gap-16 mt-6 align-center ">
              <div>
                <a href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-full mx-auto hover:scale-110 " fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

              </div>
              <div>
                <a href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-full mx-auto hover:scale-110" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-full mx-auto hover:scale-110" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </aside>

      </div>
    </nav>

    <div v-if="modalIsOpen"
      class="fixed top-0 right-0 z-40 flex items-end justify-end w-full h-screen mr-auto transition-opacity bg-black bg-opacity-50 sm:block ">
      <div class="relative w-full h-full ml-auto bg-white rounded-md md:w-4/12 xl:w-5/12 overflow-scroll">
        <div class="fixed top-0 border-b-2 border-slate-300 bg-slate-100 w-full overflow-hidden">
          <div class=" flex items-center justify-between z-60  px-6 py-3 w-5/12 ">
            <h1 class="text-xl font-bold text-blue-500">Your Bag</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 cursor-pointer " @click="modalIsOpen = false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div class="w-[90%] mx-auto mb-3 mt-16">
          <div v-for="(product, index) in getCartItems" :key="index"
            class="flex items-center justify-between pr-3 mb-3 border-2 border-blue-400 rounded-lg">
            <div class="flex items-center pr-2 space-x-4">
              <div class="w-36 h-36">
                <img :src="product.imageUrl">
              </div>
              <div>
                <h2 class="mb-3 font-bold text-md ">{{ product.name }}</h2>
                <span class="text-black "> PKR {{ product.price }} .00</span>
                <p class="text-black "> Quantity : {{ product.quantity }}</p>
                <p class="text-black "> Total : {{ product.quantity * product.price }}</p>
              </div>
            </div>
            <div>
              <button @click="removeFromCart(product)"
                class="border-2 border-blue-500 hover:text-blue-500 p-2 font-bold rounded-lg">
                Remove
              </button>
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
            Subtotal : <span class="ml-2"> {{ getTotal }} </span>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Fix Shipping : <span class="ml-2">{{ shipping }}</span></div>
          <div v-if="getTotal > 0"
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 mb-4">
            Total : <span class="ml-2">{{ getTotal + shipping }}</span>
          </div>
          <div class="mt-4">
            <nuxt-link to="/checkout"
              class="ml-3 px-3 py-1 text-xl font-bold text-blue-600 border-2 border-blue-500 rounded hover:bg-blue-600 hover:text-white">
              Checkout
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import headerbtn from './headerbtn.vue';
export default {
  data() {
    return {
      user: '',
      isOpen: false,
      modalIsOpen: false,
      shipping: 200
    };
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen)
        this.isOpen = false;
    });
    this.$fire.auth.onAuthStateChanged(user => {
      this.user = user;
    });

  },
  computed: {
    ...mapGetters('cart', ['getCartItems']),
    ...mapGetters('cart', ["getTotal"]),
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen)
    },
    logoutbtn() {
      this.$fire.auth.signOut();
      this.user = '';
      this.$router.push("/");
    },
    removeFromCart(index) {
      this.$store.dispatch('cart/removeFromCart', index)
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen)
            document.body.style.setProperty("overflow", "hidden");
          else
            document.body.style.removeProperty("overflow");
        }
      },
    },

  },


};
</script>

<style scoped>
.logo-img {
  width: 8rem;
  height: 2.5rem;
}

.nav-bg {
  background-image: linear-gradient(to right, hsl(217, 88%, 33.7%), hsl(217, 88%, 75.1%));
}
</style> 
 
