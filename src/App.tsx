import {FC} from 'react';

import {css, cx} from '@emotion/css';

const wheat = css({
  backgroundColor: 'wheat',
  border: '1px solid'
});

export const App: FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className={cx('col-sm', wheat)}>One of three columns</div>
        <div className={cx('col-sm', wheat)}>One of three columns</div>
        <div className={cx('col-sm', wheat)}>One of three columns</div>
      </div>
    </div>
  );
};
