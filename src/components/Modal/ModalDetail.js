import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDetail = ({ pdfLink, showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>PDF Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title="PDF Viewer"
          src={pdfLink}
          frameBorder="0"
          width="100%"
          height="500px"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetail;
