import React, { FunctionComponent, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormikContext } from 'formik';
import classnames from 'classnames';

import { Group } from './styles';
import { Props } from './types';


const CheckGroup: FunctionComponent<Props> = ({
  className,
  layout,
  options,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();

  const outterLayout = layout?.split('-')[0];
  const innerLayout =  layout?.split('-')[1];

  const handleChange = useCallback((name, value) => () => {
    if (props?.value?.includes(value)) {
      const nextValue = props?.value?.filter(
        (v) => v !== value
      );
      setFieldValue(name, nextValue);
    } else {
      const nextValue = props?.value?.concat(value);
      setFieldValue(name, nextValue);
    }
  }, [props, setFieldValue]);

  return (
    <Group className={classnames(className, outterLayout)}>
      {options.map((option, index) => (
        <div key={`check-${props.name}-${index}`} className={classnames('item', innerLayout)}>
          <label htmlFor={`${props.name}-${option.value.toString()}`}>
            {option.label}
          </label>
          <input
            type="checkbox"
            {...props}
            value={option.value}
            disabled={option.disabled}
            id={`${props.name}-${option.value.toString()}`}
            checked={props.value?.includes(option.value)}
            onChange={handleChange(props.name, option.value)}
          />
          <label
            className="checkbox"
            htmlFor={`${props.name}-${option.value.toString()}`}
            aria-hidden="true"
          >
            <span className="mark" />
            <div className="icon">
              <FontAwesomeIcon className="check" icon={['fas', 'check']} />
            </div>
          </label>
        </div>
      ))}
    </Group>
  );
};


export default CheckGroup;
