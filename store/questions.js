  // Setting the initial state
  export const state = () => ({
    questions: [],
    filters: [],
    filteredQuestions: [],
    question: {}
  })
  
  // Defining the mutation methods
  export const mutations = {
    // Just setting the questions in the state.
    // The reason why I used questions and filteredQuestions is in the case if the filters were empty, It would revert back to the original questions.
    load(state, questions) {
        const newQuestions = []

        function findRank(acc, val) {
            if (val.rank > acc.rank) {
                acc = val
            }
            return acc;
        }
        questions.forEach(question => {
            let newQ = question.answers.reduce(findRank)
            question.highRank = newQ
            newQuestions.push(question)
        })
        state.filteredQuestions = newQuestions
        state.questions = newQuestions
    },
    filter(state, filters) {
        const filterSet = []
        filters.forEach(filter => {
            if (filter.enabled) {
                filterSet.push(filter)
            }
        })
        state.filters = filterSet
    },
    filterQuestions(state, filters) {
        const questions = state.questions
        const newQ = []

        if (filters.length > 0) {
            questions.forEach(question => {
                let counter = 0
    
                filters.forEach(filter => {
                    if (question.tags.includes(filter.tag)) {
                        counter++
                    }
                })
                if (counter === filters.length) {
                    newQ.push(question)
                }
            })
            state.filteredQuestions = newQ
        } else {
            state.filteredQuestions = questions
        }
    },
    setQuestion(state, id) {
        const newQ = state.questions.find(question => question.id === id)
        console.log(newQ)
        console.log(state.questions)
        state.question = newQ
    }
  }