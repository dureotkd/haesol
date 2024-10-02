import React from "react";
import { wait } from "../utils/time";
import { $ } from "../utils/document";

/**
 * 1. 마지막 Hook만 실행되어 storage가 remove되면서 scroll 이동이 되어진다.
 * 2. 자식 컴포넌트의 Mounted가 전부 끝난 후 실행 되어진다.
 *
 */
function MemoryScrollComponent(props) {
  React.useEffect(() => {
    (async () => {
      await wait(150);
      const scrollPosition = window.localStorage.getItem("scrollPosition");

      if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
        window.localStorage.removeItem("scrollPosition");
      }
    })();
  }, []);

  return <>{props.children}</>;
}

export default MemoryScrollComponent;
