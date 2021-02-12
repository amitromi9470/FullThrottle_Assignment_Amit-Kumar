import React, { useState } from "react";
import Modal from '../Modal/Modal';
import ModalContent from '../ModalContent/ModalContent';
import "./Card.css";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const displayModal = () => {
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <div className="card" onClick={displayModal}>
        <p>{props.real_name}</p>
      </div>
      <Modal show={showModal} handleClose={hideModal}>
        <ModalContent
          real_name={props.real_name}
          activity_periods={props.activity_periods}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Card;
