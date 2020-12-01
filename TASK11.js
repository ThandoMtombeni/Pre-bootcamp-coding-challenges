//Task 11
function comLetter(str1, str2){
    var common =[];
        var arr_str1 =str1.split('');
    
        for( var i=0; i<str2.length; i++){
            var letter=str2[i];
            if(arr_str1.includes(letter)){
    
                common.push(letter);
            }
        }

        console.log('Common letters:',common.join());
    }
    comLetter('thando','thanpo');