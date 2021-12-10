import React, { FunctionComponent } from 'react';
import { useField } from 'formik';

import { FieldLabel } from '../FieldLabel';
import { FieldError } from '../FieldError';
import { StarList } from './StarList';
import { Field } from './styles';
import { Props } from './types';


const Star: FunctionComponent<Props> = ({ className, label, required, ...props }) => {
  const [field, meta] = useField<number | undefined>({ ...props, radioGroup: 'rating' });

  return (
    <Field className={className}>
      <FieldLabel
        value={label}
        htmlFor={props.id || props.name}
        required={required}
        className="label"
      />
      <StarList
        className="stars"
        {...field}
      />
      <FieldError
        show={meta.touched}
        message={meta.error}
        className="error"
      />
    </Field>
  );
};


export default Star;
