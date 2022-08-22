import React, { lazy, Suspense } from 'react';

const LazyWriteAllMsgs = lazy(() => import('./WriteAllMsgs'));

const WriteAllMsgs = props => (
  <Suspense fallback={null}>
    <LazyWriteAllMsgs {...props} />
  </Suspense>
);

export default WriteAllMsgs;
