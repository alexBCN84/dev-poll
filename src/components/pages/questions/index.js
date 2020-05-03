import React, { useEffect, useState } from 'react';
import {Grid, Row, Col} from 'react-grid-lib';

import { 
    getAllQuestions, 
} from '../../../utils/api';
import { QUESTION_FORM } from '../../../utils/constants';

import OverviewCard from '../../overview-card';
import Headline from '../../../atoms/headline';
import Header from '../../../components/header';

export default function Questions(props) {
    const [questions, setQuestions] = useState([]);

    useEffect(()=> {
        getAllQuestions().then(data => setQuestions(data));
    },[])
    
    const questionCards = questions.map((question, i) => {
        const overviewCardProps = {...props, ...question}
        return (
            <Col key={i} mobile={12} tablet={6} desktop={4}> 
                <OverviewCard {...overviewCardProps}/>
            </Col>
        )
    });

    const { onChangeRoute } = props;
    const headerProps = {route: QUESTION_FORM, onChangeRoute};
    
return (
    <>
        <Header {...headerProps}/>
        <Headline>{'Questions'}</Headline>
        <Grid fullWidth>
            <Row align="left">{questionCards}</Row>
        </Grid>
    </>
    )
}