import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

import React from "react";

function FetchLoadingComponent() {
  return (
    <Skeleton
      className="mt-6"
      count={11}
      baseColor="#e3e3e3"
      width="100%"
      height={96}
      borderRadius={4}
    />
  );
}

export default FetchLoadingComponent;
