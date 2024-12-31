import { createContext, useReducer, useState } from "react";
import TextInput from "./components/TextInput";
import Lists from "./views/Lists";

const ListsContext = createContext();

export default function App() {
  const [listName, setListName] = useState("");

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "addList":
        return {
          ...state,
          lists: [
            ...state.lists,
            {
              name: action.name,
              tasks: [],
            },
          ],
        };
      case "addTask":
        return addTaskToListIndex(state, action.listIndex, action.value);
      case "deleteTask":
        return deleteTaskFromListIndex(state, action.value);
      case "editTask":
        return editTaskIndexFromListIndex(state, action.value);
      case "setTasks":
        return setTasksAtListIndex(
          state,
          action.value.listIndex,
          action.value.tasks
        );
      default:
        throw new Error("no action matched !");
    }
  };

  function setTasksAtListIndex(state, listIndex, tasks) {
    return {
      ...state,
      lists: state.lists.map((list, index) => {
        if (index === listIndex) {
          return {
            ...list,
            tasks: tasks,
          };
        }
        return list;
      }),
    };
  }

  function editTaskIndexFromListIndex(state, value) {
    const { taskIndex, listIndex, name, desc } = value;
    return {
      ...state,
      lists: state.lists.map((list, index1) => {
        if (index1 === listIndex) {
          return {
            ...list,
            tasks: list.tasks.map((task, index2) => {
              if (index2 === taskIndex) {
                return {
                  name,
                  desc,
                };
              }
              return task;
            }),
          };
        }
        return list;
      }),
    };
  }

  function deleteTaskFromListIndex(state, value) {
    const { listIndex, taskIndex } = value;
    const newState = { ...state };
    return {
      ...newState,
      lists: newState.lists.map((list, index1) => {
        if (index1 === listIndex) {
          return {
            ...list,
            tasks: list.tasks.filter((_task, index2) => index2 !== taskIndex),
          };
        }
        return list;
      }),
    };
  }

  function addTaskToListIndex(state, listIndex, value) {
    const { name, desc } = value;
    let newState = { ...state };
    newState.lists = newState.lists.map((list, index) => {
      if (index === listIndex) {
        return {
          ...list,
          tasks: [
            {
              name,
              desc,
            },
            ...list.tasks,
          ],
        };
      }
      return list;
    });
    return newState;
  }

  const [state, dispatch] = useReducer(reducerFunction, {
    lists: [],
  });

  return (
    <ListsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="flex flex-col justify-center items-center">
            <TextInput
              value={listName}
              placeholder="Enter List Name"
              onChange={(event) => setListName(event.target.value)}
              className="mt-[2rem]"
              id="list-name"
            />
            <button
              type="submit"
              className="mt-[1rem] h-[6vh] rounded-[10px] text-[1.5rem]"
              id="add-list"
              onClick={() =>
                dispatch({
                  type: "addList",
                  name: listName,
                })
              }
              disabled={!listName}
            >
              Add List
            </button>
          </div>
        </form>
      </div>
      <Lists />
    </ListsContext.Provider>
  );
}

export { ListsContext };
