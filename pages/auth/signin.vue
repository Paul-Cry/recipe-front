<template>
  <div class="sign">
    <div class="form-wrapper">
      <section class="form">
        <form action="/" method="post" class="form-content signin">
          <h1 class="form__title signin">Вход в систему </h1>
          <div class="form-inputs signin" >
            <div class="input form-item signin">
              <label for="gmail" required>Почта</label>
              <input class='input__item form-item__input' type="text" id="gmail" />
            </div>
            <div class="input form-item signin">
              <label for="password" required>Пароль</label>
              <input class='input__item form-item__input' type="text" id="password" />
            </div>
          </div>
          <button class="form__button button button__signin"> 
            <nuxt-link to="recipes"> Войти</nuxt-link>
          </button>
        </form>
        <div class="additional">
          <p class="additional__password">Забыли пароль?</p>
          <p class="additional__password"><nuxt-link to="signup">Зарегистрироваться</nuxt-link> </p>
        </div>
      </section>
    </div>

    <section class="images">
      <img src="/img/signup__back.jpg" alt="" class="signup__background">
      <img src="/img/signup__back1.jpg" alt="" class="signup__background">
    </section>
  </div>
</template>

<script>
export default {
  name: "signin",
  layout: 'clear'
}
</script>

<style scoped>

</style>
