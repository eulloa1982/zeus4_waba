import React, { lazy, Suspense } from 'react';

const LazyWriteFromPrevMsgs = lazy(() => import('./WriteFromPrevMsgs'));

const WriteFromPrevMsgs = props => (
  <Suspense fallback={null}>
    <LazyWriteFromPrevMsgs {...props} />
  </Suspense>
);

export default WriteFromPrevMsgs;
