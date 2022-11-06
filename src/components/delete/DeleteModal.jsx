import {
  Modal,
  React,
  Button,
  faTrash,
  useState,
  useMenuList,
  FontAwesomeIcon,
} from "./Index";

function DeleteModal({ deleteId, productHeader }) {
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
          <Modal.Title>{productHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b> {productHeader}</b> isimli yemeği silmek istediğinizden
          eminmisiniz?
        </Modal.Body>
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
