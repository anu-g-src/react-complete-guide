import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;
  });
 /*
  let filterContent=<p>No Expense found!</p>;
  if(filteredExpenses.length >0){
    filterContent=filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }*/
  return (
    <li>
    <Card className="expenses">
      {
          /* 
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} /> */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
      {
      //filterContent
      /* {
        filteredExpenses.length === 0 &&  (<p>No Expense found!</p>)
      }
      {
        filteredExpenses.length > 0 &&
        (filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      } */}

    </Card>
    </li>
  );
}

export default Expenses;