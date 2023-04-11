import React, { useSyncExternalStore } from "react";

const WidthCalc = () => {
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener("resize", listener);

      return () => {
        window.removeEventListener("resize", listener);
      };
    },
    () => window.innerWidth
  );

  return <h1>Width : {width}</h1>;
};

export default WidthCalc;
