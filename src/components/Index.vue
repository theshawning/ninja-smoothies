<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
}
</script>

<style lang="scss">
.index {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;

  & h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-top: 0;
  }

  & .ingredients {
    margin: 30px auto;

    & li {
      display: inline-block;
    }
  }

}
</style>