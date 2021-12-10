import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import { Container } from './styles';
import { Props } from './types';


const StarList: FunctionComponent<Props> = ({ className, ...inputProps }) => {
  const [willActive, setWillActive] = useState(0);

  const handleHover = (position: number) => () => setWillActive(position);

  return (
    <Container className={className}>
      {[1, 2, 3, 4, 5].map((position) => (
        <label
          key={`rating-field-${position}`}
          onMouseEnter={handleHover(position)}
          onMouseLeave={handleHover(0)}
          className={classnames({
            'star': true,
            'active': willActive > 0
              ? (position <= willActive)
              : inputProps.value
                ? (position <= inputProps.value)
                : false,
          })}
        >
          ★
          <input
            {...inputProps}
            type="radio"
            value={position}
            checked={position === inputProps.value}
          />
        </label>
      ))}
    </Container>
  );
};


export default StarList;
