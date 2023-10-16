<template>
  <div class="pt-12">
    <nuxt-link :to="`/tests/${product.id}`">
      <div class="overflow-hidden text-center  ">
        <div class="container flex items-center px-4 py-2 gap-5 rounded-md border-2 border-blue-300 h-24">
          <p class="font-bold pr-2 ">{{ product.testName }}</p>
          <p class="hidden md:block flex-1 border-x-2 border-blue-500 px-2 ">{{ product.description }}</p>
          <p class="font-bold border-r-2 border-blue-500 pr-5  ">Rs {{ product.price }}.00</p>
          <div>
            <button @click="addToCart(product)"
              class="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 w-full rounded-lg hover:text-white">ADD
              TO CART</button>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
};

</script>
