import React from 'react'
import { connect } from 'react-redux'
import { adminTransactions } from '../../actions/actions'
import { Card } from 'react-bootstrap';


const Total = ({ allTransactions }) => {

    const amounts = allTransactions && allTransactions.map(transaction => transaction.amount)
    const total = amounts && amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div>
            <Card bg="light" className="mr-3" style={{ borderRadius: 5, borderColor: 'orange', width: '17rem' }}>
                <Card.Body>
                    <Card.Title className="ml-3">Total Transactions</Card.Title>
                    <Card.Text className="ml-3">
                        ${total}
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    allTransactions: state.allTransactions,
})
export default connect(mapStateToProps, { adminTransactions })(Total)
