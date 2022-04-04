<template>
  <nuxt-link to="specific-recipe">
    
    <div class="recipes-card">
      <img src="/img/card.png" alt="" class="recipes__img">
      <h3 class="recipes-card__title">
        <span to="specific-recipe" class="recipes-card__link">Сырники из творога</span> </h3>
      <div class="recipes-card-info">
        <p class="recipes-card-item">5 ингрединетов</p>
        <p class="recipes-card-item">3 порции</p>
      </div>
      <p class="recipes-card-item right-bottom">30 мин</p>
    </div>
  </nuxt-link>
 
</template>

<script>
export default {
  name: "card-recipes"
}
</script>

<style scoped>

</style>
