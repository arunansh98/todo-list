import { createPortal } from "react-dom";

export default function Modal(props) {
  const { children } = props;
  return createPortal(
    <>
      <div className="inset-[0px] bg-[black] fixed opacity-[0.4]"></div>
      <div className="fixed inset-[0rem] m-auto bg-[white] z-[1000] rounded-[10px] h-[50vh] w-[50vw]">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}
