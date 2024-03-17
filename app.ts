import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    { message: "Select one of the operator to perform action",
     type: "list",
      name: "operator",
    choices:["Addition","Subtraction","Multiplication","Division","Percentage","Squareroot"] 
}
]);

console.log(answer);

if(answer.operator === "Addition"){
    console.log(`Your answer is _${answer.firstnumber + answer.secondnumber}_`);    
}else if(answer.operator === "Subtraction"){
    console.log(`Your answer is _${answer.firstnumber - answer.secondnumber}_`);    
}else if(answer.operator === "Multiplication"){
    console.log(`Your answer is _${answer.firstnumber * answer.secondnumber}_`);    
}else if(answer.operator === "Division"){
    console.log(`Your answer is _${answer.firstnumber / answer.secondnumber}_`);    
}else if(answer.operator === "Percentage"){
    let per = (( answer.secondnumber * 100) / (answer.firstnumber));
    let formated = (per.toFixed(2))
    console.log(`Your percentage is ${formated}%`);
         
}else if(answer.operator === "Squareroot"){
    console.log(`Your answer is _${answer.firstnumber ** answer.secondnumber}_`);    
}else{
    console.log("Please select a valid operation");
    
}
