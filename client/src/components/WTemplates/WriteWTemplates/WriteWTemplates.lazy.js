import React, { lazy, Suspense } from 'react';

const LazyWriteWTemplates = lazy(() => import('./WriteWTemplates'));

const WriteWTemplates = props => (
  <Suspense fallback={null}>
    <LazyWriteWTemplates {...props} />
  </Suspense>
);

export default WriteWTemplates;
