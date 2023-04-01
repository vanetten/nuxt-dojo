<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <!-- loop through products -->
      <div v-for="p in products">
        <!-- pass p to the ProductCard component as a named property -->
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  // fetch the products, fired on the server and browser
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>