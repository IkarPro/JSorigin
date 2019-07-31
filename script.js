'use strict';


let money = +prompt('Your monthly budget?'),
    time = prompt('Your date in format - YYYY-MM-DD');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

/*for (let i = 0; i < 2; i++) {
    let a = prompt('Obyazatelnaya statiya rashodov'),
        b = prompt('Price');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
}*/

/*let i = 0;
while (i<2) {
    let a = prompt('Obyazatelnaya statiya rashodov'),
        b = prompt('Price');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
}*/

let i = 0;
do {
    let a = prompt('Obyazatelnaya statiya rashodov'),
        b = prompt('Price');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
} while (i < 2)

appData.moneyPerDay = appData.budget/30;

if (appData.moneyPerDay <= 100){
    console.log('minimum');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('norm');
} else if (appData.moneyPerDay >= 2000){
    console.log('high');
} else {
    console.log('error');
}

alert(appData.moneyPerDay);