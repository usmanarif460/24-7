<template>
  <div>
    <navbar />
    <!-- Top SVG of Page -->
    <top-svg />
    <!-- Top Banner Of Every Page -->
    <top-header class="mb-64">About Us</top-header>
    <thefooter />
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