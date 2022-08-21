import React, { lazy, Suspense } from 'react';

const LazyWritePrevMsg = lazy(() => import('./WritePrevMsg'));

const WritePrevMsg = props => (
  <Suspense fallback={null}>
    <LazyWritePrevMsg {...props} />
  </Suspense>
);

export default WritePrevMsg;
