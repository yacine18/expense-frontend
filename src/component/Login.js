import React, { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions/actions'
// import ErrorsAlert from './alerts/ErrorsAlert';


const Login = ({ isLoggedIn, loginUser, error }) => {

    let [ email, setEmail ] = useState()
    let [ password, setPassword ] = useState()

    if(isLoggedIn){
        return <Redirect to="/dashboard" />
    }

    const submit = (e) => {
        e.preventDefault()

        const signUser = {
            email,
            password
        }

        loginUser(signUser)
    }

    return (
        <div className="container mt-5">
            <Row>
                <Col className=" mt-5 mx-auto" sm={4}>
                    <h3 className="mt-5" align="center">Expense Tracker</h3>

                    { error && (
                            <Alert variant="danger" className="text-center mt-3" >{error}</Alert>
                        )}

                    <Form className="mt-4 mb-5" onSubmit={submit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={ e => setEmail(e.target.value) } placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={ e => setPassword(e.target.value) } placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" className="btn btn-block" type="submit">
                            Login
                       </Button>
                        <Form.Group controlId="formBasicPassword">
                            <Link to="/forgot">Forgot password?</Link>
                            <Link className="ml-5" to="/signup">Haven't an account yet?</Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state =>({
    isLoggedIn: state.isLoggedIn,
    error: state.error
})
export default connect(mapStateToProps, { loginUser })(Login)
