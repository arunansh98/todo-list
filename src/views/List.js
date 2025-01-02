import { useContext, useState } from "react";
import Tasks from "./Tasks";
import DragDrop from "../components/DragDrop";
import { ListsContext } from "../App";
import { CiEdit } from "react-icons/ci";
import ModalInput from "./ModalInput";

export default function List(props) {
  const { list, lists, index } = props;

  const { tasks } = list;

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const [showListNameEditModal, setShowListNameEditModal] = useState(false);

  const { dispatch } = useContext(ListsContext);

  const setLists = (items) => {
    dispatch({
      type: "setLists",
      value: {
        lists: items,
      },
    });
  };

  const handleListNameInputSubmit = (inputs) => {
    dispatch({
      type: "editListName",
      value: {
        index,
        name: inputs[0].value,
      },
    });
  };

  const handleAddTaskInputSubmit = (inputs) => {
    dispatch({
      type: "addTask",
      listIndex: index,
      value: {
        name: inputs[0].value,
        desc: inputs[1].value,
      },
    });
  };

  return (
    <DragDrop
      index={index}
      items={lists}
      setItemsAfterDrop={setLists}
      scope="list"
    >
      <div key={index} className="flex flex-col items-center cursor-auto">
        <div className="flex flex-row items-center">
          <h1 className="text-[1.5rem] mr-[1rem]">{list.name}</h1>
          <CiEdit
            className="cursor-pointer text-[2.4rem]"
            onClick={() => setShowListNameEditModal(true)}
          />
        </div>
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
          <ModalInput
            inputs={[
              {
                key: "name",
                placeholder: "Enter task name",
                value: "",
              },
              {
                key: "desc",
                placeholder: "Enter task description",
                value: "",
              },
            ]}
            onInputSubmit={handleAddTaskInputSubmit}
            showModal={showAddTaskModal}
            setShowModal={setShowAddTaskModal}
            onSubmitLabel="ADD"
          />
        )}
        {showListNameEditModal && (
          <ModalInput
            inputs={[
              {
                key: "name",
                placeholder: "Edit list name",
                value: list.name,
              },
            ]}
            onInputSubmit={handleListNameInputSubmit}
            showModal={showListNameEditModal}
            setShowModal={setShowListNameEditModal}
            onSubmitLabel="EDIT"
          />
        )}
      </div>
    </DragDrop>
  );
}
