import {
    HANDLE_SELECT_QUIZ,
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT_ANSWER,
    HANDLE_PREVIOUS_QUESTION,
    HANDLE_NEXT_QUESTION,
    HANDLE_SUBMIT_ALL,
} from '../action/types.js';

const initialState = {
    userAnswer: [],
    selectQuiz: null,
    submitAnswer: false,
    activeQuestionIndex: 0,
    showAnswer: false,
    showAllResults: false,
    results: { correct: 0, incorrect: [] }
}
const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SELECT_QUIZ:
            return {
                ...state,
                selectQuiz: action.payload,
                activeQuestionIndex: 0,
                userAnswer: [],
                submitAnswer: false,
                showAnswer: false,
                showAllResults: false,
                results: { correct: 0, incorrect: [] }
            };
        case HANDLE_INPUT_CHANGE:
            const { index, value } = action.payload;
            const newAnswers = [...state.userAnswer];
            newAnswers[index] = value;
            return {
                ...state,
                userAnswer: newAnswers,
            }
        case HANDLE_SUBMIT_ANSWER:
            const isCorrect = state.userAnswer[state.activeQuestionIndex] ===
                state.selectQuiz.content[state.activeQuestionIndex].answer;
            return {
                ...state,
                submitAnswer: true,
                showAnswer: !isCorrect,
            }
        case HANDLE_PREVIOUS_QUESTION:
            return {
                ...state,
                activeQuestionIndex:
                    Math.max(state.activeQuestionIndex - 1, 0),
                submitAnswer: false,
                showAnswer: false,
            }
            case HANDLE_NEXT_QUESTION:
                const currentAnswer = state.userAnswer[state.activeQuestionIndex];
                const isCurrentQuestionAnswered = currentAnswer !== undefined && currentAnswer !== '';
                if (!isCurrentQuestionAnswered) {
                  const newIncorrect = [
                    ...state.results.incorrect,
                    {
                      question: state.selectQuiz.content[state.activeQuestionIndex].question,
                      userAnswer: '',
                      correctAnswer: state.selectQuiz.content[state.activeQuestionIndex].answer,
                    },
                  ];
                  return {
                    ...state,
                    activeQuestionIndex: Math.min(
                      state.activeQuestionIndex + 1,
                      state.selectQuiz.content.length - 1
                    ),
                    submitAnswer: false,
                    showAnswer: false,
                    showAllResults: false,
                    results: {
                      ...state.results,
                      incorrect: newIncorrect,
                    },
                  };
                }
                return {
                  ...state,
                  activeQuestionIndex: Math.min(
                    state.activeQuestionIndex + 1,
                    state.selectQuiz.content.length - 1
                  ),
                  submitAnswer: false,
                  showAnswer: false,
                  showAllResults: false,
                };
        case HANDLE_SUBMIT_ALL:
            let correct = 0;
            let incorrect = [];
            state.selectQuiz.content.forEach((question, index) => {
                const userAnswer = state.userAnswer[index];
                const correctAnswer = question.answer
                if ( userAnswer === correctAnswer &&  userAnswer !== '' &&  userAnswer!== undefined) {
                    correct++;
                }
                else {
                    incorrect.push({
                        question: question.question,
                        userAnswer: userAnswer || '', 
                        correctAnswer: correctAnswer,
                    })
                }
            })
            return {
                ...state,
                results: { correct, incorrect },
                showAllResults: true,
            }
        default:
            return state;
    }

}
export default quizReducer;