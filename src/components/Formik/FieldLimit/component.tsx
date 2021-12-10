import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import { Limit } from './styles';
import { Props } from './types';


const FieldLimit: FunctionComponent<Props> = ({ className, limit, current }) => {
  if (limit === undefined || current === undefined) return null;

  const remaining = (limit - current >= 0)
    ? limit - current
    : 0;

  const sentence = remaining <= 0
    ? 'limite de caracteres atingido'
    : remaining === 1
      ? ' caracter restante'
      : ' caracteres restantes';

  const reachedLimit = remaining === 0;

  const classNames = classnames(className, { error: reachedLimit });

  return (
    <Limit className={classNames}>
      {reachedLimit && <FontAwesomeIcon icon={['fas', 'exclamation-circle']} className="icon" />}
      {remaining || ''}{sentence}
    </Limit>
  );
};

export default FieldLimit;
