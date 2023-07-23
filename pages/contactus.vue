<template>
  <div>
    <navbar />
    <!-- Top SVG of Page -->
    <top-svg />
    <!-- Top Banner Of Every Page -->
    <top-header>Contact Us</top-header>
    <!-- Conatct Form -->
    <!-- Container for demo purpose -->
    <div class="container mx-auto mt-48 mb-64 md:px-6">
      <!-- Section: Design Block -->
      <section class="mt-24 ">
        <div class="py-12 md:px-12">
          <div class="container mx-auto xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div class="relative z-[10] block rounded-lg bg-white px-6 py-12 md:px-12 lg:-mr-14 shadow-lg">
                  <h2 class="p-2 mb-12 text-3xl font-bold text-center text-white bg-blue-500 rounded-lg animate-pulse">
                    Contact us</h2>
                  <form>
                    <div class="mb-8">
                      <label class="block mb-2 text-sm font-bold text-gray-700">
                        <span class="text-red-500">&nbsp;*</span>
                        Full Name
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <input type="text" placeholder="Enter Your Full Name" required
                          class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
                      </div>
                    </div>
                    <div class="mb-8">
                      <label class="block mb-2 text-sm font-bold text-gray-700">
                        <span class="text-red-500">&nbsp;*</span>
                        Email Address
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <input type="email" placeholder="Enter Your Email" required
                          class="block w-full px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600">
                      </div>
                    </div>
                    <div class="mb-8">
                      <label class="block mb-2 text-sm font-bold text-gray-700">
                        <span class="text-red-500">&nbsp;*</span>
                        Message
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <textarea type="text" placeholder="Enter Your Message" required
                          class="block w-full h-24 px-4 py-2 pr-10 mb-3 leading-tight text-gray-700 transition duration-500 ease-in-out border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600"></textarea>
                      </div>
                    </div>

                    <button type="button" data-te-ripple-init data-te-ripple-color="light"
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
      </section>
      <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
    <thefooter />
  </div>
</template>

