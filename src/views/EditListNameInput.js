import { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import { ListsContext } from "../App";

export default function EditListNameInput(props) {
  const { index, setShowListNameEditModal } = props;
  const [listName, setListName] = useState("");
  const { dispatch } = useContext(ListsContext);
  return (
    <div>
      <div
        className="text-right mr-[1rem] mt-[1rem] cursor-pointer"
        onClick={() => setShowListNameEditModal(false)}
      >
        X
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="block text-center inset-[0px] m-auto p-[13%]">
          <TextInput
            placeholder="Edit List Name"
            value={listName}
            onChange={(event) => setListName(event.target.value)}
          />
          <button
            type="submit"
            className="mt-[2rem]"
            onClick={() => {
              setShowListNameEditModal(false);
              dispatch({
                type: "editListName",
                value: {
                  index,
                  name: listName,
                },
              });
            }}
          >
            EDIT
          </button>
        </div>
      </form>
    </div>
  );
}
