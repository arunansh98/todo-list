import { useContext } from "react";
import { ListsContext } from "../App";
import List from "./List";

export default function Lists() {
  const { state } = useContext(ListsContext);

  const { lists } = state;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "start",
        flexWrap: "wrap",
        gap: "12rem",
        marginLeft: "3rem",
      }}
    >
      {lists.map((list, index) => (
        <List list={list} index={index} />
      ))}
    </div>
  );
}
