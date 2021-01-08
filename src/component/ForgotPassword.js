import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
    return (
        <div className="container mt-5">
            <Row>
                <Col className=" mt-5 mx-auto" sm={4}>
                    <h3 className="mt-5" align="center">Forgot Password</h3>

                    {/* {error && (
                        <Alert variant="danger" className="text-center mt-3" >{error}</Alert>
                    )} */}

                    <Form className="mt-4 mb-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Button variant="primary" className="btn btn-block" type="submit">
                            Reset Password
                       </Button>
                        <Link to="/" variant="primary" className="btn btn-block">
                            Cancel
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default ForgotPassword
