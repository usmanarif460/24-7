<template>
  <div class="flex">
    <adminNav />
    <!-- Users List  -->
    <users />
    <div class="relative h-[500px] overflow-y-auto border-2 border-black mt-8 mb-4 pt-2 px-2 w-2/3 md:w-1/2 m-auto ">
      <div v-if="hasMessages">
        <ul class="w-2/3 p-2" :class="{ 'ml-auto': message.isAdmin }" v-for="message in messages" :key="message.id">
          <li>
            <div class=" mr-auto flex flex-col rounded-lg mb-3 p-2 border-gray-300 bg-blue-300 "
              :class="{ 'bg-gray-200 ': message.isAdmin }">
              <p class="bg-gray-100 pl-1 text-xs md:text-sm">{{ message.email }}</p>
              <p class="p-2 "> {{ message.text }}</p>
            </div>
          </li>
        </ul>
        <div class=" bg-white sticky bottom-0">
          <form @submit.prevent="sendMessage" class="w-4/5  flex gap-2 py-2">
            <input class="flex-grow border-2 border-black focus:outline-none p-1 rounded-lg" v-model="newMessage"
              type="text" required>
            <button class="bg-blue-300 py-2 px-3 rounded-lg pl-2" type="submit">Send</button>
          </form>
        </div>
      </div>
      <div v-else class="h-full w-full flex items-center justify-center">
        <p class="text-blue-600 text-xl md:text-3xl">This User have No Chat Yet</p>
      </div>

    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      messages: [],
      newMessage: '',

    }
  },
  async created() {

    await this.$fire.auth.onAuthStateChanged(async user => {
      this.user = user;
      if (user) {
        const userRef = this.$fire.firestore.collection('users').doc(this.$route.params.id)
        await userRef.collection('messages')
          .orderBy('timestamp', "asc")
          .onSnapshot(querySnapshot => {
            this.messages = querySnapshot.docs.map(doc => doc.data())

          })
      }
    });

  },

  computed: {
    hasMessages() {
      return this.messages.length > 0; // Check if the array has items
    },
  },

  methods: {
    async sendMessage() {
      if (this.user && this.newMessage != '') {
        const userRef = this.$fire.firestore.collection('users').doc(this.$route.params.id)
        await userRef.collection('messages').add({
          email: this.user.email,
          text: this.newMessage,
          timestamp: new Date(),
          isAdmin: true,

        })
        this.newMessage = ''

      }
    }
  }
}
</script>