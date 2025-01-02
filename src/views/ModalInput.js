import { useReducer } from "react";
import TextInput from "../components/TextInput";
import Modal from "../components/Modal";

export default function ModalInput(props) {
  const { inputs, onInputSubmit, setShowModal, onSubmitLabel } = props;

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "onChange":
        const { index, value } = action.value;
        return {
          ...state,
          inputs: state.inputs.map((input, inputIndex) => {
            if (inputIndex === index) {
              return {
                ...input,
                value,
              };
            }
            return input;
          }),
        };
      default:
        throw new Error("No action matched !");
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    inputs,
  });

  const isDisabled = () => {
    return (
      state.inputs.filter((input) => input.value && input.value.length > 0)
        .length !== state.inputs.length
    );
  };

  return (
    <Modal>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <div
            className="text-right mr-[1rem] mt-[1rem] cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            X
          </div>
          <div className="block text-center inset-[0px] m-auto p-[13%]">
            {state.inputs.map((input, index) => {
              const className = "block " + (index > 0 ? "mt-[2rem]" : "");
              return (
                <div className={className} key={input.key}>
                  <TextInput
                    value={input.value}
                    placeholder={input.placeholder}
                    onChange={(event) =>
                      dispatch({
                        type: "onChange",
                        value: {
                          index,
                          value: event.target.value,
                        },
                      })
                    }
                  />
                </div>
              );
            })}
            <button
              type="submit"
              className="h-[3rem] w-[30rem] mt-[2rem] rounded-[10px]"
              disabled={isDisabled()}
              onClick={() => {
                setShowModal(false);
                onInputSubmit(state.inputs);
              }}
            >
              {onSubmitLabel}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
