import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/actions'

const Profile = ({ user, loadUser, isLoggedIn}) => {

    useEffect(() => {
       loadUser()
    })

    if(!isLoggedIn){
        return <Redirect to="/" />
    }

    return (
        <div sm={4}>
            <Navbar />
            <Card style={{ width: '30rem' }} className="container mt-5">
                <Card.Title className="mx-auto mt-4" style={{ fontWeight: 'bold', fontSize: 22 }}>
                    {user && user.name} 
                    <div style={{ fontSize: 12, fontWeight: 'normal' }}>
                     ID: {user && user._id}
                    </div>
                </Card.Title>
                <Card.Body className="mx-auto mt-4" style={{ fontSize: 17 }}>
                    Email: {user && user.email}
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
})
export default connect(mapStateToProps, { loadUser })(Profile)
