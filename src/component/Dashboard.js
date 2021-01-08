import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import Navbar from './Navbar'
import TransactionsList from './TransactionsList'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-5 ml-3" style={{alignItems: 'normal'}}>
                <Balance />
                <IncomeExpense />
                <TransactionsList />
            </div>
        </div>
    )
}

export default Dashboard
