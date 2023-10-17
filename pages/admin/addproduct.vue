
<template>
  <div class="h-screen bg-gray-700 ">
    <admin-nav />
    <div class="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div class="px-16">
        <div class="flex justify-center w-10/12 mx-auto mb-2 border-2 border-gray-400 rounded">
          <p class="p-3 text-3xl font-bold text-white ">
            Add New Product
          </p>
        </div>

        <form class="w-11/12 p-3 mx-auto mt-16 space-y-6 max-w-7xl" @submit.prevent="handleSubmit">
          <div class="flex-wrap mb-6 -mx-3 ">
            <div class="w-full mb-4 ">
              <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase" for="grid-first-name">
                Product Image
              </label>
              <input type="file" ref="fileInput" required
                class="px-4 py-3 mb-3 leading-tight text-gray-300 bg-gray-700 border border-blue-500 rounded focus:outline-none focus:border-gray-500">

            </div>
            <div class="grid gap-3 grig-cols-1 md:grid-cols-2">
              <div class="w-full mb-2">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase" for="grid-first-name">
                  Product Name
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-300 bg-gray-700 border border-blue-500 rounded appearance-none focus:outline-none focus focus:border-gray-500"
                  required type="text" id="productName" placeholder="Enter Product Name" v-model="productName">


              </div>
              <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase ">
                  Product Price
                </label>
                <input id="price" name="price" type="text" required
                  class="block w-full px-4 py-3 leading-tight text-gray-300 bg-gray-700 border border-blue-500 rounded appearance-none focus:outline-none focus focus:border-gray-500"
                  placeholder=" Enter Product Price" v-model="price">
              </div>
            </div>

            <div class="w-full mb-4 ">
              <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase">
                Product Description
              </label>
              <textarea
                class="block w-full h-24 px-4 py-3 leading-tight text-gray-300 bg-gray-700 border border-blue-500 rounded appearance-none focus:outline-none focus focus:border-gray-500"
                required type="text" id="description" placeholder="Enter Product Description"
                v-model="description"></textarea>
            </div>

            <div class="flex gap-3">
              <button type="submit"
                class="px-4 py-2 font-bold text-white bg-blue-500 border border-transparent rounded-md text-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                Add Product
              </button>
              <button @click="cancelbtn" type="button"
                class="px-4 py-2 font-bold text-blue-700 bg-gray-300 border border-transparent rounded-md text-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                Cancel
              </button>
            </div>
          </div>


        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      description: '',
      price: 0,
      imageUrl: null,
      quantity: 1,
    }
  },
  methods: {

    async handleSubmit() {
      const file = this.$refs.fileInput.files[0]
      const storageRef = this.$fire.storage.ref()
      const imageRef = storageRef.child(`images/${file.name}`)
      const snapshot = await imageRef.put(file)
      this.imageUrl = await snapshot.ref.getDownloadURL()

      this.$fire.firestore.collection('products').add({
        name: this.productName,
        description: this.description,
        price: this.price,
        imageUrl: this.imageUrl,
        quantity: this.quantity,
      })
        .then(() => {
          alert('Product added successfully!')
          this.productName = '',
            this.description = '',
            this.price = 0,
            this.$refs.fileInput.files = null,
            this.$router.push('/medicines')
        })
        .catch(error => {
          console.error(error)
          alert('Error adding product')
        })

    },
    cancelbtn() {
      this.productName = '',
        this.description = '',
        this.price = 0,
        this.$refs.fileInput.files = null
      this.$router.push('/admin/productlist')
    }
  }
}

</script> 
