/* eslint-disable react/prop-types */
import { useContext } from 'react';
import {money} from '../utils/money'
import {toast} from 'react-toastify'
import { TransactionProvider } from '../App'
// import {TransactionContext} from '../contexts/TransactionContext';

    // const transactions = useContext(ActiveTransactions);
const Item = ({item}) => {


  const { transactions, setTransactions } = useContext(TransactionProvider)
    // const {transactions, setTransactions} = useContext(ActiveTransactions)

    const deleteTransaction = async(id) => {
        //For JSON Server Use
        // const response = await fetch(`/api/expenses/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })

        // if (response.ok) {
        //     toast.success("Deleted transaction")
        // } else {
        //     toast.error("Failed to delete transaction")
        // }
        // console.log(transactions);

        // const newTransaction = transactions.filter(transaction => transaction.id !== id)

        // setTransactions(newTransaction)
        //End of For JSON Server Use
        const newTransaction = transactions.filter(transaction => transaction.id !== id)

        setTransactions(newTransaction)
        return
    }

    const getClass = (item.amount >= 0) ? 'plus' : 'minus';
  return (
    <li className={getClass}> 
        {item.name} 
        <span>{money(item.amount)}</span>
        <button onClick={()=>{
            deleteTransaction(item.id);
        }} className="delete-btn">x</button>
    </li>
  )
}

export default Item
