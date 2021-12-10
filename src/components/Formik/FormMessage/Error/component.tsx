import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Message } from './styles';
import { Props } from './types';


const Error: FunctionComponent<Props> = ({ className, message }) => (
  <Message className={className}>
    <FontAwesomeIcon icon={['fas', 'exclamation-circle']} className="icon" />
    <span className="text">
      <strong>Atenção!</strong> { message }
    </span>
  </Message>
);

export default Error;
