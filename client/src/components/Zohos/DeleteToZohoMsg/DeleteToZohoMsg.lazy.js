import React, { lazy, Suspense } from 'react';

const LazyDeleteToZohoMsg = lazy(() => import('./DeleteToZohoMsg'));

const DeleteToZohoFromMsg = props => (
  <Suspense fallback={null}>
    <LazyDeleteToZohoFromMsg {...props} />
  </Suspense>
);

export default DeleteToZohoFromMsg;
