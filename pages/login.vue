<template>
  <div id="nav">
    <navbar />
    <top-svg />
    <div class="w-full px-12 pt-2 mb-64 bg-design">

      <div class=" mt-[-400px] max-w-2xl mx-auto">
        <div class="flex justify-center mt-24 mb-2 bg-white rounded">
          <span class="p-3 text-3xl font-bold text-blue-500 ">
            Sign-in
          </span>

        </div>

        <div class="px-8 pt-6 pb-8 mb-16 bg-white rounded shadow-2xl">
          <form method="POST" @submit.prevent="loginUser">
            <div class="mb-8">
              <label for="username" class="block mb-2 text-sm font-bold text-gray-700">
                <span class="text-red-800">&nbsp;*</span>
                Email Address ( <strong class="text-sm italic text-red-500">email is required )</strong>
              </label>
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg fill="#000000" class="h-7 w-7" viewBox="0 0 32 32" xmlns="http://www.w3/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M5 24.225V7.776h22v16.447H5v.002zm3.011-1.815h15.978l-5.111-5.115L16 20.179l-2.877-2.883-5.112 5.114zm-1.216-1.275l5.077-5.09-5.077-5.065v10.155zm13.332-5.09l5.079 5.09V10.979l-5.079 5.066zm-4.126 1.588l8.022-8.027-16.045-.001 8.023 8.028z">
                      </path>
                    </g>
                  </svg>
                </div>
                <input id="email" type="email" v-model="email" placeholder="you@gmail.com" required
                  class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-orange-100 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" />
              </div>

            </div>

            <div class="mb-8">
              <label for="password" class="block mb-2 text-sm font-bold text-gray-700">
                <span class="text-red-500">&nbsp;*</span>
                Password
              </label>
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="w-6 h-6 text-black" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
                <input name="password" id="password" type="password" placeholder="**********" v-model="password" required
                  class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-orange-100 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
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
                <div>
                  <a class="text-sm font-bold text-blue-700 hover:text-blue-900" href="#password-request">
                    forgot password
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-4 text-center">
              <button
                class="px-4 py-2 font-bold text-white transition duration-500 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit">
                Login
              </button>
            </div>
            <hr>
            <div class="mt-3">
              <p class="text-sm text-center">
                Don't have an account
                <nuxt-link to="/signup" class="pl-3 text-lg italic font-bold text-blue-500 hover:text-blue-600">
                  sign up
                </nuxt-link>
              </p>
            </div>
          </form>


        </div>
      </div>
    </div>
    <thefooter />
  </div>
  <!-- <div class="flex items-center justify-center min-h-full px-4 py-12 login-box sm:px-6 lg:px-8 ">
    <div class="w-full max-w-md space-y-8">

      <form class="space-y-6 bg-gray-100 shadow-2xl  p-9" @submit.prevent="loginUser">
        <input type="hidden" name="remember" value="true">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="mb-2">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required
              class="relative block w-full px-3 py-2 mb-6 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address" v-model="email">
          </div>
          <div>
            <label for="password" class="mb-2">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="relative block w-full px-3 py-2 mb-6 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password" v-model="password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
            <label for="remember-me" class="block ml-2 text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 text-indigo-200 w-15 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Login
          </button>
        </div>
      </form>
      <div class="container flex justify-center ">
        <button class="p-2 bg-indigo-600 rounded-md text-yellow-50" @click="googleSignIn">SignIn With Google</button>
      </div>
    </div>
  </div> -->
</template>

<script>

export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    loginUser() {
      this.$fire.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      )
        .then(() => {
          this.email = '',
            this.password = '',
            this.$router.push("/")
        })
        .catch((e) => alert(e))

    },
    googleSignIn() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => alert(error.message))
    },
  }
};
</script>

<style scoped>
.bg-design {
  backdrop-filter: saturate(200%) blur(25px);
}
</style>