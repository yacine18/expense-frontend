import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { deleteTransaction } from '../../actions/actions'
import { Link } from 'react-router-dom'

const AdminTransaction = ({ transaction, deleteTransaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <tbody>
            <tr>
                <td>{transaction._id}</td>
                <td className={ transaction.amount < 0 ? 'text-danger' : 'text-success' } >{transaction.label}</td>
                <td className={ transaction.amount < 0 ? 'text-danger' : 'text-success' } >{sign}${Math.abs(transaction.amount)}</td>
                <td>{transaction.created_at}</td>
                <td>
                  <Link to={`/edit-transaction/${transaction._id}`} className="btn" ><FontAwesomeIcon className="text-info" icon={faEdit} /></Link>
                  <button className="btn ml-1" onClick={ () => deleteTransaction(transaction._id)}><FontAwesomeIcon className="text-danger" icon={faTrash} /></button>
                </td>

            </tr>
        </tbody>
    )
}

const mapStateToProps = state => ({
    allTransactions: state.allTransactions,
})
export default connect(mapStateToProps, { deleteTransaction })(AdminTransaction)