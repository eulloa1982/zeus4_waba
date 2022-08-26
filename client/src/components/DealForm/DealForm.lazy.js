import React, { lazy, Suspense } from 'react';

const LazyDealForm = lazy(() => import('./DealForm'));

const DealForm = props => (
  <Suspense fallback={null}>
    <LazyDealForm {...props} />
  </Suspense>
);

export default DealForm;
