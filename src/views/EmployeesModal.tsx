import { type } from 'os';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Employee } from '../models/Employee';


const EmployeesModal: React.FC<{ employees: Employee[] }> = ({ employees }) => {

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
                                <Container>
                                    {
                                        employees?.length > 0 ? (
                                            employees.map((item) => (
                                                <div>
                                                    <Row>
                                                        <Col>Name: <b>{item.name} </b> </Col>
                                                        <Col>Age: <b>{item.age} </b></Col>
                                                    </Row>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Something went wrong with modal</p>
                                        )
                                    }

                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
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