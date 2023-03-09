<template>
  <div>
    <div class="grid grid-cols-4 gap-5"></div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

//fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products"); //name data as products in this component
</script>

<style lang="scss" scoped></style>
