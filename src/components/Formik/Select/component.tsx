import React, { FunctionComponent, FocusEvent, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import classnames from 'classnames';

import { Select as BaseSelect } from 'components/Select';
import { Props as SelectProps } from 'components/Select/types';

import { FieldError } from '../FieldError';
import { FieldLabel } from '../FieldLabel';
import { Field } from './styles';
import { Props } from './types';


const Select: FunctionComponent<Props> = ({ className, model, label, required, optional, options, placeholder, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField<string | undefined>(props);
  const [inputState, setInputState] = useState('');

  const selectProps: SelectProps = {
    options,
    className: 'select',
    placeholder: model !== 'float'
      ? placeholder
      : '',
    id: props.id || props.name,
    ...field,
    ...props,
    onFocus: () => {
      setInputState('has-focus');
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      field.onBlur(event);
      setInputState('');
    },
    onChange: (value: string | number) => {
      setFieldValue(field.name, value);
    },
  };

  const fieldClass = classnames(className, model, {
    'field': true,
    'is-disabled': props.disabled,
    'has-error': meta.touched && meta.error,
    'has-value': field.value,
    'has-focus': inputState,
  });

  return (
    <Field className={fieldClass}>
      <FieldLabel value={label} htmlFor={props.id || props.name} required={required} optional={optional} className="label" />
      <BaseSelect {...selectProps} />
      <FieldError show={meta.touched} message={meta.error} className="error" />
    </Field>
  );
};


Select.defaultProps = {
  model: 'default',
};


export default Select;
