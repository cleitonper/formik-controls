import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Error } from './Error';
import { Success } from './Success';
import { Message } from './styles';
import { Props } from './types';


const FormMessage: FunctionComponent<Props> = ({ id, className, message, text, type, show, elemetRef }) => {
  return (
    <Message className={classnames(className, type, { show })} id={id} ref={elemetRef}>
      {type === 'error'
        ? <Error message={message} className={classnames({ show })} />
        : <Success message={message} text={text} className={classnames({ show })} />
      }
    </Message>
  );
};


export default FormMessage;
