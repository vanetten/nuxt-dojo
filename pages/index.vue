<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Dojo</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>          
        </ul>
      </nav>
    </header>
    <h2>Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corrupti eius dignissimos porro quaerat mollitia tenetur enim vel laudantium maiores.
    </p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corrupti eius dignissimos porro quaerat mollitia tenetur enim vel laudantium maiores.
    </p>
  </div>
</template>

<script setup>

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