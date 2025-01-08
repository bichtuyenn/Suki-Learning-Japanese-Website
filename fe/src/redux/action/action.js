import * as types from './types'

export const handleSelectQuiz = (quiz) => ({
    type: types.HANDLE_SELECT_QUIZ,
    payload: quiz,
})
export const handleInputChange = (index,value) => ({
    type: types.HANDLE_INPUT_CHANGE,
    payload: {index, value},
})
export const handleSubmitAnswer = () => ({
    type: types.HANDLE_SUBMIT_ANSWER,
})
export const handlePreviousQuestion = () => ({
    type: types.HANDLE_PREVIOUS_QUESTION,
})
export const handleNextQuestion = () => ({
    type: types.HANDLE_NEXT_QUESTION,
})
export const handleSubmitAll= () => ({
    type: types.HANDLE_SUBMIT_ALL,
})
