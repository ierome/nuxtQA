<template>
  <div class="container">
    <p class="title">Vehicle History Code Takehome</p>
    <p class="subtitle">Thank you for taking your time on viewing this</p>
    <nuxt-link to="/questions">
    <button class="buttonQuestions">View Questions</button>
    </nuxt-link>
  </div>
</template>

<script>

export default {
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.buttonQuestions {
  font-size: 25px;
  height: 40px;
  width: 300px;
  color: white;
  background-color: rgb(68, 155, 68);
  line-height: 30px;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
