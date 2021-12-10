import React, { FunctionComponent, ReactText } from 'react';
import { useField } from 'formik';

import { FieldLabel } from '../FieldLabel';
import { FieldError } from '../FieldError';
import { CheckGroup } from './CheckGroup';
import { Field } from './styles';
import { Props } from './types';


const Check: FunctionComponent<Props> = ({ className, label, layout, options, required, optional, ...props }) => {
  const [field, meta] = useField<ReadonlyArray<ReactText> | undefined>(props);

  return (
    <Field className={className}>
      <FieldLabel
        value={label}
        required={required}
        optional={optional}
        className="label"
      />
      <CheckGroup
        {...field}
        layout={layout}
        options={options}
        className="checks"
      />
      <FieldError
        show={meta.touched}
        message={meta.error}
        className="error"
      />
    </Field>
  );
};


Check.defaultProps = {
  layout: 'column-horizontal',
  required: false,
  optional: false,
};


export default Check;
