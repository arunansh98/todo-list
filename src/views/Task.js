import { useContext, useState } from "react";
import { ListsContext } from "../App";
import Modal from "../components/Modal";
import EditTaskInput from "./EditTaskInput";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function Task(props) {
  const { task, tasks, taskIndex, listIndex } = props;

  const { dispatch } = useContext(ListsContext);

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    // Get the dragged and target indices
    const draggedTaskIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const targetTaskIndex = parseInt(e.currentTarget.dataset.index, 10);

    // Ensure both indices are valid
    if (isNaN(draggedTaskIndex) || isNaN(targetTaskIndex)) {
      console.error("Invalid index detected.");
      return;
    }

    // Clone the tasks array to avoid mutating state directly
    const newTasks = [...tasks];

    // Swap the dragged and target items
    const temp = newTasks[draggedTaskIndex];
    newTasks[draggedTaskIndex] = newTasks[targetTaskIndex];
    newTasks[targetTaskIndex] = temp;

    // Update the state using dispatch
    dispatch({
      type: "setTasks",
      value: {
        listIndex,
        tasks: newTasks,
      },
    });
  };

  return (
    <div
      key={taskIndex}
      draggable
      data-index={taskIndex}
      onDragStart={(e) => handleDragStart(e, taskIndex)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="cursor-pointer"
    >
      <h1 className="font-[600] text-center">{taskIndex + 1}</h1>
      <div className="h-[10rem] w-[100%] border-solid rounded-[5px] border-[black] border-[1px] flex flex-col items-center justify-around py-[1rem]">
        <div>
          Name is <b>{task.name}</b>
        </div>
        <div>
          Description is <b>{task.desc}</b>
        </div>
        <div className="mt-[3px] flex justify-center items-center">
          <MdDeleteOutline
            className="cursor-pointer !w-[8vw] h-[3vh]"
            onClick={() =>
              dispatch({
                type: "deleteTask",
                value: {
                  listIndex,
                  taskIndex,
                },
              })
            }
          />
          <CiEdit
            className="cursor-pointer !w-[8vw] h-[3vh]"
            onClick={() => setShowEditTaskModal(true)}
          />
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
    </div>
  );
}
