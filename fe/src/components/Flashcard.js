import React from 'react'
import flashCardData from '../data/flashcard/Week5';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Flashcard.css';
import imgNext from '../assets/icons/next.svg';
import imgPre from '../assets/icons/back.svg';
import {
  handleSelectTopic,
  handleShowFlashcard,
  handlePreviousFlashcard,
  handleNextFlashcard,
} from '../redux/action/action';


export default function Flashcard() {
  const dispatch = useDispatch();
  const {
    selectTopicFlashCard: selectedTopic,
    showFrontContent,
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
         <div className='flashcard_box_title'>
            <h2 className='flashcard_title'>{selectedTopic.titleFlashcard}</h2>
         </div>
        {showFrontContent? (
          <div className='card flashcard-front'>
              <button className='btn-flashcard' onClick={() => dispatch(handleShowFlashcard())}>{selectedTopic.vocabulary[activeFlashCard].write}</button>
          </div>
          ) : (
          <div className='card flashcard-back'>
            <button className='btn-flashcard' onClick={() => dispatch(handleShowFlashcard())}>
              <span className='title-h1'>{selectedTopic.vocabulary[activeFlashCard].hiragana}</span>
              <span className='title-h2'>{selectedTopic.vocabulary[activeFlashCard].kanji}</span>
              <span className='title-h3'>{selectedTopic.vocabulary[activeFlashCard].meaning}</span>
              <span className='title-h4'>{selectedTopic.vocabulary[activeFlashCard].example}</span>
              <span className='title-h5'>{selectedTopic.vocabulary[activeFlashCard].ex_meaning}</span>
            </button>
          </div>
          )}
          <div className='option-slide'>
              <div className='option-slide__previous'>
                  <button onClick={() => dispatch(handlePreviousFlashcard())}><img className='img' src={imgPre}/></button>
              </div>
              <div className='option-slide__current'>
                  <div className='title'>{activeFlashCard + 1} / {selectedTopic.vocabulary.length}</div>
              </div>
              <div className='option-slide__next'>
                  <button onClick={() => dispatch(handleNextFlashcard())}><img className='img' src={imgNext}/></button>
              </div>
          </div>
      </div>
      )}
    </div>
  )
}
