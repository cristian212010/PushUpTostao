import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import img_menu from '../assets/img/menu.svg'

function Menu() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
        <img className="me-2 mb-2 menu-svg" onClick={() => handleShow(true)} src={img_menu}></img>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body closeButton>
            <div className='menu-option'>
                <h2>Inicio</h2>
                <h2>Menu</h2>
                <h2>Novedades</h2>
                <h2>Contacto</h2>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Menu;