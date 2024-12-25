import { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import { ListsContext } from "../App";

export default function EditTaskInput(props) {
  const [name, setName] = useState(props.name);

  const [desc, setDesc] = useState(props.desc);

  const { listIndex, taskIndex, setShowEditTaskModal } = props;

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
          onClick={() => setShowEditTaskModal(false)}
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
              placeholder="Edit task name"
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
              placeholder="Edit task description"
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
              setShowEditTaskModal(false);
              dispatch({
                type: "editTask",
                value: {
                  taskIndex,
                  listIndex,
                  name,
                  desc,
                },
              });
            }}
          >
            EDIT
          </button>
        </div>
      </div>
    </form>
  );
}
