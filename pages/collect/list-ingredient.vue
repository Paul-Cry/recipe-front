<template>
    <div class="list-ingredient">
        <ul class="list-ingredient-points">
            <li class="list-ingredient-points__item active"></li>
            <li class="list-ingredient-points__item"></li>
            <li class="list-ingredient-points__item"></li>
        </ul>
         <div class="list-components">
           <div class="list-ing-wrapper">
            <list-ing
              v-if="false"
            />
             <list-ing-countre
               v-if="false"
             />
             <list-ing-love
               v-if="true"
             />
           </div>
         </div>
    </div>
</template>
<script>export default {
  components: {}
}
</script>
