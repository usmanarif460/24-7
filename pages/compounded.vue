
<template>
  <div>
    <navbar />
    <top-svg />
    <top-header>Upload Your Compounded <span class="text-red-800 ">Prescription</span> Here</top-header>
    <div class="container mx-auto mt-48 px-16">
      <div
        class=" flex flex-col lg:flex-row gap-5 items-center justify-around border-2 border-blue-100 shadow-lg p-6 rounded-lg">
        <div class="flex flex-col items-center">
          <img class="ui image img-responsive mb-10" src="https://static-media.dawaai.pk/img/prescr-rx.png"
            alt="Prescription rx icon" width="70px">
          <p class="text-center">Upload a valid prescription</p>
        </div>
        <div class="px-24 py-[1px] bg-blue-300"></div>
        <div class="flex flex-col items-center">
          <img class="ui image img-responsive mb-10" src="https://static-media.dawaai.pk/img/prescr-phone.png"
            alt="Prescription phone icon" width="70px">
          <p class="text-center">Receive a confirmation call</p>
        </div>
        <div class="px-24 py-[1px] bg-blue-300"></div>
        <div class="flex flex-col items-center">
          <img class="ui image img-responsive mb-10" src="https://static-media.dawaai.pk/img/prescr-box.png"
            alt="Prescription box icon" width="70px">
          <p class="text-center">Get medicines at your doorstep</p>
        </div>
      </div>
    </div>
    <div class=" pt-16 flex justify-center ">
      <img class=" mt-6 w-48" src="~/assets/images/prescription-upload-image.avif">
    </div>
    <div class="container mx-auto p-16 ">
      <div class=" container mx-auto border border-blue-100 shadow-lg mb-28 px-4 py-8 ">
        <form @submit.prevent="uploadPrescription">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ">
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
          </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Phone Number
            </label>
            <div class="mt-1 rounded-md shadow-sm">

              <input type="tel" placeholder="Enter Your Mobile Number" v-model="phone" required
                class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Address
            </label>
            <div class="mt-1 rounded-md shadow-sm">

              <textarea type="text" placeholder="Enter Your Adddress Here" v-model="address" required
                class="block w-full h-24 px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600"></textarea>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-2 text-sm font-bold text-gray-700">
              <span class="text-red-500">&nbsp;*</span>
              Upload Prescription
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input type="file" ref="fileInput" required>
            </div>
          </div>

          <button type="submit"
            class="block rounded border border-blue-500 px-6 pt-2.5 pb-2 text-md font-bold uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white ">
            Send
          </button>
        </form>
      </div>
    </div>
    <Thefooter />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      fullName: '',
      email: '',
      address: '',
      phone: '',
      imageUrl: '',
    }
  },
  methods: {
    async uploadPrescription() {
      const file = this.$refs.fileInput.files[0]
      const storageRef = this.$fire.storage.ref()
      const imageRef = storageRef.child(`images/${file.name}`)
      const snapshot = await imageRef.put(file)
      this.imageUrl = await snapshot.ref.getDownloadURL()

      this.$fire.firestore.collection('products').add({
        fullName: this.fullName,
        email: this.email,
        address: this.address,
        phone: this.phone,
        imageUrl: this.imageUrl,
      })
        .then(() => {
          alert('Prescription Uploaded successfully!')
          this.fullName = '',
            this.email = '',
            this.address = '',
            this.phone = '',
            this.$refs.fileInput.files = null,
            this.$router.push('/medicines')
        })
        .catch(error => {
          console.error(error)
          alert('Error in Upoading Prescription')
        })
    },

  }
}
</script>

<style scoped>
.center {
  text-align: center;
}

img.preview {
  width: 200px;
  margin: 0 auto;
}
</style>


