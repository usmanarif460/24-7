
<template>
  <div id="nav">
    <navbar />
    <top-svg></top-svg>
    <div class="w-full px-12 pt-2 mb-64 bg-design">

      <div class="mt-[-400px] max-w-2xl mx-auto">
        <div class="flex justify-center mt-24 mb-2 bg-white rounded ">
          <span class="p-3 text-3xl font-bold text-blue-500 ">
            Sign-Up
          </span>

        </div>

        <div class="px-8 pt-6 pb-8 mb-16 bg-white rounded shadow-2xl">
          <form method="POST" @submit.prevent="registerUser">
            <input type="hidden" name="remember" value="true">
            <div class="grid-cols-2 gap-8 md:grid">
              <div class="mb-8">
                <label for="fistName" class="block mb-2 text-sm font-bold text-gray-700">
                  <span class="text-red-500">&nbsp;*</span>
                  First Name
                </label>
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input name="firstName" id="firstName" type="text" placeholder="First Name" v-model="firstName"
                    required
                    class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
                </div>
              </div>
              <div class="mb-8">
                <label for="lastName" class="block mb-2 text-sm font-bold text-gray-700">
                  <span class="text-red-500">&nbsp;*</span>
                  Last Name
                </label>
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input name="lastName" id="lastName" type="text" placeholder="Last Name" v-model="lastName" required
                    class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
                </div>
              </div>
            </div>
            <div class="mb-8">
              <label for="email" class="block mb-2 text-sm font-bold text-gray-700">
                <span class="text-red-800">&nbsp;*</span>
                Email Address ( <strong class="text-sm italic text-red-500">email is required )</strong>
              </label>
              <div class="relative mt-1 rounded-md shadow-sm">

                <input id="email" type="email" name="email" v-model="email" placeholder="you@gmail.com" required
                  class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" />
              </div>

            </div>

            <div class="mb-8">
              <label for="password" class="block mb-2 text-sm font-bold text-gray-700">
                <span class="text-red-500">&nbsp;*</span>
                Password
              </label>
              <div class="relative mt-1 rounded-md shadow-sm">

                <input name="password" id="password" type="password" placeholder="**********" v-model="password" required
                  class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
              </div>
            </div>

            <div class="mb-6">
              <div class="flex items-center justify-between">
                <div>
                  <label class="block font-bold text-gray-500" for="remember">
                    <input class="ml-2 leading-tight" type="checkbox" id="remember" name="remember">
                    <span class="text-sm">
                      remember me
                    </span>
                  </label>
                </div>
                
              </div>
            </div>

            <div class="mb-4 text-center">
              <button
                class="px-4 py-2 font-bold text-white transition duration-500 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit">
                Register
              </button>
            </div>
            <hr>
            <div class="mt-3">
              <p class="text-sm text-center">
                Already have an account?
                <nuxt-link to="/login" class="pl-3 text-lg italic font-bold text-blue-500 hover:text-blue-600">
                  Login
                </nuxt-link>
              </p>
            </div>
          </form>
          


        </div>
      </div>
    </div>
    <thefooter />
  </div>
</template>
<script>
export default {

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }),
  methods: {
    registerUser() {

      this.$fire.auth.createUserWithEmailAndPassword(
        this.email,
        this.password,
      )
        .then(async (userCredential) => {
          await this.$fire.firestore.collection("users").doc(userCredential.user.uid).set({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            createdAt: new Date()
          })
          this.firstName = '',
            this.lastName = '',
            this.email = '',
            this.password = '',
            this.$router.push('/')
        })
        .catch((e) => alert(e.message))
    },
  }

}
</script>

<style scoped>
.bg-design {
  backdrop-filter: saturate(200%) blur(25px);
}
</style>