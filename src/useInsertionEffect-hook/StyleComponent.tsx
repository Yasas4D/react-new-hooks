import React, { useState } from "react";
import { useStyles } from "./useStyles";

const styles = (props: any) => {
  return {
    newButton: {
      backgroundColor: "#13d10d",
      color: "#ffffff",
      fontSize: "18px",
      padding: "8px 12px",
      border: "2px solid transparent",
      width: `${props.width}px`,
    },
  };
};

const StyleComponent = () => {
  const [width, setWidth] = useState(150);
  const style: any = useStyles(styles, { width });

  return (
    <>
      <h2>useInsertionEffect Example</h2>
      <button
        className={style.newButton}
        onClick={() => setWidth((width) => width + 5)}
      >
        Click Here
      </button>
    </>
  );
};

export default StyleComponent;
