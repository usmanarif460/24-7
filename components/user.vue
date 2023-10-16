<template>
  <div>
    <div @click="openChat" class="border px-8 rounded-full py-4 my-2">
      <div class="flex items-center justify-between">
        <p class="text-white text-sm md:text-md">{{ user.firstName }} {{ user.lastName }} </p>
        <span v-if="unreadCount > 0" class="bg-white px-1 text-sm md:text-md rounded-full"> {{ unreadCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      messages: [],
      unreadMessages: [],
      unreadCount: 0,
    }
  },

  async created() {
    // console.log(`user ${this.user.id}`)
    const userRef = this.$fire.firestore.collection('users').doc(this.user.id)
    await userRef.collection('messages')
      .orderBy('timestamp', "asc")
      .onSnapshot(querySnapshot => {
        this.messages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        this.unreadMessages = this.messages.filter(message => message.isUnRead);
        this.unreadCount = this.unreadMessages.length;
      })
  },

  methods: {
    async openChat() {
      if (!this.unreadCount) return

      const promises = this.messages.map(async message => {
        await this.$fire.firestore.collection('users').doc(this.user.id).collection('messages').doc(message.id).update({
          isUnRead: false
        })
        return message
      });
      await Promise.allSettled(promises)
      this.unreadCount = 0
    },
  }
}

</script>