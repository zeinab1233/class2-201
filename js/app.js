'use strict';

// comment for one line

/*
for multiple lines of code

DataTypes:
1. String
    - data inside '', ""
2. Number
    - integer 5
    - float 2.3
3. Boolean
    - True
    - False
*/

// let userName = prompt('Hello, Could you please enter your name');
// console.log(userName);
// console.log(typeof userName);

// still string
// let age = prompt('Hello, Could you please enter your age');
// console.log(age);
// console.log('before change it', typeof age);
// console.log(11 + age); //concatenation
// // I want to change the prompt data from string to number Number
// // age = Number(age);
// // console.log(age);
// // console.log('after change it', typeof age);
// // console.log(age + 10); //correct output

// // I want to change the prompt data from string to number parseInt

// age = parseInt(age);
// console.log(age);
// console.log('after change it', typeof age);
// console.log(age + 10); //correct output


/*
conditional statements:

if(condition is true){
    do this
}else{
    do this if condition is False
}

==  value only
=== value and datatype
*/

// let age = Number(prompt('Hello, Could you please enter your age'));

// if (age === 21) {
//     alert('you are 21');
// } else if (age > 18) {
//     alert('welcome');
// } else {
//     alert('you cant b/c you are toooo young');
// }

/*
switch(variable){
    case 'value1':
        do code ...
        break;
    case 'value2':
        do something else
        break;

    default :
        do if nothing match the cases
        break;
}

*/

 let maritalstate = prompt('are you married');
 console.log(maritalstate);
 switch (maritalstate.toUpperCase()) {
    case 'YES':
       alert('thats correct');
        break;
    case 'Y':
       alert('thats correct');
        break;
        case 'NO':
        alert('wrong answer, ive been married 3 years ago');
        break;
        case 'N':
        alert('wrong answer, ive been married 3 years ago');
        break;
    
        
}

 let travel = prompt('do you like traveling');

 switch (travel.toUpperCase()) {
     case 'YES':
        alert('THIS IS RIGHT I LOVE VISITING NEW PLACES');
         break;
     case 'Y':
        alert('THIS IS RIGHT I LOVE VISITING NEW PLACES');
         break;
         case 'NO':
         alert('UNFORTIONATELY THIS IS WRONG ANSWER');
         break;
         case 'N':
         alert('UNFORTIONATELY THIS IS WRONG ANSWER');
         break;
     
         }
         let nationality = prompt('are u jordanian');

         switch (nationality.toUpperCase()) {
             case 'YES':
                alert('THIS IS RIGHT , great job');
                 break;
             case 'Y':
                alert('THIS IS RIGHT , great job');
                 break;
             case 'NO':
                 alert('UNFORTIONATELY THIS IS WRONG ANSWER');
                 break;
             case 'N':
                 alert('UNFORTIONATELY THIS IS WRONG ANSWER');
                 break;
             
                 }
         let food = prompt('do u like mansaf');

        switch (food.toUpperCase()) {
             case 'YES':
                        alert('oh,yes i love mansaf');
                         break;
                     case 'Y':
                        alert('oh,yes i love mansaf');
                         break;
                     case 'NO':
                         alert(' WRONG ANSWER');
                         break;
                     case 'N':
                         alert(' WRONG ANSWER');
                         break;
                     
                         }
                         let actionmovies = prompt('do you like action movies');

                         switch (actionmovies.toUpperCase()) {
                             case 'YES':
                                alert('sorry,wrong answer');
                                 break;
                             case 'Y':
                                alert('sorry,wrong answer');
                                 break;
                                 case 'NO':
                                 alert('thats correct, i hate action movies and i like comedy movies ');
                                 break;
                                 case 'N':
                                 alert('thats correct, i hate action movies and i like comedy movies');
                                 break;
                             
                                 }

/*Logical Operators:

1. AND

true && true ==>   true
true && false ==>  false
false && false ==> false
false && true ==>  false

2. OR

true || true ==>   true
true || false ==>  true
false || false ==> false
false || true ==>  true


Git:
VCS ==> version control system
local machine

GitHub:
cloud
store code and collaborate with developers
*/