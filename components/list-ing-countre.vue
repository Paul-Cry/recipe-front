<template>
  <div class="list countre">
    <ul class="list-ingredient-points mobil">
      <li class="list-ingredient-points__item active"></li>
      <li class="list-ingredient-points__item"></li>
      <li class="list-ingredient-points__item"></li>
    </ul>
    <div class="list-contenet">
      <h1 class="list__title">Давайте закрепим список колличеством
        ингредиентов  </h1>
      <p class="list__desk">Благодаря этой информации мы сможем
        правильно распределять рецепты по
        пропорциям</p>
    </div>
    <div class="list-stock">
      <div class="list-stocks countre">
        <div class="list-stocks-item" v-for="(element, i) in ingrs">
          <p class="list-stocks-item__name">{{element.name}}</p>
          <div class="list-value">
            <button class="list-value__button">+</button>
            <p class="list-value__text">{{element.counter}}</p>
            <button class="list-value__button">-</button>
          </div>
        </div>
      </div>
    </div>
     <div class="countre-buttons">
       <button class=" button countre__button ">Предыдущее</button>
       <button class=" button countre__button ">Дальше</button>
     </div>


  </div>

</template>



<script>
export default {
  name: 'IndexPage',
  computed:{

  },
  data:() => ({
      ingrs:[
        {
          name: 'Помидор',
          counter: 1
        },
        {
          name: 'Сахар',
          counter: 1
        }
      ]
  }),
  methods: {

  }
}
</script>
