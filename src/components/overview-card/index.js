import React, {useState} from 'react';
import { useDevice } from "react-use-device";

import InfoLabel from '../../atoms/info-label';
import Card from '../../atoms/card';
import { formatDate } from '../../utils/helpers';
import { QUESTION_DETAILS } from '../../utils/constants';

const OverviewCard = ({question, published_at, choices, url, setSelectedQuestion, onChangeRoute}) => {
    const [highlighted, setHighlighted] = useState(false)
    const { isMOBILE } = useDevice();
    const infoLabel = (
        <InfoLabel 
            onClick={
                () => {
                    onChangeRoute(QUESTION_DETAILS);
                    setSelectedQuestion(url);
                }
                
            }
        >
            {'See choices'}
        </InfoLabel>);

    return (
        <Card 
            questionOverview 
            onMouseEnter={() => setHighlighted(true)}
            onMouseLeave={() => setHighlighted(false)}
        >
            <h2>{question}</h2>
            <p>{ formatDate(published_at) }</p>
            <p>{`${choices.length} choices available`}</p>
            {isMOBILE ? infoLabel : highlighted && infoLabel}
        </Card>
    )
}

export default OverviewCard;