import { getQs } from "../utils/url";

import React from "react";

function useQueryString() {
  return React.useMemo(() => {
    return getQs();
  }, [window.location.search]);
}

export default useQueryString;
