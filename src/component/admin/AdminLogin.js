import React, { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { adminLogin } from '../../actions/actions'

const AdminLogin = ({ adminLogin, isLoggedIn, isAdmin, error }) => {

    let [ email, setEmail ] = useState('')
    let [ password, setPassword ] = useState('')

    if(isAdmin && isLoggedIn){
        return <Redirect to="/admin" />
    }

    const submit = (e) => {
          e.preventDefault()
          const signAdmin = {
              email,
              password
          }

          adminLogin(signAdmin)
    }

    return (
        <div>
            <Row>
                <Col className=" mt-5 mx-auto" sm={4}>
                    <h3 className="mt-5" align="center">Expense Tracker</h3>
                    <p className="mt-3" style={{fontSize:20}} align="center">Admin Panel</p>

                    {error && (
                        <Alert variant="danger" className="text-center mt-3" >{error}</Alert>
                    )}

                    <Form className="mt-4 mb-5" onSubmit={submit} >
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
                            <Link to="/forgot-password">Forgot password?</Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state => ({
    isAdmin: state.isAdmin,
    isLoggedIn: state.isLoggedIn,
    error: state.error
})
export default connect(mapStateToProps, { adminLogin })(AdminLogin)
