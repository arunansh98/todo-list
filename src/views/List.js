import { useState } from "react";
import Modal from "../components/Modal";
import TaskInput from "./TaskInput";
import Tasks from "./Tasks";

export default function List(props) {
  const { list, index } = props;

  const { tasks } = list;

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <div key={index} className="flex flex-col items-center">
      <h1>{list.name}</h1>
      <div className="list-container">
        <div className="flex justify-center flex-col items-center mx-auto w-[100%]">
          <button
            className="p-[0.5rem] rounded-[5px] w-[fit-content] justify-center mb-[1rem]"
            onClick={() => setShowAddTaskModal(true)}
          >
            ADD TASK
          </button>
          <Tasks tasks={tasks} listIndex={index} />
        </div>
      </div>
      {showAddTaskModal && (
        <Modal>
          <TaskInput
            listIndex={index}
            setShowAddTaskModal={setShowAddTaskModal}
          />
        </Modal>
      )}
    </div>
  );
}
