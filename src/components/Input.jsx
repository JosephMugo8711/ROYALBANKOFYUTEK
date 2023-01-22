import { useState } from "react"

function Input({onAddTransaction}){
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)

  function handleSubmit(e){
    e.preventDefault()
    const inputedData = {
      transaction: {
        date: date,
        description: description,
        category:category,
        amount: amount
      }
    }
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(inputedData)
  })
      .then(res => res.json())
      .then(data => onAddTransaction(data))

  }
  return(
    <div>
    <form className="row p-3" onSubmit={handleSubmit}>
        <div className="col-3">
         <input name="date" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}  className="form-control form-control-sm"   placeholder="date" aria-label=".form-control form-control-sm" />  
         </div>
          <div className="col-3">
         <input type="text" name="description"  id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control form-control-sm"  placeholder="description" aria-label="form-control form-control-sm" />  
        </div>
         <div className="col-3">
        <input type="text" name="category"id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control form-control-sm"   placeholder="category" aria-label="form-control form-control-sm" />  
        </div>
        <div className="col-3">
       <input type="text" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control form-control-sm"  placeholder="amount" aria-label="form-control form-control-sm" />  
       </div>
       <div className="col-3  mx-auto p-3">
       
       <input type="submit" value="SUBMIT"/>
        </div>
       <div className="col-3  mx-auto p-3">
        <button className="btn btn-sm btn-success mx-auto" type="button">Delete</button>
        </div>
        <div className="col-3  mx-auto p-3">
        <button className="btn btn-sm btn-success mx-auto" type="submit">Collapse</button>
        </div>
          </form>
          </div>
)

}


// const Input = () =>{
  
//     function submitData(event){
//       event.preventDefault()
//   const inputData={
//     date:event.target.date.value,
//     description:event.target.description.value,
//     category:event.target.category.value,
//     amount:event.target.amount.value
//   }
//     const config ={
//       method:'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body:JSON.stringify(inputData)
//     }
    
//     fetch('http://localhost:3000/transactions',config)
//     .then(response=>response.json())
//     .then(data=>console.log(data))
    
//       }
  
  
  
//       return(
//           <div>
//           <form className="row p-3" onSubmit={submitData}>
//               <div className="col-3">
//                <input name="date" type="date" className="form-control form-control-sm"   placeholder="date" aria-label=".form-control form-control-sm" />  
//                </div>
//                 <div className="col-3">
//                <input type="text" name="description"  className="form-control form-control-sm"  placeholder="description" aria-label="form-control form-control-sm" />  
//               </div>
//                <div className="col-3">
//               <input type="text" name="category" className="form-control form-control-sm"   placeholder="category" aria-label="form-control form-control-sm" />  
//               </div>
//               <div className="col-3">
//              <input type="text" name="amount" className="form-control form-control-sm"  placeholder="amount" aria-label="form-control form-control-sm" />  
//              </div>
//              <div className="col-3  mx-auto p-3">
//           <input type="submit" value="SUBMIT"/>
//               </div>
//              <div className="col-3  mx-auto p-3">
//               <button className="btn btn-sm btn-success mx-auto" type="button">Delete</button>
//               </div>
//               <div className="col-3  mx-auto p-3">
//               <button className="btn btn-sm btn-success mx-auto" type="submit">Collapse</button>
//               </div>
//                 </form>
//                 </div>
//       )
//   }
  
  
  export default Input