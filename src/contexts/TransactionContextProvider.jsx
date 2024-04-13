import { useState } from "react";

import TransactionContext from "./TransactionContext";

const TransactionContextProvider = ({children}) => {
    const [transactions, setTransactions] = useState();

    return (
        <TransactionContext.Provider value={{transactions, setTransactions}}>
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionContextProvider;