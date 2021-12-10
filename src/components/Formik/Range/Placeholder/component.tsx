import React, { FunctionComponent } from 'react';

import { Container } from './styles';
import { Props } from './types';


const Placeholder: FunctionComponent<Props> = ({ className, value, show }) => {
  return (
    <Container className={className} show={show}>
      {value}
    </Container>
  );
};


export default Placeholder;
