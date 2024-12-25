import { useContext } from "react";
import { ListsContext } from "../App";

export default function Task(props) {
  const { task, taskIndex, listIndex } = props;

  const { dispatch } = useContext(ListsContext);

  return (
    <div
      style={{
        height: "5rem",
        width: "100%",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        Name is <b>{task.name}</b>
      </div>
      <div>
        Description is <b>{task.desc}</b>
      </div>
      <div
        style={{
          marginTop: "3px",
        }}
      >
        <button
          onClick={() =>
            dispatch({
              type: "deleteTask",
              value: {
                listIndex,
                taskIndex,
              },
            })
          }
        >
          Delete
        </button>
        <button
          style={{
            marginLeft: "1rem",
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
