<template>
    <div class="list-ingredient">
        <ul class="list-ingredient-points">
            <li class="list-ingredient-points__item active"></li>
            <li class="list-ingredient-points__item"></li>
            <li class="list-ingredient-points__item"></li>
        </ul>
         <div class="list-components">

             <div class="list-ing-wrapper">
               <transition name="fade">
               <div
                 v-if="page_collect === 'list-ing'"
                 key="list-ing">
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
                   <button class="list__button button" @click="page_collect = 'list-ing-countre'">Дальше</button>

                 </div>
               </div>
               <div
                 v-if="page_collect === 'list-ing-countre'"
                 key='list-ing-countre'>
                 <div class="list countre">
                   <ul class="list-ingredient-points mobil">
                     <li class="list-ingredient-points__item "></li>
                     <li class="list-ingredient-points__item active"></li>
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
                     <button class=" button countre__button " @click="page_collect = 'list-ing'">Предыдущее</button>
                     <button class=" button countre__button" @click="page_collect = 'list-ing-love'" >Дальше</button>
                   </div>


                 </div>
               </div>
               <div
                 v-if="page_collect === 'list-ing-love'"
                 key='list-ing-love'>
                 <div class="list love">
                   <ul class="list-ingredient-points mobil">
                     <li class="list-ingredient-points__item "></li>
                     <li class="list-ingredient-points__item "></li>
                     <li class="list-ingredient-points__item active"></li>
                   </ul>
                   <div>
                     <div class="list-contenet">
                       <h1 class="list__title">Какие кухни  вам  больше по душе? </h1>
                       <p class="list__desk">Благодаря этой информации рецепты будут
                         расположены по приоритетам</p>
                     </div>
                     <div class="list-search">
                       <div class="list-search-input">
                         <input type="text" class="list-search-input__item">
                         <img src="/img/search__img.svg" alt="" class="list-search-input__img">
                       </div>

                     </div>
                     <div class="list-stock">
                       <div class="list-stocks">
                         <div class="list-stocks-item">
                           <p class="list-stocks-item__name">Русская кухня</p>
                           <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
                         </div>
                         <div class="list-stocks-item">
                           <p class="list-stocks-item__name">Казахская кухня</p>
                           <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
                         </div>
                         <div class="list-stocks-item">
                           <p class="list-stocks-item__name">Японская кухня</p>
                           <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
                         </div>
                         <div class="list-stocks-item">
                           <p class="list-stocks-item__name">Корейская кухня</p>
                           <img src="/img/delete.svg" alt="" class="list-stocks-item__delete">
                         </div>

                       </div>
                     </div>
                   </div>
                   <div class="list-last">
                     <h2 class="list__title">Последний штрих </h2>
                     <p class="list__desk">Выберете имеющиюся бытовую технику</p>
                     <div class="list-last-items">
                       <div class="list-last-item">
                         <input type="checkbox" name="list-last" id="mic" class="list-last__input">
                         <span class="list-last__text">Микроволновка</span>
                       </div>
                       <div class="list-last-item">
                         <input type="checkbox" name="list-last" id="sh" class="list-last__input">
                         <span class="list-last__text">Духовая шкаф </span>
                       </div>
                       <div class="list-last-item">
                         <input type="checkbox" name="list-last" id="pl" class="list-last__input">
                         <span class="list-last__text">Плита</span>
                       </div>
                     </div>
                   </div>
                   <button class="list__button button last">
                     <nuxt-link to="/recipes">Искать</nuxt-link>
                   </button>
                 </div>
               </div>
               </transition>
           </div>

         </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  mounted() {
  },
  components: {},
  data: ()=>{
    return {
      ingrs:[
        {
          name: 'Помидор',
          counter: 1
        },
        {
          name: 'Сахар',
          counter: 1
        }
      ],
      page_collect: 'list-ing',
    }
  },
  methods:{
    changePage: (data)=>{
      this.changePageCollect(data)
    }
  }

}
</script>
