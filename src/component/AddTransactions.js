import React, { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import Navbar from '../component/Navbar'
import { connect } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom'
import { addTransaction } from '../actions/actions'



const AddTransactions = ({ addTransaction, error, isLoggedIn }) => {

    let [label, setLabel] = useState('')
    let [amount, setAmount] = useState(0)

    const history = useHistory()

    if (!isLoggedIn) {
        return <Redirect to="/" />
    }

    const submit = e => {
        e.preventDefault()
        const postTransaction = {
            label,
            amount: +amount
        }
        
        addTransaction(postTransaction)
        history.push('/dashboard')

    }

    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <Row>
                    <Col className=" mt-5 mx-auto" sm={4}>
                        <h3 className="mt-5" align="center">Add Transaction</h3>
                        {error && (
                            <Alert variant="danger" className="text-center mt-3" >{error}</Alert>
                        )}
                        <Form className="mt-4 mb-5" onSubmit={submit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Label</Form.Label>
                                <Form.Control type="text" onChange={e => setLabel(e.target.value)} placeholder="Label" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Enter Amount</Form.Label>
                                <Form.Control type="number" onChange={e => setAmount(e.target.value)} placeholder="Enter Positive or Negative Amount" />
                            </Form.Group>

                            <Button variant="primary" className="btn btn-block" type="submit">
                                Add Transaction
                           </Button>
                           <Link to="/dashboard" variant="primary" className="btn btn-block">
                               Cancel
                           </Link>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    transactions: state.transactions,
    error: state.error,
    isLoggedIn: state.isLoggedIn
})
export default connect(mapStateToProps, { addTransaction })(AddTransactions)
