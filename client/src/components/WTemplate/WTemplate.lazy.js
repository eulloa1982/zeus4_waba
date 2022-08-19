import React, { lazy, Suspense } from 'react';

const LazyWTemplate = lazy(() => import('./WTemplate'));

const WTemplate = props => (
  <Suspense fallback={null}>
    <LazyWTemplate {...props} />
  </Suspense>
);

export default WTemplate;
