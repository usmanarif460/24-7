<template>
  <div class=" mx-auto px-6  xl:px-32 mb-6 z-20">
      <div class="animate-bounce  mt-[-340px] block px-6 py-6 md:py-2  ">
        <span
          class="animate-pulse text-3xl md:text-5xl lg-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:display-none text-white">
        <slot></slot>
        </span>
      </div>
    </div>
</template>

<style scoped>
.animate-bounce {
  animation: bounce 1s;
}

@keyframes bounce {

  0% {
    transform: translatex(-100%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translatex(0%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  75% {
    transform: translatex(25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  100% {
    transform: translatex(0%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
