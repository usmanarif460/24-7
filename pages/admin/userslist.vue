<template>
  <div class="flex bg-gray-900">
    <admin-nav />
  <div class="container m-auto">
    <h2 class="font-bold text-xl text-center bg-blue mt-8">Users List </h2>
    <table class="  shadow-xlg bg-white border-separate m-auto mt-4 mb-8">
      <tr class="flex flex-wrap bg-gray-900">
        <th class="bg-gray-400 border text-center px-8 py-4">User Name</th>
        <th class="bg-gray-400 border text-center px-8 py-4 ">User Email</th>

      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td class="border px-8 py-4">
          <p>{{ user.firstName }} {{ user.lastName }}</p>
        </td>
        <td class=" border px-8 py-4">
          {{ user.email }}
        </td>

        <td>
          <button @click="deleteUser(user.id)"
            class="border px-4 py-2 rounded-lg text-white bg-red-500 hover:scale-105  ">Delete User</button>
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
    watcher(){
      this.$fire.firestore.collection('users').onSnapshot((querySnapshot) => {
        this.users=[];
        querySnapshot.forEach((doc)=> {
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