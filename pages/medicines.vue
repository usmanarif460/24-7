<template>
  <div>
    <navbar />
    <!-- Top Banner Of Every Page -->
    <top-svg />
    <top-header>Get your All <span class="text-red-800 ">Medicines+</span><br>From Here</top-header>
    <div class=" mt-[150px] mx-auto flex flex-col items-center ">
      <div class="relative flex items-center px-3 py-2 overflow-hidden border border-blue-400 rounded-full shadow-xl">
        <input class="px-12 py-1.5 w-full focus:outline-none" v-model="searchQuery" @input="performSearch"
          placeholder="Search products" />
        <button @click="performSearch" class="absolute right-3 ">
          <svg fill="currentColor" viewBox="0 0 512 512" class="w-5 h-5 dark:text-gray-900 ">
            <path
              d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <ul v-if="searchResults.length > 0" class="container flex justify-around gap-3 mx-auto mb-4">
      <the-product :product="product" v-for="(product, index) in searchResults" :key="`${product.id}-product-${index}`">
      </the-product>
    </ul>
    <div v-else class="mt-4 text-2xl text-center text-red-600">{{ result }}</div>
    <div
      class="mt-[100px] mb-64 mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
      <the-product :product="product" v-for="(product, index) in products" :key="`${product.id}-product-${index}`">
      </the-product>
    </div>
    <thefooter />
  </div>
</template>

<script>
import theProduct from '../components/theProduct.vue';

export default {
  components: { theProduct },
  data: () => ({
    products: [],
    searchQuery: '',
    searchResults: [],
    result: ""
  }),
  async created() {
    const items = []
    await this.$fire.firestore.collection('products').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        })
      });
      this.products = items
    })
  },
  methods: {

    async performSearch() {
      if (this.searchQuery != '') {
        this.searchResults = this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      else {
        this.searchResults = []
        this.result = "No Results Found"
      }
    },
  }

};
</script>