<template>
  <div>
    <navbar />
    <!-- Top SVG of Page -->
    <top-svg />
    <!-- Top Banner Of Every Page -->
    <top-header>Contact Us</top-header>
    <!-- Conatct Form -->
    <!-- Container for demo purpose -->
    <div class="container mx-auto mt-48 mb-24 md:px-6">
      <!-- Section: Design Block -->
      <section class="mt-24 ">
        <div class="py-12 md:px-12">
          <div class="container mx-auto xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div class="relative z-[10] block rounded-lg bg-white px-6 py-12 md:px-12 lg:-mr-14 shadow-lg">
                  <h2 class="p-2 mb-12 text-3xl font-bold text-center text-white bg-blue-500 rounded-lg animate-pulse">
                    Contact us</h2>
                  <form @submit.prevent="SendMessage">
                    <div class="mb-8">
                      <label class="block mb-2 text-sm font-bold text-gray-700">
                        <span class="text-red-500">&nbsp;*</span>
                        Full Name
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <input type="text" placeholder="Enter Your Full Name" v-model="fullName" required
                          class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
                      </div>
                    </div>
                    <div class="mb-8">
                      <label class="block mb-2 text-sm font-bold text-gray-700">
                        <span class="text-red-500">&nbsp;*</span>
                        Email Address
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <input type="email" placeholder="Enter Your Email" v-model="email" required
                          class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
                      </div>
                    </div>
                    <div class="mb-8">
                      <label class="block mb-2 text-sm font-bold text-gray-700">
                        <span class="text-red-500">&nbsp;*</span>
                        Message
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <textarea type="text" placeholder="Drop your any query or messaage here" v-model="message" required
                          class="block w-full h-24 px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600"></textarea>
                      </div>
                    </div>

                    <button type="submit" data-te-ripple-init data-te-ripple-color="light"
                      class="block rounded border border-blue-500 px-6 pt-2.5 pb-2 text-md font-bold uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white ">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div class="md:mb-12 lg:mb-0 hidden lg:block rotate-[5deg]">
                <div class="relative  h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg"
                    class="absolute top-0 left-0 w-full h-full rounded-lg" frameborder="0" allowfullscreen>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center space-y-2 mt-10">
          <h1 class="text-lg md:text-2xl lg:text-4xl text-blue-500 my-5">
            If You Want Physical Visit Then Here Is Our Address 
          </h1>
          <h2 class="text-gray-700 text-lg md:text-2xl">
            Hussainia Imam Bargah, Circular Road Gujrat
          </h2>
          <p class="text-lg md:text-xl">
           <span class="text-red-700 text-lg md:text-2xl">Cell : </span> 0308-6163436
          </p>
          <p class="text-lg md:text-xl">
           <span class="text-red-700 text-lg md:text-2xl">Email : </span> wahabpharmacystore@gmail.com
          </p>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
    <thefooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      message: '',
    }
  },

  methods: {
    async SendMessage() {

      this.$fire.firestore.collection('contact').add({
        fullName: this.fullName,
        email: this.email,
        message: this.message,
      })
        .then(() => {
          alert('Your Message Sent successfully!')
          this.fullName = '',
            this.email = '',
            this.message = ''
        })
        .catch(error => {
          console.error(error)
          alert('Error Sending message')
        })

    },
  }
}

</script>

