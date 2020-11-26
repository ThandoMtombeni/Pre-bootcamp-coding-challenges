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