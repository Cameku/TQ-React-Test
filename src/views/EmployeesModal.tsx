import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {
    name: string;
    age: number;
}

const EmployeesModal: React.FC<Props> = ({ name, age }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Row>
                    <Col><br />
                        <Button variant="primary" onClick={handleShow}>
                            View Employees
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Employees Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Name: {name} </p>
                                <p>Age: {age} </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Next
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default EmployeesModal;