<template>
    <div class="list">
      <ul class="list-ingredient-points mobil">
        <li class="list-ingredient-points__item active"></li>
        <li class="list-ingredient-points__item"></li>
        <li class="list-ingredient-points__item"></li>
      </ul>
      <div class="list-contenet">
        <h1 class="list__title">Начнём знакомство </h1>
        <p class="list__desk">Это нам поможет вам подобрать самые подходящие для вас рецепты </p>
      </div>
      <div class="list-search">
        <h2 class="list__title">Какие ингрединеты есть у вас дома?</h2>
        <div class="list-search-input">
          <input type="text" class="list-search-input__item">
          <img src="/img/search__img.svg" alt="" class="list-search-input__img">
        </div>
        <div class="list-ings">
          <p class="list-ings__item">Свекла</p>
          <p class="list-ings__item">Соль</p>
          <p class="list-ings__item">Свекла</p>
          <p class="list-ings__item">Соль</p>
          <p class="list-ings__item">Свекла</p>
          <p class="list-ings__item">Соль</p>
          <p class="list-ings__item">Свекла</p>
          <p class="list-ings__item">Соль</p>
          <p class="list-ings__item">Свекла</p>
          <p class="list-ings__item">Соль</p>
          <p class="list-ings__item">Свекла</p>
          <p class="list-ings__item">Соль</p>
        </div>
      </div>
      <div class="list-stock">
        <h2 class="list__title">В наличии </h2>
        <div class="list-stocks">
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
          <div class="list-stocks-item">
            <p class="list-stocks-item__name">Томат</p>
            <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
          </div>
        </div>
      </div>
      <button class="list__button button" @click="$store.commit('collect/changePageCollect','list-ing-countre')">Дальше</button>

    </div>

</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  components: {},
  data: ()=>{
    return {
      page_collect: null
    }
  },
  methods:{
    ...mapMutations({
      changePageCollect : 'collect/changePageCollect'
    }),
    changePage: (data)=>{
      this.changePageCollect(data)
    }
  }

}
</script>
