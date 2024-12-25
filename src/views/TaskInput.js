import { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import { ListsContext } from "../App";

export default function TaskInput(props) {
  const [name, setName] = useState("");

  const [desc, setDesc] = useState("");

  const { listIndex, setShowAddTaskModal } = props;

  const { dispatch } = useContext(ListsContext);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <div
          style={{
            textAlign: "right",
            marginRight: "1rem",
            marginTop: "1rem",
            cursor: "pointer",
          }}
          onClick={() => setShowAddTaskModal(false)}
        >
          X
        </div>
        <div
          style={{
            display: "block",
            textAlign: "center",
            inset: "0px",
            margin: "auto",
            padding: "13%",
          }}
        >
          <div
            style={{
              display: "block",
            }}
          >
            <TextInput
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div
            style={{
              display: "block",
              marginTop: "2rem",
            }}
          >
            <TextInput
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Enter description"
            />
          </div>
          <button
            type="submit"
            style={{
              height: "3rem",
              width: "30rem",
              marginTop: "2rem",
              borderRadius: "10px",
            }}
            disabled={!name || !desc}
            onClick={() => {
              setShowAddTaskModal(false);
              dispatch({
                type: "addTask",
                listIndex,
                value: {
                  name,
                  desc,
                },
              });
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </form>
  );
}
