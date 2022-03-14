<template>
<div class="specific-recipe">
  <h3 class="spec__title">Сырники из творога</h3>
  <div class="spec-dop-info">
    <p class="spec-dop-info__item">3 порции</p>
    <p class="spec-dop-info__item">5 ингрединетов</p>
    <p class="spec-dop-info__item">30 мин</p>
  </div>
  <div class="spec-description">
    <img src="/img/spec-image.png" alt="" class="spec-description__img">
    <p class="spec-description__text">
      Главный секрет идеальных сырников — а точнее творожников,
      — творог нужно протереть через мелкое сито и отжать от влаги. Жирность предпочтительна не больше и не меньше 9%. Тесто должно получиться эластичным, чтобы при надавливании сырник не треснул на сковородке, а сохранил форму. Если все сделать правильно, получатся нежные однородные кругляшки под плотной румяной корочкой. Сырники можно запекать в духовке или готовить на пару. В рецепте не исключаются эксперименты
      с начинкой — сухофрукты, орехи, свежие фрукты и даже картофель лишними не будут.
    </p>
  </div>
  <div class="spec-ingr">
    <h4 class="spec__subtitle">ИНГРЕДИЕНТЫ</h4>
    <div class="spec-ingr-content">
      <spec-ingr-items></spec-ingr-items>
    </div>
  </div>
  <div class="spec-instruction">
    <h4 class="spec__subtitle">ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ</h4>
    <div class="spec-instruction-content">
      <spec-instruction></spec-instruction>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "specific-recipe",

}
</script>

<style scoped>

</style>
