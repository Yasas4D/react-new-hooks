import { useEffect, useMemo, useState } from "react";
import { useDeferredValue } from "react";

const Search = ({ list }: any) => {
  const [name, setName] = useState<string>("");
  const deferredName = useDeferredValue(name);

  function handleChange(e: any) {
    setName(e.target.value);
  }

  const searchResults = useMemo(() => {
    return list.filter((item: any) =>
      item.toLowerCase().includes(deferredName.toLowerCase())
    );
  }, [deferredName]);

  useEffect(() => {
    console.log(`Input value: ${name}\nDeferred value:  ${deferredName}`);
  }, [name, deferredName]);

  return (
    <div className="my-input">
      <input type="text" value={name} onChange={handleChange} />

      <ul>
        {searchResults.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
