'use strict'


function myFunction() {

    let grade = 0;
    // question 1
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

    // question 2
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

    // question 3
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


    // question 4
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


    //question 5
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


    // question 6
    let question6 = parseInt(prompt("You have 4 attempts to solve this question. If boy's old is 10, and his sister's old is half of his old , after 10 years his old will be 20 , what is his sister's old at that time ??"));
    for (let i = 1; i < 4; i++) {
        if (question6 == 15) {
            alert("Great !! ");
            grade++;
            break;
        } else if (question6 > 15) {
            question6 = parseInt(prompt(`Too high ,You have ${4 - i} attempts to solve this question. If boy's old is 10, and his sister's old is half of his old , after 10 years his old will be 20 , what is his sister's old at that time ??`));
        } else {
            question6 = parseInt(prompt(`Too low ,You have ${4 - i} attempts to solve this question. If boy's old is 10, and his sister's old is half of his old , after 10 years his old will be 20 , what is his sister's old at that time ??`));

        }
    }

    alert("The true answer is 15 years");


    // question 7 


    let possibleAnswer = ["petra", "mansaf"];



    let question7 = prompt(`As you know , there are two famous things that you can find them in Jordan . you have 6 attempts to guess one of them ... `);


    let t = 1;

    while (question7.toLowerCase() !== possibleAnswer[0] && question7.toLowerCase() !== possibleAnswer[1]) {
        t++;
        question7 = prompt(`Try Again , there are two famous things that you can find them in Jordan . you have ${6 - t} attempts to guess one of them ... `);
        if (t == 6) {
            break;
        }
    }
    switch (question7.toLowerCase()) {
        case possibleAnswer[0]:
            grade++;
            alert("Great !! Petra is the most famous place in Jordan , and  mansaf is most famous meal in Jordan");
            break;
        case possibleAnswer[1]:
            grade++;
            alert("Great !! Petra is the most famous place in Jordan , and  mansaf is most famous meal in Jordan");
            break;
        default:
            alert(`The most famous things in Jordan are ${possibleAnswer[0]} and ${possibleAnswer[1]} `);

    }

    console.log("the last result ", grade, "out of 7");

    alert("Your result = " + grade + "out of 7");

}

