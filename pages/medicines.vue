<template>
  <div>
    <navbar />
    <top-svg />
    <!-- Top Banner Of Every Page -->
    <top-header>Get your All <span class="text-red-800 ">Medicines+</span><br>From Here</top-header>
    <div
      class="mt-[180px] mb-64 mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
      <the-product :product="product" v-for="(product, index) in products" :key="`${product.id}-product-${index}`">
      </the-product>
    </div>
    <thefooter class="" />
  </div>
</template>

<script>
import theProduct from '../components/theProduct.vue';

export default {
  components: { theProduct },
  data: () => ({
    products: [],
    cart: [],
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

};
</script>