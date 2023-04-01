<template>
  <div>
    <!-- pass product to the ProductDeatils component as a named property -->
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id
  // fetch the product, with key to force new fetch
  const { data: product } = await useFetch(uri, {key: id})
  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>