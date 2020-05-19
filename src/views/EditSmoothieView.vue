<template>
  <div class="home">
    <Navbar />
    <EditSmoothie />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import EditSmoothie from '@/components/EditSmoothie.vue'

export default {
  name: "EditSmoothieView",
  components: {
    Navbar,
    EditSmoothie
  }
};
</script>
