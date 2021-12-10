import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import { Error } from './styles';
import { Props } from './types';

const FieldError: FunctionComponent<Props> = ({ className, message, show }) => {
  if (!show || !message) return <Error className={className} />;

  return (
    <Error className={classnames(className, { visible: show })}>
      <FontAwesomeIcon icon={['fas', 'exclamation-circle']} className="icon" />
      {message}
    </Error>
  );
};

export default FieldError;
