import { createPortal } from "react-dom";

export default function Modal(props) {
  const { children } = props;
  return createPortal(
    <>
      <div className="inset-[0px] bg-[black] fixed opacity-[0.4]"></div>
      <div className="fixed inset-[10rem] bg-[white] z-[1000] rounded-[10px]">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}
