import React, { FunctionComponent, useRef, useCallback } from 'react';
import { Range as ReactRange, getTrackBackground } from 'react-range';
import { useField, useFormikContext } from 'formik';

import { Field } from './styles';
import { Props } from './types';

import { FieldError } from '../FieldError';
import { FieldLabel } from '../FieldLabel';

import { Track, RenderTrack } from './Track';
import { Thumb, RenderThumb } from './Thumb';
import { Placeholder } from './Placeholder';


const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;


const Range: FunctionComponent<Props> = ({
  className,
  label,
  placeholder,
  required,
  optional,
  step,
  min,
  max,
  format,
  onChange,
  onFinalChange,
  ...props
}) => {
  const rangeRef = useRef<ReactRange>(null);
  const { setFieldValue, initialValues } = useFormikContext<Record<string, unknown>>();
  const [field, meta] = useField<number[] | undefined>(props);
  const initialRangeValues = initialValues?.[field.name] as number[] | undefined;
  const values = field.value || [0];

  const minValue = min !== undefined
    ? min
    : initialRangeValues?.length
      ? initialRangeValues[0]
      : DEFAULT_MIN;

  const maxValue = max !== undefined
    ? max
    : initialRangeValues?.length
      ? initialRangeValues[initialRangeValues.length - 1]
      : DEFAULT_MAX;

  const hasValueSelected =
    values[0] !== initialRangeValues?.[0]
    || values[values?.length - 1] !== initialRangeValues?.[initialRangeValues?.length - 1];

  const trackBackground = getTrackBackground({
    values,
    min: minValue,
    max: maxValue,
    colors: ['#707070', '#D6001C', '#707070'],
  });

  const handleChange = useCallback((values: number[]) => {
    setFieldValue(field.name, values);
    onChange?.(values);
  }, [field.name, setFieldValue, onChange]);

  const handleFinalChange = useCallback((values: number[]) => {
    onFinalChange?.(values);
  }, [onFinalChange]);

  const renderThumb: RenderThumb = useCallback((props) => <Thumb {...props} rangeRef={rangeRef.current} format={format} showValue={hasValueSelected} values={values} />, [values, format]);
  const renderTrack: RenderTrack = useCallback((props) => <Track {...props} background={trackBackground} />, [trackBackground]);

  const rangeProps = {
    values,
    step,
    min: minValue,
    max: maxValue,
    ref: rangeRef,
    renderTrack,
    renderThumb,
    onChange: handleChange,
    onFinalChange: handleFinalChange,
  };

  return (
    <Field className={className}>
      <FieldLabel value={label} htmlFor={props.id || props.name} required={required} optional={optional} className="label" />
      <ReactRange {...rangeProps} />
      <FieldError show={meta.touched} message={meta.error} className="error" />
      <Placeholder show={!meta.touched && !meta.error && !hasValueSelected} value={placeholder} />
    </Field>
  );
};


Range.defaultProps = {
  placeholder: 'Selecione',
};


export default Range;
