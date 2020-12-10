//Task 8
function time(num){

    var hours = (num / 60);
    var roundhours = Math.floor(hours);
    //console.log(roundhours);
    var minutes = (hours - roundhours) * 60;
    var roundminutes = Math.round(minutes);
    if(roundhours > 1 && roundminutes> 1 ){return roundhours + " hours and " + roundminutes + " minutes";}
    else if(roundhours > 1 && roundminutes <= 1 ){return roundhours + " hours and " + roundminutes + " minute.";}
    else if(roundhours <= 1 && roundminutes > 1 ){return roundhours + " hour and " + roundminutes + " minutes.";}
    else{return roundhours + " hour and " + roundminutes + " minute.";}
 
}
console.log(time(71));
