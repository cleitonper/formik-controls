import React, { FunctionComponent } from 'react';

import { Label } from './styles';
import { Props } from './types';

const FieldLabel: FunctionComponent<Props> = ({ className, required, optional, htmlFor, value }) => {
  if (!value) return null;

  return (
    <Label className={className} htmlFor={htmlFor}>
      {value}
      {required ? (<span className="required">*</span>) : null}
      {optional ? (<span className="optional">(opcional)</span>) : null}
    </Label>
  );
};

export default FieldLabel;
