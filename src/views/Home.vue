<template>
  <div class="home">
    <Navbar />
    <Index />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Index from '@/components/Index.vue'

export default {
  name: "Home",
  components: {
    Navbar,
    Index
  }
};
</script>
