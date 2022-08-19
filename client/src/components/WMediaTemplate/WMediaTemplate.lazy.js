import React, { lazy, Suspense } from 'react';

const LazyWMediaTemplate = lazy(() => import('./WMediaTemplate'));

const WMediaTemplate = props => (
  <Suspense fallback={null}>
    <LazyWMediaTemplate {...props} />
  </Suspense>
);

export default WMediaTemplate;
