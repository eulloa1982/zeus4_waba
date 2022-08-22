import React, { lazy, Suspense } from 'react';

const LazyLoadAllMsgs = lazy(() => import('./LoadAllMsgs'));

const LoadAllMsgs = props => (
  <Suspense fallback={null}>
    <LazyLoadAllMsgs {...props} />
  </Suspense>
);

export default LoadAllMsgs;
