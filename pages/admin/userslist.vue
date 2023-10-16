<template>
  <div class="flex bg-gray-900">
    <admin-nav />
    <div class=" px-16 pt-16 w-full">
      <div class="flex justify-center border-2 border-gray-400 mb-2 rounded">
        <p class="text-3xl text-white font-bold p-3 ">
          Users List
        </p>
      </div>
      <table class=" text-gray-100 border-separate  pt-16 mb-8 w-full">
        <tr >
          <th class="w-56 bg-blue-500 text-white border text-center px-4 py-2">User Name</th>
          <th class=" bg-blue-500 text-white border text-center px-4 py-2">User Email</th>
          <th class="w-48 text-center bg-blue-500 text-white border px-4 py-2 ">Action</th>
        </tr>
        <tr v-for="(user, index) in users" :key="index">
          <td class="border px-8 py-4">
            <p>{{ user.firstName }} {{ user.lastName }}</p>
          </td>
          <td class=" border px-8 py-4">
            {{ user.email }}
          </td>

          <td class="border-2 border-blue-200 px-2 text-center">
            <button @click="deleteUser(user.id)"
            class="border px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 font-bold ">Delete User</button>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>

export default {

  data: () => ({
    users: [],

  }),

  async created() {
    const userslist = []
    await this.$fire.firestore.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userslist.push({
          id: doc.id,
          ...doc.data()
        })
      });

      this.users = userslist
    })

  },
  methods: {
    watcher() {
      this.$fire.firestore.collection('users').onSnapshot((querySnapshot) => {
        this.users = [];
        querySnapshot.forEach((doc) => {
          this.users.push(doc);
        });
      });

    },
    async deleteUser(userId) {
      await this.$fire.firestore.collection('users').doc(userId).delete()
        .then(() => {
          this.watcher();
          alert('User successfully deleted ')
        })

    },

  }

};
</script>