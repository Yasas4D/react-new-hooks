import React, { useId } from "react";

const NewForm = () => {
  const id = useId();
  return (
    <>
      <div>
        <label htmlFor={`${id}-agreement1`}>Agree with term 1 :</label>
        <input id={`${id}-agreement1`} type="checkbox" />
      </div>
      <div>
        <label htmlFor={`${id}-agreement2`}>Agree with term 2 :</label>
        <input id={`${id}-agreement2`} type="checkbox" />
      </div>
    </>
  );
};

export default NewForm;
