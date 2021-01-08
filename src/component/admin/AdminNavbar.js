import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux'
import { loadAdmin, adminLogout } from '../../actions/actions'


const AdminNavbar = ({adminUser, isAdmin, isLoggedIn, adminLogout}) => {

    // console.log(token)

    const history = useHistory()

    if(!isAdmin && !isLoggedIn){
        return <Redirect to="/auth" />
    }

    const adminProfile = () => history.push('/account')

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link className="text-decoration-none ml-2" style={{ color: 'white', fontSize: 24 }} to="/admin">Admin Panel</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Link className="text-decoration-none ml-5" style={{ color: 'white', fontSize: 18 }} to="/transactions">Transactions</Link>
                <Link className="text-decoration-none ml-4" style={{ color: 'white', fontSize: 18 }} to="/users">Users</Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown style={{ fontSize: 17, color: 'red' }} className="mr-2 ml-auto text-decoration-none" title={`Hi, ${adminUser && adminUser.name}`}>
                        <NavDropdown.Item onClick={adminProfile}>Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item style={{ color: 'red' }} onClick={ () => adminLogout() } >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    isAdmin: state.isAdmin,
    isLoggedIn: state.isLoggedIn,
    adminUser: state.adminUser
})
export default connect(mapStateToProps, { loadAdmin, adminLogout })(AdminNavbar)
