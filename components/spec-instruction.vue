<template>
<div>
  <div class="spec-instruction-item" v-for="(element, index) in mas">
    <img src="/img/imag_inst.png" alt="" class="spec-instruction-item__image">
    <p class="spec-instruction-item__text"><b>{{++index}}</b> {{element.desk}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "spec-instruction",
  data: ()=>({
    mas: [{
      desk:' Положите весь творог в кастрюльку и разомните его вилкой так, чтобы в нем не осталось крупных комков. Разбейте в него яйца, всыпьте сахар и тщательно все перемешайте. Лучше не использовать слишком сухой или слишком  влажный творог, иначе сырники будут разваливаться в процессе приготовления.'

    },
      {
        desk:' Положите весь творог в кастрюльку и разомните его вилкой так, чтобы в нем не осталось крупных комков. Разбейте в него яйца, всыпьте сахар и тщательно все перемешайте. Лучше не использовать слишком сухой или слишком  влажный творог, иначе сырники будут разваливаться в процессе приготовления.'

      },
      {
        desk:' Положите весь творог в кастрюльку и разомните его вилкой так, чтобы в нем не осталось крупных комков. Разбейте в него яйца, всыпьте сахар и тщательно все перемешайте. Лучше не использовать слишком сухой или слишком  влажный творог, иначе сырники будут разваливаться в процессе приготовления.'

      },
    ]
  })
}
</script>

<style scoped>

</style>
