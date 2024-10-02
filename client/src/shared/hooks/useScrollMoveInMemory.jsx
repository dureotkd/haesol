import React from "react";
import { wait } from "../utils/time";

function useScrollMoveInMemory(loading) {
  React.useEffect(() => {
    (async () => {
      console.log(loading);
      //   console.log("hello");
      //   const scrollPosition = localStorage.getItem("scrollPosition");
      //   console.log("hello", scrollPosition);
      //   if (scrollPosition) {
      //     window.scrollTo(0, parseInt(scrollPosition, 10));
      //   }
    })();
  }, [loading]);
}

export default useScrollMoveInMemory;
