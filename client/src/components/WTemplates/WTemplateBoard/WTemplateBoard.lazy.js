import React, { lazy, Suspense } from 'react';

const LazyWTemplateBoard = lazy(() => import('./WTemplateBoard'));

const WTemplateBoard = props => (
  <Suspense fallback={null}>
    <LazyWTemplateBoard {...props} />
  </Suspense>
);

export default WTemplateBoard;
