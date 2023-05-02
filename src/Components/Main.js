import React from 'react'
import { useState } from 'react'
import Cards from './Cards'

const Main = () => {
const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            }
    ]
}
const[readAccount,setRead]=useState(initState.accounts)
// console.log(readAccount)
  return (
    <div>

        
        <Cards
         readAccount={readAccount}
        setRead={setRead}
        />
        
    </div>

  )
}

export default Main