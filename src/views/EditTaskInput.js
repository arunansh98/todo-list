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
          className="text-right mr-[1rem] mt-[1rem] cursor-pointer"
          onClick={() => setShowEditTaskModal(false)}
        >
          X
        </div>
        <div className="block text-center inset-[0px] m-auto p-[13%]">
          <div className="block">
            <TextInput
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Edit task name"
            />
          </div>
          <div className="block mt-[2rem]">
            <TextInput
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Edit task description"
            />
          </div>
          <button
            type="submit"
            className="h-[3rem] w-[30rem] mt-[2rem] rounded-[10px]"
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
