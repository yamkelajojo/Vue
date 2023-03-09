<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi eum
      enim expedita quos cum delectus provident quaerat quia quidem nam dolores,
      cumque facilis ad magni non recusandae numquam officiis.12
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
