import React, { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../actions/actions'

const Signup = ({ isLoggedIn, registerUser, error }) => {

    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    if (isLoggedIn) {
        return <Redirect to="/dashboard" />
    }

    const submit = (e) => {
        e.preventDefault()

        const newUser = {
            name,
            email,
            password
        }

        registerUser(newUser)
    }

    return (
        <div className="container mt-5" >

            <Row>
                <Col className="mt-5 mx-auto" sm={4}>
                    <h3 className="mt-5" align="center">Expense Tracker</h3>
                    { error && (
                            <Alert variant="danger" className="text-center mt-3" >{error}</Alert>
                        )}
                    <Form className="mt-4" onSubmit={submit}>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" className="btn btn-block" type="submit">
                            Create Account
                   </Button>
                        <Form.Group controlId="formBasicPassword">
                            <Link to="/">Already Have an account? Login</Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    error: state.error
})
export default connect(mapStateToProps, { registerUser })(Signup)
