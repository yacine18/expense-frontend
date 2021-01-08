import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { editTransaction } from '../../actions/actions'
import { connect } from 'react-redux'

const EditTransaction = ({ error, editTransaction }) => {

    const [ label, setLabel ] = useState('')
    const [amount, setAmount] = useState(0)

    const submit = (e) => {
        e.preventDefault()
        const updateTransaction = {
            label,
            amount: +amount
        }

        editTransaction(updateTransaction)
        console.log(updateTransaction)
    }

    return (
        <>
            <AdminNavbar />

            <div className="container mt-5">
                <Row>
                    <Col className=" mt-5 mx-auto" sm={4}>
                        <h3 className="mt-5" align="center">Edit Transaction</h3>
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
                                Save Transaction
                       </Button>
                            <Link to="/admin" variant="primary" className="btn btn-block">
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
    isLoading: state.isLoading,
    error: state.error,
    allTransactions: state.allTransactions    
})
export default connect(mapStateToProps, { editTransaction })(EditTransaction)
