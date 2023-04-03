<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corrupti eius dignissimos porro quaerat mollitia tenetur enim vel laudantium maiores.
    </p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corrupti eius dignissimos porro quaerat mollitia tenetur enim vel laudantium maiores.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario')
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {age: 30}
  // })
  const { data } = await useFetch('/api/ninja')
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>