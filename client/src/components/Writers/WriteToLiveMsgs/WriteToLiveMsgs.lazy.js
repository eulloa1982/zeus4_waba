import React, { lazy, Suspense } from 'react';

const LazyWriteToLiveMsgs = lazy(() => import('./WriteToLiveMsgs'));

const WriteToLiveMsgs = props => (
  <Suspense fallback={null}>
    <LazyWriteToLiveMsgs {...props} />
  </Suspense>
);

export default WriteToLiveMsgs;
