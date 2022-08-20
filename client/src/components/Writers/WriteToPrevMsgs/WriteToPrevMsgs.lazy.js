import React, { lazy, Suspense } from 'react';

const LazyReadToPrevMsgs = lazy(() => import('./ReadToPrevMsgs'));

const ReadToPrevMsgs = props => (
  <Suspense fallback={null}>
    <LazyReadToPrevMsgs {...props} />
  </Suspense>
);

export default ReadToPrevMsgs;
