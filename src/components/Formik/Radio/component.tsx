import React, { FunctionComponent } from 'react';
import { useField } from 'formik';

import { FieldLabel } from '../FieldLabel';
import { FieldError } from '../FieldError';
import { RadioGroup } from './RadioGroup';
import { Field } from './styles';
import { Props } from './types';


const Radio: FunctionComponent<Props> = ({ className, label, layout, options, required, optional, ...props }) => {
  const [field, meta] = useField<number | undefined>(props);

  return (
    <Field className={className}>
      <FieldLabel
        value={label}
        required={required}
        optional={optional}
        className="label"
      />
      <RadioGroup
        {...field}
        layout={layout}
        options={options}
        className="radios"
      />
      <FieldError
        show={meta.touched}
        message={meta.error}
        className="error"
      />
    </Field>
  );
};


Radio.defaultProps = {
  layout: 'vertical',
  required: true,
  optional: false,
};


export default Radio;
