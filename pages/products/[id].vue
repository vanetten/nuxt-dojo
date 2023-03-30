<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia recusandae deleniti itaque! Quibusdam, autem eligendi voluptas atque quo nam?</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params

  definePageMeta({
    layout: 'products'
  })

</script>

<style lang="scss" scoped>

</style>