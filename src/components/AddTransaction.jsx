import React from 'react'
import { useState } from 'react'
import {toast} from 'react-toastify'
import {generateId} from '../utils/general'

const AddTransaction = ({onSubmit}) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)

    const addTransaction = (e) => {

        e.preventDefault();
        const newTransaction = {
            id: generateId(4),
            name,
            amount
        }

        setName('')
        setAmount(0)

        toast.success("Added transaction")

        onSubmit(newTransaction);
    }

  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={addTransaction}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} id="amount" onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
          </div>
          <button className="btn" type='submit'>Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction
