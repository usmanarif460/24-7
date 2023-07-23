<template>
  <div>
    <div class="flex items-center space-x-4">
      <div class="w-36 h-36">
        <img :src="product.imageUrl">
      </div>
      <div>
        <h2 class="text-md font-bold">{{ product.name }}</h2>
        
        <span class="text-black ">{{ product.price }}</span>
      </div>
      <div>
        <button @click="$emit('removeItem')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
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

}
