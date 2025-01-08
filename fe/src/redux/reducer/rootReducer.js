
import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import flashcardReducer from './flashcardReducer';

const rootReducer = combineReducers({
  quiz: quizReducer,
  flashcard: flashcardReducer,
});

export default rootReducer;