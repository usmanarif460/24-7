<template>
  <div class="flex mx-auto bg-gray-700">
    <admin-nav />
    <div class="w-full px-16 pt-16">
      <div v-if="!showEditForm" class="flex justify-center mb-2 border-2 border-gray-400 rounded">
        <p class="p-3 text-3xl font-bold text-white ">
          Products List
        </p>
      </div>
      <div v-if="!showEditForm" class="flex justify-end mt-4 ">
        <nuxt-link to="/admin/addproduct" class="px-4 py-2 mb-2 text-xl font-bold text-white bg-blue-500 rounded ">
          Add Product
        </nuxt-link>
      </div>
      <table v-if="!showEditForm" class="py-6 mx-auto text-gray-100 border-separate ">
        <tr>
          <th class="w-48 px-4 py-2 text-center text-white bg-blue-500 border">Image</th>
          <th class="w-48 px-4 py-2 text-center text-white bg-blue-500 border">Name</th>
          <th class="flex justify-center flex-1 px-4 py-2 text-white bg-blue-500 border ">Description</th>
          <th class="px-4 py-2 text-center text-white bg-blue-500 border">Price</th>
          <th class="px-4 py-2 text-center text-white bg-blue-500 border">Modify</th>

        </tr>
        <tr v-for="(product, index) in products" :key="index">

          <td class="px-2 py-2 border-2 border-blue-200 ">
            <img class="w-full h-24" :src="product.imageUrl" />
          </td>
          <td class="px-2 py-2 text-center border-2 border-blue-200">
            {{ product.name }}
          </td>
          <td class="px-1 py-2 text-justify border-2 border-blue-200 ">
            <div class="h-[96px] overflow-y-auto px-1">
              <p class="px-2 border-r-2 border-gray-500 ">{{ product.description }}</p>
            </div>
          </td>
          <td class="px-2 py-2 text-center border-2 border-blue-200">
            {{ product.price }}
          </td>
          <td class="px-2 border-2 border-blue-200">
            <div class="flex gap-1 ">
              <button @click="$router.push({
                query: { id: product.id }
              })" class="px-4 py-2 font-bold text-white bg-blue-600 border rounded-lg hover:bg-blue-700 ">Edit</button>

              <button @click="deleteProduct(product.id)"
                class="px-4 py-2 font-bold text-white bg-red-600 border rounded-lg hover:bg-red-700 ">Delete</button>
            </div>
          </td>

        </tr>
      </table>

      <div v-else="showEditForm" class="px-16">
        <div class="mb-2 border-2 border-gray-400 rounded ">
          <p class="p-3 text-3xl font-bold text-center text-white">
            Edit Your Product
          </p>
        </div>
        <div class="py-4 pt-16 ">
          <div class="space-y-2">
            <form class="flex-1 bg-gray-900" @submit.prevent="updateProduct">
              <div class="mb-6 ">
                <div class="w-full mb-2">
                  <label class="block mb-2 text-xs font-bold tracking-wide text-center text-gray-300 uppercase"
                    for="grid-first-name">
                    Product Image
                  </label>
                  <img class="w-1/2 mx-auto mb-8 h-36" :src="editedProduct.imageUrl">
                  <!-- <input type="file" ref=fileInput > -->
                </div>
                <div class="grid gap-3 grig-cols-1 md:grid-cols-2">
                  <div class="w-full mb-2">
                    <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase"
                      for="grid-first-name">
                      Product Name
                    </label>
                    <input
                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-300 bg-gray-900 border border-blue-500 rounded appearance-none focus:outline-none focus focus:border-gray-500"
                      required type="text" id="productName" placeholder="Enter Product Name" v-model="editedProduct.name">


                  </div>
                  <div class="w-full ">
                    <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase ">
                      Product Price
                    </label>
                    <input id="price" name="price" type="text" required
                      class="block w-full px-4 py-3 leading-tight text-gray-300 bg-gray-900 border border-blue-500 rounded appearance-none focus:outline-none focus focus:border-gray-500"
                      placeholder=" Enter Product Price" v-model="editedProduct.price">
                  </div>
                </div>
                <div class="w-full mb-2">
                  <label class="block mb-2 text-xs font-bold tracking-wide text-gray-300 uppercase">
                    Product Description
                  </label>
                  <textarea
                    class="block w-full px-4 py-3 leading-tight text-gray-300 bg-gray-900 border border-blue-500 rounded appearance-none h-36 focus:outline-none focus focus:border-gray-500"
                    required type="text" id="description" placeholder="Enter Product Description"
                    v-model="editedProduct.description"></textarea>
                </div>
              </div>
              <div class="flex gap-2">
                <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
                <button type="button" @click="cancelEdit"
                  class="px-4 py-2 font-bold text-black bg-gray-200 rounded-lg hover:bg-gray-300">
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
