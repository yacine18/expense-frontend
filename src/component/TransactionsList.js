import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import Searchbar from './Searchbar';
import Transaction from './Transaction'
import { connect } from 'react-redux'
import { getTransactions } from '../actions/actions'
import { useHistory } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'


const TransactionsList = ({ transactions, getTransactions }) => {

    useEffect(() => {
        getTransactions()
    })

    // console.log(transactions)

    const history = useHistory()
    const addTransaction = () => history.push('/add-transaction')

    return (
        <>
            <div className="container mt-3" sm={4}>
                <div>
                    <Searchbar />
                </div>
                <h6 className="mt-3">{transactions && transactions.length} Transactions </h6>
                <div>
                    <Button onClick={addTransaction}>Add Transaction</Button>
                </div>
                        <>
                            {transactions && transactions.length > 0 ? (
                                <Table className="mt-3" responsive="md">
                                    <thead>
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Label</th>
                                            <th>Amount</th>
                                            <th>Transaction Date</th>
                                        </tr>
                                    </thead>
                                    {transactions && transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
                                </Table>
                            ) : (
                                    <h6 style={{ fontSize: 15 }} className="mt-3 text-center">No Transactions Found.</h6>
                                )}


                        </>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    transactions: state.transactions,
})
export default connect(mapStateToProps, { getTransactions })(TransactionsList)
