import {
    HANDLE_SELECT_FLASHCARD_TOPIC,
    HANDLE_SHOW_BOX_CONTENT,
    HANDLE_PREVIOUS_FLASHCARD,
    HANDLE_NEXT_FLASHCARD
} from '../action/types.js';

const initialState = {
    selectTopicFlashCard: null,
    showFrontContent: true,
    activeFlashCard: 0,
}
const flashcardReducer = (state = initialState, action) => {
    switch (action.type){
        case HANDLE_SELECT_FLASHCARD_TOPIC:
            return {
                ...state,
                selectTopicFlashCard: action.payload,
                showFrontContent: true,
                activeFlashCard: 0,
            }
        case HANDLE_SHOW_BOX_CONTENT:
            return {
                ...state,
                showFrontContent: !state.showFrontContent
            }
        case HANDLE_PREVIOUS_FLASHCARD:
            return {
                ...state,
                activeFlashCard:
                    Math.max(state.activeFlashCard - 1, 0),
                showFrontContent: true,
            }
        case HANDLE_NEXT_FLASHCARD:  
            return {
                ...state,
                activeFlashCard: 
                    Math.min(state.activeFlashCard + 1, state.selectTopicFlashCard.vocabulary.length - 1),
                showFrontContent: true,    
            }
        default:
            return state;
    }
}
export default flashcardReducer;