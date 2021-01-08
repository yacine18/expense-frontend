import React, { useEffect } from 'react'
import { Card, CardGroup, Table } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import { Redirect } from 'react-router-dom'
import AdminTransaction from '../admin/AdminTransaction'
import { connect } from 'react-redux'
import { adminTransactions, adminUsers } from '../../actions/actions'
import Total from '../admin/Total'
import Searchbar from '../Searchbar';

const AdminDashboard = ({ allTransactions, adminTransactions, isAdmin, isLoggedIn, users, adminUsers }) => {

    useEffect(() => {
        adminTransactions()
        adminUsers()
    })

    if(!isAdmin && !isLoggedIn){
        return <Redirect to="/auth" />
    }

    return (
        <>
            <AdminNavbar />

            <div>
                <CardGroup className="mt-5 container" style={{ width: '60rem' }}>
                    <Total />
                    <Card bg="light" className="mr-3" style={{ borderRadius: 5, borderColor: 'orange' }}>
                        <Card.Body>
                            <Card.Title className="ml-3">Transactions</Card.Title>
                            <Card.Text className="ml-3">
                                {allTransactions && allTransactions.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="light" className="ml-1 mr-3" style={{ borderRadius: 5, borderColor: 'orange' }}>
                        <Card.Body>
                            <Card.Title className="ml-3">Users</Card.Title>
                            <Card.Text className="ml-3">
                                {users && users.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>

            </div>

            <div className="container mt-3">
                <Searchbar />
            </div>
            <h5 className="container mt-3">Recent Transactions</h5>
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

        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    allTransactions: state.allTransactions,
    isLoggedIn: state.isLoggedIn,
    users: state.users,
    isAdmin: state.isAdmin
})
export default connect(mapStateToProps, { adminTransactions, adminUsers })(AdminDashboard)
