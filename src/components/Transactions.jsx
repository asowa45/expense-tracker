/* eslint-disable react/prop-types */
import Item from './Item'
import { useContext } from 'react'
import { TransactionProvider } from '../App'
// import {TransactionContext} from '../contexts/TransactionContext'

const Transactions = () => {

  const { transactions } = useContext(TransactionProvider)
  // const {transactions, setTransactions} = useContext(ActiveTransactions)

  return (
    <div>
        <h3>History</h3>
        {(transactions.length < 1) ? 
        (<h4 className='text-muted'>No transactions recorded</h4>):
        (
          <ul id="list" className="list">
          {
            transactions.map(transaction => (
              <Item key={transaction.id} item={transaction} />
            ))
          }
        </ul>
        )}
    </div>
  )
}

export default Transactions
