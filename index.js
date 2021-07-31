
function insertNumber(number){

    var existingdNumber = $("#result").val();

    $("#result").val(existingdNumber + number);
}

function clearResult(){

    $("#result").val('');
}

function calculate(){

    var res = eval($("#result").val());
    $("#result").val(res);
}

function deleteNumber(){

    var presentValue = $("#result").val();

    if(presentValue != ''){

        $("#result").val(presentValue.slice(0,-1));
    }
}



function reverseNumber(){


    var presentSign = $("#result").val();
   
    if(presentSign > 0 ){

        $("#result").val("-" + presentSign);
        
    }
    else if(presentSign < 0){

        $("#result").val(presentSign*-1);

    }else{
        $("#result").val();}


 }

    





// for keyboard input

document.addEventListener("keypress", function(event){


    if((event.key >=0 && event.key <= 9 )||(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '%')){

        var existingdNumber = $("#result").val();
        textButton = event.key;
                
        $("#result").val(existingdNumber + textButton);
    }else{
        alert("please enter valid number (0-9)");
    }
                   
});




// document.addEventListener("keypress", function(event){

//     if(event.key == "Enter"){

//         calculate();
//     }
    
//     else{

//         var existingdNumber = $("#result").val();
//         textButton = event.key;
    
//         $("#result").val(existingdNumber + textButton);
//     }
     
// });