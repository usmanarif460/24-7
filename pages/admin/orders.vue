<template>
  <div>
    <div class="flex bg-gray-900">
      <adminNav />
      <div class=" px-16 pt-16 w-full">
        <div class="flex justify-center border-2 border-gray-400 mb-2 rounded">
          <p class="text-3xl text-white font-bold p-3 ">
            Orders List
          </p>
        </div>
        <table class=" text-gray-100 border-separate  pt-16 mb-8 w-full">
          <tr>
            <th class="w-56 bg-blue-500 text-white border text-center px-4 py-2">User Details</th>
            <th class=" bg-blue-500 text-white border text-center px-4 py-2">Product Details</th>
            <th class="w-48 text-center bg-blue-500 text-white border px-4 py-2 ">Total Price</th>
          </tr>
          <tr v-for="(order, index) in orders" :key="index">
            <td class="border px-8 py-4  h-24">
              <p>Name : {{ order.UserData.FirstName }} {{ order.UserData.LastName }}</p>
              <p> Email : {{ order.UserData.Email }}</p>
              <p> Address : {{ order.UserData.Address }}</p>
              <p> Phone : {{ order.UserData.Phone }}</p>
            </td>
            <td class=" border px-8 py-4 flex items-center justify-between  h-[200px] overflow-y-auto"
               v-for="cartData in order.CartData " :key="cartData.id">
              <span class="border px-2 py-1">Product Name : {{ cartData.name }}</span><br>

              <span class="border px-2 py-1">Product Price : {{ cartData.price }} </span><br>

              <span class="border px-2 py-1">Product Quantity : {{ cartData.quantity }}</span><br>

            </td>
            <td class=" border px-8 py-4  h-24">
              <p class="text-center"> {{ order.OrderPrice }}</p>
            </td>

          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: []
    }
  },
  async created() {
    const ordersList = []
    await this.$fire.firestore.collection('orders').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        ordersList.push({
          id: doc.id,
          ...doc.data()
        })
      });
      this.orders = ordersList
    })
  }
}
</script>

<style scoped></style>