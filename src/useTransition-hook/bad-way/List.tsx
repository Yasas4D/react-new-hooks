import { useState } from "react";

const List = () => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  function handleChange(e: any) {
    setName(e.target.value);
    const largeList: string[] = [];

    for (let i = 0; i < 10000; i++) {
      largeList.push(e.target.value);
    }

    setList(largeList);
  }

  return (
    <div className="my-input">
      <input type="text" value={name} onChange={handleChange} />
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default List;
