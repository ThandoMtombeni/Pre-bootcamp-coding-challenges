//Task 6
function maxNum(num1, num2, num3){

    if(num1>=num2 && num1>=num3){
        return num1;
    }else if(num2>=num1 && num2>=num3){
        return num2;
    }else if(num3>=num1 && num3>=num2){ 
        return num3;}

}
maxNum(3,3,2);