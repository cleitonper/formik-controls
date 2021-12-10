import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Message } from './styles';
import { Props } from './types';


const Success: FunctionComponent<Props> = ({ className, message, text }) => (
  <Message className={className}>
    <p className="message">
      {message}
      <FontAwesomeIcon icon={['fas', 'check']} className="icon" />
    </p>
    <p className="text">
      { text }
    </p>
  </Message>
);

export default Success;
