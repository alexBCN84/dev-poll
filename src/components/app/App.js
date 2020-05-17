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

  const questionFormProps = {
    onChangeRoute
  }

  function renderRoute() {
    switch(route){
      case QUESTIONS: 
        return <Questions {...questionsProps}/>;
        break;
      case QUESTION_DETAILS:
        return <QuestionDetails {...questionDetailsProps}/>;
        break;
      case QUESTION_FORM:
        return <QuestionForm {...questionFormProps}/>;
      default: 
      return <Questions {...questionsProps}/>
    }
  }

  return (
    <div className="app">
      { renderRoute() }
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
