let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;



 //1-ARİTMETİK OPERATÖRLER 
           // +, -, *, %, /, ++, -- vs...
            result = number2 + number3;
            result = number1 - number3;
            result = number3 % number1;
            result = number3 % 9;
             //soldaki değişkene +1 ekler

// 2- ATAMA OPERTÖRLER
            // =, +=, -=, /=, *=, %=
            result = number1;
            result +=  number2;
            
//  3- KARŞILAŞTIRMA OPERATÖRLER
            // ==, !=, ===, >, <, >=, >=

            result = number1 == number2;
            result = number =! number2;
            result = 10 == 10;
            result = number1 > number2;
            // büyük, küçük, büyükeşit, küçükeşit aynı şrkilde çalışır

//  4- MANTIKSAL OPERATÖRLER
            // && (ve), || (veya), !: (tersi)

            // &&(ve):

            // &&(ve): iki şartı da sağlarsa true verir 
            console.log(number1 !== number2 && number1 > number2); // false

            // || (veya): bir şartı sağlarsa true verir
            console.log(number1 > number3 || number1 === number1); //true



