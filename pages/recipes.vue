<template>
    <div class="recipes">
        <h1 class="recipes__title">Подходящие рецепты для  вас!</h1>
      <div class="recipes-content">
        <p class="recipes-info">Найдено 652 рецепта</p>
        <div class="recipes-cards">
          <recipes-card v-for="element in mas"></recipes-card>
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
