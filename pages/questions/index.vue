<template>
<div>
  <Filters />
  <Question 
  v-for="question in filteredQuestions"
  :key="question.id"
  :question="question.question"
  :highAnswer="question.highRank.answer"
  :ranked="question.highRank.rank"
  :id="question.id"
  />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import questions from '~/static/data.json'
import Question from '@/components/Question'
import Filters from '@/components/Filters'

export default {
  computed: {
    grabbedQuestions () {
      return this.$store.state.questions.questions
    },
    grabbedFilters() {
      return this.$store.state.questions.filters
    },
    filteredQuestions() {
      return this.$store.state.questions.filteredQuestions
    }
  },
  components: {
    Logo,
    Question,
    Filters,
  },
  asyncData ({ params }) {
    return { questions }
  },
  mounted() {
    this.$store.commit('questions/load', questions)
  },
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
</style>
