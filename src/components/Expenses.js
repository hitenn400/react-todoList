import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import {useState} from 'react';
function Expenses(props){
    const[enteredYear,setEnteredYear]=useState(2020);
    const filterChangeHandler=(selectedYear)=>{
        setEnteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===enteredYear;
    });
    let expensesContent = <p>No Expenses found</p>;
    if(filteredExpenses.length>0){
        expensesContent= (filteredExpenses.map((expense)=> <ExpenseItem 
        key={expense.id} 
        title={expense.title} 
        amount = {expense.amount} 
        date ={expense.date}>
        </ExpenseItem>));
    }
    
    return(
        <div>
        <ExpensesFilter selected={enteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        {expensesContent}
        {/* <ExpenseItem title={props.items[0].title} date = {props.items[0].date} amount = {props.items[0].amount} ></ExpenseItem>
        <ExpenseItem title={props.items[1].title} date = {props.items[1].date} amount = {props.items[1].amount} ></ExpenseItem>
        <ExpenseItem title={props.items[2].title} date = {props.items[2].date} amount = {props.items[2].amount} ></ExpenseItem>
        <ExpenseItem title={props.items[3].title} date = {props.items[3].date} amount = {props.items[3].amount} ></ExpenseItem> */}
        </div>
    );
}
export default Expenses;