import React, { FunctionComponent } from 'react';
import { useThumbOverlap } from 'react-range';

import { Outter, Inner, Value } from './styles';
import { Props } from './types';


const Thumb: FunctionComponent<Props> = ({ isDragged, rangeRef, showValue, values, index, step, separator, format, props }) => {
  const [value, style] = useThumbOverlap(rangeRef, values, index, step, separator, format) as [string, React.CSSProperties];

  return (
    <Outter {...props} active={isDragged}>
      <Value style={style} visible={showValue}>
        {value}
      </Value>
      <Inner />
    </Outter>
  );
};


export default Thumb;
