import React from 'react'

const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <tbody>
            <tr>
                <td>{transaction._id}</td>
                <td className={ transaction.amount < 0 ? 'text-danger' : 'text-success' } >{transaction.label}</td>
                <td className={ transaction.amount < 0 ? 'text-danger' : 'text-success' } >{sign}${Math.abs(transaction.amount)}</td>
                <td>{transaction.created_at}</td>

            </tr>
        </tbody>
    )
}

export default Transaction
