import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import {useState} from 'react';
function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,21);
    // const expenseTitle = 'Car insurance';
    // const expenseAmount = 246;
    // const month = props.date.toLocaleString('en-US',{month:'long'});
    // const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year = props.date.getFullYear();
    
    
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
               <h2> {props.title} </h2>
               <div  className='expense-item__price'> ${props.amount} </div>
            </div>
            
        </div>


    );
}
export default ExpenseItem;