import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import AdminTransaction from './AdminTransaction'
import { connect } from 'react-redux'
import { adminTransactions } from '../../actions/actions'
import Searchbar from '../Searchbar';
import AdminNavbar from './AdminNavbar';



const AdminTransactions = ({ allTransactions, adminTransactions }) => {

    useEffect(() => {
        adminTransactions()
    })

    return (
        <>
        <AdminNavbar />
        <div>
          
            <div className="container mt-5">
                <Searchbar />
            </div>
            <>
                {allTransactions && allTransactions.length > 0 ? (
                    <Table className="mt-3 container" responsive="md">
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Label</th>
                                <th>Amount</th>
                                <th>Transaction Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {allTransactions && allTransactions.map(transaction => (<AdminTransaction key={transaction._id} transaction={transaction} />))}
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
    isLoading: state.isLoading,
    allTransactions: state.allTransactions    
})
export default connect(mapStateToProps, { adminTransactions })(AdminTransactions)
