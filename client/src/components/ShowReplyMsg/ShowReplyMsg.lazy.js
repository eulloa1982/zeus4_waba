import React, { lazy, Suspense } from 'react';

const LazyShowReplyMsg = lazy(() => import('./ShowReplyMsg'));

const ShowReplyMsg = props => (
  <Suspense fallback={null}>
    <LazyShowReplyMsg {...props} />
  </Suspense>
);

export default ShowReplyMsg;
