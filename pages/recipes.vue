<template>
    <div class="recipes">
        <h1 class="recipes__title">Подходящие рецепты для  вас!</h1>
      <div class="recipes-content">
        <p class="recipes-info">Найден 1 рецепт</p>
        <div class="recipes-cards">
          <nuxt-link to="/recipes1">

            <div class="recipes-card">
              <img src="/img/recipe1/main.jpg" alt="" class="recipes__img">
              <h3 class="recipes-card__title">
                <span to="specific-recipe" class="recipes-card__link">Деруны</span> </h3>
              <div class="recipes-card-info">
                <p class="recipes-card-item">10 ингрединетов</p>
                <p class="recipes-card-item">3 порции</p>
              </div>
              <p class="recipes-card-item right-bottom">25 мин</p>
            </div>
          </nuxt-link>
<!--          <nuxt-link to="specific-recipe">-->

<!--            <div class="recipes-card">-->
<!--              <img src="/img/card.png" alt="" class="recipes__img">-->
<!--              <h3 class="recipes-card__title">-->
<!--                <span to="specific-recipe" class="recipes-card__link">Сырники из творога</span> </h3>-->
<!--              <div class="recipes-card-info">-->
<!--                <p class="recipes-card-item">5 ингрединетов</p>-->
<!--                <p class="recipes-card-item">3 порции</p>-->
<!--              </div>-->
<!--              <p class="recipes-card-item right-bottom">30 мин</p>-->
<!--            </div>-->
<!--          </nuxt-link>-->
<!--          <nuxt-link to="specific-recipe">-->

<!--            <div class="recipes-card">-->
<!--              <img src="/img/card.png" alt="" class="recipes__img">-->
<!--              <h3 class="recipes-card__title">-->
<!--                <span to="specific-recipe" class="recipes-card__link">Сырники из творога</span> </h3>-->
<!--              <div class="recipes-card-info">-->
<!--                <p class="recipes-card-item">5 ингрединетов</p>-->
<!--                <p class="recipes-card-item">3 порции</p>-->
<!--              </div>-->
<!--              <p class="recipes-card-item right-bottom">30 мин</p>-->
<!--            </div>-->
<!--          </nuxt-link>-->
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: "recipes",
  data: () => ({
    mas: [123,3,3,3,3,3,1,1,1,1,1,1,1,1]
  }),
}
</script>

<style scoped>

</style>
