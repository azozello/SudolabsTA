import React from 'react';
import styled from 'styled-components';

const SurveyTableDot = styled.div`
      background-color: #3e425a;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      margin: 0.5rem;
      margin-top: ${({First}) => First && '1.2rem'};
      background-color: ${({Selected}) => Selected && '#eaeaea'};
`;

function Dots(props) {
    return (
        <div onClick={props.onDotsClick}>
            <SurveyTableDot Selected={props.selected} First={true}/>
            <SurveyTableDot Selected={props.selected}/>
            <SurveyTableDot Selected={props.selected}/>
        </div>
    );
}

export default Dots