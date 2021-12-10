import React, { FunctionComponent, useCallback } from 'react';
import { ImpulseSpinner } from "react-spinners-kit";
import { useFormikContext } from 'formik';
import classnames from 'classnames';

import { Button } from 'components/Button';
import { Props } from './types';


const Submit: FunctionComponent<Props> = ({ className, visible, label, loadingIndicator }) => {
  const { status, setStatus } = useFormikContext();

  const handleClick = useCallback(() => setStatus('submit'), []);

  if (!visible) return null;

  return (
    <Button
      type="submit"
      shape="round"
      size="medium"
      disabled={status === 'submiting' || status === 'submited'}
      className={classnames(className, status)}
      onClick={handleClick}
    >
      {(() => {
        switch (status) {
          case 'unsubmited':
            return label;
          case 'submiting':
            return <ImpulseSpinner frontColor={loadingIndicator?.frontColor} backColor={loadingIndicator?.backColor} />;
          default:
            return label;
        }
      })()}
    </Button>
  );
};


Submit.defaultProps = {
  visible: true,
  loadingIndicator: {
    frontColor: 'rgba(255, 255, 255, 1)',
    backColor: 'rgba(255, 255, 255, 0.35)',
  },
};


export default Submit;
