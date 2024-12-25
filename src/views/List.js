import { useState } from "react";
import Modal from "../components/Modal";
import TaskInput from "./TaskInput";
import Tasks from "./Tasks";

export default function List(props) {
  const { list, index } = props;

  const { tasks } = list;

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>{list.name}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "45rem",
          width: "30rem",
          borderRadius: "5px",
          borderColor: "black",
          background: "white",
          borderStyle: "solid",
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        >
          <button
            style={{
              padding: "0.5rem",
              borderRadius: "5px",
              width: "fit-content",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
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
