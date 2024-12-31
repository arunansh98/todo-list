import { useContext } from "react";
import { ListsContext } from "../App";
import List from "./List";

export default function Lists() {
  const { state } = useContext(ListsContext);

  const { lists } = state;

  return (
    <div className="lists">
      {lists.map((list, index) => (
        <List list={list} index={index} />
      ))}
    </div>
  );
}