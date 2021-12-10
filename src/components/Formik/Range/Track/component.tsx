import React, { FunctionComponent } from 'react';

import { Outter, Inner } from './styles';
import { Props } from './types';


const Track: FunctionComponent<Props> = ({ children, background, props }) => {
  const { ref, ...outterProps } = props;

  return (
    <Outter {...outterProps}>
      <Inner background={background} ref={ref}>
        {children}
      </Inner>
    </Outter>
  );
};


Track.defaultProps = {
  background: '#707070',
};


export default Track;
