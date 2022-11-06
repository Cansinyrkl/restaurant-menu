import {
  Form,
  Modal,
  React,
  Button,
  useState,
  useMenuList,
  faPenSquare,
  FontAwesomeIcon,
} from "./Index";

function Arrangement({ productHeader, selectedId }) {
  const [show, setShow] = useState(false);
  const [changeName, setChangeName] = useState(null);

  const { menuDispatch } = useMenuList();
  const handleEdit = () => {
    setShow(false);
    menuDispatch({
      type: "EDİT_MENU",
      selectedId: selectedId,
      newName: changeName,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPenSquare} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{productHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Yeni Değeri Giriniz."
                autoFocus
                onChange={(e) => setChangeName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Arrangement;
