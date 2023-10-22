import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={375}
    viewBox="0 0 280 375"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="90" y="0" rx="10" ry="10" width="100" height="180" />
    <rect x="0" y="200" rx="5" ry="5" width="280" height="23" />
    <rect x="0" y="240" rx="10" ry="10" width="280" height="70" />
    <rect x="0" y="330" rx="5" ry="5" width="130" height="41" />
    <rect x="150" y="330" rx="10" ry="10" width="130" height="41" />
  </ContentLoader>
);

export default Skeleton;
