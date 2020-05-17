import React, { useState } from 'react';
import {Grid, Row, Col} from 'react-grid-lib';
import { useDevice } from "react-use-device";

import Card from '../../atoms/card';
import { turnIntoPercent } from '../../utils/helpers';
import Button from '../../atoms/button';
import { postVote } from '../../utils/api';
import { QUESTIONS } from '../../utils/constants';

const DetailsCard = ({choices, onChangeRoute}) => {
    const [selectedChoice, setSelectedChoice] = useState(null)
    const { isMOBILE } = useDevice();

    function handleChoice(e) {
        setSelectedChoice(e.target.value)
    }

    if (!!choices) {
        const votesArr = choices && choices.map(({votes}) => votes);
        const percentArr = votesArr && turnIntoPercent(votesArr);
    
        for (let i = 0; i < percentArr.length; i++) {
            choices[i].percent = percentArr[i];
        }
    }

    const mobileChoicesDisplay = (
        <form>
            {
                choices && choices.map(({choice, votes, percent, url}, i) => {
                    return (
                    <Card detailsCard key={i}> 
                        <Grid>
                            <Row>
                                <Col width={12}>{`choice: ${choice}`}</Col>
                                <Col width={12}><span>{`votes: ${votes}`}</span></Col>
                                <Col width={12}>{`percent: ${percent}%`}</Col>
                                <Col width={12}>{'vote this option '}<input type="radio" onChange={handleChoice} value={url} name="vote"/></Col>
                            </Row>
                        </Grid>
                    </Card>
                    );
                })
            }
        </form>
    );

    const desktopChoicesDisplay = (
        <Card detailsCard>
            <form>
                <ul data-cy="question-options">{choices && choices.map(({choice, votes, percent, url}, i) => 
                    <li key={i}>
                        <Grid>
                            <Row align="left">
                                <Col width={5}>{choice}</Col>
                                <Col width={4}><span>{`${votes} votes`}</span></Col>
                                <Col width={2}>{`${percent}%`}</Col>
                                <Col width={1}><input type="radio" onChange={handleChoice} value={url} name="vote"/></Col>
                            </Row>
                        </Grid>
                    </li>
                )}
                </ul>
            </form>
        </Card> 
    );

    return (
        <>
            {isMOBILE ? mobileChoicesDisplay : desktopChoicesDisplay}
            <Button data-cy="vote-button" vote onClick={() => {
                postVote(selectedChoice).then(data => {
                    onChangeRoute(QUESTIONS);
                });
                
            }}>Vote</Button>
        </>
    )
}

export default DetailsCard;