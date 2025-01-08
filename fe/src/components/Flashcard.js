import React from 'react'
import flashCardData from '../data/flashcard/Week5';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Flashcard.css';
import {
  handleSelectTopic,
  // handlePreviousFlashcard,
  // handleNextFlashcard,
} from '../redux/action/action';


export default function Flashcard() {
  const dispatch = useDispatch();
  const {
    selectTopicFlashCard: selectedTopic,
    showFrontContent,
    showBackContent,
    activeFlashCard
  } = useSelector((state) => state.flashcard);
  return (
    <div id='flashcard'>
      {!selectedTopic ? (
      <ul className='menu-topics'>
        {flashCardData.map((flashcard) => (
          <li key={flashcard.id} className='topic-flashcard'>
            <button onClick={() => dispatch(handleSelectTopic(flashcard))} className='btn-select'>
              <span className='topic-content topic-title'>{flashcard.titleFlashcard}</span>
              <span className='topic-content topic-level'>Level: {flashcard.level}</span>
              <span className='topic-content topic-type'>Type: {flashcard.type}</span>
            </button>
          </li>
        ))}
      </ul>
      ) : (
      <div className='flashcard-container'> 
          <h2>{selectedTopic.titleFlashcard}</h2>
          <ul>
              <li>{selectedTopic.vocabulary[activeFlashCard].write}</li>
          </ul>
          <ul>
            <li>{selectedTopic.vocabulary[activeFlashCard].hiragana}</li>
            <li>{selectedTopic.vocabulary[activeFlashCard].kanji}</li>
            <li>{selectedTopic.vocabulary[activeFlashCard].meaning}</li>
            <li>{selectedTopic.vocabulary[activeFlashCard].example}</li>
            <li>{selectedTopic.vocabulary[activeFlashCard].ex_meaning}</li>
          </ul>
          <ul>
            <li><button>Before</button></li>
            <li><button>Next</button></li>
          </ul>
      </div>
      )}
    </div>
  )
}
