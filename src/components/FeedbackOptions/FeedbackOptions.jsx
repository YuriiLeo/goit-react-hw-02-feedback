import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({onLeaveFeedback}) {
  return (
      <ButtonWrapper>
          <Button type='button' onClick={() => onLeaveFeedback("good")}>Good</Button>
          <Button type='button' onClick={() => onLeaveFeedback("neutral")}>Neutral</Button>
          <Button type='button' onClick={() => onLeaveFeedback("bad")}>Bad</Button>
      </ButtonWrapper>
  )
}

FeedbackOptions.protoType = {
    "onLeaveFeedback": PropTypes.func,
};
