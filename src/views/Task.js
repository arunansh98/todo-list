import { useContext, useState } from "react";
import { ListsContext } from "../App";
import Modal from "../components/Modal";
import EditTaskInput from "./EditTaskInput";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import DragDrop from "../components/DragDrop";

export default function Task(props) {
  const { task, tasks, taskIndex, listIndex } = props;

  const { dispatch } = useContext(ListsContext);

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const setTasks = (items) => {
    dispatch({
      type: "setTasks",
      value: {
        listIndex,
        tasks: items,
      },
    });
  };

  return (
    <DragDrop index={taskIndex} items={tasks} setItemsAfterDrop={setTasks}>
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
    </DragDrop>
  );
}
