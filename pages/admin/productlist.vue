<template>
  <div class="flex bg-gray-900 ">
    <admin-nav />
    <div class="px-16 pt-16 w-full">
      <div v-if="!showEditForm" class="flex justify-center border-2 border-gray-400 mb-2 rounded">
        <p class="text-3xl text-white font-bold p-3 ">
          Products List
        </p>
      </div>
      <div v-if="!showEditForm" class="flex justify-end mt-4 ">
        <nuxt-link to="/admin/addproduct" class="text-xl text-white font-bold px-4 py-2 bg-blue-500 mb-2 rounded ">
          Add Product
        </nuxt-link>
      </div>
      <table v-if="!showEditForm" class=" text-gray-100 border-separate  py-6">
        <tr>
          <th class="w-48  bg-blue-500 text-white border text-center px-4 py-2">Image</th>
          <th class="w-48 bg-blue-500 text-white border text-center px-4 py-2">Name</th>
          <th class="flex flex-1 justify-center bg-blue-500 text-white border px-4 py-2 ">Description</th>
          <th class="bg-blue-500 text-white border text-center px-4 py-2">Price</th>
          <th class="bg-blue-500 text-white border text-center px-4 py-2">Modify</th>

        </tr>
        <tr v-for="(product, index) in products" :key="index">

          <td class="border-2 border-blue-200 px-2 py-2 ">
            <img class="h-24 w-full" :src="product.imageUrl" />
          </td>
          <td class="border-2 border-blue-200 px-2 py-2 text-center">
            {{ product.name }}
          </td>
          <td class=" border-2 border-blue-200 px-1 py-2 text-justify ">
            <div class="h-[96px] overflow-y-auto px-1">
              <p class="border-r-2 border-gray-500 px-2 ">{{ product.description }}</p>
            </div>
          </td>
          <td class="border-2 border-blue-200 px-2 py-2 text-center">
            {{ product.price }}
          </td>
          <td class="border-2 border-blue-200 px-2">
            <div class="flex gap-1 ">
              <button @click="$router.push({
                query: { id: product.id }
              })"
                class="border px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-bold ">Edit</button>

              <button @click="deleteProduct(product.id)"
                class="border px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 font-bold ">Delete</button>
            </div>
          </td>

        </tr>
      </table>

      <div v-else="showEditForm" class="px-16">
        <div class=" border-2 border-gray-400 mb-2 rounded">
          <p class="text-3xl text-white font-bold p-3 text-center">
            Edit Your Product
          </p>
        </div>
        <div class="py-4 pt-16 ">
          <div class="space-y-2">
            <form class="flex-1 bg-gray-900" @submit.prevent="updateProduct">
              <div class=" mb-6">
                <div class="w-full mb-2">
                  <label class="text-center block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                    for="grid-first-name">
                    Product Image
                  </label>
                  <img class="h-36 w-1/2 mx-auto mb-8" :src="editedProduct.imageUrl">
                  <!-- <input type="file" ref=fileInput > -->
                </div>
                <div class="grid grig-cols-1 md:grid-cols-2 gap-3">
                  <div class="w-full  mb-2">
                    <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                      for="grid-first-name">
                      Product Name
                    </label>
                    <input
                      class=" appearance-none block w-full  text-gray-300 bg-gray-900 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus  focus:border-gray-500"
                      required type="text" id="productName" placeholder="Enter Product Name" v-model="editedProduct.name">


                  </div>
                  <div class="w-full  ">
                    <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 ">
                      Product Price
                    </label>
                    <input id="price" name="price" type="text" required
                      class="appearance-none block w-full bg-gray-900 text-gray-300 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus  focus:border-gray-500"
                      placeholder=" Enter Product Price" v-model="editedProduct.price">
                  </div>
                </div>
                <div class="w-full  mb-2">
                  <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                    Product Description
                  </label>
                  <textarea
                    class="appearance-none block w-full h-36 bg-gray-900 text-gray-300 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus  focus:border-gray-500"
                    required type="text" id="description" placeholder="Enter Product Description"
                    v-model="editedProduct.description"></textarea>
                </div>
              </div>
              <div class="flex gap-2">
                <button type="submit" class=" px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-bold ">
                  Save Changes
                </button>
                <button type="button" @click="cancelEdit"
                  class=" px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-gray-300 font-bold ">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
      
<script>

export default {

  data: () => ({

    products: [],
    editedProduct: {},
    originalProduct: {},

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
  computed: {
    showEditForm() {
      return this.$route?.query?.id
    }
  },
  watch: {
    showEditForm: {
      immediate: true,
      handler(value) {
        if (!value) {
          return
        }
        this.fetchProductAndEdit(value)
      }
    }
  },
  methods: {
    watcher() {
      this.$fire.firestore.collection('products').onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });

    },
    async fetchProductAndEdit(productId) {

      const productRef = this.$fire.firestore.collection('products').doc(productId)
      const productSnapshot = await productRef.get()
      this.editedProduct = {
        id: productSnapshot.id,
        ...productSnapshot.data(),
      }
      this.originalProduct = { ...this.editedProduct }

    },
    async updateProduct() {
      const { id, ...updatedProduct } = this.editedProduct
      await this.$fire.firestore.collection('products').doc(id).update(updatedProduct)
        .then(() => {
          alert('Product Updated Successfully')
          this.$router.push('/admin/productlist')
        })
    },
    async deleteProduct(productId) {
      await this.$fire.firestore.collection('products').doc(productId).delete()

        .then(() => {
          this.watcher();
          alert('Product Deleted Successfully')
          this.$router.push('/admin/productlist')

        })

    },
    cancelEdit() {
      this.editedProduct = { ...this.originalProduct }
      this.$router.push('/admin/productlist')
    },

  }

};
</script>
