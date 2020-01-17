<template>
    <div class="container">
        <div class="centeredContainer">
            <h1>{{grabbedQuestion.question}}</h1>
            <li v-for="answer in grabbedQuestion.answers" :key="answer.id">{{answer.answer}} ranked at {{answer.rank}}</li>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        grabbedQuestion() {
            return this.$store.state.questions.question
        }
    },
    beforeCreate() {
         this.$store.commit('questions/setQuestion', this.$route.params.questionId)
    },
}
</script>

<style scoped>
    .centeredContainer {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
</style>