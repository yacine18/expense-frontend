import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faUserTimes, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { deleteUser } from '../../actions/actions'

const AdminTransaction = ({ user, deleteUser,  }) => {

    return (
        <tbody>
            <tr>
                <td>{user._id}</td>
                <td >{user.name}</td>
                <td>{user.email}</td>
                <td>{ user.isAdmin ? <FontAwesomeIcon className="text-success" icon={faCheck} /> : <FontAwesomeIcon className="text-danger" icon={faTimes} /> }</td>
                <td>
                  <button className="btn" onClick={ () => alert('You Clicked Me')}><FontAwesomeIcon className="text-info" icon={faUserEdit} /></button>
                  <button className="btn ml-1" onClick={ () => deleteUser(user._id)}><FontAwesomeIcon className="text-danger" icon={faUserTimes} /></button>
                </td>

            </tr>
        </tbody>
    )
}

const mapStateToProps = state => ({
    users: state.users,
})
export default connect(mapStateToProps, { deleteUser })(AdminTransaction)