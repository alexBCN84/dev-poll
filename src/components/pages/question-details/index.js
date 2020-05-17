import React, { useEffect, useState } from 'react';

import { 
    getQuestionDetails, 
} from '../../../utils/api';
import { QUESTION_FORM } from '../../../utils/constants';

import DetailsCard from '../../details-card';
import Headline from '../../../atoms/headline';
import Subline from '../../../atoms/subline';
import Header from '../../../components/header';

export default function QuestionDetails({onChangeRoute, selectedQuestion}) {
    const [questionDetails, setQuestionDetails] = useState({});

    useEffect(()=> {
        getQuestionDetails(selectedQuestion).then(data => setQuestionDetails(data));
    }, [selectedQuestion,setQuestionDetails])

    const { question, choices } = questionDetails;
    const detailsCardProps = {choices, onChangeRoute}

    const headerProps = {route: QUESTION_FORM, onChangeRoute};
    
    return (
        <div data-cy="question-details-view">
            <Header {...headerProps}/>
            <Headline>{'Question Details'}</Headline>
            <Subline>{`Question: ${question}`}</Subline>
            {<DetailsCard {...detailsCardProps}/>}
        </div>
    )
    
}