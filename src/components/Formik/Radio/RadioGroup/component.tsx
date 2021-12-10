import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Group } from './styles';
import { Props } from './types';


const RadioGroup: FunctionComponent<Props> = ({
  className,
  layout,
  options,
  ...inputProps
}) => {
  return (
    <Group className={classnames(className, layout)}>
      {options.map((option, index) => (
        <div key={`radio-${inputProps.name}-${index}`} className={classnames('item', layout)}>
          <label htmlFor={`${inputProps.name}-${option.value.toString()}`}>
            {option.label}
          </label>
          <input
            type="radio"
            {...inputProps}
            value={option.value}
            checked={option.value === inputProps.value}
            id={`${inputProps.name}-${option.value.toString()}`}
          />
          <label
            className="radio"
            htmlFor={`${inputProps.name}-${option.value.toString()}`}
            aria-hidden="true"
          />
        </div>
      ))}
    </Group>
  );
};


export default RadioGroup;
