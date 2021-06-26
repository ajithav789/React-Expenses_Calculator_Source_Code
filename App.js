import React,{useState} from "react";
import ExpenseItemRender from "./components/Expenses/ExpenseItemRender";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 20,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 200,
    date: new Date(2021, 1, 4),
  },
  { 
    id: "e3",
    title: "Food",
    amount: 100, 
    date: new Date(2020, 4, 5) },

  { 
    id: "e4", 
    title: "Soap",
    amount: 10, 
    date: new Date(2020, 5, 4) },
];


const App=() => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses=>{return [expense,...prevExpenses]});
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemRender expenses={expenses} />
    </div>
  );
}

export default App;
