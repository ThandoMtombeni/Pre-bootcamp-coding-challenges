console.log("Hello World");
console.log("life goes on");

//TASK-1
var x = 0;
var y = 1;

console.log('x =', x );
console.log('and y =', y);

x = x + 3
y = y + x
console.log('x =', x );
console.log('and y =', y);

//TASK-2
x = 1 + 1 * 2
console.log(x);
y = (1 + 1) * 2
console.log(y);
z = 1 + ( 1 * 2 )
console.log(z);
a =  1 + 1 * 2 / 2
console.log(a);
b =  (1 + 1 * 2 ) /  2
console.log(b);

//Task 3
function add(num1, num2){

if(num1===65||num2===65||num1+num2===65){
    return true;
}else {return false;}

}
add();

//Task 4
function add2(num1,num2){

    if(num1===3||num2===3&&num1+num2>=3){
        return true;
    }else {return false;}
    
}
    add2();

//Task 5
function triangle(num1,num2,num3){

        var area = 0.5*(num1 + num2 + num3);

        return area; 
        //console.log(area);
}
    triangle(2,2,2);

//Task 6
function maxNum(num1, num2, num3){

        if(num1>num2 && num1>num3){
            return num1;
        }else if(num2>num1 && num2>num3){
            console.log(num2);
            return num2
        }else{return num3}
1
}
    maxNum(5,7,9);

//Task 7
function tempConvert(temp){
        var Fahrenheit = (temp * 9/5) + 32
        return Fahrenheit;
    }

    function tempConvert2(tempF){
       var celsius = (tempF - 32)*5/9
}

//Task 8
function time(num){

    var hours = (num / 60);
    var roundhours = Math.floor(hours);
    //console.log(roundhours);
    var minutes = (hours - roundhours) * 60;
    var roundminutes = Math.round(minutes);
     return roundhours + " hour(s) and " + roundminutes + " minute(s).";
 
}
console.log(time(71));
//Task 9
//function naturalNum(){
var sum =0;
for(i=0; i<1000; i++){

    if(i%3 === 0 || i%5 === 0){
        sum= sum + i
    }
  }
  console.log(sum);
//}

//console.log('wow');

//Task 10
var vowels = ['A','E','I','O','U','a','e','i','o','u' ];
var vowel_List=[];

function vowel(string){

    for(i=0; i<string.length; i++){

        var letter = string[i];
        //console.log(letter);
        if(vowels.includes(letter)){
           
            vowel_List.push(letter);
        }

    }
    console.log(vowel_List);
}
vowel('thando');

//Task 11
function comLetter(str1, str2){
var common =[];
    var arr_str1 =str1.split('');
    //console.log(arr_str1);

    for(i=0; i<str2.length; i++){
        var letter=str2[i];
        if(arr_str1.includes(letter)){

            common.push(letter);
        }
    }
    console.log(common);
}
comLetter('thando','thanpo');