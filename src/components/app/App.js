import React, { useState } from 'react';

import Questions from '../pages/questions';
import QuestionDetails from '../pages/question-details';
import QuestionForm from '../pages/question-form';
import { QUESTIONS, QUESTION_DETAILS, QUESTION_FORM } from '../../utils/constants';

import './App.css';

function App() {
  const [route, setRoute] = useState(QUESTIONS);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  function onChangeRoute(route) {
    setRoute(route);
  }
  
  const questionsProps = {
    onChangeRoute,
    setSelectedQuestion
  }
  const questionDetailsProps = {
    onChangeRoute,
    selectedQuestion
  }

  return (
    <div className="app">
      { route === QUESTIONS && <Questions {...questionsProps}/> }
      { route === QUESTION_DETAILS && <QuestionDetails {...questionDetailsProps}/> }
      { route === QUESTION_FORM && <QuestionForm changeRoute={onChangeRoute}/> }
      <footer>
        {'Powered by'}
        <a href=" http://docs.pollsapi.apiary.io/" alt="polls api">
            {' Polls API'}
        </a>
    </footer>

    </div>
  );
}

export default App;
