import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import { connect } from 'react-redux'
import { loadAdmin } from '../../actions/actions'

const AdminProfile = ({ adminUser, loadAdmin, isAdmin, isLoggedIn }) => {

    useEffect( () => {
        loadAdmin()
    })

    if(isLoggedIn && isAdmin){
        return <Redirect to="/account" />
    }

    return (
        <div>
            <AdminNavbar />
            <Card style={{ width: '30rem' }} className="container mt-5">
                <Card.Title className="mx-auto mt-4" style={{ fontWeight: 'bold', fontSize: 22 }}>
                    {adminUser && adminUser.name} 
                    <div style={{ fontSize: 12, fontWeight: 'normal' }}>
                     ID: {adminUser && adminUser._id}
                    </div>
                </Card.Title>
                <Card.Body className="mx-auto mt-4" style={{ fontSize: 17 }}>
                    Email: {adminUser && adminUser.email}
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    isAdmin: state.isAdmin,
    isLoggedIn: state.isLoggedIn,
    adminUser: state.adminUser
})
export default connect(mapStateToProps, { loadAdmin })(AdminProfile)
