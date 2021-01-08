import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getTransactions } from '../actions/actions'

const IncomeExpense = ({ transactions }) => {
    const amounts = transactions && transactions.map(transaction => transaction.amount)
    const income = (
        amounts && amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    )

    const expense = (
        amounts && amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
      )

    return (
        <div className="container mt-3">
            <CardGroup style={{ width: '40rem' }}>
                <Card bg="light" style={{ borderRadius: 5 }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'green' }} className="ml-3">Incomes</Card.Title>
                        <Card.Text style={{ color: 'green' }} className="ml-3">
                            ${income}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="light" className="ml-1" style={{ borderRadius: 5 }}>
                    <Card.Body style={{ color: 'red' }}>
                        <Card.Title className="ml-3">Expenses</Card.Title>
                        <Card.Text className="ml-3">
                            ${expense}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

const mapStateToProps = state => ({
    transactions: state.transactions
})
export default connect(mapStateToProps, { getTransactions })(IncomeExpense)
