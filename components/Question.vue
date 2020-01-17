<template>
    <div id="questionsWrapper">
        <nuxt-link :to="{ name: 'questions-questionId', params: { questionId: id }}">
        <div id="mainWrapper">
            <h1>{{question}}</h1>
            <p> {{highAnswer}} Ranked: {{ranked}}</p>
        </div>
        </nuxt-link>
    </div>
</template>

<script>
import questions from '~/static/data.json'

export default {
    props: ["question", "id", "highAnswer", "ranked"],
}
</script>

<style scoped>
    #mainWrapper {
        width: 500px;
        display: flex;
        flex-direction: column;
        padding: 100px;
        margin: 20px;
        border: 3px solid #ccc;
        -webkit-box-shadow: -1px 15px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 15px 11px 0px rgba(0,0,0,0.75);
        box-shadow: -1px 15px 11px 0px rgba(0,0,0,0.75);
    }
    #questionsWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>