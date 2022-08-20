import React, { lazy, Suspense } from 'react';

const LazyLoadToMsgs = lazy(() => import('./LoadToMsgs'));

const LoadToMsgs = props => (
  <Suspense fallback={null}>
    <LazyLoadToMsgs {...props} />
  </Suspense>
);

export default LoadToMsgs;
