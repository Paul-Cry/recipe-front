<template>
  <div>
    <div class="spec-ingr-items" v-for="element in ingr">
      <p class="spec-ingr-items__name">{{element.name}}</p>
      <hr class="spec-ingr-items__line">
      <p class="spec-ingr-items__value">{{element.value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "spec-ingr-items",
  data: ()=>({
    ingr: [
      {
        name: 'Творог',
        value: '500 г'
      },
      {
        name: 'Куриное яйцо',
        value: '2 штуки'
      },
      {
        name: 'Пшеничная мука',
        value: '6 столовые ложки'
      },
      {
        name: 'Подсолнечное масло',
        value: '2 столовые ложки'
      },
      {
        name: 'Сахар',
        value: '2 столовые ложки'
      }
    ]
  })
}
</script>

<style scoped>

</style>
