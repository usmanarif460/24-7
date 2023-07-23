
<template>
  <div class="flex bg-gray-900 h-screen">
    <admin-nav />
    <div class=" flex-1 ml-56  py-8  px-4 sm:px-6 lg:px-8 ">
      <div class="px-16">
        <div class="flex justify-center border-2 border-gray-400 mb-2 rounded">
          <p class="text-3xl text-white font-bold p-3 ">
            Add New Product
          </p>

        </div>

        <form class="mx-auto space-y-6 p-3 mt-16 " @submit.prevent="handleSubmit">
          <div class=" flex-wrap -mx-3 mb-6">
            <div class="w-full  mb-4 ">
              <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-first-name">
                Product Image
              </label>
              <input type="file" ref="fileInput" required
                class="  text-gray-300 bg-gray-900 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500">

            </div>
            <div class="grid grig-cols-1 md:grid-cols-2 gap-3">
              <div class="w-full mb-2">
                <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-first-name">
                  Product Name
                </label>
                <input
                  class=" appearance-none block w-full  text-gray-300 bg-gray-900 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus  focus:border-gray-500"
                  required type="text" id="productName" placeholder="Enter Product Name" v-model="productName">


              </div>
              <div class="w-full">
                <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 ">
                  Product Price
                </label>
                <input id="price" name="price" type="text" required
                  class="appearance-none block w-full bg-gray-900 text-gray-300 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus  focus:border-gray-500"
                  placeholder=" Enter Product Price" v-model="price">
              </div>
            </div>

            <div class="w-full mb-4 ">
              <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Product Description
              </label>
              <textarea
                class="appearance-none block w-full h-24 bg-gray-900 text-gray-300 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus  focus:border-gray-500"
                required type="text" id="description" placeholder="Enter Product Description"
                v-model="description"></textarea>
            </div>

            <div class="flex gap-3">
              <button type="submit"
                class="rounded-md border border-transparent bg-blue-500 py-2 px-4 text-md font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                Add Product
              </button>
              <button @click="cancelbtn" type="button"
                class="rounded-md border border-transparent bg-gray-300 py-2 px-4 text-md font-bold text-blue-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

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
    }
  }
}

</script> 
