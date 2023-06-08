import { people } from "../../data";
import Person from "./Person";
import "./dataList.css";

const DataList = () => {
  return (
    <div className="person-data-container">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default DataList;
