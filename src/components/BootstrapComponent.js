import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BootstrapComponent.css';

const BootstrapComponent = () => {
    return (
        <div className="container custom-container">
            <h1 className="custom-heading">Bootstrap Styling Components</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="custom-label">Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" className="custom-input" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label className="custom-label">Status</Form.Label>
                        <Form.Select defaultValue="Choose..." className="custom-select">
                            <option>Choose...</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Pending</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label >Value Type</Form.Label>
                    <Form.Control placeholder="Enter Value Type" className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label >Dealer Net</Form.Label>
                    <Form.Control placeholder="Enter Dealer Net" className="custom-input" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label >Sales Price</Form.Label>
                        <Form.Control className="custom-input" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label >Value Effect</Form.Label>
                        <Form.Select defaultValue="Choose..." className="custom-select">
                            <option>Choose...</option>
                            <option>Amount</option>
                            <option>Price</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label >Volvo Cost</Form.Label>
                        <Form.Control className="custom-input" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className="custom-checkbox" />
                </Form.Group>

                <Button variant="primary" type="submit" className="custom-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BootstrapComponent;