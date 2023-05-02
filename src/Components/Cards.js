import React, { useState } from 'react'

const Cards = ({readAccount,setRead}) => {
  //  console.log(readAccount) 
  const[customerName,setCustomerName]=useState('') ;
  const array=[]
  // console.log(customerName)
  const[accountNumber,setCustomerNumber]=useState('') ;
  const[accountType,setCustomer]=useState('') ;
    function handelSubmit(event){
    event.preventDefault();
    const id = readAccount.length ? readAccount[readAccount.length - 1].id + 1 : 1;
    const newItem={id,customerName,accountNumber,accountType}
    const newAccount=[...readAccount,newItem]
    setRead(newAccount)
    localStorage.setItem("bankaccount",JSON.stringify(readAccount))
  }
  
  
  
  const handleDelete = (id) => {
    const newAccount= readAccount.filter((item) => item.id !== id);
    setRead(newAccount)
    localStorage.setItem("bankaccount",JSON.stringify(readAccount))
    
  }
  // setRead(JSON.parse(localStorage.getItem("bankaccount")))
  
  return (
    <div>
    {/* <main> */}
{/* {readLocalEmpty&&<p>Add Data</p>}
{!readLocalEmpty&& */}


<div className='cards'>

  {
    
    readAccount.map((customer)=>(
      <div className='card'>

        <p>{customer.customerName}</p>
        <p>{customer.accountNumber}</p>
        <p>{customer. accountType}</p>
        <button onClick={() => handleDelete(customer.id)}>delete</button>
       </div> 
    ))
  }
</div>
{/* } */}
      {/* </main>    */}
      <br></br>

        <form action="" onSubmit={handelSubmit} >
  <label for="fname"> add customerName</label>
  <input type="text" id="fname" name="fname" value={customerName} onChange={(event)=>setCustomerName(event.target.value)} />
  <br></br>
  <label for="lname">add accountNumber</label>
  <input type="number" id="lname" name="lname" value={accountNumber} onChange={(event)=>setCustomerNumber(event.target.value)}/>
  <br></br>
  <label for="lname">add accountType</label>
  <input type="text" id="lname" name="lname" value={accountType} onChange={(event)=>setCustomer(event.target.value)} />
  <br></br>

  <button onClick={(e) => handelSubmit(e)}>submit</button>
</form>

    </div>
  )
}

export default Cards



