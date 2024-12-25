import { useState } from "react";
import TextInput from "./components/TextInput";

export default function App() {
  const [listName, setListName] = useState("");
  console.log({ listName });
  return (
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
          >
            Add List
          </button>
        </div>
      </form>
    </div>
  );
}
