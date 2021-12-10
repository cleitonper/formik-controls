import React, { FunctionComponent, FocusEvent, ChangeEvent, useRef, useState, useCallback, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { IMaskInput } from 'react-imask';
import classnames from 'classnames';

import { FieldError } from '../FieldError';
import { FieldLabel } from '../FieldLabel';
import { FieldLimit } from '../FieldLimit';
import { MaskProps } from './types';
import { Field } from './styles';
import { Props } from './types';


const Input: FunctionComponent<Props> = ({
  className,
  model,
  limit,
  label,
  required,
  optional,
  focus,
  mask,
  unmask,
  dispatch,
  onBlur,
  onFocus,
  onChange,
  onAccept,
  ...props
}) => {
  const inputRef = useRef<{ element: HTMLInputElement }>();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField<string | undefined>(props);
  const [inputState, setInputState] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onChange(event);
    onChange?.(event);
  }, [field, onChange]);

  const handleFocus = useCallback((event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputState('has-focus');
    onFocus?.(event);
  }, [onFocus]);

  const handleAccept = useCallback((value: string) => {
    setFieldValue(field.name, value);
    onAccept?.(value);
  }, [field.name, onAccept, setFieldValue]);

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputState('');
    field.onBlur(event);
    onBlur?.(event);
  }, [field, onBlur]);

  const inputProps = {
    className: 'input',
    id: props.id || props.name,
    ...field,
    ...props,
    value: !limit || !field.value
      ? field.value
      : field.value.substring(0, limit),
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: mask || mask?.length
      ? undefined
      : handleChange,
  };

  let maskProps: MaskProps = {
    mask,
    unmask,
    ref: inputRef,
    onAccept: mask || mask?.length
      ? handleAccept
      : undefined,
  };

  if (typeof dispatch === 'function') maskProps = { ...maskProps, dispatch };

  const fieldClass = classnames(className, model, {
    'field': true,
    'has-value': field.value,
    'has-error': meta.touched && meta.error,
    'has-focus': inputState,
  });

  useEffect(() => {
    if (!inputRef.current) return;

    const event = focus ? 'focus' : 'blur';

    inputRef.current.element[event]();
  }, [focus]);

  return (
    <Field className={fieldClass}>
      <FieldLabel value={label} htmlFor={props.id || props.name} required={required} optional={optional} className="label" />
      {props.type === 'textarea' ? <textarea {...inputProps} /> : <IMaskInput {...inputProps} {...maskProps} />}
      <FieldError show={meta.touched} message={meta.error} className="error" />
      <FieldLimit limit={limit} current={field.value?.length} className="limit" />
    </Field>
  );
};


Input.defaultProps = {
  unmask: true,
  model: 'default',
  type: 'text',
};


export default Input;
