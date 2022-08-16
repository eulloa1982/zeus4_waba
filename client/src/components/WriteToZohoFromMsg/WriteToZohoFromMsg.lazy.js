import React, { lazy, Suspense } from 'react';

const LazyWriteToZoho = lazy(() => import('./WriteToZoho'));

const WriteToZoho = props => (
  <Suspense fallback={null}>
    <LazyWriteToZoho {...props} />
  </Suspense>
);

export default WriteToZoho;
