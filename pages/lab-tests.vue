<template>
  <div>
    <navbar />
    <!-- Top Banner Of Every Page -->
    <top-svg />
    <top-header><span class="text-red-800 "> Lab-Tests</span> With Ease Of <br>Home Sampling</top-header>
    <div class="mt-[180px] mb-16 mx-auto w-11/12 grid grid-cols-1 gap-10">
      <div class="w-full">
        <div class="pt-16 res-content">
          <div class="grid gap-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">

            <div
              class="flex flex-col items-center justify-center gap-3 px-3 py-6 bg-white border rounded-md shadow-lg border-stone-300">

              <img class="w-8 h-8 mt-3 bg-blue-200 bg-cover"
                src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/trustlab_icon_1.png?v=1652272545" alt="">


              <p class="res-iconItem-heading">Trusted Labs </p>


              <p class="res-iconItem-desc">Every test booked via Wahab Pharmacy is conducted by <a
                  href="https://www.hashmanis.com.pk/"
                  style="text-decoration:none;color:#8897a2;font-weight:400"><u>Hashmanis</u> </a>Labs that are 100%
                verified and trustworthy.</p>

            </div>

            <div
              class="flex flex-col items-center justify-center gap-3 px-3 py-2 bg-white border rounded-md shadow-lg border-stone-300">

              <img class="w-8 h-8 mt-3 bg-blue-200 bg-cover"
                src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/home_icon_2.png?v=1652272572" alt="">


              <p class="res-iconItem-heading ">Home Visit </p>


              <p class="res-iconItem-desc">With Wahab Pharmacy, you get professional phlebotomists to pick-up the sample
                from
                your home or preferred location.</p>

            </div>

            <div
              class="flex flex-col items-center justify-center gap-3 px-3 py-2 bg-white border rounded-md shadow-lg border-stone-300">

              <img class="w-8 h-8 mt-3 bg-blue-200 bg-cover"
                src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/time_icon_1.png?v=1652272590" alt="">


              <p class="res-iconItem-heading">Timely and Accurate Reports </p>


              <p class="res-iconItem-desc">Once collected, samples are sent to labs for processing. Detailed reports are
                shared within a stipulated timeline.</p>

            </div>

            <div
              class="flex flex-col items-center justify-center gap-3 px-3 py-2 bg-white border rounded-md shadow-lg border-stone-300">

              <img class="w-8 h-8 mt-3 bg-blue-200 bg-cover"
                src="//cdn.shopify.com/s/files/1/0377/4899/8284/files/upto30_icon_1.png?v=1652272606" alt="">


              <p class="res-iconItem-heading">Up to 30% OFF </p>


              <p class="res-iconItem-desc">At Wahab Pharmacy, you save at every step! On diagnostic tests, get up to 30%
                off!
              </p>

            </div>

          </div>

        </div>

      </div>
      <div class="container py-8 mx-auto">
        <h1 class="pb-3 text-lg text-center text-blue-500 border-b-2 border-blue-100 md:text-3xl">Lab Tests List</h1>
        <lab-test :product="product" v-for="(product, index) in tests" :key="`${product.id}-product-${index}`">
        </lab-test>
      </div>
    </div>

    <thefooter />
  </div>
</template>

<script>
import labtest from '../components/labTest.vue';

export default {
  components: { labtest },
  data: () => ({
    tests: [],
    cart: [],
  }),
  async created() {
    const items = []
    await this.$fire.firestore.collection('tests').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        })

      });

      this.tests = items
    })
  },

};
</script>
<style scoped>
.res {
  margin: 2rem 0rem;
}

.res-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
}



.res-iconItem img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  align-self: center;
  padding: 2px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.res-iconItem-heading {
  /*   	margin-top:0.25rem; */
  font-weight: bold;
  font-weight: 16px;
  color: #4f585e;

}

.res-iconItem-desc {
  color: #8897a2;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
}

.res-content {
  max-width: 1640px;
  margin: auto;
}

@media screen and (max-width:1023px) {
  .res-iconItem {
    width: calc(98%/2);
  }

  .res-icons {
    flex-wrap: wrap;
  }
}
</style>

