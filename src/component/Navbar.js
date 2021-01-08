import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/actions'


const NavHeader = ({ isLoggedIn, user, logOut }) => {

    const history = useHistory()
    const profile = () => history.push('/profile')

    // console.log(user && user.name)

    if(!isLoggedIn){
        return <Redirect to="/" />
    }
    
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link className="text-decoration-none ml-2" style={{ color: 'white', fontSize: 24 }} to="/dashboard">Expense Tracker</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown style={{ fontSize: 17, color: 'red' }} className="mr-2 ml-auto text-decoration-none" title={`Hi, ${user && user.name}`}>
                            <NavDropdown.Item onClick={profile}>Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ color: 'red' }} onClick={() => logOut()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    user: state.user
})
export default connect(mapStateToProps, { logOut })(NavHeader)
