import { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react'
// import { TransactionContext, TransactionProvider } from './contexts/TransactionContext'

export const TransactionProvider = createContext(null)

function App() {


  const [transactions, setTransactions] = useState([])
  // const { transactions, setTransactions } = useContext(TransactionContext)
  let apiUrl = '/api/expenses'

  useEffect(() => {
    const getAllTransactions = async() => {
      const response = await fetch(apiUrl)
      const allTransactions = await response.json()

      setTransactions(allTransactions)
      
    }
    return getAllTransactions;
  },[])


  const handleSubmit = async(data) => {

    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const response = await fetch(apiUrl)
    const allTransactions = await response.json()

      setTransactions(allTransactions)
    return;
}

  return (
    <>
    <TransactionProvider.Provider value={{transactions,setTransactions}}>
      <Header title="Expense Tracker" />

      <div className="container">
        
        <Balance />

        <Transactions />

        <AddTransaction  onSubmit={handleSubmit}/>

      </div>
      <ToastContainer />
    </TransactionProvider.Provider>
    </>
  )
}

export default App
