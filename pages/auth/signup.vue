<template>
  <div class="sign">
    <div class="form-wrapper">
      <section class="form">
        <form action="/" method="post" class="form-content">
          <h1 class="form__title">Создание вашего аккаунта </h1>
          <div class="form-inputs" >
            <div class="input form-item">
              <label for="lastname" required>Фамилия Имя </label>
              <input class='input__item form-item__input' type="text" id="lastname" />
            </div>
            <div class="input form-item">
              <label for="gmail" required>Почта</label>
              <input class='input__item form-item__input' type="text" id="gmail" />
            </div>

            <div class="input form-item">
              <label for="password" required>Пароль</label>
              <input class='input__item form-item__input' type="text" id="password" />
            </div>
            <div class="input form-item">
              <label for="repassword" required>Повтор пароля</label>
              <input class='input__item form-item__input' type="text" id="repassword" />
            </div>
          </div>
          <button class="form__button button">
            Создать личный аккаунт
          </button>
        </form>
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
  name: "signup",
  layout: 'clear'
}
</script>

<style >

</style>
