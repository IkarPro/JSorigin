'use strict';

let money,
    time,
    expenses = {};

money = prompt('Your monthly budget?');
time = prompt('Your date in format - YYYY-MM-DD');

let arrExpenses = [prompt('Obyazatelnaya statiya rashodov'),
    prompt('Price'),
    prompt('Obyazatelnaya statiya rashodov'),
    prompt('Price')];
expenses[arrExpenses[0]] = arrExpenses[1];
expenses[arrExpenses[2]] = arrExpenses[3];

let appData = {
    budget : money,
    timeData : time,
    expensesData : expenses,
    optionalExpensesData : {},
    income : [],
    savings : false
};

alert('Budget na odin den - ' + money/30);