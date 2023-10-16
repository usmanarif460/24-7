<template>
  <div>
    <navbar />
    <div class="flex items-center justify-center w-8/12 mx-auto">
      <div class="w-full px-16 pt-20 my-8">
        <div class="relative w-full p-2 m-auto mb-4 border-2 border-black md:w-2/3">
          <ul class="h-[380px] overflow-y-auto mb-2">
            <li class="w-2/3 p-2 ml-auto" :class="{ 'mr-[33%] ': message.isAdmin }" v-for="message in messages"
              :key="message.id">
              <div class="flex flex-col p-2 mb-3 bg-blue-300 border border-gray-300 rounded-lg "
                :class="{ 'bg-gray-200 ': message.isAdmin }">
                <p class="flex justify-between px-1 text-xs text-orange-400 bg-gray-100 md:text-sm">{{ user.email }}
                </p>
                <p class="p-2 text-sm md:text-md "> {{ message.text }}</p>
              </div>
            </li>
          </ul>
          <div class="sticky bottom-0 w-full">
            <form class="flex items-center w-full gap-2" v-if="user" @submit.prevent="sendMessage">
              <textarea class="w-full h-10 p-1 my-2 border-2 border-black rounded-lg focus:outline-none"
                v-model="newMessage" type="text" required></textarea>
              <button class="p-2 ">
                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="#000000"></path>
                    <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#000000" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
              </button>
            </form>
          </div>
          <div v-if="!user" class="flex items-center justify-center w-full h-full ">
            <p class="text-lg text-red-600">Plese join us with Register or login to chat with us</p>
            <headerbtn class="mt-4 bg-blue-500">
              <nuxt-link to="/login">Login</nuxt-link>
            </headerbtn>
          </div>
        </div>
      </div>
    </div>
    <thefooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      chatUser: [],
      user: '',

    }
  },

  async created() {
    // this.user = await this.$fire.auth.currentUser
    await this.$fire.auth.onAuthStateChanged(async user => {
      this.user = user;
      const userRef = this.$fire.firestore.collection('users').doc(user.uid)
      await userRef.collection('messages')
        .orderBy('timestamp', "asc")
        .onSnapshot(querySnapshot => {
          this.messages = querySnapshot.docs.map(doc => doc.data())
          console.log(this.messages.length)
        })
    });
  },

  methods: {
    async sendMessage() {

      if (this.user && this.newMessage != '') {
        const userRef = this.$fire.firestore.collection('users').doc(this.user.uid)
        await userRef.collection('messages').add({
          email: this.user.email,
          text: this.newMessage,
          timestamp: new Date(),
          isUnRead: true
        })
        this.newMessage = ''

      }
    }
  },
}
</script>
