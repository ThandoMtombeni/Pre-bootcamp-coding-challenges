//Task 5
function triangle(num1,num2,num3){

    var s = 0.5*(num1 + num2 + num3);

    var area =Math.sqrt(s*(s-num1)*(s-num2)*(s-num3));
    return area;
}
triangle(2,2,2);