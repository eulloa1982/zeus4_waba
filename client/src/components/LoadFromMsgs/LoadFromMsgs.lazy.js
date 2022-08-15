import React, { lazy, Suspense } from 'react';

const LazyLoadFromMsgs = lazy(() => import('./LoadFromMsgs'));

const LoadFromMsgs = props => (
  <Suspense fallback={null}>
    <LazyLoadFromMsgs {...props} />
  </Suspense>
);

export default LoadFromMsgs;
