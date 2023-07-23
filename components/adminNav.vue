<template>
  <div class="">
    <div class=" flex flex-col p-3 w-60 h-screen fixed dark:bg-gray-900 dark:text-gray-100 border-r-2 border-gray-500">
      <div class="space-y-3">
        <div class="flex items-center justify-between border-b-2 border-gray-500 py-3">
          <a href="/admin">Dashboard</a>
          <button class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7 fill-current dark:text-gray-100">
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </button>
        </div>
        <div class="relative ">
          <span class="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" class="p-2 focus:outline-none focus:ring">
              <svg fill="currentColor" viewBox="0 0 512 512" class="w-5 h-5 dark:text-gray-400">
                <path
                  d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z">
                </path>
              </svg>
            </button>
          </span>
          <input type="search" name="Search" placeholder="Search..."
            class="w-full py-2 pl-10 text-md dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 ">
        </div>
        <div class="flex-1">
          <ul class="pt-2 pb-4 space-y-4 text-sm border-y-2 border-gray-500">
            <li class="rounded-sm  ">
              <nuxt-link to="/" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  class="w-5 h-5 fill-current dark:text-gray-400">
                  <path
                    d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z">
                  </path>
                </svg>
                <span>Home</span>
              </nuxt-link>
            </li>

            <li class="rounded-sm">
              <nuxt-link to="/admin/chat" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  class="w-5 h-5 fill-current dark:text-gray-400">
                  <path
                    d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z">
                  </path>
                  <path
                    d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z">
                  </path>
                </svg>
                <span>Chat</span>
              </nuxt-link>
            </li>
            <li class="rounded-sm">
              <nuxt-link to="/admin/orders" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">

                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="12" cy="12" r="9" stroke="#878787" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></circle>
                    <path
                      d="M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167"
                      stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M12 8L12 7" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                    <path d="M12 17V16" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                  </g>
                </svg>
                <span>Orders</span>
              </nuxt-link>
            </li>
            <li class="rounded-sm ">
              <nuxt-link to="/admin/userslist" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  class="w-5 h-5 fill-current dark:text-gray-400">
                  <path
                    d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z">
                  </path>
                </svg>
                <span>Users</span>
              </nuxt-link>
            </li>
            <li class="rounded-sm">
              <nuxt-link to="/admin/productlist" href="#"
                class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                <svg viewBox="0 0 1024 1024" fill="#b5b5b5" class=" w-5 h-5" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" stroke="#b5b5b5">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56zM344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6 16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32c-1.6 0.8-2.4 0.8-3.2 0.8z"
                      fill=""></path>
                  </g>
                </svg>
                <span>Products</span>
              </nuxt-link>
            </li>
            <li class="rounded-sm">
              <nuxt-link to="/admin/addproduct" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b5b5b5">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Edit / Add_Plus_Circle">
                      <path id="Vector"
                        d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </svg>

                <span>Add Product</span>
              </nuxt-link>
            </li>
            <li class="rounded-sm">
              <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  class="w-5 h-5 fill-current dark:text-gray-400">
                  <path
                    d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z">
                  </path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center p-2 mt-4 space-x-4 justify-self-end">
        <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="w-12 h-12 rounded-full dark:bg-gray-500">
        <div>
          <h2 class="text-lg font-semibold">User</h2>
          <span class="flex items-center space-x-1">
            <a rel="noopener noreferrer" href="#" class="text-xs hover:underline dark:text-gray-400">View profile</a>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>