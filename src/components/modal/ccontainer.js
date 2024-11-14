import React, { useState } from "react";
import Modal from "./modal";
function Ccontainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        className="openModalButton"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open model
      </button>
      {openModal && <Modal closeModel={setOpenModal}></Modal>}
    </div>
  );
}

export default Ccontainer;
