import { useContext, useState } from "react";
import { ListsContext } from "../App";
import Modal from "../components/Modal";
import EditTaskInput from "./EditTaskInput";

export default function Task(props) {
  const { task, taskIndex, listIndex } = props;

  const { dispatch } = useContext(ListsContext);

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  return (
    <div className="h-[10rem] w-[100%] border-solid rounded-[5px] border-[black] border-[1px] flex flex-col items-center justify-around py-[1rem]">
      <div>
        Name is <b>{task.name}</b>
      </div>
      <div>
        Description is <b>{task.desc}</b>
      </div>
      <div className="mt-[3px]">
        <button
          className="px-[0.5rem]"
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
          className="ml-[1rem] px-[0.5rem]"
          onClick={() => setShowEditTaskModal(true)}
        >
          Edit
        </button>
      </div>
      {showEditTaskModal && (
        <Modal>
          <EditTaskInput
            name={task.name}
            desc={task.desc}
            taskIndex={taskIndex}
            listIndex={listIndex}
            setShowEditTaskModal={setShowEditTaskModal}
          />
        </Modal>
      )}
    </div>
  );
}
