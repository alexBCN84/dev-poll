import React, { useState } from 'react';

import { QUESTIONS } from '../../../utils/constants';
import { postQuestion } from '../../../utils/api';

import Headline from '../../../atoms/headline';
import Subline from '../../../atoms/subline';
import Header from '../../../components/header';
import Card from '../../../atoms/card';
import Button from '../../../atoms/button';
import Input from '../../../atoms/input';

export default function QuestionForm({onChangeRoute}) {
    const [question, setQuestion] = useState('');
    const [firstChoice, setFirstChoice] = useState('');
    const [secondChoice, setSecondChoice] = useState('');
    const [thirdChoice, setThirdChoice] = useState('');
    const [fourthChoice, setFourthChoice] = useState('');

    function handleOnChangeQuestion(e) {
        setQuestion(e.target.value);
    }

    function handleOnChangeChoice(e) {
        switch(e.target.name) {
            case 'first-choice':
                return setFirstChoice(e.target.value);
            case 'second-choice':
                return setSecondChoice(e.target.value);
            case 'third-choice':
                return setThirdChoice(e.target.value);
            case 'fourth-choice':
                return setFourthChoice(e.target.value);
            default:
                return null;
        }
    }

    function submit() {
        const data = {
            question,
            choices: [firstChoice, secondChoice, thirdChoice, fourthChoice]
        }
        postQuestion(data).then(data => {
            console.log(data)
            onChangeRoute(QUESTIONS);
        });
    }

    const headerProps = {route: QUESTIONS, onChangeRoute};

    return (
        <>
            <Header {...headerProps}/>
            <Headline>{'Ask a question'}</Headline>
            <form>
                <Card formCard>
                    <Subline as="label" formLabel>{'Enter your question'}</Subline>
                    <Input type="text" onChange={handleOnChangeQuestion} value={question} />
                    <br/>
                    <Subline as="label" formLabel>{'Add first choice'}</Subline>
                    <Input type="text" name="first-choice" onChange={handleOnChangeChoice} value={firstChoice}/>
                    <Subline as="label"  formLabel>{'Add second choice'}</Subline>
                    <Input type="text" name="second-choice"onChange={handleOnChangeChoice} value={secondChoice} />
                    <Subline as="label" formLabel>{'Add third choice'}</Subline>
                    <Input type="text" name="third-choice" onChange={handleOnChangeChoice} value={thirdChoice} />
                    <Subline as="label" formLabel>{'Add fourth choice'}</Subline>
                    <Input type="text" name="fourth-choice" onChange={handleOnChangeChoice} value={fourthChoice} />
                    <Button onClick={submit}>{'Submit'}</Button>
                </Card>
            </form>
            
        </>
    )  
}
