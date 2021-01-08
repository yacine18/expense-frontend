import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getTransactions } from '../actions/actions'

const Balance = ({transactions}) => {
    
    const amounts = transactions && transactions.map( transaction => transaction.amount )
    const total = amounts && amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className="container" >
            <CardGroup style={{width:'22rem'}}>
            <Card bg="light" variant="dark" style={{ width: '12rem', height:'6rem', borderRadius:5}}>
                <Card.Body>
                    <Card.Title style={{fontSize:20}}>Balance</Card.Title>
                    <Card.Text style={{fontSize:20}}>
                       ${total}
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
export default connect(mapStateToProps, { getTransactions })(Balance)
