import {
    HANDLE_SELECT_FLASHCARD_TOPIC,
    HANDLE_SHOW_BOX_CONTENT,
    HANDLE_PREVIOUS_FLASHCARD,
    HANDLE_NEXT_FLASHCARD
} from '../action/types.js';

const initialState = {
    selectTopicFlashCard: null,
    showFrontContent: true,
    showBackContent: false,
    activeFlashCard: 0,
}
const flashcardReducer = (state = initialState, action) => {
    switch (action.type){
        case HANDLE_SELECT_FLASHCARD_TOPIC:
            return {
                ...state,
                selectTopicFlashCard: action.payload,
                showFrontContent: true,
                showBackContent: false,
                activeFlashCard: 0,
            }
        case HANDLE_SHOW_BOX_CONTENT:
        case HANDLE_PREVIOUS_FLASHCARD:
        case HANDLE_NEXT_FLASHCARD:  
        default:
            return state;
    }
}
export default flashcardReducer;