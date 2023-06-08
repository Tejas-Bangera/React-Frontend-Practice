import { useState } from "react";
import { data } from "../data";
import "./dataList.css";

const DataList = () => {
  const [dataArr, setDataArr] = useState(data);

  const removeItem = (id) => {
    const filteredData = dataArr.filter((item) => id !== item.id);
    setDataArr(filteredData);
  };
  const clearAllItems = () => {
    setDataArr([]);
  };

  return (
    <>
      <h2>Data List</h2>
      <div className="data-list-container">
        {dataArr.map(({ id, name }) => {
          return (
            <div className="data-list-items" key={id}>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <button onClick={clearAllItems}>Clear List</button>
    </>
  );
};
export default DataList;
