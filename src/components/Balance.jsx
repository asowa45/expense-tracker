/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import {money} from '../utils/money'

import { TransactionProvider } from '../App'
// import {TransactionContext} from '../contexts/TransactionContext'


const Balance = () => {


  const { transactions } = useContext(TransactionProvider)
  // const {transactions, setTransactions} = useContext(ActiveTransactions)
  let incomeBalance = 0;
  let expenseBalance = 0;
  
  transactions.filter((transaction)=>{
    
    (parseFloat(transaction.amount) > 0 ) ?incomeBalance += parseFloat(transaction.amount):expenseBalance += parseFloat(transaction.amount)

  })
  let totalBalance = incomeBalance + expenseBalance;

  let balanceClassName = totalBalance >= 0? "plus text-center":"minus text-center"
  return (
    <div>
        <h4 className='text-center'>Your Balance</h4>
        <h1 id="balance" className={balanceClassName}>{money(totalBalance)}</h1>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">{money(incomeBalance)}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">{money(expenseBalance)}</p>
          </div>
        </div>
    </div>
  )
}

export default Balance
