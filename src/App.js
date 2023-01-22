
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Search from './components/Search';
import Table from './components/Table';

function App() {
  const {transactions, setTransactions} =useState([])

  useEffect(()=>{
    fetch('https://royalyutek-production.up.railway.app/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
    
  }, [])

//   function deleteTransaction(id){
//     const updatedTransactions = transactions.filter(transaction => transaction.id !== id)
//     setTransactions(updatedTransactions)
//   }
//   function updateTransaction(id) {
//     const updatedTransactions = transactions.map(transaction => {
//         if (transaction.id === id) {
//             return { ...transaction}
//         } else {
//            return transaction
//         }
//     })
//     setTransactions(updatedTransactions)
// }


  return (
    <div className="container">
      <Header />
      <Search />
      <Input />
      <Table/>

 
    </div>
  );
}

export default App;
