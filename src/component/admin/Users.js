import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import { adminUsers } from '../../actions/actions'
import AdminNavbar from './AdminNavbar';
import User from './User'
import SearchUser from './SearchUser'


const Users = ({users, adminUsers}) => {

    useEffect(()=> {
        adminUsers()
    })

    return (
        <>
        <AdminNavbar />
        <div>
          
            <div className="container mt-5">
                <SearchUser />
            </div>
            <>
                {users && users.length > 0 ? (
                    <Table className="mt-3 container" responsive="md">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {users && users.map(user => (<User key={user._id} user={user} />))}
                    </Table>
                ) : (
                        <h6 style={{ fontSize: 15 }} className="mt-3 text-center">No Users Found.</h6>
                    )}


            </>
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    users: state.users    
})
export default connect(mapStateToProps, { adminUsers })(Users)
