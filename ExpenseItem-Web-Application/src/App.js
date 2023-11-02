import Expenses from "./components/Expenses/Expenses";
import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMY_EXEPENSE = [];

const App = () => {
    const [expenses, setExpense] = useState(DUMY_EXEPENSE);
    function fetchData() {
        fetch("http://localhost:2345/api/expenses").then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                // console.log(data);
                setExpense(data);
            }
        );
    }
    useEffect(() => {
        fetchData();
    }, []);

    const addExpenseHandler = (expense) => {
        // Create a new object without the 'id' property
        const expenseWithoutId = { ...expense };
        delete expenseWithoutId.id; // Remove the 'id' property
    
        // console.log("Expense Object (without 'id'):", expenseWithoutId);
    
        fetch('http://localhost:2345/api/expenses/post', {
            method: 'POST',
            body: JSON.stringify(expenseWithoutId),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            fetchData();
        });
    };
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}
export default App;