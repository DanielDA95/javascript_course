/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
   Paranthesis
   Exponents
   Multiplication 5 / 5 * 4
   Division
   Addition
   Subtraction
*/

var num = 5 + (5 * 10) / 6**2 - 1;
var num = 5 / 5 * 4;


2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = '100';

var convertedNum = + strNum;

convertedNum; // 100


//______________________________________________________________________________________________________________________
//Asignacion de operadores compuestos

var name = 'Tiffany';

var sum = 0;

var gradeOne = 100;

var gradeTwo = 80;

sum += gradeOne; // 100

sum; // 100

sum += gradeTwo; // 180

sum *= gradeTwo; // 14400
