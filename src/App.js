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
      default:
        throw new Error("no action matched !");
    }
  };

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              value={listName}
              placeholder="Enter List Name"
              onChange={(event) => setListName(event.target.value)}
            />
            <button
              type="submit"
              style={{
                marginTop: "1rem",
                height: "3rem",
                width: "30rem",
                borderRadius: "10px",
                fontSize: "1.5rem",
              }}
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
