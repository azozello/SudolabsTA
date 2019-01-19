import React from 'react';
import styled from 'styled-components';

const SurveyCheckboxDiv = styled.div`
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.25rem;
      border: 1px dashed #9f5bff;
      margin-top: ${({Margin}) => Margin && '1.8rem'};
      margin-right: 0.75rem;
      margin-left: auto;
`;

function SurveyCheckbox(props) {
    return (
        <div>
            <SurveyCheckboxDiv Margin={props.margin}/>
        </div>
    );
}

export default SurveyCheckbox