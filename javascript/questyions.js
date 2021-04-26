'use strict'


function myFunction() {

    let grade = 0;

    let question1 = prompt("Are you planing to join our comunity and learn HTML,CSS & JavaScript ?? [y/n]");
    switch (question1.toLowerCase()) {
        case "y":
            console.log("first question true answer");
            grade = grade + 1;
            break;
        case "n":
            console.log("first question false answer");
            grade = grade;
            break;
        default:
            console.log("first question false answer");
            grade = grade;
            break;

    }
    let question2 = prompt("Do you think it will be nice journey while studying with us ?? [y/n]");
    switch (question2.toLowerCase()) {
        case "y":
            console.log("second question true answer");
            grade = grade + 1;
            break;
        case "n":
            console.log("second question false answer");
            grade = grade;
            break;
        default:
            console.log("second question false answer");
            grade = grade;
            break;

    }
    let question3 = prompt("Do you think it will be easy journey ?? [y/n]");
    switch (question3.toLowerCase()) {
        case "n":
            console.log("third question true answer");
            grade = grade + 1;
            break;
        case "y":
            console.log("third question false answer");
            grade = grade;
            break;
        default:
            console.log("third question false answer");
            grade = grade;
            break;

    }
    
    let question4 = prompt("Do you think I will be success development ?? [y/n]");
    
    switch (question4.toLowerCase()) {
        case "y":
            console.log("fourth question true answer");
            grade = grade + 1;
            break;
        case "n":
            console.log("fourth question false answer");
            grade = grade;
            break;
        default:
            console.log("fourth question false answer");
            grade = grade;
            break;

    }
    let question5 = prompt("Are you interesting to start ?? [y/n]");
    switch (question5.toLowerCase()) {
        case "y":
            console.log("fifth question true answer");
            grade = grade + 1;
            break;
        case "n":
            console.log("fifth question false answer");
            grade = grade;
            break;
        default:
            console.log("fifth question false answer");
            grade = grade;
            break;

    }
    
    
   
   

    console.log("the last result " , grade);

    alert("Your result = " + grade );

}




