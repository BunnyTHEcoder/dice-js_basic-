
 

    var number1 = Math.floor(Math.random()*6)  + 1; 
    var number2 = Math.floor(Math.random()*6) + 1 ;
    var src1 = "images/dice" + number1 + ".png" ;
    var src2 = "images/dice" + number2 + ".png" ;
    document.querySelectorAll("img")[0].setAttribute("src", src1);
    document.querySelectorAll("img")[1].setAttribute("src" , src2);
    if(number1>number2){
        document.querySelector("h1").textContent = " Player 1 Wins";
    }
    if(number2>number1){
        document.querySelector("h1").textContent = " Player 2 Wins";
    }
    if(number1===number2){
        document.querySelector("h1").textContent = " Its a Tie";
    }
