/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext(null);

export const TransactionProvider = ({children}) => {
    const [transactions, setTransactions] = useState(null);

    let apiUrl = '/api/expenses'

    useEffect(() => {
        const getAllTransactions = async() => {
          const response = await fetch(apiUrl)
          const allTransactions = await response.json()
    
          setTransactions(allTransactions)
          
        }
        return getAllTransactions;
      },[])

    return (
        <TransactionContext.Provider value={{transactions, setTransactions}}>
            {children}
        </TransactionContext.Provider>
    );
}
