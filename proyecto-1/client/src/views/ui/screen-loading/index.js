import React from 'react';
import classnames from 'classnames';

const ScreenLoading = ({
  size = 15,
  isSpinner = false,
  noStableMargin = false,
}) => (
  <>
    {isSpinner ? null : <div className='global-layer' />}
    {isSpinner ? (
      <div
        className={classnames({
          'main-ui--loader-container d-flex justify-content-center align-items-center': true,
          'margin-stable': isSpinner && !noStableMargin,
        })}
      >
        <div className={`main-ui--loader loader-${size}`} />
      </div>
    ) : (
      <div className='main-ui--loader-global'>
        <div className='main-ui--loader-container d-flex justify-content-center align-items-center'>
          <div className={`main-ui--loader loader-${size}`} />
        </div>
      </div>
    )}
  </>
);

export default ScreenLoading;
