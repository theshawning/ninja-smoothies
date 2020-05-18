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
  },
  data() {
    return {
      smoothies: [
        {title: 'Ninja Brew', 
        slug: 'ninja-brew', 
        ingredients: ['bananas', 'coffee', 'milk'],
        id: 1},
        {title: 'Morning Mood', 
        slug: 'morning-mood', 
        ingredients: ['mango', 'lime', 'juice'],
        id: 2}
      ]
    }
  }
};
</script>
