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