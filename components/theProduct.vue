<template>
  <div class="pt-12">
    <nuxt-link :to="`/products/${product.id}`">
      <div class="overflow-hidden text-center  rounded-md border-2 border-blue-500">
        <div class="hover:scale-110 ">
          <img class="w-64 h-48 mx-auto" :src="product.imageUrl" alt="productImage">
        </div>
        <div class="p-4">
          <p >{{ product.name }}</p>
          <p class="font-bold my-3">Rs {{product.price}}.00</p>
          <div>
            <button class="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 w-full rounded-full hover:text-white">ADD
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
    },

  },

};

</script>
