import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses=(props)=>{

    const [isEditing,setIsEditing]=useState(false);

    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            title:enteredExpenseData.enteredTitle,
            amount:enteredExpenseData.enteredAmount,
            date: new Date(enteredExpenseData.enteredDate),
            id:Math.random().toString()
        }
        stopEditingHandler();
        props.onAddExpense(expenseData);
    };

    const startEditingHandler=()=>{
        setIsEditing(true);
    };
    const stopEditingHandler=()=>{
        setIsEditing(false);
    };
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
};

export default NewExpenses;