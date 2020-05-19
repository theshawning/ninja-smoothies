<template>
  <div class="home">
    <Navbar />
    <AddSmoothie />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AddSmoothie from '@/components/AddSmoothie.vue'

export default {
  name: 'AddSmoothieView',
  components: {
    Navbar,
    AddSmoothie
  }
}
</script>