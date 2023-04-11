import React, { useSyncExternalStore } from "react";
import { timeStore } from "./store";

const Subscriber = () => {
  const time = useSyncExternalStore(timeStore.subscribe, timeStore.getSnapshot);

  return <p>The time is: {time}</p>;
};

export default Subscriber;
