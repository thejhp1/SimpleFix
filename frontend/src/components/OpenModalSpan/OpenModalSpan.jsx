import React from "react";
import { useModal } from "../../context/Modal";

function OpenModalSpan({
  modalComponent, // component to render inside the modal
  spanText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };


  return (
    <span onClick={onClick}>
      {spanText}
    </span>
  );
}

export default OpenModalSpan;
