import { createPortal } from "react-dom";

export default function Modal(props) {
  const { children } = props;
  return createPortal(
    <>
      <div
        style={{
          inset: "0px",
          background: "black",
          position: "fixed",
          opacity: "0.4",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          inset: "10rem",
          background: "white",
          zIndex: 1000,
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}
