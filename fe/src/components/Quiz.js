import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlphabetQuiz from '../data/AlphabetQuiz';
import Header from './Header';
import Footer from './Footer';
import '../css/Quiz.css';
import {
  handleSelectQuiz,
  handleInputChange,
  handleSubmitAnswer,
  handlePreviousQuestion,
  handleNextQuestion,
  handleSubmitAll,
} from '../redux/action/action';

export default function Quiz() {
  const dispatch = useDispatch();
  const {
    userAnswer,
    selectQuiz: selectedQuiz,
    submitAnswer: isSubmitAnswer,
    activeQuestionIndex,
    showAnswer,
    showAllResults,
    results,
  } = useSelector((state) => state.quiz);

  return (
    <>
      <Header />
      <div className='quiz-container'>
        <div id='quiz'>
          {showAllResults ? (
            <div className='final-result'>
              <h3 className='result-title'>Results</h3>
              <p className='result-total'>Your result : {results.correct}/{selectedQuiz.content.length} points</p>
              <ul className='table-result'>
                {results.incorrect.map((item, index) => (
                  <li key={index}>
                    <p className='result-item'>Question: {item.question}</p>
                    <p className='result-item color-red'>Your Answer: {item.userAnswer}</p>
                    <p className='result-item color-green'>Correct Answer: {item.correctAnswer}</p>
                  </li>
                ))}
              </ul>
              <button className='btn btn-done'><a href='/quiz'>Done</a></button>
            </div>
          ) : (
            <>
              {!selectedQuiz ? (
                <ul className='quiz-topics'>
                  <h2 className='quiz-choose'>Choose a topic quiz !</h2>
                  <div className='all-topics'>
                    {AlphabetQuiz.map((topic) => (
                      <li key={topic.id} className='topic'>
                        <button
                          onClick={() => dispatch(handleSelectQuiz(topic))}
                          className='quiz-topic-button'
                        >
                          {topic.title}
                        </button>
                      </li>
                    ))}
                  </div>
                </ul>
              ) : (
                <div>
                  <h2 className='quiz-choose'>What word is this?</h2>
                  <ul>
                    <h3 className='quiz-question'>{selectedQuiz.content[activeQuestionIndex].question}</h3>
                    <span className='user-answer'>
                      <input
                        type='text'
                        className='answer-input'
                        placeholder='Enter your answer'
                        value={userAnswer[activeQuestionIndex] || ''}
                        onChange={(e) => dispatch(handleInputChange(activeQuestionIndex, e.target.value))}
                      />
                      <button className='btn-submit' onClick={() => dispatch(handleSubmitAnswer())}>
                        Submit
                      </button>
                    </span>

                    {isSubmitAnswer && (
                      <p className='result-question'>
                        {showAnswer ? (
                          <span className='result-true-false false'> Incorrect!</span>
                        ) : (
                          <span className='result-true-false'>Correct!</span>
                        )}
                      </p>
                    )}
                    <ul className='menu-btn'>
                      <button
                        onClick={() => dispatch(handlePreviousQuestion())}
                        disabled={activeQuestionIndex === 0}
                        className='btn'
                      >
                        Before
                      </button>
                      <button
                        onClick={() => dispatch(handleNextQuestion())}
                        disabled={activeQuestionIndex === selectedQuiz.content.length - 1}
                        className='btn'
                      >
                        Next
                      </button>
                    </ul>
                    {activeQuestionIndex === selectedQuiz.content.length - 1 && (
                      <button className='submit-all' onClick={() => dispatch(handleSubmitAll())}>
                        Submit All
                      </button>
                    )}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}