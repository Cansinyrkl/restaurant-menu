import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMenuList } from "../../hooks/MenuListHooks";

function DeleteModal({ deleteId }) {
  const [show, setShow] = useState(false);
  const { menuDispatch } = useMenuList();
  const handleDelete = () => {
    setShow(false);
    menuDispatch({ type: "DELETE_MENU", value: deleteId });
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Ürün</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bu içeriği silmek istediğinizden eminmisiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Çık
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
